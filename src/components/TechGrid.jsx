"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const technologies = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Tailwind CSS", color: "#38B2AC" },
    { name: "Three.js", color: "#ffffff" },
    { name: "GSAP", color: "#88CE02" },
    { name: "Node.js", color: "#339933" },
    { name: "Express", color: "#ffffff" },
    { name: "MongoDB", color: "#47A248" },
    { name: "MySQL", color: "#4479A1" },
    { name: "AWS", color: "#FF9900" },
    { name: "Docker", color: "#2496ED" },
    { name: "Git", color: "#F05032" },
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
                    className="tech-item flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                >
                    <div
                        className="w-2 h-2 rounded-full mb-3"
                        style={{ backgroundColor: tech.color }}
                    />
                    <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
