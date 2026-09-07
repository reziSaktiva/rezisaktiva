# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Validation · R1 MVP Clarity **exited** (Hybrid lean live)
* **Active Mode:** Validation — **T-051** ✅ (h1 dua baris kiri-atas / kanan-bawah); **T-050** ✅ (lede lantai bawah); **T-049** ✅; **T-048** ✅ (ADR-038); **prioritas T-042** halaman; **T-047** ✅; **T-046** ✅; **T-045** ✅; **T-044** ✅; **T-041** ✅; **T-040** ✅; **T-039** ✅; **T-038** ✅; **T-043** setelah T-042; **T-031** ⏸️; **T-032…T-037** ✅; T-023 bila aset CV Inggris siap; bukan R2 tanpa ADR
* **Top Next Tasks:** **T-042** ⏳; **T-043** ⏳; **T-051** ✅; **T-050** ✅; **T-049** ✅; **T-048** ✅; **T-047** ✅; **T-046** ✅; **T-045** ✅; **T-044** ✅; **T-041** ✅; **T-040** ✅; **T-039** ✅; **T-038** ✅; **T-031** ⏸️; **T-023** ⏸️; **T-032…T-037** ✅ — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Known Issues:** Tidak ada (KI-001 / KI-002 tertutup: tema `rezisaktiva` = mockup `shared.css`)
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done) + `tasks/v03-development-r1.md` (✅ Done — **T-028** ✅) + `tasks/v10-page-copy.md` (⏳ In Progress — **T-021** ✅; **T-046…T-051** ✅; **T-023** ⏸️ Deferred menunggu CV Inggris) + `tasks/v11-structured-data.md` (✅ Done — **T-029**) + `tasks/v12-seo.md` (✅ Done — **T-030**) + `tasks/v13-metadata.md` (⏸️ Deferred — **T-031** tunggu T-043) + `tasks/v14-shadcn-tailwind.md` (✅ Done — **T-032…T-037**, ADR-028) + `tasks/v15-visual-identity.md` (⏳ Open — **T-038** ✅; **T-039** ✅; **T-040** ✅; **T-041** ✅; **T-042…T-043** ⏳; ADR-029, ADR-031, **ADR-035**, **ADR-038**) + `tasks/v16-home-single-section.md` (✅ Done — **T-044**, ADR-032, **ADR-033**) + `tasks/v17-about-workflow.md` (✅ Done — **T-045**, **ADR-035**)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-09-07 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Validation (Phase 1 — `01-business/success-metrics.md`) |
| Current Milestone | R1 MVP Clarity exited (Must M1–M7 + M9 + M10 overlay + M13 + M14 Workflow + theme toggle) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development R1 T-013…T-028 ✅, **T-021** ✅; T-023 ⏸️; **T-029** ✅; **T-030** ✅; **T-031** ⏸️; **T-032…T-037** ✅ (ADR-028); **T-038** ✅; **T-039** ✅; **T-040** ✅; **T-041** ✅; **T-044** ✅ (ADR-032); **T-045** ✅ (ADR-035); **T-046** ✅; **T-047** ✅ (ADR-037); **T-048** ✅; **T-049** ✅; **T-050** ✅; **T-051** ✅ (ADR-038); **T-042…T-043** ⏳ (ADR-029) |
| Project Status | R1 exited — destination layak evaluasi; **v14** ✅; **v16** ✅ (Home hero-only); **v17** ✅ (About/Workflow); **v15** ⏳ halaman **T-042**; T-031 deferred; T-023 deferred |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012).
* **R1 Development exited (T-018, 2026-08-31).** Must Hybrid lean terkirim di kode: Home, About, Workflow, Work index + sheet, Contact modal, Quick Info, chrome + theme, meta, copy T-021. Acuan visual: kode produksi (ADR-024).
* Fase aktif: **Validation** — buktikan clarity + soft path inbound (bukan volume outreach). **T-051** ✅ (h1 dua baris kiri-atas / kanan-bawah). **T-050** ✅ (lede lantai bawah). **T-049** ✅ (skala −2). **T-048** ✅ (ADR-038). **T-047** ✅ (Now About, ADR-037). **T-045** ✅. **T-044** ✅. **Prioritas: T-042** ⏳ halaman. **T-041** ✅. **T-040** ✅. **T-039** ✅. **T-038** ✅. **T-043** setelah T-042. **T-031** ⏸️ sampai T-043. **T-032…T-037** ✅. **T-023** ⏸️ CV Inggris. **T-030** ✅. **T-029** ✅. **T-028** ✅.
* **Copy R1:** **T-021.1–T-021.7 ✅**. **T-046…T-051** ✅ — h1 dua baris kiri-atas / kanan-bawah + lede lantai bawah; Now di About. Home tanpa potret. Foto About masih placeholder Unsplash (bukan blocker exit).
* **Catatan engineering:** gap StyleX/Turbopack (T-013.4) ditutup dengan cabut Astryx. Rilis v14 **T-037.7** ✅. **T-038** ✅. **T-039** ✅. **T-040** ✅. **T-041** ✅. **T-044** ✅. Berikutnya **T-042**; **T-031** setelah T-043.

