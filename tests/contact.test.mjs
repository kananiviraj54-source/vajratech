import test from "node:test";
import assert from "node:assert/strict";
import nodemailer from "nodemailer";
import {
  createContactHandler,
  createRateLimiter,
  validateInquiry,
} from "../src/lib/contact-handler.mjs";
import { smtpSettings, buildInquiryMail } from "../src/lib/contact-mail.mjs";
const services = [{ id: "web", title: "Web development" }];
const valid = {
  name: "Test Visitor",
  email: "visitor@example.test",
  company: "Example",
  phone: "+1 555 0100",
  service: "web",
  message: "Please discuss a website project.",
  website: "",
};
function request(body = valid, headers = {}) {
  return new Request("https://www.vajratechlabs.in/api/contact", {
    method: "POST",
    headers: {
      origin: "https://www.vajratechlabs.in",
      "content-type": "application/json",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
function handler(overrides = {}) {
  return createContactHandler({
    services,
    recipient: "info@vajratechlabs.in",
    configured: () => true,
    send: async () => {},
    allow: () => true,
    origins: ["https://www.vajratechlabs.in"],
    ...overrides,
  });
}
test("valid inquiry reaches only the configured inbox with the service label", async () => {
  let args;
  const response = await handler({
    send: async (...value) => {
      args = value;
    },
  })(request());
  assert.equal(response.status, 200);
  assert.equal(args[2], "info@vajratechlabs.in");
  assert.equal(args[1], "Web development");
  assert.equal(args[0].email, valid.email);
});
test("success waits for delivery acceptance", async () => {
  let release;
  let finished = false;
  const result = handler({
    send: () =>
      new Promise((resolve) => {
        release = resolve;
      }),
  })(request()).then((r) => {
    finished = true;
    return r;
  });
  await new Promise((resolve) => setTimeout(resolve, 20));
  assert.equal(finished, false);
  release();
  assert.equal((await result).status, 200);
});
test("missing configuration returns 503 without attempting delivery", async () => {
  let called = false;
  const response = await handler({
    configured: () => false,
    send: async () => {
      called = true;
    },
  })(request());
  assert.equal(response.status, 503);
  assert.equal(called, false);
  assert.match((await response.json()).message, /has not been sent/);
});
test("SMTP failure returns an error without exposing internal details", async () => {
  const response = await handler({
    send: async () => {
      throw new Error("private-password-and-server-response");
    },
  })(request());
  assert.equal(response.status, 502);
  assert.doesNotMatch(
    JSON.stringify(await response.json()),
    /private-password/,
  );
});
test("rejects malformed fields, header injection, spam trap, and unknown services", async () => {
  for (const change of [
    { email: "bad-email" },
    { name: "A\r\nBcc: victim@example.test" },
    { website: "spam" },
    { service: "unknown" },
    { message: "short" },
    { email: [valid.email] },
  ]) {
    assert.equal(
      (await handler()(request({ ...valid, ...change }))).status,
      400,
    );
  }
});
test("rejects foreign origins and unsupported content types", async () => {
  assert.equal(
    (await handler()(request(valid, { origin: "https://evil.example" })))
      .status,
    403,
  );
  assert.equal(
    (await handler()(request(valid, { "content-type": "text/plain" }))).status,
    415,
  );
});
test("rejects invalid JSON and oversized streamed bodies", async () => {
  assert.equal((await handler()(request("{"))).status, 400);
  assert.equal(
    (
      await handler()(
        request(JSON.stringify({ ...valid, message: "x".repeat(17000) })),
      )
    ).status,
    413,
  );
});
test("rate limit caps attempts and expires", async () => {
  let time = 0;
  const allow = createRateLimiter({ max: 2, now: () => time });
  assert.equal(allow("ip"), true);
  assert.equal(allow("ip"), true);
  assert.equal(allow("ip"), false);
  time = 600001;
  assert.equal(allow("ip"), true);
  assert.equal((await handler({ allow: () => false })(request())).status, 429);
});
test("mail uses fixed recipient and authenticated sender with visitor reply-to", async () => {
  const mail = buildInquiryMail(
    { ...valid, message: '<img src=x onerror="alert(1)">\nProject details' },
    {
      sender: "info@vajratechlabs.in",
      recipient: "info@vajratechlabs.in",
      serviceName: "Web development",
    },
  );
  assert.equal(mail.to, "info@vajratechlabs.in");
  assert.equal(mail.from.address, "info@vajratechlabs.in");
  assert.equal(mail.replyTo.address, valid.email);
  assert.ok(mail.html.includes("&lt;img"));
  assert.ok(!mail.html.includes("<img"));
  assert.equal(mail.disableFileAccess, true);
  const result = await nodemailer
    .createTransport({ streamTransport: true, buffer: true, newline: "unix" })
    .sendMail(mail);
  const mime = result.message.toString();
  assert.match(mime, /Reply-To: Test Visitor <visitor@example.test>/);
  assert.match(mime, /To: info@vajratechlabs.in/);
  assert.match(mime, /multipart\/alternative/);
});
test("Hostinger configuration requires secrets and TLS", () => {
  assert.equal(smtpSettings({}), null);
  const secure = smtpSettings({
    SMTP_USER: "info@vajratechlabs.in",
    SMTP_PASS: "test-only",
  });
  assert.equal(secure.host, "smtp.hostinger.com");
  assert.equal(secure.port, 465);
  assert.equal(secure.secure, true);
  const starttls = smtpSettings({
    SMTP_USER: "info@vajratechlabs.in",
    SMTP_PASS: "test-only",
    SMTP_PORT: "587",
  });
  assert.equal(starttls.requireTLS, true);
  assert.equal(
    smtpSettings({ SMTP_USER: "x", SMTP_PASS: "x", SMTP_PORT: "25" }),
    null,
  );
});
