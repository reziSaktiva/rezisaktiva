# Design Tokens

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-11). Nilai visual **boleh diiterasi** saat desain/bootstrap; kontrak token (Tailwind + CSS vars, light default, dark fondasi) terkunci. Perubahan material struktur/tema memerlukan ADR baru.

Dokumen ini mendefinisikan sistem token & mapping implementasi untuk website portofolio **rezisaktiva**.

---

# Overview

R1 memakai **A+**:

* **Tailwind CSS** + **CSS custom properties** sebagai sumber token
* **Light** = tema default yang di-ship
* Fondasi **`dark:`** / token dark **disiapkan dari awal**
* **Toggle dark mode di UI = Should / Later** — bukan Must R1

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
| Spacing | Skala Tailwind default (4px base) cukup; konsisten ritme section |
| Radius | Sedang untuk teaser/kontrol bila perlu; **hindari** card-heavy & `rounded-full` pill cluster di hero |
| Elevation | Minimal shadow; hierarchy lewat tipe & spasi, bukan multi-layer glow |
| Layout | First viewport = satu komposisi (brand, headline, supporting, CTA, visual) — selaras key screens |

Anti-pattern visual: dashboard clutter, badge overlay di hero, grid card berlebihan.

---

# Tema (Light / Dark)

| Aspek | R1 |
| ----- | --- |
| Default ship | **Light** |
| Token dark | **Ya** — mirror token di atas di `:root` / `.dark` (atau setara) |
| Strategi Tailwind | `class` strategy (atau setara v4) agar dark bisa dikontrol nanti tanpa ganti arsitektur |
| Toggle di chrome | **Should / Later** — bukan blocker exit R1 |
| `prefers-color-scheme` | Boleh sebagai Could setelah token dark stabil; jangan mengganti default light tanpa keputusan Boss Rezi |

Menjadikan dark **Must** (toggle + QA kontras penuh) = perlu keputusan eksplisit + **ADR baru**.

---

# Motion

> Diperbarui **ADR-017** (2026-08-12): motion naik peran menjadi **bagian identitas visual R1**, bukan sekadar Could minimal — dengan clarity tetap prioritas tertinggi.

| Tingkat | R1 |
| ------- | --- |
| Must | Tidak ada motion yang mengorbankan clarity first viewport (UX1) |
| Signature | Motion jadi bagian identitas: scroll-triggered reveal, cursor-aware micro-interaction, easing/timing halus di hero, hover CTA/teaser, transisi locale switch — inspirasi teknik gerak dari p5aholic.me (bukan struktur playground-nya) |
| Jangan | Parallax berat, loop noise, animasi yang mengorbankan clarity, motion yang menggantikan pesan alih-alih memperkuatnya |

Hormati `prefers-reduced-motion`.

---

# Mapping implementasi

```text
CSS variables (tokens)
        ↓
Tailwind theme / @theme (warna, font, spacing yang dipetakan)
        ↓
Komponen App Router (utility classes + dark: siap pakai)
```

| Lapisan | Isi |
| ------- | --- |
| Sumber kebenaran token | CSS variables di stylesheet global |
| Utility | Tailwind memetakan ke var (hindari duplikasi hex di class sembarangan) |
| Konten MD/MDX | Tidak menyimpan hex brand; styling lewat komponen |
| Figma / design file | Opsional Later — docs ini cukup untuk bootstrap R1 |

Saat bootstrap: pasang Tailwind sesuai major yang didukung Next saat itu; nama token boleh disesuaikan selama kontrak semantik (brand / accent / bg / fg / …) dihormati.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Styling | **Tailwind CSS + CSS variables** |
| Tema default | **Light** |
| Dark | Fondasi token + `dark:` siap; toggle UI = Should/Later (**A+**) |
| Nilai visual | Arah awal; iteratif saat desain/bootstrap |
| Motion | Could, minimal, hierarchy-first |
| Baseline Engineering | ADR-016 |

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
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
