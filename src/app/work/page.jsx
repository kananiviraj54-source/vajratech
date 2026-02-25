"use client";

import { useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const filters = ["All", "Web App", "Mobile App", "Cloud", "Offline Business", "E-Commerce"];

const projects = [
    // ── BIG TECH / DIGITAL CLIENTS ──
    {
        id: 1,
        title: "Enterprise CRM Platform",
        client: "FinanceFlow Pvt. Ltd.",
        category: "Web App",
        type: "Big Tech",
        year: "2024",
        duration: "5 months",
        color: "#00e5ff",
        challenge:
            "Their sales team was tracking 3,000+ leads across 7 spreadsheets. Data was getting lost, follow-ups were missed, deals were slipping.",
        solution:
            "Built a full CRM from scratch — lead pipeline with drag-and-drop stages, automated follow-up reminders, role-based access for managers and reps, and a reporting dashboard that saved their team 10 hours a week.",
        outcome: "Lead closure rate improved by 34% in the first quarter after launch.",
        tags: ["React", "Node.js", "PostgreSQL", "Redis", "AWS EC2"],
        link: "#",
    },
    {
        id: 2,
        title: "Real-Time Logistics Dashboard",
        client: "SwiftMoves Logistics",
        category: "Web App",
        type: "Big Tech",
        year: "2024",
        duration: "3 months",
        color: "#7c4dff",
        challenge:
            "They had 200+ delivery agents and no way to see where anything was. Operations team was on the phone all day asking for updates.",
        solution:
            "Built a live tracking dashboard with GPS integration, agent mobile app for status updates, and an admin panel showing every delivery in real time with ETA predictions.",
        outcome: "Customer complaints dropped by 60%. Dispatchers went from reactive to proactive.",
        tags: ["Next.js", "React Native", "WebSockets", "Google Maps API", "MongoDB"],
        link: "#",
    },
    {
        id: 3,
        title: "Multi-Vendor E-Commerce Marketplace",
        client: "CraftCircle India",
        category: "E-Commerce",
        type: "Big Tech",
        year: "2023",
        duration: "4 months",
        color: "#00c853",
        challenge:
            "A marketplace for independent artisans — they needed multi-vendor support, individual seller dashboards, and a payout system that split payments automatically.",
        solution:
            "Custom Next.js marketplace with separate vendor stores, Stripe Connect for split payouts, inventory per vendor, customer reviews, and a comprehensive admin control panel.",
        outcome: "Launched with 80 vendors onboard. Hit ₹12L in GMV in the first 3 months.",
        tags: ["Next.js", "Stripe Connect", "PostgreSQL", "Sanity CMS", "Tailwind"],
        link: "#",
    },
    {
        id: 4,
        title: "Healthcare Telemedicine App",
        client: "DoctorNow",
        category: "Mobile App",
        type: "Big Tech",
        year: "2023",
        duration: "6 months",
        color: "#f50057",
        challenge:
            "Connecting patients in tier-2 cities with specialists in metro cities. Video quality, appointment booking, and prescription management all needed to work reliably on low-end Android devices.",
        solution:
            "React Native app with WebRTC video calling optimised for low bandwidth, slot-based appointment booking, real-time chat, digital prescriptions, and payment via Razorpay.",
        outcome: "20,000+ consultations completed in the first year. 4.6 rating on Play Store.",
        tags: ["React Native", "WebRTC", "Firebase", "Razorpay", "Node.js"],
        link: "#",
    },
    {
        id: 5,
        title: "Cloud Infrastructure Migration",
        client: "DataVault Analytics",
        category: "Cloud",
        type: "Big Tech",
        year: "2024",
        duration: "2 months",
        color: "#ff9800",
        challenge:
            "Running everything on a single dedicated server that was showing its age — slow queries, occasional outages, and no way to scale during peak reporting periods.",
        solution:
            "Migrated to AWS — RDS for the database, EC2 auto-scaling group for the app layer, CloudFront for static assets, and set up full CI/CD with GitHub Actions. Zero data loss during migration.",
        outcome: "Page load times dropped from 6.2s to 1.1s. Monthly infra cost reduced by 28%.",
        tags: ["AWS", "RDS", "EC2", "CloudFront", "GitHub Actions", "Docker"],
        link: "#",
    },
    {
        id: 6,
        title: "EdTech LMS Platform",
        client: "SkillBridge E-Learning",
        category: "Web App",
        type: "Big Tech",
        year: "2023",
        duration: "5 months",
        color: "#29b6f6",
        challenge:
            "They were delivering courses over WhatsApp and Google Drive. They needed a proper LMS with video hosting, progress tracking, and certificate generation.",
        solution:
            "Built a full learning management system with course builder, video streaming via Cloudflare Stream, quizzes, progress tracking, automated PDF certificates, and a student dashboard.",
        outcome: "Course completion rates went from 22% to 67% after platform launch.",
        tags: ["Next.js", "Node.js", "Cloudflare Stream", "MongoDB", "AWS S3"],
        link: "#",
    },

    // ── OFFLINE BUSINESS DIGITISATION ──
    {
        id: 7,
        title: "Restaurant Chain Management System",
        client: "Spice Garden (6 outlets)",
        category: "Web App",
        type: "Offline Business",
        year: "2024",
        duration: "3 months",
        color: "#ef5350",
        challenge:
            "Six restaurant branches, each running their own paper-based ordering and billing. The owner had no visibility into which outlet was performing, what was selling, or where food waste was happening.",
        solution:
            "Built a central POS system for all 6 outlets with a shared backend. Table-wise ordering, kitchen display screens, daily sales reports, and a single owner dashboard showing every branch in one view.",
        outcome: "Owner identified that 2 outlets were running at a loss — fixed menus and pricing. Overall profit up 19%.",
        tags: ["React", "Node.js", "PostgreSQL", "Thermal Printer API", "Tailwind"],
        link: "#",
    },
    {
        id: 8,
        title: "Wholesale Hardware Store — Inventory & Billing",
        client: "Mahesh Hardware & Plumbing",
        category: "Web App",
        type: "Offline Business",
        year: "2023",
        duration: "6 weeks",
        color: "#ab47bc",
        challenge:
            "A 30-year-old hardware store with 4,000+ SKUs managed in a physical ledger. Billing took 15 minutes per customer. Stock discrepancies were found only during annual counts.",
        solution:
            "Offline-first web app with barcode scanning, instant GST billing, stock level alerts, supplier order suggestions based on minimum stock thresholds, and daily closing reports.",
        outcome: "Billing time cut to under 2 minutes. First monthly stock audit completed with no major discrepancy.",
        tags: ["React", "IndexedDB", "Node.js", "SQLite", "Barcode Scanner API"],
        link: "#",
    },
    {
        id: 9,
        title: "Coaching Institute — Student & Fee Management",
        client: "Bright Future Coaching, Rajkot",
        category: "Web App",
        type: "Offline Business",
        year: "2024",
        duration: "5 weeks",
        color: "#26a69a",
        challenge:
            "450 students across 12 batches. Attendance was taken in notebooks. Fee collection was tracked in a register. Parents had no visibility into their child's attendance.",
        solution:
            "Web portal with batch management, digital attendance, automated WhatsApp fee reminders (via WhatsApp Business API), parent login to see child's attendance, and monthly fee reports for the admin.",
        outcome: "Fee collection rate improved from 71% to 94% within two months of launch.",
        tags: ["Next.js", "PostgreSQL", "WhatsApp Business API", "Node.js", "Tailwind"],
        link: "#",
    },
    {
        id: 10,
        title: "Clinic Appointment & Patient Records System",
        client: "Dr. Verma's Multi-Specialty Clinic",
        category: "Web App",
        type: "Offline Business",
        year: "2023",
        duration: "7 weeks",
        color: "#ffa726",
        challenge:
            "A busy clinic with 80+ patients a day, managed entirely on paper. Appointment clashes, missing patient records, and no way to pull up a patient's history quickly during consultation.",
        solution:
            "Clinic management system with online and walk-in appointment booking, digital patient records with visit history, prescription templates, SMS appointment reminders, and a queue display screen for the waiting area.",
        outcome: "Average patient wait time reduced from 45 minutes to 18 minutes. Zero paperwork for doctors during consultation.",
        tags: ["React", "Node.js", "MySQL", "Twilio SMS", "Express"],
        link: "#",
    },
];

export default function Work() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active || p.type === active);

    useGSAP(() => {
        gsap.from(".hero-in", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
        });
    }, []);

    return (
        <div className="bg-darker min-h-screen">

            {/* ── HEADER ── */}
            <section className="pt-36 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="hero-in text-primary text-sm font-semibold tracking-widest uppercase mb-5">
                        Our Work
                    </p>
                    <h1 className="hero-in text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl mb-8">
                        10 projects.
                        <br />
                        <span className="text-primary">Real problems solved.</span>
                    </h1>
                    <p className="hero-in text-gray-400 text-lg max-w-xl leading-relaxed">
                        From enterprise tech companies to the neighbourhood coaching institute —
                        we&apos;ve worked across industries and solved very different problems.
                        Here&apos;s an honest look at what we&apos;ve built and what actually happened after.
                    </p>
                </div>
            </section>

            {/* ── FILTER TABS ── */}
            <div className="sticky top-16 z-30 bg-darker/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4">
                    <div className="flex flex-wrap gap-2">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActive(f)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${active === f
                                    ? "bg-primary text-darker border-primary"
                                    : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                        <span className="ml-auto text-gray-600 text-xs self-center">
                            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                        </span>
                    </div>
                </div>
            </div>

            {/* ── SECTION LABEL: BIG TECH ── */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* Render projects grouped if showing All */}
                {active === "All" ? (
                    <>
                        {/* Big Tech Group */}
                        <div className="pt-16 pb-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase">
                                    Digital & Tech Companies
                                </span>
                                <div className="flex-1 h-px bg-white/5" />
                            </div>
                        </div>
                        <div className="space-y-4 pb-16">
                            {projects.filter(p => p.type === "Big Tech").map((p) => (
                                <ProjectRow key={p.id} project={p} />
                            ))}
                        </div>

                        {/* Offline Business Group */}
                        <div className="pb-4 border-t border-white/5 pt-10">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase">
                                    Offline Businesses — Taken Online
                                </span>
                                <div className="flex-1 h-px bg-white/5" />
                            </div>
                        </div>
                        <div className="space-y-4 pb-20">
                            {projects.filter(p => p.type === "Offline Business").map((p) => (
                                <ProjectRow key={p.id} project={p} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="space-y-4 py-16">
                        {filtered.length > 0 ? (
                            filtered.map((p) => <ProjectRow key={p.id} project={p} />)
                        ) : (
                            <p className="text-gray-500 py-20 text-center text-sm">
                                No projects in this category yet.
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* ── OFFLINE BUSINESS CALLOUT ── */}
            <section className="bg-dark border-y border-white/5 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                                A note on offline businesses
                            </p>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                                Some of our most
                                <br />
                                satisfying work was
                                <br />
                                <span className="text-primary">for the ones not yet online.</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    Franchised SaaS tools are built for the average business. But a
                                    hardware store in Ahmedabad has different needs from a
                                    coaching centre in Rajkot — and both are completely different from
                                    a restaurant chain in Mumbai.
                                </p>
                                <p>
                                    Offline businesses often have years of process built up in physical
                                    ledgers, paper registers, and tribal knowledge. Digitising them
                                    properly means understanding that first — not just
                                    throwing a generic tool at the problem.
                                </p>
                                <p>
                                    These projects are slower to scope, more nuanced to design, and
                                    extremely satisfying to ship. Seeing someone run their business
                                    better because of something we built is the most direct form
                                    of impact we get to experience.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-0 divide-y divide-white/5 border-y border-white/5">
                            {[
                                {
                                    label: "Restaurants & F&B",
                                    desc: "POS systems, kitchen display, multi-branch management, daily P&L reporting.",
                                },
                                {
                                    label: "Retail & Wholesale Stores",
                                    desc: "Inventory, GST billing, barcode scanning, low-stock alerts, supplier management.",
                                },
                                {
                                    label: "Educational Institutes",
                                    desc: "Batch management, attendance, fee collection, parent communication portals.",
                                },
                                {
                                    label: "Healthcare & Clinics",
                                    desc: "Appointments, patient records, prescriptions, queue management, SMS reminders.",
                                },
                                {
                                    label: "Any other offline business",
                                    desc: "If your business still runs on paper or WhatsApp, let's talk. There's probably a simpler solution than you think.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="py-5 flex gap-4">
                                    <span className="text-primary font-black text-sm shrink-0 mt-0.5">—</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{item.label}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-darker">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                            Want to be
                            <br />
                            <span className="text-primary">project number 11?</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We&apos;re not always taking new clients, but we&apos;re usually discussing
                            a few things at any given time. Tell us what you&apos;re working on
                            and we&apos;ll let you know honestly if it&apos;s a fit.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[220px]">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-darker font-bold text-sm hover:bg-white transition-colors duration-200"
                        >
                            Let&apos;s talk about your project
                            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
                        >
                            What we can help with
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

/* ── Project Row Component ── */
function ProjectRow({ project }) {
    return (
        <div className="project-row group p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 mb-5">
                {/* Accent bar + number */}
                <div className="shrink-0 flex items-center gap-3 sm:block">
                    <div
                        className="w-1 h-10 rounded-full hidden sm:block"
                        style={{ backgroundColor: project.color }}
                    />
                    <span className="text-xs font-bold sm:hidden" style={{ color: project.color, opacity: 0.7 }}>
                        #{String(project.id).padStart(2, "0")}
                    </span>
                </div>

                {/* Meta + Title */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                            style={{
                                color: project.color,
                                borderColor: `${project.color}50`,
                                backgroundColor: `${project.color}15`,
                            }}
                        >
                            {project.type}
                        </span>
                        <span className="text-xs text-gray-600">{project.category}</span>
                        <span className="text-xs text-gray-600">{project.year}</span>
                        <span className="text-xs text-gray-600">· {project.duration}</span>
                    </div>
                    <h3 className="text-xl font-black text-white group-hover:text-gray-100 transition-colors mb-0.5">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{project.client}</p>
                </div>

                {/* Link */}
                <Link
                    href={project.link}
                    className="shrink-0 text-gray-700 group-hover:text-primary transition-colors self-start"
                    aria-label={`View ${project.title}`}
                >
                    <ExternalLink size={16} />
                </Link>
            </div>

            {/* Story — challenge / solution / outcome */}
            <div className="sm:ml-7 grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        The Problem
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        What We Built
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        The Outcome
                    </p>
                    <p className="text-sm leading-relaxed font-medium" style={{ color: project.color }}>
                        {project.outcome}
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="sm:ml-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-500 border border-white/8"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
