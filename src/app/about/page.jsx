import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Wrench, Handshake } from "lucide-react";
import { PageHero, CTA } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "About Us — Building Since 2021",
  "Since 2021, VajraTech Labs has worked on custom software, local AI, everyday business tools, digital experiences, and technology solutions.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT VAJRATECH LABS / SINCE 2021"
        title="Curious minds. Practical builders."
        description="Since 2021, we’ve been helping turn business ideas and everyday challenges into useful technology. We believe the best solutions begin with understanding the people who use them."
      />
      <section className="container section about-story">
        <div className="since-panel">
          <span>OUR JOURNEY STARTED IN</span>
          <strong>
            2021<span>.</span>
          </strong>
          <p>
            Building with curiosity.
            <br />
            Growing through collaboration.
          </p>
          <div className="since-rule" />
          <span>IDEAS → USEFUL TECHNOLOGY</span>
        </div>
        <div className="content-copy">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>
            A technology partner
            <br />
            for the work ahead.
          </h2>
          <p>
            VajraTech Labs brings software development, design, AI, cloud
            engineering, and digital growth together. Since 2021, our work has
            centered on a simple question: how can technology make this business
            work better?
          </p>
          <p>
            Sometimes the answer is a custom platform. Sometimes it is a local
            AI assistant, an integration, or a straightforward tool that saves a
            team from doing the same task repeatedly. We take the time to
            understand the problem before deciding what to build.
          </p>
          <Link href="/contact" className="text-link">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="about-capabilities">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE BELIEVE IN BUILDING</p>
              <h2>
                Useful by design.
                <br />
                Grounded in your needs.
              </h2>
            </div>
            <p>
              From an everyday utility to a connected application, the value is
              in how well it fits the work.
            </p>
          </div>
          <div className="value-grid" style={{ marginTop: 0 }}>
            {[
              [
                BrainCircuit,
                "Local AI & internal assistants",
                "We build local and self-hosted AI experiences for document search, internal knowledge, and workflow assistance. Model selection, hardware, data access, and evaluation are part of the project—not afterthoughts.",
              ],
              [
                Wrench,
                "Simple tools that do a real job",
                "Custom calculators, quotation builders, inventory utilities, booking tools, reporting dashboards, and document automation can make everyday tasks clearer and more consistent.",
              ],
              [
                Handshake,
                "Connected digital growth",
                "We connect product engineering with SEO, content, and advertising so your website, customer journey, and marketing activity work toward the same business goals.",
              ],
            ].map(([Icon, t, d]) => (
              <article className="value-card" key={t}>
                <Icon size={27} className="about-icon" />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW WE WORK TOGETHER</p>
            <h2>
              Open conversations.
              <br />
              Thoughtful execution.
            </h2>
          </div>
          <p>
            You should understand what we are building, why it matters, and what
            happens next.
          </p>
        </div>
        <div className="process-grid">
          {[
            [
              "Listen first",
              "We ask about users, current workflows, constraints, and what a useful outcome looks like.",
            ],
            [
              "Make it tangible",
              "We turn the discussion into requirements, a prototype, and an agreed plan.",
            ],
            [
              "Build together",
              "We share progress in focused iterations and use feedback to guide decisions.",
            ],
            [
              "Stay practical",
              "We plan testing, launch, documentation, and support around the needs of your team.",
            ],
          ].map(([t, d], i) => (
            <div key={t}>
              <span className="process-number">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
