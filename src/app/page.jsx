"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

const services = [
    {
        number: "01",
        title: "Web Development",
        detail:
            "We build fast, scalable websites with Next.js and React — not just pretty pages, but things that actually work well for your customers.",
        link: "/services",
    },
    {
        number: "02",
        title: "Mobile Apps",
        detail:
            "Cross-platform apps for iOS and Android. We focus on smooth UX over feature bloat — your users will notice the difference.",
        link: "/services",
    },
    {
        number: "03",
        title: "Cloud & DevOps",
        detail:
            "AWS setup, CI/CD pipelines, deployment automation. Less downtime, fewer headaches, and infrastructure that grows with you.",
        link: "/services",
    },
    {
        number: "04",
        title: "UI/UX Design",
        detail:
            "We care a lot about how things look and feel. Clean, purposeful design that's intuitive — not over-designed or cluttered.",
        link: "/services",
    },
];

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Full-Stack Web",
        year: "2024",
        desc: "Online store for a retail brand — payment integration, inventory management, and an admin dashboard their team actually enjoys using.",
        tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        link: "#",
    },
    {
        title: "CRM Software",
        category: "Enterprise App",
        year: "2023",
        desc: "A CRM built for a mid-size company that outgrew their spreadsheets. Pipelines, reporting, and role-based access — built to last.",
        tags: ["React", "Firebase", "Tailwind"],
        link: "#",
    },
    {
        title: "Real Estate App",
        category: "Mobile + Web",
        year: "2023",
        desc: "Property listings with live map, mortgage calc, and agent chat. One of those projects where the client kept saying 'can we add one more thing'.",
        tags: ["React Native", "Express", "PostgreSQL"],
        link: "#",
    },
];

