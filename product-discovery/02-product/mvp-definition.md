# MVP Definition

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan MVP website portofolio pribadi **rezisaktiva**.

---

# Overview

MVP = **kerangka clarity yang layak dijadikan destination**: halaman inti Home, About, dan Work index (`/work`, override ADR-020); teaser karya di Home; Contact sebagai modal global (ADR-019) + Quick Info overlay (ADR-022) + theme toggle (ADR-021); soft CTA; dan bilingual geo-aware.

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
| **About** | Narasi product builder; konteks pengalaman fullstack; AI edge jujur. Label chrome: Proses Kerja / Process (ADR-020) |
| **Contact** | Soft CTA — modal global (ADR-019), bukan halaman/route terpisah; email dan/atau tautan langsung (LinkedIn, dll.); tanpa pricing |
| **Work teaser (di Home)** | 1–3 highlight karya/outcome singkat (bukan halaman detail) |
| **Work index (M9)** | Halaman katalog karya `/[locale]/work` — Must R1 (ADR-020) |
| **Project sheet (M10)** | Overlay dari bawah (bukan route); tile index membuka sheet — **Must R1 (ADR-027)** |
| **Navigasi** | Home / About (label Proses Kerja / Process) / Karya (M9) sebagai link; Contact sebagai tombol pembuka modal (ADR-019) + switcher bahasa; mobile <1024px pakai hamburger (override ADR-020) |
| **Theme toggle** | Kontrol dark/light di chrome — Must R1 (**ADR-021**) saat light hidup; hold T-038.2 = default dark, toggle tersembunyi |
| **Quick Info panel (M13)** | Overlay global (tab kanan → drawer); **ADR-022** |
| **Bilingual geo-aware** | Default ID/EN sesuai geo; switcher selalu tersedia |
| **Chrome dasar** | Footer, tautan satelit, sinyal availability soft (opsional teks); toggle tema = Must (ADR-021), bukan opsional chrome |
| **Destination hygiene** | URL stabil, meta dasar, situs layak dibagikan sebagai link utama |

---

# Should Have

| Item | Keterangan |
| ---- | ---------- |
| **Availability line** | Satu kalimat soft (“open to collaboration / opportunities”) di Home atau Contact |
| **Konsistensi pesan** | Salinan ID/EN setara makna (bukan machine-dump) |
| **Teaser yang actionable** | Highlight mengarah ke bukti (repo/live) tanpa halaman case dulu |
| **Aksesibilitas dasar** | Hierarki heading, kontras wajar, fokus keyboard — detail di UX |
| **Motion sebagai identitas visual** | Scroll-triggered reveal, micro-interaction halus, easing hero — bagian identitas R1 dengan batas clarity-first (**ADR-017**), bukan sekadar Could minimal |

---

# Could Have

| Item | Keterangan |
| ---- | ---------- |
| **Form kontak sederhana** | Jika email/tautan terasa kurang; bukan syarat MVP |
| **Calendar booking** | Hanya jika Rezi ingin; tetap soft, bukan sales funnel |
| **1 case/proses singkat** | Boleh dimasukkan lebih awal jika konten sudah siap — idealnya release berikutnya |

---

# Out of Scope

* Halaman detail case `/work/[slug]` — bukan R1 (ADR-027); overlay sheet M10 sudah Must R1
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

* Menambah **halaman** Work/detail case (`/work/[slug]`) ke Must → ADR baru. Overlay M10 sudah Must R1 (ADR-027).
* Menambah **harga / hard CTA** → bertentangan ADR-002 / ADR-008; ditolak kecuali ADR baru.
* Form/calendar masuk Must Have hanya jika Boss Rezi mengunci kebutuhan itu.
* Perubahan material MVP setelah Product Baseline → ADR baru.
* Prioritas MoSCoW detail modul → `feature-priority.md` (T-002.4).

---

# Current Status

| Item | Status |
| ---- | ------ |
| Arah permukaan | **Hybrid lean (C)** — ADR-010, override ADR-019/ADR-020/ADR-021/ADR-022 |
| MVP definition | **Baseline v1.0** (dokumen ini) |
| Product Baseline | **v1.0** — ADR-012 |
| Work index (M9) di MVP | Ya — Must R1 (override ADR-020) |
| Case detail (M10) di MVP | Overlay sheet Must R1 (ADR-027); route `/work/[slug]` tidak |
| Contact | Modal global, bukan halaman (ADR-019) |
| Quick Info (M13) | Ya — Must R1 (ADR-022) |
| Theme toggle | Ya — Must R1 (ADR-021), default ship light |

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-scope.md` — batas produk
* `feature-modules.md` — modul
* `../01-business/success-metrics.md` — dual north star
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/decisions/ADR-017-motion-as-identity-r1.md` — motion sebagai identitas visual
* `../../project-manager/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-manager/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
