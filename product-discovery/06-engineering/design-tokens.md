# Design Tokens

> Status: **Baseline v1.1** — ditetapkan bersama Boss Rezi (2026-08-11; diperbarui 2026-08-13 via **ADR-018**; toggle UI Must R1 via **ADR-021**, 2026-08-16). Nilai visual **boleh diiterasi** saat desain/bootstrap; kontrak token saat ini = **Astryx (component library + StyleX + theme CSS)**, light default, dark fondasi via prop `mode`. Perubahan material struktur/tema memerlukan ADR baru.

Dokumen ini mendefinisikan sistem token & mapping implementasi untuk website portofolio **rezisaktiva**.

---

# Overview

R1 memakai **Astryx** (ADR-018, menggantikan Tailwind + CSS variables murni yang dikunci sebelumnya di ADR-016/T-009):

* **`@astryxdesign/core`** (komponen) + **`@stylexjs/stylex`** (styling engine) + **`@astryxdesign/theme-neutral`** (theme CSS) sebagai sumber token
* **Light** = tema default yang di-ship (`<Theme mode="light">`)
* Dark tersedia via prop `mode` (`'light' | 'dark' | 'system'`) pada komponen `Theme` — fondasi sudah ada dari awal
* **Toggle dark mode di UI = Must R1** (**ADR-021**) — default ship tetap light; preferensi user disimpan setelah pilih
* Kustomisasi warna brand/accent lewat `astryx theme` / `astryx theme add`, bukan override manual `--color-*` di `:root`

Selaras UX: clarity first, lean surface, motion hanya jika memperkuat hierarchy (UX1, UX3, Interaction §6).

Nilai hex/font di bawah = **arah awal**, bukan brand kit final yang kaku.

---

# Tujuan

* Satu kontrak token sebelum bootstrap UI
* Hindari hardcode warna tersebar di komponen
* Siapkan dark tanpa memaksa polish dual-theme di MVP
* Hormati a11y kontras (lihat `04-ux/ux-principles.md`)

---

# Typography

| Token | Arah R1 | Catatan |
| ----- | ------- | ------- |
| `--font-display` | Satu family ekspresif untuk brand / heading hero | Hindari Inter / Roboto / Arial / system-only sebagai identity |
| `--font-sans` | Family readable untuk body & UI | Boleh berdekatan dengan display atau pasangan yang sengaja |
| `--font-mono` | Opsional, tipis | Hanya jika ada snippet/kode di About — bukan Must |

Skala tipe (arah):

| Step | Penggunaan |
| ---- | ---------- |
| `text-xs`–`sm` | Meta, footer, caption |
| `text-base` | Body |
| `text-lg`–`xl` | Subhead / supporting |
| `text-2xl`–`4xl` (+ display) | Heading / hero brand |

Detail ukuran final + `line-height` dikunci saat implementasi; hierarki heading tetap logis per halaman (a11y UX).

---

# Color — Brand

Arah: **ink gelap + aksen tunggal yang tenang** — bukan purple-gradient generik, bukan cream + terracotta klise.

| Token | Light (default) | Dark (disiapkan) | Peran |
| ----- | --------------- | ---------------- | ----- |
| `--color-brand` | Ink / near-black (mis. `#0B1220`) | Tint lebih lembut di atas surface gelap | Brand mark, heading kuat |
| `--color-accent` | Satu aksen (mis. teal dalam `#0F766E` atau setara) | Versi lebih terang untuk kontras | CTA lembut, fokus, underline aktif |
| `--color-accent-muted` | Aksen pudar untuk hover/bg tipis | Disesuaikan | State sekunder |

Pilih **satu** aksen; jangan rainbow satelit LinkedIn/GitHub vs Email (Email tetap primer visual — ADR-014).

---

# Color — Neutral

| Token | Light | Dark (disiapkan) | Peran |
| ----- | ----- | ---------------- | ----- |
| `--color-bg` | Off-white hangat-netral *atau* cool gray sangat muda — hindari flat `#FFF` polos tanpa depth | Surface gelap (bukan pure `#000` wajib) | Latar halaman |
| `--color-bg-elevated` | Sedikit beda dari `bg` untuk section | Sedikit lebih terang dari `bg` dark | Section / teaser |
| `--color-fg` | Ink primer | Near-white soft | Teks utama |
| `--color-fg-muted` | Abu untuk supporting | Abu terang | Meta, supporting |
| `--color-border` | Hairline lembut | Border gelap lembut | Pemisah lean (bukan card-heavy) |
| Native scrollbar (T-025.9) | Track muted `#e4dfd1`, thumb kuning chip `--chip-bg` (`#fde047`) | Track `#121a2b`, thumb kuning chip yang sama | Dokumen `html` di `app/globals.css`. Thin + pill. Track tetap muted; thumb = `.site-nav-chip`. Jangan disembunyikan (T-025.8). |