export default function Home() {
    const servicesRef = useRef();

    useGSAP(() => {
        gsap.from(".hero-char", {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power4.out",
        });
        gsap.from(".hero-sub", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out",
        });
        gsap.from(".hero-actions", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            delay: 0.8,
            ease: "power2.out",
        });
    }, []);

    useGSAP(() => {
        gsap.from(".service-row", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
            },
        });
    }, []);

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden bg-black">
                {/* Full-bleed 3D canvas behind */}
                <div className="absolute inset-0 z-0">
                    <Hero3D />
                </div>

                {/* Dark gradient so text is always readable */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />

                {/* Content — bottom-left anchored */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                    <div className="max-w-3xl">
                        {/* Headline */}
                        <div className="overflow-hidden mb-2">
                            <h1 className="hero-char text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
                                We craft
                            </h1>
                        </div>
                        <div className="overflow-hidden mb-2">
                            <h1 className="hero-char text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white">
                                software
                            </h1>
                        </div>
                        <div className="overflow-hidden mb-10">
                            <h1 className="hero-char text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-gray-400 leading-none">
                                that ships.
                            </h1>
                        </div>

                        <p className="hero-sub text-gray-400 text-lg max-w-md leading-relaxed mb-10">
                            VajraTechLabs — a small team in India building web, mobile, and
                            cloud products for businesses that want things done right.
                        </p>

                        <div className="hero-actions flex items-center gap-6 flex-wrap">
                            <Button href="/contact" variant="primary">
                                Let&apos;s talk
                            </Button>
                            <Link
                                href="/work"
                                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                See our work
                                <ArrowUpRight
                                    size={16}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Meta line bottom-right */}
                    <div className="absolute bottom-0 right-0 hidden lg:flex items-center gap-3 text-gray-600 text-xs tracking-widest uppercase">
                        <span>Web · Mobile · Cloud</span>
                        <span className="w-8 h-px bg-gray-700" />
                        <span>India</span>
                    </div>
                </div>

                {/* Scroll cue */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-600">
                    <ChevronDown size={20} className="animate-bounce" />
                </div>
            </section>

            {/* ── INTRO STRIP ── */}
            <section className="bg-[#111111] border-y border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <p className="text-gray-500 text-sm font-medium max-w-sm">
                        We&apos;ve been building software since 2022 — small team, serious about craft.
                    </p>
                    <div className="flex items-center gap-8">
                        {[
                            ["50+", "Projects shipped"],
                            ["30+", "Clients worked with"],
                            ["2+", "Years in business"],
                        ].map(([val, label]) => (
                            <div key={label} className="text-center">
                                <div className="text-2xl font-black text-white">{val}</div>
                                <div className="text-xs text-gray-500 font-medium">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES — list layout ── */}
            <section className="py-24 bg-black" ref={servicesRef}>
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    {/* Heading */}
                    <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            What we do
                        </h2>
                        <Link
                            href="/services"
                            className="group flex items-center gap-1 text-gray-500 hover:text-white text-sm transition-colors font-medium"
                        >
                            Full services page
                            <ArrowUpRight
                                size={14}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                    </div>

                    {/* List of services — border-row style */}
                    <div className="divide-y divide-white/5">
                        {services.map((s, i) => (
                            <div
                                key={i}
                                className="service-row group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-8 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors duration-200"
                            >
                                {/* Number */}
                                <span className="text-xs font-semibold text-gray-600 pt-1 min-w-[2rem] shrink-0">
                                    {s.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white min-w-[180px] shrink-0 group-hover:text-gray-200 transition-colors duration-200">
                                    {s.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                    {s.detail}
                                </p>

                                {/* Arrow */}
                                <Link
                                    href={s.link}
                                    className="self-start sm:self-center shrink-0 text-gray-600 group-hover:text-white transition-colors"
                                    aria-label={`Learn more about ${s.title}`}
                                >
                                    <ArrowUpRight
                                        size={18}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <section className="py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    {/* Header */}
                    <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            A few things<br />we&apos;ve built
                        </h2>
                        <Link
                            href="/work"
                            className="group flex items-center gap-1 text-gray-500 hover:text-white text-sm transition-colors font-medium"
                        >
                            All projects
                            <ArrowUpRight
                                size={14}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                    </div>

                    {/* Project rows */}
                    <div className="space-y-6">
                        {projects.map((p, i) => (
                            <Link
                                href={p.link}
                                key={i}
                                className="group flex flex-col md:flex-row md:items-start gap-6 p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                            >
                                {/* Left — meta */}
                                <div className="md:w-48 shrink-0">
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                        {p.category}
                                    </div>
                                    <div className="text-xs text-gray-600 mb-4">{p.year}</div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors duration-200">
                                        {p.title}
                                    </h3>
                                </div>

                                {/* Right — description + tags */}
                                <div className="flex-1">
                                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                        {p.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="self-start md:self-center text-gray-600 group-hover:text-white transition-colors shrink-0">
                                    <ArrowUpRight
                                        size={18}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TECH STACK ── */}
            <section className="py-16 bg-black border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="text-sm text-gray-600 font-medium mb-5 tracking-widest uppercase">
                        Technologies we use daily
                    </p>
                    <p className="text-gray-300 text-xl font-medium leading-relaxed max-w-3xl">
                        {["React", "Next.js", "Node.js", "TailwindCSS", "AWS", "MongoDB", "PostgreSQL", "Docker", "React Native", "GSAP", "Three.js", "Git"].map((tech, i, arr) => (
                            <span key={tech}>
                                <span className="text-white font-semibold">{tech}</span>
                                {i < arr.length - 1 && (
                                    <span className="text-gray-700 mx-2">·</span>
                                )}
                            </span>
                        ))}
                    </p>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-28 bg-[#111111]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        {/* Left */}
                        <div className="max-w-lg">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                                Got a project
                                <br />
                                in mind?
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed mb-2">
                                We&apos;re a small team, so we&apos;re selective about what we take on.
                                But if it sounds interesting — drop us a message. We respond within a day.
                            </p>
                            <p className="text-gray-600 text-sm">
                                No long discovery calls. No complicated proposals.
                            </p>
                        </div>

                        {/* Right — action block */}
                        <div className="flex flex-col gap-4 min-w-[220px]">
                            <Button href="/contact" variant="primary">
                                Send us a message
                            </Button>
                            <Link
                                href="/about"
                                className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
                            >
                                Who we are
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
