export interface ProductFamily {
  id: string;
  name: string;
  description: string;
  image: string;
  brands: string[];
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  families: ProductFamily[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: SubCategory[];
  featuredBrands: string[];
}

export const catalogData: Category[] = [
  {
    id: "pneumatics",
    name: "Pneumatics",
    description: "Comprehensive pneumatic automation and control solutions for industrial applications.",
    image: "/assets/product/pneumatics.png",
    featuredBrands: ["parker", "legris", "pneumax", "rectus", "nitto", "uflow"],
    subcategories: [
      {
        id: "cylinders",
        name: "Pneumatic Cylinders",
        description: "Standard, compact, and rodless pneumatic cylinders.",
        image: "/assets/product/pneumaticcyclinders.png",
        families: [
          {
            id: "standard-cylinders",
            name: "Standard Cylinders",
            description: "Industry standard pneumatic cylinders (VDMA).",
            image: "/assets/product/pneumatics.png",
            brands: ["pneumax", "parker", "uflow"],
          },
          {
            id: "rodless-cylinders",
            name: "Rodless Cylinders",
            description: "Space-saving rodless cylinders.",
            image: "/assets/product/pneumatics.png",
            brands: ["origa", "parker"],
          }
        ],
      },
      {
        id: "valves",
        name: "Pneumatic Valves",
        description: "Solenoid, manual, and mechanical control valves.",
        image: "/assets/product/pneumaticsvalves.png",
        families: [
          {
            id: "solenoid-valves",
            name: "Solenoid Valves",
            description: "Electrically operated directional control valves.",
            image: "/assets/product/pneumatics.png",
            brands: ["parker", "pneumax", "uflow"],
          }
        ]
      },
      {
        id: "air-preparation",
        name: "Air Preparation (FRL)",
        description: "Filters, regulators, and lubricators for compressed air.",
        image: "/assets/product/pneumaticsairpreparation.png",
        families: [
          {
            id: "frl-units",
            name: "FRL Units",
            description: "Combined filter, regulator, and lubricator assemblies.",
            image: "/assets/product/pneumatics.png",
            brands: ["parker", "pneumax", "legris", "uflow"],
          }
        ]
      }
    ]
  },
  {
    id: "hydraulics",
    name: "Hydraulics",
    description: "High-pressure hydraulic components and systems.",
    image: "/assets/product/hydraulics1.png",
    featuredBrands: ["parker", "cmatic", "luthra"],
    subcategories: [
      {
        id: "pumps-motors",
        name: "Pumps & Motors",
        description: "Hydraulic gear, vane, and piston pumps.",
        image: "/assets/product/hyrdaulicspumpandmotor.png",
        families: [
          {
            id: "gear-pumps",
            name: "Gear Pumps",
            description: "High-efficiency hydraulic gear pumps.",
            image: "/assets/product/hydraulics.png",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "hydraulic-cylinders",
        name: "Hydraulic Cylinders",
        description: "Heavy-duty hydraulic cylinders for demanding applications.",
        image: "/assets/product/hydraulicscyclinder.png",
        families: [
          {
            id: "tie-rod-cylinders",
            name: "Tie-Rod Cylinders",
            description: "Standard tie-rod hydraulic cylinders.",
            image: "/assets/product/hydraulics.png",
            brands: ["parker", "luthra"],
          }
        ]
      }
    ]
  },
  {
    id: "instrumentation",
    name: "Instrumentation",
    description: "Precision fluid control and measurement components.",
    image: "/assets/product/instrumentation.png",
    featuredBrands: ["parker", "baumer"],
    subcategories: [
      {
        id: "valves-manifolds",
        name: "Valves & Manifolds",
        description: "Instrumentation needle valves, ball valves, and manifolds.",
        image: "/assets/product/instrumentationvalves.png",
        families: [
          {
            id: "needle-valves",
            name: "Needle Valves",
            description: "Precision flow control needle valves.",
            image: "/assets/product/instrumentation.png",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "fittings",
        name: "Tube Fittings",
        description: "Compression tube fittings for precision connections.",
        image: "/assets/product/instrumentationtube.png",
        families: [
          {
            id: "compression-fittings",
            name: "Compression Fittings",
            description: "Double ferrule compression fittings.",
            image: "/assets/product/instrumentation.png",
            brands: ["parker"],
          }
        ]
      }
    ]
  },
  {
    id: "filtration",
    name: "Filtration",
    description: "Advanced filtration solutions for air, gas, and hydraulic fluids.",
    image: "/assets/product/filtration.png",
    featuredBrands: ["parker"],
    subcategories: [
      {
        id: "air-filtration",
        name: "Air & Gas Filtration",
        description: "High-efficiency filters for compressed air and gas.",
        image: "/assets/product/filtrationairandgas.png",
        families: [
          {
            id: "coalescing-filters",
            name: "Coalescing Filters",
            description: "Removal of oil aerosols and moisture.",
            image: "/assets/product/filtration.png",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "hydraulic-filtration",
        name: "Hydraulic Filtration",
        description: "Filters for hydraulic system protection.",
        image: "/assets/product/filtrationhydraulics.png",
        families: [
          {
            id: "pressure-filters",
            name: "Pressure Filters",
            description: "High-pressure in-line hydraulic filters.",
            image: "/assets/product/filtration.png",
            brands: ["parker"],
          }
        ]
      }
    ]
  },
  {
    id: "vacuum",
    name: "Vacuum Automation",
    description: "Vacuum handling and factory automation components.",
    image: "/assets/product/vacuum.png",
    featuredBrands: ["piab"],
    subcategories: [
      {
        id: "vacuum-generators",
        name: "Vacuum Generators",
        description: "High-efficiency vacuum pumps and ejectors.",
        image: "/assets/product/vacuumgenerators.png",
        families: [
          {
            id: "coax-ejectors",
            name: "COAX® Ejectors",
            description: "Energy-saving multi-stage vacuum ejectors.",
            image: "/assets/product/vacuum.png",
            brands: ["piab"],
          }
        ]
      },
      {
        id: "suction-cups",
        name: "Suction Cups",
        description: "Industrial suction cups for all types of surfaces.",
        image: "/assets/product/vacuumsuctioncups.png",
        families: [
          {
            id: "bellows-cups",
            name: "Bellows Suction Cups",
            description: "Flexible cups for uneven surfaces.",
            image: "/assets/product/vacuum.png",
            brands: ["piab"],
          }
        ]
      }
    ]
  },
  {
    id: "seals",
    name: "O-Rings & Seals",
    description: "High-performance sealing solutions for industrial applications.",
    image: "/assets/product/seals.png",
    featuredBrands: ["parker"],
    subcategories: [
      {
        id: "o-rings",
        name: "O-Rings",
        description: "Standard and custom elastomeric O-rings.",
        image: "/assets/product/oring.png",
        families: [
          {
            id: "nitrile-o-rings",
            name: "Nitrile O-Rings",
            description: "General purpose oil-resistant O-rings.",
            image: "/assets/product/seals.png",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "dynamic-seals",
        name: "Dynamic Seals",
        description: "Seals for reciprocating and rotary motion.",
        image: "/assets/product/dyanmicseals.png",
        families: [
          {
            id: "piston-seals",
            name: "Piston Seals",
            description: "High-pressure hydraulic piston seals.",
            image: "/assets/product/seals.png",
            brands: ["parker"],
          }
        ]
      }
    ]
  }

  , {
    id: "air-piping",
    name: "Air Piping",
    description: "Advanced air line infrastructure and aluminium piping systems for compressed air distribution.",
    image: "/assets/product/airpiping.png",
    featuredBrands: ["transair", "legris"],
    subcategories: [
      {
        id: "air-line-infrastructure",
        name: "Air Line Infrastructure",
        description: "Complete infrastructure components for industrial air lines.",
        image: "/assets/product/airpipinginfrastructure.png",
        families: []
      },
      {
        id: "aluminium-air-piping",
        name: "Aluminium Air Piping Systems",
        description: "Lightweight, corrosion-resistant aluminium piping.",
        image: "/assets/product/airpipingaluminium.png",
        families: []
      }
    ]
  },
  {
    id: "quick-couplings",
    name: "Quick Couplings",
    description: "High-performance quick connect couplings for air, water, and hydraulic applications.",
    image: "/assets/product/quickcoupling.png",
    featuredBrands: ["rectus", "nitto"],
    subcategories: [
      {
        id: "air-quick-couplings",
        name: "Air Quick Couplings",
        description: "Pneumatic quick release couplings.",
        image: "/assets/product/quickcouplingair.png",
        families: []
      },
      {
        id: "water-quick-couplings",
        name: "Water Quick Couplings",
        description: "Brass and stainless steel couplings for water.",
        image: "/assets/product/quickcouplingwater.png",
        families: []
      },
      {
        id: "hydraulic-quick-couplings",
        name: "Hydraulic Quick Couplings",
        description: "High-pressure hydraulic quick disconnects.",
        image: "/assets/product/quickcouplinghyrdau.png",
        families: []
      }
    ]
  },
  {
    id: "sensors-gauges",
    name: "Sensors & Gauges",
    description: "Precision measurement and monitoring instruments for industrial processes.",
    image: "/assets/product/sensors and gauges.png",
    featuredBrands: ["baumer", "parker"],
    subcategories: [
      {
        id: "pressure-sensors",
        name: "Pressure Sensors & Gauges",
        description: "Accurate pressure measurement solutions.",
        image: "/assets/product/pressure-gauge.png",
        families: []
      },
      {
        id: "temperature-sensors",
        name: "Temperature Sensors & Gauges",
        description: "Industrial temperature monitoring devices.",
        image: "/assets/product/temperature gauges.png",
        families: []
      }
    ]
  }
];

export function getCategoryById(id: string): Category | undefined {
  return catalogData.find(c => c.id === id);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string): SubCategory | undefined {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(s => s.id === subcategoryId);
}
