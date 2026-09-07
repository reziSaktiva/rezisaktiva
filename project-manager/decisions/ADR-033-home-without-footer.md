# Decision ADR-033

### Title

Home tanpa pita footer Contact

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Home** (`/[locale]/`) **tidak** merender pita footer Contact (`footer#contact-cta` / `.site-footer`).
2. **About**, **Workflow**, dan **Work index** tetap menampilkan pita itu (heading + CTA modal + legal + satelit LinkedIn/GitHub) — ADR-025 tetap untuk rute itu. **Update (ADR-035):** Workflow = `/[locale]/workflow`.
3. Arah Contact di Home = tombol chrome + modal (ADR-019) dan Quick Info (ADR-022). Bukan pita di bawah fold.
4. Ini **override** ADR-025 poin 5 (“semua rute”) dan ADR-032 poin 4 (“pita footer tidak berubah”) **hanya untuk permukaan Home**.

### Reason

- Boss Rezi mengunci (2026-09-07): hilangkan footer Contact di Home. Halaman Home tidak boleh scroll ke pita “Get in touch”.
- Selaras Home = satu section / first viewport (ADR-032 / ADR-037): lede + h1, tanpa Now, tanpa blok tambahan.

### Alternatives Considered

- Cabut footer di semua rute — ditolak; About dan Projects tetap butuh pita Contact + legal/satelit.
- Sembunyikan footer Home hanya dengan CSS (`display: none`) — ditolak; masih ada di DOM, a11y, dan clone transisi halaman.

### Impact / Follow-up

- Kode: `SiteFooterSlot` di layout locale; `SiteFooter` tidak ikut SSG Home.
- Docs: `04-ux/` (IA, key screens, nav), M1, ADR-025 / ADR-032 catatan. Task **T-044.6**.
