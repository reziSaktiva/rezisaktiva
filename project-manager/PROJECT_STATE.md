# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Development · R1 MVP Clarity (Hybrid lean, M1–M7 + M9 + M13 + theme toggle)
* **Active Mode:** Development — implementasi fitur/konten R1; bukan scaffold Bootstrap
* **Top Next Tasks:** lanjut **T-014** (Home + work teaser); **T-013.4** (theme toggle) dan **T-020** (Quick Info / M13) masuk backlog — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done) + `tasks/v03-development-r1.md` (⏳ Todo, T-013…T-020)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-16 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Development |
| Current Milestone | R1 MVP Clarity (Must M1–M7 + M9 + M13 + theme toggle) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development T-013.1–T-013.3 ✅, T-013.4 + T-014…T-020 ⏳; next T-014 |
| Project Status | Development in progress — fokus T-014 (Home + work teaser); T-013.4 / T-020 masuk backlog |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012) — exit kriteria terpenuhi (lihat T-012.1).
* Acuan implementasi: `product-discovery/` + ADR-001 … ADR-022.
* Fase aktif: **Development** — implementasi R1 (Home / About / Contact + work teaser + chrome + Quick Info + meta), bukan scaffold.
* Backlog Development R1 **sudah disusun** (`tasks/v03-development-r1.md`, T-013…T-020, termasuk T-019 Work index M9, T-013.4 theme toggle, T-020 Quick Info M13). **T-013.1–T-013.3 selesai** — Site chrome R1 (nav Home/About/Karya + hamburger mobile + Contact-button, per ADR-020). Berikutnya: **T-014** — Home + work teaser. **T-013.4** dan **T-020** masuk backlog (bukan mengganti fokus T-014).

---

## Active Conversation Mode

**Development**

Diizinkan:

* Implementasi fitur/konten R1 Must (M1–M7 + M9 + M13 + theme toggle: Home, About, Contact, work teaser, language, chrome, meta, Work index, Quick Info — ADR-020, ADR-021, ADR-022)
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

ADR terbaru: **ADR-021** (theme toggle UI naik Must R1; default ship tetap light) dan **ADR-022** (modul baru M13 Quick Info panel — overlay global, bukan route; exclude Work case). Indeks lengkap ADR-001…ADR-022: lihat [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
