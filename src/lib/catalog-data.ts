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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
    featuredBrands: ["parker", "legris", "pneumax", "rectus", "nitto", "uflow"],
    subcategories: [
      {
        id: "cylinders",
        name: "Pneumatic Cylinders",
        description: "Standard, compact, and rodless pneumatic cylinders.",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "standard-cylinders",
            name: "Standard Cylinders",
            description: "Industry standard pneumatic cylinders (VDMA).",
            image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
            brands: ["pneumax", "parker", "uflow"],
          },
          {
            id: "rodless-cylinders",
            name: "Rodless Cylinders",
            description: "Space-saving rodless cylinders.",
            image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
            brands: ["origa", "parker"],
          }
        ],
      },
      {
        id: "valves",
        name: "Pneumatic Valves",
        description: "Solenoid, manual, and mechanical control valves.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "solenoid-valves",
            name: "Solenoid Valves",
            description: "Electrically operated directional control valves.",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1080",
            brands: ["parker", "pneumax", "uflow"],
          }
        ]
      },
      {
        id: "air-preparation",
        name: "Air Preparation (FRL)",
        description: "Filters, regulators, and lubricators for compressed air.",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "frl-units",
            name: "FRL Units",
            description: "Combined filter, regulator, and lubricator assemblies.",
            image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
    featuredBrands: ["parker", "cmatic", "luthra"],
    subcategories: [
      {
        id: "pumps-motors",
        name: "Pumps & Motors",
        description: "Hydraulic gear, vane, and piston pumps.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "gear-pumps",
            name: "Gear Pumps",
            description: "High-efficiency hydraulic gear pumps.",
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "hydraulic-cylinders",
        name: "Hydraulic Cylinders",
        description: "Heavy-duty hydraulic cylinders for demanding applications.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "tie-rod-cylinders",
            name: "Tie-Rod Cylinders",
            description: "Standard tie-rod hydraulic cylinders.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
    featuredBrands: ["parker", "baumer"],
    subcategories: [
      {
        id: "valves-manifolds",
        name: "Valves & Manifolds",
        description: "Instrumentation needle valves, ball valves, and manifolds.",
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "needle-valves",
            name: "Needle Valves",
            description: "Precision flow control needle valves.",
            image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "fittings",
        name: "Tube Fittings",
        description: "Compression tube fittings for precision connections.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "compression-fittings",
            name: "Compression Fittings",
            description: "Double ferrule compression fittings.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    featuredBrands: ["parker"],
    subcategories: [
      {
        id: "air-filtration",
        name: "Air & Gas Filtration",
        description: "High-efficiency filters for compressed air and gas.",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "coalescing-filters",
            name: "Coalescing Filters",
            description: "Removal of oil aerosols and moisture.",
            image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "hydraulic-filtration",
        name: "Hydraulic Filtration",
        description: "Filters for hydraulic system protection.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "pressure-filters",
            name: "Pressure Filters",
            description: "High-pressure in-line hydraulic filters.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
    featuredBrands: ["piab"],
    subcategories: [
      {
        id: "vacuum-generators",
        name: "Vacuum Generators",
        description: "High-efficiency vacuum pumps and ejectors.",
        image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "coax-ejectors",
            name: "COAX® Ejectors",
            description: "Energy-saving multi-stage vacuum ejectors.",
            image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
            brands: ["piab"],
          }
        ]
      },
      {
        id: "suction-cups",
        name: "Suction Cups",
        description: "Industrial suction cups for all types of surfaces.",
        image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "bellows-cups",
            name: "Bellows Suction Cups",
            description: "Flexible cups for uneven surfaces.",
            image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
    featuredBrands: ["parker"],
    subcategories: [
      {
        id: "o-rings",
        name: "O-Rings",
        description: "Standard and custom elastomeric O-rings.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "nitrile-o-rings",
            name: "Nitrile O-Rings",
            description: "General purpose oil-resistant O-rings.",
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
            brands: ["parker"],
          }
        ]
      },
      {
        id: "dynamic-seals",
        name: "Dynamic Seals",
        description: "Seals for reciprocating and rotary motion.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "piston-seals",
            name: "Piston Seals",
            description: "High-pressure hydraulic piston seals.",
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
            brands: ["parker"],
          }
        ]
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
