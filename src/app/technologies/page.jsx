"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

const levelConfig = {
    Expert: { label: "Expert", dotClass: "bg-white", textClass: "text-white" },
    Proficient: { label: "Proficient", dotClass: "bg-gray-400", textClass: "text-gray-400" },
    Familiar: { label: "Familiar", dotClass: "bg-gray-500", textClass: "text-gray-500" },
    Learning: { label: "Learning", dotClass: "bg-gray-600", textClass: "text-gray-600" },
};

const categories = [
    {
        id: "frontend",
        label: "Frontend",
        techs: [
            { name: "React.js", level: "Expert", years: 3, desc: "Our primary UI library. We've used it across 40+ projects — hooks, context, custom libraries, SSR, all of it." },
            { name: "Next.js", level: "Expert", years: 3, desc: "The framework we reach for on almost every web project. App router, server components, image optimisation — we know it well." },
            { name: "TypeScript", level: "Expert", years: 2, desc: "We use TypeScript on all new projects. Saves considerable debugging time on anything that grows beyond a few files." },
            { name: "Tailwind CSS", level: "Expert", years: 3, desc: "Utility-first CSS is the way. We've built complex design systems on top of it." },
            { name: "GSAP", level: "Proficient", years: 2, desc: "For animations that need to feel polished. ScrollTrigger, timelines, custom easing — we use it when it matters." },
            { name: "Three.js", level: "Familiar", years: 1, desc: "We've built 3D hero sections and product visualisations. Not our daily driver, but we know how to use it confidently." },
            { name: "Framer Motion", level: "Proficient", years: 2, desc: "React animation library. Great for page transitions and component-level animations without the GSAP overhead." },
            { name: "Redux Toolkit", level: "Proficient", years: 2, desc: "State management for complex applications. We know when to use it and when React context is enough." },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        techs: [
            { name: "Node.js", level: "Expert", years: 3, desc: "Our primary backend runtime. APIs, background jobs, file processing — we've used it extensively." },
            { name: "Express.js", level: "Expert", years: 3, desc: "Lightweight and flexible. We've built everything from simple REST APIs to complex middleware-heavy systems with it." },
            { name: "PostgreSQL", level: "Expert", years: 2, desc: "Our relational database of choice. Proper schema design, migrations, indexing, and query optimisation." },
            { name: "MongoDB", level: "Expert", years: 3, desc: "Used when the document model fits — flexible schemas, rapid prototyping, content-heavy apps." },
            { name: "Redis", level: "Proficient", years: 2, desc: "For caching, session management, rate limiting, and pub/sub. Makes a big difference in the right places." },
            { name: "GraphQL", level: "Familiar", years: 1, desc: "We've built GraphQL APIs and consumed them from frontend. Know the tradeoffs vs REST." },
            { name: "Prisma", level: "Proficient", years: 2, desc: "Type-safe ORM that pairs well with TypeScript. We reach for it on new TypeScript projects." },
            { name: "Socket.io", level: "Proficient", years: 2, desc: "Real-time features: live dashboards, chat systems, collaborative tools." },
        ],
    },
    {
        id: "mobile",
        label: "Mobile",
        techs: [
            { name: "React Native", level: "Expert", years: 2, desc: "Cross-platform iOS and Android apps. We've shipped production apps to both stores. Navigation, native modules, Expo — all familiar." },
            { name: "Expo", level: "Proficient", years: 2, desc: "Our default starting point for React Native projects where we don't need custom native modules." },
            { name: "Firebase", level: "Proficient", years: 2, desc: "Auth, Firestore, Cloud Messaging, Analytics — useful for mobile apps that need a quick backend." },
            { name: "Swift", level: "Familiar", years: 1, desc: "Native iOS when performance or platform APIs require it. We can build and ship iOS apps but it's not our primary stack." },
        ],
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        techs: [
            { name: "AWS", level: "Expert", years: 2, desc: "EC2, RDS, S3, Lambda, CloudFront, Route 53, IAM — we've used the core services across many production deployments." },
            { name: "Docker", level: "Expert", years: 2, desc: "All our projects run in containers. Dockerfile authoring, compose for local dev, image optimisation." },
            { name: "GitHub Actions", level: "Expert", years: 2, desc: "Our CI/CD tool of choice — automated testing, building, and deployment pipelines." },
            { name: "Nginx", level: "Proficient", years: 2, desc: "Reverse proxy, load balancing, SSL termination. We configure it from scratch." },
            { name: "Kubernetes", level: "Familiar", years: 1, desc: "We've worked with k8s clusters but don't set them up from scratch for every project. Know enough to operate them." },
            { name: "Terraform", level: "Familiar", years: 1, desc: "Infrastructure as code. Used for defining repeatable AWS environments." },
            { name: "Linux", level: "Expert", years: 3, desc: "Ubuntu servers, bash scripting, cron jobs, system administration — comfortable in the terminal." },
        ],
    },
    {
        id: "design",
        label: "Design",
        techs: [
            { name: "Figma", level: "Expert", years: 3, desc: "Our main design tool. Wireframes, high-fidelity mockups, component libraries, prototypes — we use all of it." },
            { name: "Adobe Illustrator", level: "Proficient", years: 2, desc: "Vector graphics, logo work, icon sets. When Figma isn't quite right for the job." },
            { name: "Framer", level: "Familiar", years: 1, desc: "For interactive prototypes that need to feel closer to the real thing." },
        ],
    },
    {
        id: "other",
        label: "Other Tools",
        techs: [
            { name: "Git", level: "Expert", years: 3, desc: "Version control, branching strategies, code review workflows. We follow conventional commits." },
            { name: "Stripe", level: "Proficient", years: 2, desc: "Payment integration, subscriptions, Stripe Connect for marketplaces, webhook handling." },
            { name: "Razorpay", level: "Proficient", years: 2, desc: "Our go-to for Indian payment integrations — UPI, netbanking, EMI, international cards." },
            { name: "Sanity CMS", level: "Proficient", years: 2, desc: "Headless CMS with a good developer experience. We've built custom schemas and GROQ queries." },
            { name: "OpenAI API", level: "Familiar", years: 1, desc: "GPT integration, embeddings, function calling. We've shipped AI features in production products." },
            { name: "Sentry", level: "Proficient", years: 2, desc: "Error monitoring and performance tracking. Goes on every production deployment." },
        ],
    },
];

const allTechs = categories.flatMap((c) => c.techs.map((t) => ({ ...t, category: c.label })));

export default function Technologies() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    useGSAP(() => {
        gsap.from(".hero-in", { y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" });
    }, []);

    const catTechs = activeCategory === "All"
        ? allTechs
        : categories.find((c) => c.label === activeCategory)?.techs.map((t) => ({ ...t, category: activeCategory })) ?? [];

    const displayTechs = catTechs.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.desc.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-black min-h-screen">

            {/* ── HEADER ── */}
            <section className="pt-36 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="hero-in text-gray-500 text-sm font-semibold tracking-widest uppercase mb-5">Technologies</p>
                    <h1 className="hero-in text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl mb-8">
                        The tech<br /><span className="text-gray-300">we actually use.</span>
                    </h1>
                    <p className="hero-in text-gray-400 text-lg max-w-xl leading-relaxed">
                        No buzzword lists or inflated skill claims. This is what we genuinely use in production, how long we&apos;ve used it, and an honest view of our confidence level.
                    </p>
                </div>
            </section>

            {/* ── PROFICIENCY KEY ── */}
            <div className="border-b border-white/5 bg-[#111111] py-5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-wrap gap-6 items-center">
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Proficiency key</span>
                    {Object.values(levelConfig).map((cfg) => (
                        <div key={cfg.label} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${cfg.dotClass}`} />
                            <span className={`text-xs font-semibold ${cfg.textClass}`}>{cfg.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FILTER + SEARCH ── */}
            <div className="sticky top-16 z-30 bg-black/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex flex-wrap gap-2">
                        {["All", ...categories.map((c) => c.label)].map((f) => (
                            <button key={f} onClick={() => setActiveCategory(f)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${activeCategory === f ? "bg-white text-black border-white" : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="relative sm:ml-auto w-full sm:w-64">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                        <input
                            type="text"
                            placeholder="Search technologies..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* ── TECH GRID ── */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
                {displayTechs.length === 0 ? (
                    <p className="text-gray-500 text-center py-20 text-sm">No technologies match your search.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {displayTechs.map((tech, i) => {
                            const cfg = levelConfig[tech.level];
                            return (
                                <div key={i}
                                    className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-2.5">
                                            <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${cfg.dotClass}`} />
                                            <div>
                                                <h3 className="text-white font-bold text-sm">{tech.name}</h3>
                                                <p className="text-gray-600 text-xs">{tech.category}</p>
                                            </div>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className={`text-xs font-semibold ${cfg.textClass}`}>{cfg.label}</span>
                                            <p className="text-gray-700 text-xs">{tech.years}y</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-xs leading-relaxed">{tech.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ── STACK OVERVIEW ── */}
            <section className="py-20 bg-[#111111] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-8">Stack by project type</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { label: "Standard Web App", stack: [["Next.js", 95], ["Node.js / Express", 90], ["PostgreSQL", 80], ["Tailwind CSS", 95], ["AWS", 70]] },
                            { label: "Mobile App", stack: [["React Native", 90], ["Expo", 85], ["Firebase", 75], ["Node.js API", 85]] },
                            { label: "E-Commerce", stack: [["Next.js", 95], ["Stripe / Razorpay", 85], ["Sanity CMS", 80], ["PostgreSQL", 80]] },
                            { label: "Cloud / DevOps", stack: [["AWS", 80], ["Docker", 85], ["GitHub Actions", 90], ["Nginx", 80]] },
                            { label: "AI Integration", stack: [["OpenAI API", 75], ["LangChain", 65], ["Pinecone", 60], ["Next.js", 90]] },
                            { label: "Offline Business", stack: [["React", 90], ["Node.js", 90], ["PostgreSQL", 80], ["Tailwind CSS", 95]] },
                        ].map((col, i) => (
                            <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                                <h3 className="text-white font-bold text-sm mb-4">{col.label}</h3>
                                <div className="space-y-3">
                                    {col.stack.map(([tech, pct]) => (
                                        <div key={tech}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-400 text-xs">{tech}</span>
                                                <span className="text-gray-600 text-xs">{pct}%</span>
                                            </div>
                                            <div className="h-1 rounded-full bg-white/5">
                                                <div className="h-full rounded-full bg-gray-600" style={{ width: `${pct}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HONEST NOTE ── */}
            <section className="py-20 bg-black border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-4">An honest note</p>
                        <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                            We don&apos;t list things<br />we&apos;ve Googled once.
                        </h2>
                        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                            <p>The &quot;Familiar&quot; category means we&apos;ve shipped something real with it — not just followed a tutorial. If it&apos;s not on this list, we haven&apos;t used it in a way we&apos;d feel comfortable being accountable for.</p>
                            <p>If your project needs a technology we haven&apos;t worked with, we&apos;ll tell you honestly. Sometimes we&apos;ll learn it — especially if it&apos;s adjacent to our existing stack. Sometimes we&apos;ll refer you to someone better suited.</p>
                            <p>We&apos;d rather be known for delivering what we promise than for having an impressive-sounding skills list.</p>
                        </div>
                    </div>
                    <div className="space-y-0 divide-y divide-white/5 border-y border-white/5">
                        {[
                            { q: "Do you take on projects that need a tech not on this list?", a: "Sometimes. Depends on how far it is from what we already know and how critical it is to the project. We'll tell you in the first conversation." },
                            { q: "Can you recommend the right stack for my project?", a: "Yes — and that's a useful thing to do early. The right stack depends on your team, your timeline, your budget, and what you'll need to scale. We'll give you a straight answer." },
                            { q: "Do you do R&D or prototype with new tech?", a: "We stay current on what's happening — especially in AI tooling and the React ecosystem. But we don't put anything experimental into production without being upfront about the risk." },
                        ].map((item, i) => (
                            <div key={i} className="py-6">
                                <h3 className="text-white font-bold text-sm mb-2">{item.q}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
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
                            Got a specific<br /><span className="text-gray-300">tech requirement?</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">We&apos;ll tell you honestly whether we&apos;re the right fit — and if not, we&apos;ll point you in the right direction.</p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[220px]">
                        <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors duration-200">
                            Let&apos;s talk tech <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link href="/services" className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium">
                            View all services <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
