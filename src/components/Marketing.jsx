import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Code2,
  BrainCircuit,
  Figma,
  Cloud,
  Smartphone,
  ShoppingBag,
  ChartNoAxesCombined,
  Network,
  ShieldCheck,
  RefreshCw,
  Compass,
  Search,
  Megaphone,
} from "lucide-react";
const icons = {
  Globe,
  Code2,
  BrainCircuit,
  Figma,
  Cloud,
  Smartphone,
  ShoppingBag,
  ChartNoAxesCombined,
  Network,
  ShieldCheck,
  RefreshCw,
  Compass,
  Search,
  Megaphone,
};
export function ServiceIcon({ name }) {
  const Icon = icons[name] || Code2;
  return <Icon size={25} strokeWidth={1.6} />;
}
export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro">{description}</p>
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="container section">
      <div className="cta-panel">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>
            Have a challenge?
            <br />
            Let’s build the solution.
          </h2>
          <p>
            Tell us where you want to go. We’ll help you work out how to get
            there.
          </p>
        </div>
        <Link href="/contact" className="button light">
          Let’s talk <ArrowUpRight size={19} />
        </Link>
      </div>
    </section>
  );
}
export function ServiceCards({ items }) {
  return (
    <div className="service-grid">
      {items.map((s, i) => (
        <Link className="service-tile" href={`/services#${s.id}`} key={s.id}>
          <div className="tile-top">
            <span className="service-icon">
              <ServiceIcon name={s.icon} />
            </span>
            <span className="tile-number">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <span className="text-link">
            Explore service <ArrowUpRight size={17} />
          </span>
        </Link>
      ))}
    </div>
  );
}
