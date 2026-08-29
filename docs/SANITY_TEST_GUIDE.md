# 🧪 Guide de test Sanity CMS

## ✅ Vérification de l'installation

### 1. Vérifier que les dépendances sont installées

```bash
npm list @sanity/client @sanity/image-url next-sanity sanity @sanity/cli
```

**Résultat attendu :**
```
MatricxConsulting@0.0.0 X:\MesApplis\BiendouCorp\MatricxConsulting
├── @sanity/cli@4.16.0
├── @sanity/client@7.13.0
├── @sanity/image-url@1.2.0
├── next-sanity@10.1.4
└── sanity@4.16.0
```

### 2. Vérifier les variables d'environnement

Vérifiez que `.env.local` existe et contient :

```bash
VITE_SANITY_PROJECT_ID=ozf76xbs
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-11-19
VITE_SANITY_TOKEN=<VOTRE_TOKEN_SANITY>   # a definir en variable d environnement, jamais en clair
```

---

## 🚀 Lancement de Sanity Studio

### Commande
```bash
npm run sanity
```

### Résultat attendu
```
✔ Checking for updates...
✔ Compiling...
✔ Compiled successfully!

┌──────────────────────────────────────────────────┐
│                                                  │
│   Sanity Studio running at:                     │
│   http://localhost:3333                          │
│                                                  │
│   To open browser, press Ctrl + Click on the    │
│   link above or copy/paste it into your browser │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Actions à effectuer
1. ✅ Ouvrir http://localhost:3333
2. ✅ Se connecter avec votre compte Sanity
3. ✅ Vérifier que l'interface Studio apparaît
4. ✅ Vérifier les schémas dans le menu de gauche :
   - Page d'Accueil
   - Page À Propos
   - Page Services
   - Articles de Blog
   - Témoignages
   - Études de Cas

---

## 📝 Tests de contenu

### Test 1 : Ajouter un témoignage

1. Dans Sanity Studio, cliquez sur **"Témoignages"**
2. Cliquez sur **"Créer"** (bouton +)
3. Remplissez les champs :
   - **Nom** : Jean Dupont
   - **Poste** : CEO
   - **Entreprise** : TechStart Cameroun
   - **Témoignage (FR)** : MatriCx a transformé notre approche client. Résultats exceptionnels !
   - **Témoignage (EN)** : MatriCx transformed our customer approach. Exceptional results!
   - **Note** : 5
   - **Afficher sur la page d'accueil** : ✓ Coché
   - **Ordre** : 1
4. Cliquez **"Publish"**
5. **Vérification** : Ouvrez http://localhost:3000 (site web)
   - Allez sur la page d'accueil
   - Scrollez jusqu'à la section Témoignages
   - ✅ Rafraîchissez (F5) pour voir le nouveau témoignage dans le carousel

---

### Test 2 : Modifier les statistiques de la page d'accueil

1. Dans Sanity Studio, cliquez sur **"Page d'Accueil"**
2. Scrollez jusqu'à **"Stats"**
3. Cliquez **"+ Add item"** trois fois pour créer 3 stats
4. Remplissez :
   - **Stat 1** :
     - Valeur : `150+`
     - Label FR : `Clients satisfaits`
     - Label EN : `Satisfied clients`
   - **Stat 2** :
     - Valeur : `5 ans`
     - Label FR : `D'expérience`
     - Label EN : `Of experience`
   - **Stat 3** :
     - Valeur : `98%`
     - Label FR : `Taux de satisfaction`
     - Label EN : `Satisfaction rate`
5. Cliquez **"Publish"**
6. **Vérification** : Rafraîchissez http://localhost:3000
   - Section Hero en haut de page
   - ✅ Les nouvelles stats devraient apparaître

---

### Test 3 : Ajouter un article de blog

