import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Layers,
  UsersRound,
  ShoppingBag,
  BrainCircuit,
  ChartNoAxesCombined,
  Network,
} from "lucide-react";
import { PageHero } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Business Solutions & Workflow Automation",
  "Explore custom ERP, CRM, e-commerce, private AI, business analytics, and connected systems built around your operations.",
  "/solutions",
);
const solutions = [
  {
    title: "Operations that work together",
    icon: Layers,
    for: "Teams coordinating stock, purchasing, production, and reporting.",
    description:
      "Bring everyday business processes into a custom ERP or operations platform, with the right information available to the right people.",
    features: [
      "Role-based workspaces & approvals",
      "Inventory, purchasing & operational reports",
      "Data imports & connections to existing software",
    ],
    example:
      "A purchase request moves from the team that needs it to approval, ordering, and inventory updates in one tracked workflow.",
    service: "software",
  },
  {
    title: "A clearer customer picture",
    icon: UsersRound,
    for: "Sales and service teams managing leads, accounts, and requests.",
    description:
      "Connect customer information and handoffs through a CRM, client portal, or service workspace designed for your team.",
    features: [
      "Lead tracking & sales workflows",
      "Client accounts & service requests",
      "Activity history & useful reporting",
    ],
    example:
      "A customer inquiry is assigned, followed up, and tracked through to the next action, with context visible to the team.",
    service: "software",
  },
  {
    title: "Commerce with fewer handoffs",
    icon: ShoppingBag,
    for: "Businesses selling products online or through partner channels.",
    description:
      "Connect the customer shopping experience with the product, payment, and fulfillment information behind it.",
    features: [
      "Product catalogs & customer accounts",
      "Checkout & payment connections",
      "Orders, stock & fulfillment integrations",
    ],
    example:
      "An online order flows into the systems your team uses to manage stock, process payment, and prepare fulfillment.",
    service: "ecommerce",
  },
  {
    title: "Knowledge your team can use",
    icon: BrainCircuit,
    for: "Teams searching internal documents or repeating information tasks.",
    description:
      "Create a local or self-hosted AI assistant around approved information, with a retrieval and evaluation plan appropriate to the use case.",
    features: [
      "Document processing & source references",
      "Access rules & model deployment planning",
      "Quality evaluation & human review points",
    ],
    example:
      "A question brings back an answer grounded in relevant company documents, with references for the person reviewing it.",
    service: "local-ai",
  },
  {
    title: "Data that supports a decision",
    icon: ChartNoAxesCombined,
    for: "Teams bringing reports together from multiple tools.",
    description:
      "Turn scattered records into connected reporting, with clear definitions for the measures that matter to your business.",
    features: [
      "Data pipelines & quality checks",
      "Operational dashboards & reporting",
      "Shared metric definitions & access controls",
    ],
    example:
      "A dashboard combines order and inventory data so a manager can review stock needs without manually joining spreadsheets.",
    service: "data",
  },
  {
    title: "Systems that stay connected",
    icon: Network,
    for: "Businesses moving data between existing applications.",
    description:
      "Connect your CRM, ERP, payment, commerce, and communication tools with APIs and workflow automation.",
    features: [
      "Integration mapping & API development",
      "Event-based updates & scheduled jobs",
      "Error handling, logs & monitoring",
    ],
    example:
      "An approved customer update flows to the connected applications, with failed updates visible for follow-up.",
    service: "integration",
  },
];
export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="BUSINESS SOLUTIONS"
        title="Make the work flow better."
        description="A useful solution connects people, processes, and information. Explore practical ways custom technology can make your day-to-day operations easier to manage."
      />
      <section className="container section">
        <p className="editorial-note">
          These are examples of possible project scope. We define the workflows,
          integrations, and responsibilities with you during discovery.
        </p>
        <div className="solution-grid">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <article className="solution-card" key={item.title}>
                <span className="service-icon">
                  <Icon size={25} />
                </span>
                <h2>{item.title}</h2>
                <p className="solution-for">{item.for}</p>
                <p>{item.description}</p>
                <ul>
                  {item.features.map((f) => (
                    <li key={f}>
                      <Check size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/services#${item.service}`} className="text-link">
                  Explore the expertise <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <section className="service-scope-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">START WITH THE WORKFLOW</p>
              <h2>
                Keep what works.
                <br />
                Improve what doesn’t.
              </h2>
            </div>
            <p>
              You may need one useful integration, rather than a whole new
              platform. We begin with the existing process and work out what the
              right change looks like.
            </p>
          </div>
          <Link className="text-link" href="/contact">
            Tell us about your workflow <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
