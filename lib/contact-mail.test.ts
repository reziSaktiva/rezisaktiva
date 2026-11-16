import { describe, expect, it } from "vitest";
import { decideContactPayload } from "@/lib/contact-mail";

const valid = {
  email: "ada@example.com",
  message: "Halo, saya ingin bicara soal proyek.",
  company: "",
};

describe("decideContactPayload", () => {
  it("accepts a trimmed email and message", () => {
    expect(
      decideContactPayload({
        ...valid,
        email: "  ada@example.com  ",
        message: "  Halo  ",
      }),
    ).toEqual({
      kind: "send",
      email: "ada@example.com",
      message: "Halo",
    });
  });

  it("drops a filled honeypot without treating it as invalid", () => {
    expect(decideContactPayload({ ...valid, company: "acme" })).toEqual({
      kind: "drop",
    });
  });

  it("rejects a missing, oversized, or malformed body", () => {
    expect(decideContactPayload(null)).toEqual({ kind: "invalid" });
    expect(decideContactPayload([])).toEqual({ kind: "invalid" });
    expect(decideContactPayload({ ...valid, email: "bukan-email" })).toEqual({
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
