# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Development · R1 MVP Clarity (Hybrid lean, M1–M7)
* **Active Mode:** Development — implementasi fitur/konten R1; bukan scaffold Bootstrap
* **Top Next Tasks:** **T-013 selesai** (Site chrome R1); lanjut **T-014** (Home + work teaser) — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done) + `tasks/v03-development-r1.md` (⏳ Todo, T-013…T-019)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-13 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Development |
| Current Milestone | R1 MVP Clarity (Must M1–M7) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development T-013 ✅, T-014…T-019 ⏳; next T-014 |
| Project Status | Development in progress — T-013 (Site chrome R1) selesai, fokus T-014 (Home + work teaser) |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012) — exit kriteria terpenuhi (lihat T-012.1).
* Acuan implementasi: `product-discovery/` + ADR-001 … ADR-018.
* Fase aktif: **Development** — implementasi R1 (Home / About / Contact + work teaser + chrome + meta), bukan scaffold.
* Backlog Development R1 **sudah disusun** (`tasks/v03-development-r1.md`, T-013…T-019, termasuk T-019 Work index M9 baru). **T-013 selesai** — Site chrome R1 (nav Home/About/Karya + hamburger mobile + Contact-button, per ADR-020). Berikutnya: **T-014** — Home + work teaser.

---

## Active Conversation Mode

**Development**

Diizinkan:

* Implementasi fitur/konten R1 Must (M1–M7 + M9: Home, About, Contact, work teaser, language, chrome, meta, Work index — ADR-020)
* Polish Should R1 yang tidak menambah halaman baru (paritas ID/EN, a11y dasar, availability line)
* Mockup → kode sesuai UX baseline (ADR-014) + Astryx (ADR-018)
* Diskusi, ADR untuk keputusan material implementasi
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Scope R2/R3 (Work case/detail penuh — M10, magnet) sebelum exit R1; Work index (M9) sudah masuk R1 via ADR-020
* Mengubah baseline Product Discovery tanpa ADR baru

---

## Known Issues

Tidak ada.

---

## Recent Decisions (Ringkasan)

ADR terbaru: **ADR-020** (Work index/M9 naik jadi Must R1 + nav mobile hamburger — override sebagian ADR-010/ADR-012/`navigation-patterns.md`). Indeks lengkap ADR-001…ADR-020 (title, status, tanggal, ringkasan): lihat [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
