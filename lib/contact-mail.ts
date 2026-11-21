import {
  CONTACT_COPY,
  CONTACT_NEED_IDS,
  type ContactNeedId,
} from "@/content/contact";

/**
 * Honeypot. This field name is deliberately not an autofill token (`company`, `name`, …)
 * so browsers do not fill it and the form falsely reports as sent.
 */
export const CONTACT_HONEYPOT_FIELD = "rz_hp";

/**
 * Resend inbox subject for Contact form mail (ADR-047).
 * Kept Indonesian so Boss Rezi can sort/filter the operational inbox; visitor-facing
 * locale copy stays bilingual in `content/`.
 */
export const CONTACT_EMAIL_SUBJECT = "Pesan dari situs rezisaktiva";

/** Maximum submissions per IP address within one window. */
export const CONTACT_RATE_LIMIT = 5;
export const CONTACT_RATE_WINDOW_MS = 10 * 60 * 1000;

export const CONTACT_MESSAGE_MAX = 4000;
export const CONTACT_NAME_MAX = 120;
export const CONTACT_COMPANY_MAX = 200;

export const CONTACT_EMAIL_MAX = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Same email rule on the client form and the server (T-083.2). */
export function isContactEmail(value: string): boolean {
  return (
    value.length > 0 &&
    value.length <= CONTACT_EMAIL_MAX &&
    EMAIL_PATTERN.test(value)
  );
}

export function isContactNeed(value: string): value is ContactNeedId {
  return (CONTACT_NEED_IDS as readonly string[]).includes(value);
}

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  need: ContactNeedId;
  message: string;
};

export type ContactDecision =
  | { kind: "drop" }
  | { kind: "invalid" }
  | ({ kind: "send" } & ContactSubmission);

/** Server validation for the Contact page form (T-083.2, ADR-047). */
export function decideContactPayload(body: unknown): ContactDecision {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { kind: "invalid" };
  }

  const record = body as Record<string, unknown>;
  const honeypot = readText(record[CONTACT_HONEYPOT_FIELD]);
  if (honeypot) {
    return { kind: "drop" };
  }

  const name = readText(record.name);
  const email = readText(record.email);
  const company = readText(record.company);
  const need = readText(record.need);
  const message = readText(record.message);
  if (
    !name ||
    name.length > CONTACT_NAME_MAX ||
    !isContactEmail(email) ||
    company.length > CONTACT_COMPANY_MAX ||
    !isContactNeed(need) ||
    !message ||
    message.length > CONTACT_MESSAGE_MAX
  ) {
    return { kind: "invalid" };
  }

  return { kind: "send", name, email, company, need, message };
}

/**
 * Plain-text body for the inbox. Labels stay Indonesian, like the subject,
 * so Boss Rezi can scan the operational inbox (ADR-047).
 */
export function contactMailText(submission: ContactSubmission): string {
  const needs = CONTACT_COPY.id.needs;
  return [
    `Nama: ${submission.name}`,
    `Email: ${submission.email}`,
    `Perusahaan/situs: ${submission.company || "-"}`,
    `Kebutuhan: ${needs[submission.need]}`,
    "",
    submission.message,
  ].join("\n");
}

function readText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** `true` when this submission is still within the limit. */
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

/** Platform-assigned IP. Do not use the first `x-forwarded-for` hop (can be spoofed). */
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
    text: contactMailText(decision),
  });
  if (error) {
    return { status: 503, body: { ok: false, error: "unavailable" } };
  }
  return { status: 200, body: { ok: true } };
}