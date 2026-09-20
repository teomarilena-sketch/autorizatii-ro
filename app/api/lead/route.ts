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

  console.log("[lead:autorizatii.ro]", lead);

  // Notificare pe email (Brevo) — nu blocăm răspunsul către vizitator dacă
  // trimiterea eșuează; lead-ul rămâne oricum în log.
  const apiKey = process.env.BREVO_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "Autorizații.ro — Formular site", email: "contact@autorizatii.ro" },
          to: [{ email: "contactmtmconsulting@gmail.com", name: "MTM Consulting" }],
          replyTo: { email: lead.email, name: lead.name },
          subject: `Lead nou — ${lead.projectType}`,
          textContent:
            `Nume: ${lead.name}\n` +
            `Telefon: ${lead.phone}\n` +
            `Email: ${lead.email}\n` +
            `Tip proiect: ${lead.projectType}\n\n` +
            `Mesaj:\n${lead.message}\n\n` +
            `Primit: ${lead.receivedAt}`,
        }),
      });
      if (!res.ok) {
        console.error("[lead:brevo] send failed", res.status, await res.text());
      }
    } catch (err) {
      console.error("[lead:brevo] send error", err);
    }
  } else {
    console.warn("[lead:brevo] BREVO_API_KEY missing — email notification skipped");
  }

  return NextResponse.json({ ok: true });
}
