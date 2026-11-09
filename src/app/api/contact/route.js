import { company, services } from "@/data/company";
import { sendInquiry, smtpSettings } from "@/lib/contact-mail.mjs";
import {
  createContactHandler,
  createRateLimiter,
} from "@/lib/contact-handler.mjs";
export const runtime = "nodejs";
const allow = createRateLimiter();
export const POST = createContactHandler({
  services,
  recipient: company.email,
  configured: () => Boolean(smtpSettings()),
  send: sendInquiry,
  allow,
  origins: [
    company.url,
    ...(process.env.NODE_ENV === "development"
      ? [
          "http://localhost:3001",
          "http://localhost:3000",
          "http://127.0.0.1:3001",
          "http://127.0.0.1:3000",
        ]
      : []),
  ],
});
