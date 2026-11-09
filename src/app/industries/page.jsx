import { Layers, Route, UsersRound } from "lucide-react";
import { PageHero } from "@/components/Marketing";
import IndustryExplorer from "@/components/IndustryExplorer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Industries We Serve — Technology for Your Sector",
  "Explore software, AI, web, mobile, and cloud solutions for 18 industries, including manufacturing, healthcare, retail, finance, logistics, and education.",
  "/industries",
);
export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES WE SERVE"
        title="Different worlds. Purpose-built solutions."
        description="From the factory floor to the customer’s screen, we build around your workflows, your people, and the challenges that matter in your sector."
      />
      <div className="industry-principles">
        <div className="container">
          {[
            [
              UsersRound,
              "Understand the people",
              "Customers, teams, and the way they work.",
            ],
            [
              Route,
              "Map the workflow",
              "Find the friction before choosing the tools.",
            ],
            [
              Layers,
              "Build around your needs",
              "A focused scope with room to evolve.",
            ],
          ].map(([Icon, t, d]) => (
            <div key={t}>
              <Icon size={22} />
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="container section industry-explorer-section">
        <IndustryExplorer />
      </section>
      <section className="industry-delivery">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR APPROACH</p>
              <h2>
                Industry context.
                <br />
                Practical execution.
              </h2>
            </div>
            <p>
              We define the right scope together, including the data,
              integrations, access controls, and operational requirements your
              project needs.
            </p>
          </div>
          <div className="process-grid">
            {[
              [
                "Understand",
                "Map users, existing systems, and the daily tasks your software needs to support.",
              ],
              [
                "Prioritize",
                "Choose a focused set of workflows and agree on clear delivery milestones.",
              ],
              [
                "Connect",
                "Build and integrate the experience, with testing based on real scenarios.",
              ],
              [
                "Improve",
                "Review what works, gather feedback, and plan the next iteration.",
              ],
            ].map(([t, d], i) => (
              <div key={t}>
                <span className="process-number">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
