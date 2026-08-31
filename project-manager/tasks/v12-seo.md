# v12 — SEO (teknis + on-page R1; off-page = ops)

File task **tersendiri**. JSON-LD schema.org = [`v11-structured-data.md`](v11-structured-data.md) **T-029** — jangan diduplikasi di sini.

Isi: memenuhi **3 pilar SEO** yang dikunci Boss Rezi (2026-08-31), **disesuaikan** dengan situs portofolio R1 (bukan toko, bukan blog, bukan bisnis lokal berkantor).

Kerangka acuan (adaptasi, bukan copy checklist e-commerce):

```
Technical SEO  →  On-Page SEO  →  Off-Page SEO
(crawl/index)      (halaman R1)     (di luar repo)
```

---

## Pemetaan 3 pilar → rezisaktiva

### A. Technical SEO — masuk task (kecuali yang sudah selesai)

| Syarat umum | Status sekarang | Di task ini? |
| ----------- | --------------- | ------------ |
| HTTPS | Sudah (`https://rezisaktiva.space`) | Tidak |
| URL deskriptif + canonical | Sudah (`/id/about`, T-017.2) | Tidak |
| `hreflang` id / en / x-default | Sudah | Tidak |
| Mobile layout | Sudah (chrome + halaman R1) | Verifikasi, bukan rebuild |
| `robots.txt` + `sitemap.xml` | **Belum** | **Ya (T-030.1)** |
| `<html lang>` sesuai locale | **Belum** — root `lang="en"` untuk `/id` juga | **Ya (T-030.1)** |
| Core Web Vitals (LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1) | **Belum diukur** | **Ukur dulu (T-030.2)**; perbaiki hanya blocker jelas, bukan rewrite motion/tema |

### B. On-Page SEO — sebagian sudah; jangan bongkar copy terkunci

| Syarat umum | Status sekarang | Di task ini? |
| ----------- | --------------- | ------------ |
| Title + meta unik per halaman/locale | Sudah (T-021.7) | **Tidak tulis ulang** (bukan rumus “kata kunci di depan” toko) |
| Satu H1 + H2/H3 hirarkis | Sudah | Verifikasi saja |
| Konten asli / pengalaman (E-E-A-T sebagai kualitas, bukan ranking factor) | Sudah (About, karya dari resume) | Tidak |
| About + Contact | About = halaman; Contact = **modal** (ADR-019) | Jangan buat `/contact` atau Privacy Policy — halaman baru = ADR |
| Alt gambar | Hero/tile `alt=""`; About alt masih teks placeholder | **Jangan** alt yang mengaku Unsplash = foto Rezi. Foto nyata = task aset terpisah |
| WebP/AVIF | `next/image` sudah transcode | Verifikasi di Network, jangan pipeline baru |
| Internal link | Nav + teaser Home → Work + footer | Cukup untuk 3 destinasi; jangan tambah halaman |

### C. Off-Page SEO — bukan kode aplikasi

| Syarat umum | Untuk rezisaktiva |
| ----------- | ----------------- |
| Backlink | Tidak di-engineer. Promosi + tautan dari profil nyata (LinkedIn/GitHub) = Boss Rezi |
| Google Business Profile / Maps | **Tidak** — bukan toko lokal + NAP. Selaras T-029: bukan `LocalBusiness` |
| Social / brand search | Satelit LinkedIn + GitHub sudah di `content/contact.ts` + footer |

Search Console (daftar properti, submit sitemap) = **ops Boss Rezi**, dicatat di T-030.4.

---

## Kontrak (wajib)

1. **Bukan T-029.** Schema/JSON-LD tidak dikerjakan di v12.
2. **Bukan copy baru.** Title/description T-021.7 tetap. Rumus 50–60 karakter + keyword di depan **ditolak** untuk R1 (brand primer, bukan listing produk).
3. **Bukan halaman baru.** Tidak ada Privacy Policy, `/contact`, blog, atau `/work/[slug]`.
4. **Sitemap dari route.** Enam URL: `/{id,en}` × Home / About / Work. Digenerate dari locale + permukaan yang sudah ada + `getSiteUrl()`, bukan daftar ditulis tangan.
5. **CWV:** ukur (PageSpeed / Lighthouse) pada URL production atau preview; catat angka. Perbaikan hanya jika ada blocker jelas di kode kita (mis. `lang`, gambar tanpa `sizes` yang sudah ada). Jangan rewrite Lenis / transisi halaman / anti-flash tema (ADR-021 `cookies()`) di task ini.
6. Perpanjangan **M7** + kontrak sitemap di `information-architecture.md` / `environment-management.md`. **Tidak perlu ADR.**

**Baca dulu:** `product-discovery/02-product/feature-modules.md` (M7), `product-scope.md`, `04-ux/information-architecture.md` (Share & Meta Hygiene poin sitemap), ADR-014, ADR-015, ADR-019, ADR-021, `lib/page-metadata.ts`, `lib/site-url.ts`, `app/layout.tsx` (`lang`), [`v11-structured-data.md`](v11-structured-data.md), [SEO starter](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Get started for developers](https://developers.google.com/search/docs/fundamentals/get-started-developers).

---

## T-030 — SEO R1 (teknis + on-page hygiene + off-page ops)

* **Status:** ⏳ Open
* **Domain:** Engineering
* **Output:** crawler Google bisa menemukan & menandai bahasa 6 URL R1; baseline CWV tercatat; langkah Search Console tertulis untuk Boss Rezi
* **Paket:** pemetaan 3 pilar di atas (2026-08-31)

### Subtasks

- [ ] **T-030.1** — Crawl: `app/sitemap.ts` (6 URL locale × permukaan) + `app/robots.ts` (izinkan indeks publik, `sitemap` mengarah ke URL sitemap). `<html lang>` di root layout mengikuti locale path (`id` / `en`), bukan hardcode `"en"`. Jangan pecah anti-flash tema (`cookies()` `rz-theme`).
- [ ] **T-030.2** — Performa: jalankan Lighthouse atau PageSpeed Insights pada Home / About / Work (satu locale cukup untuk baseline, catat mobile). Tulis LCP / INP / CLS di COMPLETE_TASK. Perbaiki **hanya** temuan teknis jelas yang tidak menabrak craft R1; jika angka sudah lolos ambang Google, jangan optimasi spekulatif.
- [ ] **T-030.3** — On-page hygiene (tanpa copy baru): pastikan satu H1 per destinasi; `next/image` tetap (WebP/AVIF lewat optimizer, cek Network); alt: jangan deskripsi yang mengklaim placeholder Unsplash sebagai foto diri. Internal link yang ada (nav, teaser, footer) jangan dirombak.
- [ ] **T-030.4** — Off-page ops (bukan PR fitur): langkah Search Console — verifikasi properti `rezisaktiva.space`, submit sitemap, cek `site:`. Ingatkan tautan kanonis di profil LinkedIn/GitHub. **Tidak** membuat Google Business Profile. Catat di COMPLETE_TASK bahwa langkah dashboard = Boss Rezi (agent tidak punya akses GSC).
