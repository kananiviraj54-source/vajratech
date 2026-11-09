import { company } from "@/data/company";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${company.url}/sitemap.xml`,
    host: company.url,
  };
}
