export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 999,
    priceYearly: 799,
    description: "Ideal for micro-retailers and small traders requiring basic GST billing and simple inventory management.",
    features: [
      "Up to 2 User Accounts",
      "GST Billing & Tax Invoicing",
      "Core Inventory Management (1 Warehouse)",
      "Standard Purchase Management",
      "UPI QR Code Invoice Integration",
      "WhatsApp & SMS Invoice Alerts",
      "Email Ticket Support (Business Hours)"
    ],
    ctaText: "Get Started Now",
    highlight: false
  },
  {
    id: "growth",
    name: "Growth",
    priceMonthly: 2499,
    priceYearly: 1999,
    description: "Perfect for fast-growing companies and multi-branch stores requiring full ERP suites and real-time analysis.",
    features: [
      "Up to 10 User Accounts",
      "GST Invoicing & e-Way Bill Integration",
      "Advanced Multi-Warehouse Inventory",
      "Double-Entry Accounting & Ledger Books",
      "CRM & Visual Sales Pipeline",
      "Biometric HR & Payroll Processing",
      "99.9% Uptime Cloud Hosting & Backups",
      "Priority Call & Remote Support"
    ],
    ctaText: "Start Free Trial",
    highlight: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "Designed for large manufacturing plants, high-volume distributors, and complex enterprise requirements.",
    features: [
      "Unlimited User Accounts",
      "Full Suite + Manufacturing (MRP) Module",
      "Custom Bill of Materials (BOM) & Work Orders",
      "Dedicated High-Speed Cloud Server Instance",
      "Tailored API Integrations (Shopify, Logistics)",
      "Complete On-Site Training & Deployment",
      "24/7 Dedicated Account Manager Support",
      "SLA-backed Uptime & Custom Contracts"
    ],
    ctaText: "Request Custom Quote",
    highlight: false
  }
];

export const comparisonMatrix = [
  { module: "GST Billing & Invoicing", starter: true, growth: true, enterprise: true },
  { module: "e-Way Bills & e-Invoicing Direct Sync", starter: false, growth: true, enterprise: true },
  { module: "Real-time Inventory Tracking", starter: "Basic", growth: "Advanced", enterprise: "Unlimited" },
  { module: "Multi-Warehouse Support", starter: false, growth: "Up to 5", enterprise: "Unlimited" },
  { module: "Double-Entry Bookkeeping", starter: false, growth: true, enterprise: true },
  { module: "Bank Reconciliation", starter: false, growth: true, enterprise: true },
  { module: "CRM & Pipeline Management", starter: false, growth: true, enterprise: true },
  { module: "HR, Biometric Attendance & Payroll", starter: false, growth: true, enterprise: true },
  { module: "Manufacturing & BOM Costing", starter: false, ...{ growth: false, enterprise: true } },
  { module: "Custom REST API Access", starter: false, ...{ growth: false, enterprise: true } },
  { module: "Daily Automated Cloud Backups", starter: "Weekly", growth: "Daily", enterprise: "Hourly" },
  { module: "Dedicated Account Manager", starter: false, growth: false, enterprise: true }
];

export const pricingFAQs = [
  {
    question: "Are there any hidden setup or implementation charges?",
    answer: "No. All cloud deployment and initial configurations for Starter and Growth plans are completely free. For the Enterprise plan, customized migration and tailor-made development fees will be estimated upfront before signing the contract."
  },
  {
    question: "How long does it take for the ERP to go live?",
    answer: "Our standard templates allow Starter and Growth plans to go live in less than 48 hours. For customized setups (e.g., specific BOMs for manufacturing or multi-site retail POS setups), we guarantee standard system implementation in 7 working days."
  },
  {
    question: "Can we migrate our old accounts data from Tally or Excel?",
    answer: "Yes, absolutely! We provide simple Excel templates for importing customer databases, vendor details, active stock inventories, and chart of accounts. Our technical support team based in Surat will help you import your old data smoothly."
  },
  {
    question: "Is our business data secure on the cloud?",
    answer: "Your database is guarded by bank-grade SSL encryption and hosted on robust, firewall-secured Amazon Web Services (AWS) data centers in India. We perform automated daily redundant offsite backups so your records are fully safe."
  },
  {
    question: "Can we customize an ERP module or add more users later?",
    answer: "Yes! Our platform is modular. You can start with basic GST Billing and add Inventory or Payroll modules as your company expands. You can easily upgrade plans or add user licenses directly from your admin panel."
  }
];
