"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const pageRef = useRef();

    useGSAP(() => {
        gsap.from(".fade-up", {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: pageRef.current,
                start: "top 85%",
            },
        });
    }, []);

    return (
        <div className="bg-darker min-h-screen" ref={pageRef}>

            {/* ── PAGE HEADER ── */}
            <section className="pt-36 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-5">
                        About Us
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl mb-8">
                        Small team.
                        <br />
                        <span className="text-primary">Big work</span> ethic.
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        We&apos;re VajraTechLabs — a product-focused software studio from India.
                        We started in 2022 because we believed good software should be
                        accessible to businesses of every size, not just the ones with massive budgets.
                    </p>
                </div>
            </section>

            {/* ── OUR STORY ── */}
            <section className="py-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left — story text */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
                                How it started
                            </h2>
                            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                                <p>
                                    Honestly, it started out of frustration. We kept seeing
                                    businesses — good ones, with real problems to solve — overpay
                                    for mediocre software or get stuck with agencies that handed
                                    them off to juniors after the sales call was done.
                                </p>
                                <p>
                                    So we built VajraTechLabs to be the team we&apos;d want to
                                    hire ourselves. Senior developers on every project. Direct
                                    communication. No middle layers. No outsourcing your project
                                    to someone three levels down.
                                </p>
                                <p>
                                    Two-plus years in, we&apos;ve shipped 50+ projects — from
                                    simple landing pages to full-scale CRM systems and mobile
                                    apps. We&apos;re still small on purpose. We&apos;d rather do fewer
                                    things really well than spread ourselves thin.
                                </p>
                            </div>
                        </div>

                        {/* Right — milestone list */}
                        <div className="space-y-0 divide-y divide-white/5 border-y border-white/5">
                            {[
                                {
                                    year: "2022",
                                    title: "Founded",
                                    detail: "Started with two developers, a shared Figma account, and way too much ambition.",
                                },
                                {
                                    year: "2022",
                                    title: "First real client",
                                    detail: "Built a full e-commerce platform for a retail brand. It's still running today.",
                                },
                                {
                                    year: "2023",
                                    title: "Team grew to 5",
                                    detail: "Added a designer and two more engineers. Started taking on bigger projects.",
                                },
                                {
                                    year: "2024",
                                    title: "50+ projects shipped",
                                    detail: "Web apps, mobile apps, CRMs, landing pages — we built a lot of things.",
                                },
                            ].map((item) => (
                                <div key={item.year + item.title} className="flex gap-6 py-6">
                                    <span className="text-xs font-semibold text-gray-600 pt-1 w-10 shrink-0">
                                        {item.year}
                                    </span>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION & VISION ── */}
            <section className="py-24 bg-dark border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Mission */}
                        <div>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                                Mission
                            </p>
                            <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                                Build things that actually work for people.
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    Not just technically functional — but genuinely useful. Software
                                    that the end user enjoys, that the client&apos;s team doesn&apos;t
                                    dread opening, and that holds up six months after launch.
                                </p>
                                <p>
                                    We measure our success by whether the client&apos;s business
                                    actually improved after working with us. Clicks, conversions,
                                    saved hours, happy teams — that&apos;s what we care about.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div>
                            <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
                                Vision
                            </p>
                            <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                                Be the team small businesses trust the most.
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    We&apos;re not trying to become a 500-person agency. We want to
                                    be the studio that founders and operators call first when they
                                    need something built — because we&apos;ve earned that trust over
                                    and over again.
                                </p>
                                <p>
                                    In the long run, we want to be known for shipping clean, fast,
                                    honest software — not for being the loudest name in the room.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW WE WORK ── */}
            <section className="py-24 border-b border-white/5 bg-darker">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mb-14">
                        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                            How we work
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-white max-w-lg leading-tight">
                            No surprises. Just steady, honest progress.
                        </h2>
                    </div>

                    <div className="divide-y divide-white/5 border-y border-white/5">
                        {[
                            {
                                step: "01",
                                title: "Start with a real conversation",
                                body: "Before we quote anything, we want to understand what you're actually trying to achieve — not just what features you want. Half the time, the real problem is different from the stated one.",
                            },
                            {
                                step: "02",
                                title: "Scope it clearly, then lock it in",
                                body: "We write detailed specs before a single line of code gets written. It protects you from scope creep and it keeps us accountable. If we missed something, we own it.",
                            },
                            {
                                step: "03",
                                title: "Build in small, visible chunks",
                                body: "We ship in two-week sprints. You see progress constantly — not a big reveal at the end that you can't push back on. If something's off, we catch it early.",
                            },
                            {
                                step: "04",
                                title: "Launch, then stick around",
                                body: "Launching is not the finish line. We do post-launch support, fix the weird edge cases that come up in real-world use, and make sure you're confident running the thing.",
                            },
                        ].map((item) => (
                            <div key={item.step} className="flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 group">
                                <span className="text-xs font-semibold text-gray-600 pt-1 shrink-0 sm:w-8">
                                    {item.step}
                                </span>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OUR CULTURE ── */}
            <section className="py-24 bg-dark border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mb-14">
                        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                            Our culture
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-white max-w-lg leading-tight">
                            What it&apos;s actually like
                            <br />working here
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "We say no when we need to",
                                body: "If a client asks for something we genuinely think is a bad idea, we push back. Not rudely, but we won't build something we don't believe in just to close a deal. It's better for everyone in the long run.",
                            },
                            {
                                title: "Async by default",
                                body: "We don't do 9-5 rigid hours. Everyone has focused blocks and respects each other's deep work time. But when something urgent comes up, people show up — no chasing required.",
                            },
                            {
                                title: "We read the docs",
                                body: "Sounds obvious, but a surprising number of teams don't. We try to understand things properly before trying to shortcuts our way through them. It saves time later.",
                            },
                            {
                                title: "Everyone ships",
                                body: "There's no one person whose job is just to talk on calls. Everyone on the team codes, reviews, or designs — including the people who lead client conversations.",
                            },
                            {
                                title: "Mistakes are fine, hiding them isn't",
                                body: "We made a wrong call on a database schema once and it cost us a week. We told the client the same day, fixed it, and moved on. That kind of honesty is the foundation of everything.",
                            },
                            {
                                title: "We're still learning",
                                body: "We're not the most experienced team in the world, and we know that. We stay curious, we experiment, and we're not embarrassed to say 'we haven't done exactly this before, but here's how we'd approach it.'",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHERE WE'RE HEADED ── */}
            <section className="py-24 bg-darker border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left */}
                        <div>
                            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                                The future
                            </p>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
                                Where we&apos;re headed
                            </h2>
                            <div className="space-y-5 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    We&apos;re not chasing growth for growth&apos;s sake. We want to
                                    stay small enough to care about every project, while taking
                                    on work that&apos;s a little harder, a little more interesting
                                    each time.
                                </p>
                                <p>
                                    Right now we&apos;re getting deeper into AI integration — not
                                    the buzzword kind, but genuinely useful automation that saves
                                    real hours for real businesses. We&apos;re also excited about
                                    building our first few internal products.
                                </p>
                                <p>
                                    Longer term? We&apos;d love to have a handful of products of our
                                    own — things we built because we saw a problem and couldn&apos;t
                                    help ourselves. But we&apos;re in no rush.
                                </p>
                            </div>
                        </div>

                        {/* Right — what we're currently focused on */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">
                                Right now, we&apos;re focused on:
                            </h3>
                            <div className="space-y-0 divide-y divide-white/5 border-y border-white/5">
                                {[
                                    "Getting better at AI-assisted workflows without losing the human judgment",
                                    "Deeper technical writing — documenting how we do things properly",
                                    "Taking on 2–3 longer-term retainer clients instead of one-off projects",
                                    "Building a small internal tool that we've wanted to exist for two years",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 py-5">
                                        <span className="text-primary font-black text-sm shrink-0 mt-0.5">—</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-dark">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                            If any of this sounds like
                            <br />
                            <span className="text-primary">the right fit</span>, let&apos;s talk.
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We&apos;re not for everyone — and that&apos;s okay. But if you
                            want a team that&apos;s honest, technically solid, and actually
                            cares about what they ship, we&apos;d love to hear about what you&apos;re building.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-darker font-bold text-sm hover:bg-white transition-colors duration-200"
                        >
                            Get in touch
                            <ArrowUpRight
                                size={15}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
                        >
                            See our work first
                            <ArrowUpRight
                                size={14}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
