import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/content/contact";
import {
  allowContactAttempt,
  CONTACT_EMAIL_SUBJECT,
  contactClientKey,
  handleContactPost,
} from "@/lib/contact-mail";

export const runtime = "nodejs";

const contactHits = new Map<string, number[]>();

export async function POST(request: Request) {
  const clientKey = contactClientKey(request.headers);
  if (!allowContactAttempt(contactHits, clientKey, Date.now())) {
    return Response.json({ ok: false, error: "unavailable" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const result = await handleContactPost({
    body,
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.RESEND_FROM,
    to: CONTACT_EMAIL,
    subject: CONTACT_EMAIL_SUBJECT,
    send: async (message) => {
      const resend = new Resend(message.apiKey);
      const { error } = await resend.emails.send({
        from: message.from,
        to: message.to,
        replyTo: message.replyTo,
        subject: message.subject,
        text: message.text,
      });
      if (error) {
        console.error("contact send failed");
      }
      return { error: Boolean(error) };
    },
  });

  return Response.json(result.body, { status: result.status });
}
