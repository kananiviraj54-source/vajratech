"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Users2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen pt-32 pb-24">
            {/* Header */}
            <section className="px-6 mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4"
                    >
                        Our Story
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-8 font-display"
                    >
                        Engineering with <br />
                        <span className="text-gradient">Integrity.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        We're a boutique engineering studio from India, founded on the principle 
                        that premium software should be defined by its craftsmanship, not its budget.
                    </motion.p>
                </div>
            </section>

            {/* Core Values / Grid */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Code2, title: "Clean Engineering", desc: "We write code that is modular, tested, and built to scale." },
                        { icon: Users2, title: "Direct Collaboration", desc: "No middle managers. You talk directly to the engineers building your vision." },
                        { icon: ShieldCheck, title: "Radical Transparency", desc: "Honest timelines, clear pricing, and no hidden technical debt." },
                        { icon: Zap, title: "Rapid Execution", desc: "We favor movement over meetings. Shipping is our primary metric." }
                    ].map((val, i) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <val.icon size={24} />
                            </div>
                            <h3 className="text-slate-900 font-bold text-lg mb-3">{val.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
                            Small by design. <br />
                            <span className="text-primary">Impactful by nature.</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Founded in 2022, VajraTech was created to bridge the gap between expensive 
                                legacy agencies and unreliable freelancers. We wanted to build a studio 
                                where engineering quality is never sacrificed for speed.
                            </p>
                            <p>
                                Today, we are a small but elite team of developers and designers who thrive 
                                on solving complex problems. We've shipped over 50 projects, ranging from 
                                core internal tools for offline businesses to high-traffic web applications.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                        <div className="space-y-4">
                            <div className="glass-card rounded-3xl p-8 text-center aspect-square flex flex-col justify-center">
                                <div className="text-4xl font-black text-slate-900 mb-2 font-display">50+</div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Ships</div>
                            </div>
                            <div className="glass-card rounded-3xl p-8 text-center bg-primary/5 border-primary/10 aspect-video flex flex-col justify-center">
                                <div className="text-2xl font-black text-slate-900 mb-2 font-display">2022</div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Est.</div>
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="glass-card rounded-3xl p-8 text-center aspect-video flex flex-col justify-center">
                                <div className="text-2xl font-black text-slate-900 mb-2 font-display">12</div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Experts</div>
                            </div>
                            <div className="glass-card rounded-3xl p-8 text-center aspect-square flex flex-col justify-center">
                                <div className="text-4xl font-black text-primary mb-2 font-display">98%</div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Client Ret.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Future */}
            <section className="px-6 py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
                        The future is <span className="text-gradient">engineered.</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-12">
                        We're just getting started. Our roadmap involves deeper AI integration, 
                        contributing to the open-source community, and continuing to build 
                        extraordinary digital products for our partners.
                    </p>
                    <Link 
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary/90 transition-colors shadow-xl shadow-primary/20"
                    >
                        Partner with us <ArrowUpRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
