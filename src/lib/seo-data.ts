export interface DistrictLocation {
  city: string;
  state: string;
  region: string;
  industryFocus: string;
  nearby: string[];
}

export interface CityHubData {
  city: string;
  state: string;
  slug: string;
  isNCR: boolean;
  industryProfile: string;
  websiteNeeds: string;
  buyerBehavior: string;
  remoteWorkflow: string;
  topServices: { title: string; url: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const siteConfig = {
  name: "Website Development Expert",
  siteUrl: "https://websitedevelopmentexpert.in",
  phone: "+91 99906 13140",
  rawPhone: "+919990613140",
  email: "contact@websitedevelopmentexpert.in",
  address: {
    building: "8th Floor, ITHUM Tower, B-806, Block A",
    street: "Industrial Area, Sector 62",
    city: "Noida",
    region: "Uttar Pradesh",
    postalCode: "201309",
    country: "IN",
  },
  operatingHours: "Monday to Saturday, 9:00 AM - 7:00 PM IST",
  parentCompany: {
    name: "Brandmingo",
    url: "https://brandmingo.com",
    tagline: "A Venture of Brandmingo",
  },
  honestNotice:
    "Based in Noida, serving clients across India. All projects are engineered from our Noida HQ with transparent remote collaboration via video calls, WhatsApp, and email, with on-site visits arranged upon request.",
};

// 1. Five NCR Locations (close to Noida HQ)
export const ncrCities: DistrictLocation[] = [
  {
    city: "Noida",
    state: "Uttar Pradesh",
    region: "Delhi NCR",
    industryFocus: "IT/ITeS, Media Production, Digital Startups & Professional Services",
    nearby: ["Greater Noida", "Ghaziabad", "Delhi", "Gurugram"],
  },
  {
    city: "Delhi",
    state: "Delhi",
    region: "Delhi NCR",
    industryFocus: "Corporate Headquarters, Government & PSU Contractors, Legal & Export Houses",
    nearby: ["Noida", "Gurugram", "Ghaziabad", "Faridabad"],
  },
  {
    city: "Gurugram",
    state: "Haryana",
    region: "Delhi NCR",
    industryFocus: "Fintech, Global Capability Centers, Enterprise SaaS & Corporate Real Estate",
    nearby: ["Delhi", "Faridabad", "Noida"],
  },
  {
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    region: "Delhi NCR",
    industryFocus: "Manufacturing, Engineering Machinery, Packaging & Regional Distribution",
    nearby: ["Noida", "Delhi", "Greater Noida", "Meerut"],
  },
  {
    city: "Greater Noida",
    state: "Uttar Pradesh",
    region: "Delhi NCR",
    industryFocus: "Higher Education Institutions, Electronics Manufacturing & Logistics Parks",
    nearby: ["Noida", "Ghaziabad", "Delhi"],
  },
];

// 2. Ten Top Remote Cities (Strictly Remote Service with Genuine Deep Customization)
export const topRemoteCities: DistrictLocation[] = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    region: "West India",
    industryFocus: "BFSI, Media & Entertainment, Premium D2C Brands & Global Conglomerates",
    nearby: ["Pune", "Thane", "Navi Mumbai"],
  },
  {
    city: "Pune",
    state: "Maharashtra",
    region: "West India",
    industryFocus: "Automotive Engineering, Product R&D, B2B SaaS & Educational Technology",
    nearby: ["Mumbai", "Nashik", "Thane"],
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    industryFocus: "AI Startups, Venture-Backed Scaleups, Developer Tooling & Deep Tech",
    nearby: ["Mysuru", "Mangaluru", "Hyderabad"],
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    region: "South India",
    industryFocus: "Biotech & Pharmaceuticals, HITEC City Enterprise Tech & Healthtech Systems",
    nearby: ["Bengaluru", "Visakhapatnam", "Vijayawada"],
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    industryFocus: "Automotive Manufacturing, Hardware SaaS, Healthcare Networks & Port Logistics",
    nearby: ["Coimbatore", "Bengaluru", "Madurai"],
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West India",
    industryFocus: "Textile Mills, Bulk Chemicals, Pharmaceutical Export & GIFT City Fintech",
    nearby: ["Surat", "Vadodara", "Gandhinagar"],
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    industryFocus: "Handicrafts & Gems Export, Luxury Heritage Hospitality & Modern D2C Apparel",
    nearby: ["Delhi", "Jodhpur", "Kota"],
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    region: "East India",
    industryFocus: "FMCG Distribution, Tea & Agro Trading, Heavy Industrial Goods & Regional Corporate",
    nearby: ["Howrah", "Siliguri", "Bhubaneswar"],
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    region: "North India",
    industryFocus: "Healthcare Super-Specialties, State Administrative Portals & Modern Retail Chains",
    nearby: ["Kanpur", "Ayodhya", "Prayagraj"],
  },
  {
    city: "Chandigarh",
    state: "Chandigarh",
    region: "North India",
    industryFocus: "Tri-City Tech Startups, Overseas Education/Visa Portals & Agro-Pharma Businesses",
    nearby: ["Mohali", "Panchkula", "Ludhiana"],
  },
];

