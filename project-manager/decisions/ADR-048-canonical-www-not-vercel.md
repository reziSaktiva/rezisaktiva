# Decision ADR-048

### Title

URL kanonis publik = `https://www.rezisaktiva.space`

### Status

Accepted

### Date

2026-11-16

### Decision

1. **Host kanonis** untuk canonical, Open Graph, JSON-LD, sitemap, dan `robots.txt` = `https://www.rezisaktiva.space`.
2. Build di Vercel (Production dan Preview) memakai host itu lewat `getSiteUrl()`, meskipun `NEXT_PUBLIC_SITE_URL` kosong, `localhost`, atau `rezisaktiva.vercel.app`.
3. Permintaan ke `rezisaktiva.vercel.app` diarahkan permanen ke host kanonis. Preview `*.vercel.app` lain tidak diarahkan, supaya PR tetap bisa dibuka.
4. Apex `https://rezisaktiva.space` tetap mengarah ke `www` di DNS/Vercel. Catatan 2026-08-26 yang mengunci apex sebagai kanonis diganti keputusan ini.

### Reason

- HTML production yang live menulis `http://localhost:3000` di canonical, JSON-LD, dan sitemap karena `NEXT_PUBLIC_SITE_URL` tidak terpasang saat build.
- Google menampilkan `https://rezisaktiva.vercel.app/` untuk nama situs. Hostname deploy bukan destination publik.
- Apex sudah berakhir di `www`. Kanonis harus host yang menjawab 200.

### Alternatives Considered

- Hanya mengisi `NEXT_PUBLIC_SITE_URL` di dashboard — ditolak sebagai satu-satunya perbaikan; nilai kosong sudah lolos ke localhost sekali.
- Kanonis tetap apex — ditolak; apex mengarah ke `www`, dan Boss Rezi menyebut `https://www.rezisaktiva.space/` sebagai domain production.

### Impact / Follow-up

- `lib/site-url.ts`, `next.config.ts`, `.env.example`
- `product-discovery/06-engineering/deployment-infrastructure.md`, `environment-management.md`
- Setelah deploy: Search Console properti `https://www.rezisaktiva.space`, sitemap `https://www.rezisaktiva.space/sitemap.xml`. Indeks lama `vercel.app` menyusul setelah Google melihat redirect.
