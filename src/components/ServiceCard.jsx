"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ number, title, detail, link, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-3xl p-8 flex flex-col h-full hover:bg-primary/5 transition-all"
        >
            <div className="flex justify-between items-start mb-8">
                <span className="text-primary font-black text-xs tracking-widest uppercase">
                    {number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                    <ArrowUpRight size={20} />
                </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-primary transition-colors">
                {title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {detail}
            </p>

            <Link 
                href={link}
                className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
            >
                Learn more
            </Link>
        </motion.div>
    );
}
