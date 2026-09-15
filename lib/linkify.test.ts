import { describe, expect, it } from "vitest";
import { catalogLiveUrls, linkifyParts, liveHostLabel } from "./linkify";

describe("linkifyParts", () => {
  it("splits a bullet that ends with a live URL", () => {
    expect(linkifyParts("Live: https://smc.auction")).toEqual([
      { type: "text", value: "Live: " },
      {
        type: "url",
        href: "https://smc.auction",
        value: "https://smc.auction",
      },
    ]);
  });

  it("keeps trailing punctuation off the href", () => {
    expect(linkifyParts("See https://example.com.")).toEqual([
      { type: "text", value: "See " },
      {
        type: "url",
        href: "https://example.com",
        value: "https://example.com",
      },
      { type: "text", value: "." },
    ]);
  });
});

describe("liveHostLabel", () => {
  it("drops www", () => {
    expect(liveHostLabel("https://www.minerank.com/blog")).toBe("minerank.com");
    expect(liveHostLabel("https://smc.auction")).toBe("smc.auction");
  });
});

describe("catalogLiveUrls", () => {
  it("normalizes string, array, and empty values", () => {
    expect(catalogLiveUrls("https://a.example")).toEqual(["https://a.example"]);
    expect(catalogLiveUrls(["https://a.example", "https://b.example"])).toEqual(
      ["https://a.example", "https://b.example"],
    );
    expect(catalogLiveUrls(null)).toEqual([]);
  });
});
