"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    Globe,
    Smartphone,
    Cloud,
    Palette,
    Terminal,
    ShoppingCart,
    Box,
    TrendingUp,
    Database,
    Shield,
    Cpu,
    Wifi,
    BarChart2,
    Code2,
    MonitorSmartphone,
    Headphones,
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const categories = [
    {
        id: "web",
        label: "Web Development",
        icon: Globe,
        headline: "Fast, clean websites that actually convert",
        summary:
            "We build web applications and websites using Next.js, React, and whatever stack makes the most sense for your project. No unnecessary complexity, no bloat.",
        services: [
            {
                title: "Custom Website Development",
                body: "Whether it's a marketing site, a landing page, or a full web portal — we build it properly from the ground up. Fast load times, clean code, responsive on every screen size.",
            },
            {
                title: "Next.js / React Web Apps",
                body: "Complex single-page apps, dashboards, and data-heavy tools built with React and Next.js. Server-side rendering, API routes, caching — the full picture.",
            },
            {
                title: "CMS Integration",
                body: "Hook your site up to Sanity, Contentful, WordPress, or Strapi — so your team can update content without touching code.",
            },
            {
                title: "Performance Optimization",
                body: "Already have a site that's slow? We audit it, find the bottlenecks, and fix them. Better Core Web Vitals, better SEO, better user experience.",
            },
            {
                title: "API Development & Integration",
                body: "RESTful and GraphQL APIs built to be clean, documented, and reliable. Or we integrate third-party APIs your project depends on.",
            },
        ],
        stack: ["Next.js", "React", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL", "MongoDB"],
    },
    {
        id: "mobile",
        label: "Mobile Apps",
        icon: Smartphone,
        headline: "Apps people actually enjoy using",
        summary:
            "Cross-platform iOS and Android apps built with React Native. We focus on smooth interactions and performance — not just checking the 'we have an app' box.",
        services: [
            {
                title: "React Native Development",
                body: "One codebase, two platforms. We build cross-platform apps that feel native on both iOS and Android, without the usual compromises.",
            },
            {
                title: "iOS App Development",
                body: "Native iOS apps built with Swift when performance or platform-specific features demand it. Smooth animations, proper HIG guidelines, App Store ready.",
            },
            {
                title: "Android App Development",
                body: "Native Android in Kotlin, or React Native — whichever fits your product. We handle the whole pipeline from development to Play Store submission.",
            },
            {
                title: "App UI/UX Design",
                body: "Mobile-first design that accounts for thumb zones, gesture navigation, and the small screen context. We prototype it before we build it.",
            },
            {
                title: "App Maintenance & Updates",
                body: "OS updates break things. We handle ongoing maintenance, version updates, and new feature additions so your app stays current.",
            },
        ],
        stack: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "Redux", "AsyncStorage"],
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        icon: Cloud,
        headline: "Infrastructure that doesn't wake you up at 3am",
        summary:
            "AWS setup, CI/CD pipelines, containerisation, and deployment automation. We build cloud infrastructure that's reliable, cost-effective, and doesn't require a dedicated ops team to babysit.",
        services: [
            {
                title: "AWS Architecture & Setup",
                body: "EC2, RDS, S3, Lambda, CloudFront — we design and set up AWS environments that match your actual load, not someone's hypothetical worst-case scenario.",
            },
            {
                title: "CI/CD Pipeline Setup",
                body: "GitHub Actions, GitLab CI, or CircleCI — automated testing and deployment pipelines so your team can ship confidently without manual steps.",
            },
            {
                title: "Docker & Containerisation",
                body: "Containerise your app so it runs the same everywhere. Docker Compose for local dev, proper environments for staging and production.",
            },
            {
                title: "Cloud Migration",
                body: "Moving from on-premise or a different cloud provider? We plan the migration carefully, minimise downtime, and make sure nothing gets lost in transit.",
            },
            {
                title: "Monitoring & Alerting",
                body: "Set up logging, uptime monitoring, and alerting — so you know when something breaks before your users tell you. CloudWatch, Datadog, or whatever fits your stack.",
            },
        ],
        stack: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Nginx", "Linux"],
    },
    {
        id: "design",
        label: "UI/UX Design",
        icon: Palette,
        headline: "Design that's actually thought through",
        summary:
            "We design interfaces people can navigate without a tutorial. Figma prototypes, design systems, user flows — we do the thinking before you spend money on development.",
        services: [
            {
                title: "Product Design & Prototyping",
                body: "From rough wireframes to high-fidelity Figma prototypes. We test the flow and layout before a single line of code gets written.",
            },
            {
                title: "Design Systems",
                body: "A consistent component library that your dev team can actually use. Colors, typography, spacing, states — documented and ready to implement.",
            },
            {
                title: "User Research & Flows",
                body: "Who's using this, and what are they trying to do? We map user journeys and identify friction points before they become expensive problems.",
            },
            {
                title: "Website Redesign",
                body: "If your site looks like it was last touched in 2017, we redesign it — keeping what works, fixing what doesn't, and making it feel current.",
            },
            {
                title: "Brand Identity & Visual Design",
                body: "Logo, colour palette, typography system. Enough visual identity that your product looks intentional, not accidental.",
            },
        ],
        stack: ["Figma", "Adobe XD", "Illustrator", "Framer", "Lottie", "Storybook"],
    },
    {
        id: "ecommerce",
        label: "E-Commerce",
        icon: ShoppingCart,
        headline: "Stores built to actually sell things",
        summary:
            "E-commerce that's set up properly — payments, inventory, shipping, discounts, admin panel. We've built stores from scratch and also fixed the ones that were losing sales due to bad UX.",
        services: [
            {
                title: "Custom E-Commerce Development",
                body: "Built on Next.js with a headless CMS or custom backend. No Shopify theme limitations — full control over every part of the experience.",
            },
            {
                title: "Shopify Development & Customisation",
                body: "Custom Shopify themes, app integrations, and liquid template customisation. For when Shopify is the right call but the default theme isn't.",
            },
            {
                title: "Payment Gateway Integration",
                body: "Stripe, Razorpay, PayPal, UPI — we integrate payment systems that work reliably and handle edge cases like refunds and failed payments properly.",
            },
            {
                title: "Inventory & Order Management",
                body: "Backend systems to track stock, manage orders, handle returns, and give your operations team the visibility they need.",
            },
            {
                title: "Conversion Rate Optimisation",
                body: "Already running an e-commerce site but not converting? We look at the funnel, identify drop-off points, and redesign the experience to fix them.",
            },
        ],
        stack: ["Next.js", "Shopify", "Stripe", "Razorpay", "MongoDB", "Sanity", "Redux"],
    },
    {
        id: "data",
        label: "Database & Backend",
        icon: Database,
        headline: "Backends that don't fall over",
        summary:
            "Solid API and database work — schema design, query optimisation, data modelling. The unglamorous stuff that determines whether your app is fast or painful.",
        services: [
            {
                title: "Database Design & Architecture",
                body: "Proper relational schema or document model design from day one. Getting this right early saves you from painful migrations later.",
            },
            {
                title: "REST & GraphQL API Development",
                body: "Clean, versioned, documented APIs. We write APIs the way we'd want to consume them — predictable, consistent, and with good error messages.",
            },
            {
                title: "Database Migration & Optimisation",
                body: "Slow queries, missing indexes, bad schema decisions from three years ago. We find them and fix them without taking your app down.",
            },
            {
                title: "Backend System Architecture",
                body: "Microservices vs monolith, message queues, caching strategies — we make these decisions based on your actual scale, not what's currently trendy.",
            },
            {
                title: "Third-Party API Integration",
                body: "Connecting to payment providers, CRMs, email platforms, analytics tools, or any external service your product depends on.",
            },
        ],
        stack: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Node.js", "Express", "Prisma"],
    },
    {
        id: "security",
        label: "Cybersecurity",
        icon: Shield,
        headline: "Security you don't think about until it's too late",
        summary:
            "Security audits, penetration testing, and secure development practices. We help you find the holes before someone with bad intentions does.",
        services: [
            {
                title: "Web Application Security Audit",
                body: "OWASP Top 10 testing, SQL injection, XSS, CSRF, broken authentication — we test your app against the most common attack vectors and report what we find.",
            },
            {
                title: "Penetration Testing",
                body: "Simulated attacks on your infrastructure to find real vulnerabilities. We document what we did, what we found, and how to fix it.",
            },
            {
                title: "SSL / HTTPS Setup & Configuration",
                body: "Proper certificate management, HSTS headers, secure cookie configuration. The baseline that surprises you how often it's missing.",
            },
            {
                title: "Security Code Review",
                body: "Manual review of your codebase looking for security anti-patterns — hardcoded secrets, insecure dependencies, improper input handling.",
            },
            {
                title: "Data Privacy & GDPR Compliance",
                body: "Helping you understand your data obligations, set up proper consent mechanisms, and handle user data the right way.",
            },
        ],
        stack: ["OWASP", "Burp Suite", "Let's Encrypt", "AWS IAM", "Nmap", "Snyk"],
    },
    {
        id: "ai",
        label: "AI Integration",
        icon: Cpu,
        headline: "AI that does something useful, not just AI for the pitch deck",
        summary:
            "We integrate AI tools and language models into your existing product or workflow. Practical automation — not science projects.",
        services: [
            {
                title: "LLM Integration (OpenAI, Gemini, etc.)",
                body: "Integrating GPT-4, Claude, or Gemini into your product — chat interfaces, document processing, content generation. We handle the prompting, context management, and API wiring.",
            },
            {
                title: "AI-Powered Search",
                body: "Semantic search using vector embeddings. Users search in natural language and actually find what they're looking for.",
            },
            {
                title: "Workflow Automation with AI",
                body: "Automating time-consuming internal processes — data extraction, classification, report generation — using AI where it genuinely saves hours.",
            },
            {
                title: "Chatbot Development",
                body: "Not the script-based chatbots that frustrate people. Proper conversational interfaces with context memory and actual knowledge of your product.",
            },
            {
                title: "Custom AI Tooling",
                body: "If you have a specific problem and think AI could help, let's figure it out together. We're honest when AI isn't the right tool for the job.",
            },
        ],
        stack: ["OpenAI", "LangChain", "Pinecone", "Gemini", "Hugging Face", "Python", "FastAPI"],
    },
    {
        id: "networking",
        label: "Networking & IT Support",
        icon: Wifi,
        headline: "The infrastructure layer most people ignore",
        summary:
            "Network setup, IT infrastructure consulting, and ongoing technical support for businesses that need their systems to just work.",
        services: [
            {
                title: "Network Setup & Configuration",
                body: "LAN/WAN setup, router configuration, VPN, firewall rules. Whether it's a small office or a multi-location business.",
            },
            {
                title: "IT Infrastructure Consulting",
                body: "Helping businesses choose the right hardware, software, and architecture for their actual size and needs — not an over-engineered enterprise setup.",
            },
            {
                title: "Remote IT Support",
                body: "Ongoing technical support for your team. When things break — and they do — you have someone to call who already knows your systems.",
            },
            {
                title: "Server Setup & Management",
                body: "On-premise or VPS server setup, configuration, security hardening, and ongoing maintenance.",
            },
        ],
        stack: ["Cisco", "pfSense", "Ubuntu", "VMware", "Active Directory", "VPN"],
    },
    {
        id: "analytics",
        label: "Analytics & Reporting",
        icon: BarChart2,
        headline: "Know what's actually happening in your product",
        summary:
            "Setting up proper analytics, building dashboards, and helping you understand the data you're already collecting but probably not using.",
        services: [
            {
                title: "Analytics Setup (GA4, Mixpanel, etc.)",
                body: "Proper event tracking setup — so you know what users are doing, where they drop off, and what's actually driving conversions.",
            },
            {
                title: "Custom Dashboard Development",
                body: "Internal reporting dashboards that show your team the numbers they actually care about, updated in real time.",
            },
            {
                title: "Data Pipeline Setup",
                body: "ETL pipelines to collect, transform, and load data from multiple sources into a place you can make sense of it.",
            },
            {
                title: "Business Intelligence Tools",
                body: "Metabase, Tableau, or custom-built BI layers. For teams that have outgrown spreadsheets but aren't ready for enterprise tools.",
            },
        ],
        stack: ["GA4", "Mixpanel", "Metabase", "Tableau", "BigQuery", "dbt", "Airflow"],
    },
    {
        id: "consulting",
        label: "Tech Consulting",
        icon: TrendingUp,
        headline: "A second opinion that's actually useful",
        summary:
            "Sometimes you just need someone technical to talk through a decision with — architecture, vendor choice, team structure, build vs buy. We do that.",
        services: [
            {
                title: "Technology Strategy",
                body: "Helping founders and non-technical CTOs make better decisions about their stack, their roadmap, and how to sequence technical work.",
            },
            {
                title: "Architecture Review",
                body: "We look at what you have and tell you honestly what's good, what's risky, and what's going to slow you down as you scale.",
            },
            {
                title: "Build vs Buy Analysis",
                body: "Should you build this in-house or use an existing tool? We've seen both sides enough to give you a straight answer.",
            },
            {
                title: "Technical Due Diligence",
                body: "Evaluating a codebase before acquisition or investment? We audit it and give you a clear picture of what you're getting into.",
            },
            {
                title: "Digital Transformation Consulting",
                body: "Helping businesses that still run on manual processes or legacy software understand what to automate, what to migrate, and in what order.",
            },
        ],
        stack: ["Agile", "Scrum", "OKRs", "JIRA", "Notion", "Miro"],
    },
    {
        id: "support",
        label: "Maintenance & Support",
        icon: Headphones,
        headline: "We don't just build it and disappear",
        summary:
            "Ongoing support, bug fixes, dependency updates, and incremental improvements. For clients who want a long-term technical partner, not just a project vendor.",
        services: [
            {
                title: "Monthly Maintenance Plans",
                body: "Regular updates, security patches, performance checks, and a set number of hours for bug fixes and small improvements.",
            },
            {
                title: "Bug Fixes & Hotfixes",
                body: "Something broke in production? We triage, fix, and deploy. Clear communication throughout, no finger-pointing.",
            },
            {
                title: "Dependency & Security Updates",
                body: "Keeping your libraries and frameworks up to date so you don't accumulate technical debt that bites you later.",
            },
            {
                title: "Feature Additions",
                body: "Your product launched, you've got user feedback, and you want to add things. We scope it, build it, and ship it.",
            },
            {
                title: "24/7 Uptime Monitoring",
                body: "We monitor your app around the clock and get alerted if something goes down — often before anyone on your team notices.",
            },
        ],
        stack: ["PagerDuty", "Sentry", "Uptime Robot", "Datadog", "GitHub", "Slack"],
    },
];

