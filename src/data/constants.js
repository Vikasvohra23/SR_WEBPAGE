// ─── REPLACE THESE BEFORE GOING LIVE ───────────────────────
export const YOUR_WA_NUMBER   = "9319571414";   // e.g. 919876543210
export const YOUR_EMAIL       = "sr.relocationservices@gmail.com"; // for mailto fallback
export const ADMIN_PASSWORD   = "srrs2017";        // change this!
export const RATE_PER_CFT     = 120;               // hidden from clients

// ─── NAV ────────────────────────────────────────────────────
export const NAV_LINKS = ["Home","Services","About","Projects","Gallery","Estimate","Contact"];

// ─── CFT ITEMS  (cft values hidden from UI) ──────────────────
export const CFT_ITEMS = [
  { id:"bed",          label:"Bed (Double)",        cft:50  },
  { id:"half_bed",     label:"Bed (Single)",        cft:25  },
  { id:"wardrobe",     label:"Wardrobe",            cft:60  },
  { id:"sofa3",        label:"Sofa (3-Seater)",     cft:45  },
  { id:"sofa2",        label:"Sofa (2-Seater)",     cft:30  },
  { id:"sofa1",        label:"Sofa (1-Seater)",     cft:15  },
  { id:"center_table", label:"Center Table",        cft:12  },
  { id:"dining_table", label:"Dining Table",        cft:25  },
  { id:"chair",        label:"Chair",               cft:5   },
  { id:"fridge",       label:"Refrigerator",        cft:20  },
  { id:"washing",      label:"Washing Machine",     cft:18  },
  { id:"microwave",    label:"Microwave / OTG",     cft:6   },
  { id:"ac",           label:"AC (Split/Window)",   cft:12  },
  { id:"tv",           label:'TV (40"+)',            cft:10  },
  { id:"bike",         label:"Two-Wheeler",         cft:80  },
];

