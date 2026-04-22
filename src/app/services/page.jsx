"use client";

import { motion } from "framer-motion";
import { 
    Globe, Smartphone, Cloud, Palette, 
    ArrowUpRight, Zap, Target, Layers
} from "lucide-react";
import Link from "next/link";

const categories = [
    {
        id: "web",
        label: "Web Engineering",
        icon: Globe,
        headline: "High-Performance Digital Interfaces",
        summary: "We build web applications that aren't just pretty, but engineered for speed, SEO, and conversion using the latest Next.js and React technology.",
        services: ["Custom Web Apps", "Enterprise Portals", "E-Commerce", "API Design"],
        stack: ["Next.js", "TypeScript", "PostgreSQL"]
    },
    {
        id: "mobile",
        label: "Mobile Solutions",
        icon: Smartphone,
        headline: "Native Power. Multi-Platform Reach.",
        summary: "Fluid mobile experiences built with React Native. We deliver cross-platform apps that feel entirely native to the end user.",
        services: ["iOS & Android Apps", "UI/UX Architecture", "Mobile Backend", "Offline Sync"],
        stack: ["React Native", "Expo", "Firebase"]
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        icon: Cloud,
        headline: "Infrastructure That Scales With You",
        summary: "Automated deployments, serverless architectures, and AWS expertise that reduces your overhead while increasing reliability.",
        services: ["AWS Architecture", "CI/CD Pipelines", "Dockerization", "Cloud Security"],
        stack: ["AWS", "GitHub Actions", "Docker"]
    },
    {
        id: "design",
        label: "UI/UX Strategy",
        icon: Palette,
        headline: "Design Led by Data & Research",
        summary: "We create intuitive design systems that your users will understand instantly. No friction, just pure functionality.",
        services: ["Product Design", "Interactive Prototypes", "Design Systems", "User Research"],
        stack: ["Figma", "Framer", "Lottie"]
    }
];

export default function Services() {
    return (
        <div className="min-h-screen pt-32">
            {/* Hero Section */}
            <section className="px-6 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4"
                    >
                        Capabilities
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-8 font-display"
                    >
                        Engineering <br />
                        <span className="text-gradient">Possibilities.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
                    >
                        We offer a comprehensive suite of digital services designed 
                        to help modern companies build better products, faster.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                    >
                        <Link href="/contact" className="px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20">
                            Start a Project
                        </Link>
                        <Link href="/work" className="px-8 py-4 rounded-2xl glass-panel border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-all">
                            See Our Results
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Service Categories */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto space-y-12">
                    {categories.map((cat, i) => (
                        <ServiceRow key={cat.id} cat={cat} index={i} />
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 font-display">
                        Why partner with <span className="text-primary">us?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Zap size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Velocity</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We ship high-quality code at startup speed, enabling you to iterate and scale quickly.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-violet/10 flex items-center justify-center text-violet mb-6">
                                <Target size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Precision</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Every line of code and every pixel is placed with intent, ensuring a premium outcome.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                                <Layers size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Scalability</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We design architectures that grow with your user base, from 1 to 1 million.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ServiceRow({ cat, index }) {
    const Icon = cat.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col lg:flex-row gap-12 p-8 md:p-12 rounded-[2.5rem] glass-panel border-white/5 hover:border-primary/20 transition-all ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
        >
            <div className="lg:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                    <Icon size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 font-display">
                    {cat.headline}
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed italic border-l-2 border-primary/30 pl-6">
                    "{cat.summary}"
                </p>
                <div className="flex flex-wrap gap-2">
                    {cat.stack.map(s => (
                        <span key={s} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors">
                            {s}
                        </span>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.services.map((svc, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black text-primary/50 uppercase tracking-widest">Service {i + 1}</span>
                            <ArrowUpRight size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="text-slate-900 font-bold text-lg mb-2">{svc}</h4>
                        <p className="text-xs text-slate-500">Professional {svc.toLowerCase()} tailored to your needs.</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