// Master list of 15 Indexed Locations
export const indexedLocations: DistrictLocation[] = [
  ...ncrCities,
  ...topRemoteCities,
];

export const indexedCitySlugs = new Set(
  indexedLocations.map((l) => `website-development-company-in-${l.city.toLowerCase().replace(/\s+/g, "-")}`)
);

// Remaining Locations (~35 cities) kept as valid routes with NOINDEX
export const nonIndexedLocations: DistrictLocation[] = [
  { city: "Faridabad", state: "Haryana", region: "North India", industryFocus: "Industrial Manufacturing", nearby: ["Delhi", "Gurugram", "Noida"] },
  { city: "Thane", state: "Maharashtra", region: "West India", industryFocus: "Commercial Enterprises & Services", nearby: ["Mumbai", "Navi Mumbai", "Pune"] },
  { city: "Navi Mumbai", state: "Maharashtra", region: "West India", industryFocus: "Tech Parks & Logistics", nearby: ["Mumbai", "Thane", "Pune"] },
  { city: "Nagpur", state: "Maharashtra", region: "Central India", industryFocus: "Logistics, Trade & Education", nearby: ["Bhopal", "Jabalpur", "Pune"] },
  { city: "Nashik", state: "Maharashtra", region: "West India", industryFocus: "Agriculture, Industry & Wine Export", nearby: ["Mumbai", "Pune", "Thane"] },
  { city: "Mysuru", state: "Karnataka", region: "South India", industryFocus: "Heritage, IT & Agro Enterprises", nearby: ["Bengaluru", "Mangaluru"] },
  { city: "Mangaluru", state: "Karnataka", region: "South India", industryFocus: "Port Trade, Petrochemicals & Healthcare", nearby: ["Bengaluru", "Mysuru", "Kozhikode"] },
  { city: "Hubballi", state: "Karnataka", region: "South India", industryFocus: "Commerce & Manufacturing", nearby: ["Bengaluru", "Dharwad", "Belagavi"] },
  { city: "Warangal", state: "Telangana", region: "South India", industryFocus: "Education & Local Trade", nearby: ["Hyderabad", "Karimnagar"] },
  { city: "Visakhapatnam", state: "Andhra Pradesh", region: "South India", industryFocus: "Port City, Steel & IT Coast", nearby: ["Vijayawada", "Bhubaneswar", "Hyderabad"] },
  { city: "Vijayawada", state: "Andhra Pradesh", region: "South India", industryFocus: "Commercial Hub & Agriculture", nearby: ["Guntur", "Visakhapatnam", "Hyderabad"] },
  { city: "Coimbatore", state: "Tamil Nadu", region: "South India", industryFocus: "Textiles, Engineering & Tech", nearby: ["Chennai", "Tirupur", "Bengaluru"] },
  { city: "Madurai", state: "Tamil Nadu", region: "South India", industryFocus: "Textiles & Cultural Tourism", nearby: ["Coimbatore", "Chennai", "Tiruchirappalli"] },
  { city: "Surat", state: "Gujarat", region: "West India", industryFocus: "Diamond, Textiles & Global Export", nearby: ["Ahmedabad", "Vadodara", "Mumbai"] },
  { city: "Vadodara", state: "Gujarat", region: "West India", industryFocus: "Petrochemicals & Engineering", nearby: ["Ahmedabad", "Surat", "Rajkot"] },
  { city: "Rajkot", state: "Gujarat", region: "West India", industryFocus: "Auto Parts & Precision Engineering", nearby: ["Ahmedabad", "Vadodara", "Jamnagar"] },
  { city: "Jodhpur", state: "Rajasthan", region: "North India", industryFocus: "Handicrafts & Solar Energy", nearby: ["Jaipur", "Udaipur", "Bikaner"] },
  { city: "Udaipur", state: "Rajasthan", region: "North India", industryFocus: "Hospitality & Mineral Processing", nearby: ["Jaipur", "Ahmedabad", "Jodhpur"] },
  { city: "Kota", state: "Rajasthan", region: "North India", industryFocus: "Education, Power & Coaching Hub", nearby: ["Jaipur", "Bhopal", "Gwalior"] },
  { city: "Kanpur", state: "Uttar Pradesh", region: "North India", industryFocus: "Leather, Heavy Industry & Engineering", nearby: ["Lucknow", "Agra", "Prayagraj"] },
  { city: "Varanasi", state: "Uttar Pradesh", region: "North India", industryFocus: "Silk Textiles, Tourism & Logistics", nearby: ["Prayagraj", "Patna", "Lucknow"] },
  { city: "Agra", state: "Uttar Pradesh", region: "North India", industryFocus: "Tourism, Footwear & Export", nearby: ["Mathura", "Delhi", "Gwalior"] },
  { city: "Prayagraj", state: "Uttar Pradesh", region: "North India", industryFocus: "Judiciary, Education & Services", nearby: ["Varanasi", "Kanpur", "Lucknow"] },
  { city: "Meerut", state: "Uttar Pradesh", region: "North India", industryFocus: "Sports Goods & Agro Machinery", nearby: ["Noida", "Ghaziabad", "Delhi"] },
  { city: "Howrah", state: "West Bengal", region: "East India", industryFocus: "Engineering, Railways & Transport", nearby: ["Kolkata", "Hooghly", "Burdwan"] },
  { city: "Siliguri", state: "West Bengal", region: "East India", industryFocus: "Tea Trade, Logistics & Tourism Gateway", nearby: ["Kolkata", "Guwahati", "Patna"] },
  { city: "Indore", state: "Madhya Pradesh", region: "Central India", industryFocus: "Commercial Capital, Pharma & IT", nearby: ["Bhopal", "Ujjain", "Jabalpur"] },
  { city: "Bhopal", state: "Madhya Pradesh", region: "Central India", industryFocus: "Administration, Engineering & Biotech", nearby: ["Indore", "Gwalior", "Jabalpur"] },
  { city: "Gwalior", state: "Madhya Pradesh", region: "Central India", industryFocus: "Tourism, Manufacturing & Trade", nearby: ["Agra", "Bhopal", "Jhansi"] },
  { city: "Jabalpur", state: "Madhya Pradesh", region: "Central India", industryFocus: "Defense Production & Agriculture", nearby: ["Bhopal", "Indore", "Nagpur"] },
  { city: "Ludhiana", state: "Punjab", region: "North India", industryFocus: "Bicycles, Hosiery & Industrial Exports", nearby: ["Chandigarh", "Jalandhar", "Amritsar"] },
  { city: "Amritsar", state: "Punjab", region: "North India", industryFocus: "Hospitality, Textiles & Border Trade", nearby: ["Jalandhar", "Ludhiana", "Chandigarh"] },
  { city: "Patna", state: "Bihar", region: "East India", industryFocus: "Fastest Growing FMCG & Service Hub", nearby: ["Gaya", "Muzaffarpur", "Ranchi"] },
  { city: "Ranchi", state: "Jharkhand", region: "East India", industryFocus: "Mineral Mining & Heavy Engineering", nearby: ["Jamshedpur", "Patna", "Kolkata"] },
  { city: "Jamshedpur", state: "Jharkhand", region: "East India", industryFocus: "Steel City & Auto Industry", nearby: ["Ranchi", "Kolkata", "Bhubaneswar"] },
  { city: "Kochi", state: "Kerala", region: "South India", industryFocus: "Maritime, Infopark & Export Port", nearby: ["Thiruvananthapuram", "Kozhikode", "Coimbatore"] },
  { city: "Thiruvananthapuram", state: "Kerala", region: "South India", industryFocus: "Technopark, Space Tech & Governance", nearby: ["Kochi", "Kollam", "Madurai"] },
  { city: "Bhubaneswar", state: "Odisha", region: "East India", industryFocus: "Smart City, Education & IT Tier-2 Hub", nearby: ["Cuttack", "Puri", "Kolkata"] },
];

