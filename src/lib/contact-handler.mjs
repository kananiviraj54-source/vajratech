const MAX_BYTES = 16000;
const WINDOW_MS = 10 * 60 * 1000;
export function createRateLimiter({ max = 5, now = Date.now } = {}) {
  const entries = new Map();
  return (key) => {
    const time = now();
    for (const [ip, entry] of entries)
      if (entry.reset <= time) entries.delete(ip);
    const entry = entries.get(key) || { count: 0, reset: time + WINDOW_MS };
    if (entry.count >= max || (!entries.has(key) && entries.size >= 10000))
      return false;
    entry.count++;
    entries.set(key, entry);
    return true;
  };
}
function response(status, message, extra = {}) {
  return Response.json(
    { message },
    { status, headers: { "Cache-Control": "no-store", ...extra } },
  );
}
export function validateInquiry(body, serviceIds) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const limits = {
    name: 100,
    email: 254,
    company: 150,
    phone: 40,
    service: 60,
    message: 5000,
    website: 200,
  };
  const data = {};
  for (const [key, max] of Object.entries(limits)) {
    const value = body[key] ?? "";
    if (
      typeof value !== "string" ||
      value.length > max ||
      (key !== "message" && /[\r\n\x00]/.test(value))
    )
      return null;
    data[key] = value.trim();
  }
  if (
    data.website ||
    data.name.length < 2 ||
    data.message.length < 10 ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) ||
    ![...serviceIds, "other"].includes(data.service)
  )
    return null;
  return data;
}
export function createContactHandler({
  services,
  recipient,
  configured,
  send,
  allow,
  origins,
}) {
  return async (request) => {
    if (!origins.includes(request.headers.get("origin")))
      return response(403, "This request is not allowed.");
    if (
      !(request.headers.get("content-type") || "")
        .toLowerCase()
        .startsWith("application/json")
    )
      return response(415, "Please submit the contact form as JSON.");
    if (Number(request.headers.get("content-length")) > MAX_BYTES)
      return response(413, "Your message is too large. Please shorten it.");
    const key = (
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown"
    )
      .trim()
      .slice(0, 100);
    if (!allow(key))
      return response(
        429,
        "Too many attempts. Please wait 10 minutes or email us directly.",
        { "Retry-After": "600" },
      );
    let body;
    try {
      const reader = request.body?.getReader();
      if (!reader) return response(400, "Please complete the required fields.");
      let size = 0;
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > MAX_BYTES) {
          await reader.cancel();
          return response(413, "Your message is too large. Please shorten it.");
        }
        chunks.push(value);
      }
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.length;
      }
      body = JSON.parse(new TextDecoder().decode(bytes));
    } catch {
      return response(400, "The request could not be read. Please try again.");
    }
    const data = validateInquiry(
      body,
      services.map((s) => s.id),
    );
    if (!data)
      return response(
        400,
        "Please check your name, email, service, and message, then try again.",
      );
    if (!configured())
      return response(
        503,
        `Online delivery is temporarily unavailable. Please email ${recipient} or call our team. Your message has not been sent.`,
      );
    try {
      const serviceName =
        services.find((s) => s.id === data.service)?.title ||
        "General project inquiry";
      await send(data, serviceName, recipient);
      return response(
        200,
        "Thank you. Your inquiry has been sent to our team. We’ll reply using the contact details you provided.",
      );
    } catch {
      return response(
        502,
        `We couldn’t send your message. Please try again later or email ${recipient} directly.`,
      );
    }
  };
}
