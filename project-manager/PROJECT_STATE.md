# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Development · R1 MVP Clarity (Hybrid lean, M1–M7 + M9 + M13 + M10 overlay + theme toggle)
* **Active Mode:** Development — implementasi fitur/konten R1; bukan scaffold Bootstrap
* **Top Next Tasks:** exit **T-018** (copy T-021 ✅, T-026 ✅) — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Known Issues:** Tidak ada (KI-001 / KI-002 tertutup: tema `rezisaktiva` = mockup `shared.css`)
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done) + `tasks/v03-development-r1.md` (⏳ In Progress, T-013…T-017 ✅, T-019 ✅, T-020 ✅, **T-022** ✅, **T-024** ✅, **T-025** ✅, **T-026** ✅, T-018 ⏳) + `tasks/v10-page-copy.md` (⏳ In Progress — **T-021** ✅; **T-023** ⏸️ Deferred menunggu CV Inggris)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-28 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Development |
| Current Milestone | R1 MVP Clarity (Must M1–M7 + M9 + M13 + M10 overlay sheet + theme toggle) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development T-013…T-017 ✅, T-019 ✅, T-020 ✅, **T-022** ✅, **T-024** ✅, **T-025** ✅, **T-026** ✅, **T-021** ✅; T-018 ⏳ |
| Project Status | Development in progress — UI R1 ✅; copy T-021 ✅; berikutnya exit T-018; T-023 ⏸️ |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012) — exit kriteria terpenuhi (lihat T-012.1).
* Acuan implementasi: `product-discovery/` + ADR-001 … ADR-027. Visual: kode produksi, bukan mockup HTML (ADR-024).
* Fase aktif: **Development** — copy R1 (**T-021**) ✅; berikutnya exit **T-018**. Project sheet M10 (**T-026**) ✅.
* Backlog Development R1: T-013…T-017, T-019, T-020, T-022, T-024, T-025, **T-026** ✅. **T-018** siap (prasyarat T-021 + T-026 terpenuhi).
* **Copy R1:** **T-021.1–T-021.7 ✅** (2026-08-28, termasuk T-021.6 Quick Info + T-021.7 meta). **T-023** ⏸️ Deferred (CV Inggris).
* **ADR-024 (2026-08-21) + T-024 (2026-08-23):** mockup HTML di-deprecate sebagai SoT visual. Iterasi desain About pertama di kode produksi **selesai**.
* **ADR-025 (2026-08-24):** craft pass Hess/Mazur (bukan palet). About tetap M2; copy T-021 tidak diubah; Lenis + page overlay diizinkan. **T-025** ✅ (T-025.8: track tetap terlihat; T-025.9: scrollbar mengikuti tema `rezisaktiva`; T-025.10: anti-kedip mobile setelah scroll; T-025.11: affordance tap/hover pada lead About).
* **Catatan engineering terbuka:** compiler StyleX (`xstyle`/`stylex.create()`, jalur yang direkomendasikan `.cursor/rules/xds.mdc`) belum wired ke build Turbopack project ini — ditemukan saat T-013.4 (build gagal saat dicoba). Styling chrome saat ini memakai `defineTheme` `components` override sebagai gantinya (tidak butuh compiler tambahan). Perlu keputusan terpisah bila ada task berikutnya yang benar-benar butuh `xstyle` (trade-off Turbopack vs webpack) — lihat `COMPLETE_TASK.md`.

---

## Active Conversation Mode

**Development**

Diizinkan:

* Implementasi fitur/konten R1 Must (M1–M7 + M9 + M13 + **M10 overlay sheet (ADR-027, T-026)** + theme toggle: Home, About, Work index, Contact modal, work teaser, language, chrome, meta, Quick Info — ADR-019, ADR-020, ADR-021, ADR-022, ADR-027)
* Polish Should R1 yang tidak menambah halaman baru (paritas ID/EN, a11y dasar, availability line)
* Mockup → kode sesuai UX baseline (ADR-014) + Astryx (ADR-018) — **superseded oleh ADR-024** untuk pekerjaan visual baru: iterasi di kode produksi; mockup HTML arsip
* Diskusi, ADR untuk keputusan material implementasi (termasuk craft/motion ADR-025)
* Diskusi + kunci copy R1 (**T-021**) — AI tidak mengarang teks final
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Scope R2/R3 di luar overlay M10 (halaman `/work/[slug]`, magnet lain) sebelum exit R1; Work index (M9) dan **project sheet overlay (T-026)** sudah Must R1 (ADR-020, ADR-027)
* Mengubah baseline Product Discovery tanpa ADR baru

---

## Known Issues

Tidak ada yang terbuka. KI-001 (warna theme toggle) dan KI-002 (background light) ditutup 2026-08-19: tema built `rezisaktiva` memetakan `--c-*` mockup ke token Astryx; chrome toggle/Contact memakai brand + hover aksen.

---

## Recent Decisions (Ringkasan)

ADR terbaru: **ADR-027** (M10 Must R1 = sheet dari bawah, T-026 sebelum T-018), **ADR-026** (Astryx sampai exit R1; shadcn hanya dievaluasi setelah T-018). Sebelumnya: ADR-025 … ADR-022. Indeks: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
