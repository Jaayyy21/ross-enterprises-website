const fs = require('fs');

let content = fs.readFileSync('src/lib/catalog-data.ts', 'utf-8');

const parentImageMappings = {
  "pneumatics": "/assets/product/pneumatics.png",
  "hydraulics": "/assets/product/hydraulics1.png",
  "instrumentation": "/assets/product/instrumentation.png",
  "filtration": "/assets/product/filtration1.png",
  "vacuum": "/assets/product/vacuum.png",
  "seals": "/assets/product/seals.png",
  "air-piping": "/assets/product/piping2.png",
  "quick-couplings": "/assets/product/coupling2.png",
  "sensors-gauges": "/assets/product/sensors and gauges.png"
};

const subcategoryImageMappings = {
  "cylinders": "/assets/product/pneumatics.png",
  "valves": "/assets/product/pneumatics.png",
  "air-preparation": "/assets/product/pneumatics.png",
  "pumps-motors": "/assets/product/hydraulics.png",
  "hydraulic-cylinders": "/assets/product/hydraulics.png",
  "valves-manifolds": "/assets/product/instrumentationsub.png",
  "fittings": "/assets/product/instrumentationsub.png",
  "air-filtration": "/assets/product/filtration.png",
  "hydraulic-filtration": "/assets/product/filtration.png",
  "vacuum-generators": "/assets/product/vacuum.png",
  "suction-cups": "/assets/product/vacuum.png",
  "o-rings": "/assets/product/oring.png",
  "dynamic-seals": "/assets/product/dyanmicseals.png",
  "air-line-infrastructure": "/assets/product/airpiping.png",
  "aluminium-air-piping": "/assets/product/piping.png",
  "air-quick-couplings": "/assets/product/quickcoupling.png",
  "water-quick-couplings": "/assets/product/quickcoupling.png",
  "hydraulic-quick-couplings": "/assets/product/quickcoupling.png",
  "pressure-sensors": "/assets/product/sensors and gauges.png",
  "temperature-sensors": "/assets/product/sensors and gauges.png",
  "industrial-instrumentation": "/assets/product/instrumentation.png"
};

let lines = content.split('\n');
let currentId = null;
let currentType = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const idMatch = line.match(/id:\s*"([^"]+)"/);
  
  if (idMatch) {
    currentId = idMatch[1];
    if (parentImageMappings[currentId]) {
      currentType = 'category';
    } else if (subcategoryImageMappings[currentId]) {
      currentType = 'subcategory';
    } else {
      currentType = 'family';
    }
  }

  if (line.includes('image: "')) {
    let newImage = null;
    
    if (currentType === 'category') {
      newImage = parentImageMappings[currentId];
    } else if (currentType === 'subcategory') {
      newImage = subcategoryImageMappings[currentId];
    }

    if (newImage) {
      lines[i] = line.replace(/image:\s*"[^"]+"/, 'image: "' + newImage + '"');
    }
  }
}

fs.writeFileSync('src/lib/catalog-data.ts', lines.join('\n'));
console.log('Successfully mapped catalog images.');
