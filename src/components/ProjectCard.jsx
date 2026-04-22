"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, tags, image, demoLink, repoLink }) {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                        No Image
                    </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {demoLink && (
                        <Link
                            href={demoLink}
                            target="_blank"
                            className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors text-black"
                        >
                            <ExternalLink size={20} />
                        </Link>
                    )}
                    {repoLink && (
                        <Link
                            href={repoLink}
                            target="_blank"
                            className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-white"
                        >
                            <Github size={20} />
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
