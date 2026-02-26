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
        primary: "border-transparent text-black bg-white hover:bg-gray-200",
        outline: "border-white text-white bg-transparent hover:bg-white/10",
        secondary: "border-transparent text-black bg-gray-200 hover:bg-white",
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
