# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Validation · R1 MVP Clarity **exited** (Hybrid lean live)
* **Active Mode:** Validation — **prioritas T-033…T-037** migrasi shadcn (ADR-028); **T-032** ✅; T-031 antrian setelah T-037; T-023 bila aset CV Inggris siap; bukan R2 tanpa ADR
* **Top Next Tasks:** **T-032** ✅; **T-033** ✅; **T-034** ✅; **T-035** ✅; **T-036** ✅; **T-037** ⏳; **T-031** ⏳ antrian; **T-023** ⏸️ — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Known Issues:** Tidak ada (KI-001 / KI-002 tertutup: tema `rezisaktiva` = mockup `shared.css`)
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done) + `tasks/v03-development-r1.md` (✅ Done — **T-028** ✅) + `tasks/v10-page-copy.md` (⏳ In Progress — **T-021** ✅; **T-023** ⏸️ Deferred menunggu CV Inggris) + `tasks/v11-structured-data.md` (✅ Done — **T-029**) + `tasks/v12-seo.md` (✅ Done — **T-030**) + `tasks/v13-metadata.md` (⏳ Open — **T-031**, antrian setelah T-037) + `tasks/v14-shadcn-tailwind.md` (⏳ Open — **T-032…T-036** ✅; **T-037** ⏳ **prioritas**, ADR-028)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-09-03 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Validation (Phase 1 — `01-business/success-metrics.md`) |
| Current Milestone | R1 MVP Clarity exited (Must M1–M7 + M9 + M13 + M10 overlay + theme toggle) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development R1 T-013…T-028 ✅, **T-021** ✅; T-023 ⏸️; **T-029** ✅; **T-030** ✅; **T-031** ⏳; **T-032…T-036** ✅; **T-037** ⏳ (ADR-028) |
| Project Status | R1 exited — destination layak evaluasi; **T-032…T-036** ✅; **prioritas T-037** (cabut Astryx); T-031 antrian setelah T-037; T-023 deferred |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012).
* **R1 Development exited (T-018, 2026-08-31).** Must Hybrid lean terkirim di kode: Home, About, Work index + sheet, Contact modal, Quick Info, chrome + theme, meta, copy T-021. Acuan visual: kode produksi (ADR-024).
* Fase aktif: **Validation** — buktikan clarity + soft path inbound (bukan volume outreach). **Prioritas: T-037** ⏳ cabut Astryx (ADR-028). **T-032…T-036** ✅. **T-031** ⏳ antrian setelah T-037. **T-023** ⏸️ CV Inggris. **T-030** ✅. **T-029** ✅. **T-028** ✅.
* **Copy R1:** **T-021.1–T-021.7 ✅**. Foto hero/About masih placeholder Unsplash (bukan blocker exit).
* **Catatan engineering:** gap StyleX/Turbopack (T-013.4) ditutup dengan cabut Astryx. Docs/rule **T-037.4** ✅. MCP `xds` dicabut **T-037.5** ✅. QA paritas **T-037.6** ✅. Berikutnya Snapshot rilis v14 **T-037.7**.

---

## Active Conversation Mode

**Validation**

Diizinkan:

* Bug / regresi pada permukaan R1 yang sudah live
* **T-032…T-037** migrasi Astryx → shadcn + Tailwind v4 (**ADR-028**) — **prioritas**; per parent/subtask, bukan rewrite seluruh `app/` dalam satu subtask
* Dual-boot Astryx+shadcn di `main` **setelah merge T-032** (PR #58), sampai T-037 mencabut Astryx
* Polish R1 yang tidak menambah halaman (a11y, paritas); **T-031** metadata hanya **setelah T-037**; T-023 saat CV Inggris siap
* Diskusi R2 (halaman case `/work/[slug]`) — implementasi butuh ADR
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Scope R2/R3 (`/work/[slug]`, magnet baru, CMS) tanpa ADR
* Redesain palet/copy/IA sambil migrasi (ADR-028: bentuk visual tetap)
* Mengubah baseline Product Discovery tanpa ADR baru
* Menyatakan rilis v14 selesai selagi Astryx masih ada (DoD = T-037)
* Memasang `xstyle` / compiler StyleX (gap ditutup dengan cabut Astryx)
* Mengutamakan **T-031** di atas **T-032…T-037** (urutan dikunci 2026-09-01: migrasi dulu)
* Mengerjakan T-031 paralel di `app/layout.tsx` selama T-032.5 / wiring tema masih jalan
* Menambah T-033…T-037 ke PR #58 (PR itu T-032 saja)

---

## Known Issues

Tidak ada yang terbuka. KI-001 (warna theme toggle) dan KI-002 (background light) ditutup 2026-08-19: tema built `rezisaktiva` memetakan `--c-*` mockup ke token Astryx; chrome toggle/Contact memakai brand + hover aksen.

---

## Recent Decisions (Ringkasan)

ADR terbaru: **ADR-028** (shadcn/ui + Tailwind v4 menggantikan Astryx; T-032…T-037). ADR-018 superseded. Indeks: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
