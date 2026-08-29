/**
 * Tests e2e du blog (Puppeteer).
 *
 * Le scénario de régression : un article publié depuis le Studio dont le champ
 * "Image principale" n'a qu'un texte alternatif et aucun fichier uploadé.
 * L'API renvoie alors { _type: 'image', alt: '...' } — objet truthy mais sans
 * asset. urlFor() lève dessus ; appelé pendant le render, ce throw démontait
 * tout l'arbre React et laissait une page blanche.
 *
 * Usage : node tests/e2e/blog.e2e.mjs [baseUrl]
 */
import puppeteer from 'puppeteer';

const BASE = process.argv[2] || process.env.E2E_BASE_URL || 'http://localhost:4173';

/* ------------------------------------------------------------------ */
/* Fixtures                                                            */
/* ------------------------------------------------------------------ */

const block = (text) => ({
  _key: 'k' + text.length,
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [{ _key: 'c' + text.length, _type: 'span', marks: [], text }],
});

// Reproduit à l'identique le document renvoyé par la production.
const POST_SANS_ASSET = {
  _id: 'c57f14b7-46e2-49c5-bb40-b216424ad5e4',
  _type: 'blogPost',
  author: 'MatriCx Consulting',
  body: null,
  category: 'strategie',
  content: { fr: [block('Corps FR de test')], en: [block('EN test body')] },
  excerpt: { fr: 'Extrait de test', en: 'Test excerpt' },
  mainImage: { _type: 'image', alt: 'rien' }, // <-- aucun asset
  publishedAt: '2026-08-24T12:38:25.473Z',
  readTime: null,
  slug: { _type: 'slug', current: 'developpeur-ia' },
  title: { fr: 'Developpeur IA', en: 'Le digital est top' },
};

// Article avec une vraie image, pour vérifier le chemin nominal.
const POST_AVEC_ASSET = {
  ...POST_SANS_ASSET,
  _id: 'post-avec-image',
  slug: { _type: 'slug', current: 'article-avec-image' },
  title: { fr: 'Article avec image', en: 'Post with image' },
  mainImage: {
    _type: 'image',
    alt: 'photo',
    asset: { _type: 'reference', _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg' },
  },
};

// Champs manquants un peu partout : ne doit rien casser.
const POST_MINIMAL = {
  _id: 'post-minimal',
  _type: 'blogPost',
  slug: { _type: 'slug', current: 'article-minimal' },
  title: null,
  excerpt: null,
  publishedAt: null,
  category: null,
  mainImage: null,
  content: null,
  body: null,
};

// Doit être ignoré par le front (brouillon + slug absent).
const POST_INVALIDE = { _id: 'drafts.xyz', _type: 'blogPost', slug: null, title: { fr: 'Brouillon' } };

const SCENARIOS = {
  'assetless-uniquement': [POST_SANS_ASSET],
  'jeu-complet': [POST_SANS_ASSET, POST_AVEC_ASSET, POST_MINIMAL, POST_INVALIDE],
  'aucun-article': [],
};

/* ------------------------------------------------------------------ */
/* Harnais                                                             */
/* ------------------------------------------------------------------ */

const results = [];
let currentTest = null;

const check = (label, cond, detail = '') => {
  results.push({ test: currentTest, label, ok: Boolean(cond), detail });
  console.log(`   ${cond ? 'PASS' : 'FAIL'}  ${label}${!cond && detail ? ` -> ${detail}` : ''}`);
};

async function withPage(browser, scenario, fn) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', (e) => pageErrors.push(e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(m.text());
  });

  // Toutes les requêtes vers l'API Sanity sont servies depuis la fixture :
  // le test est déterministe et n'écrit jamais dans le dataset.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = req.url();
    if (url.includes('.api.sanity.io') || url.includes('apicdn.sanity.io')) {
      // On reproduit la sémantique GROQ utilisée par le front : la requête
      // liste renvoie un tableau, la requête `[0]` renvoie un objet (ou null).
      const parsed = new URL(url);
      const groq = parsed.searchParams.get('query') || '';
      const slug = parsed.searchParams.get('$slug');
      const posts = SCENARIOS[scenario];

      let result;
      if (groq.includes('[0]')) {
        // Le slug arrive soit en paramètre GROQ ($slug), soit interpolé
        // directement dans la requête (forme historique) : on gère les deux
        // pour que le test reste valable contre l'ancien et le nouveau code.
        const wanted = slug
          ? JSON.parse(slug)
          : (groq.match(/slug\.current\s*==\s*"([^"]*)"/) || [])[1] ?? null;
        result = posts.find((p) => p.slug?.current === wanted) ?? null;
      } else {
        result = posts;
      }

      return req.respond({
        status: 200,
        contentType: 'application/json',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ result, ms: 1 }),
      });
    }
    // On ne va pas chercher les vraies images sur le CDN Sanity.
    if (url.includes('cdn.sanity.io')) {
      return req.respond({
        status: 200,
        contentType: 'image/gif',
        body: Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'),
      });
    }
    req.continue();
  });

  try {
    await fn(page, { pageErrors, consoleErrors });
  } finally {
    await page.close();
  }
}

