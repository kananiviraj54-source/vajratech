"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

// ── TECH DATA ──────────────────────────────────────────────────────────────
const categories = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Cloud & DevOps",
    "AI & Data",
    "Design",
    "Security",
    "Tools",
];

const techs = [
    // FRONTEND
    { name: "React", category: "Frontend", color: "#61DAFB", level: "Expert", desc: "Our primary UI library. Used in almost every web project we ship." },
    { name: "Next.js", category: "Frontend", color: "#ffffff", level: "Expert", desc: "App router, server components, API routes — we use it daily." },
    { name: "TypeScript", category: "Frontend", color: "#3178C6", level: "Expert", desc: "We default to TypeScript on all new projects these days." },
    { name: "Tailwind CSS", category: "Frontend", color: "#38B2AC", level: "Expert", desc: "Fast to write, consistent to maintain. Our go-to CSS approach." },
    { name: "Three.js", category: "Frontend", color: "#ffffff", level: "Proficient", desc: "3D graphics, interactive product showcases, WebGL experiences." },
    { name: "React Three Fiber", category: "Frontend", color: "#61DAFB", level: "Proficient", desc: "React bindings for Three.js — how we built this site's hero." },
    { name: "GSAP", category: "Frontend", color: "#88CE02", level: "Expert", desc: "Scroll-driven animations, timelines, page transitions." },
    { name: "Framer Motion", category: "Frontend", color: "#FF4D9E", level: "Proficient", desc: "Component-level animations and gesture interactions in React." },
    { name: "Redux", category: "Frontend", color: "#764ABC", level: "Proficient", desc: "Global state management for complex applications." },
    { name: "Zustand", category: "Frontend", color: "#ffffff", level: "Proficient", desc: "Lighter-weight state management. We prefer it over Redux now." },
    { name: "Vite", category: "Frontend", color: "#646CFF", level: "Proficient", desc: "Blazing fast dev server and build tool for non-Next.js projects." },
    { name: "Sass / SCSS", category: "Frontend", color: "#CC6699", level: "Proficient", desc: "For projects that call for traditional CSS architecture." },
    { name: "HTML5 / CSS3", category: "Frontend", color: "#E34F26", level: "Expert", desc: "Foundation of everything. We know it properly, not just frameworks." },
    { name: "WebSockets", category: "Frontend", color: "#00e5ff", level: "Proficient", desc: "Real-time data — live dashboards, chat, collaborative tools." },

    // BACKEND
    { name: "Node.js", category: "Backend", color: "#339933", level: "Expert", desc: "Primary backend runtime. We've built everything from REST APIs to job queues." },
    { name: "Express.js", category: "Backend", color: "#ffffff", level: "Expert", desc: "Lightweight, flexible, and we know it inside out." },
    { name: "Python", category: "Backend", color: "#3776AB", level: "Proficient", desc: "Data processing, AI/ML scripts, automation, and Django projects." },
    { name: "Django", category: "Backend", color: "#092E20", level: "Proficient", desc: "Full-stack Python framework — great for data-heavy admin portals." },
    { name: "FastAPI", category: "Backend", color: "#009688", level: "Proficient", desc: "High-performance Python APIs — especially useful for AI backend services." },
    { name: "GraphQL", category: "Backend", color: "#E10098", level: "Proficient", desc: "Flexible queries for complex data relationships." },
    { name: "REST APIs", category: "Backend", color: "#00e5ff", level: "Expert", desc: "We've designed, built, and consumed hundreds of REST APIs." },
    { name: "Socket.io", category: "Backend", color: "#010101", level: "Proficient", desc: "Real-time bidirectional events — used in our logistics and chat projects." },

    // MOBILE
    { name: "React Native", category: "Mobile", color: "#61DAFB", level: "Expert", desc: "Cross-platform iOS & Android. Our mobile app of choice." },
    { name: "Expo", category: "Mobile", color: "#000020", level: "Expert", desc: "Managed workflow for faster React Native development and deployment." },
    { name: "Swift", category: "Mobile", color: "#F05138", level: "Learning", desc: "Native iOS when platform-specific performance or APIs require it." },
    { name: "Kotlin", category: "Mobile", color: "#7F52FF", level: "Learning", desc: "Native Android development for high-performance use cases." },
    { name: "Flutter", category: "Mobile", color: "#54C5F8", level: "Familiar", desc: "Used on select projects. Good for rapid cross-platform prototyping." },

    // DATABASE
    { name: "PostgreSQL", category: "Database", color: "#4479A1", level: "Expert", desc: "Our default relational DB. Powerful, reliable, and we know it well." },
    { name: "MongoDB", category: "Database", color: "#47A248", level: "Expert", desc: "Document DB for flexible schema use cases. Used across many projects." },
    { name: "MySQL", category: "Database", color: "#4479A1", level: "Proficient", desc: "For projects that already have MySQL or prefer it." },
    { name: "Redis", category: "Database", color: "#DC382D", level: "Proficient", desc: "Caching, session management, rate limiting, pub/sub." },
    { name: "SQLite", category: "Database", color: "#003B57", level: "Proficient", desc: "Offline-first apps and lightweight local databases." },
    { name: "Prisma", category: "Database", color: "#2D3748", level: "Proficient", desc: "Type-safe ORM for Node.js. Excellent DX with PostgreSQL and MySQL." },
    { name: "Firebase Firestore", category: "Database", color: "#FFCA28", level: "Proficient", desc: "Real-time database — popular for MVPs and mobile backends." },
    { name: "Supabase", category: "Database", color: "#3ECF8E", level: "Familiar", desc: "Open-source Firebase alternative with Postgres under the hood." },
    { name: "Elasticsearch", category: "Database", color: "#005571", level: "Familiar", desc: "Full-text search and log aggregation for larger datasets." },

    // CLOUD & DEVOPS
    { name: "AWS", category: "Cloud & DevOps", color: "#FF9900", level: "Proficient", desc: "EC2, S3, RDS, Lambda, CloudFront, Route53, IAM — we use AWS daily." },
    { name: "Docker", category: "Cloud & DevOps", color: "#2496ED", level: "Expert", desc: "Every project we ship is containerised. No 'works on my machine'." },
    { name: "Kubernetes", category: "Cloud & DevOps", color: "#326CE5", level: "Familiar", desc: "Container orchestration for high-availability deployments." },
    { name: "GitHub Actions", category: "Cloud & DevOps", color: "#2088FF", level: "Expert", desc: "CI/CD pipelines — automated testing, builds, and deployments." },
    { name: "Nginx", category: "Cloud & DevOps", color: "#009639", level: "Proficient", desc: "Reverse proxy, load balancing, SSL termination." },
    { name: "Terraform", category: "Cloud & DevOps", color: "#623CE4", level: "Familiar", desc: "Infrastructure as code for reproducible cloud environments." },
    { name: "Vercel", category: "Cloud & DevOps", color: "#ffffff", level: "Expert", desc: "Fast deployments for Next.js projects. Zero-config, great DX." },
    { name: "Linux / Ubuntu", category: "Cloud & DevOps", color: "#E95420", level: "Proficient", desc: "Server administration, bash scripting, cron jobs, system hardening." },
    { name: "Cloudflare", category: "Cloud & DevOps", color: "#F48120", level: "Proficient", desc: "DNS, CDN, DDoS protection, Workers, and Stream for video hosting." },

    // AI & DATA
    { name: "OpenAI API", category: "AI & Data", color: "#412991", level: "Proficient", desc: "GPT-4, embeddings, function calling — integrated into web and mobile apps." },
    { name: "LangChain", category: "AI & Data", color: "#1C3C3C", level: "Familiar", desc: "Orchestration layer for LLM-based apps — chains, agents, and memory." },
    { name: "Pinecone", category: "AI & Data", color: "#000000", level: "Familiar", desc: "Vector database for semantic search and RAG-based applications." },
    { name: "Hugging Face", category: "AI & Data", color: "#FFD21E", level: "Familiar", desc: "Open-source models for text classification, embeddings, and more." },
    { name: "Pandas", category: "AI & Data", color: "#150458", level: "Proficient", desc: "Data manipulation and analysis in Python." },
    { name: "Gemini API", category: "AI & Data", color: "#4285F4", level: "Familiar", desc: "Google's multimodal LLM — used in select AI integration projects." },

    // DESIGN
    { name: "Figma", category: "Design", color: "#F24E1E", level: "Expert", desc: "All our UI design, prototyping, and design systems live in Figma." },
    { name: "Adobe Illustrator", category: "Design", color: "#FF9A00", level: "Proficient", desc: "Logo design, vector graphics, and brand identity work." },
    { name: "Adobe Photoshop", category: "Design", color: "#31A8FF", level: "Proficient", desc: "Image editing, compositing, and marketing assets." },
    { name: "Lottie / After Effects", category: "Design", color: "#9999FF", level: "Familiar", desc: "Micro-animaöons exported as Lottie JSON for web and mobile." },
    { name: "Framer", category: "Design", color: "#0055FF", level: "Familiar", desc: "No-code prototyping and interactive design presentations." },

    // SECURITY
    { name: "OWASP", category: "Security", color: "#000000", level: "Proficient", desc: "Our standard for web app security audits and secure code practices." },
    { name: "Let's Encrypt / SSL", category: "Security", color: "#003A70", level: "Expert", desc: "SSL setup, certificate management, HTTPS enforcement." },
    { name: "AWS IAM", category: "Security", color: "#FF9900", level: "Proficient", desc: "Role-based access, least-privilege policies, and service accounts." },
    { name: "Snyk", category: "Security", color: "#4C5FD5", level: "Familiar", desc: "Dependency vulnerability scanning in CI/CD pipelines." },
    { name: "JWT / OAuth2", category: "Security", color: "#00B9D1", level: "Expert", desc: "Authentication and authorisation — implemented correctly." },

    // TOOLS
    { name: "Git / GitHub", category: "Tools", color: "#F05032", level: "Expert", desc: "Version control, pull request workflows, branch strategies — daily driver." },
    { name: "Jira", category: "Tools", color: "#0052CC", level: "Proficient", desc: "Project and sprint management for larger client engagements." },
    { name: "Notion", category: "Tools", color: "#ffffff", level: "Expert", desc: "Internal docs, project wikis, SOPs, and client handoff notes." },
    { name: "Postman", category: "Tools", color: "#FF6C37", level: "Expert", desc: "API testing, documentation, and environment management." },
    { name: "VS Code", category: "Tools", color: "#007ACC", level: "Expert", desc: "Our primary editor. Custom extensions, settings sync, the works." },
    { name: "Sentry", category: "Tools", color: "#362D59", level: "Proficient", desc: "Error monitoring and performance tracking in production apps." },
    { name: "Datadog", category: "Tools", color: "#632CA6", level: "Familiar", desc: "Infrastructure monitoring, APM, and log aggregation at scale." },
    { name: "Stripe / Razorpay", category: "Tools", color: "#635BFF", level: "Expert", desc: "Payment integration — subscriptions, splits, refunds, webhooks." },
    { name: "Twilio / WhatsApp API", category: "Tools", color: "#F22F46", level: "Proficient", desc: "SMS, WhatsApp notifications, and OTP verification." },
];

