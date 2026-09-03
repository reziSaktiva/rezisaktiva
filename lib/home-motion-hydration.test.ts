import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const homeMotion = readFileSync(
  path.join(process.cwd(), "app/[locale]/_components/home-motion.tsx"),
  "utf8",
);
const rootLayout = readFileSync(
  path.join(process.cwd(), "app/layout.tsx"),
  "utf8",
);

function exportFn(source: string, name: string, nextName: string): string {
  const start = source.indexOf(`export function ${name}`);
  const end = source.indexOf(`export function ${nextName}`);
  expect(start).toBeGreaterThan(-1);
  expect(end).toBeGreaterThan(start);
  return source.slice(start, end);
}

describe("motion hydration (PR #68 review)", () => {
  it("does not branch Reveal / WordReveal / HeroWords initial on useReducedMotion", () => {
    const reveal = exportFn(homeMotion, "Reveal", "WordReveal");
    const words = exportFn(homeMotion, "WordReveal", "HeroWords");
    const hero = exportFn(homeMotion, "HeroWords", "Magnetic");

    for (const block of [reveal, words, hero]) {
      expect(block).not.toContain("useReducedMotion");
      expect(block).not.toMatch(/reduceMotion\s*\?/);
    }

    expect(reveal).toContain("initial={{ opacity: 0, y: 18 }}");
    expect(words).toContain("initial={{");
    expect(words).toContain("opacity: 0");
    expect(hero).toContain('initial={{ opacity: 0, y: "0.4em" }}');
  });

  it("skips Magnetic animate() on leave when reduced motion", () => {
    const magnetic = exportFn(homeMotion, "Magnetic", "CursorRing");
    expect(magnetic).toContain("skipMagneticPull");
    expect(magnetic).toMatch(/const onLeave = \(\) => \{\s*if \(skipMagneticPull\(\)\)/);
  });
});

describe("root layout hydration warning", () => {
  it("suppresses only on html (theme script), not body", () => {
    expect(rootLayout).toMatch(/<html[\s\S]*suppressHydrationWarning/);
    expect(rootLayout).not.toMatch(/<body\s+suppressHydrationWarning/);
  });
});
