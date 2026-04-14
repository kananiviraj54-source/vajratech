"use client";

import { useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const filters = ["All", "Web App", "Mobile App", "Cloud", "Offline Business", "E-Commerce"];

const projects = [
    { id: 1, title: "Enterprise CRM Platform", client: "FinanceFlow Pvt. Ltd.", category: "Web App", type: "Big Tech", year: "2024", duration: "5 months", challenge: "Their sales team was tracking 3,000+ leads across 7 spreadsheets. Data was getting lost, follow-ups were missed, deals were slipping.", solution: "Built a full CRM from scratch — lead pipeline with drag-and-drop stages, automated follow-up reminders, role-based access for managers and reps, and a reporting dashboard that saved their team 10 hours a week.", outcome: "Lead closure rate improved by 34% in the first quarter after launch.", tags: ["React", "Node.js", "PostgreSQL", "Redis", "AWS EC2"], link: "#" },
    { id: 2, title: "Real-Time Logistics Dashboard", client: "SwiftMoves Logistics", category: "Web App", type: "Big Tech", year: "2024", duration: "3 months", challenge: "They had 200+ delivery agents and no way to see where anything was. Operations team was on the phone all day asking for updates.", solution: "Built a live tracking dashboard with GPS integration, agent mobile app for status updates, and an admin panel showing every delivery in real time with ETA predictions.", outcome: "Customer complaints dropped by 60%. Dispatchers went from reactive to proactive.", tags: ["Next.js", "React Native", "WebSockets", "Google Maps API", "MongoDB"], link: "#" },
    { id: 3, title: "Multi-Vendor E-Commerce Marketplace", client: "CraftCircle India", category: "E-Commerce", type: "Big Tech", year: "2023", duration: "4 months", challenge: "A marketplace for independent artisans — they needed multi-vendor support, individual seller dashboards, and a payout system that split payments automatically.", solution: "Custom Next.js marketplace with separate vendor stores, Stripe Connect for split payouts, inventory per vendor, customer reviews, and a comprehensive admin control panel.", outcome: "Launched with 80 vendors onboard. Hit ₹12L in GMV in the first 3 months.", tags: ["Next.js", "Stripe Connect", "PostgreSQL", "Sanity CMS", "Tailwind"], link: "#" },
    { id: 4, title: "Healthcare Telemedicine App", client: "DoctorNow", category: "Mobile App", type: "Big Tech", year: "2023", duration: "6 months", challenge: "Connecting patients in tier-2 cities with specialists in metro cities. Video quality, appointment booking, and prescription management all needed to work reliably on low-end Android devices.", solution: "React Native app with WebRTC video calling optimised for low bandwidth, slot-based appointment booking, real-time chat, digital prescriptions, and payment via Razorpay.", outcome: "20,000+ consultations completed in the first year. 4.6 rating on Play Store.", tags: ["React Native", "WebRTC", "Firebase", "Razorpay", "Node.js"], link: "#" },
    { id: 5, title: "Cloud Infrastructure Migration", client: "DataVault Analytics", category: "Cloud", type: "Big Tech", year: "2024", duration: "2 months", challenge: "Running everything on a single dedicated server — slow queries, occasional outages, and no way to scale during peak reporting periods.", solution: "Migrated to AWS — RDS for the database, EC2 auto-scaling group for the app layer, CloudFront for static assets, and set up full CI/CD with GitHub Actions. Zero data loss during migration.", outcome: "Page load times dropped from 6.2s to 1.1s. Monthly infra cost reduced by 28%.", tags: ["AWS", "RDS", "EC2", "CloudFront", "GitHub Actions", "Docker"], link: "#" },
    { id: 6, title: "EdTech LMS Platform", client: "SkillBridge E-Learning", category: "Web App", type: "Big Tech", year: "2023", duration: "5 months", challenge: "They were delivering courses over WhatsApp and Google Drive. They needed a proper LMS with video hosting, progress tracking, and certificate generation.", solution: "Built a full LMS with course builder, video streaming via Cloudflare Stream, quizzes, progress tracking, automated PDF certificates, and a student dashboard.", outcome: "Course completion rates went from 22% to 67% after platform launch.", tags: ["Next.js", "Node.js", "Cloudflare Stream", "MongoDB", "AWS S3"], link: "#" },
    { id: 7, title: "Restaurant Chain Management System", client: "Spice Garden (6 outlets)", category: "Web App", type: "Offline Business", year: "2024", duration: "3 months", challenge: "Six restaurant branches, each running their own paper-based ordering and billing. The owner had no visibility into which outlet was performing.", solution: "Central POS system for all 6 outlets with table-wise ordering, kitchen display screens, daily sales reports, and a single owner dashboard.", outcome: "Owner identified 2 loss-making outlets — fixed menus and pricing. Overall profit up 19%.", tags: ["React", "Node.js", "PostgreSQL", "Thermal Printer API", "Tailwind"], link: "#" },
    { id: 8, title: "Wholesale Hardware Store — Inventory & Billing", client: "Mahesh Hardware & Plumbing", category: "Web App", type: "Offline Business", year: "2023", duration: "6 weeks", challenge: "A 30-year-old hardware store with 4,000+ SKUs managed in a physical ledger. Billing took 15 minutes per customer.", solution: "Offline-first web app with barcode scanning, instant GST billing, stock level alerts, supplier order suggestions based on minimum stock thresholds, and daily closing reports.", outcome: "Billing time cut to under 2 minutes. First monthly stock audit with no major discrepancy.", tags: ["React", "IndexedDB", "Node.js", "SQLite", "Barcode Scanner API"], link: "#" },
    { id: 9, title: "Coaching Institute — Student & Fee Management", client: "Bright Future Coaching, Rajkot", category: "Web App", type: "Offline Business", year: "2024", duration: "5 weeks", challenge: "450 students across 12 batches. Attendance in notebooks, fee collection in a register. Parents had no visibility.", solution: "Web portal with batch management, digital attendance, automated WhatsApp fee reminders, parent login, and monthly fee reports.", outcome: "Fee collection rate improved from 71% to 94% within two months of launch.", tags: ["Next.js", "PostgreSQL", "WhatsApp Business API", "Node.js", "Tailwind"], link: "#" },
    { id: 10, title: "Clinic Appointment & Patient Records System", client: "Dr. Verma's Multi-Specialty Clinic", category: "Web App", type: "Offline Business", year: "2023", duration: "7 weeks", challenge: "A busy clinic with 80+ patients a day, managed entirely on paper. Appointment clashes, missing patient records.", solution: "Clinic management system with online appointment booking, digital patient records, prescription templates, SMS reminders, and a queue display screen.", outcome: "Patient wait time reduced from 45 to 18 minutes. Zero paperwork for doctors.", tags: ["React", "Node.js", "MySQL", "Twilio SMS", "Express"], link: "#" },
];

export default function Work() {
    const [active, setActive] = useState("All");
    const filtered = active === "All" ? projects : projects.filter((p) => p.category === active || p.type === active);

    useGSAP(() => {
        gsap.from(".hero-in", { y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" });
    }, []);

    return (
        <div className="bg-[#080810] min-h-screen">

            {/* ── HEADER ── */}
            <section className="pt-36 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/7 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />
                </div>
                <div className="glow-line absolute bottom-0 left-0 right-0" />
                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
                    <p className="hero-in text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-5">Our Work</p>
                    <h1 className="hero-in text-5xl md:text-6xl lg:text-7xl font-black leading-tight max-w-3xl mb-8">
                        <span className="text-white">10 projects.</span><br />
                        <span className="gradient-text">Real problems solved.</span>
                    </h1>
                    <p className="hero-in text-gray-400 text-lg max-w-xl leading-relaxed">
                        From enterprise tech companies to the neighbourhood coaching institute — we&apos;ve worked across industries and solved very different problems.
                    </p>
                </div>
            </section>

            {/* ── FILTERS ── */}
            <div className="sticky top-[68px] z-30 bg-[#080810]/90 backdrop-blur-xl border-b border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-4">
                    <div className="flex flex-wrap gap-2 items-center">
                        {filters.map((f) => (
                            <button key={f} onClick={() => setActive(f)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${active === f
                                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20"
                                    : "bg-white/[0.04] text-gray-500 border border-white/[0.08] hover:border-indigo-500/30 hover:text-indigo-400"}`}>
                                {f}
                            </button>
                        ))}
                        <span className="ml-auto text-gray-600 text-xs">{filtered.length} project{filtered.length !== 1 ? "s" : ""}</span>
                    </div>
                </div>
            </div>

            {/* ── PROJECT LIST ── */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
                {active === "All" ? (
                    <>
                        <div className="pt-14 pb-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-indigo-400/70 tracking-widest uppercase">Digital & Tech Companies</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/20 to-transparent" />
                            </div>
                        </div>
                        <div className="space-y-4 pb-14">{projects.filter(p => p.type === "Big Tech").map((p) => <ProjectRow key={p.id} project={p} />)}</div>
                        <div className="pb-4 border-t border-white/[0.05] pt-8">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-cyan-400/70 tracking-widest uppercase">Offline Businesses — Taken Online</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
                            </div>
                        </div>
                        <div className="space-y-4 pb-20">{projects.filter(p => p.type === "Offline Business").map((p) => <ProjectRow key={p.id} project={p} />)}</div>
                    </>
                ) : (
                    <div className="space-y-4 py-14">
                        {filtered.length > 0
                            ? filtered.map((p) => <ProjectRow key={p.id} project={p} />)
                            : <p className="text-gray-500 py-20 text-center text-sm">No projects in this category yet.</p>}
                    </div>
                )}
            </div>

            {/* ── OFFLINE NOTE ── */}
            <section className="bg-[#0d0d16] border-y border-white/[0.05] py-20">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">A note on offline businesses</p>
                            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                                <span className="text-white">Some of our most<br />satisfying work was<br /></span>
                                <span className="gradient-text">for the ones not yet online.</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <p>Franchised SaaS tools are built for the average business. But a hardware store in Ahmedabad has different needs from a coaching centre in Rajkot — and both are completely different from a restaurant chain in Mumbai.</p>
                                <p>Offline businesses often have years of process built in physical ledgers, paper registers, and tribal knowledge. Digitising them properly means understanding that first.</p>
                                <p>These projects are slower to scope, more nuanced to design, and extremely satisfying to ship.</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {[
                                { label: "Restaurants & F&B", desc: "POS systems, kitchen display, multi-branch management, daily P&L reporting." },
                                { label: "Retail & Wholesale Stores", desc: "Inventory, GST billing, barcode scanning, low-stock alerts, supplier management." },
                                { label: "Educational Institutes", desc: "Batch management, attendance, fee collection, parent communication portals." },
                                { label: "Healthcare & Clinics", desc: "Appointments, patient records, prescriptions, queue management, SMS reminders." },
                                { label: "Any other offline business", desc: "If your business still runs on paper or WhatsApp, let's talk." },
                            ].map((item, i) => (
                                <div key={i} className="glass-card rounded-xl flex items-start gap-3 px-5 py-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-0.5">{item.label}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-[#080810] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-600/7 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                            <span className="text-white">Want to be</span><br />
                            <span className="gradient-text">project number 11?</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">We&apos;re not always taking new clients, but we&apos;re usually discussing a few things at any given time. Tell us what you&apos;re working on.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-sm hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                            Let&apos;s talk about your project <ArrowUpRight size={14} />
                        </Link>
                        <Link href="/services" className="group inline-flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors text-sm font-medium">
                            What we can help with <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProjectRow({ project }) {
    return (
        <div className="group glass-card rounded-2xl p-7 hover:border-indigo-500/25 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 mb-5">
                <div className="shrink-0">
                    <div className="w-1 h-10 rounded-full hidden sm:block bg-gradient-to-b from-indigo-500/60 to-transparent" />
                    <span className="text-xs font-bold sm:hidden text-indigo-500/60">#{String(project.id).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="tag-pill">{project.type}</span>
                        <span className="text-xs text-gray-600">{project.category}</span>
                        <span className="text-xs text-gray-600">{project.year} · {project.duration}</span>
                    </div>
                    <h3 className="text-xl font-black text-white group-hover:text-indigo-200 transition-colors mb-0.5">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.client}</p>
                </div>
                <Link href={project.link} className="shrink-0 w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-gray-600 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all self-start">
                    <ExternalLink size={14} />
                </Link>
            </div>
            <div className="sm:ml-7 grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div className="bg-white/[0.02] rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">The Problem</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">What We Built</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div className="bg-indigo-500/[0.05] border border-indigo-500/10 rounded-xl p-4">
                    <p className="text-xs font-semibold text-indigo-500/70 uppercase tracking-wider mb-2">The Outcome</p>
                    <p className="text-sm leading-relaxed font-semibold text-cyan-400">{project.outcome}</p>
                </div>
            </div>
            <div className="sm:ml-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/[0.04] text-gray-500 border border-white/[0.08]">{tag}</span>
                ))}
            </div>
        </div>
    );
}
