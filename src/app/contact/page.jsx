"use client";

import { useState } from "react";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    Linkedin,
    Github,
    Twitter,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

const contactDetails = [
    {
        icon: Mail,
        label: "Email Us",
        lines: ["info@vajratechlabs.in"],
        color: "from-cyan-400 to-blue-500",
        glow: "shadow-cyan-500/20",
    },
    {
        icon: Phone,
        label: "Call Us",
        lines: ["+91 93132 45421"],
        color: "from-violet-400 to-purple-600",
        glow: "shadow-violet-500/20",
    },
    {
        icon: MapPin,
        label: "Visit Us",
        lines: [
            "65 BhaktiNandan Society,",
            "Sector-2, Mota Varachha,",
            "Surat, Gujarat — 394101",
        ],
        color: "from-fuchsia-400 to-pink-600",
        glow: "shadow-fuchsia-500/20",
    },
];

const socials = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [focused, setFocused] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1400));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="relative min-h-screen bg-darker overflow-hidden">
            {/* ── Ambient orbs ── */}
            <div
                aria-hidden
                className="pointer-events-none fixed top-[-180px] left-[-180px] w-[520px] h-[520px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none fixed bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(124,77,255,0.18) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none fixed top-[40%] right-[20%] w-[300px] h-[300px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(245,0,87,0.08) 0%, transparent 70%)",
                    filter: "blur(50px)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                {/* ── Hero text ── */}
                <div className="text-center mb-20 space-y-5">
                    <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5">
                        Get In Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-300">
                            Let's Build
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                            Something Great
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind, or just want to say hello? Drop us a message —
                        we typically respond within 24 hours.
                    </p>
                </div>

                {/* ── Main grid ── */}
                <div className="grid lg:grid-cols-5 gap-10">

                    {/* ── Left: Contact cards ── */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {contactDetails.map(({ icon: Icon, label, lines, color, glow }) => (
                            <div
                                key={label}
                                className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex items-start gap-5 hover:border-white/20 transition-all duration-300 hover:shadow-xl ${glow}`}
                            >
                                {/* Shimmer line on hover */}
                                <div className={`absolute inset-x-0 top-0 h-[2px] rounded-full bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                                    <Icon size={22} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
                                        {label}
                                    </p>
                                    {lines.map((l, i) => (
                                        <p key={i} className="text-gray-200 text-sm leading-relaxed">
                                            {l}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Socials */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                                Follow Us
                            </p>
                            <div className="flex gap-3">
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 overflow-hidden relative" style={{ height: "224px" }}>
                            <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8516%2C21.2159%2C72.8916%2C21.2559&layer=mapnik&marker=21.2359%2C72.8716"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                className="opacity-70 hover:opacity-100 transition-opacity duration-500"
                                loading="lazy"
                                title="VajraTechLabs Office — Mota Varachha, Surat"
                            />
                        </div>
                        <a
                            href="https://www.google.com/maps/search/65+BhaktiNandan+Society+Sector+2+Mota+Varachha+Surat+Gujarat+394101"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors mt-1"
                        >
                            <MapPin size={12} />
                            Open in Google Maps
                        </a>
                    </div>

                    {/* ── Right: Form ── */}
                    <div className="lg:col-span-3">
                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 overflow-hidden">
                            {/* top gradient bar */}
                            <div
                                aria-hidden
                                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent"
                            />

                            {submitted ? (
                                /* ── Success state ── */
                                <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
                                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-bounce">
                                        <CheckCircle size={40} className="text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
                                    <p className="text-gray-400 max-w-sm">
                                        Thanks for reaching out. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                        className="mt-4 px-6 py-2.5 rounded-xl border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                /* ── Form ── */
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            Send a Message
                                        </h2>
                                        <p className="text-gray-400 text-sm">
                                            Fill out the form below and we'll be in touch soon.
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <Field
                                            id="name"
                                            label="Full Name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={form.name}
                                            onChange={handleChange}
                                            focused={focused}
                                            onFocus={() => setFocused("name")}
                                            onBlur={() => setFocused(null)}
                                        />
                                        <Field
                                            id="email"
                                            label="Email Address"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            focused={focused}
                                            onFocus={() => setFocused("email")}
                                            onBlur={() => setFocused(null)}
                                        />
                                    </div>

                                    <Field
                                        id="subject"
                                        label="Subject"
                                        type="text"
                                        placeholder="What's this about?"
                                        value={form.subject}
                                        onChange={handleChange}
                                        focused={focused}
                                        onFocus={() => setFocused("subject")}
                                        onBlur={() => setFocused(null)}
                                    />

                                    {/* Textarea */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-400 mb-2"
                                        >
                                            Message
                                        </label>
                                        <div
                                            className={`relative rounded-xl transition-all duration-200 ${focused === "message"
                                                ? "ring-2 ring-primary/60 shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                                                : ""
                                                }`}
                                        >
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                value={form.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocused("message")}
                                                onBlur={() => setFocused(null)}
                                                placeholder="Tell us about your project, timeline, and goals…"
                                                className="w-full px-4 py-3 bg-dark/60 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm resize-none outline-none transition-colors duration-200 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-dark bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-dark/40 border-t-dark rounded-full animate-spin" />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight
                                                    size={18}
                                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                                />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Reusable field component ── */
function Field({ id, label, type, placeholder, value, onChange, focused, onFocus, onBlur }) {
    const isFocused = focused === id;
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">
                {label}
            </label>
            <div
                className={`relative rounded-xl transition-all duration-200 ${isFocused ? "ring-2 ring-primary/60 shadow-[0_0_20px_rgba(0,229,255,0.1)]" : ""
                    }`}
            >
                <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-dark/60 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200 focus:border-transparent"
                />
            </div>
        </div>
    );
}
