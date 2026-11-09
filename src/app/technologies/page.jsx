import { PageHero } from "@/components/Marketing";
import TechExplorer from "@/components/TechExplorer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Technology Stack — Web, Mobile, Local AI, Cloud & Growth",
  "Explore our technology toolkit for custom software, local AI, web, mobile, data, cloud, testing, design, SEO, and advertising, with interactive example stacks.",
  "/technologies",
);
export default function Technologies() {
  return (
    <>
      <PageHero
        eyebrow="OUR TECHNOLOGY TOOLKIT"
        title="Many technologies. One clear purpose."
        description="Explore the tools we can bring together for your project—from familiar web frameworks to local AI and growth analytics. We select the stack around the problem, rather than starting with a favorite tool."
      />
      <TechExplorer />
    </>
  );
}
