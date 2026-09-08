# Decision ADR-034

### Title

Chrome: nama display + pekerjaan; Home tidak di chip nav

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Identitas kiri header** menampilkan **nama** (`PERSON_CHROME.name` = `REZI SAKTIVA`) dengan **font display yang sama keluarga judul halaman**, lalu **pekerjaan** (`PERSON_CHROME.jobTitle` = `Web Engineer`) di sampingnya dengan font body. Bukan wordmark grotesk lowercase `rezisaktiva` (override T-040.1). Bukan `PERSON.name` / `PERSON.jobTitle` (itu About + Quick Info / JSON-LD).
2. **Hanya nama yang tautan** ke Home (`/[locale]/`). Pekerjaan bukan tautan dan bukan bagian hit-area nama.
3. **Chip nav halaman** = About + Workflow + Proyek / Projects. **Tidak ada item Home** di pill desktop maupun hamburger. Destinasi Home tetap ada lewat nama (selaras opsi `navigation-patterns.md`: label Home boleh disembunyikan jika brand = Home). **Update (ADR-035 / ADR-040):** About = Tentang / About (`/{locale}#about`); Workflow = Proses Kerja / How I Work (`/workflow`).
4. Breadcrumb JSON-LD tetap memakai label Home di `NAV_LABELS` (bukan chip UI).

### Reason

- Boss Rezi (2026-09-07): ganti font nama agar sama dengan judul; tulis pekerjaan di samping; cabut Home dari chip; klik ke Home hanya pada nama.
- Menghindari duplikasi Home (nama + chip) setelah Home jadi satu viewport (ADR-032).

### Alternatives Considered

- Tetap wordmark `rezisaktiva` + chip Home — ditolak.
- Seluruh baris nama+pekerjaan sebagai satu tautan — ditolak; pekerjaan tidak boleh klik.

### Impact / Follow-up

- Kode: `site-header.tsx`, `lib/nav.ts` (`NAV_ITEMS` tanpa home), `.site-brand*` di `globals.css`.
- Docs: `04-ux/` nav + IA + key screens; catatan ADR-020. Task **T-040.7**.
