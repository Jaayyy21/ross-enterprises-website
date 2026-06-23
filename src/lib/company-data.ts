export const company = {
  name: "Ross Enterprises",
  legalName: "Ross Enterprises",
  foundedYear: 1996,
  promoter: "Mr. Nimesh Patel",
  tagline:
    "Industrial Automation & Fluid Control Solutions Since 1996",
  subheadline:
    "Trusted supplier of pneumatic, hydraulic, instrumentation and automation products serving industries across Gujarat and India.",
  intro:
    "We would like to introduce ourselves as one of the foremost representative of companies like PARKER, LEGRIS, TRANSAIR, RECTUS, AIRTAC, ORIGA, PIAB, PNEUMAX, LUTHRA, CMATIC, BAUMER, UFLOW etc. which are into manufacturing of Pneumatics, Hydraulics, Instrumentation, Filter, Seals, Hoses & other products.",
  representation:
    "We are representing these companies for the past 30 years.",
  expertise:
    "We have highly qualified and experienced techno crafts. We hold large quantity of stock and have very reputed clients. We see to it that individual attention is given to our customers regarding specific needs requiring any special consideration and material of construction.",
  history:
    "Ross Enterprises, promoted by Mr. Nimesh Patel has been an active player in the market, in the field of Pneumatics since 1996. Initially offering accessories for pneumatics including push-in fittings & tubing's, ball-valves, QRC's, FRL's, solenoid valves, pneumatic cylinders, etc. The company has gone on to adding a range of conveying pipes & tubes, hydraulic cylinders/ valves/ fittings, hydraulic hoses, instrumentation valves & fittings, seals, vacuum products, pressure / temperature / level / flow components, manual valves & other such components.",
  capabilities:
    "At present, the company offers complete solution through designing, supplying, erecting & commissioning total pneumatic systems. It also extends package deals to various OEM's, helping them minimizes their inventory & other charges.",
  mission:
    "Ross Enterprises company aims at becoming a leader in Industrial Pneumatic Technology & one of the foremost suppliers of Industrial Pneumatic, Hydraulic & Instrumentation products in India through improved productivity & innovative solutions. It believes in creating value for the customers.",
};

export const contact = {
  address:
    "Ross Enterprises, 894/4, GIDC, Makarpura, Vadodara - 390010, Gujarat, India",
  phones: ["+91-9427506160", "+91-9824018510"],
  primaryPhone: "+91-9427506160",
  whatsapp: "919427506160",
  emails: [
    "rossenterprises1996@gmail.com",
    "ross_enterprise@rediffmail.com",
    "nimesh@rossenterprises.in",
    "ross_enterprise@yahoo.com",
    "info@rossenterprises.in",
    "sale@rossenterprises.in",
  ],
  primaryEmail: "rossenterprises1996@gmail.com",
  maps: "https://maps.google.com/?q=22.249432,73.188583",
};

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  logo: string;
  website: string;
}

