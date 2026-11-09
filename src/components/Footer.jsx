import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { company, locations, services } from "@/data/company";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            VajraTech<span> Labs.</span>
          </Link>
          <p>
            Ideas into impact.
            <br />
            Technology built around your business.
          </p>
          <span className="footer-note">Design. Develop. Evolve.</span>
        </div>
        <div>
          <h3>Our expertise</h3>
          <Link href="/services">View all services ↗</Link>
          {services.slice(0, 6).map((s) => (
            <Link key={s.id} href={`/services#${s.id}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Explore</h3>
          {[
            ["About us", "/about"],
            ["Industries", "/industries"],
            ["Solutions", "/solutions"],
            ["Technologies", "/technologies"],
            ["Engagement models", "/pricing"],
            ["Careers", "/careers"],
          ].map(([l, h]) => (
            <Link key={h} href={h}>
              {l}
            </Link>
          ))}
        </div>
        <div>
          <h3>Let’s connect</h3>
          <a
            className="footer-contact footer-email"
            href={`mailto:${company.email}`}
          >
            <Mail size={17} />
            {company.email}
          </a>
          {locations.map((location) => (
            <div className="footer-location" key={location.id}>
              <strong>{location.label}</strong>
              <p className="footer-contact">
                <MapPin size={17} />
                <span>
                  {location.lines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <a href={`tel:${location.telephone}`} className="footer-contact">
                <Phone size={16} />
                {location.phone}
              </a>
            </div>
          ))}
          <Link href="/contact" className="footer-discuss">
            Discuss your project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} VajraTech Labs. All rights reserved.
        </span>
        <span>Built for what’s next.</span>
      </div>
    </footer>
  );
}
