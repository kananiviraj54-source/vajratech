"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Solutions", "/solutions"],
  ["Technologies", "/technologies"],
  ["Careers", "/careers"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggleRef = useRef(null);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="VajraTech Labs home">
          <Image
            src="/brand-mark.png"
            width={37}
            height={37}
            alt=""
            unoptimized
            priority
          />
          <span>
            VajraTech<span className="brand-labs">LABS</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              aria-current={path === href ? "page" : undefined}
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button nav-cta">
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          ref={toggleRef}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, ["Contact", "/contact"]].map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
