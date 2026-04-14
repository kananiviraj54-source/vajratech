"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/work" },
        { name: "Tech", href: "/technologies" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`w-full max-w-6xl pointer-events-auto transition-all duration-500 rounded-2xl border ${
                    scrolled 
                    ? "glass-panel shadow-2xl py-3 px-6" 
                    : "bg-transparent border-transparent py-5 px-6"
                } flex items-center justify-between`}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
                        V
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white font-display">
                        Vajra<span className="text-primary">Tech</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-white ${
                                pathname === link.href ? "text-white" : "text-slate-400"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link 
                        href="/contact"
                        className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all hover:gap-3 shadow-lg shadow-primary/20"
                    >
                        Talk to us
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-1"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="fixed inset-x-4 top-24 z-40 md:hidden glass-panel rounded-3xl p-6 border-white/10 shadow-3xl pointer-events-auto"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-semibold text-slate-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-white/10" />
                            <Link 
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-center flex items-center justify-center gap-2"
                            >
                                Get in touch
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
