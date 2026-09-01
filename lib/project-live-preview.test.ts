import { describe, expect, it } from "vitest";
import { isHttpLivePreviewUrl } from "@/lib/project-live-preview";

describe("isHttpLivePreviewUrl", () => {
  it("accepts public https sites", () => {
    expect(isHttpLivePreviewUrl("https://www.cookitrealgood.com/")).toBe(true);
    expect(isHttpLivePreviewUrl("https://www.minerank.com/blog")).toBe(true);
  });

  it("rejects GitHub and non-http", () => {
    expect(
      isHttpLivePreviewUrl("https://github.com/reziSaktiva/curious-server"),
    ).toBe(false);
    expect(isHttpLivePreviewUrl("mailto:hi@example.com")).toBe(false);
    expect(isHttpLivePreviewUrl("not a url")).toBe(false);
  });
});
