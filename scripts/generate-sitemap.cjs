/**
 * Script de génération dynamique du sitemap.xml
 * Inclut automatiquement toutes les pages et tous les articles de blog.
 * Exécuté automatiquement lors du build (npm run build).
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://matricxconsulting.com';
const TODAY = new Date().toISOString().split('T')[0];

// ── Pages statiques (toutes les routes de App.tsx) ─────────────────
const staticPages = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/about/company', changefreq: 'monthly', priority: '0.7' },
  { path: '/about/careers', changefreq: 'monthly', priority: '0.7' },
  { path: '/about/experience', changefreq: 'monthly', priority: '0.7' },
  { path: '/about/media', changefreq: 'monthly', priority: '0.7' },
  { path: '/about/partners', changefreq: 'monthly', priority: '0.7' },
  { path: '/about/sustainability', changefreq: 'monthly', priority: '0.7' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/advisory', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/survey', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/technology', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/training', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

// ── Extraction des slugs d'articles depuis blogArticlesData.ts ──────
function extractArticleSlugs() {
  const dataPath = path.join(__dirname, '..', 'src', 'data', 'blogArticlesData.ts');
  const content = fs.readFileSync(dataPath, 'utf-8');
  
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

// ── Slugs des articles publiés dans Sanity ──────────────────────────
const SANITY_PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID || 'ozf76xbs';
const SANITY_DATASET = process.env.VITE_SANITY_DATASET || 'production';

async function fetchSanitySlugs() {
  const groq = '*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current, "date": publishedAt, _updatedAt}';
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2024-11-19/data/query/${SANITY_DATASET}?query=${encodeURIComponent(groq)}`;

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 10000);
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const { result } = await res.json();
    return (Array.isArray(result) ? result : [])
      .filter((a) => a && typeof a.slug === 'string' && a.slug.length > 0)
      .map((a) => ({
        slug: a.slug,
        lastmod: (a._updatedAt || a.date || '').split('T')[0] || TODAY,
      }));
  } catch (err) {
    // Le sitemap ne doit jamais faire échouer un déploiement : on se contente
    // des articles locaux et on signale l'incident dans les logs de build.
    console.warn(`⚠️  Articles Sanity non récupérés (${err.message}) — sitemap limité aux articles locaux.`);
    return [];
  }
}

// ── Génération du XML ───────────────────────────────────────────────
function generateSitemap(sanityArticles = []) {
  const slugs = extractArticleSlugs();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Pages statiques
  for (const page of staticPages) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Articles de blog locaux + articles publiés dans Sanity.
  // Un slug Sanity peut doubler un slug local : on dédoublonne.
  const vus = new Set();
  const articles = [
    ...slugs.map((slug) => ({ slug, lastmod: TODAY })),
    ...sanityArticles,
  ];

  for (const article of articles) {
    if (vus.has(article.slug)) continue;
    vus.add(article.slug);
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/blog/${article.slug}</loc>\n`;
    xml += `    <lastmod>${article.lastmod || TODAY}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += '</urlset>\n';
  return xml;
}

// ── Écriture du fichier ─────────────────────────────────────────────
(async () => {
  const sanityArticles = await fetchSanitySlugs();
  const sitemap = generateSitemap(sanityArticles);
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf-8');

  const slugs = extractArticleSlugs();
  const nouveaux = sanityArticles.filter((a) => !slugs.includes(a.slug)).length;
  console.log(
    `✅ sitemap.xml généré avec ${staticPages.length} pages + ${slugs.length} articles locaux + ${nouveaux} articles Sanity`
  );
})();
