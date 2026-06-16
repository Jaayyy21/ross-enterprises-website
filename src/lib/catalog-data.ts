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
    featuredBrands: ["parker", "legris", "pneumax", "rectus", "nitto"],
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
            brands: ["pneumax", "parker"],
          },
          {
            id: "rodless-cylinders",
            name: "Rodless Cylinders",
            description: "Space-saving rodless cylinders.",
            image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
            brands: ["origa"],
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
            brands: ["parker", "pneumax"],
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
            brands: ["parker", "pneumax", "legris"],
          }
        ]
      },
      {
        id: "fittings-tubing",
        name: "Fittings & Tubing",
        description: "Push-in fittings, adaptors, and polyurethane/nylon tubing.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "push-in-fittings",
            name: "Push-in Fittings",
            description: "Quick connect push-in fittings for instant connections.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
            brands: ["legris", "parker"],
          },
          {
            id: "pu-tubing",
            name: "PU Tubing",
            description: "Flexible polyurethane tubing.",
            image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
            brands: ["legris"],
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
        families: []
      },
      {
        id: "hydraulic-cylinders",
        name: "Hydraulic Cylinders",
        description: "Heavy-duty hydraulic cylinders for demanding applications.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
        families: []
      },
      {
        id: "hoses-fittings",
        name: "Hoses & Fittings",
        description: "High-pressure hydraulic hoses and permanent fittings.",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
        families: []
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
        families: []
      },
      {
        id: "fittings",
        name: "Tube Fittings",
        description: "Compression tube fittings for precision connections.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
        families: []
      }
    ]
  },
  {
    id: "automation",
    name: "Automation",
    description: "Sensors, switches, and factory automation components.",
    image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
    featuredBrands: ["piab", "baumer"],
    subcategories: [
      {
        id: "vacuum",
        name: "Vacuum Automation",
        description: "Vacuum pumps, suction cups, and grippers.",
        image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
        families: [
          {
            id: "suction-cups",
            name: "Suction Cups",
            description: "Industrial suction cups for automated handling.",
            image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
            brands: ["piab"],
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
