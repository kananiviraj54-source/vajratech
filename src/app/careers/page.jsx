import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Figma,
  Cloud,
  Megaphone,
  ShieldCheck,
  ArrowDown,
} from "lucide-react";
import { PageHero } from "@/components/Marketing";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Careers — Build Your Next Chapter",
  "Explore career paths at VajraTech Labs in software engineering, AI, design, cloud, testing, and digital marketing. Introduce yourself to our team.",
  "/careers",
);
const paths = [
  {
    title: "Software engineering",
    icon: Code2,
    description:
      "Build web applications, mobile experiences, APIs, and tools that solve everyday business problems.",
    skills: ["Frontend & backend", "Mobile development", "API integrations"],
    detail:
      "Share a repository or project you can explain: the problem, your contribution, and the decisions you made.",
  },
  {
    title: "AI & data",
    icon: BrainCircuit,
    description:
      "Explore useful AI applications, local model workflows, retrieval systems, and business data tools.",
    skills: ["Python & data", "Local AI & RAG", "Model evaluation"],
    detail:
      "Show how you evaluate an AI workflow, handle data, and judge whether its output is useful.",
  },
  {
    title: "Product & UI/UX design",
    icon: Figma,
    description:
      "Turn user needs and complex workflows into clear, accessible digital experiences.",
    skills: ["User research", "Prototyping", "Design systems"],
    detail:
      "Include a portfolio case study that explains the user need, your process, and the reasoning behind the final design.",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Work on deployment workflows, infrastructure, monitoring, and the foundations of reliable applications.",
    skills: ["Cloud platforms", "CI/CD & containers", "Observability"],
    detail:
      "Tell us about an environment or deployment workflow you built, including how you tested and documented it.",
  },
  {
    title: "Digital marketing & growth",
    icon: Megaphone,
    description:
      "Connect SEO, useful content, social campaigns, and reporting with real business objectives.",
    skills: ["SEO & content", "Social media ads", "Campaign analytics"],
    detail:
      "Share a content, SEO, or campaign example, what you contributed, and how you assessed the results.",
  },
  {
    title: "Quality & testing",
    icon: ShieldCheck,
    description:
      "Help teams deliver better products through thoughtful testing of user journeys, APIs, and releases.",
    skills: ["Test planning", "Automation", "Accessibility"],
    detail:
      "Include a test plan, automation example, or a clear account of how you investigated a difficult issue.",
  },
];
function introductionLink(area) {
  return `mailto:${company.email}?subject=${encodeURIComponent(`Career introduction — ${area}`)}&body=${encodeURIComponent(`Hello VajraTech Labs,\n\nI am interested in ${area}.\n\nName:\nLocation:\nExperience / education:\nPortfolio or GitHub:\nAvailability:\n\nA little about my work:\n\n`)}`;
}
export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS AT VAJRATECH LABS"
        title="Bring your curiosity. Build something useful."
        description="Interested in thoughtful technology, practical problem-solving, and work that makes a difference to a business? Tell us what you enjoy building and where you want to grow."
      />
      <section className="container section career-intro">
        <div>
          <p className="eyebrow">PEOPLE BEHIND THE POSSIBILITIES</p>
          <h2>
            Your perspective
            <br />
            belongs in the conversation.
          </h2>
          <p>
            Good products need different ways of thinking. We value people who
            ask questions, communicate clearly, and care about the quality of
            what they create.
          </p>
          <a className="text-link" href="#career-paths">
            Explore career paths <ArrowDown size={16} />
          </a>
        </div>
        <div className="career-note">
          <span className="eyebrow">A GOOD PLACE TO START</span>
          <h3>Show us how you think.</h3>
          <p>
            Professional work, a personal project, an open-source contribution,
            or a considered portfolio can help us understand your approach.
          </p>
          <p>
            Early in your career? Share what you have learned and a project you
            are proud to explain.
          </p>
        </div>
      </section>
      <section className="career-paths-section" id="career-paths">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE YOUR DIRECTION</p>
              <h2>Where could you contribute?</h2>
            </div>
            <p>
              These are areas of work, rather than advertised vacancies. Contact
              us to confirm current openings and role requirements.
            </p>
          </div>
          <div className="career-path-grid">
            {paths.map((path) => {
              const Icon = path.icon;
              return (
                <article className="career-path" key={path.title}>
                  <span className="service-icon">
                    <Icon size={24} />
                  </span>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                  <div className="tags">
                    {path.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                  <details>
                    <summary>What to include in your introduction</summary>
                    <p>{path.detail}</p>
                  </details>
                  <a className="text-link" href={introductionLink(path.title)}>
                    Introduce yourself <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="career-email-note">
            Introduction links prepare a draft in your email app. Add your
            details, attach your résumé if you wish, and send it to complete
            your introduction.
          </p>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW WE APPROACH THE CONVERSATION</p>
            <h2>A clear next step.</h2>
          </div>
          <p>
            We review introductions against current needs. If there is a
            potential match, we can discuss a suitable opportunity together.
          </p>
        </div>
        <div className="career-process">
          {[
            [
              "Introduce yourself",
              "Share your area of interest, relevant experience, and a portfolio or project link.",
            ],
            [
              "Talk about the work",
              "If there is a suitable opportunity, we discuss your approach, interests, and the role’s expectations.",
            ],
            [
              "Agree on what follows",
              "Role scope, location, working arrangements, and any further steps are confirmed directly with you.",
            ],
          ].map(([title, text], i) => (
            <div key={title}>
              <span className="process-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container career-questions">
        <p className="eyebrow">A FEW USEFUL DETAILS</p>
        <h2>Before you say hello.</h2>
        <div className="career-faq">
          {[
            [
              "Are you currently hiring?",
              "Contact us to confirm current vacancies. The areas above describe our work and are not a promise of an available position.",
            ],
            [
              "Can I introduce myself as a student or early-career candidate?",
              "Yes. Tell us about your interests, education, and projects. Internship and entry-level availability is confirmed directly by the team.",
            ],
            [
              "Are opportunities remote or based in Surat?",
              "Location, remote options, and working arrangements depend on the specific opportunity. Ask the team before making plans.",
            ],
            [
              "What should I send?",
              "A short introduction, your area of interest, location, relevant experience, and a portfolio or project link. A résumé is welcome; please leave out identity documents and unrelated sensitive information.",
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <div className="career-final-link">
          <a className="button" href={introductionLink("General introduction")}>
            Start your introduction <ArrowUpRight size={17} />
          </a>
          <Link href="/contact" className="text-link">
            Have a question? Contact our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
