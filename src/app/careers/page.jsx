"use client";

import { motion } from "framer-motion";
import { 
    Code2, Users2, Rocket, ArrowRight, 
    Briefcase, MapPin, Clock, Brain,
    CheckCircle2
} from "lucide-react";
import Link from "next/link";

const jobs = [
    {
        id: "react-dev",
        title: "Senior React Developer",
        category: "Engineering",
        location: "Surat / Remote",
        type: "Full-time",
        description: "We are looking for a React expert who breathes components and performance. You'll be leading the frontend architecture for high-growth startups.",
        requirements: [
            "5+ years of experience with React and TypeScript.",
            "Deep understanding of Next.js and the App Router.",
            "Expertise in performance optimization and state management (Zustand, TanStack Query).",
            "A sharp eye for UI/UX and experience with Tailwind CSS."
        ],
        benefits: ["Competitive Salary", "Flexible Hours", "Learning Stipend"]
    },
    {
        id: "node-dev",
        title: "Node.js Backend Engineer",
        category: "Engineering",
        location: "Surat / Remote",
        type: "Full-time",
        description: "Build the backbone of modern digital products. We need someone who can design scalable microservices and manage complex database architectures.",
        requirements: [
            "4+ years of experience with Node.js and TypeScript.",
            "Proficiency in PostgreSQL, Redis, and Prisma/Drizzle.",
            "Experience with AWS (Lambda, S3, RDS) and Docker.",
            "Strong understanding of API design and security best practices."
        ],
        benefits: ["Performance Bonuses", "Stock Options", "Home Office Budget"]
    },
    {
        id: "java-architect",
        title: "Java Systems Architect",
        category: "Engineering",
        location: "Surat / Remote",
        type: "Full-time",
        description: "Leading the architectural design for our enterprise-grade internal tools. You will bridge the gap between complex business logic and robust systems.",
        requirements: [
            "6+ years of experience with Java and Spring Boot.",
            "Experience with microservices architecture and event-driven systems.",
            "Deep knowledge of SQL and NoSQL databases.",
            "Ability to mentor junior developers and lead technical strategy."
        ],
        benefits: ["Leadership Role", "Premium Health Insurance", "Annual Retreats"]
    }
];

export default function Careers() {
    return (
        <div className="min-h-screen pt-32 pb-24">
            {/* Hero Section */}
            <section className="px-6 mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto text-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4"
                    >
                        Join the Team
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-8 font-display"
                    >
                        Build the future of <br />
                        <span className="text-gradient">engineering.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        We're looking for craftsmen and craftswomen who are obsessed with quality 
                        and thrive on solving complex technical challenges.
                    </motion.p>
                </div>
            </section>

            {/* Why Us / Culture */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Brain, title: "Engineering First", desc: "No middle managers. Decisions are made by the people writing the code." },
                        { icon: Rocket, title: "High Velocity", desc: "We ship daily. We value movement over meetings and shipping over talking." },
                        { icon: Users2, title: "Shared Growth", desc: "Your success is our success. We invest heavily in your professional development." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-200"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Job Openings */}
            <section className="px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 font-display text-center">
                        Open <span className="text-primary">Positions</span>
                    </h2>
                    
                    <div className="space-y-6">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group glass-card rounded-[2rem] p-8 md:p-10 border-slate-200 hover:border-primary/30 transition-all"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">
                                                {job.category}
                                            </span>
                                            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                                                <MapPin size={14} />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                                                <Clock size={14} />
                                                {job.type}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors font-display">
                                            {job.title}
                                        </h3>
                                    </div>
                                    <Link 
                                        href="/contact"
                                        className="px-8 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-primary transition-all flex items-center gap-2 shadow-lg"
                                    >
                                        Apply Now
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">The Role</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.benefits.map(benefit => (
                                                <span key={benefit} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-bold border border-slate-200">
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Requirements</h4>
                                        <ul className="space-y-3">
                                            {job.requirements.map((req, rid) => (
                                                <li key={rid} className="flex items-start gap-2 text-slate-600 text-xs leading-relaxed">
                                                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-6 py-32 mt-12 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
                        Don't see a <span className="text-gradient">perfect fit?</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-12">
                        We're always on the lookout for exceptional talent. If you believe you can 
                        add value to our team, reach out anyway.
                    </p>
                    <Link 
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                        General Application <Briefcase size={20} className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
