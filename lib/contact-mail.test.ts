import { describe, expect, it, vi } from "vitest";
import {
  allowContactAttempt,
  CONTACT_EMAIL_SUBJECT,
  CONTACT_HONEYPOT_FIELD,
  CONTACT_RATE_LIMIT,
  contactClientKey,
  contactMailText,
  decideContactPayload,
  handleContactPost,
} from "@/lib/contact-mail";

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "",
  need: "build",
  message: "Halo, saya ingin bicara soal proyek.",
  [CONTACT_HONEYPOT_FIELD]: "",
};

describe("decideContactPayload", () => {
  it("accepts trimmed fields and an empty optional company", () => {
    expect(
      decideContactPayload({
        ...valid,
        name: "  Ada  ",
        email: "  ada@example.com  ",
        company: "  ",
        message: "  Halo  ",
      }),
    ).toEqual({
      kind: "send",
      name: "Ada",
      email: "ada@example.com",
      company: "",
      need: "build",
      message: "Halo",
    });
  });

  it("accepts a payload without the optional company field", () => {
    const rest: Record<string, unknown> = { ...valid };
    delete rest.company;
    expect(decideContactPayload(rest)).toMatchObject({ kind: "send" });
  });

  it("rejects a missing name, an unknown need, or an oversized company", () => {
    expect(decideContactPayload({ ...valid, name: " " })).toEqual({
      kind: "invalid",
    });
    expect(decideContactPayload({ ...valid, need: "hire" })).toEqual({
      kind: "invalid",
    });
    expect(decideContactPayload({ ...valid, need: undefined })).toEqual({
      kind: "invalid",
    });
    expect(
      decideContactPayload({ ...valid, company: "a".repeat(201) }),
    ).toEqual({ kind: "invalid" });
  });

  it("drops a filled honeypot without treating it as invalid", () => {
    expect(
      decideContactPayload({ ...valid, [CONTACT_HONEYPOT_FIELD]: "acme" }),
    ).toEqual({
      kind: "drop",
    });
  });

  it("rejects a missing, oversized, or malformed body", () => {
    expect(decideContactPayload(null)).toEqual({ kind: "invalid" });
    expect(decideContactPayload([])).toEqual({ kind: "invalid" });
    expect(decideContactPayload({ ...valid, email: "not-an-email" })).toEqual({
      kind: "invalid",
    });
    expect(decideContactPayload({ ...valid, message: "   " })).toEqual({
      kind: "invalid",
    });
    expect(
      decideContactPayload({ ...valid, message: "a".repeat(4001) }),
    ).toEqual({ kind: "invalid" });
  });
});

describe("allowContactAttempt", () => {
  it("blocks the next attempt after the limit in the same window", () => {
    const hits = new Map<string, number[]>();
    for (let i = 0; i < CONTACT_RATE_LIMIT; i += 1) {
      expect(allowContactAttempt(hits, "203.0.113.8", 1_000)).toBe(true);
    }
    expect(allowContactAttempt(hits, "203.0.113.8", 1_000)).toBe(false);
    expect(allowContactAttempt(hits, "203.0.113.9", 1_000)).toBe(true);
  });
});

describe("contactClientKey", () => {
  it("prefers x-real-ip over a spoofed forwarded hop", () => {
    const headers = new Headers({
      "x-real-ip": "203.0.113.8",
      "x-forwarded-for": "1.2.3.4, 203.0.113.8",
    });
    expect(contactClientKey(headers)).toBe("203.0.113.8");
  });
});

describe("CONTACT_EMAIL_SUBJECT", () => {
  it("keeps the production Resend subject Indonesian for inbox sorting", () => {
    expect(CONTACT_EMAIL_SUBJECT).toBe("Pesan dari situs rezisaktiva");
  });
});

describe("handleContactPost", () => {
  const base = {
    to: "inbox@example.com",
    subject: CONTACT_EMAIL_SUBJECT,
  };

  it("accepts a honeypot hit without sending", async () => {
    const send = vi.fn();
    const result = await handleContactPost({
      ...base,
      body: { ...valid, [CONTACT_HONEYPOT_FIELD]: "filled" },
      apiKey: "key",
      from: "hello@rezisaktiva.space",
      send,
    });
    expect(result).toEqual({ status: 200, body: { ok: true } });
    expect(send).not.toHaveBeenCalled();
  });

  it("refuses to send when the secret or from address is missing", async () => {
    const send = vi.fn();
    const result = await handleContactPost({
      ...base,
      body: valid,
      apiKey: "  ",
      from: "hello@rezisaktiva.space",
      send,
    });
    expect(result).toEqual({
      status: 503,
      body: { ok: false, error: "unavailable" },
    });
    expect(send).not.toHaveBeenCalled();
  });

  it("reports failure when the mail provider rejects the message", async () => {
    const send = vi.fn().mockResolvedValue({ error: true });
    const result = await handleContactPost({
      ...base,
      body: valid,
      apiKey: "key",
      from: "hello@rezisaktiva.space",
      send,
    });
    expect(result.status).toBe(503);
    expect(send).toHaveBeenCalledOnce();
  });

  it("sends the visitor address as reply-to and the message as text", async () => {
    const send = vi.fn().mockResolvedValue({ error: false });
    const result = await handleContactPost({
      ...base,
      body: valid,
      apiKey: "key",
      from: "hello@rezisaktiva.space",
      send,
    });
    expect(result).toEqual({ status: 200, body: { ok: true } });
    expect(send).toHaveBeenCalledWith({
      apiKey: "key",
      from: "hello@rezisaktiva.space",
      to: "inbox@example.com",
      replyTo: "ada@example.com",
      subject: CONTACT_EMAIL_SUBJECT,
      text: contactMailText({
        name: valid.name,
        email: valid.email,
        company: "",
        need: "build",
        message: valid.message,
      }),
    });
  });
});

describe("contactMailText", () => {
  it("lists every field with Indonesian labels, then the message", () => {
    expect(
      contactMailText({
        name: "Ada",
        email: "ada@example.com",
        company: "Analytical Engines",
        need: "ai",
        message: "Halo",
      }),
    ).toBe(
      [
        "Nama: Ada",
        "Email: ada@example.com",
        "Perusahaan/situs: Analytical Engines",
        "Kebutuhan: AI dan orkestrasi",
        "",
        "Halo",
      ].join("\n"),
    );
  });

  it("marks an empty company with a dash", () => {
    expect(
      contactMailText({
        name: "Ada",
        email: "ada@example.com",
        company: "",
        need: "other",
        message: "Halo",
      }),
    ).toContain("Perusahaan/situs: -");
  });
});
