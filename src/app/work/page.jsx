"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/ui/Button";

const categories = ["All", "Web Development", "Mobile App", "Cloud", "UI/UX"];

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with payment gateway, user dashboard, and admin panel.",
        tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        category: "Web Development",
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "CRM Software",
        description: "Comprehensive Customer Relationship Management tool for enterprise clients.",
        tags: ["React", "Firebase", "Tailwind"],
        category: "Web Development",
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Real Estate App",
        description: "Property listing and management application with map integration.",
        tags: ["React Native", "Express", "PostgreSQL"],
        category: "Mobile App",
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "3D Portfolio Website",
        description: "Immersive 3D portfolio for a creative agency using Three.js.",
        tags: ["Three.js", "React Three Fiber", "GSAP"],
        category: "Web Development",
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Fintech Dashboard",
        description: "Secure financial dashboard with real-time data visualization.",
        tags: ["React", "D3.js", "AWS"],
        category: "Cloud",
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Healthcare App",
        description: "Telemedicine app connecting patients with doctors.",
        tags: ["Flutter", "Firebase", "WebRTC"],
        category: "Mobile App",
        demoLink: "#",
        repoLink: "#",
    }
];

export default function Work() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="pt-20 pb-20 bg-darker min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
                        Our Work
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Explore our portfolio of successful projects and digital solutions.
                    </p>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                        ? "bg-primary text-dark border-primary"
                                        : "bg-transparent text-gray-400 border-gray-700 hover:border-primary hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
