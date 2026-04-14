"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ number, title, detail, link, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-4xl font-black text-white/5 font-display select-none">
                            {number}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <ArrowUpRight size={24} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        {detail}
                    </p>
                </div>
                
                <Link 
                    href={link}
                    className="inline-flex items-center text-sm font-bold text-slate-300 group-hover:text-white transition-colors"
                >
                    Learn more
                </Link>
            </div>
        </motion.div>
    );
}
