const fs = require('fs');
let content = fs.readFileSync('src/lib/company-data.ts', 'utf-8');

// Map for partners
const partnerMap = {
  parker: 'parker.png',
  legris: 'legris.png',
  transair: 'transair.png',
  rectus: 'rectus.png',
  nitto: 'nittokohki.png',
  origa: 'origa.png',
  piab: 'piab.png',
  pneumax: 'pneumax.png',
  luthra: 'luthra.png',
  cmatic: 'cmatic.png',
  baumer: 'baumer.png',
  uflow: 'uflow.png'
};

for (const ObjectEntry of Object.entries(partnerMap)) {
  const id = ObjectEntry[0];
  const file = ObjectEntry[1];
  const regex = new RegExp('id: "' + id + '",\\s*name: "[^"]+",\\s*tagline: "[^"]+",\\s*description:\\s*"[^"]+",\\s*href: "[^"]+",\\s*logo: "[^"]+"', 'g');
  content = content.replace(regex, (match) => {
    return match.replace(/logo: "[^"]+"/, 'logo: "/assets/partners/' + file + '"');
  });
}

// Map for customers
const customerMap = {
  siemens: 'siemens.png',
  abb: 'abb.png',
  elecon: 'elecon.png',
  ge: 'generalelectric.png',
  ceat: 'ceat.png',
  apollo: 'apollo.png',
  banco: 'banco.png',
  zydus: 'zydus.png',
  'raychem-rpg': 'raychem.png',
  'everest-spices': 'everest.png',
  'real-namkeen': 'real.png',
  'mg-motor': 'mg.png',
  'schneider-electric': 'schneider.png',
  rotex: 'rotex.png',
  'amul-dairy': 'amul.png',
  'birla-century': 'aditya.png'
};

for (const ObjectEntry of Object.entries(customerMap)) {
  const id = ObjectEntry[0];
  const file = ObjectEntry[1];
  const regex = new RegExp('id: "' + id + '",\\s*name: "[^"]+",\\s*logo: "[^"]+"', 'g');
  content = content.replace(regex, (match) => {
    return match.replace(/logo: "[^"]+"/, 'logo: "/assets/customers/' + file + '"');
  });
}

fs.writeFileSync('src/lib/company-data.ts', content);
console.log('Done mapping logos.');
