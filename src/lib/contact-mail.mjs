import nodemailer from "nodemailer";
export function smtpSettings(env = process.env) {
  const port = Number(env.SMTP_PORT || 465);
  if (!env.SMTP_USER || !env.SMTP_PASS || ![465, 587].includes(port))
    return null;
  return {
    host: env.SMTP_HOST || "smtp.hostinger.com",
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}
export function buildInquiryMail(data, { sender, recipient, serviceName }) {
  const fields = [
    ["Name", data.name],
    ["Company", data.company || "Not provided"],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service", serviceName],
    ["Message", data.message],
  ];
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  return {
    from: { name: "VajraTech Labs Website", address: sender },
    to: recipient,
    replyTo: { name: data.name, address: data.email },
    subject: `Website inquiry: ${serviceName}`,
    text: fields.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
    html: `<div style="font-family:Arial,sans-serif;color:#17323f;max-width:680px"><h1 style="font-size:24px">New website inquiry</h1>${fields.map(([label, value]) => `<h2 style="font-size:13px;margin:22px 0 6px">${escape(label)}</h2><p style="white-space:pre-wrap;margin:0;line-height:1.6">${escape(value)}</p>`).join("")}<hr/><p>Reply to this email to contact the person who submitted the inquiry.</p></div>`,
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}
export async function sendInquiry(data, serviceName, recipient) {
  const settings = smtpSettings();
  if (!settings) throw new Error("SMTP_NOT_CONFIGURED");
  const transport = nodemailer.createTransport(settings);
  try {
    const result = await transport.sendMail(
      buildInquiryMail(data, {
        sender: settings.auth.user,
        recipient,
        serviceName,
      }),
    );
    if (
      !result.accepted?.some(
        (address) => String(address).toLowerCase() === recipient.toLowerCase(),
      ) ||
      result.rejected?.length
    )
      throw new Error("SMTP_RECIPIENT_REJECTED");
  } finally {
    transport.close();
  }
}
