# Decision ADR-032

### Title

Home = satu section (hero + Now); bukti AI di About; karya hanya di Work index

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Home** hanya **satu section**: hero lede + `h1` dua baris display (ADR-038). **Now tidak di Home.** Bukan scroll multi-blok. Wallpaper hero (bila ada) tetap di permukaan ini.
2. **Klaim bukti AI** (copy T-021.2 “Bukti / Proof”) pindah ke **About** sebagai **section baru setelah hero**, sebelum offers. Copy tidak ditulis ulang.
3. **Teaser karya di Home dicabut.** Katalog + sheet M10 tetap di `/[locale]/projects`. Tidak ada section “Proyek terpilih” baru di Work index — item yang dulu jadi teaser sudah ada di katalog.
4. **M4 (Work teaser sebagai section Home) retired.** Presence bukti karya = **M9 + M10**. Contact modal + Quick Info **tidak berubah**. **Update (ADR-033):** pita footer **tidak** di Home; About + Workflow + Work index tetap. **Update (ADR-035):** cara kerja pindah ke `/workflow`; bukti AI tetap di About. **Update (ADR-037):** Now pindah ke About; Home = lede + h1.

Ini **override** bagian Hybrid lean yang menempatkan teaser + credibility line di Home (ADR-010, ADR-014 IA, ADR-027 poin teaser Home). Destinasi konten R1 = Home, About, Workflow (ADR-035), Work index.

### Reason

- Boss Rezi mengunci (2026-09-07): situs lebih simple; Home tidak bertele-tele. Bukti AI milik halaman About; karya milik halaman Proyek.
- Work index sudah menampilkan katalog lengkap, termasuk karya yang sebelumnya dikurasi sebagai teaser Home.

### Alternatives Considered

- Pindahkan layout teaser ke atas katalog Work — ditolak; cukup hapus dari Home.
- Gabungkan klaim bukti AI ke copy Approach/offers About yang sudah ada — ditolak; section baru setelah hero.
- Tulis ulang copy T-021 — ditolak saat T-044; **h1 Home kemudian ditulis ulang ADR-036**.

### Impact / Follow-up

- Kode: `home-page.tsx` hero-only; `about-page.tsx` section `#proof`; hapus `home-work-teasers.tsx` / `home-work-all-link.tsx`; `homeTeaserIds` dicabut dari `projects.json`.
- Docs: `04-ux/` (IA, key screens, flows, nav), `02-product/` (M1/M4/M9, MVP, scope), `03-user/user-journey.md`, `05-architecture/` (domain, application layer), ADR-010 / ADR-027 catatan update.
- Task **T-044**. **T-042.1** mengikuti Home hero-only (bukan restyle blok bukti/teaser yang sudah tidak ada).
