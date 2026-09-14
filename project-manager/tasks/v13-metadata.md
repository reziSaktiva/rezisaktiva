# v13 — Metadata API (ikon, media, identitas head)

File task **tersendiri**. Title/description/canonical/hreflang sudah **T-017.2** + copy **T-021.7**. JSON-LD = [`v11-structured-data.md`](v11-structured-data.md) **T-029**. Sitemap/`robots.txt`/`html lang` = [`v12-seo.md`](v12-seo.md) **T-030**. Jangan diduplikasi di sini.

Isi: melengkapi [`generateMetadata` / `Metadata`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) + [file-based metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) agar share/tab/PWA ringan punya ikon dan gambar, bukan hanya teks.

Bukan halaman baru. Bukan rewrite title “kata kunci di depan”. Bukan Unsplash sebagai `og:image` / ikon (selaras T-029: jangan markup gambar placeholder).

**Paket dikunci Boss Rezi (2026-08-31):** identitas head + icons + media share.

**Antrian (2026-09-09):** **T-043** ✅. **T-031** kembali antrian (ikon/OG/`themeColor` ikut kulit gothic-blood). Token T-039 sudah.

**Antrian lama (2026-09-01):** migrasi shadcn **T-032…T-037 diutamakan**. **T-037 Done (2026-09-03)** — T-031 boleh dikerjakan *setelah* token baru, bukan sebelum.

---

## Yang sudah ada (jangan diulang)

| Field Next.js | Status |
| ------------- | ------ |
| `metadataBase` | Root `app/layout.tsx` |
| `title` / `description` | `content/site-meta.ts` via `lib/page-metadata.ts` + `generateMetadata` Home/About/Work |
| `alternates.canonical` + `languages` (hreflang) | T-017.2 |
| `openGraph` teks (`title`, `description`, `url`, `siteName`, `locale`, `type: website`) | T-017.2 |
| `twitter.card` + title/description (`summary_large_image`) | T-017.2; **gambar** T-031.3 (`pageMetadata` → `/brand/og.png`) |
| Favicon | `app/favicon.ico` + `app/icon.png` + `app/apple-icon.png` (T-031.1–T-031.2); sumber raster `public/brand/` |
| Share image | `public/brand/og.png` via `lib/page-metadata.ts` (T-031.3); satu kartu semua destinasi R1 |
| Identitas / robots | `applicationName`, authors/creator/publisher, `robots` index/follow, `formatDetection` (T-031.4) |
| theme-color | `viewport.themeColor` kanvas gelap; tidak baca cookie (ADR-021) |

---

## Paket yang masuk task (terkunci)

| Area | Cara | Isi |
| ---- | ---- | --- |
| **Icons** | File-based di `app/` (`icon`, `apple-icon`) dan/atau `metadata.icons` | Favicon multi-size + Apple touch. Sumber = aset brand **rezisaktiva**, bukan `public/next.svg` / globe scaffold |
| **Media (openGraph.images + twitter.images)** | File-based `opengraph-image` / `twitter-image` **atau** path di `pageMetadata` ke file di `public/` / `app/` | Satu kartu share situs (≈1200×630). Boleh sama untuk semua destinasi R1. Bukan foto Unsplash About |
| **Identitas** | `generateMetadata` / `metadata` root atau `pageMetadata` | `applicationName` = brand; `authors` / `creator` / `publisher` dari `content/person.ts` (`PERSON.name`) + URL About; `formatDetection` (matikan auto-link telepon/alamat yang tidak ada) |
| **Robots meta** | `metadata.robots` | Izinkan index/follow publik — selaras `app/robots.ts`, bukan `noindex` |
| **Manifest** | `app/manifest.ts` (ringan) | `name` / `short_name` / `icons` / `display` — **bukan** service worker / install-prompt PWA penuh |
| **Viewport** | `generateViewport` jika perlu `themeColor` | Selaras token tema; **jangan** pecah `cookies()` anti-flash (ADR-021) |

**Di luar paket (jangan ditambah di task ini):**

- `keywords` stuffing, `generator: Next.js`
- `itunes`, Facebook app id, Pinterest, `verification` token di repo (GSC tetap ops T-030.4)
- `openGraph.videos` / `audio`, pagination `archives`
- OG image per-karya atau `/work/[slug]` (R2)
- Klaim foto diri di kartu share selama foto halaman masih Unsplash

**Aset (2026-09-14, T-031.1):** tipografi brand dikunci chat (bukan file dari Boss Rezi, bukan Unsplash). Path: `public/brand/` + `app/favicon.ico` / `icon.png` / `apple-icon.png`. Regenerasi: `node scripts/generate-brand-metadata-assets.mjs`.

**Tidak perlu ADR** — perpanjangan M7. ADR hanya jika nanti PWA terpasang (SW, offline).

**Baca dulu:** `lib/page-metadata.ts`, `app/layout.tsx`, `content/person.ts`, `content/site-meta.ts`, T-017 di [`v03-development-r1.md`](v03-development-r1.md), [`v11-structured-data.md`](v11-structured-data.md) (foto), ADR-021, [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), [file-based metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata).

---

## T-031 — Lengkapi Metadata API (ikon + media + identitas)

* **Status:** ⏳ Open — **T-031.1–T-031.4** ✅; berikutnya **T-031.5**
* **Domain:** Engineering
* **Output:** head R1 punya ikon brand, kartu share, authors/applicationName; title/description T-021.7 tidak ditulis ulang
* **Keputusan paket:** tabel di atas (2026-08-31)

### Subtasks

- [x] **T-031.1** — Aset: taruh ikon + kartu OG/Twitter (bukan scaffold Next, bukan Unsplash). Ganti `app/favicon.ico` default. Catat path di COMPLETE_TASK.
- [x] **T-031.2** — Icons + manifest: file-based `app/icon` / `apple-icon` (dan `manifest.ts` ringan). Pastikan tab browser dan Apple touch memakai aset T-031.1.
- [x] **T-031.3** — Media: `openGraph.images` + `twitter.images` (file-based atau `pageMetadata`). Satu kartu situs cukup; `summary_large_image` tetap. Jangan duplikasi title/description.
- [x] **T-031.4** — Identitas + robots meta: `applicationName`, `authors`/`creator`/`publisher` dari `PERSON`, `metadata.robots` index/follow, `formatDetection`. Tetap `generateMetadata` di page server. Opsional `generateViewport` `themeColor` tanpa merusak cookie tema.
- [ ] **T-031.5** — Verifikasi: View Source / head Home+About+Work (satu locale cukup) — ada `og:image`, `link rel="icon"`, Apple icon; title T-021.7 tidak berubah. Catat di COMPLETE_TASK.
