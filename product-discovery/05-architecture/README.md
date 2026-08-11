# 05 — Architecture

Dokumentasi pada folder ini berfokus pada fase **Architecture** untuk website portofolio pribadi **rezisaktiva**.

---

# Purpose

* Menentukan arsitektur konseptual yang sesuai kompleksitas portofolio.
* Mendokumentasikan domain, data, auth, dan integrasi bila relevan.
* Menjaga keputusan arsitektur sebagai baseline sebelum coding.

---

# Scope

Folder ini hanya membahas aspek architecture.

Topik berikut tidak dibahas di sini:

- Implementasi kode
- Detail DX tooling (ada di 06)
- Desain visual final

---

# Documents

* `domain-model.md` — domain / bounded context bila relevan.
* `database-strategy.md` — strategi data/storage.
* `application-layer.md` — lapisan aplikasi.
* `integration-layer.md` — integrasi eksternal.
* `background-jobs.md` — job/async bila relevan.
* `realtime-strategy.md` — realtime bila relevan.
* `auth-architecture.md` — arsitektur auth bila ada area privat.
* `../README.md` — dokumentasi fase Product Discovery.
* `../../project-manager/PROJECT_OVERVIEW.md` — ringkasan project.
* `../../project-manager/PROJECT_RULES.md` — aturan project.
* `../../project-manager/PROJECT_STATE.md` — status dan progress.
* `../../project-manager/DECISIONS.md` — keputusan penting (ADR).

---

# Workflow

1. Tinjau input dari Product, User, dan UX baselines.
2. Isi dokumen sesuai kompleksitas yang dipilih (banyak boleh N/A untuk static site).
3. Catat keputusan material sebagai ADR.

---

# Expected Output

**Architecture Baseline v1.0 sudah ditetapkan** (ADR-015, 2026-08-11). Seluruh dokumen di folder ini terisi dan disepakati (termasuk file N/A sebagai jejak).

Acuan fase: **static-first SSG + konten di repo**; lean content model; DB/jobs/realtime/auth = N/A sadar.

Langkah berikutnya (historis fase): lanjut **Phase 6 — Engineering Planning** di `../06-engineering/`. Status fase aktif ada di `PROJECT_STATE.md`.

---

# Exit Criteria

Kriteria berikut **sudah terpenuhi** untuk Baseline v1.0:

* Seluruh dokumen di atas sudah diisi (bukan TBD).
* Keputusan material tercatat di `DECISIONS.md` (ADR-015, dll.).
* Boss Rezi menyetujui baseline fase ini.

---

# Decision Rules

* Baseline Architecture terkunci — jangan memakai README ini sebagai penunjuk fase aktif; ikuti `PROJECT_STATE.md` (saat ini Repository & Bootstrap).
* Perubahan material setelah baseline → ADR baru + revisi dokumen terdampak.
* Status/progress fase hanya dicatat di `PROJECT_STATE.md`, bukan di README ini.

---

# Related Documents

* `../README.md`
* `../../project-manager/README.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
