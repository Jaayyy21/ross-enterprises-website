const fs = require('fs');
let content = fs.readFileSync('src/lib/catalog-data.ts', 'utf-8');

const mappings = {
  'pneumatics': '/assets/product/pneumatics.png',
  'hydraulics': '/assets/product/hydraulics.png',
  'instrumentation': '/assets/product/instrumentation.png',
  'filtration': '/assets/product/filtration.png',
  'vacuum': '/assets/product/vacuum.png',
  'seals': '/assets/product/seals.png',
  'o-rings': '/assets/product/oring.png',
  'dynamic-seals': '/assets/product/dyanmicseals.png',
  'air-filtration': '/assets/product/airandgas.png'
};

for (const ObjectEntry of Object.entries(mappings)) {
  const id = ObjectEntry[0];
  const file = ObjectEntry[1];
  const regex = new RegExp('id: "' + id + '",[\\s\\S]*?image: "[^"]+"', 'g');
  content = content.replace(regex, (match) => {
    return match.replace(/image: "[^"]+"/, 'image: "' + file + '"');
  });
}

fs.writeFileSync('src/lib/catalog-data.ts', content);
console.log('Done mapping product images.');