const faqs = [
    {
        q: "Do you work with early-stage startups or only established businesses?",
        a: "Both. We've worked with teams at idea stage who just needed an MVP, and with established businesses replacing legacy software. The main thing we care about is that you have a clear problem to solve.",
    },
    {
        q: "How do you handle project pricing?",
        a: "Most projects are fixed-scope fixed-price after we've scoped things out together. For ongoing work or projects with evolving requirements, we do a time-and-materials retainer. We'll tell you which makes more sense for your situation.",
    },
    {
        q: "How long does a typical web project take?",
        a: "A solid marketing site or landing page is 2–4 weeks. A web app with backend, auth, and database might be 6–12 weeks. We'd rather give you a realistic timeline than say 'it depends' and leave you guessing.",
    },
    {
        q: "Can you take over a project someone else started?",
        a: "Yes, and we've done it a few times. We'd want to audit the codebase first to understand what we're inheriting. Some codebases we can take over cleanly; some would cost more to fix than to rebuild.",
    },
    {
        q: "Do you sign NDAs?",
        a: "Yes, always. We keep client work confidential as a baseline, and we're happy to sign mutual NDAs before any technical discussion.",
    },
    {
        q: "What if I'm not sure which service I need?",
        a: "Just describe what you're trying to achieve. We'll ask questions and figure out the right approach together. You don't need to know the technical solution before talking to us.",
    },
];

