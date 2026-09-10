# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Validation · R1 MVP Clarity **exited** (Hybrid lean live)
* **Active Mode:** Validation — **T-043** ✅ / **v15** ✅; **T-055** ⏳ polish navbar (v20; **T-055.1–T-055.3** ✅); wallpaper bitmap Workflow **dicabut**; **T-054.1–T-054.3** ✅ debu katedral wallpaper (gerbang + filigree dicabut); **T-054.4** ⏳; **T-053** ✅ pita footer Home (ADR-041); **T-052** ✅ About = section Home (ADR-040); **T-031** ⏳ antrian; bukan R2 tanpa ADR
* **Top Next Tasks:** **T-055** ⏳ (navbar — **T-055.4** verifikasi); **T-031** ⏳ (metadata ikon/OG); **T-054.4** ⏳ (verifikasi Cathedral Breath) — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Known Issues:** Tidak ada (KI-001 / KI-002 tertutup: tema `rezisaktiva` = mockup `shared.css`)
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v20-navbar-polish.md` (**T-055** ⏳) + `tasks/v18-about-home-section.md` (**T-052** ✅, **T-053** ✅) + `tasks/v19-workflow-living-background.md` (**T-054.1–T-054.3** ✅, **T-054.4** ⏳); rilis v01–v17 tetap di `TASKS.md`
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-09-09 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Validation (Phase 1 — `01-business/success-metrics.md`) |
| Current Milestone | R1 MVP Clarity exited (Must M1–M7 + M9 + M10 overlay + M13 + M14 Workflow + theme toggle) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development R1 T-013…T-028 ✅, **T-021** ✅; T-023 ⏸️; **T-029** ✅; **T-030** ✅; **T-031** ⏳; **T-032…T-037** ✅ (ADR-028); **T-038** ✅; **T-039** ✅; **T-040** ✅; **T-041** ✅; **T-044** ✅ (ADR-032); **T-045** ✅ (ADR-035); **T-046** ✅; **T-047** ✅ (ADR-037); **T-048** ✅; **T-049** ✅; **T-050** ✅; **T-051** ✅ (ADR-038); **T-052** ✅ (ADR-040); **T-053** ✅ (ADR-041); **T-042** ✅ (ADR-042); **T-054** ⏳; **T-043** ✅ (ADR-029); **T-055** ⏳ |
| Project Status | R1 exited — destination layak evaluasi; **v14** ✅; **v16** ✅ (Home hero-only); **v17** ✅ (About/Workflow); **v15** ✅; T-031 antrian; T-023 deferred |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012).
* **R1 Development exited (T-018, 2026-08-31).** Must Hybrid lean terkirim di kode: Home (hero + `#about`), Workflow, Work index + sheet, Contact modal, Quick Info, chrome + theme, meta, copy T-021 (isi `/workflow` = ADR-042). Acuan visual: kode produksi (ADR-024).
* Fase aktif: **Validation**. **T-042** ✅ halaman. **T-043** ✅ / **v15** ✅. **T-055** ⏳ polish navbar (v20; **T-055.1–T-055.3** ✅ kaca desktop + compact). Wallpaper bitmap di `/workflow` **dicabut**. **T-054.1–T-054.3** ✅ debu katedral mote individual `fixed` (gerbang + filigree dicabut); **T-054.4** ⏳. **T-053** ✅ pita footer di Home (ADR-041). **T-052** ✅ About = section `#about` di Home (ADR-040). **T-031** ⏳.
* **Copy R1:** **T-021.1–T-021.7 ✅**. **T-046…T-051** ✅. **Isi `/workflow` di-supersede ADR-042** (bukan offers/values/accordion T-021.3). Home tanpa potret. Foto About masih placeholder Unsplash (bukan blocker exit).
* **Catatan engineering:** gap StyleX/Turbopack (T-013.4) ditutup dengan cabut Astryx. Rilis v14 **T-037.7** ✅. **T-038…T-043** / **v15** ✅. Berikutnya **T-055.4**; **T-031**; **T-054.4**.

---

## Active Conversation Mode

**Validation**

Diizinkan:

* Bug / regresi pada permukaan R1 yang sudah live
* **T-038…T-043** identitas visual (kulit saja, ADR-029) — Q&A per permukaan lalu kode; **bukan** tulis ulang copy kecuali **T-046…T-048** dan **isi `/workflow` (ADR-042)**; IA Home mengikuti **ADR-032** + **ADR-037** + **ADR-038** (lede + h1 dua baris, Now di About) dan **ADR-041** (pita footer di Home setelah `#about`); About vs Workflow mengikuti **ADR-035**; permukaan Workflow mengikuti **ADR-042**; latar hidup Workflow = **T-054** (Cathedral Breath, ikut dokumen; bukan MP4)
* Polish R1 yang tidak menambah halaman (a11y, paritas); **T-055** kulit navbar (Q&A lalu kode; job chrome tetap); T-023 saat CV Inggris siap
* **T-031** metadata **sekarang antrian** (ikon/OG/`themeColor` ikut kulit v15; token T-039 sudah)
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

ADR terbaru: **ADR-042** (halaman Workflow decision-driven). **ADR-041** (pita footer di Home). **ADR-040** (About = section Home). **ADR-039** (About hero artwork + lead). **ADR-038** (h1 dua baris display + tautan Workflow). **ADR-037** (lede Home + Now di About). **ADR-036** superseded (wrapping). **ADR-035** (About pribadi vs `/workflow`; isi Workflow di-supersede ADR-042). **ADR-034** (nama display + pekerjaan; chip tanpa Home). **ADR-033** superseded (tanpa footer Home). **ADR-032** (Home = satu section; bukti AI di About; teaser Home dicabut). **ADR-031** (selected chrome = outline darah + teks aksen; ADR-030 superseded). **ADR-029** tetap untuk identitas gothic-blood. ADR-028 tetap untuk stack shadcn + Tailwind. Indeks: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
