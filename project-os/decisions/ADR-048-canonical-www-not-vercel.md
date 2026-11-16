# Decision ADR-048

### Title

Public canonical URL = `https://www.rezisaktiva.space`

### Status

Accepted

### Date

2026-11-16

### Decision

1. **Canonical host** for canonical, Open Graph, JSON-LD, sitemap, and `robots.txt` = `https://www.rezisaktiva.space`.
2. Vercel builds (Production and Preview) use that host via `getSiteUrl()`, even when `NEXT_PUBLIC_SITE_URL` is empty, `localhost`, or `rezisaktiva.vercel.app`.
3. Requests to `rezisaktiva.vercel.app` permanently redirect to canonical host. Other Preview `*.vercel.app` hosts are not redirected so PRs stay openable.
4. Apex `https://rezisaktiva.space` still redirects to `www` in DNS/Vercel. 2026-08-26 note locking apex as canonical is replaced by this decision.

### Reason

- Live production HTML wrote `http://localhost:3000` in canonical, JSON-LD, and sitemap because `NEXT_PUBLIC_SITE_URL` was unset at build.
- Google showed `https://rezisaktiva.vercel.app/` for site name. Deploy hostname is not public destination.
- Apex already ends at `www`. Canonical must be host that returns 200.

### Alternatives Considered

- Only set `NEXT_PUBLIC_SITE_URL` in dashboard — rejected as sole fix; empty value already leaked to localhost once.
- Keep apex canonical — rejected; apex redirects to `www`, and Boss Rezi named `https://www.rezisaktiva.space/` as production domain.

### Impact / Follow-up

- `lib/site-url.ts`, `next.config.ts`, `.env.example`
- `product-discovery/06-engineering/deployment-infrastructure.md`, `environment-management.md`
- After deploy: Search Console property `https://www.rezisaktiva.space`, sitemap `https://www.rezisaktiva.space/sitemap.xml`. Old `vercel.app` index follows after Google sees redirect.