# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Development · R1 MVP Clarity (Hybrid lean, M1–M7)
* **Active Mode:** Development — implementasi fitur/konten R1; bukan scaffold Bootstrap
* **Top Next Tasks:** Susun backlog Development R1 (v0.3) — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done, T-008…T-012)
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
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; next: backlog Development R1 |
| Project Status | Bootstrap complete — siap Development fitur R1 |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012) — exit kriteria terpenuhi (lihat T-012.1).
* Acuan implementasi: `product-discovery/` + ADR-001 … ADR-018.
* Fase aktif: **Development** — implementasi R1 (Home / About / Contact + work teaser + chrome + meta), bukan scaffold.
* Berikutnya: susun backlog Development R1 (`tasks/v03-*.md`) sebelum implementasi halaman polished.

---

## Active Conversation Mode

**Development**

Diizinkan:

* Implementasi fitur/konten R1 Must (M1–M7: Home, About, Contact, work teaser, language, chrome, meta)
* Polish Should R1 yang tidak menambah halaman baru (paritas ID/EN, a11y dasar, availability line)
* Mockup → kode sesuai UX baseline (ADR-014) + Astryx (ADR-018)
* Diskusi, ADR untuk keputusan material implementasi
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Scope R2/R3 (Work index / case penuh, magnet) sebelum exit R1
* Mengubah baseline Product Discovery tanpa ADR baru

---

## Known Issues

Tidak ada.

---

## Recent Decisions (Ringkasan)

ADR terbaru: **ADR-018** (Astryx menggantikan Tailwind sebagai styling/token R1). Indeks lengkap ADR-001…ADR-018 (title, status, tanggal, ringkasan): lihat [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
