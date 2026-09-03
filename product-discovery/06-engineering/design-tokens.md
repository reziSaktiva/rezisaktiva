# Design Tokens

> Status: **Baseline v1.2** — ditetapkan bersama Boss Rezi (2026-08-11; ADR-018 2026-08-13 superseded; toggle UI Must R1 via **ADR-021**, 2026-08-16; **ADR-028** / T-037.4, 2026-09-03). Nilai visual **boleh diiterasi**; kontrak token saat ini = **shadcn/ui + Tailwind CSS v4** (`:root` / `.dark` di `app/globals.css`), light default, dark via class `html.dark`. Perubahan material struktur/tema memerlukan ADR baru.

Dokumen ini mendefinisikan sistem token & mapping implementasi untuk website portofolio **rezisaktiva**.

---

# Overview

R1 memakai **shadcn/ui + Tailwind CSS v4** (**ADR-028**, menggantikan Astryx / ADR-018):

* **Token** di `app/globals.css`: `:root` (light) dan `.dark` (dark); `@theme inline` memetakan `--color-background` dll. ke variabel shadcn
* **Light** = tema default yang di-ship (tanpa class `dark` di `<html>`)
* Dark = class **`dark`** di `<html>` + `data-theme` (bukan `prefers-color-scheme` sebagai sumber token; `@custom-variant dark` mengikat ke class)
* **Toggle dark mode di UI = Must R1** (**ADR-021**) — default ship tetap light; preferensi di cookie + `localStorage` key `rz-theme`
* Palet = rezisaktiva (kanvas/aksen yang sama seperti produksi sebelum migrasi). Bukan zinc/slate default shadcn. Bukan `astryx theme` / file `theme/` built.

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
| Spacing | Skala token 4px di `globals.css` (`--spacing-*`) + Tailwind `gap-*`; konsisten ritme section |
| Radius | Sedang untuk teaser/kontrol bila perlu; **hindari** card-heavy & `rounded-full` pill cluster di hero |
| Elevation | Halaman/kartu: shadow minimal; hierarki lewat tipe & spasi, bukan glow. **Kontrol chrome + seluruh Button:** timbul 3D (`--elev-3d` di `app/globals.css`) — bevel highlight + bibir + drop shadow |
| Layout | First viewport = satu komposisi (brand, headline, supporting, CTA, visual) — selaras key screens. **Lantai viewport 320px**; chrome mobile satu baris. Detail komposisi = kode produksi (ADR-024) + `04-ux/key-screen-patterns.md` / `navigation-patterns.md` |

Anti-pattern visual: dashboard clutter, badge overlay di hero, grid card berlebihan.

---

# Tema (Light / Dark)

| Aspek | R1 |
| ----- | --- |
| Default ship | **Light** |
| Token dark | **Ya** — class `.dark` di `<html>` (`html.dark`), bukan prop `mode` Astryx |
| Strategi | `ThemeModeProvider` + cookie `rz-theme`; script anti-flash `classList.toggle("dark")`. Jangan `next-themes` sebagai default |
| Toggle di chrome | **Must R1** (**ADR-021**) — kontrol UI wajib di chrome; default ship tetap light |
| `prefers-color-scheme` | Boleh sebagai Could setelah token dark stabil; jangan mengganti default light tanpa keputusan Boss Rezi |

Toggle UI sudah Must (ADR-021). Menjadikan **dark sebagai default ship** atau **QA kontras dual-theme penuh** sebagai syarat exit tetap perlu keputusan/ADR terpisah — fondasi class `html.dark` + token `:root`/`.dark` tidak berubah.

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

Hormati `prefers-reduced-motion`. Gerak identitas = paket `motion` (`motion/react`). Lenis + page wipe tetap CSS/hook custom — bukan domain Motion, bukan View Transitions API.

---

# Mapping implementasi

```text
app/globals.css
  :root (light) + .dark (dark) + @theme inline + @custom-variant dark
        ↓
html.dark + data-theme (cookie rz-theme, ThemeModeProvider)
        ↓
shadcn (components/ui) + Tailwind utilities (token-backed)
        ↓
className scoped + craft CSS (.home-* .ct-* .qi-* .ps-* .page-vt-*)
```

| Lapisan | Isi |
| ------- | --- |
| Sumber kebenaran token | `app/globals.css` (`--background`, `--foreground`, `--spacing-*`, `--size-element-*`, `--chip-*`, `--elev-3d`, `--color-*` craft) — **ADR-024** / **ADR-028**; nilai kanvas/aksen R1 *berasal* dari arsip `design-mockups/shared.css` `--c-*` |
| Komponen | shadcn di `components/ui/` + permukaan `app/[locale]/_components/` — bukan hardcode hex/px |
| Override lokal | utility Tailwind token-backed + `className` scoped. **Bukan** StyleX. Dilarang `style={{}}` inline atau hex/px acak di JSX. Playbook: `code-discipline.md` |
| Konten MD/MDX | Tidak menyimpan hex brand; styling lewat komponen |
| Kustomisasi brand | edit token di `globals.css` (pasangan light/dark). Bukan `pnpm theme:build` |
| Agent docs | `.cursor/rules/shadcn.mdc` + `.cursor/rules/code-discipline.mdc` |
| Figma / design file | Opsional Later — docs ini cukup untuk bootstrap R1 |

Nilai hex kanvas/aksen R1 dikunci di `globals.css` (asal historis: mockup `shared.css`, KI-001 / KI-002). Perubahan token berikutnya di file itu, bukan di mockup.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Styling | **shadcn/ui + Tailwind CSS v4** — menggantikan Astryx + StyleX (**ADR-028**; ADR-018 superseded) |
| Theme | Token di `app/globals.css` (`:root` / `.dark`); palet rezisaktiva (asal historis: arsip `shared.css`) |
| Tema default | **Light** |
| Dark | Class `html.dark` + cookie `rz-theme`; toggle UI = **Must R1 (ADR-021)**; default tetap light |
| Nilai visual | Kanvas + aksen di `globals.css` (SoT hidup = kode produksi, ADR-024) |
| Motion | Bagian identitas visual (ADR-017), hierarchy-first; `motion/react` + Lenis + page overlay (ADR-025) |
| Native scrollbar | `--rz-scrollbar-*` di `app/globals.css`, bukan `--color-*` di `:root` |
| Override komponen | Tailwind token + className scoped; StyleX tidak dipakai — `code-discipline.md` |
| Baseline Engineering | ADR-016; styling: ADR-018 superseded oleh **ADR-028** |

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
* `../../project-manager/decisions/ADR-018-astryx-replaces-tailwind-r1.md` — superseded
* `../../project-manager/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-manager/decisions/ADR-017-motion-as-identity-r1.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-025-craft-motion-hess-mazur.md`
* `.cursor/rules/shadcn.mdc` — konvensi AI saat menulis UI shadcn + Tailwind
* `code-discipline.md` — spacing, lapisan styling, Server/Client, SSG
* `.cursor/rules/code-discipline.mdc` — ringkasan wajib agent
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