export const brands: Brand[] = [
  {
    id: "parker",
    name: "Parker",
    tagline: "Motion & Control Technologies",
    description:
      "Global leader in motion and control technologies — automation, instrumentation, hydraulics, filtration, fluid connectors, and seals.",
    href: "/brands/parker",
    logo: "/assets/logos/partners/parker.png",
    website: "https://www.parker.com",
  },
  {
    id: "legris",
    name: "Parker Legris",
    tagline: "Pneumatic Connection Systems",
    description:
      "Push-in fittings, function fittings, technical tubing, industrial blowguns, valves, air service units, and adaptors for compressed air and industrial fluids.",
    href: "/brands/legris",
    logo: "/assets/logos/partners/legris.png",
    website: "https://www.legris-pneumatics.com/",
  },
  {
    id: "transair",
    name: "Transair",
    tagline: "Advanced Pipe Systems for Industrial Fluids",
    description:
      "Division of Parker Legris specializing in compressed air pipe work systems. Compatible with air, nitrogen, vacuum and argon.",
    href: "/brands/transair",
    logo: "/assets/logos/partners/transair.png",
    website: "https://www.parker.com/transair",
  },
  {
    id: "rectus",
    name: "Rectus",
    tagline: "Quick Coupling Systems",
    description:
      "Parker Quick Coupling Division Europe — complete quick connect coupling systems for low, medium and high pressure applications.",
    href: "/brands/rectus",
    logo: "/assets/logos/partners/rectus.png",
    website: "https://www.parker.com/content/dam/Parker-com/Literature/LPCE/New-PDFs/New-pdf-QCDE-catalogue/CAT_3800-PNEU_UK_2017.pdf",
  },
  {
    id: "airtac",
    name: "Airtac",
    tagline: "Pneumatic Control Components",
    description:
      "Global manufacturer of pneumatic components, including valves, cylinders, and air preparation units.",
    href: "/brands/airtac",
    logo: "/assets/logos/partners/airtac.png",
    website: "https://us-en.airtac.com/",
  },
  {
    id: "origa",
    name: "Parker Origa",
    tagline: "Rodless Cylinder Solutions",
    description:
      "Pneumatic and rodless cylinders with proven reliability, maintenance-free operation, and resistance to corrosion — from foundry to clean room.",
    href: "/brands/origa",
    logo: "/assets/logos/partners/origa.png",
    website: "https://www.parker.com/content/dam/Parker-com/Literature/empd---electric-motion-and-pneumatic-division-europe/literature/pn/Parker_Pneumatique_Concis_PNDE-3800FR.pdf",
  },
  {
    id: "piab",
    name: "Piab",
    tagline: "Vacuum Automation Solutions",
    description:
      "Established in 1951, Piab designs innovative vacuum solutions for automated material handling and factory automation processes.",
    href: "/brands/piab",
    logo: "/assets/logos/partners/piab.png",
    website: "https://www.piab.com",
  },
  {
    id: "pneumax",
    name: "Pneumax",
    tagline: "Pneumatic Automation Components",
    description:
      "European manufacturer of pneumatic cylinders, valves, air service units, and manipulation components for industrial automation.",
    href: "/brands/pneumax",
    logo: "/assets/logos/partners/pneumax.png",
    website: "https://www.pneumaxspa.com",
  },
  {
    id: "luthra",
    name: "Luthra",
    tagline: "Pneumatic & Hydraulic Components",
    description:
      "Leading manufacturer of pneumatic and hydraulic components, advance piping solutions, food grade fittings, and LLDPE tubes.",
    href: "/brands/luthra",
    logo: "/assets/logos/partners/luthra.png",
    website: "https://www.luthrapneumsys.com",
  },
  {
    id: "cmatic",
    name: "CMATIC",
    tagline: "Push-In Fittings & Pneumatic Fluid Systems",
    description:
      "Specialized in push-in fittings and pneumatic fluid systems, providing high-quality solutions for industrial automation since 1979.",
    href: "/brands/cmatic",
    logo: "/assets/logos/partners/cmatic.png",
    website: "https://www.cmatic.it",
  },
  {
    id: "baumer",
    name: "Baumer",
    tagline: "Industrial Sensors & Automation Solutions",
    description:
      "Baumer is a global leader in sensor technology and automation solutions, providing precision products for diverse industrial applications.",
    href: "/brands/baumer",
    logo: "/assets/logos/partners/baumer.png",
    website: "https://www.baumer.com",
  },
  {
    id: "uflow",
    name: "UFLOW",
    tagline: "Industrial Valves & Automation Solutions",
    description:
      "UFLOW Automation is a leading manufacturer of industrial solenoid valves, pneumatic valves, and automation products for diverse industrial applications.",
    href: "/brands/uflow",
    logo: "/assets/logos/partners/uflow.png",
    website: "https://www.uflowautomation.com",
  },
];