// ─── SERVICES ───────────────────────────────────────────────
export const SERVICES = [
  { num:"01", title:"Industrial Plant Relocation",  tags:["Rigging","No-Dismantle","Site-to-Site"],     desc:"Full plant moves, heavy machinery, robots, CMM machines, furnaces, production lines, vaccum packing experts, heavy machinery packing in imported saw & pine wood  ." },
  { num:"02", title:"Art, Heritage & Artifacts",    tags:["White Glove","Govt. Cleared","Climate-Safe"], desc:"Museum-grade handling of paintings, sculptures, and rare artifacts. Trusted by Rashtrapati Bhawan's Art Secretariat for the Presidential Museum." },
  { num:"03", title:"Export & International",       tags:["Vacuum Packing","Risk Free Solutions","Global"],  desc:"Vacuum packing, export-grade wooden crating, Shipments to USA, UK, Australia, Canada, South Africa, Scandinavia and Dubai." },
  { num:"04", title:"Corporate & IT Assets",        tags:["ESD-Safe","Chain of Custody","Zero Loss"],    desc:"Large-scale office moves, 100,000+ IT assets like laptops, desktops, hubs, servers, switches are relocated for Ameriprise, WNS, Unicharm and WHO South-East Asia." },
  { num:"05", title:"Exhibition & Events",          tags:["Time-Critical","Govt. Events","Setup & Strike"], desc:"End-to-end setup, display packing, and dismantling for G20 Summit, National Handicrafts Awards at Vigyan Bhawan." },
  { num:"06", title:"Luxury & Specialty",           tags:["High-Value","Recurring","Precision"],         desc:"Annual packing/unpacking of Maharaja Express — Heritage Items, bespoke furniture, and custom fittings under strict timelines." },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const PROJECTS = [
  { client:"Rashtrapati Bhawan",        title:"Presidential Museum",          tag:"Heritage · Govt.",       year:"Ongoing",   desc:"Rare paintings, sculptures & artifacts for the Art Secretariat's Presidential Museum." },
  { client:"IRCTC · Maharaja Express",  title:"Luxury Train Interiors",       tag:"Luxury · Annual",        year:"Recurring", desc:"Seasonal packing of Heritage items & custom train fittings." },
  { client:"Industrial Client",         title:"Heavy Machinery Relocation",   tag:"Industrial · Record",    year:"2023",      desc:"Intact shift of a 13-foot production line — zero disassembly & leveling support." },
  { client:"WNS currently Cape Gemini",          title:"1 Lakh IT Assets",     tag:"Corporate · Scale",      year:"2020–21",   desc:"Delivered Door to DoorIT setups with full safe packaging to IT Employees." },
  { client:"CCIC · Ministry of Textiles", title:"G20 Summit Exhibition",      tag:"Events · National",      year:"2023",      desc:"Full logistics, setup & dismantling for G20 handicraft pavilion at Bharat Mandapam." },
  { client:"WHO South-East Asia",       title:"International Office Move",    tag:"International · Ongoing",year:"2018–2026", desc:"Trusted office relocation partner for WHO SEARO — 8 years of unbroken service." },
];

// ─── GALLERY CATEGORIES ──────────────────────────────────────
// Drop your images inside  src/assets/gallery/<category-id>/
// Name them anything — 01.jpg, IMG_123.jpg, etc.
// Then import them in GalleryData.js (see that file)
export const GALLERY_CATEGORIES = [
  { id:"president",    label:"President of India",                    desc:"Rashtrapati Bhawan · Art Secretariat" },
  { id:"epch",         label:"EPCH Shilp Guru Awards",                desc:"National Handicrafts Awards Ceremony" },
  { id:"maharaja",     label:"Maharaja Express",                      desc:"Luxury Train — Annual Interior Move" },
  { id:"office",       label:"Office Shifting",                       desc:"Corporate & IT Relocations" },
  { id:"industrial",   label:"Industrial Shifting",                   desc:"Plant & Machinery Relocations" },
  { id:"vacuum",       label:"Vacuum Packing",                        desc:"Export-Grade Preservation Service" },
];

// ─── CLIENTS ────────────────────────────────────────────────
export const CLIENTS = [
  "Rashtrapati Bhawan","WHO South-East Asia","EPCH · Ministry of Textiles",
  "CCIC","Ameriprise","WNS","Minda","Continental","Takahata",
  "Senior Flexonics","Bando","Yakult","Unicharm","IRCTC","Maharaja’s Express",
  "CASA Paradox",
  "Flyjac",
  "Amtech",
  "Sunbeam",
  "Camel",
  "NCMG",
  "Victora Auto",
  "GKN Driveline",
  "Daikin",
  "Samsung",
  "Airtel",
  "Coin Tribe",
  "JS Power"
];

// ─── ABOUT CREDENTIALS ──────────────────────────────────────
export const CREDENTIALS = [
  { org:"Rashtrapati Bhawan · Art Secretariat", desc:"Packing & shifting rare artifacts for Presidential Museum" },
  { org:"WHO South-East Asia",                  desc:"Office relocation partner — 2018 to 2026, ongoing" },
  { org:"EPCH · Ministry of Textiles",          desc:"G20 Summit, National Handicrafts Awards, Vigyan Bhawan" },
  { org:"Ameriprise / WNS",                     desc:"100,000+ IT assets, servers, switches & hubs" },
  { org:"IRCTC · Maharaja Express",             desc:"Annual luxury train packing — furnitures & interiors" },
];

export const STATS = [
  { n:"2017", l:"Founded"           },
  { n:"100+", l:"Industrial Clients"},
  { n:"1L+",  l:"IT Assets Moved"   },
  { n:"100+",   l:"Countries Exported"},
];

// ─── CONTACT INFO ────────────────────────────────────────────
export const CONTACT_INFO = [
  { label:"Company",    value:"Shree Radhey Relocation Services" },
  { label:"Location",   value:"New Delhi, India"                 },
  { label:"WhatsApp",   value:"+91 9319571414,9810499121"                  },
  { label:"Speciality", value:"Industrial · Heritage · Corporate · Export" },
  { label:"Since",      value:"2017 — 8 Years of Trusted Service" },
];

export const SERVICE_TYPES = [
  "Industrial / Plant Relocation",
  "Art, Artifacts & Heritage",
  "Corporate / IT Asset Move",
  "Export & International",
  "Exhibition & Event Logistics",
  "Luxury / Specialty Move",
  "Vacuum Packing & Export",
  "Household Shifting",
  "Other",
];

export const TRUST_ITEMS = [
  "Rashtrapati Bhawan · Art Secretariat",
  "WHO South-East Asia · 2018–2026",
  "G20 Summit · CCIC",
  "Shilp Guru Awards · EPCH",
  "Maharaja Express · IRCTC",
  "100+ MNCs & Institutions",
];
