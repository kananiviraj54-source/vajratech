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
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark";

    const variants = {
        primary: "border-transparent text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]",
        outline: "border-primary text-primary bg-transparent hover:bg-primary/10",
        secondary: "border-transparent text-dark bg-white hover:bg-gray-100",
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
