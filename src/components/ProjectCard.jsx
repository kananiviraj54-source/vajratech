"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, tags, image, demoLink, repoLink }) {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600">
                        No Image
                    </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {demoLink && (
                        <Link
                            href={demoLink}
                            target="_blank"
                            className="p-2 bg-primary rounded-full hover:bg-white hover:text-primary transition-colors text-white"
                        >
                            <ExternalLink size={20} />
                        </Link>
                    )}
                    {repoLink && (
                        <Link
                            href={repoLink}
                            target="_blank"
                            className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-dark transition-colors text-white"
                        >
                            <Github size={20} />
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
