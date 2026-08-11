# Domain Model & Bounded Context

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-11). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan model informasi lean untuk website portofolio pribadi **rezisaktiva** — **bukan** domain model DDD penuh / bounded context map untuk sistem transaksi.

---

# Overview

Produk R1 adalah **situs publik read-only** (Hybrid lean). Tidak ada agregat bisnis, workflow multi-user, atau konteks bounded ala SaaS.

Yang ada hanyalah **model konten & permukaan** yang mendukung clarity + soft inbound. Bounded-context DDD = **N/A sadar** untuk R1.

Keputusan bentuk sistem: **Static-first (SSG) + konten di repo** (ADR-015).

---

# Purpose

* Menjelaskan “apa yang ada di dunia situs” tanpa memaksa DDD
* Menjadi acuan struktur konten untuk Engineering (MD/MDX atau setara)
* Menjaga jejak: mengapa tidak ada context map enterprise

---

# Scope

## In Scope

* Entitas konten lean (halaman, locale, teaser, saluran kontak)
* Batas: apa yang **bukan** domain produk situs

## Out of Scope

* Aggregate root, domain events, context map antar microservice
* Model user/account, order, subscription
* Schema database relasional

---

# Domain Overview (lean)

| Konsep | Arti di R1 | Catatan |
| ------ | ---------- | ------- |
| **Page** | Home, About, Contact (per locale) | Surface IA ADR-014 |
| **Locale** | `id` \| `en` | Path prefix; makna salinan setara |
| **Identity claim** | Positioning product builder (+ fullstack + AI edge) | First viewport Home |
| **Credibility line** | Satu klaim non-kartu | Bukan daftar project |
| **Work teaser item** | 1–3 kartu: nama · outcome · tautan bukti opsional | Bukan case detail |
| **Contact channel** | Email primer; LinkedIn/GitHub satelit | Tanpa form/WA/IG R1 |
| **Site chrome** | Nav, switcher, footer | Global |

Tidak ada “Customer”, “Order”, “Session user”, atau “Workspace”.

---

# Bounded Contexts / Modules

**N/A (DDD).** Tidak ada pemetaan bounded context.

Pemetaan praktis ke modul produk (sudah di `02-product/feature-modules.md`):

| Modul | Konsep domain lean |
| ----- | ------------------ |
| M1 Home | Identity claim, credibility line, teaser, arah soft |
| M2 About | Narrative |
| M3 Contact | Contact channel |
| M4 Work teaser | Work teaser item |
| M5 Language | Locale |
| M6 Chrome | Site chrome |
| M7 Meta | Share/meta per Page×Locale |

---

# Context Map

**N/A** — satu permukaan publik; tidak ada anti-corruption antar sistem bisnis. Satelit (GitHub/LinkedIn) = tautan keluar, bukan konteks terintegrasi.

---

# Domain Boundary Rules

1. **Publik read-only** — pengunjung tidak menulis state ke domain situs.
2. **Authoring di luar produk** — Rezi mengedit konten di repo / alat deploy; itu proses engineering, bukan domain in-app.
3. **Case detail / Work katalog** = Later R2 — jangan naikkan ke model R1 diam-diam.
4. **Materi sensitif** → `private/` atau di luar repo (ADR-003), bukan entitas produk.
5. Menambah aggregate transaksi / user account → ADR + revisi Product scope.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| DDD bounded context | N/A sadar untuk R1 |
| Model yang dipakai | Lean content / surface model |
| Bentuk sistem | Static-first SSG + konten di repo (ADR-015) |

---

# Success Criteria

1. Jelas bahwa tidak ada domain transaksi/SaaS
2. Konsep konten lean cukup untuk handoff Engineering
3. Selaras ADR-010–014 dan ADR-015

---

# Related Documents

* `README.md`
* `application-layer.md`
* `database-strategy.md`
* `../02-product/feature-modules.md`
* `../04-ux/information-architecture.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
