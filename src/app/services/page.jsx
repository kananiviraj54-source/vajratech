import ServiceExplorer from "@/components/ServiceExplorer";
import { PageHero } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Software, Local AI, SEO & Digital Marketing Services",
  "Explore custom software, web, mobile, local AI, cloud, SEO, social media advertising, content marketing, and technology consulting services.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR EXPERTISE"
        title="Build better. Connect smarter. Grow with purpose."
        description="From a useful first product to the systems and campaigns behind your next stage of growth, explore the expertise we can bring to your project."
      />
      <section className="container section">
        <ServiceExplorer />
      </section>
      <section className="service-scope-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A CLEAR SCOPE FROM THE START</p>
              <h2>Know what comes next.</h2>
            </div>
            <p>
              Before work begins, we agree on the requirements, deliverables,
              responsibilities, and a practical way to measure progress.
            </p>
          </div>
          <div className="value-grid" style={{ marginTop: 0 }}>
            {[
              [
                "Discovery & priorities",
                "We understand your users, existing systems, and constraints, then identify what should come first.",
              ],
              [
                "Delivery & review",
                "We plan milestones and reviews so you can see the work and give feedback as it develops.",
              ],
              [
                "Launch & ongoing care",
                "Deployment, handover, maintenance, or campaign management are defined around your project’s needs.",
              ],
            ].map(([t, d]) => (
              <article className="value-card" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
