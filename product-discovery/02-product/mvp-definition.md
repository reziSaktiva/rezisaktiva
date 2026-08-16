# MVP Definition

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan MVP website portofolio pribadi **rezisaktiva**.

---

# Overview

MVP = **kerangka clarity yang layak dijadikan destination**: tiga halaman inti (Home, About, Contact), teaser karya di Home, soft CTA, dan bilingual geo-aware.

Bukan MVP perfection craft, bukan katalog case penuh, bukan mesin growth sosial. Magnet ringan (case/proses singkat) **direncanakan segera setelah** kerangka ini hidup — bukan blocker ship pertama.

---

# MVP Goals

1. Satu URL resmi yang Rezi bisa tunjuk sebagai rumah identitas profesional
2. Founder/PO paham: Rezi = product builder (fullstack + AI edge) dalam kunjungan singkat
3. Soft path kontak siap dipakai (tanpa hard sell / harga)
4. Presence cukup (bukan CV online kosong) lewat About + teaser karya
5. Fondasi bilingual siap; detail deteksi geo dikunci di UX/Engineering

Selaras dual north star: brand recall/clarity + jalur inbound berkualitas (`success-metrics.md`).

---

# Must Have

| Item | Keterangan |
| ---- | ---------- |
| **Home** | Positioning jelas; bukti ringkas; teaser karya; arah ke About/Contact |
| **About** | Narasi product builder; konteks pengalaman fullstack; AI edge jujur |
| **Contact** | Soft CTA — email dan/atau tautan langsung (LinkedIn, dll.); tanpa pricing |
| **Work teaser (di Home)** | 1–3 highlight karya/outcome singkat (bukan halaman detail) |
| **Work index (M9)** | Halaman katalog karya `/[locale]/work` — naik dari Post-MVP (override ADR-020, 2026-08-15); bukan halaman detail case (M10 tetap Post-MVP) |
| **Navigasi** | Home / About / Karya (M9) sebagai link; Contact sebagai tombol pembuka modal (ADR-019) + switcher bahasa; mobile <1024px pakai hamburger (override ADR-020) |
| **Bilingual geo-aware** | Default ID/EN sesuai geo; switcher selalu tersedia |
| **Chrome dasar** | Footer, tautan satelit, sinyal availability soft (opsional teks) |
| **Destination hygiene** | URL stabil, meta dasar, situs layak dibagikan sebagai link utama |

---

# Should Have

| Item | Keterangan |
| ---- | ---------- |
| **Availability line** | Satu kalimat soft (“open to collaboration / opportunities”) di Home atau Contact |
| **Konsistensi pesan** | Salinan ID/EN setara makna (bukan machine-dump) |
| **Teaser yang actionable** | Highlight mengarah ke bukti (repo/live) tanpa halaman case dulu |
| **Aksesibilitas dasar** | Hierarki heading, kontras wajar, fokus keyboard — detail di UX |

---

# Could Have

| Item | Keterangan |
| ---- | ---------- |
| **Form kontak sederhana** | Jika email/tautan terasa kurang; bukan syarat MVP |
| **Calendar booking** | Hanya jika Rezi ingin; tetap soft, bukan sales funnel |
| **Motion/craft ringan** | Presence edge tanpa menggeser clarity |
| **1 case/proses singkat** | Boleh dimasukkan lebih awal jika konten sudah siap — idealnya release berikutnya |

---

# Out of Scope

* Halaman detail case study / process per karya (M10, post-MVP / magnet phase) — halaman index Work (M9) sudah masuk Must R1 (ADR-020)
* Blog / writing hub / newsletter sebagai fitur inti
* CMS, auth, dashboard, area private di situs
* Pricing, paket jasa, checkout
* Playground WebGL sebagai panggung utama
* Distribusi sosial otomatis / ship-in-public sebagai mesin MVP
* Analytics berat atau personalisasi invasif

---

# MVP Success Criteria

MVP dianggap cukup jika:

1. Reviewer ICP/peer bisa merangkum positioning setelah kunjungan singkat (NS-1)
2. Soft path kontak jelas dan terasa natural (NS-2 path siap)
3. Tidak ada ketergantungan pada halaman case untuk “mengerti siapa Rezi”
4. Scope Hybrid lean (ADR-010) tidak melebar ke blog; katalog Work index (M9) sudah masuk lewat pengecualian eksplisit ADR-020
5. Siap jadi “link utama” dari CV, chat, dan GitHub

---

# Decision Rules

* Menambah **halaman Work/detail case** ke definisi Must Have MVP → butuh keputusan eksplisit (geser ke opsi D atau release berikutnya). Work index (M9) sudah dinaikkan lewat ADR-020 (2026-08-15); detail case (M10) tetap butuh keputusan terpisah.
* Menambah **harga / hard CTA** → bertentangan ADR-002 / ADR-008; ditolak kecuali ADR baru.
* Form/calendar masuk Must Have hanya jika Boss Rezi mengunci kebutuhan itu.
* Perubahan material MVP setelah Product Baseline → ADR baru.
* Prioritas MoSCoW detail modul → `feature-priority.md` (T-002.4).

---

# Current Status

| Item | Status |
| ---- | ------ |
| Arah permukaan | **Hybrid lean (C)** — ADR-010 |
| MVP definition | **Baseline v1.0** (dokumen ini) |
| Product Baseline | **v1.0** — ADR-012 |
| Case detail di MVP | Tidak (magnet bertahap) |

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-scope.md` — batas produk
* `feature-modules.md` — modul
* `../01-business/success-metrics.md` — dual north star
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
