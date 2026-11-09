"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  Check,
  Factory,
  ShoppingBag,
  HeartPulse,
  Landmark,
  GraduationCap,
  Truck,
  Building2,
  Utensils,
  BriefcaseBusiness,
  Zap,
  Clapperboard,
  Rocket,
  Package,
  HandHeart,
  Sprout,
  Car,
  RadioTower,
  Plane,
} from "lucide-react";
import { industryProfiles, industryCategories } from "@/data/industryProfiles";
import { services } from "@/data/company";
const icons = {
  Factory,
  ShoppingBag,
  HeartPulse,
  Landmark,
  GraduationCap,
  Truck,
  Building2,
  Utensils,
  BriefcaseBusiness,
  Zap,
  Clapperboard,
  Rocket,
  Package,
  HandHeart,
  Sprout,
  Car,
  RadioTower,
  Plane,
};
export default function IndustryExplorer() {
  const [category, setCategory] = useState("All industries");
  const [query, setQuery] = useState("");
  const filtered = industryProfiles.filter(
    (ind) =>
      (category === "All industries" || ind.category === category) &&
      `${ind.name} ${ind.description} ${ind.features.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <div className="industry-toolbar">
        <div>
          <p className="eyebrow">FIND YOUR INDUSTRY</p>
          <h2>Start with your world.</h2>
        </div>
        <label className="industry-search">
          <Search size={18} />
          <span className="sr-only">Search industries</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search industries or solutions"
          />
        </label>
      </div>
      <div
        className="industry-filters"
        role="group"
        aria-label="Filter industries by category"
      >
        {industryCategories.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="industry-result-count" role="status">
        {filtered.length} {filtered.length === 1 ? "industry" : "industries"}
        {category !== "All industries"
          ? ` in ${category.toLowerCase()}`
          : " to explore"}
      </p>
      <div className="industries-grid industry-profile-grid">
        {filtered.map((ind) => {
          const Icon = icons[ind.icon];
          return (
            <article
              className="industry-card industry-profile"
              id={ind.id}
              key={ind.id}
            >
              <div className="industry-card-header">
                <span className="industry-glyph">
                  <Icon size={25} strokeWidth={1.6} />
                </span>
                <span className="industry-category">{ind.category}</span>
              </div>
              <h2>{ind.name}</h2>
              <p className="industry-description">{ind.description}</p>
              <div className="industry-challenge">
                <h3>The challenge</h3>
                <p>{ind.challenge}</p>
              </div>
              <h3 className="industry-small-heading">What we can build</h3>
              <ul className="industry-usecases">
                {ind.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="industry-service-links">
                <h3 className="industry-small-heading">Relevant expertise</h3>
                <div>
                  {ind.serviceIds.map((id) => {
                    const service = services.find((s) => s.id === id);
                    return (
                      <Link key={id} href={`/services#${id}`}>
                        {service.title}
                        <ArrowUpRight size={12} />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link className="text-link industry-discuss" href="/contact">
                Discuss your project{" "}
                <ArrowUpRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <div className="industry-empty">
          <Search size={28} />
          <h3>No matching industries</h3>
          <p>
            Try another keyword or explore all industries. We can also discuss a
            business that does not fit a category.
          </p>
          <button
            className="button"
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All industries");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