export const brandProductLines: Record<string, string[]> = {
  parker: [
    "Parker Automation — actuators, valves, air preparation, hose & couplings",
    "Parker Instrumentation — fittings, valves, regulators, manifolds",
    "Parker Hydraulic — cylinders, pumps, motors, hose & tube fittings",
    "Parker Filtration — air, gas, hydraulic, and process filters",
    "Parker Fluid Connectors — brass fittings, industrial hose, quick disconnects",
    "Parker Seals — O-rings, dynamic seals, extruded seals, metal seals",
    "Parker Climate & Industrial Control — refrigeration and HVAC components",
  ],
  legris: [
    "Push-in Fittings — 3 mm to 16 mm tube; M3 to G1/2\"",
    "Function Fittings — flow controls, blocking fittings, QEV, silencers",
    "Technical Tubing & Hose — PU, PA, PE, FEP, PFA, braided PVC",
    "Industrial Blowguns & Valves — ball, needle, butterfly valves",
    "Air Service Units — filters, regulators, lubricators, FRL's, QRC",
    "Valves & Solenoid Valves — M5 to 4\" BSP",
    "Adaptors — brass, stainless steel, aluminium",
  ],
  transair: [
    "Compressed air pipe work systems — division of Parker Legris",
    "Compatible fluids: air, nitrogen, vacuum & argon",
    "Pipe diameters: 17, 25, 40, 63, 76, 100 & 168 mm",
    "Max pressure: 13 bar (-20°C to +60°C); 16 bar (-20°C to +45°C)",
    "100% recyclable materials; silicone free guarantee",
  ],
  rectus: [
    "Low-Pressure Brass & Steel quick couplings",
    "Stainless steel and thermoplastic couplings",
    "Safety and mold connection systems",
    "Coded systems and measuring systems",
    "Accessories for pneumatic and fluid handling",
  ],
  airtac: [
    "Pneumatic Cylinders & Actuators",
    "Directional Control Valves",
    "Air Preparation Units (FRL)",
    "Pneumatic Fittings and Tubing",
  ],
  origa: [
    "Pneumatic and rodless cylinders — OSP-P series",
    "Stroke lengths up to 6000 mm",
    "Extended seal life minimum 8,000 km operation",
    "Pneumatic and electric drive types",
    "From foundry to clean room applications",
  ],
  piab: [
    "Suction cups and grippers",
    "Vacuum pumps and generators — COAX® technology",
    "Vacuum cartridges and integrations",
    "Vacuum conveyors for powder & bulks",
    "piSAVE and optimizing controls",
  ],
  pneumax: [
    "Pneumatic Cylinders — Standard, VDMA, microcylinders, rodless",
    "Valves & Solenoid Valves — miniature, poppet, direct acting",
    "Air Service — filters, coalescing filters, FRL's, boosters",
    "Manipulation — grippers, rotary actuators, guided cylinders",
  ],
  luthra: [
    "Pneumatic Cylinder & Mountings",
    "Classic Series F.R.L.",
    "Hydraulic Cylinder",
    "Solenoid Valve with Flame Proof Enclosure",
    "Food Grade Fitting and LLDPE Tubes",
    "Advance Piping Solutions",
  ],
  cmatic: [
    "Push-in fittings for automation",
    "Standard and customized fittings",
    "Function fittings and valves",
    "Tubes and accessories for fluid control",
  ],
  uflow: [
    "Solenoid Valves — Pilot Operated, Direct Acting",
    "Pneumatic Valves — Directional Control, Namur",
    "Angle Seat Valves — Y-Type Pneumatically Controlled",
    "Rotary Pneumatic Actuators",
    "Air Cylinders & Air Preparation Units",
  ],
};