---

## Active Conversation Mode

**Validation**

Diizinkan:

* Bug / regresi pada permukaan R1 yang sudah live
* **T-038…T-043** identitas visual (kulit saja, ADR-029) — Q&A per permukaan lalu kode; **bukan** tulis ulang copy kecuali **T-046…T-048**; IA Home mengikuti **ADR-032** + **ADR-037** + **ADR-038** (lede + h1 dua baris, Now di About) dan **ADR-033** (tanpa pita footer); About vs Workflow mengikuti **ADR-035**
* Polish R1 yang tidak menambah halaman (a11y, paritas); T-023 saat CV Inggris siap
* **T-031** metadata **setelah T-043** (ikon/OG/`themeColor` ikut kulit baru; token T-039 sudah)
* Diskusi R2 (halaman case `/work/[slug]`) — implementasi butuh ADR
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Scope R2/R3 (`/work/[slug]`, magnet baru, CMS) tanpa ADR
* Tulis ulang copy T-021 atau ubah IA/perilaku overlay tanpa ADR baru (h1 Home: **ADR-038**)
* Mengubah baseline Product Discovery tanpa ADR baru (visual token = T-039 mengikuti ADR-029)
* Memasang `xstyle` / compiler StyleX, atau memasang ulang Astryx (gap T-013.4 sudah ditutup)
* Menambah T-033…T-037 ke PR #58 (PR itu T-032 saja; v14 sudah Done)
* Restyle big-bang tanpa Q&A cluster (gate v15)

---

## Known Issues

Tidak ada yang terbuka. KI-001 (warna theme toggle) dan KI-002 (background light) ditutup 2026-08-19 (saat itu: tema built `rezisaktiva` memetakan `--c-*` mockup ke token Astryx). Token hidup sekarang di `app/globals.css` (ADR-028); chrome toggle/Contact memakai brand + hover aksen.

---

## Recent Decisions (Ringkasan)

ADR terbaru: **ADR-038** (h1 dua baris display + tautan Workflow). **ADR-037** (lede Home + Now di About). **ADR-036** superseded (wrapping). **ADR-035** (About pribadi vs `/workflow`). **ADR-034** (nama display + pekerjaan; chip tanpa Home). **ADR-033** (Home tanpa pita footer). **ADR-032** (Home = satu section; bukti AI di About; teaser Home dicabut). **ADR-031** (selected chrome = outline darah + teks aksen; ADR-030 superseded). **ADR-029** tetap untuk identitas gothic-blood. ADR-028 tetap untuk stack shadcn + Tailwind. Indeks: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
