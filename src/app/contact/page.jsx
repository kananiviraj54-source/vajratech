"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Sparkles, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("success");
    };

    const contactDetails = [
        { icon: Mail, label: "Email", value: "info@vajratech.com", sub: "Replies in 24h", href: "mailto:info@vajratech.com" },
        { icon: Phone, label: "Phone", value: "+91 94298 25879", sub: "Mon-Sat, 9am-7pm", href: "tel:+919429825879" },
        { icon: MapPin, label: "Location", value: "Surat, Gujarat, India", sub: "Mota Varachha, 394101", href: "https://maps.google.com/?q=21.2358,72.8775" }
    ];

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
                        Get in Touch
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-8 font-display"
                    >
                        Let's start <br />
                        <span className="text-gradient">something big.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        Whether you have a fully-fledged spec or just a rough idea,
                        we're here to help you engineer the solution.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            {contactDetails.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-6 glass-card p-6 rounded-3xl border-white/5 hover:border-primary/30 group transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-white font-bold text-lg mb-1">{item.value}</p>
                                        <p className="text-slate-500 text-xs">{item.sub}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="glass-card rounded-[2.5rem] p-8 border-primary/20 bg-primary/5">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Sparkles size={20} />
                                <span className="text-sm font-black uppercase tracking-widest">Why us?</span>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Direct access to lead engineers",
                                    "Fixed pricing. No hidden fees.",
                                    "Weekly progress demonstrations",
                                    "Post-launch technical support"
                                ].map(text => (
                                    <li key={text} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card rounded-[2.5rem] p-8 md:p-12 border-white/10"
                        >
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary">
                                            <Send size={40} />
                                        </div>
                                        <h2 className="text-3xl font-black text-white mb-4 font-display">Transmission Sent.</h2>
                                        <p className="text-slate-400">We've received your message and will reach out within 24 hours.</p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-8 text-primary font-bold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Name</label>
                                                <input
                                                    type="text" name="name" required value={formData.name} onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email</label>
                                                <input
                                                    type="email" name="email" required value={formData.email} onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Service</label>
                                                <select
                                                    name="service" value={formData.service} onChange={handleChange}
                                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none"
                                                >
                                                    <option value="" disabled className="bg-background">Choose Service</option>
                                                    <option value="web" className="bg-background">Web Engineering</option>
                                                    <option value="mobile" className="bg-background">Mobile Solution</option>
                                                    <option value="cloud" className="bg-background">Cloud & DevOps</option>
                                                    <option value="design" className="bg-background">UI/UX Strategy</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Budget</label>
                                                <select
                                                    name="budget" value={formData.budget} onChange={handleChange}
                                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none"
                                                >
                                                    <option value="" disabled className="bg-background">Budget Range</option>
                                                    <option value="small" className="bg-background">&lt; ₹50k</option>
                                                    <option value="med" className="bg-background">₹50k - ₹2L</option>
                                                    <option value="large" className="bg-background">₹2L+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Project Brief</label>
                                            <textarea
                                                name="message" required rows={4} value={formData.message} onChange={handleChange}
                                                placeholder="Tell us about your goals..."
                                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full py-5 rounded-2xl bg-primary text-white font-black hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                                        >
                                            {status === "loading" ? (
                                                <Loader2 size={24} className="animate-spin" />
                                            ) : (
                                                <>
                                                    Initialize Project
                                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
