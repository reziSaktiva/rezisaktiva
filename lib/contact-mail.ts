/**
 * Honeypot. Nama ini sengaja bukan token autofill (`company`, `name`, …)
 * supaya browser tidak mengisinya dan form mengaku terkirim.
 */
export const CONTACT_HONEYPOT_FIELD = "rz_hp";

/** Maksimal kiriman per alamat IP dalam satu jendela. */
export const CONTACT_RATE_LIMIT = 5;
export const CONTACT_RATE_WINDOW_MS = 10 * 60 * 1000;

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

/** `true` bila kiriman ini masih di dalam batas. */
export function allowContactAttempt(
  hits: Map<string, number[]>,
  key: string,
  now: number,
  limit = CONTACT_RATE_LIMIT,
  windowMs = CONTACT_RATE_WINDOW_MS,
): boolean {
  const recent = (hits.get(key) ?? []).filter(
    (stamp) => now - stamp < windowMs,
  );
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

/** IP yang dipasang platform. Jangan pakai hop pertama `x-forwarded-for` (bisa dipalsukan). */
export function contactClientKey(headers: Headers): string {
  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const last = forwarded
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .at(-1);
    if (last) {
      return last;
    }
  }
  return "unknown";
}

export type ContactHttpResult = {
  status: 200 | 400 | 503;
  body: { ok: true } | { ok: false; error: "invalid" | "unavailable" };
};

export async function handleContactPost(input: {
  body: unknown;
  apiKey: string | undefined;
  from: string | undefined;
  to: string;
  subject: string;
  send: (message: {
    apiKey: string;
    from: string;
    to: string;
    replyTo: string;
    subject: string;
    text: string;
  }) => Promise<{ error: boolean }>;
}): Promise<ContactHttpResult> {
  const decision = decideContactPayload(input.body);
  if (decision.kind === "drop") {
    return { status: 200, body: { ok: true } };
  }
  if (decision.kind === "invalid") {
    return { status: 400, body: { ok: false, error: "invalid" } };
  }

  const apiKey = input.apiKey?.trim();
  const from = input.from?.trim();
  if (!apiKey || !from) {
    return { status: 503, body: { ok: false, error: "unavailable" } };
  }

  const { error } = await input.send({
    apiKey,
    from,
    to: input.to,
    replyTo: decision.email,
    subject: input.subject,
    text: decision.message,
  });
  if (error) {
    return { status: 503, body: { ok: false, error: "unavailable" } };
  }
  return { status: 200, body: { ok: true } };
}
