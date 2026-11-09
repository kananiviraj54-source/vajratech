import { industries } from "@/data/company";
// Categories and examples describe possible project scope, not past client engagements.
const details = {
  manufacturing: [
    "Operations & infrastructure",
    "Factory",
    "Disconnected production records make it difficult to see stock, capacity, and procurement needs together.",
    ["software", "integration", "data"],
  ],
  retail: [
    "Commerce & experiences",
    "ShoppingBag",
    "Separate storefront, stock, and order systems create unnecessary work for customers and teams.",
    ["ecommerce", "ui-ux", "integration"],
  ],
  healthcare: [
    "Health, finance & learning",
    "HeartPulse",
    "Administrative handoffs and fragmented information can complicate scheduling and patient communications.",
    ["software", "ui-ux", "integration"],
  ],
  finance: [
    "Health, finance & learning",
    "Landmark",
    "Complex journeys and disconnected reporting can slow down customers and internal operations.",
    ["software", "data", "qa"],
  ],
  education: [
    "Health, finance & learning",
    "GraduationCap",
    "Learners and educators need clear access to learning materials, progress, and administrative tools.",
    ["web", "mobile", "ui-ux"],
  ],
  logistics: [
    "Operations & infrastructure",
    "Truck",
    "Shipment, warehouse, and partner updates are harder to act on when they live in separate systems.",
    ["software", "integration", "data"],
  ],
  construction: [
    "Operations & infrastructure",
    "Building2",
    "Projects, properties, and site teams need a shared view of progress, requests, and documentation.",
    ["software", "mobile", "data"],
  ],
  food: [
    "Commerce & experiences",
    "Utensils",
    "Disconnected booking, ordering, and guest information make consistent service harder to deliver.",
    ["web", "mobile", "integration"],
  ],
  professional: [
    "Business & community",
    "BriefcaseBusiness",
    "Manual client handoffs and scattered project information consume time better spent delivering services.",
    ["software", "integration", "ai-ml"],
  ],
  energy: [
    "Operations & infrastructure",
    "Zap",
    "Asset and service data needs to become clear information that operational teams can use.",
    ["data", "cloud", "software"],
  ],
  media: [
    "Commerce & experiences",
    "Clapperboard",
    "Audiences need intuitive discovery while content teams need manageable publishing and membership tools.",
    ["web", "ui-ux", "cloud"],
  ],
  startups: [
    "Business & community",
    "Rocket",
    "An early idea needs a focused scope, a useful first release, and room to evolve with feedback.",
    ["consulting", "ui-ux", "software"],
  ],
  distribution: [
    "Operations & infrastructure",
    "Package",
    "Partner orders, stock availability, and purchasing need to stay connected as volumes grow.",
    ["software", "integration", "ecommerce"],
  ],
  nonprofit: [
    "Business & community",
    "HandHeart",
    "Small teams need accessible tools to coordinate programs and build stronger community relationships.",
    ["web", "software", "ui-ux"],
  ],
  agriculture: [
    "Operations & infrastructure",
    "Sprout",
    "Field updates, procurement, and supplier records need to flow between teams and locations.",
    ["mobile", "data", "integration"],
  ],
  automotive: [
    "Commerce & experiences",
    "Car",
    "Vehicle inquiries, service bookings, and parts inventory need a coordinated digital workflow.",
    ["web", "software", "integration"],
  ],
  telecom: [
    "Operations & infrastructure",
    "RadioTower",
    "Service teams and customers need clearer visibility into requests, account information, and operations.",
    ["software", "cloud", "data"],
  ],
  travel: [
    "Commerce & experiences",
    "Plane",
    "Availability, partner systems, and booking details need to come together in a simple traveler experience.",
    ["web", "integration", "ui-ux"],
  ],
};
export const industryProfiles = industries.map((industry) => {
  const [category, icon, challenge, serviceIds] = details[industry.id];
  return { ...industry, category, icon, challenge, serviceIds };
});
export const industryCategories = [
  "All industries",
  "Operations & infrastructure",
  "Commerce & experiences",
  "Health, finance & learning",
  "Business & community",
];
