import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Layers,
  Code2,
  Cloud,
  BrainCircuit,
} from "lucide-react";
import BuildJourney from "@/components/BuildJourney";

import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Digital Products, Software & AI Development",
  "VajraTech Labs builds websites, custom software, AI solutions, UI/UX experiences, and cloud platforms for growing businesses.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> YOUR IDEAS. OUR ENGINEERING.
            </p>
            <h1>
              Big ideas.
              <br />
              Intelligent solutions.
              <br />
              <em>Real impact.</em>
            </h1>
            <p className="hero-description">
              Custom software, local AI, and digital products shaped around your
              business. From the first clear plan to a useful product in your
              team’s hands.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button">
                Build with us <ArrowUpRight size={18} />
              </Link>
              <Link href="#build-process" className="simple-link">
                See how we build <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-assurances">
              <span>
                <Check size={15} /> Built around your business
              </span>
              <span>
                <Check size={15} /> From strategy to launch
              </span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Illustration of connected design, software, AI, and cloud capabilities"
          >
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-label">
              THE BUILDING BLOCKS OF WHAT’S NEXT
            </div>
            <div className="floating-chip chip-design">
              <Layers size={19} />
              <div>
                <strong>Thoughtful design</strong>
                <span>Human at the core</span>
              </div>
            </div>
            <div className="core-cube">
              <div className="cube-symbol">
                V<span>.</span>
              </div>
              <span>VAJRATECH LABS</span>
            </div>
            <div className="floating-chip chip-code">
              <Code2 size={19} />
              <div>
                <strong>Powerful engineering</strong>
                <span>Built to move you forward</span>
              </div>
            </div>
            <div className="floating-chip chip-ai">
              <BrainCircuit size={19} />
              <div>
                <strong>Applied intelligence</strong>
                <span>Ideas into possibilities</span>
              </div>
            </div>
            <div className="visual-bottom">
              <Cloud size={17} />
              <span>CONNECTED. SCALABLE. READY TO EVOLVE.</span>
              <span className="status-dot" />
            </div>
          </div>
        </div>
        <div className="container hero-foot">
          <span>YOUR TECHNOLOGY PARTNER, FROM IDEA TO EVOLUTION</span>
          <span>
            Strategy <i>/</i> Design <i>/</i> Engineering <i>/</i> Growth
          </span>
        </div>
      </section>
      <div className="capability-strip">
        <div className="container">
          {[
            "WEB & SOFTWARE",
            "AI & MACHINE LEARNING",
            "UI/UX DESIGN",
            "CLOUD & DEVOPS",
          ].map((t) => (
            <span key={t}>
              {t}
              <span className="copper-star">✳</span>
            </span>
          ))}
        </div>
      </div>
      <section className="container section build-intro">
        <div>
          <p className="eyebrow">SOFTWARE THAT FITS THE WAY YOU WORK</p>
          <h2>
            Your business is unique.
            <br />
            Your software should be too.
          </h2>
          <p className="intro">
            A spreadsheet that has outgrown its purpose. A process held together
            by manual follow-ups. An idea that deserves its first release. We
            help you turn the next challenge into a product your team can
            actually use.
          </p>
          <Link href="/about" className="text-link">
            Meet your technology partner <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="build-principles">
          {[
            [
              "Start with the real problem",
              "We map the workflow and the people behind it before writing the first line of code.",
            ],
            [
              "Build what matters first",
              "We agree on priorities and a focused first release, with visible milestones along the way.",
            ],
            [
              "Keep you in the loop",
              "Review prototypes, see working progress, and make decisions with the team building your product.",
            ],
          ].map(([title, desc], i) => (
            <div key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="build-experience">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM YOUR IDEA TO YOUR EVERYDAY TOOL</p>
              <h2>
                What could we build
                <br />
                for your business?
              </h2>
            </div>
            <p>
              Explore a few starting points. Every project is shaped around your
              users, existing systems, and goals.
            </p>
          </div>
          <BuildJourney />
        </div>
      </section>
      <section className="container section ownership-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MORE THAN A WORKING DEMO</p>
            <h2>
              Built to launch.
              <br />
              Prepared for what follows.
            </h2>
          </div>
          <p>
            A good handover matters as much as a good first impression. We plan
            for the people who will run, use, and maintain your product.
          </p>
        </div>
        <div className="value-grid" style={{ marginTop: 0 }}>
          {[
            [
              "A clear product blueprint",
              "Requirements, key user journeys, and an agreed scope keep the project focused.",
            ],
            [
              "A connected foundation",
              "APIs, data migration, and access controls are considered alongside the user experience.",
            ],
            [
              "A practical handover",
              "Deployment guidance, documentation, and agreed support help your team take the next step.",
            ],
          ].map(([title, desc]) => (
            <div className="value-card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="build-process" className="container section home-process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">GOOD WORK STARTS WITH A CLEAR PLAN</p>
            <h2>
              Clarity at every step.
              <br />
              Care in every detail.
            </h2>
          </div>
          <p>
            From the first conversation to continuous improvement, we keep the
            process collaborative and the next step clear.
          </p>
        </div>
        <div className="process-grid">
          {[
            [
              "Discover",
              "We listen, ask the right questions, and define the problem worth solving.",
            ],
            [
              "Design",
              "We turn your requirements into a clear plan and a considered user experience.",
            ],
            [
              "Develop",
              "We build in focused iterations, with regular reviews and purposeful testing.",
            ],
            [
              "Evolve",
              "We support your launch and plan improvements as your business grows.",
            ],
          ].map(([title, desc], i) => (
            <div key={title}>
              <span className="process-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
