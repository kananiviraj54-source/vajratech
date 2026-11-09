import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Engagement Models & Project Estimates",
  "Understand project-based delivery, iterative product development, support engagements, and how VajraTech Labs prepares a project estimate.",
  "/pricing",
);
const models = [
  {
    title: "Project-based delivery",
    label: "FOR A DEFINED OUTCOME",
    description:
      "A focused website, application, migration, or integration with a scope we can agree on before work begins.",
    items: [
      "Agreed requirements & deliverables",
      "Milestones and review points",
      "Estimate based on the confirmed scope",
      "A change process for new requirements",
    ],
  },
  {
    title: "Iterative product development",
    label: "FOR A PRODUCT THAT EVOLVES",
    description:
      "An MVP or growing platform where we prioritize a useful release, learn from feedback, and plan the next iteration.",
    items: [
      "A prioritized product backlog",
      "Focused development cycles",
      "Working demonstrations & feedback",
      "Scope and estimates reviewed per phase",
    ],
  },
  {
    title: "Maintenance & ongoing support",
    label: "FOR WHAT COMES AFTER LAUNCH",
    description:
      "An existing application or website that needs a clear plan for updates, improvements, and technical support.",
    items: [
      "Initial application & access review",
      "Defined support coverage & responsibilities",
      "Planned fixes and improvements",
      "Agreed response expectations & reporting",
    ],
  },
];
export default function Engagements() {
  return (
    <>
      <PageHero
        eyebrow="WORKING TOGETHER"
        title="The right plan for the work ahead."
        description="A clear engagement starts with understanding your goals. We agree on the scope, responsibilities, and delivery approach before development begins."
      />
      <section className="container section">
        <div className="engagement-grid">
          {models.map((model, i) => (
            <article className="engagement-card" key={model.title}>
              <span className="eyebrow">
                0{i + 1} / {model.label}
              </span>
              <h2>{model.title}</h2>
              <p>{model.description}</p>
              <ul>
                {model.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-link">
                Discuss this approach <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <div className="scope-note">
          <div>
            <h3>What goes into an estimate?</h3>
            <p>
              Features, user journeys, design complexity, integrations, data
              migration, deployment needs, testing, and ongoing support.
              Third-party fees and campaign media budgets are discussed
              separately.
            </p>
          </div>
          <Link href="/contact" className="text-link">
            Request a scoped estimate <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container engagement-faq">
        <p className="eyebrow">BEFORE WE BEGIN</p>
        <h2>A little more clarity.</h2>
        <div className="career-faq">
          {[
            [
              "How do we get a project estimate?",
              "Tell us about the goal, users, existing tools, and any timing or budget constraints. We clarify the requirements and propose a scope before providing an estimate.",
            ],
            [
              "Can we start with a smaller first phase?",
              "Yes. Discovery, a prototype, an integration, or a focused MVP can be a useful first step. We agree on which phase will answer the most important questions.",
            ],
            [
              "What if the requirements change?",
              "We review the change, its impact on the scope and timeline, and any revised estimate before adding it to the agreed work.",
            ],
            [
              "Are hosting, subscriptions, and advertising spend included?",
              "They depend on the project. Hosting, software subscriptions, platform fees, and paid advertising budgets are itemized or agreed separately so responsibilities are clear.",
            ],
            [
              "What happens after launch?",
              "We agree on handover, documentation, maintenance, and any ongoing support. Support coverage and response expectations are defined in the engagement.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
