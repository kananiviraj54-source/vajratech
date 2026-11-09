"use client";
import { useState } from "react";
import { Search, ArrowUpRight, Check, Layers } from "lucide-react";
import Link from "next/link";
import { techGroups, stackRecipes } from "@/data/technologies";
export default function TechExplorer() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState(0);
  const selected = stackRecipes[recipe];
  const filtered = techGroups
    .filter((g) => category === "all" || g.id === category)
    .map((g) => ({
      ...g,
      tools: g.tools.filter((t) =>
        `${t} ${g.name}`.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    }))
    .filter((g) => g.tools.length);
  const count = filtered.reduce((sum, g) => sum + g.tools.length, 0);
  return (
    <>
      <section className="container section">
        <div className="industry-toolbar">
          <div>
            <p className="eyebrow">EXPLORE THE TOOLKIT</p>
            <h2>Find the right building blocks.</h2>
          </div>
          <label className="industry-search">
            <Search size={18} />
            <span className="sr-only">Search technologies</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try Python, local AI, or analytics"
            />
          </label>
        </div>
        <div
          className="industry-filters"
          role="group"
          aria-label="Technology categories"
        >
          {[{ id: "all", name: "All technologies" }, ...techGroups].map((g) => (
            <button
              type="button"
              key={g.id}
              aria-pressed={category === g.id}
              onClick={() => setCategory(g.id)}
            >
              {g.name}
            </button>
          ))}
        </div>
        <p role="status" className="industry-result-count">
          {count} {count === 1 ? "technology" : "technologies"} across{" "}
          {filtered.length} {filtered.length === 1 ? "category" : "categories"}
        </p>
        <div className="tech-category-grid">
          {filtered.map((g) => (
            <article className="tech-category-card" key={g.id}>
              <div className="tech-category-heading">
                <Layers size={20} />
                <h3>{g.name}</h3>
                <span>{g.tools.length}</span>
              </div>
              <p>{g.description}</p>
              <div className="tech-chips">
                {g.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        {count === 0 && (
          <div className="industry-empty">
            <h3>No matching technologies</h3>
            <p>Try a different search or reset the category filters.</p>
            <button
              type="button"
              className="button"
              onClick={() => {
                setCategory("all");
                setQuery("");
              }}
            >
              Reset technology filters
            </button>
          </div>
        )}
      </section>
      <section className="stack-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SEE HOW THE PIECES CONNECT</p>
              <h2>A stack with a purpose.</h2>
            </div>
            <p>
              Explore illustrative combinations. Every final stack is chosen
              around your product, budget, team, and deployment requirements.
            </p>
          </div>
          <div
            className="recipe-tabs"
            role="group"
            aria-label="Explore example technology stacks"
          >
            {stackRecipes.map((r, i) => (
              <button
                type="button"
                aria-pressed={recipe === i}
                key={r.name}
                onClick={() => setRecipe(i)}
              >
                {r.name}
              </button>
            ))}
          </div>
          <div className="recipe-panel" aria-live="polite">
            <div>
              <span className="eyebrow">EXAMPLE ARCHITECTURE</span>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <Link href="/contact" className="text-link">
                Discuss your architecture <ArrowUpRight size={16} />
              </Link>
            </div>
            <ul>
              {selected.tools.map((t) => (
                <li key={t}>
                  <Check size={16} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
