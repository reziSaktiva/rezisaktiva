# Decision ADR-035

### Title

Pisah About pribadi dan Workflow; route `/workflow`

### Status

Accepted

### Date

2026-09-07

### Decision

1. **About pribadi (M2) adalah section `#about` di Home** (ADR-040). Isi: Now, sapaan, lead, karya seni + caption (ADR-039). **Bukan** route. Chip chrome: **Tentang** (`id`) / **About** (`en`) → `/{locale}#about`. `/[locale]/about` redirect ke hash itu. **Tanpa** `#proof`.
2. **Isi cara kerja pindah ke route baru `/[locale]/workflow` (M14, Must R1).** Isi halaman: **ADR-042** (hero + tab perbandingan, lima prinsip, pipeline Human vs AI, ADR Vault). Label chrome: **Proses Kerja** (`id`) / **How I Work** (`en`) — label yang sebelumnya menempel di `/about`.
3. **Chip nav** = Tentang / About · Proses Kerja / How I Work · Proyek / Projects. Tetap tanpa chip Home (ADR-034). Contact tetap tombol modal.
4. **Copy T-021 tidak ditulis ulang** untuk pemisahan About vs Workflow (2026-09-07). **Isi `/workflow` kemudian di-supersede ADR-042** (2026-09-08). Halaman konten R1: Home (termasuk `#about`), Workflow, Work index. Overlay tidak berubah.

Ini **override** Hybrid lean “tiga halaman konten” (ADR-010 / IA) dan label chrome About = Proses Kerja (ADR-020 poin 3) untuk route `/about`.

### Reason

- Boss Rezi (2026-09-07): halaman About yang ada menjadi Workflow; About baru untuk diri pribadi; section cara kerja tidak campur dengan narasi personal.
- Satu URL `/about` tidak lagi memaksa pengunjung melewati pipeline Discover→Ship untuk mengenal Rezi.

### Alternatives Considered

- Tetap satu halaman `/about` dengan dua heading — ditolak; Boss Rezi minta route terpisah.
- Redirect `/about` → `/workflow` lalu About di path lain — ditolak saat itu. **Kemudian ADR-040:** `/about` redirect ke `#about` di Home (bukan destinasi halaman profil).

### Impact / Follow-up

- Kode: `app/[locale]/workflow/`, `content/workflow.ts`, `lib/nav.ts`, meta/JSON-LD/sitemap.
- Task **T-045**. **T-042.2** About = section Home (ADR-040); kulit/copy lead ADR-039. **T-042.4** Workflow (ADR-042).
