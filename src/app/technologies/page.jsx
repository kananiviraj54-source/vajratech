"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Server, Smartphone, Layout, PenTool, Database, Zap } from "lucide-react";

const categories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: Layout,
        techs: [
            { name: "React.js", level: "Expert", desc: "Our primary UI library for 40+ production projects." },
            { name: "Next.js", level: "Expert", desc: "App router, SSR, and ISR experts for high-perf sites." },
            { name: "TypeScript", level: "Expert", desc: "Strictly typed codebases for stability and scale." },
            { name: "Tailwind CSS", level: "Expert", desc: "Building scalable, themeable design systems." },
            { name: "Framer Motion", level: "Proficient", desc: "Creating fluid, declarative React animations." },
            { name: "GSAP", level: "Proficient", desc: "High-performance scroll-driven experiences." }
        ],
    },
    {
        id: "backend",
        label: "Backend",
        icon: Server,
        techs: [
            { name: "Node.js", level: "Expert", desc: "High-throughput asynchronous runtime mastery." },
            { name: "Express.js", level: "Expert", desc: "Robust API architectures and middleware patterns." },
            { name: "PostgreSQL", level: "Expert", desc: "Relational modeling and complex query optimization." },
            { name: "MongoDB", level: "Expert", desc: "Flexible document-based storage solutions." },
            { name: "Redis", level: "Proficient", desc: "Caching, rate limiting, and pub/sub systems." },
            { name: "Prisma", level: "Proficient", desc: "Type-safe database mapping and migrations." }
        ],
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        techs: [
            { name: "React Native", level: "Expert", desc: "Cross-platform engineering for iOS & Android." },
            { name: "Expo", level: "Proficient", desc: "Rapid mobile prototyping and deployment." },
            { name: "Firebase", level: "Proficient", desc: "Real-time sync and mobile crash analytics." },
            { name: "Swift", level: "Familiar", desc: "Native iOS modules when performance is key." }
        ],
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        icon: Database,
        techs: [
            { name: "AWS", level: "Expert", desc: "Certified-level infrastructure configuration." },
            { name: "Docker", level: "Expert", desc: "Containerized deployment and microservices." },
            { name: "GitHub Actions", level: "Expert", desc: "Fully automated CI/CD pipeline engineering." },
            { name: "Terraform", level: "Familiar", desc: "Infrastructure as Code for repeatable envs." }
        ],
    },
];

export default function Technologies() {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("All");

    const filteredTechs = categories.flatMap(c => 
        c.techs.filter(t => 
            (activeTab === "All" || c.label === activeTab) &&
            (t.name.toLowerCase().includes(search.toLowerCase()) || 
             t.desc.toLowerCase().includes(search.toLowerCase()))
        )
    );

    return (
        <div className="min-h-screen pt-32 pb-24">
            {/* Header */}
            <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4"
                    >
                        Our Stack
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-8 font-display"
                    >
                        Tools of the <br />
                        <span className="text-gradient">Trade.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        We use a Battle-tested modern stack to build products that are 
                        secure, scalable, and delightful to use.
                    </motion.p>
                </div>
            </section>

            {/* Toolbar */}
            <div className="px-6 mb-12 sticky top-24 z-30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center bg-background/80 backdrop-blur-xl p-4 rounded-3xl border border-white/5">
                    <div className="flex flex-wrap justify-center gap-2">
                        {["All", ...categories.map(c => c.label)].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                                    activeTab === tab 
                                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                                    : "text-slate-500 hover:text-white"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                        <input 
                            type="text" 
                            placeholder="Search stack..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredTechs.map((tech, i) => (
                                <motion.div
                                    layout
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="glass-card rounded-3xl p-8 border-white/5 hover:border-primary/30 group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Zap size={20} />
                                        </div>
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                                            tech.level === "Expert" ? "bg-green-500/10 text-green-400" : "bg-blue-500/10 text-blue-400"
                                        }`}>
                                            {tech.level}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{tech.name}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
}
