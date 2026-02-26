"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import * as Icons from "lucide-react";

export default function ServiceCard({ title, description, icon, delay }) {
    const cardRef = useRef();

    useGSAP(() => {
        gsap.from(cardRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: delay * 0.2,
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
            },
        });
    }, [delay]);

    const IconComponent = Icons[icon] || Icons.Code;

    return (
        <div
            ref={cardRef}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.08)]"
        >
            <div className="w-12 h-12 mb-4 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                <IconComponent size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                {title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {description}
            </p>
        </div>
    );
}