---

# Color — Feedback

R1 hampir tanpa form/error inline. Token minimal:

| Token | Peran |
| ----- | ----- |
| `--color-focus` | Ring fokus keyboard (boleh = accent) |
| `--color-danger` | Cadangan; jarang dipakai R1 |
| `--color-success` | Cadangan; jarang dipakai R1 |

Jangan bangun design system feedback lengkap sebelum ada UI yang membutuhkannya.

---

# Spacing, Radius, Elevation

| Domain | Keputusan R1 |
| ------ | ------------ |
| Spacing | Skala token Astryx berbasis 4px cukup; konsisten ritme section |
| Radius | Sedang untuk teaser/kontrol bila perlu; **hindari** card-heavy & `rounded-full` pill cluster di hero |
| Elevation | Halaman/kartu: shadow minimal; hierarki lewat tipe & spasi, bukan glow. **Kontrol chrome + seluruh Button:** timbul 3D (`--elev-3d` di `app/globals.css`) — bevel highlight + bibir + drop shadow |
| Layout | First viewport = satu komposisi (brand, headline, supporting, CTA, visual) — selaras key screens. **Lantai viewport 320px**; chrome mobile satu baris. Detail komposisi = kode produksi (ADR-024) + `04-ux/key-screen-patterns.md` / `navigation-patterns.md` |

Anti-pattern visual: dashboard clutter, badge overlay di hero, grid card berlebihan.

---

# Tema (Light / Dark)

| Aspek | R1 |
| ----- | --- |
| Default ship | **Light** |
| Token dark | **Ya** — resolved lewat prop `mode` di komponen `Theme` (`@astryxdesign/core/theme`), bukan class `.dark` manual |
| Strategi | Astryx `Theme` + tema built `rezisaktiva` (`lib/astryx-theme.ts`, extends `neutralTheme`); `mode="dark"` (atau `"system"`) tanpa ganti arsitektur |
| Toggle di chrome | **Must R1** (**ADR-021**) — kontrol UI wajib di chrome; default ship tetap light |
| `prefers-color-scheme` | Boleh sebagai Could setelah token dark stabil; jangan mengganti default light tanpa keputusan Boss Rezi |

Toggle UI sudah Must (ADR-021). Menjadikan **dark sebagai default ship** atau **QA kontras dual-theme penuh** sebagai syarat exit tetap perlu keputusan/ADR terpisah — fondasi token `mode` tidak berubah.

---

# Motion

> Diperbarui **ADR-017** (2026-08-12): motion naik peran menjadi **bagian identitas visual R1**, bukan sekadar Could minimal — dengan clarity tetap prioritas tertinggi.
>
> Diperbarui **ADR-025** (2026-08-24): kadar craft naik (Hess/Mazur: ritme + gerak, bukan palet). Lenis + transisi halaman diizinkan sebagai lapisan custom. Ritme transisi halaman memakai token khusus (`--duration-page-exit` / `--duration-page-enter` / `--delay-page-enter` / `--ease-page-transition`) — bukan `--duration-medium` (terlalu pendek untuk efek Hess).

| Tingkat | R1 |
| ------- | --- |
| Must | Tidak ada motion yang mengorbankan clarity first viewport (UX1) |
| Signature | Motion jadi bagian identitas: scroll-triggered reveal, cursor-aware micro-interaction, easing/timing halus di hero, hover CTA/teaser, transisi locale switch — inspirasi teknik gerak dari p5aholic.me (bukan struktur playground-nya). **Plus (ADR-025):** smooth-scroll inertia (Lenis, window scroll; bukan `scroll-behavior: smooth` native); transisi halaman Hess (exit 1s scale+naik, enter 0.4s dari bawah setelah 0.4s, easing `.65,0,.43,1`); pola rest = judul, active = body |
| Pause | Lenis **berhenti** saat Contact modal (`html.ct-lock`) atau Quick Info (`html.qi-lock`) terbuka, supaya overlay tidak bergeser bersama inersia |
| Reduced motion | `prefers-reduced-motion: reduce` → Lenis off; transisi halaman instan (tanpa overlay); playable yang sudah ada tetap hormati media query yang sama |
| Jangan | Parallax berat, loop noise, animasi yang mengorbankan clarity, motion yang menggantikan pesan alih-alih memperkuatnya; overlay transisi yang tetap `pointer-events: auto` setelah selesai |

