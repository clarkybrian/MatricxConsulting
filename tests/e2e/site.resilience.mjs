/**
 * Résilience de tout le site face à des contenus Sanity incomplets.
 *
 * Chaque page est chargée trois fois :
 *   1. "reel"        — données réelles du dataset de production ;
 *   2. "dégradé"     — tous les champs localisés vides, toutes les images sans
 *                      asset, toutes les dates nulles (ce que produit un
 *                      document créé puis publié sans être rempli) ;
 *   3. "hors ligne"  — l'API Sanity répond 500.
 *
 * Dans les trois cas la page doit s'afficher : ni exception non capturée,
 * ni écran blanc.
 *
 * Usage : node tests/e2e/site.resilience.mjs [baseUrl]
 */
import puppeteer from 'puppeteer';

const BASE = process.argv[2] || 'http://localhost:5173';

const ROUTES = [
  '/',
  '/about',
  '/about/company',
  '/about/careers',
  '/about/experience',
  '/about/media',
  '/about/partners',
  '/about/sustainability',
  '/services',
  '/services/advisory',
  '/services/survey',
  '/services/technology',
  '/services/training',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/url-inexistante-test-404',
  '/blog/slug-qui-nexiste-pas',
];

/* ---------- Documents volontairement incomplets, par type ---------- */

// Image "remplie" dans le Studio mais sans fichier uploadé : objet truthy,
// aucun asset. C'est la forme exacte qui faisait planter le site.
const IMAGE_SANS_ASSET = { _type: 'image', alt: 'texte alternatif seul' };

const DEGRADE = {
  blogPost: [{
    _id: 'degrade-blog', _type: 'blogPost',
    slug: { _type: 'slug', current: 'article-degrade' },
    title: null, excerpt: null, content: null, body: null,
    publishedAt: null, category: null, author: null, readTime: null,
    mainImage: IMAGE_SANS_ASSET, tags: null,
  }],
  teamMember: [{
    _id: 'degrade-team', _type: 'teamMember',
    name: 'Sans Poste', position: null, description: null, photo: IMAGE_SANS_ASSET,
  }],
  partner: [{
    _id: 'degrade-partner', _type: 'partner',
    name: 'Partenaire Sans Logo', logo: IMAGE_SANS_ASSET, url: null,
  }],
  project: [{
    _id: 'degrade-project', _type: 'project',
    title: null, description: null, impact: null, duration: null,
    client: null, tags: null, image: IMAGE_SANS_ASSET,
  }],
  testimonial: [{
    _id: 'degrade-testi', _type: 'testimonial',
    quote: null, author: null, position: null, company: null, image: IMAGE_SANS_ASSET,
  }],
  jobOpening: [{
    _id: 'degrade-job', _type: 'jobOpening',
    title: null, department: null, location: null, type: null,
    description: null, requirements: null, publishedAt: null,
  }],
  pressRelease: [{
    _id: 'degrade-press', _type: 'pressRelease',
    title: null, summary: null, date: null, publishedAt: null, source: null, link: null,
  }],
  mediaAppearance: [{
    _id: 'degrade-media', _type: 'mediaAppearance',
    title: null, type: null, date: null, platform: null, link: null,
    image: IMAGE_SANS_ASSET, description: null,
  }],
  upcomingEvent: [{
    _id: 'degrade-event', _type: 'upcomingEvent',
    title: null, date: null, location: null, role: null, description: null, link: null,
  }],
  // Singletons : présents mais entièrement vides.
  homeStats: [{ _id: 'degrade-home', _type: 'homeStats', clients: null, experience: null, satisfaction: null }],
  experienceStats: [{ _id: 'degrade-exp', _type: 'experienceStats', projects: null, countries: null, satisfaction: null, impact: null }],
  podcastStats: [{ _id: 'degrade-pod', _type: 'podcastStats', episodes: null, listeners: null, rating: null }],
};

/* ------------------------------- harnais ------------------------------- */

const results = [];
const check = (mode, route, label, ok, detail = '') => {
  results.push({ mode, route, label, ok: Boolean(ok), detail });
  if (!ok) console.log(`   FAIL [${mode}] ${route} — ${label}${detail ? ` -> ${detail}` : ''}`);
};

const settle = (page, ms = 1500) => page.evaluate((d) => new Promise((r) => setTimeout(r, d)), ms);

// Détermine le type interrogé par une requête GROQ pour servir la bonne fixture.
const typeFromQuery = (groq) => {
  const m = groq.match(/_type\s*==\s*"([^"]+)"/);
  return m ? m[1] : null;
};