export const indiaLocations: DistrictLocation[] = [
  ...indexedLocations,
  ...nonIndexedLocations,
];

export function toSlug(cityName: string): string {
  return `website-development-company-in-${cityName.toLowerCase().replace(/\s+/g, "-")}`;
}

export function isCityIndexed(slug: string): boolean {
  return indexedCitySlugs.has(slug);
}

export interface ServiceLocationData {
  slug: string;
  serviceTitle: string;
  cityName: string;
  stateName: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  subheading: string;
  heroDescription: string;
  isIndexed: boolean;
  features: { title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  nearbyCities: { name: string; slug: string }[];
}

export function getServiceLocation(slug: string): ServiceLocationData | null {
  const match = indiaLocations.find((loc) => toSlug(loc.city) === slug);
  if (!match) return null;

  const cityName = match.city;
  const stateName = match.state;
  const region = match.region;
  const focus = match.industryFocus;
  const isIndexed = indexedCitySlugs.has(slug);

  const nearbyCities = match.nearby.map((nearbyName) => ({
    name: nearbyName,
    slug: toSlug(nearbyName),
  }));

  return {
    slug,
    serviceTitle: "Website Development Company",
    cityName,
    stateName,
    region,
    isIndexed,
    metaTitle: `Website Development for ${cityName} | Noida HQ Remote Delivery`,
    metaDescription: `Website development for businesses in ${cityName}, ${stateName}. Engineered remotely from our Noida Sector 62 technology center with transparent sprints.`,
    heading: `Website Development for ${cityName}`,
    subheading: `Home » Services » Website Development in ${cityName}`,
    heroDescription: `Custom Next.js web applications, e-commerce stores, and corporate websites for businesses in ${cityName}, ${stateName}. Engineered at our Noida Sector 62 center with structured remote delivery.`,
    features: [
      {
        title: `Web Engineering for ${cityName} Businesses`,
        description: `Bespoke platforms designed to cater to ${cityName}'s ${focus} ecosystem with high scalability.`,
      },
      {
        title: "Sub-Second Loading & Core Web Vitals",
        description: `Lightweight Next.js SSR architecture delivering rapid mobile loading across all Indian networks.`,
      },
      {
        title: "Technical SEO & Schema.org Architecture",
        description: `Precision-targeted metadata, JSON-LD structured data, and semantic HTML5 tags.`,
      },
      {
        title: "Secure E-Commerce & Lead Generation",
        description: `High-conversion landing pages, UPI instant checkout, and automated customer funnels.`,
      },
    ],
    processSteps: [
      {
        step: "01",
        title: `Strategic Analysis for ${cityName} Market`,
        description: `Evaluating user flows, competitor benchmarks, and technical requirements.`,
      },
      {
        step: "02",
        title: "UX/UI Prototyping",
        description: "Crafting modern, accessible wireframes and interactive Figma prototypes.",
      },
      {
        step: "03",
        title: "Next.js & Tailwind Production",
        description: "Writing clean, type-safe TypeScript code for performance and stability.",
      },
      {
        step: "04",
        title: "Quality Assurance & Speed Audit",
        description: "Comprehensive cross-device speed testing and schema validation.",
      },
      {
        step: "05",
        title: "Live Deployment & Handover",
        description: `Deployment on cloud edge CDNs with full IP and source code transfer.`,
      },
    ],
    faqs: [
      {
        question: `How do you deliver website development services in ${cityName}?`,
        answer: `We deliver projects completely remotely from our Noida Sector 62 headquarters via Google Meet kickoff calls, daily WhatsApp coordination, and password-protected staging builds. We maintain no branch offices in ${cityName}.`,
      },
      {
        question: `What is the timeline to build a website for a ${cityName} business?`,
        answer: `Standard corporate websites are typically launched within 2 to 3 weeks, while custom e-commerce or SaaS applications require 4 to 8 weeks.`,
      },
      {
        question: `Do you provide support after the website goes live?`,
        answer: `Yes, all our websites include post-launch monitoring, security patch updates, and ongoing technical support retainers.`,
      },
    ],
    nearbyCities,
  };
}

export const serviceLocations: Record<string, ServiceLocationData> = Object.fromEntries(
  indiaLocations.map((loc) => {
    const slug = toSlug(loc.city);
    return [slug, getServiceLocation(slug)!];
  })
);

