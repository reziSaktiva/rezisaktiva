/**
 * T-085.5 - Monolith brand raster: the REZI wordmark (Archivo 900, width 125),
 * ink #020202 on paper #f8f8f8. Rendered with headless Google Chrome from a
 * vendored Archivo variable woff2 (OFL). Tokens mirror `--color-ink` /
 * `--color-paper` in `app/globals.css`.
 *
 *   node scripts/generate-brand-metadata-assets.mjs
 *   CHROME_PATH=/path/to/chrome node scripts/generate-brand-metadata-assets.mjs
 */
import { Buffer } from "node:buffer";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { inflateSync } from "node:zlib";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BRAND_DIR = path.join(ROOT, "public", "brand");
const APP_DIR = path.join(ROOT, "app");
const FONT_PATH = path.join(
  ROOT,
  "scripts",
  "vendor",
  "archivo-variable-latin.woff2",
);

const INK = "#020202";
const PAPER = "#f8f8f8";
const DEFAULT_CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

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

function findChrome() {
  const chrome = process.env.CHROME_PATH ?? DEFAULT_CHROME;
  if (!existsSync(chrome)) {
    throw new Error(
      `Google Chrome not found at "${chrome}". Install Chrome or set CHROME_PATH.`,
    );
  }
  return chrome;
}

/** Wordmark page: centered REZI at `fontPx`, optional small caption. */
function pageHtml(width, height, fontPx, caption) {
  const fontUrl = pathToFileURL(FONT_PATH).href;
  const capPx = Math.round(fontPx * 0.12);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:ArchivoLocal;src:url("${fontUrl}") format("woff2");font-weight:100 900;font-stretch:62% 125%;}
html,body{margin:0;width:${width}px;height:${height}px;background:${PAPER};overflow:hidden}
body{display:flex;flex-direction:column;align-items:center;justify-content:center;color:${INK};font-family:ArchivoLocal,sans-serif}
.w{font-weight:900;font-stretch:125%;font-variation-settings:"wdth" 125;text-transform:uppercase;font-size:${fontPx}px;line-height:1;letter-spacing:-0.02em;padding-left:0.02em}
.c{margin-top:${capPx * 2}px;font-weight:500;font-stretch:100%;font-variation-settings:"wdth" 100;font-size:${capPx}px;letter-spacing:0.18em;text-transform:uppercase}
</style></head><body><div class="w">REZI</div>${caption ? `<div class="c">${caption}</div>` : ""}</body></html>`;
}

async function render(chrome, tmp, name, width, height, fontPx, caption) {
  const html = path.join(tmp, `${name}.html`);
  const out = path.join(tmp, `${name}.png`);
  await writeFile(html, pageHtml(width, height, fontPx, caption));
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--window-size=${width},${height}`,
      `--screenshot=${out}`,
      pathToFileURL(html).href,
    ],
    { stdio: "ignore" },
  );
  return readFile(out);
}

async function main() {
  const chrome = findChrome();
  if (!existsSync(FONT_PATH)) {
    throw new Error(`Missing vendored font: ${FONT_PATH}`);
  }
  const tmp = await mkdtemp(path.join(os.tmpdir(), "brand-assets-"));
  try {
    await mkdir(BRAND_DIR, { recursive: true });
    // Wordmark at width 125 is roughly 2.6em wide; sizes keep it inside each square.
    const icon32 = await render(chrome, tmp, "i32", 32, 32, 9, "");
    const icon192 = await render(chrome, tmp, "i192", 192, 192, 54, "");
    const icon512 = await render(chrome, tmp, "i512", 512, 512, 144, "");
    const apple180 = await render(chrome, tmp, "a180", 180, 180, 50, "");
    const og = await render(chrome, tmp, "og", 1200, 630, 300, "Portfolio");
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
      "Wrote public/brand/* + app/favicon.ico + app/icon.png + app/apple-icon.png",
    );
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
