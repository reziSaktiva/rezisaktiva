# Decision ADR-020

### Title

Work index (M9) naik jadi Must R1 + nav mobile pakai hamburger (override sebagian ADR-010/ADR-012, override navigation-patterns.md)

### Status

Accepted

### Date

2026-08-15

### Decision

1. **M9 — Work index** (`/[locale]/work`, katalog karya) naik status dari **Post-MVP/Won't** menjadi **Must R1**, mengikuti mockup (`design-mockups/work.html`). Ini override sebagian **ADR-010** poin 3–4 ("Karya pada MVP = section teaser di Home... Halaman Work = magnet bertahap setelah kerangka clarity") dan **ADR-012** (Product Baseline v1.0, MoSCoW terkunci).
2. **M10 — Case/process detail** (halaman detail per karya, `work-case.html`) **tetap Post-MVP / R2** — tidak ikut naik ke Must R1. Nav "Karya" mengarah ke halaman index (M9), bukan ke detail case. Boleh dipercepat kalau konten siap (sudah tercatat sebagai opsi di `feature-modules.md`/`future-roadmap.md`), tapi bukan syarat exit R1.
3. **Primary nav R1 mengikuti mockup penuh**: Home · About (label lokal "Proses Kerja"/"Process") · Karya/Work sebagai link nav biasa; **Contact bukan link nav** — jadi tombol yang membuka modal Contact (selaras ADR-019), bukan navigasi ke halaman.
4. **Mobile nav (<1024px) memakai hamburger menu** — override eksplisit `navigation-patterns.md` bagian "Mobile Considerations" (yang sebelumnya mewajibkan primary nav & switcher selalu terlihat tanpa hamburger). Di balik hamburger: nav halaman (Home/About/Karya) + language switcher. Tetap di luar hamburger (selalu terlihat): tombol Contact + toggle tema.
5. Acceptance "≤ 1 ketukan ke Contact" (`navigation-patterns.md` Success Criteria) tetap terpenuhi karena tombol Contact tidak ikut masuk hamburger di manapun.

### Reason

- Boss Rezi eksplisit memilih mengikuti mockup penuh (termasuk nav Karya + hamburger mobile) setelah diberi tahu konsekuensinya terhadap ADR-010/ADR-012 dan `navigation-patterns.md`.
- Membatasi kenaikan scope hanya ke M9 (index), bukan M10 (case detail), agar perluasan tetap proporsional dan tidak menggeser seluruh R2 ke R1.
- Contact tetap ≤1 ketukan (di luar hamburger) sehingga tidak melanggar acceptance inti navigasi meski pola mobile berubah.

### Alternatives Considered

- Tetap nav lean Home · About · Contact-button tanpa Karya, nav selalu terlihat tanpa hamburger (selaras penuh baseline) — ditawarkan sebagai Recommended di awal, **ditolak** oleh Boss Rezi.
- Nav tampilkan "Karya" tapi arahkan ke anchor/scroll ke work-teaser di Home (tanpa halaman `/work` baru) — ditawarkan, **ditolak**; Boss Rezi memilih route sungguhan.
- Naikkan M9 **dan** M10 sekaligus ke Must R1 (ikut mockup 100% termasuk `work-case.html`) — tidak dipilih; scope dibatasi ke M9 saja sesuai permintaan eksplisit Boss Rezi ("tambahkan route /[locale]/work").

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` — M9 status → Must R1 (override ADR-020); M10 tetap Post-MVP.
- `product-discovery/02-product/feature-priority.md` — M9 pindah dari **Won't Have** ke **Must Have**.
- `product-discovery/02-product/mvp-definition.md` — Must Have tambah "Work index (M9)"; Out of Scope disesuaikan (hanya "detail case study" yang tetap out, bukan seluruh halaman Work).
- `product-discovery/02-product/release-roadmap.md` — R1 Must tambah M9; R2 tetap M10 (+ M9 dicoret dari daftar R2 karena sudah dikerjakan di R1).
- `product-discovery/04-ux/information-architecture.md` — site map tambah `/[id/en]/work` sebagai Must; Page Inventory M9 → R1 Must.
- `product-discovery/04-ux/navigation-patterns.md` — Mobile Considerations ditandai override sebagian oleh ADR ini (hamburger <1024px diizinkan; sisanya tetap berlaku selama tidak bertentangan).
- `project-manager/tasks/v03-development-r1.md` — T-013.1 direvisi (nav items + breakpoint hamburger); tambah task baru **T-019 — Work index R1 (M9)** untuk halaman `/[locale]/work` (di luar chrome T-013).
- Konten & desain detail Work index (copy, kurasi karya) menyusul di task T-019 tersendiri — ADR ini hanya mengunci keputusan scope & nav, bukan isi halaman.

### Update — 2026-09-01 (label chrome)

Label nav M9: ID **Proyek** / EN **Projects**. Path katalog: `/[locale]/projects`. `/[locale]/work` redirect permanen ke `/projects`. About tetap Proses Kerja / How I Work.
