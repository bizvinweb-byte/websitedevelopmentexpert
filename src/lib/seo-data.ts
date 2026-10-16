export interface DistrictLocation {
  city: string;
  state: string;
  region: string;
  industryFocus: string;
  nearby: string[];
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
  features: { title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  nearbyCities: { name: string; slug: string }[];
}

export const siteConfig = {
  name: "Website Development Expert",
  siteUrl: "https://websitedevelopmentexpert.com",
  phone: "+91 99906 13140",
  rawPhone: "+919990613140",
  email: "contact@websitedevelopmentexpert.com",
  googleSheetUrl:
    process.env.GOOGLE_SHEET_URL ||
    "https://script.google.com/macros/s/AKfycbz6kPgNw555NUGM33b2_rfP6pV5p8BO_CVy0cVTBThiCZPcHawhIx7r9Pv6MACju-lD/exec",
  address: {
    street: "8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62",
    city: "Noida",
    region: "Uttar Pradesh",
    postalCode: "201309",
    country: "IN",
  },
};

// All-India Master Districts & Cities Database
export const indiaLocations: DistrictLocation[] = [
  // Delhi NCR
  { city: "Noida", state: "Uttar Pradesh", region: "North India", industryFocus: "IT, Media & Startups", nearby: ["Greater Noida", "Ghaziabad", "Delhi", "Gurugram"] },
  { city: "Greater Noida", state: "Uttar Pradesh", region: "North India", industryFocus: "Education & Manufacturing", nearby: ["Noida", "Ghaziabad", "Delhi"] },
  { city: "Ghaziabad", state: "Uttar Pradesh", region: "North India", industryFocus: "Industrial & Retail", nearby: ["Noida", "Delhi", "Meerut"] },
  { city: "Delhi", state: "Delhi", region: "North India", industryFocus: "Corporate, Government & Commerce", nearby: ["Noida", "Gurugram", "Faridabad"] },
  { city: "Gurugram", state: "Haryana", region: "North India", industryFocus: "Fintech, SaaS & Fortune 500", nearby: ["Delhi", "Faridabad", "Noida"] },
  { city: "Faridabad", state: "Haryana", region: "North India", industryFocus: "Industrial Manufacturing", nearby: ["Delhi", "Gurugram", "Noida"] },

  // Maharashtra
  { city: "Mumbai", state: "Maharashtra", region: "West India", industryFocus: "Financial Hub, Media & Global Enterprises", nearby: ["Thane", "Navi Mumbai", "Pune"] },
  { city: "Pune", state: "Maharashtra", region: "West India", industryFocus: "IT Hub, Automobile & Education", nearby: ["Mumbai", "Thane", "Nashik"] },
  { city: "Thane", state: "Maharashtra", region: "West India", industryFocus: "Commercial Enterprises & Services", nearby: ["Mumbai", "Navi Mumbai", "Pune"] },
  { city: "Navi Mumbai", state: "Maharashtra", region: "West India", industryFocus: "Tech Parks & Logistics", nearby: ["Mumbai", "Thane", "Pune"] },
  { city: "Nagpur", state: "Maharashtra", region: "Central India", industryFocus: "Logistics, Trade & Education", nearby: ["Bhopal", "Jabalpur", "Pune"] },
  { city: "Nashik", state: "Maharashtra", region: "West India", industryFocus: "Agriculture, Industry & Wine Export", nearby: ["Mumbai", "Pune", "Thane"] },

  // Karnataka
  { city: "Bengaluru", state: "Karnataka", region: "South India", industryFocus: "Silicon Valley of India, Startups & AI", nearby: ["Mysuru", "Mangaluru", "Hyderabad"] },
  { city: "Mysuru", state: "Karnataka", region: "South India", industryFocus: "Heritage, IT & Agro Enterprises", nearby: ["Bengaluru", "Mangaluru"] },
  { city: "Mangaluru", state: "Karnataka", region: "South India", industryFocus: "Port Trade, Petrochemicals & Healthcare", nearby: ["Bengaluru", "Mysuru", "Kozhikode"] },
  { city: "Hubballi", state: "Karnataka", region: "South India", industryFocus: "Commerce & Manufacturing", nearby: ["Bengaluru", "Dharwad", "Belagavi"] },

  // Telangana & Andhra Pradesh
  { city: "Hyderabad", state: "Telangana", region: "South India", industryFocus: "Pharma, Biotech & IT Capital", nearby: ["Bengaluru", "Visakhapatnam", "Vijayawada"] },
  { city: "Warangal", state: "Telangana", region: "South India", industryFocus: "Education & Local Trade", nearby: ["Hyderabad", "Karimnagar"] },
  { city: "Visakhapatnam", state: "Andhra Pradesh", region: "South India", industryFocus: "Port City, Steel & IT Coast", nearby: ["Vijayawada", "Bhubaneswar", "Hyderabad"] },
  { city: "Vijayawada", state: "Andhra Pradesh", region: "South India", industryFocus: "Commercial Hub & Agriculture", nearby: ["Guntur", "Visakhapatnam", "Hyderabad"] },

  // Tamil Nadu
  { city: "Chennai", state: "Tamil Nadu", region: "South India", industryFocus: "Automobile, SaaS & Healthcare", nearby: ["Coimbatore", "Bengaluru", "Madurai"] },
  { city: "Coimbatore", state: "Tamil Nadu", region: "South India", industryFocus: "Textiles, Engineering & Tech", nearby: ["Chennai", "Tirupur", "Bengaluru"] },
  { city: "Madurai", state: "Tamil Nadu", region: "South India", industryFocus: "Textiles & Cultural Tourism", nearby: ["Coimbatore", "Chennai", "Tiruchirappalli"] },

  // Gujarat
  { city: "Ahmedabad", state: "Gujarat", region: "West India", industryFocus: "Textile, Pharmaceuticals & Startups", nearby: ["Surat", "Vadodara", "Gandhinagar"] },
  { city: "Surat", state: "Gujarat", region: "West India", industryFocus: "Diamond, Textiles & Global Export", nearby: ["Ahmedabad", "Vadodara", "Mumbai"] },
  { city: "Vadodara", state: "Gujarat", region: "West India", industryFocus: "Petrochemicals & Engineering", nearby: ["Ahmedabad", "Surat", "Rajkot"] },
  { city: "Rajkot", state: "Gujarat", region: "West India", industryFocus: "Auto Parts & Precision Engineering", nearby: ["Ahmedabad", "Vadodara", "Jamnagar"] },

  // Rajasthan
  { city: "Jaipur", state: "Rajasthan", region: "North India", industryFocus: "Tourism, Gems & Emerging Tech", nearby: ["Delhi", "Jodhpur", "Kota"] },
  { city: "Jodhpur", state: "Rajasthan", region: "North India", industryFocus: "Handicrafts & Solar Energy", nearby: ["Jaipur", "Udaipur", "Bikaner"] },
  { city: "Udaipur", state: "Rajasthan", region: "North India", industryFocus: "Hospitality & Mineral Processing", nearby: ["Jaipur", "Ahmedabad", "Jodhpur"] },
  { city: "Kota", state: "Rajasthan", region: "North India", industryFocus: "Education, Power & Coaching Hub", nearby: ["Jaipur", "Bhopal", "Gwalior"] },

  // Uttar Pradesh
  { city: "Lucknow", state: "Uttar Pradesh", region: "North India", industryFocus: "State Capital, Commerce & Healthcare", nearby: ["Kanpur", "Ayodhya", "Varanasi"] },
  { city: "Kanpur", state: "Uttar Pradesh", region: "North India", industryFocus: "Leather, Heavy Industry & Engineering", nearby: ["Lucknow", "Agra", "Prayagraj"] },
  { city: "Varanasi", state: "Uttar Pradesh", region: "North India", industryFocus: "Silk Textiles, Tourism & Logistics", nearby: ["Prayagraj", "Patna", "Lucknow"] },
  { city: "Agra", state: "Uttar Pradesh", region: "North India", industryFocus: "Tourism, Footwear & Export", nearby: ["Mathura", "Delhi", "Gwalior"] },
  { city: "Prayagraj", state: "Uttar Pradesh", region: "North India", industryFocus: "Judiciary, Education & Services", nearby: ["Varanasi", "Kanpur", "Lucknow"] },
  { city: "Meerut", state: "Uttar Pradesh", region: "North India", industryFocus: "Sports Goods & Agro Machinery", nearby: ["Noida", "Ghaziabad", "Delhi"] },

  // West Bengal
  { city: "Kolkata", state: "West Bengal", region: "East India", industryFocus: "Commercial Gateway to East, FMCG & IT", nearby: ["Howrah", "Siliguri", "Bhubaneswar"] },
  { city: "Howrah", state: "West Bengal", region: "East India", industryFocus: "Engineering, Railways & Transport", nearby: ["Kolkata", "Hooghly", "Burdwan"] },
  { city: "Siliguri", state: "West Bengal", region: "East India", industryFocus: "Tea Trade, Logistics & Tourism Gateway", nearby: ["Kolkata", "Guwahati", "Patna"] },

  // Madhya Pradesh
  { city: "Indore", state: "Madhya Pradesh", region: "Central India", industryFocus: "Commercial Capital, Pharma & IT", nearby: ["Bhopal", "Ujjain", "Jabalpur"] },
  { city: "Bhopal", state: "Madhya Pradesh", region: "Central India", industryFocus: "Administration, Engineering & Biotech", nearby: ["Indore", "Gwalior", "Jabalpur"] },
  { city: "Gwalior", state: "Madhya Pradesh", region: "Central India", industryFocus: "Tourism, Manufacturing & Trade", nearby: ["Agra", "Bhopal", "Jhansi"] },
  { city: "Jabalpur", state: "Madhya Pradesh", region: "Central India", industryFocus: "Defense Production & Agriculture", nearby: ["Bhopal", "Indore", "Nagpur"] },

  // Punjab, Haryana & Chandigarh
  { city: "Chandigarh", state: "Chandigarh", region: "North India", industryFocus: "Tri-City Tech Hub & Administration", nearby: ["Mohali", "Panchkula", "Ludhiana"] },
  { city: "Ludhiana", state: "Punjab", region: "North India", industryFocus: "Bicycles, Hosiery & Industrial Exports", nearby: ["Chandigarh", "Jalandhar", "Amritsar"] },
  { city: "Amritsar", state: "Punjab", region: "North India", industryFocus: "Hospitality, Textiles & Border Trade", nearby: ["Jalandhar", "Ludhiana", "Chandigarh"] },

  // Bihar & Jharkhand
  { city: "Patna", state: "Bihar", region: "East India", industryFocus: "Fastest Growing FMCG & Service Hub", nearby: ["Gaya", "Muzaffarpur", "Ranchi"] },
  { city: "Ranchi", state: "Jharkhand", region: "East India", industryFocus: "Mineral Mining & Heavy Engineering", nearby: ["Jamshedpur", "Patna", "Kolkata"] },
  { city: "Jamshedpur", state: "Jharkhand", region: "East India", industryFocus: "Steel City & Auto Industry", nearby: ["Ranchi", "Kolkata", "Bhubaneswar"] },

  // Kerala
  { city: "Kochi", state: "Kerala", region: "South India", industryFocus: "Maritime, Infopark & Export Port", nearby: ["Thiruvananthapuram", "Kozhikode", "Coimbatore"] },
  { city: "Thiruvananthapuram", state: "Kerala", region: "South India", industryFocus: "Technopark, Space Tech & Governance", nearby: ["Kochi", "Kollam", "Madurai"] },

  // Odisha
  { city: "Bhubaneswar", state: "Odisha", region: "East India", industryFocus: "Smart City, Education & IT Tier-2 Hub", nearby: ["Cuttack", "Puri", "Kolkata"] },
];

export function toSlug(cityName: string): string {
  return `website-development-company-in-${cityName.toLowerCase().replace(/\s+/g, "-")}`;
}

// Generate unique dynamic data per city to prevent duplicate content
export function getServiceLocation(slug: string): ServiceLocationData | null {
  const match = indiaLocations.find((loc) => toSlug(loc.city) === slug);
  if (!match) return null;

  const cityName = match.city;
  const stateName = match.state;
  const region = match.region;
  const focus = match.industryFocus;

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
    metaTitle: `Website Development Company in ${cityName} | Top Web Agency in ${stateName}`,
    metaDescription: `Best website development company in ${cityName}, ${stateName}. We deliver high-speed, SEO-engineered web applications with Next.js and Tailwind CSS for ${focus}.`,
    heading: `Website Development Company in ${cityName}`,
    subheading: `Home » Services » Website Development Company in ${cityName}`,
    heroDescription: `Accelerate your business in ${cityName} and across ${stateName} with our enterprise web development solutions. Specializing in ${focus}, we craft ultra-fast, mobile-first, and Google Page 1 SEO ranked websites.`,
    features: [
      {
        title: `Custom Web Applications for ${cityName} Businesses`,
        description: `Bespoke platforms designed to cater to ${cityName}'s thriving ${focus} ecosystem with high scalability.`,
      },
      {
        title: "Sub-Second Loading & Core Web Vitals",
        description: `Lightweight Next.js SSR architecture guaranteeing 95+ Google PageSpeed scores across mobile and desktop.`,
      },
      {
        title: "Local Search & Technical SEO Dominance",
        description: `Precision-targeted meta architecture, schema.org JSON-LD, and semantic tags designed for Google top 5 rankings.`,
      },
      {
        title: "Secure E-Commerce & Lead Generation Portals",
        description: `High-conversion landing pages and transaction portals optimized for maximum customer retention and ROI.`,
      },
    ],
    processSteps: [
      {
        step: "01",
        title: `Strategic Analysis for ${cityName} Market`,
        description: `Evaluating competitor gaps, local search intent, and user demographics in ${cityName}, ${stateName}.`,
      },
      {
        step: "02",
        title: "UX/UI Prototyping",
        description: "Crafting modern, accessible, and high-conversion wireframes and interactive designs.",
      },
      {
        step: "03",
        title: "Next.js & Tailwind Production",
        description: "Writing 100% semantic, clean, and type-safe code for seamless performance.",
      },
      {
        step: "04",
        title: "Google Core Web Vitals & SEO Audit",
        description: "Extensive speed testing, mobile responsiveness, and schema validation.",
      },
      {
        step: "05",
        title: "Launch & Googlebot Indexing",
        description: `Deployment on high-speed global CDNs with instant XML sitemap push to Google Search Console.`,
      },
    ],
    faqs: [
      {
        question: `Why hire our website development company in ${cityName}?`,
        answer: `We specialize in building websites that do not just look stunning, but actually rank on Google's 1st page for high-value searches in ${cityName} and ${stateName}. Our websites load in under 1 second and follow strict Google SEO algorithms.`,
      },
      {
        question: `How does our web development help businesses in ${cityName}?`,
        answer: `By combining modern Next.js technology with localized Schema.org data and semantic tags, we help your business capture the active local demand in ${cityName}'s ${focus} sectors.`,
      },
      {
        question: `What is the timeline to build a website in ${cityName}?`,
        answer: `Standard corporate websites are typically launched within 2 to 3 weeks, while custom SaaS or e-commerce applications require 4 to 6 weeks.`,
      },
      {
        question: `Do you provide SEO support after the website goes live?`,
        answer: `Yes, all our websites include built-in technical SEO, dynamic sitemaps, OpenGraph metadata, and structured data, along with post-launch maintenance.`,
      },
    ],
    nearbyCities,
  };
}

// Map of all locations by slug for fast lookups
export const serviceLocations: Record<string, ServiceLocationData> = Object.fromEntries(
  indiaLocations.map((loc) => {
    const slug = toSlug(loc.city);
    return [slug, getServiceLocation(slug)!];
  })
);