export const productCategories = [
  {
    id: "pneumatics",
    name: "Pneumatics",
    description:
      "Push-in fittings, tubing, ball valves, QRC's, FRL's, solenoid valves, pneumatic cylinders, and complete pneumatic system solutions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
    products: [
      "Push-in Fittings & Tubing",
      "Pneumatic Cylinders",
      "Solenoid Valves",
      "FRL Units & Air Service",
      "Quick Release Couplings",
    ],
  },
  {
    id: "hydraulics",
    name: "Hydraulics",
    description:
      "Hydraulic cylinders, valves, fittings, hoses, power packs, and diagnostic equipment for demanding industrial applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
    products: [
      "Hydraulic Cylinders",
      "Hydraulic Valves",
      "Tube Fittings & Hoses",
      "Power Packs",
      "Accumulators & Pumps",
    ],
  },
  {
    id: "instrumentation",
    name: "Instrumentation",
    description:
      "Instrumentation valves, fittings, regulators, manifolds, and process control components for precision fluid handling.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
    products: [
      "Instrumentation Fittings",
      "Needle & Ball Valves",
      "Pressure Regulators",
      "Process Manifolds",
      "High Purity Gas Delivery",
    ],
  },
  {
    id: "filtration",
    name: "Filtration",
    description:
      "Compressed air filters, coalescing filters, hydraulic filters, lubrication filters, and condition monitoring solutions.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    products: [
      "Air & Gas Filters",
      "Coalescing Filters",
      "Hydraulic Filters",
      "Filter Regulators",
      "Condition Monitoring",
    ],
  },
  {
    id: "vacuum",
    name: "Vacuum Automation",
    description:
      "Vacuum pumps, generators, suction cups, grippers, and conveyors for automated material handling and factory automation.",
    image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
    products: [
      "Vacuum Pumps & Generators",
      "Suction Cups & Grippers",
      "Vacuum Conveyors",
      "COAX® Technology",
      "Vacuum Controls",
    ],
  },
  {
    id: "seals",
    name: "O-Rings & Seals",
    description:
      "Dynamic seals, elastomeric O-rings, extruded seals, high temperature metal seals, and EMI shielding solutions.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
    products: [
      "O-Rings & Dynamic Seals",
      "Extruded Seals",
      "Metal Seals",
      "EMI Shielding",
      "Thermal Management",
    ],
  },
];

export const industries = [
  {
    name: "Engineering",
    description:
      "Complete pneumatic systems, OEM package deals, and automation components for engineering contractors.",
    icon: "wrench",
    image: "/assets/industries/engineering.png",
  },
  {
    name: "Pharmaceuticals",
    description:
      "Precision fluid control and cleanroom-compatible components for pharmaceutical manufacturing and processing.",
    icon: "pill",
    image: "/assets/industries/pharma.png",
  },
  {
    name: "Chemicals",
    description:
      "Corrosion-resistant fittings, valves, and instrumentation for chemical processing and handling applications.",
    icon: "flask",
    image: "/assets/industries/chemicals.png",
  },
  {
    name: "Textile",
    description:
      "Pneumatic cylinders, valves, and automation components specifically tailored for the textile industry.",
    icon: "cog",
    image: "/assets/industries/textile.png",
  },
  {
    name: "Packaging",
    description:
      "Vacuum handling and pneumatic automation solutions for high-speed packaging lines.",
    icon: "package",
    image: "/assets/industries/packaging.png",
  },
  {
    name: "Food Processing",
    description:
      "Food grade fittings, LLDPE tubes, and hygienic components for food and beverage production.",
    icon: "utensils",
    image: "/assets/industries/food.png",
  },
  {
    name: "Automotive",
    description:
      "Quick coupling systems, pneumatic components, and automation solutions for automotive production.",
    icon: "car",
    image: "/assets/industries/car.cms",
  },
  {
    name: "Oil & Gas",
    description:
      "High-pressure valves, hoses, and connectors for petrochemical plants and refineries.",
    icon: "factory",
    image: "/assets/industries/oil.png",
  },
];

export const whyChooseUs = [
  {
    title: "Nearly 30 Years of Experience",
    description:
      "Active in the field of pneumatics since 1996, representing world-leading brands for over two decades.",
  },
  {
    title: "Technical Expertise",
    description:
      "Highly qualified and experienced techno crafts providing expert guidance for your specific application needs.",
  },
  {
    title: "Large Inventory",
    description:
      "We hold large quantities of stock to ensure fast delivery and minimize your project lead times.",
  },
  {
    title: "Trusted Global Brands",
    description:
      "Authorized representative of Parker, Legris, Piab, Pneumax, Baumer, and other industry-leading manufacturers.",
  },
  {
    title: "Individual Attention",
    description:
      "Dedicated support for specific needs, special considerations, and material of construction requirements.",
  },
  {
    title: "Complete Solutions",
    description:
      "Designing, supplying, erecting, and commissioning total pneumatic systems with OEM package deals.",
  },
];



export const stats = [
  { label: "Years in Business", value: "30+" },
  { label: "Global Brands", value: "12+" },
  { label: "Product Categories", value: "9" },
  { label: "Industries Served", value: "8" },
];

