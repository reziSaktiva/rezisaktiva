import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/content/contact";
import { decideContactPayload } from "@/lib/contact-mail";

export const runtime = "nodejs";

const SUBJECT = "Pesan dari situs rezisaktiva";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const decision = decideContactPayload(body);
  if (decision.kind === "drop") {
    return Response.json({ ok: true });
  }
  if (decision.kind === "invalid") {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  if (!apiKey || !from) {
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: CONTACT_EMAIL,
    replyTo: decision.email,
    subject: SUBJECT,
    text: decision.message,
  });

  if (error) {
    console.error("contact send failed");
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  return Response.json({ ok: true });
}
