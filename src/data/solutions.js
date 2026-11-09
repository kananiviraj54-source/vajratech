export const solutionsData = [
  {
    id: "billing",
    icon: "🧾",
    title: "GST Billing & Invoicing",
    description: "Create GST-compliant invoices, e-way bills, and e-invoices instantly.",
    longDescription: "A comprehensive invoicing solution tailored for Indian tax compliance. Generate professional, GST-compliant tax invoices, credit notes, debit notes, and delivery challans in seconds. Directly integrated with the government portal for instant e-invoicing and automated e-way bill generation, reducing compliance workload significantly.",
    features: [
      "Instant GST-compliant tax invoicing",
      "Direct integration for one-click e-invoicing & e-way bills",
      "Automatic tax calculation (CGST, SGST, IGST, UTGST)",
      "Multi-rate GST and composition scheme billing",
      "Customizable invoice templates with business logo & signature",
      "Automated payment reminders with integrated UPI QR codes",
      "Detailed GSTR-1, GSTR-2, and GSTR-3B report generation"
    ],
    bestFor: "Manufacturers, Traders, Distributors, Retailers, and Service Providers."
  },
  {
    id: "inventory",
    icon: "📦",
    title: "Inventory Management",
    description: "Track stock levels, manage warehouses, and automate reordering.",
    longDescription: "Real-time inventory tracking designed to prevent stockouts and reduce excess capital locked in stock. Manage stock across multiple warehouses or retail stores. Features batch tracking, serial number tracking, expiry date monitoring, and automatic barcode generation to streamline warehouse operations.",
    features: [
      "Real-time stock tracking across multiple warehouses",
      "Batch and expiry date tracking with proactive alerts",
      "Serial number tracking for electronic items & equipment",
      "Automated low-stock alerts and purchase order generation",
      "Barcode generation, scanning, and printing support",
      "Stock valuation using FIFO, LIFO, and Average Cost methods",
      "Seamless stock adjustment and physical verification wizard"
    ],
    bestFor: "Wholesalers, Distributors, Retailers, and Manufacturing units."
  },
  {
    id: "accounting",
    icon: "📊",
    title: "Accounting & Finance",
    description: "Double-entry bookkeeping, cash flow, and tax reports.",
    longDescription: "A complete corporate financial accounting module built on robust double-entry principles. Manage accounts receivable, accounts payable, ledger entries, bank reconciliations, and asset depreciation. Generate real-time Balance Sheets, Profit & Loss statements, and Cash Flow reports for quick executive auditing.",
    features: [
      "Robust double-entry bookkeeping ledger system",
      "Automated bank reconciliation with major Indian banks",
      "Accounts Receivable (AR) and Accounts Payable (AP) management",
      "Journal entries, debit/credit notes, and cash book tracking",
      "Real-time Balance Sheet and Profit & Loss statement generation",
      "Fixed asset management with automated depreciation schedules",
      "Multi-currency support with real-time conversion rates"
    ],
    bestFor: "CFOs, Business Owners, Accountants, and Auditors."
  },
  {
    id: "crm",
    icon: "👥",
    title: "CRM & Sales Pipeline",
    description: "Manage leads, track opportunities, and close deals faster.",
    longDescription: "An intuitive customer relationship management platform built to convert leads into loyal clients. Track your entire sales pipeline, log customer interactions, schedule follow-ups, and generate accurate sales forecasts. Empower your sales representatives with instant customer history and quotation building tools.",
    features: [
      "Visual drag-and-drop sales pipeline stages",
      "Lead scoring, assignment, and automated distribution",
      "Detailed logs of calls, emails, and meetings per contact",
      "Instant quotation building with multi-tier pricing support",
      "Real-time sales forecasting and performance dashboards",
      "Integrated customer feedback and support ticket management",
      "WhatsApp & email API integration for quick client follow-ups"
    ],
    bestFor: "Sales teams, Service agencies, B2B companies, and Traders."
  },
  {
    id: "purchase",
    icon: "🛒",
    title: "Purchase Management",
    description: "Streamline supplier orders, goods receipts, and vendor bills.",
    longDescription: "Optimize your procurement lifecycle with absolute control over purchasing. Create Requests for Quotations (RFQs), compare vendor quotes, issue official Purchase Orders (POs), and verify incoming shipments against Goods Receipt Notes (GRNs). Track vendor performance and manage purchase ledger balances cleanly.",
    features: [
      "Structured Request for Quotation (RFQ) workflow",
      "One-click vendor comparison and purchase order generation",
      "Goods Receipt Note (GRN) verification against supplier invoices",
      "Vendor bill payment tracking and purchase return wizard",
      "Detailed supplier performance and price trend analysis",
      "Automatic ledger update and purchase tax classification",
      "Import purchasing management with custom duty calculations"
    ],
    bestFor: "Procurement managers, Manufacturers, and Wholesale traders."
  },
  {
    id: "pos",
    icon: "🏪",
    title: "Point of Sale (POS)",
    description: "Ultra-fast billing for retail checkout counters with offline support.",
    longDescription: "A powerful, intuitive point-of-sale interface designed for high-volume retail environments. Fully functional offline to guarantee uninterrupted sales during internet outages. Seamlessly syncs data with the central ERP cloud when connectivity is restored. Supports touchscreens, thermal printers, barcode scanners, and all digital payment modes.",
    features: [
      "Ultra-fast checkout interface with touchscreen optimization",
      "Fully functional offline billing with auto-sync when online",
      "Support for thermal receipt printers, barcode scanners, and cash drawers",
      "Accepts UPI, card payments, digital wallets, cash, and credit terms",
      "Daily shift opening/closing management with cash reconciliation logs",
      "Customer loyalty points and customized promotional discount codes",
      "Integrated weighing scale support for grocery and food stores"
    ],
    bestFor: "Supermarkets, Retail stores, Pharmacies, Apparel shops, and Restaurants."
  },
  {
    id: "payroll",
    icon: "👨‍💼",
    title: "HR & Payroll",
    description: "Manage employee attendance, leave, salary structures, and PF/ESIC.",
    longDescription: "Automate your workforce management and payroll processing while ensuring full compliance with Indian labor laws. Set up structured salary packages, manage attendance using biometric integrations, track leaves, and process monthly salaries in a single click with automated PF, ESIC, and Professional Tax calculations.",
    features: [
      "Biometric and mobile attendance tracking with geo-fencing",
      "Structured salary configuration with basic, HRA, DA, and allowances",
      "Automated monthly payroll calculation with one-click bank transfers",
      "Built-in compliance calculations for EPF, ESIC, and Professional Tax",
      "Employee leave application, tracking, and approval workflow",
      "Digital payslip generation with automated email/SMS distribution",
      "Detailed monthly attendance, overtime, and salary payout reports"
    ],
    bestFor: "HR Managers, Operations teams, and growing enterprises."
  },
  {
    id: "manufacturing",
    icon: "🏭",
    title: "Manufacturing & Production",
    description: "Bill of Materials (BOM), work orders, and raw material planning.",
    longDescription: "A specialized production tracking module designed for Indian manufacturers. Plan raw material requirements, define multi-level Bills of Materials (BOM), track production progress through customized work centers, and monitor cost of goods manufactured (COGM) in real time to ensure absolute process profitability.",
    features: [
      "Multi-level Bill of Materials (BOM) configuration",
      "Material Requirements Planning (MRP) for raw stock forecasting",
      "Structured work orders and production scheduling",
      "Real-time tracking of manufacturing stages and wastage",
      "Costing tracking: raw materials, machinery runtime, and labor costs",
      "Quality control checklist checkpoints at production checkpoints",
      "Seamless integration with purchase and inventory modules"
    ],
    bestFor: "Textile mills, Diamond processors, Engineering units, and Chemical factories."
  },
  {
    id: "project",
    icon: "📋",
    title: "Project Management",
    description: "Track milestones, allocate resources, and log task progress.",
    longDescription: "Ensure timely project delivery with a structured task tracking workspace. Set project milestones, assign tasks to team members, log work hours using timesheets, and review visual progress dashboards. Features Kanban boards and Gantt charts to identify operational bottlenecks immediately.",
    features: [
      "Visual Kanban boards and Gantt charts for project timelines",
      "Task assignment, prioritizing, and deadline tracking",
      "Time tracking using timesheets with manager approval cycles",
      "Resource allocation dashboards to prevent team burnout",
      "Project budgeting, expense tracking, and profitability analysis",
      "Client portal access for real-time progress updates",
      "Integrated file sharing and collaborative discussion boards"
    ],
    bestFor: "Service providers, Construction firms, and Consulting agencies."
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Access",
    description: "Check sales, inventory, and pending approvals on the go.",
    longDescription: "Keep your business in your pocket. Access critical business indicators, approve purchase orders, track live sales figures, and review outstanding payments from anywhere in the world. Fully responsive mobile dashboard optimized for speed and security.",
    features: [
      "Live sales, cash flow, and outstanding dues dashboards",
      "Push notifications for urgent pending approvals (POs, Leaves)",
      "Quick inventory stock checking with barcode scanning",
      "Customer contact directory with direct tap-to-call or WhatsApp",
      "Offline data caching with state-of-the-art security layers",
      "Available on iOS and Android with intuitive design",
      "Role-based access controls for security on employee devices"
    ],
    bestFor: "Business owners, Directors, Sales heads, and Field engineers."
  },
  {
    id: "api",
    icon: "🔗",
    title: "API & Integrations",
    description: "Connect seamlessly with e-commerce, logistics, and payment APIs.",
    longDescription: "Unlock infinite scalability by connecting your central ERP system to third-party services. Secure REST APIs integrate directly with Shopify, WooCommerce, Shiprocket logistics, WhatsApp, SMS gateways, and major payment processors like Razorpay and PayU, establishing a unified data pipeline.",
    features: [
      "Secure REST APIs for complete database integration",
      "Automated e-commerce sync (orders, stock, catalog updates)",
      "Direct integration with Shiprocket and India Post tracking",
      "Automated Razorpay & PayU payment status reconciliation",
      "WhatsApp Business API integration for automated alerts",
      "Tally ERP data export and migration tools",
      "Scheduled data exports in CSV, JSON, and XML formats"
    ],
    bestFor: "IT managers, Developers, E-commerce sellers, and enterprise systems."
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud Hosting & Support",
    description: "99.9% uptime, daily automated backups, and expert setup support.",
    longDescription: "Leave server administration to us. Your business data is securely hosted on high-performance cloud infrastructure with automated redundant backups. Monitored 24/7 to guarantee 99.9% uptime, ensuring your operations remain active and protected against server failures.",
    features: [
      "High-performance cloud servers with 99.9% guaranteed uptime",
      "Automatic hourly and daily offsite database backups",
      "Bank-grade SSL encryption and robust firewall protection",
      "Dedicated server setup for enterprise scale operations",
      "Surat-based expert implementation and training team",
      "On-demand data recovery and rollback assistance",
      "Regular software security updates and patches included"
    ],
    bestFor: "All businesses requiring secure, zero-maintenance business software."
  }
];
