"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";

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
        {
            icon: Mail,
            label: "Email Us",
            value: "info@vajratechlabs.com",
            sub: "We reply within 24 hours",
            href: "mailto:info@vajratechlabs.com",
        },
        {
            icon: Phone,
            label: "Call Us",
            value: "+91 87800 10927",
            sub: "Mon – Sat, 9am – 7pm IST",
            href: "tel:+918780010927",
        },
        {
            icon: MapPin,
            label: "Visit Us",
            value: "Surat, Gujarat, India",
            sub: "Mota Varachha, 394101",
            href: "https://maps.google.com/?q=21.2358,72.8775",
        },
        {
            icon: Clock,
            label: "Hours",
            value: "Mon – Sat",
            sub: "9:00 AM – 7:00 PM IST",
        },
    ];

    return (
        <div className="bg-black min-h-screen">

            {/* ── HEADER ── */}
            <section className="pt-36 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-5">Contact</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight max-w-3xl mb-8 text-white">
                        Let&apos;s build
                        <br />
                        <span className="text-gray-300">something great.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        Tell us what you&apos;re working on. We&apos;ll respond within 24 hours — and we&apos;ll be straightforward about whether we&apos;re the right fit.
                    </p>
                </div>
            </section>

            {/* ── MAIN CONTENT ── */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                    {/* ── LEFT — Contact Details ── */}
                    <div className="lg:col-span-2 space-y-4">
                        {contactDetails.map((item, i) => {
                            const Icon = item.icon;
                            const inner = (
                                <div
                                    key={i}
                                    className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <Icon size={18} className="text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-0.5">{item.label}</p>
                                        <p className="text-white font-semibold text-sm">{item.value}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                                    </div>
                                </div>
                            );
                            return item.href ? (
                                <a href={item.href} key={i} target="_blank" rel="noreferrer">{inner}</a>
                            ) : <div key={i}>{inner}</div>;
                        })}

                        {/* Map */}
                        <div className="rounded-xl overflow-hidden border border-white/5 mt-6">
                            <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=72.85%2C21.22%2C72.90%2C21.25&layer=mapnik&marker=21.2358%2C72.8775"
                                className="w-full h-48"
                                style={{ filter: "invert(1) hue-rotate(180deg) grayscale(30%) brightness(0.7)" }}
                                title="Office Location"
                                loading="lazy"
                            />
                            <div className="bg-[#111111] px-4 py-3 border-t border-white/5">
                                <a
                                    href="https://www.google.com/maps?q=21.2358,72.8775"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
                                >
                                    Open in Google Maps →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT — Contact Form ── */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl bg-white/[0.02] border border-white/8 overflow-hidden">
                            {/* Top gradient bar */}
                            <div className="h-px bg-gradient-to-r from-white via-gray-400 to-gray-700" />
                            <div className="p-8">
                                <h2 className="text-xl font-black text-white mb-1">Send us a message</h2>
                                <p className="text-gray-500 text-sm mb-8">We read every message and reply personally.</p>

                                {status === "success" ? (
                                    <div className="text-center py-16">
                                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                                            <Send size={22} className="text-white" />
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">Message sent!</h3>
                                        <p className="text-gray-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Name *</label>
                                                <input type="text" name="name" required value={formData.name} onChange={handleChange}
                                                    placeholder="Your full name"
                                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Email *</label>
                                                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors" />
                                            </div>
                                        </div>

                                        {/* Phone + Service */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Phone</label>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                                    placeholder="+91 XXXXX XXXXX"
                                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Service Needed</label>
                                                <select name="service" value={formData.service} onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors appearance-none">
                                                    <option value="" disabled className="bg-[#111111]">Select a service</option>
                                                    {["Web Development", "Mobile App", "Cloud / DevOps", "UI/UX Design", "E-Commerce", "AI Integration", "Consulting", "Other"].map((s) => (
                                                        <option key={s} value={s} className="bg-[#111111]">{s}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Budget */}
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Approximate Budget</label>
                                            <select name="budget" value={formData.budget} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors appearance-none">
                                                <option value="" disabled className="bg-[#111111]">Select a range</option>
                                                {["Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "₹5,00,000+", "Not sure yet"].map((b) => (
                                                    <option key={b} value={b} className="bg-[#111111]">{b}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">What are you building? *</label>
                                            <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                                                placeholder="Tell us about your project, the problem you're solving, and what you need from us..."
                                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors resize-none" />
                                        </div>

                                        <button type="submit" disabled={status === "loading"}
                                            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-gray-200 disabled:opacity-60 transition-all duration-200">
                                            {status === "loading" ? (
                                                <><Loader2 size={16} className="animate-spin" /> Sending...</>
                                            ) : (
                                                <><Send size={16} /> Send Message</>
                                            )}
                                        </button>

                                        <p className="text-gray-600 text-xs text-center">
                                            We never share your information. No spam, ever.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