export const images = {
  logo: "/assets/logos/ross-enterprises/rosslogo.png",
  hero: "/assets/product/pneumatics.png",
  about: "/assets/industries/engineering.png",
  facility: "/assets/industries/oil.png",
};

export interface Customer {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  products: string[];
  solutions: string[];
  relationship: string;
}

export const customers: Customer[] = [
  {
    id: "siemens",
    name: "Siemens",
    logo: "/assets/logos/customers/siemens.png",
    industry: "Industrial Automation",
    description: "Global technology powerhouse focusing on industry, infrastructure, transport, and healthcare.",
    products: ["Pneumatic Systems", "Instrumentation", "Valves"],
    solutions: ["Factory Automation", "Process Control"],
    relationship: "Long-term partner for automation components."
  },
  {
    id: "abb",
    name: "ABB",
    logo: "/assets/logos/customers/abb.png",
    industry: "Electrical Equipment",
    description: "Leading global technology company that energizes the transformation of society and industry.",
    products: ["Hydraulic Systems", "Sensors", "Connectors"],
    solutions: ["Power Grid Solutions", "Industrial Robotics"],
    relationship: "Preferred supplier for fluid power solutions."
  },
  {
    id: "elecon",
    name: "Elecon",
    logo: "/assets/logos/customers/elecon.png",
    industry: "Engineering",
    description: "One of the largest manufacturers of material handling equipment and industrial gears in Asia.",
    products: ["Pneumatic Cylinders", "FRL Units"],
    solutions: ["Material Handling Automation"],
    relationship: "Supplying heavy-duty industrial components."
  },
  {
    id: "ge",
    name: "GE (General Electric)",
    logo: "/assets/logos/customers/generalelectric.png",
    industry: "Conglomerate",
    description: "Multinational conglomerate operating in sectors including aviation, power, and renewable energy.",
    products: ["Instrumentation", "Filtration Solutions"],
    solutions: ["Power Generation Systems", "Aviation Components"],
    relationship: "Strategic partner for specialized fluid control."
  },
  {
    id: "ceat",
    name: "CEAT",
    logo: "/assets/logos/customers/ceat.png",
    industry: "Tyre Manufacturing",
    description: "One of India's leading tyre manufacturers with a global presence.",
    products: ["Pneumatic Valves", "Hoses", "Fittings"],
    solutions: ["Tyre Curing Automation", "Production Line Maintenance"],
    relationship: "Trusted vendor for pneumatic maintenance."
  },
  {
    id: "apollo",
    name: "Apollo",
    logo: "/assets/logos/customers/apollo.svg",
    industry: "Tyre Manufacturing",
    description: "Global tyre manufacturer with state-of-the-art manufacturing facilities.",
    products: ["Vacuum Systems", "Pneumatic Actuators"],
    solutions: ["Automated Material Handling"],
    relationship: "Key supplier for vacuum automation."
  },
  {
    id: "banco",
    name: "Banco",
    logo: "/assets/logos/customers/banco.png",
    industry: "Automotive Components",
    description: "Leader in engine cooling and sealing systems for automotive and industrial applications.",
    products: ["Seals & O-Rings", "Hydraulic Fittings"],
    solutions: ["Engine Cooling Systems"],
    relationship: "Supplying precision sealing solutions."
  },
  {
    id: "zydus",
    name: "Zydus",
    logo: "/assets/logos/customers/zydus.png",
    industry: "Pharmaceuticals",
    description: "Global lifesciences company dedicated to healthcare.",
    products: ["Cleanroom Fittings", "Stainless Steel Valves"],
    solutions: ["Hygienic Fluid Handling"],
    relationship: "Partner for pharmaceutical grade components."
  },
  {
    id: "raychem-rpg",
    name: "Raychem RPG",
    logo: "/assets/logos/customers/raychem.png",
    industry: "Energy & Infrastructure",
    description: "Leading player in the energy and infrastructure sector.",
    products: ["Instrumentation", "Connectors"],
    solutions: ["Energy Distribution Systems"],
    relationship: "Technical partner for infrastructure projects."
  },
  {
    id: "everest-spices",
    name: "Everest Spices",
    logo: "/assets/logos/customers/everest.png",
    industry: "Food & Beverage",
    description: "India's largest selling spice brand.",
    products: ["Pneumatic Conveying Systems", "Food-Grade Tubing"],
    solutions: ["Automated Spice Processing"],
    relationship: "Vendor for food-safe automation."
  },
  {
    id: "real-namkeen",
    name: "Real Namkeen",
    logo: "/assets/logos/customers/real.png",
    industry: "Food & Beverage",
    description: "Popular Indian snack manufacturer.",
    products: ["Vacuum Grippers", "Pneumatic Valves"],
    solutions: ["Snack Packaging Automation"],
    relationship: "Supporting high-speed packaging lines."
  },
  {
    id: "mg-motor",
    name: "MG Motor",
    logo: "/assets/logos/customers/mg.png",
    industry: "Automotive",
    description: "Global automotive brand known for its innovation and heritage.",
    products: ["Hydraulic Power Packs", "Quick Couplings"],
    solutions: ["Vehicle Assembly Automation"],
    relationship: "Automotive assembly line partner."
  },
  {
    id: "schneider-electric",
    name: "Schneider Electric",
    logo: "/assets/logos/customers/schneider.png",
    industry: "Energy Management",
    description: "Global leader in energy management and automation.",
    products: ["Sensors", "Automation Components"],
    solutions: ["Digital Transformation of Energy"],
    relationship: "Authorized partner for automation products."
  },
  {
    id: "rotex",
    name: "Rotex",
    logo: "/assets/logos/customers/rotex.png",
    industry: "Automation",
    description: "Leading manufacturer of solenoid valves and actuators.",
    products: ["Solenoid Valves", "Positioners"],
    solutions: ["Process Automation Solutions"],
    relationship: "Collaborative partner for valve solutions."
  },
  {
    id: "amul-dairy",
    name: "Amul Dairy",
    logo: "/assets/logos/customers/amul.png",
    industry: "Dairy",
    description: "World's largest milk producer.",
    products: ["Stainless Steel Fittings", "Pneumatic Valves"],
    solutions: ["Dairy Processing Automation"],
    relationship: "Supplying hygienic fluid control systems."
  },
  {
    id: "birla-century",
    name: "Birla Century",
    logo: "/assets/logos/customers/aditya.png",
    industry: "Textiles",
    description: "Leading textile manufacturer part of Aditya Birla Group.",
    products: ["Pneumatic Cylinders", "Lubricators"],
    solutions: ["Textile Machinery Automation"],
    relationship: "Long-standing vendor for textile mills."
  },
  {
    id: "voltas",
    name: "Voltas",
    logo: "/assets/logos/customers/voltas.png",
    industry: "Engineering & Cooling",
    description: "India's largest air conditioning company and a leading engineering solutions provider.",
    products: ["Pneumatic Components", "Fluid Control"],
    solutions: ["Cooling Systems Automation"],
    relationship: "Trusted supplier for engineering components."
  },
  {
    id: "plasser",
    name: "Plasser India",
    logo: "/assets/logos/customers/plasser.png",
    industry: "Railway Manufacturing",
    description: "Manufacturer of high-performance track maintenance machines.",
    products: ["Hydraulic Systems", "Pneumatic Valves"],
    solutions: ["Track Maintenance Automation"],
    relationship: "Partner for heavy-duty railway machinery."
  },
  {
    id: "schaeffler",
    name: "Schaeffler",
    logo: "/assets/logos/customers/schaeffler.png",
    industry: "Automotive & Industrial",
    description: "Global automotive and industrial supplier of high-precision components and systems.",
    products: ["Pneumatic Actuators", "Sensors"],
    solutions: ["Industrial Automation"],
    relationship: "Supplier for precision manufacturing."
  },
  {
    id: "idmc",
    name: "IDMC",
    logo: "/assets/logos/customers/idmc.png",
    industry: "Dairy & Food Equipment",
    description: "Leading manufacturer of equipment for dairy, pharmaceuticals, and beverages.",
    products: ["Hygienic Valves", "Stainless Steel Fittings"],
    solutions: ["Dairy Processing Automation"],
    relationship: "Vendor for food-safe and hygienic fluid control."
  }
];
