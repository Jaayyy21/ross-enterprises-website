const fs = require('fs');

let content = fs.readFileSync('src/lib/catalog-data.ts', 'utf-8');

// We split the file by top level categories roughly to replace their children
const categories = [
  { id: 'pneumatics', image: '/assets/product/pneumatics.png' },
  { id: 'hydraulics', image: '/assets/product/hydraulics.png' },
  { id: 'instrumentation', image: '/assets/product/instrumentation.png' },
  { id: 'filtration', image: '/assets/product/filtration.png' },
  { id: 'vacuum', image: '/assets/product/vacuum.png' },
  { id: 'seals', image: '/assets/product/seals.png' }
];

let newContent = '';
let currentCategory = null;

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect category change
  for (const cat of categories) {
    if (line.includes(`id: "${cat.id}"`)) {
      currentCategory = cat.image;
    }
  }

  if (line.includes('image: "https://images.unsplash.com')) {
    if (currentCategory) {
      newContent += line.replace(/image: "https:\/\/images\.unsplash\.com[^"]+"/, `image: "${currentCategory}"`) + '\n';
    } else {
      newContent += line + '\n';
    }
  } else {
    newContent += line + '\n';
  }
}

fs.writeFileSync('src/lib/catalog-data.ts', newContent.trim() + '\n');
console.log('All remaining unsplash images have been mapped to their parent category local image.');
