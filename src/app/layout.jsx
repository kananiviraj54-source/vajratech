import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company, locations } from "@/data/company";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "VajraTech Labs | Software, Web & AI Development",
    template: "%s | VajraTech Labs",
  },
  description:
    "Thoughtful design. Powerful engineering. Web development, custom software, AI/ML, UI/UX, and cloud solutions for growing businesses.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  icons: { icon: [{url:"/vajratech-icon.png",type:"image/png",sizes:"192x192"}], shortcut:"/favicon.ico", apple:[{url:"/apple-icon.png",sizes:"180x180",type:"image/png"}] },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${company.url}/#organization`,
  name: company.name,
  foundingDate: "2021",
  email: company.email,
  url: company.url,
  logo: `${company.url}/SHORTLOGO.png`,
  telephone: "+17477864762",
  description:
    "Web development, custom software, AI and machine learning, UI/UX design, and cloud services.",
  address: locations.map((location) => ({
    "@type": "PostalAddress",
    streetAddress: location.streetAddress,
    addressLocality: location.city,
    addressRegion: location.region,
    postalCode: location.postalCode,
    addressCountry: location.country,
  })),
  contactPoint: locations.map((location) => ({
    "@type": "ContactPoint",
    telephone: location.telephone,
    contactType: "customer inquiries",
    areaServed: location.country,
  })),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c"),
          }}
        />
      </body>
    </html>
  );
}
