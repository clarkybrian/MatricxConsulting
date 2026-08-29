/**
 * Vérification sur DONNÉES RÉELLES : aucun mock, le navigateur interroge
 * directement le dataset Sanity de production.
 *
 * À lancer sur un port autorisé par la config CORS Sanity (5173 ou 3000).
 * Usage : node tests/e2e/blog.reel.mjs [baseUrl] [slugAttendu]
 */
import puppeteer from 'puppeteer';

const BASE = process.argv[2] || 'http://localhost:5173';
const SLUG_ATTENDU = process.argv[3] || null;
const SHOT_DIR = process.env.SHOT_DIR || 'tests/e2e/screenshots';

const results = [];
const check = (label, ok, detail = '') => {
  results.push({ label, ok: Boolean(ok), detail });
  console.log(`   ${ok ? 'PASS' : 'FAIL'}  ${label}${!ok && detail ? ` -> ${detail}` : ''}`);
};

const settle = (page, ms = 2500) => page.evaluate((d) => new Promise((r) => setTimeout(r, d)), ms);

const attach = (page) => {
  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', (e) => pageErrors.push(e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(m.text());
  });
  return { pageErrors, consoleErrors };
};

(async () => {
  const fs = await import('fs');
  fs.mkdirSync(SHOT_DIR, { recursive: true });

  // Ce que le dataset contient réellement, pour piloter les assertions.
  const groq = '*[_type == "blogPost" && defined(slug.current)]|order(publishedAt desc){_id,title,slug,mainImage,publishedAt}';
  const api = `https://ozf76xbs.api.sanity.io/v2024-11-19/data/query/production?query=${encodeURIComponent(groq)}`;
  const posts = (await (await fetch(api)).json()).result || [];

  console.log(`Vérification sur données réelles — ${BASE}`);
  console.log(`Dataset : ${posts.length} article(s) publié(s)`);
  for (const p of posts) {
    const asset = p.mainImage?.asset ? 'avec asset' : (p.mainImage ? 'SANS asset' : 'pas d\'image');
    console.log(`  - ${p.slug?.current}  «${p.title?.fr ?? '(sans titre)'}»  [${asset}]`);
  }

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  try {
    /* ---------------- Liste ---------------- */
    console.log('\n▶ Page /blog (données réelles)');
    {
      const page = await browser.newPage();
      await page.setViewport({ width: 1400, height: 1000 });
      const { pageErrors } = attach(page);

      await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle2', timeout: 45000 });
      await settle(page);

      check('aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));

      const text = await page.evaluate(() => document.body.innerText);
      check('la page n’est pas blanche', text.trim().length > 800, `${text.trim().length} caractères`);
      check('aucun "[object Object]"', !(await page.content()).includes('[object Object]'));
      check('aucun "Invalid Date"', !text.includes('Invalid Date'));

      const hrefs = await page.$$eval('a[href^="/blog/"]', (as) => as.map((a) => a.getAttribute('href')));
      for (const p of posts) {
        check(`l’article Sanity «${p.slug.current}» est listé`, hrefs.includes(`/blog/${p.slug.current}`));
      }
      check('aucun lien cassé', !hrefs.some((h) => /undefined|null/.test(h)), JSON.stringify(hrefs.filter((h) => /undefined|null/.test(h))));

      // Les vignettes doivent toutes être réellement chargées.
      const imgs = await page.$$eval('article img', (els) =>
        els.map((i) => ({ src: i.getAttribute('src'), ok: i.complete && i.naturalWidth > 0 }))
      );
      check('toutes les vignettes sont chargées', imgs.every((i) => i.ok),
        JSON.stringify(imgs.filter((i) => !i.ok)));

      await page.screenshot({ path: `${SHOT_DIR}/blog-liste.png`, fullPage: false });
      console.log(`   → capture : ${SHOT_DIR}/blog-liste.png`);
      await page.close();
    }

    /* ---------------- Chaque article Sanity ---------------- */
    for (const p of posts) {
      const slug = p.slug.current;
      console.log(`\n▶ Article /blog/${slug} (données réelles)`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1400, height: 1000 });
      const { pageErrors } = attach(page);

      await page.goto(`${BASE}/blog/${slug}`, { waitUntil: 'networkidle2', timeout: 45000 });
      await settle(page);

      check('aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));
      check('aucun throw "Unable to resolve image URL"',
        !pageErrors.some((e) => e.includes('Unable to resolve image URL')), pageErrors.join(' | '));

      const text = await page.evaluate(() => document.body.innerText);
      check('la page n’est pas blanche', text.trim().length > 500, `${text.trim().length} caractères`);
      check('pas de redirection vers /blog', new URL(page.url()).pathname === `/blog/${slug}`, page.url());

      const h1 = await page.$eval('h1', (h) => h.innerText).catch(() => null);
      check('un <h1> est rendu', Boolean(h1 && h1.trim()), String(h1));
      if (p.title?.fr) check('le <h1> porte le titre Sanity', h1?.includes(p.title.fr), `h1="${h1}"`);

      const broken = await page.$$eval('img', (els) =>
        els.filter((i) => i.getAttribute('src') && (!i.complete || i.naturalWidth === 0)).map((i) => i.src)
      );
      check('aucune image cassée', broken.length === 0, JSON.stringify(broken));

      // Image principale : présente si (et seulement si) l'asset existe.
      const heroCdn = await page.$$eval('img', (els) =>
        els.map((i) => i.getAttribute('src')).filter((s) => s && s.includes('cdn.sanity.io'))
      );
      if (p.mainImage?.asset) {
        check('l’image principale Sanity est affichée', heroCdn.length > 0);
      } else {
        check('sans asset : aucune image Sanity tentée (pas de crash)', heroCdn.length === 0, JSON.stringify(heroCdn));
      }

      await page.screenshot({ path: `${SHOT_DIR}/article-${slug}.png`, fullPage: false });
      console.log(`   → capture : ${SHOT_DIR}/article-${slug}.png`);
      await page.close();
    }

    if (SLUG_ATTENDU) {
      const trouve = posts.some((p) => p.slug?.current === SLUG_ATTENDU);
      console.log(`\n▶ Article attendu «${SLUG_ATTENDU}»`);
      check('présent dans le dataset et vérifié ci-dessus', trouve);
    }
  } finally {
    await browser.close();
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${results.length - failed.length}/${results.length} assertions réussies`);
  if (failed.length) {
    console.log('\nÉchecs :');
    for (const f of failed) console.log(`  - ${f.label}${f.detail ? ` -> ${f.detail}` : ''}`);
  }
  process.exit(failed.length ? 1 : 0);
})().catch((e) => {
  console.error('Erreur du harnais :', e);
  process.exit(1);
});
