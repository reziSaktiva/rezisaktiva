# Decision ADR-035

### Title

Pisah About pribadi dan Workflow; route `/workflow`

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Halaman `/[locale]/about` adalah About pribadi (M2).** Isi: hero (sapaan, lead penuh, karya seni viewport + caption, workplace/Now) + klaim bukti AI (`#proof`, T-021.2 / ADR-032). **Tanpa** badge availability; **tanpa** rest/active di lead (ADR-039). Label chrome: **Tentang** (`id`) / **About** (`en`).
2. **Isi cara kerja pindah ke route baru `/[locale]/workflow` (M14, Must R1).** Isi: offers (“yang bisa saya bantu”), approach, values, empat langkah proses. Label chrome: **Proses Kerja** (`id`) / **How I Work** (`en`) — label yang sebelumnya menempel di `/about`.
3. **Chip nav** = Tentang / About · Proses Kerja / How I Work · Proyek / Projects. Tetap tanpa chip Home (ADR-034). Contact tetap tombol modal.
4. **Copy T-021 tidak ditulis ulang** — hanya dipindah sesuai pemisahan di atas. Empat destinasi konten R1: Home, About, Workflow, Work index. Overlay tidak berubah.

Ini **override** Hybrid lean “tiga halaman konten” (ADR-010 / IA) dan label chrome About = Proses Kerja (ADR-020 poin 3) untuk route `/about`.

### Reason

- Boss Rezi (2026-09-07): halaman About yang ada menjadi Workflow; About baru untuk diri pribadi; section cara kerja tidak campur dengan narasi personal.
- Satu URL `/about` tidak lagi memaksa pengunjung melewati pipeline Discover→Ship untuk mengenal Rezi.

### Alternatives Considered

- Tetap satu halaman `/about` dengan dua heading — ditolak; Boss Rezi minta route terpisah.
- Redirect `/about` → `/workflow` lalu About di path lain — ditolak; `/about` tetap destinasi profil.

### Impact / Follow-up

- Kode: `app/[locale]/workflow/`, `content/workflow.ts`, `lib/nav.ts`, meta/JSON-LD/sitemap.
- Docs: IA, nav, key screens, M2/M14, MVP. Task **T-045**. **T-042.2** About = hero + bukti (ADR-039 untuk kulit/copy lead); **T-042.4** Workflow.
