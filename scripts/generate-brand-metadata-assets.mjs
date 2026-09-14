/**
 * T-031.1 — raster tipografi brand (gothic-blood, tanpa wajah).
 * Font: Texturina 700 (OFL). Warna = `lib/brand-chrome.json` (T-039).
 *
 *   node scripts/generate-brand-metadata-assets.mjs
 */
import { Buffer } from "node:buffer";
import { inflateSync } from "node:zlib";
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
const TOKEN_PATH = path.join(ROOT, "lib", "brand-chrome.json");

/** Static instance: Texturina wght 700 + opsz 72 (display/textura). OFL di vendor/. */
const FONT_PATH = path.join(
  ROOT,
  "scripts",
  "vendor",
  "texturina-display-700.ttf",
);

function paethPredictor(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) {
    return a;
  }
  if (pb <= pc) {
    return b;
  }
  return c;
}

/** Decode 8-bit RGB/RGBA PNG (keluaran ImageResponse) ke buffer RGBA. */
function decodePngRgba(png) {
  if (
    png.length < 16 ||
    png[0] !== 0x89 ||
    png[1] !== 0x50 ||
    png[2] !== 0x4e ||
    png[3] !== 0x47
  ) {
    throw new Error("not a PNG");
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idatParts = [];

  while (offset + 8 <= png.length) {
    const length = png.readUInt32BE(offset);
    const type = png.toString("ascii", offset + 4, offset + 8);
    const data = png.subarray(offset + 8, offset + 8 + length);
    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === "IDAT") {
      idatParts.push(data);
    } else if (type === "IEND") {
      break;
    }
    offset += 12 + length;
  }

  if (bitDepth !== 8 || (colorType !== 2 && colorType !== 6)) {
    throw new Error(
      `unsupported PNG (bitDepth=${bitDepth} colorType=${colorType})`,
    );
  }

  const bpp = colorType === 6 ? 4 : 3;
  const inflated = inflateSync(Buffer.concat(idatParts));
  const stride = width * bpp;
  const rgba = Buffer.alloc(width * height * 4);
  let cursor = 0;
  let prev = Buffer.alloc(stride);

  for (let y = 0; y < height; y += 1) {
    const filter = inflated[cursor];
    cursor += 1;
    const recon = Buffer.alloc(stride);
    for (let x = 0; x < stride; x += 1) {
      const sample = inflated[cursor + x];
      const a = x >= bpp ? recon[x - bpp] : 0;
      const b = prev[x];
      const c = x >= bpp ? prev[x - bpp] : 0;
      let value;
      switch (filter) {
        case 0:
          value = sample;
          break;
        case 1:
          value = (sample + a) & 255;
          break;
        case 2:
          value = (sample + b) & 255;
          break;
        case 3:
          value = (sample + ((a + b) >> 1)) & 255;
          break;
        case 4:
          value = (sample + paethPredictor(a, b, c)) & 255;
          break;
        default:
          throw new Error(`unsupported PNG filter ${filter}`);
      }
      recon[x] = value;
    }
    cursor += stride;
    prev = recon;
    for (let x = 0; x < width; x += 1) {
      const dest = (y * width + x) * 4;
      const src = x * bpp;
      rgba[dest] = recon[src];
      rgba[dest + 1] = recon[src + 1];
      rgba[dest + 2] = recon[src + 2];
      rgba[dest + 3] = bpp === 4 ? recon[src + 3] : 255;
    }
  }

  return { width, height, rgba };
}

/** ICO 32-bit BMP/DIB (bukan PNG-in-ICO) agar Windows lama tetap bisa baca. */
function rgbaToBmpIco(width, height, rgba) {
  const xorRow = width * 4;
  const andRow = Math.ceil(width / 32) * 4;
  const xorSize = xorRow * height;
  const andSize = andRow * height;
  const dib = Buffer.alloc(40 + xorSize + andSize);
  dib.writeUInt32LE(40, 0);
  dib.writeInt32LE(width, 4);
  dib.writeInt32LE(height * 2, 8);
  dib.writeUInt16LE(1, 12);
  dib.writeUInt16LE(32, 14);
  dib.writeUInt32LE(xorSize + andSize, 20);

  for (let y = 0; y < height; y += 1) {
    const srcY = height - 1 - y;
    for (let x = 0; x < width; x += 1) {
      const src = (srcY * width + x) * 4;
      const dest = 40 + y * xorRow + x * 4;
      dib[dest] = rgba[src + 2];
      dib[dest + 1] = rgba[src + 1];
      dib[dest + 2] = rgba[src];
      dib[dest + 3] = rgba[src + 3];
    }
  }

  const andOff = 40 + xorSize;
  for (let y = 0; y < height; y += 1) {
    const srcY = height - 1 - y;
    for (let x = 0; x < width; x += 1) {
      if (rgba[(srcY * width + x) * 4 + 3] < 128) {
        const bit = 7 - (x % 8);
        dib[andOff + y * andRow + (x >> 3)] |= 1 << bit;
      }
    }
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = width === 256 ? 0 : width;
  entry[1] = height === 256 ? 0 : height;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(dib.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, dib]);
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

function markIcon(size, canvas, wine, vellum) {
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
        backgroundColor: canvas,
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
          border: `${border}px solid ${wine}`,
          color: vellum,
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

function ogCard(canvas, wine, vellum) {
  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: canvas,
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
          border: `2px solid ${wine}`,
          color: vellum,
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
  const tokens = JSON.parse(await readFile(TOKEN_PATH, "utf8"));
  const { canvas, wine, vellum } = tokens;
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

  const icon32 = await renderPng(
    markIcon(32, canvas, wine, vellum),
    32,
    32,
    fonts,
  );
  const icon192 = await renderPng(
    markIcon(192, canvas, wine, vellum),
    192,
    192,
    fonts,
  );
  const icon512 = await renderPng(
    markIcon(512, canvas, wine, vellum),
    512,
    512,
    fonts,
  );
  const apple180 = await renderPng(
    markIcon(180, canvas, wine, vellum),
    180,
    180,
    fonts,
  );
  const og = await renderPng(ogCard(canvas, wine, vellum), 1200, 630, fonts);
  const decoded32 = decodePngRgba(icon32);
  const ico = rgbaToBmpIco(decoded32.width, decoded32.height, decoded32.rgba);

  await writeFile(path.join(BRAND_DIR, "icon-32.png"), icon32);
  await writeFile(path.join(BRAND_DIR, "icon-192.png"), icon192);
  await writeFile(path.join(BRAND_DIR, "icon-512.png"), icon512);
  await writeFile(path.join(BRAND_DIR, "apple-touch.png"), apple180);
  await writeFile(path.join(BRAND_DIR, "og.png"), og);
  await writeFile(path.join(APP_DIR, "favicon.ico"), ico);
  await writeFile(path.join(APP_DIR, "icon.png"), icon32);
  await writeFile(path.join(APP_DIR, "apple-icon.png"), apple180);

  console.log(
    "Wrote public/brand/* + app/favicon.ico (BMP ICO) + app/icon.png + app/apple-icon.png",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