async function visiter(browser, route, mode) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });

  const pageErrors = [];
  page.on('pageerror', (e) => pageErrors.push(e.message));

  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = req.url();
    const estApi = url.includes('.api.sanity.io') || url.includes('apicdn.sanity.io');

    if (mode === 'reel') {
      if (url.includes('cdn.sanity.io') && !estApi) {
        // Images réelles : on évite le trafic mais on renvoie un vrai pixel.
        return req.respond({
          status: 200, contentType: 'image/gif',
          body: Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'),
        });
      }
      return req.continue();
    }

    if (estApi) {
      if (mode === 'hors-ligne') {
        return req.respond({ status: 500, contentType: 'application/json', body: '{"error":"boom"}' });
      }
      const groq = new URL(url).searchParams.get('query') || '';
      const type = typeFromQuery(groq);
      const docs = (type && DEGRADE[type]) || [];
      // Une requête `[0]` attend un objet, pas un tableau.
      const result = groq.includes('[0]') ? (docs[0] ?? null) : docs;
      return req.respond({
        status: 200, contentType: 'application/json',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ result, ms: 1 }),
      });
    }

    if (url.includes('cdn.sanity.io')) {
      return req.respond({
        status: 200, contentType: 'image/gif',
        body: Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'),
      });
    }
    req.continue();
  });

  try {
    const res = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle2', timeout: 45000 });

    // Les pages sont chargées en lazy : on attend le rendu réel plutôt qu'un
    // délai fixe, sinon on mesure encore le fallback de <Suspense>.
    const rendu = await page.waitForSelector('header', { timeout: 15000 }).then(() => true).catch(() => false);
    check(mode, route, 'page rendue (header présent)', rendu);

    // Faire défiler pour déclencher le chargement des images lazy avant de les auditer.
    await page.evaluate(async () => {
      const pas = window.innerHeight;
      for (let y = 0; y < document.body.scrollHeight; y += pas) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await settle(page);

    // 304 = ressource en cache, équivalent à 200 pour ce test.
    check(mode, route, 'réponse HTTP correcte', [200, 304].includes(res.status()), `HTTP ${res.status()}`);
    check(mode, route, 'aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));

    const text = await page.evaluate(() => document.body.innerText);
    check(mode, route, 'page non blanche', text.trim().length > 300, `${text.trim().length} caractères`);

    const html = await page.content();
    check(mode, route, 'aucun "[object Object]"', !html.includes('[object Object]'));
    check(mode, route, 'aucun "Invalid Date"', !text.includes('Invalid Date'));
    check(mode, route, 'aucun "undefined" affiché', !/\bundefined\b/.test(text), text.match(/.{0,40}undefined.{0,40}/)?.[0] ?? '');
    check(mode, route, 'aucun repli d’erreur déclenché', !text.includes("Cette page n'a pas pu s'afficher"));

    // evaluate + Array.from : $$eval lève quand la page ne contient aucun <img>.
    // Une image lazy non encore chargée a complete === false ; seule une image
    // complete avec naturalWidth 0 est réellement cassée.
    const brokenImgs = await page.evaluate(() =>
      Array.from(document.querySelectorAll('img'))
        .filter((i) => i.getAttribute('src') && i.complete && i.naturalWidth === 0)
        .map((i) => i.getAttribute('src'))
    );
    check(mode, route, 'aucune image cassée', brokenImgs.length === 0, JSON.stringify(brokenImgs).slice(0, 200));
  } catch (e) {
    check(mode, route, 'navigation aboutie', false, e.message);
  } finally {
    await page.close();
  }
}

(async () => {
  console.log(`Résilience du site — ${BASE}`);
  console.log(`${ROUTES.length} routes x 3 modes\n${'='.repeat(64)}`);

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    for (const mode of ['reel', 'degrade', 'hors-ligne']) {
      process.stdout.write(`\n[${mode}] `);
      for (const route of ROUTES) {
        const avant = results.filter((r) => !r.ok).length;
        await visiter(browser, route, mode);
        process.stdout.write(results.filter((r) => !r.ok).length > avant ? 'x' : '.');
      }
    }
  } finally {
    await browser.close();
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\n\n${'='.repeat(64)}`);
  console.log(`${results.length - failed.length}/${results.length} assertions réussies`);
  if (failed.length) {
    console.log('\nÉchecs :');
    for (const f of failed) console.log(`  - [${f.mode}] ${f.route} — ${f.label}${f.detail ? ` -> ${f.detail}` : ''}`);
  }
  process.exit(failed.length ? 1 : 0);
})().catch((e) => {
  console.error('Erreur du harnais :', e);
  process.exit(1);
});
