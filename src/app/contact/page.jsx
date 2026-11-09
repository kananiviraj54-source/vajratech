import { Phone, MapPin, ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/Marketing";
import ContactForm from "@/components/ContactForm";
import { company, locations, services } from "@/data/company";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Contact Us — Let’s Build Something",
  "Talk to VajraTech Labs about your website, software, AI, design, or cloud project. Contact our Los Angeles or Surat team: +1 (747) 786-4762 or +91 94298 25879.",
  "/contact",
);
export default async function Contact({ searchParams }) {
  const params = await searchParams;
  const initialService = services.some((s) => s.id === params?.service)
    ? params.service
    : "";
  return (
    <>
      <PageHero
        eyebrow="LET’S START A CONVERSATION"
        title="Great things start with a hello."
        description="Have an idea, a challenge, or a question? Tell us about it. We’ll explore the right next step together."
      />
      <section className="container section contact-grid">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Your next idea
            <br />
            belongs here.
          </h2>
          <div className="contact-email">
            <Mail size={20} />
            <div>
              <strong>Email our team</strong>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
          <div className="contact-locations">
            {locations.map((location) => (
              <section key={location.id} className="contact-location">
                <h3>{location.label}</h3>
                <div className="contact-details">
                  <div>
                    <MapPin size={20} />
                    <div>
                      <p>
                        {location.lines.map((line, i) => (
                          <span key={line}>
                            {i > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </p>
                      <a
                        className="text-link"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on map <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                  <div>
                    <Phone size={19} />
                    <a href={`tel:${location.telephone}`}>{location.phone}</a>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="value-card" style={{ marginTop: 40 }}>
            <h3>What happens next?</h3>
            <p>
              We discuss your goals, understand the scope, and suggest an
              approach. You get a clear starting point before deciding how to
              move forward.
            </p>
          </div>
        </div>
        <ContactForm key={initialService} initialService={initialService} />
      </section>
    </>
  );
}