export default function Services() {
    const heroRef = useRef();
    const faqRef = useRef();

    useGSAP(() => {
        gsap.from(".hero-fade", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
        });
    }, []);

    useGSAP(() => {
        gsap.from(".faq-item", {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
                trigger: faqRef.current,
                start: "top 80%",
            },
        });
    }, []);

    return (
        <div className="bg-black min-h-screen">

            {/* ── HEADER ── */}
            <section ref={heroRef} className="pt-36 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="hero-fade text-gray-500 text-sm font-semibold tracking-widest uppercase mb-5">
                        Services
                    </p>
                    <h1 className="hero-fade text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl mb-8">
                        Everything IT.
                        <br />
                        <span className="text-gray-300">Done properly.</span>
                    </h1>
                    <p className="hero-fade text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
                        We cover the full stack of IT services — web, mobile, cloud, design,
                        security, AI, and more. The difference is we stay small enough to
                        actually care about what we deliver.
                    </p>
                    <div className="hero-fade flex items-center gap-4 flex-wrap">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors duration-200"
                        >
                            Discuss your project
                            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <span className="text-gray-600 text-sm">or scroll to explore services →</span>
                    </div>
                </div>
            </section>

            {/* ── SERVICE CATEGORIES ── */}
            {categories.map((cat, catIndex) => {
                const Icon = cat.icon;
                return (
                    <section
                        key={cat.id}
                        id={cat.id}
                        className={`py-20 border-b border-white/5 ${catIndex % 2 === 0 ? "bg-black" : "bg-[#111111]"}`}
                    >
                        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                            {/* Category header */}
                            <div className="flex flex-col md:flex-row md:items-start gap-10 mb-14">
                                {/* Left — icon + label */}
                                <div className="md:w-72 shrink-0">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/5 border border-white/10">
                                        <Icon size={22} className="text-gray-400" />
                                    </div>
                                    <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-gray-500">
                                        {cat.label}
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-black text-white leading-snug mb-4">
                                        {cat.headline}
                                    </h2>
                                    {/* Tech stack pills */}
                                    <div className="flex flex-wrap gap-1.5 mt-5">
                                        {cat.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/10"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right — summary + service list */}
                                <div className="flex-1">
                                    <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
                                        {cat.summary}
                                    </p>
                                    <div className="divide-y divide-white/5 border-y border-white/5">
                                        {cat.services.map((svc, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-8 py-5 group">
                                                <span className="text-xs font-bold pt-1 shrink-0 sm:w-5 text-gray-600">
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                <div>
                                                    <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-gray-100 transition-colors">
                                                        {svc.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm leading-relaxed">
                                                        {svc.body}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* ── HOW WE ENGAGE ── */}
            <section className="py-24 bg-[#111111] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mb-14">
                        <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-4">
                            How we engage
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-white max-w-xl leading-tight">
                            Choose the model that fits your work
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Fixed-Scope Projects",
                                price: "From ₹30,000",
                                desc: "You know what you want to build. We scope it, price it, and deliver it. Good for websites, MVPs, and well-defined features.",
                                tags: ["Clear brief", "Defined timeline", "Fixed cost"],
                            },
                            {
                                title: "Monthly Retainer",
                                price: "From ₹25,000 / mo",
                                desc: "Ongoing development, maintenance, and support. Good for businesses that need a technical team on call without hiring in-house.",
                                tags: ["Ongoing work", "Priority support", "Flexible scope"],
                            },
                            {
                                title: "Consulting & Advisory",
                                price: "₹5,000 / hour",
                                desc: "You have internal devs but need guidance on architecture, security, or technical decisions. We help you think it through.",
                                tags: ["Strategy", "Architecture review", "Due diligence"],
                            },
                        ].map((model, i) => (
                            <div
                                key={i}
                                className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
                            >
                                <h3 className="text-white font-black text-lg mb-1">{model.title}</h3>
                                <p className="text-white text-sm font-semibold mb-4">{model.price}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{model.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {model.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-500 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQs ── */}
            <section ref={faqRef} className="py-24 bg-black border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mb-14">
                        <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-4">
                            FAQs
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-white max-w-md leading-tight">
                            Things people usually ask us
                        </h2>
                    </div>
                    <div className="divide-y divide-white/5 border-y border-white/5 max-w-3xl">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item py-7">
                                <h3 className="text-white font-bold text-base mb-3">{faq.q}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                            Not sure which service
                            <br />
                            <span className="text-gray-300">you actually need?</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            That&apos;s fine. Tell us about the problem you&apos;re trying to solve
                            and we&apos;ll tell you honestly what the right approach is — even
                            if that means we&apos;re not the right fit.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[220px]">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors duration-200"
                        >
                            Start the conversation
                            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
                        >
                            See our past work
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
