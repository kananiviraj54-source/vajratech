"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Workflow,
  Rocket,
  BrainCircuit,
  Wrench,
} from "lucide-react";
const projects = [
  {
    title: "Simplify daily operations",
    icon: Workflow,
    headline: "Bring your workflows into one place.",
    description:
      "Replace repeated data entry and scattered updates with a custom business application designed around your team.",
    example:
      "A customer request becomes a tracked task, gets assigned to the right person, and appears in your reporting dashboard.",
    deliverables: [
      "Workflow discovery & requirements",
      "Role-based dashboards and approvals",
      "Connections to your existing tools",
      "Testing, deployment & team handover",
    ],
  },
  {
    title: "Launch a new product",
    icon: Rocket,
    headline: "Give your idea a focused first release.",
    description:
      "Define a useful MVP, test the user experience, and build a product that can evolve with real customer feedback.",
    example:
      "Start with onboarding, one valuable core workflow, and a clear feedback loop before expanding the feature set.",
    deliverables: [
      "Product discovery & MVP scope",
      "Interactive UI/UX prototype",
      "Application, APIs & database",
      "Release plan & product documentation",
    ],
  },
  {
    title: "Build a local AI assistant",
    icon: BrainCircuit,
    headline: "Put your own knowledge to work.",
    description:
      "Build an assistant around approved documents and workflows, with local or self-hosted models when they fit your requirements.",
    example:
      "A team member asks a question, the assistant retrieves relevant internal information, and the response includes source references.",
    deliverables: [
      "Hardware & model suitability assessment",
      "Document processing & retrieval",
      "User access & source-aware answers",
      "Evaluation & deployment guidance",
    ],
  },
  {
    title: "Create a useful everyday tool",
    icon: Wrench,
    headline: "Small tools. Meaningful improvements.",
    description:
      "Turn a repetitive task into a lightweight calculator, reporting tool, booking flow, or internal utility.",
    example:
      "A custom quotation tool uses your pricing rules to prepare a consistent estimate, ready for a person to review.",
    deliverables: [
      "Task mapping & business rules",
      "A focused, accessible interface",
      "Export or system integrations",
      "Validation & usage documentation",
    ],
  },
];
export default function BuildJourney() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  return (
    <div className="build-journey">
      <div
        className="build-options"
        role="tablist"
        aria-label="Explore custom software projects"
      >
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <button
              key={p.title}
              type="button"
              role="tab"
              id={`build-tab-${i}`}
              aria-selected={active === i}
              aria-controls="build-panel"
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (
                  [
                    "ArrowDown",
                    "ArrowRight",
                    "ArrowUp",
                    "ArrowLeft",
                    "Home",
                    "End",
                  ].includes(e.key)
                ) {
                  e.preventDefault();
                  const next =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? projects.length - 1
                        : (i +
                            (["ArrowDown", "ArrowRight"].includes(e.key)
                              ? 1
                              : -1) +
                            projects.length) %
                          projects.length;
                  setActive(next);
                  e.currentTarget.parentElement.children[next].focus();
                }
              }}
              tabIndex={active === i ? 0 : -1}
            >
              <Icon size={21} />
              <span>{p.title}</span>
              <ArrowUpRight size={16} />
            </button>
          );
        })}
      </div>
      <div
        id="build-panel"
        className="build-panel"
        role="tabpanel"
        aria-labelledby={`build-tab-${active}`}
      >
        <span className="eyebrow">
          A POSSIBLE STARTING POINT / 0{active + 1}
        </span>
        <h3>{project.headline}</h3>
        <p>{project.description}</p>
        <div className="build-example">
          <span>IN PRACTICE</span>
          <p>{project.example}</p>
        </div>
        <ul>
          {project.deliverables.map((d) => (
            <li key={d}>
              <Check size={15} />
              {d}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="text-link">
          Talk through your idea <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
