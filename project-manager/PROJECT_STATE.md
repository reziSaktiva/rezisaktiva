# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Repository & Bootstrap · acuan Engineering Baseline (ADR-016)
* **Active Mode:** Repository & Bootstrap — scaffold app sesuai baseline; belum Development fitur penuh
* **Top Next Tasks:** Eksekusi **T-009.1** (ESLint + Prettier) — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (⏳ Todo, T-009…T-012; T-008 ✅)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-12 |

---

## Current Status

| Item | Value |
| ---- | ----- |
| Current Phase | Repository & Bootstrap |
| Current Milestone | Scaffold app sesuai Engineering Baseline |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008 ✅; next T-009…T-012 |
| Project Status | Discovery complete — bootstrap in progress (fokus T-009.1) |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Backlog Bootstrap **sudah disusun** (`tasks/v02-bootstrap.md`, T-008…T-012).
* Acuan implementasi: `product-discovery/` + ADR-001 … ADR-016.
* **T-008** selesai (scaffold Next + pnpm, struktur folder, scripts, build hijau). Berikutnya: **T-009.1** — ESLint + Prettier.

---

## Active Conversation Mode

**Repository & Bootstrap**

Diizinkan:

* Scaffold aplikasi sesuai Engineering Baseline (ADR-016 / `06-engineering/`)
* Setup tooling, CI, env, deploy sesuai dokumen planning
* Diskusi, ADR untuk keputusan material bootstrap
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Implementasi fitur/konten produk penuh di luar skeleton Bootstrap
* Mengubah baseline Product Discovery tanpa ADR baru

---

## Known Issues

Tidak ada.

---

## Recent Decisions (Ringkasan)

| ADR | Ringkasan |
| --- | --------- |
| ADR-016 | Engineering Baseline v1.0; Next single-app + Vercel + ESLint/Prettier + Tailwind A+ |
| ADR-015 | Architecture Baseline v1.0; static-first SSG + konten repo; N/A DB/jobs/realtime/auth |
| ADR-014 | UX Baseline v1.0; path locale `/id`/`/en`; Contact Email primer + LinkedIn/GitHub |
| ADR-013 | User Baseline v1.0; assumption-led + riset ringan opsional; journey R1 + sekunder tipis |
| ADR-012 | Product Baseline v1.0; Hybrid lean + MoSCoW + R1–R3 |
| ADR-011 | Roles & permissions N/A untuk situs publik; file tetap sebagai jejak |
| ADR-010 | MVP surface Hybrid lean: Home + About + Contact; Work teaser di Home |
| ADR-009 | Business Baseline v1.0; dual north star (brand recall + inbound berkualitas) |
| ADR-008 | Pricing strategy N/A untuk situs; file tetap sebagai jejak keputusan |
| ADR-007 | Business model: brand + soft inbound; growth destination + magnet ringan |
| ADR-006 | Competitor/reference: clarity → presence → craft; hybrid named + kategori |
| ADR-005 | Target market: ICP hybrid founder/PO setara; SEA; digital product/tech |
| ADR-004 | Problem statement dual + rantai visibility → narrative → evaluasi |
| ADR-003 | Repo publik; discovery terbuka; `private/` untuk materi sensitif |
| ADR-002 | Brand primer; product builder + fullstack + AI edge; audiens founder/PO; bilingual geo-aware |
| ADR-001 | Pemisahan `product-discovery/` dari `project-manager/`; skills di `.cursor/skills/` |

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
