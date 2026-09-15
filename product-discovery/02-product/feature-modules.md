# Feature Modules

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini memetakan modul/fitur/halaman website portofolio **rezisaktiva** untuk fase Product — bukan wireframe UX dan bukan stack Engineering.

---

# Overview

Modul disusun mengikuti Hybrid lean: **tiga halaman** (Home, Workflow, Work index) + **About sebagai section `#about` di Home** (ADR-040) + **Contact, Quick Info, dan project sheet sebagai overlay** + **lintas-halaman** (bahasa, chrome, tema). Home = hero + `#about` + pita footer (ADR-038 / ADR-040 / ADR-041). Now = About. Cara kerja = M14 `/workflow` (ADR-035; isi ADR-042). M10 di R1 = overlay (ADR-027). **R2** menambah halaman case `/[locale]/projects/[slug]` tanpa mencabut sheet (**ADR-044**).

> **Catatan override (2026-08-15, ADR-020; 2026-08-26, ADR-027; 2026-09-14, ADR-044):** M9 (Work index) Must R1. **M10** = overlay sheet dari bawah (Must R1, T-026). Halaman case **R2** = `/[locale]/projects/[slug]` (hibrid; tile tetap sheet).
>
> **Update (2026-08-16):** M6 menyertakan toggle tema Must R1 (**ADR-021**). Modul baru **M13 — Quick Info panel** (**ADR-022**) — overlay global, bukan halaman.
>
> **Update (2026-08-21):** M3 sempat merencanakan tautan unduh CV/Portofolio di modal (**ADR-023**). **Update (2026-09-14, ADR-043):** keputusan itu **dicabut** — tidak ada unduhan CV publik.
>
> **Update (2026-09-08, ADR-040 / ADR-042):** M2 = section Home, bukan halaman. `/about` redirect. `#proof` dicabut. Isi `/workflow` = lima blok decision-driven.

---

# Core Product Modules

## M1 — Home (Identity & Destination)

**Tujuan:** First impression + clarity: siapa Rezi, next step.

**Isi inti:**

* Hero / klaim positioning (h1 atas; lede lantai bawah; tautan Workflow di lede)
* Soft arah ke About dan Contact (chrome + pita footer setelah `#about` — ADR-041)

**Bukan:** Now (itu M2 About, ADR-037), katalog lengkap, blog feed, pricing, credibility line, work teaser (ADR-032 — siapa di M2; cara kerja di M14; karya di M9). `#proof` dicabut ADR-040.

---

## M2 — About (Narrative)

**Tujuan:** Memperdalam cerita siapa Rezi agar founder/PO percaya fit kolaborasi.

**Label chrome:** ID **"Tentang"** / EN **"About"** (ADR-035). Chip mengarah ke `/{locale}#about` di Home; `/[locale]/about` redirect (ADR-040). ID modul tetap M2.

**Isi inti:**

* Sapaan (`h2`)
* **Now** — status pekerjaan saat ini (kicker + tautan perusahaan, ADR-037); di antara judul dan lead
* Lead pribadi satu paragraf (ADR-039)
* Karya seni viewport + caption “This is not me”
* Konteks pengalaman (di dalam lead, bukan CV kronologis)

**Bukan:** `#proof` / klaim bukti AI sebagai section (ADR-040); cara kerja (itu **M14 Workflow**, ADR-042).

---

## M3 — Contact (Soft Path)

**Tujuan:** Membuka inbound berkualitas tanpa hard sell.

**Isi inti:**

* Ajakan soft + konteks kapan relevan menghubungi
* Jalur primer: email dan/atau tautan langsung
* Tautan satelit (LinkedIn, GitHub, dll.)
* Opsional: availability line

**Bukan (MVP):** form berbackend, CRM, calendar wajib, rate card, tautan unduh CV/Portofolio publik (**ADR-043**; ADR-023 superseded).

---

## M4 — Work Teaser (retired)

**Status:** **Retired** (ADR-032, 2026-09-07). Bukan section Home lagi.

Presence bukti karya = **M9 Work index** + **M10 project sheet**. ID M4 tidak didaur ulang.

---

## M5 — Language (Bilingual Geo-Aware)

**Tujuan:** Relevan SEA + pintu terbuka luar SEA (ADR-002).

**Isi inti:**

* Default bahasa menurut geo (ID di Indonesia, EN di luar)
* Language switcher selalu tersedia
* Konten inti tersedia di kedua bahasa (makna setara)

**Detail:** deteksi geo, URL (`/id` vs cookie), fallback — fase UX / Engineering.

---

## M6 — Site Chrome & Satellites

**Tujuan:** Navigasi dan presence rumah brand.

**Isi inti:**

* Nav: Tentang / About, Proses Kerja / How I Work, Proyek (M9) + switcher; Contact = tombol pembuka modal (ADR-019), bukan link; tanpa chip Home (ADR-034 / ADR-035)
* **Toggle tema (dark/light)** di chrome — Must R1 (**ADR-021**) **saat kedua tema hidup**; update 2026-09-04: default ship dark, light hold, toggle tersembunyi; di mobile Contact tetap di luar hamburger
* Footer: identitas singkat, satelit, legal ringan, pita Contact di semua rute termasuk Home (ADR-041)
* Konsistensi soft availability di chrome (opsional)
* Mobile (<1024px): nav halaman + switcher di balik hamburger; Contact-button + toggle tema tetap selalu terlihat (override ADR-020; toggle = ADR-021)

