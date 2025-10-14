import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImage = path.join(__dirname, 'src', 'images', 'logomatricx.png');
const outputDir = path.join(__dirname, 'public');

// Créer le dossier public s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [
  // PWA Icons
  { name: 'pwa-64x64.png', size: 64, padding: 8 },
  { name: 'pwa-192x192.png', size: 192, padding: 24 },
  { name: 'pwa-512x512.png', size: 512, padding: 64 },
  { name: 'maskable-icon-512x512.png', size: 512, padding: 51 }, // 10% padding pour maskable
  
  // Apple Touch Icon
  { name: 'apple-touch-icon.png', size: 180, padding: 22 },
  
  // Favicons
  { name: 'favicon-16x16.png', size: 16, padding: 2 },
  { name: 'favicon-32x32.png', size: 32, padding: 4 },
  
  // Microsoft
  { name: 'mstile-150x150.png', size: 150, padding: 15 },
];

async function generateIcons() {
  console.log('🎨 Génération des icônes PWA...\n');

  try {
    for (const icon of sizes) {
      const outputPath = path.join(outputDir, icon.name);
      const iconSize = icon.size - (icon.padding * 2);

      await sharp(inputImage)
        .resize(iconSize, iconSize, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .extend({
          top: icon.padding,
          bottom: icon.padding,
          left: icon.padding,
          right: icon.padding,
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ ${icon.name} (${icon.size}x${icon.size})`);
    }

    // Générer favicon.ico multi-taille
    await sharp(inputImage)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('✅ favicon.ico\n');
    console.log('🎉 Toutes les icônes ont été générées avec succès !');
    console.log(`📁 Emplacement : ${outputDir}\n`);
    console.log('📝 Prochaines étapes :');
    console.log('   1. Vérifiez les icônes dans /public');
    console.log('   2. Lancez : npm run dev');
    console.log('   3. Testez avec Chrome DevTools > Application > Manifest');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes:', error);
  }
}

generateIcons();