const levelConfig = {
    Expert: { label: "Expert", dot: "bg-primary", text: "text-primary" },
    Proficient: { label: "Proficient", dot: "bg-secondary", text: "text-secondary" },
    Familiar: { label: "Familiar", dot: "bg-gray-400", text: "text-gray-400" },
    Learning: { label: "Learning", dot: "bg-yellow-400", text: "text-yellow-400" },
};

export default function Technologies() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [hoveredTech, setHoveredTech] = useState(null);

    const filtered = techs.filter((t) => {
        const matchCat = activeCategory === "All" || t.category === activeCategory;
        const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div className="bg-darker min-h-screen">

            {/* ── HEADER ── */}
            <section className="pt-36 pb-16 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-5">
                        Technologies
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl mb-8">
                        The tools
                        <br />
                        <span className="text-primary">we actually use.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        {techs.length}+ technologies across frontend, backend, mobile, cloud, AI, design,
                        and security. We&apos;ve listed every tool we regularly reach for —
                        and been honest about how well we know each one.
                    </p>

                    {/* Proficiency legend */}
                    <div className="flex flex-wrap gap-5 mt-10">
                        {Object.entries(levelConfig).map(([key, cfg]) => (
                            <div key={key} className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                                <span className="text-xs text-gray-400 font-medium">{cfg.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FILTER & SEARCH ── */}
            <div className="sticky top-16 z-30 bg-darker/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search technologies..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-8 pr-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all w-52"
                            />
                        </div>

                        {/* Category filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${activeCategory === cat
                                            ? "bg-primary text-darker border-primary"
                                            : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                            <span className="ml-2 text-gray-600 text-xs self-center">
                                {filtered.length} tech{filtered.length !== 1 ? "s" : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── TECH GRID ── */}
            <section className="py-16 bg-darker">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    {filtered.length === 0 ? (
                        <p className="text-gray-600 text-sm text-center py-20">
                            No technologies match &quot;{search}&quot;.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filtered.map((tech) => {
                                const cfg = levelConfig[tech.level];
                                const isHovered = hoveredTech === tech.name;
                                return (
                                    <div
                                        key={tech.name}
                                        onMouseEnter={() => setHoveredTech(tech.name)}
                                        onMouseLeave={() => setHoveredTech(null)}
                                        className="relative group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200 cursor-default overflow-hidden"
                                    >
                                        {/* Hover glow */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                                            style={{ background: `radial-gradient(300px circle at 50% 50%, ${tech.color}10, transparent 70%)` }}
                                        />

                                        {/* Colour bar top */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ backgroundColor: tech.color }}
                                        />

                                        <div className="relative z-10">
                                            {/* Name + level dot */}
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <h3 className="text-white font-bold text-sm leading-snug group-hover:text-white transition-colors">
                                                    {tech.name}
                                                </h3>
                                                <span className={`w-2 h-2 rounded-full shrink-0 mt-1 ${cfg.dot}`} />
                                            </div>

                                            {/* Category tag */}
                                            <span className="text-xs text-gray-600 font-medium">
                                                {tech.category}
                                            </span>

                                            {/* Description — visible on hover */}
                                            <p
                                                className={`text-xs text-gray-400 leading-relaxed mt-3 transition-all duration-200 ${isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                                                    } overflow-hidden`}
                                            >
                                                {tech.desc}
                                            </p>

                                            {/* Proficiency label */}
                                            <div className={`mt-2 text-xs font-semibold transition-all duration-200 ${cfg.text} ${isHovered ? "opacity-100" : "opacity-0"}`}>
                                                {cfg.label}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* ── CATEGORY DEEP-DIVE ── */}
            <section className="py-20 bg-dark border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mb-12">
                        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Stack overview</p>
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                            How our stack fits together
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "A typical web project",
                                color: "#00e5ff",
                                items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Prisma + PostgreSQL", "Node.js API routes", "AWS / Vercel", "GitHub Actions CI/CD"],
                            },
                            {
                                title: "A typical mobile project",
                                color: "#7c4dff",
                                items: ["React Native + Expo", "TypeScript", "Zustand / Redux", "Firebase or Node.js backend", "Razorpay / Stripe", "Sentry for monitoring", "Play Store + App Store"],
                            },
                            {
                                title: "An offline business system",
                                color: "#00c853",
                                items: ["React (web app, offline-first)", "IndexedDB / SQLite", "Node.js backend", "PostgreSQL or MySQL", "Thermal printer integration", "WhatsApp Business API", "Deployed on local server or VPS"],
                            },
                            {
                                title: "An AI-integrated product",
                                color: "#ab47bc",
                                items: ["Next.js frontend", "FastAPI or Node.js backend", "OpenAI / Gemini API", "Pinecone (vector DB)", "LangChain for orchestration", "PostgreSQL for structured data", "Vercel or AWS"],
                            },
                            {
                                title: "A cloud migration project",
                                color: "#f50057",
                                items: ["AWS (EC2, RDS, S3, CloudFront)", "Docker + Docker Compose", "GitHub Actions pipeline", "Nginx reverse proxy", "Let's Encrypt SSL", "Cloudwatch monitoring", "Terraform (if IaC needed)"],
                            },
                            {
                                title: "An e-commerce platform",
                                color: "#ff9800",
                                items: ["Next.js + TypeScript", "Sanity CMS or custom admin", "Stripe / Stripe Connect", "PostgreSQL + Prisma", "Redis for cart sessions", "Cloudflare CDN", "AWS S3 for media"],
                            },
                        ].map((stack, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <div
                                    className="w-8 h-1 rounded-full mb-4"
                                    style={{ backgroundColor: stack.color }}
                                />
                                <h3 className="text-white font-bold text-sm mb-4">{stack.title}</h3>
                                <ul className="space-y-2">
                                    {stack.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-gray-400 text-xs">
                                            <span className="w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HONEST NOTE ── */}
            <section className="py-20 bg-darker border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                                An honest note
                            </p>
                            <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                                We don&apos;t pretend to be experts at everything.
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    We use four proficiency levels — Expert, Proficient, Familiar, and
                                    Learning. Most agencies claim to be experts at everything. We
                                    don&apos;t, because it&apos;s not true and it wastes your time.
                                </p>
                                <p>
                                    &quot;Expert&quot; means we&apos;ve shipped multiple production projects with it
                                    and know the edge cases. &quot;Proficient&quot; means we use it regularly
                                    and can deliver reliably. &quot;Familiar&quot; means we&apos;ve used it enough
                                    to know what we&apos;re doing. &quot;Learning&quot; means we&apos;re actively
                                    building with it but wouldn&apos;t stake a critical production system on it yet.
                                </p>
                                <p>
                                    If your project requires a technology we&apos;re not confident in,
                                    we&apos;ll tell you — and either recommend someone who is, or be
                                    upfront about the learning curve involved.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-0 divide-y divide-white/5 border-y border-white/5">
                            {Object.entries(levelConfig).map(([key, cfg]) => (
                                <div key={key} className="flex items-start gap-5 py-5">
                                    <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${cfg.dot}`} />
                                    <div>
                                        <h4 className={`font-bold text-sm mb-1 ${cfg.text}`}>{cfg.label}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            {key === "Expert" && "Multiple production deployments. Know the gotchas. Would stake a client project on it."}
                                            {key === "Proficient" && "Used regularly on real projects. Comfortable with the ecosystem and common patterns."}
                                            {key === "Familiar" && "Used enough to get things done. May look up specifics, but the fundamentals are solid."}
                                            {key === "Learning" && "Actively working with it. Not production-ready for critical systems yet."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-dark">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                            Have a specific
                            <br />
                            <span className="text-primary">tech requirement?</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tell us the stack you need or the problem to solve —
                            we&apos;ll let you know if we&apos;re the right team, or point
                            you in the right direction if we&apos;re not.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[220px]">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-darker font-bold text-sm hover:bg-white transition-colors duration-200"
                        >
                            Let&apos;s talk tech
                            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
                        >
                            See our services
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
