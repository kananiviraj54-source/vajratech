import { company } from "@/data/company";
export default function sitemap() {
  return [
    "",
    "/about",
    "/services",
    "/industries",
    "/solutions",
    "/technologies",
    "/pricing",
    "/contact",
    "/careers",
    "/work",
  ].map((path) => ({
    url: `${company.url}${path}`,
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.7 : 1,
  }));
}
