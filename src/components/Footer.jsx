"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold transition-transform">
                                V
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white font-display">
                                Vajra<span className="text-primary">Tech</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
                            Crafting high-performance digital solutions for companies that refuse to compromise.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <Link 
                                    key={i} 
                                    href="#" 
                                    className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all"
                                >
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Services</h4>
                        <ul className="space-y-4">
                            {["Web Design", "Development", "Mobile Apps", "Cloud Setup"].map((link) => (
                                <li key={link}>
                                    <Link href="/services" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        {link}
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Company</h4>
                        <ul className="space-y-4">
                            {["About", "Work", "Tech", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        {link}
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
                    <p className="text-slate-500 text-sm">
                        © 2026 VajraTech. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-slate-500 hover:text-white text-sm">Privacy</Link>
                        <Link href="/terms" className="text-slate-500 hover:text-white text-sm">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
