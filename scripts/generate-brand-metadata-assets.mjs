/**
 * T-031.1 — raster tipografi brand (gothic-blood, tanpa wajah).
 * Font: Texturina 700 (OFL). Warna = token ship T-039.
 *
 *   node scripts/generate-brand-metadata-assets.mjs
 */
import { Buffer } from "node:buffer";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/og");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BRAND_DIR = path.join(ROOT, "public", "brand");
const APP_DIR = path.join(ROOT, "app");

/** Token gelap ship (T-039 / ADR-029). */
const CANVAS = "#0B0B0D";
const VELLUM = "#E8E4DC";
const WINE = "#6B1C23";

/** Static instance: Texturina wght 700 + opsz 72 (display/textura). OFL di vendor/. */
const FONT_PATH = path.join(
  ROOT,
  "scripts",
  "vendor",
  "texturina-display-700.ttf",
);

function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = 32;
  entry[1] = 32;
  entry[2] = 0;
  entry[3] = 0;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

async function loadFont() {
  return readFile(FONT_PATH);
}

async function renderPng(element, width, height, fonts) {
  const response = new ImageResponse(element, {
    width,
    height,
    fonts,
  });
  return Buffer.from(await response.arrayBuffer());
}

function markIcon(size) {
  const border = Math.max(1, Math.round(size * 0.04));
  const inset = Math.max(3, Math.round(size * 0.14));
  const fontSize = Math.round(size * 0.42);
  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: CANVAS,
      },
    },
    h(
      "div",
      {
        style: {
          width: size - inset * 2,
          height: size - inset * 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `${border}px solid ${WINE}`,
          color: VELLUM,
          fontFamily: "Texturina",
          fontSize,
          fontWeight: 700,
          lineHeight: 1,
        },
      },
      "R",
    ),
  );
}

function ogCard() {
  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: CANVAS,
      },
    },
    h(
      "div",
      {
        style: {
          width: 1104,
          height: 534,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${WINE}`,
          color: VELLUM,
          fontFamily: "Texturina",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        },
      },
      "rezisaktiva",
    ),
  );
}

async function main() {
  const fontData = await loadFont();
  const fonts = [
    {
      name: "Texturina",
      data: fontData,
      weight: 700,
      style: "normal",
    },
  ];

  await mkdir(BRAND_DIR, { recursive: true });

  const icon32 = await renderPng(markIcon(32), 32, 32, fonts);
  const icon192 = await renderPng(markIcon(192), 192, 192, fonts);
  const icon512 = await renderPng(markIcon(512), 512, 512, fonts);
  const apple180 = await renderPng(markIcon(180), 180, 180, fonts);
  const og = await renderPng(ogCard(), 1200, 630, fonts);
  const ico = pngToIco(icon32);

  await writeFile(path.join(BRAND_DIR, "icon-32.png"), icon32);
  await writeFile(path.join(BRAND_DIR, "icon-192.png"), icon192);
  await writeFile(path.join(BRAND_DIR, "icon-512.png"), icon512);
  await writeFile(path.join(BRAND_DIR, "apple-touch.png"), apple180);
  await writeFile(path.join(BRAND_DIR, "og.png"), og);
  await writeFile(path.join(APP_DIR, "favicon.ico"), ico);
  await writeFile(path.join(APP_DIR, "icon.png"), icon32);
  await writeFile(path.join(APP_DIR, "apple-icon.png"), apple180);

  console.log(
    "Wrote public/brand/* + app/favicon.ico + app/icon.png + app/apple-icon.png",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
