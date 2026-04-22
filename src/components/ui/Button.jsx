"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    icon = false,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white/30";

    const variants = {
        primary: "border-transparent text-white bg-primary hover:bg-primary/90 shadow-sm",
        outline: "border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50",
        secondary: "border-transparent text-slate-900 bg-slate-100 hover:bg-slate-200",
    };

    const content = (
        <>
            {children}
            {icon && <ArrowRight className="ml-2 -mr-1 h-5 w-5" />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {content}
        </button>
    );
}
