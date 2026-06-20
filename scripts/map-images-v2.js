const fs = require('fs');

let content = fs.readFileSync('src/lib/catalog-data.ts', 'utf-8');

const mainMap = {
  "pneumatics": "/assets/product/pneumatics.png",
  "hydraulics": "/assets/product/hydraulics1.png",
  "instrumentation": "/assets/product/instrumentation.png",
  "filtration": "/assets/product/filtration.png",
  "vacuum": "/assets/product/vacuum.png",
  "seals": "/assets/product/seals.png",
  "air-piping": "/assets/product/airpiping.png",
  "quick-couplings": "/assets/product/quickcoupling.png",
  "sensors-gauges": "/assets/product/sensors and gauges.png",
};

const subMap = {
  "cylinders": "/assets/product/pneumaticscyclinder.png", // Missing, will trigger fallback
  "valves": "/assets/product/pneumaticsvalves.png",
  "air-preparation": "/assets/product/pneumaticsairpreparation.png",

  "pumps-motors": "/assets/product/hyrdaulicspumpandmotor.png",
  "hydraulic-cylinders": "/assets/product/hydraulicscyclinder.png",

  "valves-manifolds": "/assets/product/instrumentationvalves.png",
  "fittings": "/assets/product/instrumentationtube.png",

  "air-filtration": "/assets/product/filtrationairandgas.png",
  "hydraulic-filtration": "/assets/product/filtrationhydraulics.png",

  "vacuum-generators": "/assets/product/vacuumgenerators.png",
  "suction-cups": "/assets/product/vacuumsuctioncups.png",

  "air-line-infrastructure": "/assets/product/airpipinginfrastructure.png",
  "aluminium-air-piping": "/assets/product/airpipingaluminium.png",

  "air-quick-couplings": "/assets/product/quickcouplingair.png",
  "water-quick-couplings": "/assets/product/quickcouplingwater.png",
  "hydraulic-quick-couplings": "/assets/product/quickcouplinghyrdau.png",

  "pressure-sensors": "/assets/product/pressure-gauge.png",
  "temperature-sensors": "/assets/product/temperature gauges.png"
};

let lines = content.split('\n');
let currentId = null;
let currentType = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const idMatch = line.match(/id:\s*"([^"]+)"/);
  
  if (idMatch) {
    currentId = idMatch[1];
    if (mainMap[currentId]) {
      currentType = 'category';
    } else if (subMap[currentId]) {
      currentType = 'subcategory';
    } else {
      // e.g. seals subcategories or families. Keep them as is.
      currentType = 'other';
    }
  }

  if (line.includes('image: "')) {
    let newImage = null;
    
    if (currentType === 'category') {
      newImage = mainMap[currentId];
    } else if (currentType === 'subcategory') {
      newImage = subMap[currentId];
    }

    if (newImage) {
      lines[i] = line.replace(/image:\s*"[^"]+"/, 'image: "' + newImage + '"');
    }
  }
}

fs.writeFileSync('src/lib/catalog-data.ts', lines.join('\n'));
console.log('Successfully mapped catalog images.');
