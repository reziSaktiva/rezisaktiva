# CONVERSATIONS

Log diskusi penting antar sesi. Append entri baru di bagian atas (setelah format).

## Format

```
## [YYYY-MM-DD] — [Topik Singkat]
**Phase:** [phase aktif]
**Summary:** [ringkasan 2-3 kalimat]
**Key Decision/Insight:** [jika ada]
**Impact:** [dokumen yang perlu diupdate?]
```

---

## 2026-08-07 — Product Baseline v1.0 (T-002.8)

**Phase:** Phase 2 → 3 — Product → User Discovery
**Summary:** Seluruh `02-product/` dikunci Baseline v1.0: Hybrid lean, MoSCoW M1–M7 Must R1, roadmap R1→R2→R3, roles N/A.
**Key Decision/Insight:** ADR-012; tidak ada fork baru — paket ADR-010/011 sudah cukup.
**Impact:** Lanjut **T-003.1** isi `03-user/`.

## 2026-08-07 — Roles & permissions N/A (T-002.7)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Disepakati `roles-permissions.md` N/A: tidak ada login/RBAC/area member; file tetap diisi sebagai jejak (pola ADR-008). ADR-011.
**Key Decision/Insight:** Situs = read-only publik; authoring di luar permission in-app.
**Impact:** Lanjut **T-002.8** Baseline Product v1.0 + ADR.

## 2026-08-07 — Release + future roadmap (T-002.5 / T-002.6)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Rilis milestone R1 MVP Clarity → R2 Magnet ringan → R3 Presence/craft; future menampung writing/experiments/distribusi tanpa mengubah brand primer. Tanpa tanggal kalender spekulatif; tanpa ADR baru.
**Key Decision/Insight:** Milestone-based; R2 = aktivasi magnet ADR-007 setelah R1 exit.
**Impact:** Lanjut **T-002.7** `roles-permissions.md` (boleh N/A).

## 2026-08-07 — Feature priority MoSCoW (T-002.4)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Diisi `feature-priority.md`: Must = M1–M7; Should = poles clarity; Could = form/motion/early case; Won't MVP = M9–M12 + sales/CMS/blog berat. Selaras ADR-010 tanpa ADR baru.
**Key Decision/Insight:** Magnet (M9/M10) tetap Won't untuk rilis MVP.
**Impact:** Lanjut **T-002.5** `release-roadmap.md`.

## 2026-08-07 — MVP surface Hybrid lean (C)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Disepakati struktur MVP Hybrid lean: Home + About + Contact; karya sebagai teaser di Home; case/Work detail menyusul setelah kerangka clarity. Draft T-002.1–T-002.3 + ADR-010.
**Key Decision/Insight:** Opsi C; bukan single-page (B) dan bukan case wajib di MVP (D).
**Impact:** Lanjut **T-002.4** `feature-priority.md`.

## 2026-08-07 — Success metrics dual north star + Business Baseline v1.0

**Phase:** Phase 1 — Business Discovery → Phase 2 (02-product)
**Summary:** Disepakati dual north star (brand recall + inbound berkualitas); vanity traffic bukan KPI. Seluruh `01-business/` dikunci Baseline v1.0.
**Key Decision/Insight:** Opsi C dual; ADR-009; T-001.7 + T-001.8 selesai.
**Impact:** Lanjut **T-002.1** `product-scope.md`.

## 2026-08-07 — Sinkron laporan ke ID subtask

**Phase:** Phase 1 — Business Discovery
**Summary:** Audit dan selaraskan semua dokumen laporan/aturan yang masih merujuk subtask tanpa kode `T-XXX.N`.
**Key Decision/Insight:** Satu konvensi di seluruh Project OS + Impact riwayat CONVERSATIONS.
**Impact:** Siap lanjut **T-001.7** tanpa ambigu.

## 2026-08-07 — Konvensi ID subtask T-XXX.N

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati subtask memakai kode turunan parent (`T-001.1`, `T-001.2`, …). Retrofit semua subtask di v01 + riwayat COMPLETE_TASK.
**Key Decision/Insight:** Opsi A — retrofit semua; format `T-XXX.N`; ID tidak didaur ulang.
**Impact:** Fokus sekarang = **T-001.7** `success-metrics.md`.

## 2026-08-07 — Pricing strategy N/A

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati pricing tidak relevan untuk situs; file tetap diisi N/A (bukan dihapus).
**Key Decision/Insight:** ADR-008; opsi 1 terkunci.
**Impact:** Lanjut **T-001.7** `success-metrics.md`.

## 2026-08-07 — Business model growth B

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati growth destination + magnet ringan (case/proses); tanpa revenue langsung di situs; soft inbound job/client.
**Key Decision/Insight:** ADR-007; opsi B terkunci.
**Impact:** Lanjut **T-001.6** `pricing-strategy.md` (kemungkinan N/A untuk situs).

## 2026-08-07 — Competitor analysis lens D

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati hybrid: lima referensi bernama + pesaing kategori; prioritas pelajaran clarity → presence → craft. Draft `competitor-analysis.md` v0.1.
**Key Decision/Insight:** ADR-006; opsi D terkunci.
**Impact:** Lanjut **T-001.5** `business-model.md` selaras ADR-002 / ADR-006.

## 2026-08-06 — Target market ICP

**Phase:** Phase 1 — Business Discovery
**Summary:** Diperdalam audiens primer founder/PO: dua archetipe setara (early founder/indie + PO perusahaan), fokus geo SEA, domain digital product/tech.
**Key Decision/Insight:** ADR-005; draft `target-market.md` v0.1.
**Impact:** Lanjut **T-001.4** `competitor-analysis.md` selaras ADR-002 / ADR-005.

## 2026-08-06 — Problem statement framing

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati framing dual (Rezi + founder/PO) dan rantai masalah visibility → narrative → evaluasi. Situasi saat ini: akun banyak platform ada, tetapi belum menonjol; aktif hampir hanya GitHub karena kerja.
**Key Decision/Insight:** ADR-004; draft `problem-statement.md` v0.1.
**Impact:** Lanjut **T-001.3** `target-market.md` selaras ADR-002 / ADR-004.

## 2026-08-06 — Public repo & privacy

**Phase:** Phase 1 — Business Discovery
**Summary:** Boss Rezi ingin repo bisa dilihat banyak orang tetapi khawatir privasi. Disepakati usulan: repo public, discovery tetap terbuka, materi sensitif di `private/` yang di-ignore.
**Key Decision/Insight:** ADR-003.
**Impact:** `.gitignore`, `README.md`, folder `private/`.

## 2026-08-06 — Product vision & positioning

**Phase:** Phase 1 — Business Discovery
**Summary:** Diskusi tujuan portofolio berujung Model A (brand primer, job/client soft), positioning berlapis (product builder / fullstack / AI edge), audiens primer founder/PO, dan bahasa bilingual geo-aware.
**Key Decision/Insight:** ADR-002; draft `product-vision.md` v0.1.
**Impact:** Lanjut **T-001.2** `problem-statement.md` dan **T-001.3** `target-market.md` selaras ADR-002.

## 2026-08-06 — Kickoff template Project OS

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati membuat template Project OS untuk portofolio `rezisaktiva` (fase discovery 01–06), docs-only, skills di `.cursor/skills/`.
**Key Decision/Insight:** ADR-001 — pemisahan PD/PM; Cursor-first.
**Impact:** Scaffold selesai; sesi berikutnya **T-001.1** `product-vision.md`.
