const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');
const images = fs.readdirSync(galleryDir).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

const content = `const images = ${JSON.stringify(images)};\n\nexport default images;`;

fs.writeFileSync(path.join(__dirname, '../src/galleryImages.js'), content);
