"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Zap, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import HeroDynamic from "@/components/HeroDynamic";
import ServiceCard from "@/components/ServiceCard";

const services = [
    {
        number: "01",
        title: "Product Engineering",
        detail: "We scale from prototype to production with high-performance Next.js and React architectures. Scalability baked in from day one.",
        link: "/services",
    },
    {
        number: "02",
        title: "Cloud Native",
        detail: "Serverless, CI/CD, and AWS infrastructure that reduces overhead and scales automatically with your traffic.",
        link: "/services",
    },
    {
        number: "03",
        title: "Mobile First",
        detail: "Native-feeling apps built with React Native. Fluid animations and offline-first capabilities for a premium user experience.",
        link: "/services",
    },
    {
        number: "04",
        title: "UX Strategy",
        detail: "Research-led design that prioritizes conversion and clarity. We don't just make it pretty; we make it work.",
        link: "/services",
    },
];

const stats = [
    { label: "Successful Ships", value: "50+" },
    { label: "Engineering Experts", value: "12" },
    { label: "Client Satisfaction", value: "98%" },
];

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            <HeroDynamic />

            {/* Stats Band */}
            <section className="py-20 border-y border-slate-200 relative bg-slate-50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 font-display">
                                    {stat.value}
                                </div>
                                <div className="text-slate-600 font-medium tracking-wide uppercase text-xs">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 font-display">
                                Focused on <span className="text-gradient">performance.</span>
                            </h2>
                            <p className="text-slate-600 text-lg">
                                We specialize in the modern stack, helping startups and established 
                                enterprises build digital products that move the needle.
                            </p>
                        </div>
                        <Link href="/services" className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            View all services <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <ServiceCard key={i} {...s} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us / Feature Bento */}
            <section className="py-32 relative bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 glass-card rounded-3xl p-10 md:p-16 flex flex-col justify-center">
                            <h3 className="text-3xl md:text-5xl font-black mb-8 font-display">
                                Built for <br />
                                <span className="text-primary">high-growth teams.</span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <Zap className="text-primary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Rapid Development</h4>
                                        <p className="text-sm text-slate-600">Launch faster without sacrificing quality or security.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Shield className="text-primary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Enterprise Security</h4>
                                        <p className="text-sm text-slate-600">SOC2 compliant patterns and encrypted data flows.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Clean Code</h4>
                                        <p className="text-sm text-slate-600">Modular, tested, and high-performance engineering.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Rocket className="text-primary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Cloud Optimized</h4>
                                        <p className="text-sm text-slate-600">Cost-effective infrastructure that grows with you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card rounded-3xl p-10 bg-primary shadow-2xl shadow-primary/20 flex flex-col justify-between border-primary/20">
                            <div>
                                <h3 className="text-3xl font-black text-white mb-6 font-display">
                                    Ready to scale?
                                </h3>
                                <p className="text-white/80 leading-relaxed mb-8">
                                    Let's discuss how we can help you build your next big idea with 
                                    precision engineering.
                                </p>
                            </div>
                            <Link 
                                href="/contact"
                                className="w-full py-5 text-center bg-white text-primary font-black rounded-2xl hover:bg-slate-50 transition-colors shadow-lg"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Focus Strip */}
            <section className="py-24 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-10">
                        Our Modern Tech Stack
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-500 font-display font-medium text-xl md:text-2xl">
                        {["Next.js", "React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker", "Tailwind"].map((tech) => (
                            <span key={tech} className="hover:text-primary transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