const settle = (page, ms = 1200) => page.evaluate((d) => new Promise((r) => setTimeout(r, d)), ms);

/* ------------------------------------------------------------------ */
/* Tests                                                               */
/* ------------------------------------------------------------------ */

async function testListeAvecImageSansAsset(browser) {
  currentTest = 'Liste /blog — article dont mainImage n’a pas d’asset';
  console.log(`\n▶ ${currentTest}`);

  await withPage(browser, 'assetless-uniquement', async (page, { pageErrors }) => {
    await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle2', timeout: 30000 });
    await settle(page);

    check('aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));

    const bodyText = await page.evaluate(() => document.body.innerText);
    check('la page n’est pas blanche', bodyText.trim().length > 500, `${bodyText.trim().length} caractères`);
    check('le titre Sanity est affiché', bodyText.includes('Developpeur IA'));
    check('aucun "[object Object]" rendu', !(await page.content()).includes('[object Object]'));

    // Toutes les vignettes doivent avoir un src exploitable.
    const badImgs = await page.$$eval('article img', (imgs) =>
      imgs.map((i) => i.getAttribute('src')).filter((s) => !s || s === 'null' || s.includes('[object'))
    );
    check('toutes les vignettes ont un src valide', badImgs.length === 0, JSON.stringify(badImgs));

    // Le lien de l'article doit pointer vers le bon slug.
    const hrefs = await page.$$eval('a[href^="/blog/"]', (as) => as.map((a) => a.getAttribute('href')));
    check('lien vers /blog/developpeur-ia présent', hrefs.includes('/blog/developpeur-ia'));
    check('aucun lien /blog/undefined', !hrefs.some((h) => h.includes('undefined')), JSON.stringify(hrefs.slice(0, 5)));
  });
}

async function testArticleAvecImageSansAsset(browser) {
  currentTest = 'Article /blog/developpeur-ia — le crash d’origine';
  console.log(`\n▶ ${currentTest}`);

  await withPage(browser, 'assetless-uniquement', async (page, { pageErrors }) => {
    await page.goto(`${BASE}/blog/developpeur-ia`, { waitUntil: 'networkidle2', timeout: 30000 });
    await settle(page);

    check('aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));
    check(
      'aucun throw "Unable to resolve image URL"',
      !pageErrors.some((e) => e.includes('Unable to resolve image URL')),
      pageErrors.join(' | ')
    );

    const bodyText = await page.evaluate(() => document.body.innerText);
    check('la page n’est pas blanche', bodyText.trim().length > 400, `${bodyText.trim().length} caractères`);
    check('le titre est rendu en <h1>', (await page.$eval('h1', (h) => h.innerText)).includes('Developpeur IA'));
    check('l’extrait est affiché', bodyText.includes('Extrait de test'));
    check('le corps PortableText est rendu', bodyText.includes('Corps FR de test'));
    check('pas de redirection vers /blog', new URL(page.url()).pathname === '/blog/developpeur-ia', page.url());

    // Sans asset, la section image doit simplement être omise (pas une img cassée).
    const broken = await page.$$eval('img', (imgs) =>
      imgs.filter((i) => i.src && !i.complete).map((i) => i.src)
    );
    check('aucune image cassée', broken.length === 0, JSON.stringify(broken));
  });
}

async function testArticleAvecVraieImage(browser) {
  currentTest = 'Article /blog/article-avec-image — chemin nominal';
  console.log(`\n▶ ${currentTest}`);

  await withPage(browser, 'jeu-complet', async (page, { pageErrors }) => {
    await page.goto(`${BASE}/blog/article-avec-image`, { waitUntil: 'networkidle2', timeout: 30000 });
    await settle(page);

    check('aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));
    check('le titre est rendu', (await page.$eval('h1', (h) => h.innerText)).includes('Article avec image'));

    const heroSrc = await page.$$eval('img', (imgs) =>
      imgs.map((i) => i.getAttribute('src')).find((s) => s && s.includes('cdn.sanity.io'))
    );
    check('l’image principale pointe vers le CDN Sanity', Boolean(heroSrc), String(heroSrc));
  });
}

async function testDocumentsIncompletsEtInvalides(browser) {
  currentTest = 'Liste /blog — documents incomplets et brouillons';
  console.log(`\n▶ ${currentTest}`);

  await withPage(browser, 'jeu-complet', async (page, { pageErrors }) => {
    await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle2', timeout: 30000 });
    await settle(page);

    check('aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));

    const hrefs = await page.$$eval('a[href^="/blog/"]', (as) => as.map((a) => a.getAttribute('href')));
    check('l’article sans titre est listé sans casser', hrefs.includes('/blog/article-minimal'));
    check('le brouillon sans slug est écarté', !hrefs.some((h) => h.includes('null') || h.includes('undefined')));

    const bodyText = await page.evaluate(() => document.body.innerText);
    check('le brouillon n’apparaît pas', !bodyText.includes('Brouillon'));
    check('aucun "Invalid Date" affiché', !bodyText.includes('Invalid Date'));
    check('aucun "NaN" affiché', !bodyText.includes('NaN'));
  });
}

async function testTriStable(browser) {
  currentTest = 'Liste /blog — l’ordre des articles est stable';
  console.log(`\n▶ ${currentTest}`);

  await withPage(browser, 'jeu-complet', async (page) => {
    await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle2', timeout: 30000 });
    await settle(page);

    const titres = () => page.$$eval('article h3', (hs) => hs.map((h) => h.innerText));
    const avant = await titres();

    // Un re-render (ouverture d'un menu) ne doit pas réordonner la liste :
    // la popularité était tirée au sort à chaque render.
    await page.click('button[class*="rounded-lg"]').catch(() => {});
    await settle(page, 500);
    const apres = await titres();

    check('ordre identique après un re-render', JSON.stringify(avant) === JSON.stringify(apres),
      `avant=${JSON.stringify(avant.slice(0, 3))} après=${JSON.stringify(apres.slice(0, 3))}`);
  });
}

async function testSanityIndisponible(browser) {
  currentTest = 'Liste /blog — API Sanity en erreur';
  console.log(`\n▶ ${currentTest}`);

  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', (e) => pageErrors.push(e.message));
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (req.url().includes('sanity.io')) return req.respond({ status: 500, body: 'boom' });
    req.continue();
  });

  try {
    await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle2', timeout: 30000 });
    await settle(page);
    check('aucune exception non capturée', pageErrors.length === 0, pageErrors.join(' | '));
    const bodyText = await page.evaluate(() => document.body.innerText);
    check('les articles locaux restent affichés', bodyText.includes('Tous nos articles'));
    check('la page n’est pas blanche', bodyText.trim().length > 500);
  } finally {
    await page.close();
  }
}

async function testAccesDirectRoutes(browser) {
  currentTest = 'Accès direct aux routes (rewrite SPA)';
  console.log(`\n▶ ${currentTest}`);

  for (const route of ['/blog', '/blog/developpeur-ia']) {
    await withPage(browser, 'assetless-uniquement', async (page) => {
      const res = await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
      check(`${route} répond 200 (pas de 404)`, res.status() === 200, `HTTP ${res.status()}`);
    });
  }
}

/* ------------------------------------------------------------------ */

(async () => {
  console.log(`Tests e2e blog — cible ${BASE}\n${'='.repeat(60)}`);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    await testAccesDirectRoutes(browser);
    await testListeAvecImageSansAsset(browser);
    await testArticleAvecImageSansAsset(browser);
    await testArticleAvecVraieImage(browser);
    await testDocumentsIncompletsEtInvalides(browser);
    await testTriStable(browser);
    await testSanityIndisponible(browser);
  } finally {
    await browser.close();
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${results.length - failed.length}/${results.length} assertions réussies`);
  if (failed.length) {
    console.log('\nÉchecs :');
    for (const f of failed) console.log(`  - [${f.test}] ${f.label}${f.detail ? ` -> ${f.detail}` : ''}`);
  }
  process.exit(failed.length ? 1 : 0);
})().catch((e) => {
  console.error('Erreur du harnais :', e);
  process.exit(1);
});
