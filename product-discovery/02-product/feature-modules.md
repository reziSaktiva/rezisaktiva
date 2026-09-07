# Feature Modules

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini memetakan modul/fitur/halaman website portofolio **rezisaktiva** untuk fase Product — bukan wireframe UX dan bukan stack Engineering.

---

# Overview

Modul disusun mengikuti Hybrid lean: **Home, About, Workflow, Work index** sebagai halaman inti + **Contact, Quick Info, dan project sheet sebagai overlay** + **lintas-halaman** (bahasa, chrome, tema). Home = hero + Now (ADR-032). Cara kerja = M14 `/workflow` (ADR-035). M10 di R1 = overlay (ADR-027), bukan halaman case.

> **Catatan override (2026-08-15, ADR-020; 2026-08-26, ADR-027):** M9 (Work index) Must R1. **M10** = overlay sheet dari bawah (Must R1, T-026) — bukan route `/work/[slug]`.
>
> **Update (2026-08-16):** M6 menyertakan toggle tema Must R1 (**ADR-021**). Modul baru **M13 — Quick Info panel** (**ADR-022**) — overlay global, bukan halaman.
>
> **Update (2026-08-21):** M3 (Contact) akan menambah tautan unduh CV/Portofolio di dalam modal yang sudah ada (**ADR-023**) — bukan route baru, bukan pengganti email. **Implementasi ditunda** (⏸️ **T-023**) menunggu CV versi Inggris.

---

# Core Product Modules

## M1 — Home (Identity & Destination)

**Tujuan:** First impression + clarity: siapa Rezi, next step.

**Isi inti:**

* Hero / klaim positioning (product builder + fullstack + AI edge)
* Section **Now** — status pekerjaan saat ini (bukan katalog karya)
* Soft arah ke About dan Contact (chrome; bukan pita footer — ADR-033)

**Bukan:** katalog lengkap, blog feed, pricing, credibility line, work teaser (ADR-032 — bukti AI di M2; cara kerja di M14; karya di M9).

---

## M2 — About (Narrative)

**Tujuan:** Memperdalam cerita siapa Rezi agar founder/PO percaya fit kolaborasi.

**Label chrome:** ID **"Tentang"** / EN **"About"** (ADR-035). Route `/[locale]/about`; ID modul tetap M2.

**Isi inti:**

* Sapaan + potret + lead pribadi
* Klaim **bukti AI** (section setelah hero, copy T-021.2 — ADR-032)
* Konteks pengalaman (di dalam lead, bukan CV kronologis)

**Bukan:** offers, approach, values, langkah proses — itu **M14 Workflow**.

---

## M3 — Contact (Soft Path)

**Tujuan:** Membuka inbound berkualitas tanpa hard sell.

**Isi inti:**

* Ajakan soft + konteks kapan relevan menghubungi
* Jalur primer: email dan/atau tautan langsung
* Tautan satelit (LinkedIn, GitHub, dll.)
* Opsional: availability line
* Tautan unduh CV/Portofolio (PDF) — keputusan diterima **ADR-023** (2026-08-21), di luar draf mockup awal; **implementasi ditunda** ke **T-023**, menunggu CV versi Inggris (paritas ID/EN)

**Bukan (MVP):** form berbackend, CRM, calendar wajib, rate card.

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
* Footer: identitas singkat, satelit, legal ringan bila perlu
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
| **M10 — Case / process detail** | Overlay dari bawah (bukan route): preview live (iframe) atau galeri, services, location or company, year, description; tile Work index membuka sheet, live/repo sekunder di dalam sheet | **Must R1** (ADR-027, T-026; teaser Home dicabut ADR-032) |
| **M11 — Writing / notes** | Tulisan singkat proses | Future — bukan inti visi MVP |
| **M12 — Experiments / playground** | Satelit craft | Future — jangan jadi panggung utama |
| **M13 — Quick Info panel** | Overlay global: tab tepi kanan → drawer (bio, Services, Tools, Works index, Email, Links — tautan/rujukan cepat, bukan form inbound); bukan route; tampil di semua halaman R1 termasuk Work index (sheet M10 overlay terpisah; Quick Info tidak disembunyikan); bukan pengganti Contact modal (ADR-019) atau footer satelit (M6) | **Must R1** (ADR-022; klarifikasi vs M10 overlay: ADR-027) |
| **M14 — Workflow** | Halaman cara kerja: offers, approach, values, empat langkah proses. Route `/[locale]/workflow`. Label chrome Proses Kerja / How I Work | **Must R1** (ADR-035) |

---

# Module Relationships

```text
M5 Language ─── wraps ───► M1 Home, M2 About, M14 Workflow, M3 Contact, M6 Chrome, M9 Work index
                              │
                              └── CTA soft ► M3 Contact

M6 Chrome ── includes ► Theme toggle (ADR-021)
M13 Quick Info ── overlay (bukan route) ──► semua halaman R1 (Quick Info tetap di Work index; sheet M10 overlay terpisah)

M9 Work index (Must R1, ADR-020) ──► M10 project sheet overlay (Must R1, ADR-027)
```

* M1 adalah pintu destination (hero + Now); M2 memperdalam siapa + bukti AI; M14 memperdalam cara kerja; M3 menutup soft path.
* M4 retired (ADR-032); bukti karya = M9 + M10.
* M9 Must R1 (ADR-020); M10 overlay sheet Must R1 (ADR-027); halaman `/work/[slug]` bukan R1.
* M13 overlay glanceable — tidak menggantikan M3 atau footer M6 (ADR-022).

---

# Module Design Principles

1. **Satu pekerjaan per modul** — Home = clarity; About = narasi; Contact = path.
2. **Kurasi ketat** — teaser sedikit yang kuat > daftar panjang.
3. **Soft by default** — Contact tidak berubah jadi sales page.
4. **Bahasa sebagai lapisan** — bukan afterthought; konten inti dual.
5. **Magnet overlay, bukan halaman case** — M10 R1 = sheet dari bawah (ADR-027); `/work/[slug]` tetap di luar R1.
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
* `../../project-manager/decisions/ADR-023-cv-download-contact-modal.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
