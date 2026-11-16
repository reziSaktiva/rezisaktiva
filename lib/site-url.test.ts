import { afterEach, describe, expect, it } from "vitest";
import { getSiteUrl, PRODUCTION_SITE_URL } from "./site-url";

const originalVercelEnv = process.env.VERCEL_ENV;
const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (originalVercelEnv === undefined) {
    delete process.env.VERCEL_ENV;
  } else {
    process.env.VERCEL_ENV = originalVercelEnv;
  }
  if (originalSiteUrl === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
  }
});

describe("getSiteUrl", () => {
  it("uses the public www origin on Vercel even when the env points at vercel.app or is empty", () => {
    process.env.VERCEL_ENV = "production";
    process.env.NEXT_PUBLIC_SITE_URL = "https://rezisaktiva.vercel.app";
    expect(getSiteUrl()).toBe(PRODUCTION_SITE_URL);

    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(getSiteUrl()).toBe("https://www.rezisaktiva.space");

    process.env.VERCEL_ENV = "preview";
    process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";
    expect(getSiteUrl()).toBe(PRODUCTION_SITE_URL);
  });

  it("keeps a local origin outside Vercel", () => {
    delete process.env.VERCEL_ENV;
    process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });
});