1. Dans Sanity Studio, cliquez sur **"Articles de Blog"**
2. Cliquez **"Créer"**
3. Remplissez :
   - **Titre (FR)** : L'importance de l'expérience client en 2025
   - **Titre (EN)** : The importance of customer experience in 2025
   - **Slug** : Cliquez sur "Generate" → `importance-experience-client-2025`
   - **Image principale** : Upload une image (JPG/PNG)
   - **Résumé (FR)** : Découvrez pourquoi l'expérience client est cruciale...
   - **Résumé (EN)** : Discover why customer experience is crucial...
   - **Contenu (FR)** : Écrivez un paragraphe avec du texte formaté
   - **Contenu (EN)** : Write a paragraph with formatted text
   - **Auteur** : Dr. Sarah Mensah
   - **Catégorie** : CX
   - **Tags** : experience-client, strategie, digital
   - **Article mis en avant** : ✓ Coché
4. Cliquez **"Publish"**
5. **Vérification** : Ouvrez http://localhost:3000/blog
   - ✅ Rafraîchissez (F5) pour voir votre article dans la liste
   - ✅ Filtrez par "Transformation Digitale" → Article visible
   - ✅ Cliquez sur "Plus populaires" → Article en haut

---

### Test 4 : Modifier les valeurs de l'entreprise

1. Dans Sanity Studio, **"Page d'Accueil"**
2. Scrollez jusqu'à **"Section Valeurs"**
3. Modifiez **"Titre"** :
   - FR : `Nos Valeurs Fondamentales`
   - EN : `Our Core Values`
4. Modifiez **"Sous-titre"** :
   - FR : `Chez MatriCx, nos valeurs guident chacune de nos actions`
   - EN : `At MatriCx, our values guide every action we take`
5. Ajoutez une nouvelle valeur :
   - **Icône** : `Users`
   - **Titre (FR)** : `Collaboration`
   - **Titre (EN)** : `Collaboration`
   - **Description (FR)** : `Nous croyons au travail d'équipe et à la synergie`
   - **Description (EN)** : `We believe in teamwork and synergy`
6. Cliquez **"Publish"**
7. **Vérification** : Rafraîchissez http://localhost:3000
   - Section Valeurs au milieu de la page
   - ✅ Nouveau titre/sous-titre visible
   - ✅ Nouvelle valeur "Collaboration" ajoutée

---

### Test 5 : Modifier les services

1. Dans Sanity Studio, **"Page Services"**
2. Modifiez le service **"MatriCx Advisory"**
3. Changez le **Slogan (FR)** : `Excellence en conseil stratégique`
4. Changez le **Slogan (EN)** : `Excellence in strategic consulting`
5. Ajoutez une nouvelle caractéristique :
   - FR : `Analyses approfondies`
   - EN : `In-depth analysis`
6. Cliquez **"Publish"**
7. **Vérification** : Ouvrez http://localhost:3000/services
   - ✅ Rafraîchissez (F5) pour voir le nouveau slogan sur la card Advisory
   - ✅ Nouvelle caractéristique apparaît dans la liste

---

## 🔧 Tests techniques

### Test 6 : Vérifier le fallback

**Objectif** : S'assurer que le site fonctionne même si Sanity est vide

1. **Simuler une erreur Sanity** :
   - Ouvrez `.env.local`
   - Changez temporairement `VITE_SANITY_PROJECT_ID=WRONG_ID`
   - Sauvegardez

2. **Redémarrez le site** :
   ```bash
   npm run dev
   ```

3. **Vérification** :
   - Ouvrez http://localhost:3000
   - ✅ Le site devrait fonctionner normalement
   - ✅ Les données hardcodées devraient apparaître
   - ✅ Aucune page ne devrait planter

4. **Restaurez** :
   - Remettez `VITE_SANITY_PROJECT_ID=ozf76xbs`
   - Redémarrez `npm run dev`

---

### Test 7 : Vérifier les hooks React

**Ouvrez la console navigateur (F12) et vérifiez qu'il n'y a pas d'erreurs :**

```
Console → Aucune erreur rouge
Network → Requêtes Sanity API (cdn.sanity.io) → Status 200
```

**Si erreur 401 (Unauthorized)** :
- Vérifiez que `VITE_SANITY_TOKEN` est correct dans `.env.local`
- Redémarrez `npm run dev`

