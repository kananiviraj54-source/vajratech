export const industriesData = [
  {
    id: "manufacturing",
    icon: "🏭",
    name: "Manufacturing",
    shortLine: "Simplify raw materials planning, Bills of Materials, and workshop costs.",
    painPoints: [
      "Difficulty in tracking real-time work-in-progress (WIP) stages on the shop floor.",
      "Inaccurate inventory costing leading to low production margins.",
      "Inefficient tracking of machine runtimes and operator idle times.",
      "Delays in procurement due to lack of raw material demand forecasting."
    ],
    recommendedModules: [
      "Manufacturing & Production",
      "Inventory Management",
      "Purchase Management",
      "GST Billing & Invoicing"
    ],
    customization: "Custom workflows designed specifically for Surat's textile mills (weaving, processing, sizing), diamond cutting and polishing units, chemical processing plants, and engineering workshops."
  },
  {
    id: "retail",
    icon: "🛒",
    name: "Retail & Trading",
    shortLine: "Power retail counters with rapid offline POS and dynamic stock sync.",
    painPoints: [
      "Slow customer checkout counters during peak retail hours.",
      "Discrepancies in stock levels between physical shelves and warehouse databases.",
      "Difficulty in managing multiple product variations (sizes, colors, brands).",
      "No centralized customer registry to track loyalty and purchase patterns."
    ],
    recommendedModules: [
      "Point of Sale (POS)",
      "Inventory Management",
      "CRM & Sales Pipeline",
      "GST Billing & Invoicing"
    ],
    customization: "Configured layouts tailored for multi-branch apparel stores, electronics retail showrooms, FMCG supermarkets, wholesale trading counters, and pharmaceutical stores."
  },
  {
    id: "construction",
    icon: "🏗️",
    name: "Construction & Real Estate",
    shortLine: "Monitor project milestones, material purchase rates, and labor wages.",
    painPoints: [
      "Overspending on raw material purchases (cement, steel, aggregate) due to tracking gaps.",
      "Difficulty in tracking project budgets against actual milestone achievements.",
      "Lack of centralized logs for site-wise material consumption lists.",
      "Complex salary processing for multi-site labor and daily wage workers."
    ],
    recommendedModules: [
      "Project Management",
      "Purchase Management",
      "HR & Payroll",
      "Accounting & Finance"
    ],
    customization: "Site-wise stock consumption sheets, vendor payment schedule reminders, labor daily muster tracking, sub-contractor bill management, and RERA compliance reporting structures."
  },
  {
    id: "healthcare",
    icon: "🏥",
    name: "Healthcare & Pharmacy",
    shortLine: "Track batch codes, medicine expiry schedules, and patient billing records.",
    painPoints: [
      "High financial losses due to pharmaceutical batch expiry oversight.",
      "Delays in scanning barcodes and fetching generic drug alternatives during customer rushes.",
      "Errors in processing insurance claims and managing split payment bills.",
      "Complex supplier ordering schedules due to changing pharmaceutical demand."
    ],
    recommendedModules: [
      "Point of Sale (POS)",
      "Inventory Management",
      "Accounting & Finance",
      "API & Integrations"
    ],
    customization: "Proactive medicine expiry dashboard alerts, batch-wise drug tracking, split-billing configurations (Cash, Card, Insurance), generic alternatives index, and doctor prescription databases."
  },
  {
    id: "distribution",
    icon: "📦",
    name: "Distribution & Wholesale",
    shortLine: "Centralize dispatch control, shipping lists, and accounts receivable tracking.",
    painPoints: [
      "Lack of tracking for outstanding payments from multiple retail buyers.",
      "Inefficient delivery route planning causing high shipping overheads.",
      "Difficulty in managing credit limits and credit periods for retail clients.",
      "Delayed updates on inventory availability for field sales teams."
    ],
    recommendedModules: [
      "Inventory Management",
      "CRM & Sales Pipeline",
      "Purchase Management",
      "Mobile App Access"
    ],
    customization: "Credit limit enforcement wizards, wholesale bulk pricing structures, automated payment collection reminders, sales route tracking, and direct integration with logistic aggregators."
  },
  {
    id: "food",
    icon: "🍽️",
    name: "Food & Restaurant / QSR",
    shortLine: "Speed up orders with Kitchen Display Systems (KDS) and recipe cost control.",
    painPoints: [
      "Miscommunication between front desk waiters and kitchen staff leading to order delays.",
      "Inability to track raw ingredient usage resulting in high raw stock leakage.",
      "High customer cart abandonment rates on online food aggregator delivery portals.",
      "Slow table billing during rush dinner hours."
    ],
    recommendedModules: [
      "Point of Sale (POS)",
      "Inventory Management",
      "CRM & Sales Pipeline",
      "API & Integrations"
    ],
    customization: "Table-wise order trackers (KOT), recipe ingredient consumption models (BOM), Zomato/Swiggy API sync layouts, central multi-kitchen delivery logs, and SMS feedback links."
  }
];
