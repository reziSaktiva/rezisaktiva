/**
 * T-032.1 — capture production screenshots + computed tokens.
 * Run: node --import /tmp/pw-t032/node_modules/playwright/index.js
 * (see README.md)
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = __dirname;
const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const LOCALE = "en";

const VIEWPORTS = {
  "320": { width: 320, height: 720 },
  desktop: { width: 1440, height: 900 },
};

const TOKEN_KEYS = [
  "--color-background-surface",
  "--color-background-body",
  "--color-background-card",
  "--color-background-muted",
  "--color-text-primary",
  "--color-text-secondary",
  "--color-accent",
  "--color-on-accent",
  "--color-accent-muted",
  "--color-border",
  "--chip-bg",
  "--chip-fg",
  "--chrome-pill-bg",
  "--chrome-pill-fg",
  "--elev-3d",
  "--rz-scrollbar-track",
  "--rz-scrollbar-thumb",
];

async function collectTokens(page) {
  return page.evaluate((keys) => {
    const html = document.documentElement;
    const body = document.body;
    const from = (el, key) =>
      getComputedStyle(el).getPropertyValue(key).trim();
    const tokens = {};
    for (const key of keys) {
      tokens[key] = from(html, key) || from(body, key);
    }
    const chip = document.querySelector(".site-nav-chip, .site-locale-switch");
    const chipInline = chip
      ? {
          chromePillBg: chip.style.getPropertyValue("--chrome-pill-bg"),
          chromePillFg: chip.style.getPropertyValue("--chrome-pill-fg"),
        }
      : null;
    return {
      dataTheme: html.getAttribute("data-theme"),
      colorScheme: html.style.colorScheme || getComputedStyle(html).colorScheme,
      bodyBackground: getComputedStyle(body).backgroundColor,
      bodyColor: getComputedStyle(body).color,
      htmlBackground: getComputedStyle(html).backgroundColor,
      tokens,
      chipInline,
    };
  }, TOKEN_KEYS);
}

async function shot(page, name) {
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({ path: file, fullPage: true, animations: "disabled" });
  return file;
}

async function shotViewport(page, name) {
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({
    path: file,
    fullPage: false,
    animations: "disabled",
  });
  return file;
}

async function gotoReady(page, pathname) {
  await page.goto(`${BASE}${pathname}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
}

async function withContext(browser, theme, viewportKey, fn) {
  const viewport = VIEWPORTS[viewportKey];
  const context = await browser.newContext({
    viewport,
    reducedMotion: "reduce",
    colorScheme: "light",
    locale: "en-US",
  });
  await context.addCookies([
    {
      name: "rz-theme",
      value: theme,
      url: BASE,
    },
    {
      name: "NEXT_LOCALE",
      value: LOCALE,
      url: BASE,
    },
  ]);
  const page = await context.newPage();
  try {
    return await fn(page);
  } finally {
    await context.close();
  }
}

async function main() {
  const pwMod =
    process.env.PLAYWRIGHT_MODULE ??
    "/tmp/pw-t032/node_modules/playwright/index.mjs";
  const { chromium } = await import(pwMod);
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({
    channel: "chrome",
    headless: true,
  });
  const tokenReport = {};

  try {
    for (const theme of ["light", "dark"]) {
      for (const vp of ["320", "desktop"]) {
        const prefix = `${theme}-${vp}`;

        await withContext(browser, theme, vp, async (page) => {
          await gotoReady(page, `/${LOCALE}`);
          tokenReport[`${theme}-${vp}`] = await collectTokens(page);
          await shot(page, `${prefix}-home`);

          await gotoReady(page, `/${LOCALE}/about`);
          await shot(page, `${prefix}-about`);

          await gotoReady(page, `/${LOCALE}/projects`);
          await shot(page, `${prefix}-work`);

          await page.locator(".site-contact-button").click();
          await page.locator("#ct-panel").waitFor({ state: "visible" });
          await page.waitForTimeout(200);
          await shotViewport(page, `${prefix}-contact`);
          await page.keyboard.press("Escape");
          await page.locator("#ct-panel").waitFor({ state: "hidden" });

          await page.locator(".qi-tab").click();
          await page.locator("#qi-panel").waitFor({ state: "visible" });
          await page.waitForTimeout(200);
          await shotViewport(page, `${prefix}-quick-info`);
          await page.keyboard.press("Escape");
          await page.locator("#qi-panel").waitFor({ state: "hidden" });

          await page.locator(".home-work-tile-hit").first().click();
          await page.locator(".ps-panel").waitFor({ state: "visible" });
          await page.waitForTimeout(200);
          await shotViewport(page, `${prefix}-project-sheet`);
        });
      }
    }
  } finally {
    await browser.close();
  }

  await writeFile(
    path.join(OUT, "computed-tokens.json"),
    `${JSON.stringify(tokenReport, null, 2)}\n`,
  );
  console.log("Wrote screenshots + computed-tokens.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
