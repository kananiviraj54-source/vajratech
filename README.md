# VajraTech Labs website

Next.js company website for https://www.vajratechlabs.in.

## Local development

Run `npm install` when dependencies are missing, then `npm run dev`.
Use the Local URL printed by Next.js (3001 if 3000 is occupied).
Run `npm run build` to validate the production build; `npm start` serves it.

## Company content

Edit `src/data/company.js` for the domain, phone, inquiry email, services, and industries.
The shared `locations` array in `src/data/company.js` supplies both US and Surat addresses and telephone numbers to the contact page, footer, and organization JSON-LD. Update it to change location details.

## Contact email delivery

The contact form posts to `/api/contact`. It sends an email to `info@vajratechlabs.in` using server-side Nodemailer and Hostinger SMTP. The authenticated mailbox is the sender; the visitor is set as Reply-To. No automatic email is sent to the visitor.

Configure these **server-only** variables in `.env.local` for development and in your hosting environment for production:

```text
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@vajratechlabs.in
SMTP_PASS=<Hostinger mailbox password>
```

The Hostinger mailbox password is not the hosting account password. Keep it out of source control and never prefix it with `NEXT_PUBLIC_`. Restart the server after configuration. Port 465 uses TLS; port 587 is also supported and requires STARTTLS. The server must support Node.js and outbound SMTP; static-only hosting cannot run this endpoint.

Messages include name, email, company, phone, service, and project details. The form preserves input on failure and only reports success after SMTP accepts the recipient. SMTP acceptance does not guarantee inbox placement; check the mailbox and spam folder during a real delivery test after credentials are set.

Validation, a honeypot, same-origin checks, bounded request size, and a per-instance rate limit protect the endpoint. Production reverse proxies must overwrite client-supplied forwarding headers. For multi-instance/serverless deployments, add a shared rate limit at the hosting edge; the in-memory limit resets with the process. Requests are not persisted to a database and sensitive form data is not logged.

Run `node --test tests/contact.test.mjs` for validation, failure, transport configuration, and message-routing tests. A live inbox test still requires valid SMTP credentials.

## SEO and launch

- Unique server-rendered titles, descriptions, canonical URLs, Open Graph, and Twitter previews are defined per page through `src/lib/seo.js`.
- `/robots.txt` allows public pages and excludes API paths.
- `/sitemap.xml` lists public canonical pages.
- `/opengraph-image` generates the social preview image.
- Organization structured data includes the owner's supplied US address and telephone.
- Set `GOOGLE_SITE_VERIFICATION` in the deployment environment to the real Google Search Console HTML verification token, if using that verification method. The former AdSense publisher ID was not a valid site verification token.

Before public launch:
1. Configure SMTP credentials and verify a real inquiry reaches `info@vajratechlabs.in`.
2. Deploy this checkout to the existing hosting for `www.vajratechlabs.in` and confirm HTTPS and the preferred www redirect.
3. Verify the domain in Google Search Console, submit `https://www.vajratechlabs.in/sitemap.xml`, and request indexing for the homepage and key pages.
4. Review Search Console indexing reports after publication. A sitemap and indexable pages support discovery; Google controls crawling, indexing, and rankings.

No production deployment or Search Console submission is performed by local development. Unverified client counts, certification claims, testimonials, team biographies, placeholder registration numbers, and hardcoded performance guarantees are not used by the redesigned pages.
