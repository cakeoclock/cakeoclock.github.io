// const fs = require('fs');
// const path = require('path');

// const galleryDir = path.join(__dirname, '../public/gallery');
// const images = fs.readdirSync(galleryDir).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

// const content = `const images = ${JSON.stringify(images)};\n\nexport default images;`;

// fs.writeFileSync(path.join(__dirname, '../src/galleryImages.js'), content);

// File: generateGalleryImages.js
const fs = require('fs');
const path = require('path');

// Adjust these paths as needed based on your project structure
const galleryDir = path.join(__dirname, '../public/gallery');
const outputFilePath = path.join(__dirname, '../src/galleryImages.js');

fs.readdir(galleryDir, (err, files) => {
  if (err) {
    console.error('Error reading gallery directory:', err);
    return;
  }

  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
  const content = `const images = ${JSON.stringify(imageFiles)};\n\nexport default images;`;

  fs.writeFile(outputFilePath, content, err => {
    if (err) {
      console.error('Error writing galleryImages.js:', err);
    } else {
      console.log('galleryImages.js generated successfully.');
    }
  });
});
