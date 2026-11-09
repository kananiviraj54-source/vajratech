import { PageHero } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Project Approach & Capabilities",
  "Explore the kinds of projects we can help you shape. These are solution examples, rather than published client case studies.",
  "/work",
);
const cards = [
  [
    "A connected business portal",
    "Bring customer accounts, service requests, and operational information together in one clear interface.",
  ],
  [
    "An intelligent knowledge assistant",
    "Help teams find answers in approved company information, with an evaluation plan and appropriate access controls.",
  ],
  [
    "A digital commerce experience",
    "Connect product discovery, ordering, and back-office operations around the needs of your customers.",
  ],
];
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="HOW WE BUILD"
        title="From a business challenge to a useful product."
        description="Explore the kinds of projects we can help you shape. These are solution examples, rather than published client case studies."
      />
      <section className="container section">
        <div className="value-grid" style={{ marginTop: 0 }}>
          {cards.map(([t, d]) => (
            <article className="value-card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
