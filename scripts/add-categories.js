const fs = require('fs');
let content = fs.readFileSync('src/lib/catalog-data.ts', 'utf-8');

const newCategories = `
  , {
    id: "air-piping",
    name: "Air Piping",
    description: "Advanced air line infrastructure and aluminium piping systems for compressed air distribution.",
    image: "/assets/product/airandgas.png",
    featuredBrands: ["transair", "legris"],
    subcategories: [
      {
        id: "air-line-infrastructure",
        name: "Air Line Infrastructure",
        description: "Complete infrastructure components for industrial air lines.",
        image: "/assets/product/airandgas.png",
        families: []
      },
      {
        id: "aluminium-air-piping",
        name: "Aluminium Air Piping Systems",
        description: "Lightweight, corrosion-resistant aluminium piping.",
        image: "/assets/product/airandgas.png",
        families: []
      }
    ]
  },
  {
    id: "quick-couplings",
    name: "Quick Couplings",
    description: "High-performance quick connect couplings for air, water, and hydraulic applications.",
    image: "/assets/product/hydraulics.png",
    featuredBrands: ["rectus", "nitto"],
    subcategories: [
      {
        id: "air-quick-couplings",
        name: "Air Quick Couplings",
        description: "Pneumatic quick release couplings.",
        image: "/assets/product/pneumatics.png",
        families: []
      },
      {
        id: "water-quick-couplings",
        name: "Water Quick Couplings",
        description: "Brass and stainless steel couplings for water.",
        image: "/assets/product/hydraulics.png",
        families: []
      },
      {
        id: "hydraulic-quick-couplings",
        name: "Hydraulic Quick Couplings",
        description: "High-pressure hydraulic quick disconnects.",
        image: "/assets/product/hydraulics.png",
        families: []
      }
    ]
  },
  {
    id: "sensors-gauges",
    name: "Sensors & Gauges",
    description: "Precision measurement and monitoring instruments for industrial processes.",
    image: "/assets/product/instrumentation.png",
    featuredBrands: ["baumer", "parker"],
    subcategories: [
      {
        id: "pressure-sensors",
        name: "Pressure Sensors & Gauges",
        description: "Accurate pressure measurement solutions.",
        image: "/assets/product/instrumentation.png",
        families: []
      },
      {
        id: "temperature-sensors",
        name: "Temperature Sensors & Gauges",
        description: "Industrial temperature monitoring devices.",
        image: "/assets/product/instrumentation.png",
        families: []
      },
      {
        id: "industrial-instrumentation",
        name: "Industrial Instrumentation",
        description: "Advanced process control instrumentation.",
        image: "/assets/product/instrumentation.png",
        families: []
      }
    ]
  }
`;

const insertIndex = content.indexOf('];', content.indexOf('export const catalogData'));
content = content.slice(0, insertIndex) + newCategories + content.slice(insertIndex);

fs.writeFileSync('src/lib/catalog-data.ts', content);
console.log('Added new categories to catalogData.');