Quick Info (M13) **bukan** bagian M6 — overlay berkonten sendiri (ADR-022), didefinisikan di Supporting Modules di bawah (pola sama seperti M9 — Must R1 tapi bukan Core Module M1–M6).

---

# Supporting Modules

| Modul | Peran | Kapan |
| ----- | ----- | ----- |
| **M7 — Destination meta** | Title/description/OG dasar agar link layak dishare | MVP (Should/Must hygiene) |
| **M8 — Contact form / booking** | Alternatif jalur kontak | Could — bukan syarat MVP |
| **M9 — Work index** | Halaman daftar karya | **Must R1** (override ADR-020, 2026-08-15) |
| **M10 — Case / process detail** | **R1:** overlay dari bawah (preview live/galeri, services, location or company, year, description); tile membuka sheet; Live sekunder, tanpa Repo. **R2 (ADR-044):** tautan “baca selengkapnya” ke halaman `/[locale]/projects/[slug]`; sheet **tetap** | **Must R1** overlay (ADR-027); **Must R2** halaman case (ADR-044, T-056) |
| **M11 — Writing / notes** | Tulisan singkat proses | Future — bukan inti visi MVP |
| **M12 — Experiments / playground** | Satelit craft | Future — jangan jadi panggung utama |
| **M13 — Quick Info panel** | Overlay global: tab tepi kanan → drawer (bio, Services, Tools, Works index, Email, Links — tautan/rujukan cepat, bukan form inbound); bukan route; tampil di semua halaman R1 termasuk Work index (sheet M10 overlay terpisah; Quick Info tidak disembunyikan); bukan pengganti Contact modal (ADR-019) atau footer satelit (M6) | **Must R1** (ADR-022; klarifikasi vs M10 overlay: ADR-027) |
| **M14 — Workflow** | Halaman cara kerja: hero + tab perbandingan, lima prinsip, pipeline Human vs AI, ADR Vault. Route `/[locale]/workflow`. Label chrome Proses Kerja / How I Work | **Must R1** (ADR-035, isi **ADR-042**) |

---

# Module Relationships

```text
M5 Language ─── wraps ───► M1 Home, M2 About, M14 Workflow, M3 Contact, M6 Chrome, M9 Work index
                              │
                              └── CTA soft ► M3 Contact

M6 Chrome ── includes ► Theme toggle (ADR-021)
M13 Quick Info ── overlay (bukan route) ──► semua halaman R1 (Quick Info tetap di Work index; sheet M10 overlay terpisah)

M9 Work index (Must R1, ADR-020) ──► M10 project sheet overlay (Must R1, ADR-027)
                              └──► halaman case `/projects/[slug]` (Must R2, ADR-044) — dari tautan di sheet
```

* M1 adalah pintu destination (lede + klaim); M2 memperdalam siapa + Now + lead/artwork; M14 memperdalam cara kerja; M3 menutup soft path.
* M4 retired (ADR-032); bukti karya = M9 + M10; magnet URL = halaman case (ADR-044).
* M9 Must R1 (ADR-020); M10 overlay Must R1 (ADR-027); halaman `/[locale]/projects/[slug]` = **R2 (ADR-044)** — bukan `/work/[slug]`.
* M13 overlay glanceable — tidak menggantikan M3 atau footer M6 (ADR-022).

---

# Module Design Principles

1. **Satu pekerjaan per modul** — Home = clarity; About = narasi pribadi; Workflow = cara kerja; Contact = path.
2. **Kurasi ketat** — teaser sedikit yang kuat > daftar panjang.
3. **Soft by default** — Contact tidak berubah jadi sales page.
4. **Bahasa sebagai lapisan** — bukan afterthought; konten inti dual.
5. **Magnet hibrid R2** — M10 R1 = sheet; halaman case = `/projects/[slug]` dari tautan sheet (**ADR-044**). Jangan cabut sheet.
6. **Satelit tetap satelit** — GitHub/LinkedIn mendukung, tidak menggantikan M1–M3.
7. **Detail interaksi di UX** — dokumen ini tidak mengunci wireframe atau komponen UI.

---

# Success Criteria

Modul dianggap cukup terdefinisi jika:

1. Setiap Must Have MVP bisa dipetakan ke M1–M7 + M9 + M10 + M13 + M14
2. M9 Must R1 (ADR-020); M10 overlay Must R1 (ADR-027); M13 overlay Must R1 (ADR-022)
3. Tidak ada modul yang bertentangan dengan brand primer / no-pricing
4. Siap dipecah ke MoSCoW di `feature-priority.md` dan rilis di `release-roadmap.md`

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-scope.md` — batas produk
* `mvp-definition.md` — Must/Should/Could
* `feature-priority.md` — prioritas (berikutnya)
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/decisions/ADR-023-cv-download-contact-modal.md` — superseded ADR-043
* `../../project-manager/decisions/ADR-043-no-public-cv-download.md`
* `../../project-manager/decisions/ADR-032-home-single-section.md`
* `../../project-manager/decisions/ADR-035-about-workflow-split.md`
* `../../project-manager/decisions/ADR-040-about-as-home-section.md`
* `../../project-manager/decisions/ADR-041-home-with-footer.md`
* `../../project-manager/decisions/ADR-042-workflow-decision-driven-page.md`
* `../../project-manager/decisions/ADR-044-r2-hybrid-case-pages.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
