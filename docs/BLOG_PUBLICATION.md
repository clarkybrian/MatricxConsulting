# Publier un article de blog

## Depuis le Studio Sanity

1. **Articles de Blog** → **+** (nouveau document)
2. Remplir au minimum :
   - **Titre → Français** (l'anglais est facultatif : le français sert de repli)
   - **Slug (URL)** → bouton *Generate*
3. Facultatif mais recommandé : Résumé, Image principale, Contenu, Catégorie, Date de publication, Temps de lecture
4. **Publish**

L'article apparaît sur `/blog` en quelques secondes (latence CDN Sanity mesurée : ~2 s).

## Ce qui ne casse plus rien

Le site tolère désormais un document incomplet. Aucun de ces cas ne provoque
d'erreur ni de page blanche :

| Situation | Comportement |
|---|---|
| **Image principale : texte alternatif saisi, aucun fichier uploadé** | La section image est omise. *(C'était la cause du plantage : `urlFor()` levait une exception pendant le rendu, ce qui vidait toute la page.)* |
| Aucune image principale | Image de repli locale dans la liste, pas d'image sur l'article |
| Titre vide | « Sans titre » / « Untitled » |
| Titre en français seulement | Le français s'affiche aussi en version anglaise |
| Résumé, catégorie, auteur, temps de lecture vides | Champ masqué ou valeur par défaut |
| Date de publication vide | Date masquée (plus de « Invalid Date ») |
| Contenu vide | En-tête de l'article affiché, corps vide |
| API Sanity indisponible | Les articles locaux restent affichés |

## Champs

- Le corps de l'article est lu depuis `content` (le champ du Studio). `body`
  reste accepté pour les anciens documents.
- La catégorie Sanity est convertie vers les rubriques du site :
  `cx`/`digital` → Transformation Digitale, `strategie` → Innovation & Stratégie,
  `formation` → Leadership & Management, `etudes` → Méthodologie Conseil.
  Une catégorie absente ou inconnue retombe sur Transformation Digitale.

## Référencement

`npm run build` régénère `public/sitemap.xml` en interrogeant Sanity : les
articles publiés depuis le Studio y sont inclus automatiquement. Si Sanity est
injoignable au moment du build, le sitemap se limite aux articles locaux et le
build réussit quand même.

⚠️ Le sitemap est généré **au build**. Un article publié dans le Studio apparaît
immédiatement sur le site, mais n'entre dans le sitemap qu'au déploiement
suivant.

## Tests

Le serveur doit tourner sur le port **5173** (seuls `localhost:3000` et
`localhost:5173` sont autorisés par la configuration CORS de Sanity).

Puppeteer n'est pas une dépendance du projet (il alourdirait les builds Vercel
de ~150 Mo) : on l'installe ponctuellement.

```bash
npm install --no-save puppeteer

npm run build
npm run preview:test          # sert dist/ sur http://localhost:5173

npm run test:e2e              # régression blog (données simulées)
npm run test:e2e:reel         # rendu réel des articles Sanity publiés
npm run test:resilience       # 19 routes x 3 modes (réel / dégradé / hors ligne)
npm run test:all              # les trois
```

Le mode *dégradé* injecte, pour chaque type de contenu Sanity, un document dont
tous les champs sont vides et toutes les images sans fichier — la forme exacte
qui faisait tomber le site. Les captures d'écran sont écrites dans
`tests/e2e/screenshots/`.
