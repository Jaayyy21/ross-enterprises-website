export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categoryBrandMapping: Record<string, string[]> = {
  "pneumatics": ["parker", "legris", "pneumax", "airtac", "cmatic", "origa", "luthra"],
  "hydraulics": ["parker"],
  "instrumentation": ["parker", "baumer", "uflow"],
  "filtration": ["parker"],
  "vacuum": ["piab"],
  "seals": ["parker"],
  "air-piping": ["transair", "luthra"],
  "quick-couplings": ["rectus", "parker"],
  "sensors-gauges": ["baumer"]
};

export const catalogUrls: Record<string, string> = {
  "parker-hydraulic": "https://www.parker.com/content/dam/Parker-com/Literature/Hose-Products-Division/Catalog-4400-PDF-Files/HPD_4400_Catalog.pdf",
  "parker-tube": "https://www.parker.com/content/dam/Parker-com/Literature/Tube-Fittings-Division/4300_Catalog_Cover.pdf",
  "legris": "https://www.parker.com/content/dam/Parker-com/Literature/Brass-Products/Legris-Literature/Parker_Legris_Master_Catalog_3500LEGNYC.pdf",
  "airtac": "https://us-en.airtac.com/pro_pd.aspx?c_kind=4",
  "origa": "https://www.parker.com/content/dam/Parker-com/Literature/empd---electric-motion-and-pneumatic-division-europe/literature/pn/Parker_Pneumatique_Concis_PNDE-3800FR.pdf",
  "baumer": "https://www.baumer-instruments.com/product-overview/pressure-mechanical/pressure-gauges/",
  "rectus": "https://www.parker.com/content/dam/Parker-com/Literature/LPCE/New-PDFs/New-pdf-QCDE-catalogue/CAT_3800-PNEU_UK_2017.pdf",
  "piab": "https://www.piab.com/globalassets/productimages/vacuumautomationcatalog80_us.pdf?ref=5F6FCFC044",
  "transair": "https://www.parker.com/content/dam/Parker-com/Literature/Brass-Products/Transair-Literature/catalogs/Parker_Transair_Catalog_3515.pdf",
  "cmatic": "https://cmatic.com/products/",
  "luthra": "https://luthrapneumsys.com/wp-content/uploads/2025/08/LUTHRA-PNEUMSYS-CATALOGUE.pdf",
  "uflow": "https://www.uflowvalve.com/catalogue.pdf",
  "pneumax": "https://pneumaxspa.com/air-pneumatic-center/wp-content/uploads/Catalogo-Generale-ODE.pdf"
};

export function getCatalogUrl(categoryId: string, brandId: string): string {
  if (brandId === "parker") {
    return "https://www.parker.com/";
  }
  if (brandId === "luthra" && categoryId === "pneumatics") {
    return "https://www.luthrapneumsys.com/pneumatic-air-cylinder.html";
  }
  return catalogUrls[brandId] || "#";
}

export const catalogData: Category[] = [
  {
    id: "pneumatics",
    name: "Pneumatics",
    description: "Comprehensive pneumatic automation and control solutions for industrial applications.",
    image: "/assets/product/pneumatics.png",
  },
  {
    id: "hydraulics",
    name: "Hydraulics",
    description: "High-pressure hydraulic components and systems.",
    image: "/assets/product/hydraulics1.png",
  },
  {
    id: "instrumentation",
    name: "Instrumentation",
    description: "Precision fluid control and measurement components.",
    image: "/assets/product/instrumentation.png",
  },
  {
    id: "filtration",
    name: "Filtration",
    description: "Advanced filtration solutions for air, gas, and hydraulic fluids.",
    image: "/assets/product/filtration.png",
  },
  {
    id: "vacuum",
    name: "Vacuum Automation",
    description: "Vacuum handling and factory automation components.",
    image: "/assets/product/vacuum.png",
  },
  {
    id: "seals",
    name: "O-Rings & Seals",
    description: "High-performance sealing solutions for industrial applications.",
    image: "/assets/product/seals.png",
  },
  {
    id: "air-piping",
    name: "Air Piping",
    description: "Advanced air line infrastructure and aluminium piping systems for compressed air distribution.",
    image: "/assets/product/airpiping.png",
  },
  {
    id: "quick-couplings",
    name: "Quick Couplings",
    description: "High-performance quick connect couplings for air, water, and hydraulic applications.",
    image: "/assets/product/quickcoupling.png",
  },
  {
    id: "sensors-gauges",
    name: "Sensors & Gauges",
    description: "Precision measurement and monitoring instruments for industrial processes.",
    image: "/assets/product/sensors and gauges.png",
  }
];

export function getCategoryById(id: string): Category | undefined {
  return catalogData.find(c => c.id === id);
}
