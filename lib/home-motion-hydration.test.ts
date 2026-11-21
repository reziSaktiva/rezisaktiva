import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const componentsDir = path.join(process.cwd(), "app/[locale]/_components");

const homeMotion = readFileSync(
  path.join(componentsDir, "home-motion.tsx"),
  "utf8",
);
const rootLayout = readFileSync(
  path.join(process.cwd(), "app/layout.tsx"),
  "utf8",
);

function exportFn(source: string, name: string): string {
  const start = source.indexOf(`export function ${name}`);
  expect(start).toBeGreaterThan(-1);
  return source.slice(start);
}

describe("motion hydration (PR #68 review)", () => {
  it("skips Magnetic animate() on leave when reduced motion", () => {
    const magnetic = exportFn(homeMotion, "Magnetic");
    expect(magnetic).toContain("skipMagneticPull");
    expect(magnetic).toMatch(
      /const onLeave = \(\) => \{\s*if \(skipMagneticPull\(\)\)/,
    );
  });
});

describe("root layout hydration warning", () => {
  it("suppresses only on html (theme script), not body", () => {
    expect(rootLayout).toMatch(/<html[\s\S]*suppressHydrationWarning/);
    expect(rootLayout).not.toMatch(/<body\s+suppressHydrationWarning/);
  });
});