**Si erreur 404 (Not Found)** :
- Vérifiez `VITE_SANITY_PROJECT_ID` et `VITE_SANITY_DATASET`

---

## 📊 Tests de performance

### Test 8 : Temps de chargement

1. Ouvrez http://localhost:3000
2. Ouvrez DevTools → Network
3. Rafraîchissez la page (Ctrl+R)
4. **Vérifications** :
   - ✅ Requêtes Sanity : < 500ms
   - ✅ Images optimisées
   - ✅ Pas de requêtes en échec

---

## 🌐 Tests multilingues

### Test 9 : Changement de langue

1. Ouvrez http://localhost:3000
2. **En haut à droite**, changez la langue FR → EN
3. **Vérifications** :
   - ✅ Contenu Sanity s'affiche en anglais
   - ✅ Témoignages en anglais
   - ✅ Articles de blog en anglais
   - ✅ Stats en anglais

---

## ✅ Checklist complète de test

### Fonctionnel
- [ ] Sanity Studio démarre (port 3333)
- [ ] Connexion au compte Sanity réussie
- [ ] Tous les schémas visibles dans le menu
- [ ] Création d'un témoignage → Apparaît sur le site
- [ ] Modification des stats → Apparaît sur le site
- [ ] Création d'un article de blog → Apparaît dans /blog
- [ ] Modification des valeurs → Apparaît sur le site
- [ ] Modification des services → Apparaît dans /services

### Technique
- [ ] Aucune erreur dans la console navigateur
- [ ] Requêtes API Sanity réussissent (Status 200)
- [ ] Fallback fonctionne si Sanity indisponible
- [ ] Images Sanity se chargent correctement
- [ ] Temps de réponse < 500ms

### Multilingue
- [ ] Contenu FR affiché correctement
- [ ] Contenu EN affiché correctement
- [ ] Changement de langue instantané

### Interface
- [ ] Aucune modification visuelle du frontend
- [ ] Layout identique avant/après Sanity
- [ ] Animations fonctionnent
- [ ] Responsive fonctionne (mobile/desktop)

---

## 🐛 Dépannage

### Problème : Sanity Studio ne démarre pas

**Solution 1** :
```bash
rm -rf node_modules
npm install
npm run sanity
```

**Solution 2** :
Vérifiez que le port 3333 est libre :
```bash
# Windows
netstat -ano | findstr :3333
```

---

### Problème : Les données Sanity n'apparaissent pas

**Solution 1** : Vider le cache
- Ctrl+Shift+R (navigateur)
- Redémarrer `npm run dev`

**Solution 2** : Vérifier la console
- F12 → Console
- Cherchez les erreurs rouges
- Vérifiez les requêtes Network

**Solution 3** : Vérifier les variables d'environnement
```bash
# Dans le terminal
echo $env:VITE_SANITY_PROJECT_ID  # Windows PowerShell
```

---

### Problème : Erreur 401 Unauthorized

**Cause** : Token Sanity invalide

**Solution** :
1. Allez sur https://sanity.io/manage
2. Projet `MatricxConsulting` → API → Tokens
3. Créez un nouveau token avec droits "Editor"
4. Copiez le token
5. Remplacez dans `.env.local` :
   ```
   VITE_SANITY_TOKEN=<NOUVEAU_TOKEN>
   ```
6. Redémarrez `npm run dev`

---

## 🎉 Si tous les tests passent

**Félicitations !** 🎊

L'intégration Sanity est **100% fonctionnelle**.

**Prochaines étapes** :
1. ✅ Remplir Sanity avec du vrai contenu
2. ✅ Former le client sur Sanity Studio
3. ✅ Déployer le site en production
4. ✅ (Optionnel) Déployer Sanity Studio : `npm run sanity:deploy`

---

**Besoin d'aide ?**
- Documentation Sanity : https://www.sanity.io/docs
- Guide client : `SANITY_GUIDE.md`
- Récapitulatif technique : `SANITY_INTEGRATION_RECAP.md`
