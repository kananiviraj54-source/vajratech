"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Filter } from "lucide-react";

const filters = ["All", "Web App", "Mobile App", "Cloud", "Offline Business", "E-Commerce"];

const projects = [
    { id: 1, title: "Enterprise CRM Platform", client: "FinanceFlow Pvt. Ltd.", category: "Web App", type: "Big Tech", year: "2024", duration: "5 months", challenge: "Their sales team was tracking 3,000+ leads across 7 spreadsheets. Data was getting lost, follow-ups were missed, deals were slipping.", solution: "Built a full CRM from scratch — lead pipeline with drag-and-drop stages, automated follow-up reminders, role-based access for managers and reps.", outcome: "Lead closure rate improved by 34% in the first quarter.", tags: ["React", "Node.js", "PostgreSQL", "Redis"], link: "#" },
    { id: 2, title: "Logistics Dashboard", client: "SwiftMoves Logistics", category: "Web App", type: "Big Tech", year: "2024", duration: "3 months", challenge: "200+ delivery agents and no way to see where anything was. Operations team was reactive.", solution: "Live tracking dashboard with GPS integration, agent mobile app for status updates, and ETA predictions.", outcome: "Customer complaints dropped by 60%.", tags: ["Next.js", "WebSockets", "Maps API"], link: "#" },
    { id: 3, title: "Marketplace Platform", client: "CraftCircle India", category: "E-Commerce", type: "Big Tech", year: "2023", duration: "4 months", challenge: "Independent artisans needed multi-vendor support and automatic payment splitting.", solution: "Custom Next.js marketplace with Stripe Connect for split payouts and vendor dashboards.", outcome: "Hit ₹12L in GMV in the first 3 months.", tags: ["Next.js", "Stripe", "PostgreSQL"], link: "#" },
    { id: 4, title: "Telemedicine App", client: "DoctorNow", category: "Mobile App", type: "Big Tech", year: "2023", duration: "6 months", challenge: "Low-bandwidth video consultations for tier-2 cities.", solution: "React Native app with WebRTC video calling and slot-based booking.", outcome: "20,000+ consultations in year one.", tags: ["React Native", "WebRTC", "Firebase"], link: "#" },
];

export default function Work() {
    const [active, setActive] = useState("All");
    const filtered = active === "All" ? projects : projects.filter((p) => p.category === active || p.type === active);

    return (
        <div className="min-h-screen pt-32 pb-24">
            {/* Header */}
            <section className="relative px-6 mb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[30%] h-[100%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4"
                    >
                        Our Portfolio
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-8 font-display"
                    >
                        Selected <span className="text-gradient">Work.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl leading-relaxed"
                    >
                        From enterprise platforms to niche local businesses — we build solutions that 
                        solve real technical challenges and deliver measurable outcomes.
                    </motion.p>
                </div>
            </section>

            {/* Filters Bar */}
            <div className="px-6 mb-12 sticky top-24 z-30">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 bg-white/80 backdrop-blur-xl p-2 rounded-2xl border border-slate-200">
                    <div className="px-4 text-slate-500 hidden sm:flex items-center gap-2">
                        <Filter size={16} />
                        <span className="text-sm font-bold">Filter:</span>
                    </div>
                    {filters.map((f) => (
                        <button 
                            key={f} 
                            onClick={() => setActive(f)}
                            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                                active === f 
                                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                                : "text-slate-500 hover:text-primary hover:bg-primary/5"
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project List */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((p) => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="group glass-card rounded-3xl p-8 md:p-12 overflow-hidden border-white/5 hover:border-primary/20"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">
                            {project.category}
                        </span>
                        <span className="text-slate-500 text-xs font-bold">
                            {project.year} · {project.duration}
                        </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors font-display">
                        {project.title}
                    </h3>
                    <p className="text-slate-500 font-bold mb-8">{project.client}</p>
                    
                    <div className="space-y-6 mb-10">
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Challenge</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                            <h4 className="text-xs font-black text-primary/70 uppercase tracking-widest mb-2">Outcome</h4>
                            <p className="text-slate-900 font-bold leading-relaxed">{project.outcome}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link 
                        href={project.link}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        View Project
                        <ExternalLink size={16} />
                    </Link>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-primary/20 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet/10 opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ArrowUpRight size={64} className="text-slate-200 group-hover:text-primary transition-all group-hover:scale-110" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
