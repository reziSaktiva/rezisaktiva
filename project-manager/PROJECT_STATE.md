# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Validation · R1 MVP Clarity **exited** (Hybrid lean live)
* **Active Mode:** Validation + **R2** — **ADR-044** ✅ / **T-056.1** ✅; lanjut **T-056.2** copy case; R1 tetap exited
* **Top Next Tasks:** **T-056.2** slug + copy halaman case — [`TASKS.md`](TASKS.md) / [`tasks/r2.md`](tasks/r2.md)
* **Blocker:** Tidak ada
* **Known Issues:** Tidak ada (KI-001 / KI-002 tertutup: tema `rezisaktiva` = mockup `shared.css`)
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + [`tasks/README.md`](tasks/README.md) (`discovery.md` / `bootstrap.md` / `r1.md` / `r2.md`) + [`R1_COMPLETE.md`](R1_COMPLETE.md)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-09-14 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Validation (Phase 1 — `01-business/success-metrics.md`) |
| Current Milestone | R1 exited; R2 magnet dikunci **ADR-044** (hibrid sheet + `/projects/[slug]`) |
| Overall Progress | R1 T-001–T-055 tertutup; **T-023** ❌; **T-056** ⏳ (**T-056.1** ✅) |
| Project Status | R1 exited — destination layak evaluasi; **v14** ✅; **v16** ✅ (Home hero-only); **v17** ✅ (About/Workflow); **v15** ✅; **v13** ✅ (T-031); **v19** ✅ (T-054); **v10** ✅ (**T-023** ❌) |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/bootstrap.md`, T-008…T-012).
* **R1 Development exited (T-018, 2026-08-31).** Must Hybrid lean terkirim di kode: Home (hero + `#about`), Workflow, Work index + sheet, Contact modal, Quick Info, chrome + theme, meta, copy T-021 (isi `/workflow` = ADR-042). Acuan visual: kode produksi (ADR-024).
* Fase aktif: **Validation** + mulai **R2**. **ADR-044** / **T-056.1** ✅. Lanjut **T-056.2**. R1 polish **T-055** / **T-054** / **T-043** tetap Done.
* **Copy R1:** **T-021.1–T-021.7 ✅**. **T-046…T-051** ✅. **Isi `/workflow` di-supersede ADR-042** (bukan offers/values/accordion T-021.3). Home tanpa potret. Foto About masih placeholder Unsplash (bukan blocker exit).
* **Catatan engineering:** gap StyleX/Turbopack (T-013.4) ditutup dengan cabut Astryx. Rilis v14 **T-037.7** ✅. **T-038…T-043** / **v15** ✅. **T-055** / **v20** ✅. **T-031** / **v13** ✅. **T-054** / **v19** ✅. Tidak ada task R1 terbuka.

---

## Active Conversation Mode

**Validation + R2 (ADR-044)**

Diizinkan:

* **T-056** halaman case hibrid (`/[locale]/projects/[slug]`) — copy dulu **T-056.2**, baru kode **T-056.3–T-056.6**
* Bug / regresi pada permukaan R1 yang sudah live
* **T-038…T-043** identitas visual (kulit saja, ADR-029) — Q&A per permukaan lalu kode; **bukan** tulis ulang copy kecuali **T-046…T-048** dan **isi `/workflow` (ADR-042)**; IA Home mengikuti **ADR-032** + **ADR-037** + **ADR-038** (lede + h1 dua baris, Now di About) dan **ADR-041** (pita footer di Home setelah `#about`); About vs Workflow mengikuti **ADR-035**; permukaan Workflow mengikuti **ADR-042**; latar hidup Workflow = **T-054** (Cathedral Breath, ikut dokumen; bukan MP4)
* Polish R1 yang tidak menambah halaman (a11y, paritas); **T-055** kulit navbar (Q&A lalu kode; job chrome tetap)
* **T-031** metadata **selesai** (T-031.1–T-031.5 ✅; token T-039 sudah)
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Cabut sheet M10; tile langsung ke live/repo; rute `/work/[slug]`; CMS; blog; R3 tanpa ADR
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

ADR terbaru: **ADR-044** (R2 hibrid sheet + `/projects/[slug]`; **T-056**). **ADR-043** (tidak ada unduhan CV publik; supersede ADR-023; **T-023** ❌). **ADR-042** (halaman Workflow decision-driven). **ADR-041** (pita footer di Home). **ADR-040** (About = section Home). **ADR-039** (About hero artwork + lead). **ADR-038** (h1 dua baris display + tautan Workflow). **ADR-037** (lede Home + Now di About). **ADR-036** superseded (wrapping). **ADR-035** (About pribadi vs `/workflow`; isi Workflow di-supersede ADR-042). **ADR-034** (nama display + pekerjaan; chip tanpa Home). **ADR-033** superseded (tanpa footer Home). **ADR-032** (Home = satu section; bukti AI di About; teaser Home dicabut). **ADR-031** (selected chrome = outline darah + teks aksen; ADR-030 superseded). **ADR-029** tetap untuk identitas gothic-blood. ADR-028 tetap untuk stack shadcn + Tailwind. Indeks: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
