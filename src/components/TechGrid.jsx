"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const technologies = [
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Three.js" },
    { name: "GSAP" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "Git" },
];

export default function TechGrid() {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(".tech-item", {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });
    }, []);

    return (
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
                <div
                    key={tech.name}
                    className="tech-item flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors group"
                >
                    <div className="w-2 h-2 rounded-full mb-3 bg-gray-500" />
                    <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
