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
    "We would like to introduce ourselves as one of the foremost representative of companies like PARKER, LEGRIS, TRANSAIR, RECTUS, NITTO, ORIGA, PIAB, PNEUMAX, LUTHRA, CMATIC, BAUMER, AIRMATIC etc. which are into manufacturing of Pneumatics, Hydraulics, Instrumentation, Filter, Seals, Hoses & other products.",
  representation:
    "We are representing these companies for the past 20 years.",
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
    logo: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.parker.com",
  },
  {
    id: "legris",
    name: "Parker Legris",
    tagline: "Pneumatic Connection Systems",
    description:
      "Push-in fittings, function fittings, technical tubing, industrial blowguns, valves, air service units, and adaptors for compressed air and industrial fluids.",
    href: "/brands/legris",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.parker.com/legris",
  },
  {
    id: "transair",
    name: "Transair",
    tagline: "Advanced Pipe Systems for Industrial Fluids",
    description:
      "Division of Parker Legris specializing in compressed air pipe work systems. Compatible with air, nitrogen, vacuum and argon.",
    href: "/brands/transair",
    logo: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.parker.com/transair",
  },
  {
    id: "rectus",
    name: "Rectus",
    tagline: "Quick Coupling Systems",
    description:
      "Parker Quick Coupling Division Europe — complete quick connect coupling systems for low, medium and high pressure applications.",
    href: "/brands/rectus",
    logo: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.parker.com/rectus",
  },
  {
    id: "nitto",
    name: "Nitto Kohki",
    tagline: "Industrial Couplings & Fluid Connectors",
    description:
      "The widest variety of quick connects for manufacturing fluids — air, water, hydraulic and test media — of the highest quality.",
    href: "/brands/nitto",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.nitto-kohki.co.jp",
  },
  {
    id: "origa",
    name: "Parker Origa",
    tagline: "Rodless Cylinder Solutions",
    description:
      "Pneumatic and rodless cylinders with proven reliability, maintenance-free operation, and resistance to corrosion — from foundry to clean room.",
    href: "/brands/origa",
    logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.parker.com",
  },
  {
    id: "piab",
    name: "Piab",
    tagline: "Vacuum Automation Solutions",
    description:
      "Established in 1951, Piab designs innovative vacuum solutions for automated material handling and factory automation processes.",
    href: "/brands/piab",
    logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.piab.com",
  },
  {
    id: "pneumax",
    name: "Pneumax",
    tagline: "Pneumatic Automation Components",
    description:
      "European manufacturer of pneumatic cylinders, valves, air service units, and manipulation components for industrial automation.",
    href: "/brands/pneumax",
    logo: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.pneumaxspa.com",
  },
  {
    id: "luthra",
    name: "Luthra",
    tagline: "Pneumatic & Hydraulic Components",
    description:
      "Leading manufacturer of pneumatic and hydraulic components, advance piping solutions, food grade fittings, and LLDPE tubes.",
    href: "/brands/luthra",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
    website: "http://www.luthragroup.co.in",
  },
  {
    id: "cmatic",
    name: "CMATIC",
    tagline: "Push-In Fittings & Pneumatic Fluid Systems",
    description:
      "Specialized in push-in fittings and pneumatic fluid systems, providing high-quality solutions for industrial automation since 1979.",
    href: "/brands/cmatic",
    logo: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.cmatic.it",
  },
  {
    id: "baumer",
    name: "Baumer",
    tagline: "Industrial Sensors & Automation Solutions",
    description:
      "Baumer is a global leader in sensor technology and automation solutions, providing precision products for diverse industrial applications.",
    href: "/brands/baumer",
    logo: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.baumer.com",
  },
  {
    id: "airmatic",
    name: "Airmatic",
    tagline: "Pneumatic Control Components & Automation Systems",
    description:
      "Airmatic provides comprehensive pneumatic control components and automation systems for industrial efficiency.",
    href: "/brands/airmatic",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
    website: "https://www.airmatic.com",
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
  nitto: [
    "Quick connects for air, water, hydraulic and test media",
    "Helium, water, fuel, glycol test applications",
    "Widest variety available on the world market",
    "Made-to-order capability for demanding applications",
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
    id: "hoses",
    name: "Hoses & Tubing",
    description:
      "PU, PA, PE, FEP, PFA tubing, braided hoses, hydraulic hoses, and industrial hose assemblies for diverse media.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
    products: [
      "PU & PA Tubing",
      "Hydraulic Hoses",
      "Braided PVC Hose",
      "PTFE & PFA Tubing",
      "Recoil & Twin Tubing",
    ],
  },
  {
    id: "fittings",
    name: "Fittings & Connectors",
    description:
      "Brass, stainless steel, and nickel-plated adaptors, quick disconnects, and pipe systems for compressed air and fluids.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
    products: [
      "Push-in Fittings",
      "Tube Fittings",
      "Quick Disconnects",
      "Transair Pipe Systems",
      "Brass Adaptors",
    ],
  },
  {
    id: "valves",
    name: "Valves",
    description:
      "Ball valves, needle valves, solenoid valves, butterfly valves, and manual valves from M5 to 4\" BSP for industrial control.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1080",
    products: [
      "Ball Valves",
      "Solenoid Valves",
      "Needle Valves",
      "Butterfly Valves",
      "Safety & Lockable Valves",
    ],
  },
  {
    id: "filters",
    name: "Filters & Filtration",
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
    id: "seals",
    name: "Seals & O-Rings",
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
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Pharmaceuticals",
    description:
      "Precision fluid control and cleanroom-compatible components for pharmaceutical manufacturing and processing.",
    icon: "pill",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Chemicals",
    description:
      "Corrosion-resistant fittings, valves, and instrumentation for chemical processing and handling applications.",
    icon: "flask",
    image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Textile",
    description:
      "Pneumatic cylinders, valves, and automation components specifically tailored for the textile industry.",
    icon: "cog",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Packaging",
    description:
      "Vacuum handling and pneumatic automation solutions for high-speed packaging lines.",
    icon: "package",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Food Processing",
    description:
      "Food grade fittings, LLDPE tubes, and hygienic components for food and beverage production.",
    icon: "utensils",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Automotive",
    description:
      "Quick coupling systems, pneumatic components, and automation solutions for automotive production.",
    icon: "car",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Oil & Gas",
    description:
      "High-pressure valves, hoses, and connectors for petrochemical plants and refineries.",
    icon: "factory",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
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

export const featuredProducts = [
  {
    name: "Parker Legris Push-in Fittings",
    brand: "Parker Legris",
    description:
      "For compressed air, non-corrosive fluids, water, beverages, coolants, inert gases, oil, and chemicals. 3 mm to 16 mm tube; M3 to G1/2\".",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Parker Origa Rodless Cylinders",
    brand: "Parker Origa",
    description:
      "Maintenance-free rodless cylinders with stroke lengths up to 6000 mm, extended seal life, and pneumatic/electric drive types.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Piab Vacuum Solutions",
    brand: "Piab",
    description:
      "Suction cups, vacuum pumps, COAX® technology generators, and vacuum conveyors for powder and bulk material handling.",
    image: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Transair Compressed Air Systems",
    brand: "Transair",
    description:
      "Modular aluminum pipe systems for compressed air, nitrogen, vacuum and argon. Diameters 17–168 mm, up to 16 bar.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Pneumax Standard Cylinders",
    brand: "Pneumax",
    description:
      "European-manufactured standard/VDMA pneumatic cylinders, valves, FRL units, and manipulation components.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
  },
  {
    name: "Nitto Kohki Quick Connects",
    brand: "Nitto Kohki",
    description:
      "The widest variety of quick connects for air, water, hydraulic, and test media applications worldwide.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1080",
  },
];

export const stats = [
  { label: "Years in Business", value: "30+" },
  { label: "Global Brands", value: "12+" },
  { label: "Product Categories", value: "9" },
  { label: "Industries Served", value: "8" },
];

export const images = {
  logo: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1080",
  hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
  about: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
  facility: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1080",
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
    id: "pharmaceutical-leader",
    name: "Leading Pharma Corp",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
    industry: "Pharmaceuticals",
    description: "A major player in the global pharmaceutical industry specializing in life-saving medications.",
    products: ["Push-in Fittings", "Teflon Tubing", "Pneumatic Valves"],
    solutions: ["Cleanroom Fluid Control", "Automated Packaging Lines"],
    relationship: "Supplying precision components for over 10 years."
  },
  {
    id: "automotive-giant",
    name: "Apex Motors",
    logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
    industry: "Automotive",
    description: "Tier-1 automotive manufacturer producing high-performance commercial vehicles.",
    products: ["High-Pressure Hoses", "Quick Connect Couplers", "Hydraulic Cylinders"],
    solutions: ["Chassis Assembly Automation", "Leak Testing Systems"],
    relationship: "Primary vendor for fluid connector solutions."
  },
  {
    id: "chemical-processor",
    name: "Indus Chemicals",
    logo: "https://images.unsplash.com/photo-1532187643603-eb11029ba359?auto=format&fit=crop&q=80&w=1080",
    industry: "Chemical Processing",
    description: "Specialty chemical manufacturer with large-scale production facilities in GIDC Vadodara.",
    products: ["Instrumentation Valves", "Stainless Steel Fittings", "Pressure Gauges"],
    solutions: ["Corrosive Media Handling", "Process Monitoring Systems"],
    relationship: "Technical partner for instrumentation and safety valves."
  }
];
