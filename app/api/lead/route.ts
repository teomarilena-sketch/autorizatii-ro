import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
  company?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Cerere invalidă." },
      { status: 400 },
    );
  }

  // Honeypot — silently accept bots without doing anything.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const projectType = (body.projectType ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: string[] = [];
  if (name.length < 3) errors.push("Nume invalid.");
  if (!/^[+0-9()\s-]{9,}$/.test(phone)) errors.push("Telefon invalid.");
  if (!EMAIL_RE.test(email)) errors.push("Email invalid.");
  if (!projectType) errors.push("Tip proiect lipsă.");
  if (message.length < 10) errors.push("Mesaj prea scurt.");

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: errors.join(" ") },
      { status: 422 },
    );
  }

  const lead = {
    name,
    phone,
    email,
    projectType,
    message,
    receivedAt: new Date().toISOString(),
    source: "autorizatii.ro/landing",
  };

  /**
   * INTEGRARE:
   * Conectează aici serviciul dorit (unul sau mai multe):
   *  - Email transacțional: Resend / SendGrid / Postmark
   *  - CRM: HubSpot / Pipedrive / Notion
   *  - Notificări: Slack / Telegram webhook
   *
   * Exemplu (Resend):
   *   await fetch("https://api.resend.com/emails", {
   *     method: "POST",
   *     headers: {
   *       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
   *       "Content-Type": "application/json",
   *     },
   *     body: JSON.stringify({
   *       from: "lead@autorizatii.ro",
   *       to: "contact@autorizatii.ro",
   *       subject: `Lead nou — ${lead.projectType}`,
   *       text: JSON.stringify(lead, null, 2),
   *     }),
   *   });
   */
  console.log("[lead:autorizatii.ro]", lead);

  return NextResponse.json({ ok: true });
}