Hormati `prefers-reduced-motion`. Astryx tidak menyediakan komponen Lenis/page wipe — hook `useEntryAnimation` / `useContainerReveal` tetap untuk mount/hover, bukan pengganti scroll inertia.

---

# Mapping implementasi

```text
lib/astryx-theme.ts (defineTheme, extends theme-neutral)
        ↓
astryx theme build → theme/astryx-theme.css + theme/rezisaktiva.js
        ↓
Theme component (mode: light/dark) — ThemeModeProvider
        ↓
Komponen @astryxdesign/core (props semantik: color, type, level, dst)
        ↓
xstyle (StyleX) untuk override spesifik-komponen bila perlu
```

| Lapisan | Isi |
| ------- | --- |
| Sumber kebenaran token | Tema built `rezisaktiva` (`theme/astryx-theme.css` + `theme/rezisaktiva.js`) — **ADR-024**; nilai kanvas/aksen R1 *berasal* dari arsip `design-mockups/shared.css` `--c-*` |
| Komponen | `@astryxdesign/core/*` — props semantik, bukan hardcode hex/px |
| Override lokal | `xstyle` (StyleX `stylex.create()`); dilarang `style={{}}` inline atau hex/px acak |
| Konten MD/MDX | Tidak menyimpan hex brand; styling lewat komponen |
| Kustomisasi brand | `pnpm theme:build` dari `lib/astryx-theme.ts` — bukan override `--color-*` manual di `:root` |
| Agent docs | `.cursor/rules/xds.mdc` (konvensi wajib AI saat menulis komponen) |
| Figma / design file | Opsional Later — docs ini cukup untuk bootstrap R1 |

Nilai hex kanvas/aksen R1 dikunci di tema built (asal historis: mockup `shared.css`, KI-001 / KI-002). Perubahan token berikutnya di `lib/astryx-theme.ts`, bukan di mockup. Rebuild: `pnpm theme:build`.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Styling | **Astryx (`@astryxdesign/core` + StyleX) + theme CSS** — menggantikan Tailwind + CSS variables (ADR-018) |
| Theme awal | `@astryxdesign/theme-neutral`, di-extend jadi tema built `rezisaktiva` (nilai mockup) |
| Tema default | **Light** |
| Dark | Fondasi via prop `mode` di `Theme`; toggle UI = **Must R1 (ADR-021)**; default tetap light |
| Nilai visual | Kanvas + aksen di tema built `rezisaktiva` (asal R1: arsip `shared.css`; SoT hidup = kode tema, ADR-024) |
| Motion | Bagian identitas visual (ADR-017), hierarchy-first; Lenis + page overlay (ADR-025) |
| Native scrollbar | Tema `rezisaktiva` (T-025.9) — `--rz-scrollbar-*` di `app/globals.css`, bukan `--color-*` di `:root` |
| Baseline Engineering | ADR-016; superseded sebagian oleh **ADR-018** (styling/token) |

---

# Success Criteria

1. Komponen tidak menghambur hex yang tidak ter-tokenisasi
2. Light default jelas; menambah toggle dark tidak memaksa rewrite token
3. Visual mendukung clarity & soft Contact — bukan template ungu generik

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `../04-ux/ux-principles.md` — clarity, a11y, motion
* `../04-ux/key-screen-patterns.md` — blok S0–S3
* `monorepo-setup.md` — App Router / struktur
* `dx-tooling.md` — lint/format (bukan token)
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-016-engineering-baseline-v1.md`
* `../../project-manager/decisions/ADR-018-astryx-replaces-tailwind-r1.md`
* `../../project-manager/decisions/ADR-017-motion-as-identity-r1.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-025-craft-motion-hess-mazur.md`
* `.cursor/rules/xds.mdc` — konvensi AI saat menulis komponen Astryx
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
