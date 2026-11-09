"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Check, ArrowUpRight } from "lucide-react";
import { services } from "@/data/company";
import { ServiceIcon } from "@/components/Marketing";
const groups = [
  { name: "All services", ids: [] },
  {
    name: "Build & design",
    ids: ["web", "software", "mobile", "ui-ux", "ecommerce"],
  },
  { name: "AI & data", ids: ["ai-ml", "local-ai", "data"] },
  {
    name: "Cloud & reliability",
    ids: ["cloud", "integration", "qa", "modernization", "consulting"],
  },
  {
    name: "Marketing & growth",
    ids: ["seo", "social-ads", "digital-marketing"],
  },
];
export default function ServiceExplorer() {
  const [group, setGroup] = useState("All services");
  const [query, setQuery] = useState("");
  useEffect(() => {
    function showLinkedService(event) {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      const target = new URL(anchor.href, window.location.href);
      const id = target.hash.slice(1);
      if (
        target.origin !== window.location.origin ||
        target.pathname !== "/services" ||
        !services.some((service) => service.id === id)
      )
        return;
      setGroup("All services");
      setQuery("");
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView({ block: "start" }),
        ),
      );
    }
    document.addEventListener("click", showLinkedService, true);
    return () => document.removeEventListener("click", showLinkedService, true);
  }, []);

  const chosen = groups.find((g) => g.name === group);
  const filtered = services.filter(
    (s) =>
      (!chosen.ids.length || chosen.ids.includes(s.id)) &&
      `${s.title} ${s.description} ${s.features.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="industry-toolbar">
        <div>
          <p className="eyebrow">EXPLORE OUR EXPERTISE</p>
          <h2>Find your starting point.</h2>
        </div>
        <label className="industry-search">
          <Search size={18} />
          <span className="sr-only">Search services</span>
          <input
            type="search"
            placeholder="Try local AI, SEO, or web"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div
        className="industry-filters"
        role="group"
        aria-label="Service categories"
      >
        {groups.map((g) => (
          <button
            key={g.name}
            type="button"
            aria-pressed={g.name === group}
            onClick={() => setGroup(g.name)}
          >
            {g.name}
          </button>
        ))}
      </div>
      <p role="status" className="industry-result-count">
        {filtered.length} {filtered.length === 1 ? "service" : "services"} to
        explore
      </p>
      <div className="services-catalog">
        {filtered.map((s) => (
          <article id={s.id} key={s.id} className="catalog-card">
            <div className="catalog-heading">
              <span className="service-icon">
                <ServiceIcon name={s.icon} />
              </span>
              <span className="catalog-type">
                {groups.find((g) => g.ids.includes(s.id))?.name}
              </span>
            </div>
            <h2>{s.title}</h2>
            <p>{s.description}</p>
            <h3>What we can help with</h3>
            <ul>
              {s.features.map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <Link href={`/contact?service=${s.id}`} className="text-link">
              Discuss {s.title.toLowerCase()} <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <div className="industry-empty">
          <h3>No matching services</h3>
          <p>
            Try a different keyword, or reset the filters to explore everything.
          </p>
          <button
            type="button"
            className="button"
            onClick={() => {
              setQuery("");
              setGroup("All services");
            }}
          >
            Reset service filters
          </button>
        </div>
      )}
      <div className="scope-note">
        <div>
          <h3>Not sure which service you need?</h3>
          <p>
            Tell us about the outcome you want. We can help define the scope and
            choose the right combination of skills.
          </p>
        </div>
        <Link className="text-link" href="/contact">
          Ask our team <ArrowUpRight size={17} />
        </Link>
      </div>
    </>
  );
}
