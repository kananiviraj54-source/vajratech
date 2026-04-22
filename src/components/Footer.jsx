"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 py-20 border-t border-slate-200 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
                                V
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                                Vajra<span className="text-primary">Tech</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 max-w-sm mb-8 leading-relaxed">
                            Crafting high-performance digital solutions for companies that refuse to compromise. 
                            Engineering-led, design-focused.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Twitter, href: "#" },
                                { Icon: Github, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Mail, href: "mailto:info@vajratech.com" }
                            ].map(({ Icon, href }, i) => (
                                <Link 
                                    key={i} 
                                    href={href} 
                                    className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary transition-all border border-slate-200"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6 font-display">Services</h4>
                        <ul className="space-y-4">
                            {["Web Design", "Development", "Mobile Apps", "Cloud Setup"].map(link => (
                                <li key={link}>
                                    <Link href="/services" className="text-slate-600 hover:text-primary transition-colors text-sm">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6 font-display">Company</h4>
                        <ul className="space-y-4">
                            {["About", "Work", "Tech", "Careers", "Contact"].map(link => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase()}`} className="text-slate-600 hover:text-primary transition-colors text-sm">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4 text-xs font-medium text-slate-500">
                    <p>© 2026 VajraTech. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
