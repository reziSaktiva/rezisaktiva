/** Field honeypot. Pengunjung tidak mengisinya; bot yang mengisi dibuang. */
export const CONTACT_HONEYPOT_FIELD = "company";

export const CONTACT_MESSAGE_MAX = 4000;

const EMAIL_MAX = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactDecision =
  | { kind: "drop" }
  | { kind: "invalid" }
  | { kind: "send"; email: string; message: string };

export function decideContactPayload(body: unknown): ContactDecision {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { kind: "invalid" };
  }

  const record = body as Record<string, unknown>;
  const honeypot = readText(record[CONTACT_HONEYPOT_FIELD]);
  if (honeypot) {
    return { kind: "drop" };
  }

  const email = readText(record.email);
  const message = readText(record.message);
  if (
    !email ||
    email.length > EMAIL_MAX ||
    !EMAIL_PATTERN.test(email) ||
    !message ||
    message.length > CONTACT_MESSAGE_MAX
  ) {
    return { kind: "invalid" };
  }

  return { kind: "send", email, message };
}

function readText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}
