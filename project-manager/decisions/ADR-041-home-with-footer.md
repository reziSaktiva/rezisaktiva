# Decision ADR-041

### Title

Home merender pita footer Contact

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Home** (`/[locale]/`) **merender** pita footer Contact yang sama (`footer#contact-cta` / `.site-footer`) seperti Workflow dan Work index.
2. Pita itu tetap heading + CTA modal Contact + legal + satelit LinkedIn/GitHub (ADR-025). Copy dari `HOME_COPY` (T-021.2) — tidak dikarang.
3. About sebagai section `#about` **tidak** punya footer sendiri; pita muncul **setelah** hero + About, di layout locale.
4. Ini **supersede ADR-033** (Home tanpa pita). ADR-025 poin 5 kembali berlaku untuk **semua rute** termasuk Home.

### Reason

- Boss Rezi (2026-09-07): tambahkan footer ke Home.
- Home bukan lagi satu viewport (ADR-040): hero lalu `#about`, jadi pita Contact di bawah fold tidak lagi menabrak first-screen.

### Alternatives Considered

- Tetap tanpa footer di Home (ADR-033) — ditolak; permintaan eksplisit.
- Footer khusus Home (legal saja, tanpa pita Contact) — ditolak; satu pola chrome di semua rute.

### Impact / Follow-up

- Kode: cabut `SiteFooterSlot`; `SiteFooter` selalu di layout locale. Task **T-053**.
- Docs: `04-ux/` (IA, key screens, nav), M1/M6, ADR-025 / ADR-032 / ADR-040 catatan.
