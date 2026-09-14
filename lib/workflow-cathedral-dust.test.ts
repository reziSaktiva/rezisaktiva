import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const globalsCss = readFileSync(
  path.join(process.cwd(), "app/globals.css"),
  "utf8",
);

const firstBlock = (selector: string) => {
  const match = globalsCss.match(
    new RegExp(`${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} \\{[^}]+\\}`),
  );
  expect(match).not.toBeNull();
  return match![0];
};

describe("cathedral dust vs footer (T-054.4 / PR #73)", () => {
  it("isolates motes against canvas so plus-lighter cannot punch through", () => {
    const dust = firstBlock(".wf-cathedral-dust");
    expect(dust.includes("isolation: isolate")).toBe(true);
    expect(dust.includes("background-color: var(--color-background-body)")).toBe(
      true,
    );
    expect(dust.includes("mix-blend-mode")).toBe(false);
    expect(globalsCss.includes(".wf-cathedral-dust-svg")).toBe(true);
    expect(globalsCss.includes("mix-blend-mode: plus-lighter")).toBe(true);
  });

  it("keeps the default Contact band 1400px; full-bleed only with dust mounted", () => {
    const footer = firstBlock(".site-footer");
    expect(footer.includes("z-index: 1")).toBe(true);
    expect(footer.includes("max-width: 1400px")).toBe(true);
    expect(footer.includes("z-index: 2")).toBe(false);
    expect(
      globalsCss.includes("body:has(.wf-cathedral-dust) .site-footer"),
    ).toBe(true);
    expect(
      globalsCss.includes("body:has(.wf-cathedral-dust) .site-footer-inner"),
    ).toBe(true);
  });

  it("pauses dust under overlay lock and drops motion when reduced", () => {
    expect(globalsCss.includes("html.ct-lock .wf-cathedral-mote")).toBe(true);
    expect(globalsCss.includes("html.qi-lock .wf-cathedral-mote")).toBe(true);
    expect(
      globalsCss.includes(
        "@media (prefers-reduced-motion: reduce) {\n  .wf-cathedral-mote,",
      ),
    ).toBe(true);
  });
});
