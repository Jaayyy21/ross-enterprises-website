const fs = require('fs');
let content = fs.readFileSync('src/lib/company-data.ts', 'utf-8');

const industryMap = {
  'Engineering': '/assets/industry/engineering.png',
  'Pharmaceuticals': '/assets/industry/pharma.png',
  'Chemicals': '/assets/industry/chemicals.png',
  'Textile': '/assets/industry/textile.png',
  'Packaging': '/assets/industry/packaging.png',
  'Food Processing': '/assets/industry/food.png',
  'Automotive': '/assets/industry/car.cms',
  'Oil & Gas': '/assets/industry/oil.png'
};

for (const ObjectEntry of Object.entries(industryMap)) {
  const name = ObjectEntry[0];
  const file = ObjectEntry[1];
  const regex = new RegExp('name: "' + name + '",[\\s\\S]*?image: "[^"]+"', 'g');
  content = content.replace(regex, (match) => {
    return match.replace(/image: "[^"]+"/, 'image: "' + file + '"');
  });
}

fs.writeFileSync('src/lib/company-data.ts', content);
console.log('Updated industry images.');
