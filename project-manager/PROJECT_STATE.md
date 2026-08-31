# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Validation · R1 MVP Clarity **exited** (Hybrid lean live)
* **Active Mode:** Validation — polish/bug R1, **T-029** JSON-LD, **T-030** SEO, T-023 bila aset CV Inggris siap; bukan scaffold, bukan R2 tanpa ADR
* **Top Next Tasks:** **T-029** ⏳ JSON-LD; **T-030** ⏳ SEO; **T-023** ⏸️ (CV Inggris) — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Known Issues:** Tidak ada (KI-001 / KI-002 tertutup: tema `rezisaktiva` = mockup `shared.css`)
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done) + `tasks/v03-development-r1.md` (✅ Done — **T-028** ✅) + `tasks/v10-page-copy.md` (⏳ In Progress — **T-021** ✅; **T-023** ⏸️ Deferred menunggu CV Inggris) + `tasks/v11-structured-data.md` (⏳ Open — **T-029**) + `tasks/v12-seo.md` (⏳ Open — **T-030**)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-31 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Validation (Phase 1 — `01-business/success-metrics.md`) |
| Current Milestone | R1 MVP Clarity exited (Must M1–M7 + M9 + M13 + M10 overlay + theme toggle) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development R1 T-013…T-028 ✅, **T-021** ✅; T-023 ⏸️; **T-029** ⏳; **T-030** ⏳ |
| Project Status | R1 exited — destination layak evaluasi; berikutnya **T-029** (JSON-LD) + **T-030** (SEO); T-023 (CV Inggris) deferred |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012).
* **R1 Development exited (T-018, 2026-08-31).** Must Hybrid lean terkirim di kode: Home, About, Work index + sheet, Contact modal, Quick Info, chrome + theme, meta, copy T-021. Acuan visual: kode produksi (ADR-024).
* Fase aktif: **Validation** — buktikan clarity + soft path inbound (bukan volume outreach). Backlog terbuka: **T-029** ⏳ JSON-LD; **T-030** ⏳ SEO; **T-023** ⏸️ CV Inggris. **T-028** ✅.
* **Copy R1:** **T-021.1–T-021.7 ✅**. Foto hero/About masih placeholder Unsplash (bukan blocker exit).
* **Catatan engineering terbuka:** compiler StyleX belum wired (T-013.4). Jalur R1 = className + token di `globals.css` (T-027). Wiring compiler = task terpisah, bukan T-028.

---

## Active Conversation Mode

**Validation**

Diizinkan:

* Bug / regresi pada permukaan R1 yang sudah live
* Polish yang tidak menambah halaman (a11y, paritas, **T-029** JSON-LD, **T-030** SEO, T-023 saat CV Inggris siap)
* Diskusi evaluasi shadcn (ADR-026, setelah T-018) — migrasi hanya dengan ADR baru
* Diskusi R2 (halaman case `/work/[slug]`) — implementasi butuh ADR
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Scope R2/R3 (`/work/[slug]`, magnet baru, CMS) tanpa ADR
* Rewrite besar `app/` / `globals.css` craft dalam satu task
* Mengubah baseline Product Discovery tanpa ADR baru
* Memasang Tailwind atau `xstyle` sebelum task compiler

---

## Known Issues

Tidak ada yang terbuka. KI-001 (warna theme toggle) dan KI-002 (background light) ditutup 2026-08-19: tema built `rezisaktiva` memetakan `--c-*` mockup ke token Astryx; chrome toggle/Contact memakai brand + hover aksen.

---

## Recent Decisions (Ringkasan)

ADR terbaru: **ADR-027** (M10 Must R1 = sheet dari bawah), **ADR-026** (Astryx sampai exit R1; evaluasi shadcn boleh setelah T-018). Indeks: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
