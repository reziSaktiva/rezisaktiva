# Decision ADR-016

### Title

Engineering Baseline v1.0: kunci `06-engineering/` (Next.js single-app + Vercel + ESLint/Prettier + Tailwind tokens)

### Status

Accepted

### Date

2026-08-11

### Decision

1. **Engineering Baseline v1.0 ditetapkan** untuk seluruh dokumen di `product-discovery/06-engineering/` (termasuk `auth-strategy.md` dan `database-orm.md` sebagai N/A).
2. Paket engineering yang terkunci bersama baseline ini:
   - **Repo** = single-app di repo ini (bukan monorepo); **Next.js** App Router static-first SSG; **pnpm**; TypeScript strict (`monorepo-setup.md`)
   - **Deploy** = **Vercel** (Preview PR + Production); Middleware/edge untuk redirect locale `/` (`deployment-infrastructure.md`)
   - **Auth strategy** = **N/A** — selaras ADR-011 / ADR-015 (`auth-strategy.md`)
   - **Database/ORM** = **N/A** — selaras ADR-015 (`database-orm.md`)
   - **CI/CD** = opsi B — GitHub Actions (lint + typecheck; test bila ada) + deploy Vercel (`cicd-pipeline.md`)
   - **Env** = Local / Preview / Production; katalog tipis; secret di Vercel; tanpa vault (`environment-management.md`)
   - **DX** = **ESLint + Prettier**; tanpa husky R1; test runner belum wajib (`dx-tooling.md`)
   - **Dependency** = `pnpm-lock.yaml` committed; range `^`; **Dependabot** (Renovate alternatif); Bun ditolak sebagai PM R1 (`dependency-strategy.md`)
   - **Tokens** = **Tailwind + CSS variables**; light = default; fondasi dark/`dark:` siap; toggle UI = Should/Later; nilai visual boleh diiterasi (`design-tokens.md`)
3. Tidak ada perubahan Must terhadap Architecture Baseline (ADR-015) atau baseline produk/UX sebelumnya; engineering menghormati bentuk static-first SSG + konten di repo.
4. Perubahan material setelah ini → **ADR baru** + revisi dokumen terdampak.

### Reason

- Seluruh dokumen `06-engineering/` sudah diisi dan disepakati (T-006.1–T-006.9); exit criteria fase Engineering terpenuhi.
- Mengunci stack sebelum bootstrap agar implementasi tidak menebak framework, host, CI, DX, atau sistem token.
- N/A auth/ORM menjaga proporsi portofolio publik lean (pola ADR-008 / ADR-011).

### Alternatives Considered

- **Monorepo / Turborepo** — ditolak untuk R1; single-app cukup.
- **Biome** mengganti ESLint + Prettier — ditolak; familiaritas + `eslint-config-next` + ekosistem plugin.
- **Bun** sebagai package manager — ditolak; tetap pnpm untuk prediktabilitas Next/Vercel.
- **Dark mode Must** (toggle + QA penuh di R1) — ditolak; A+ (fondasi siap, toggle Later).
- **CI Vercel-only tanpa Actions** — ditolak; opsi B dikunci di T-006.5.
- Engineering Baseline v1.0 seperti di atas — diterima.

### Update — 2026-09-03

Styling/token poin 2 (**Tailwind + CSS variables**) sudah dua kali diganti: **ADR-018** (Astryx) lalu **[ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md)** (shadcn/ui + Tailwind CSS v4). Isi ADR ini tetap jejak Engineering Baseline v1.0; kontrak styling aktif = ADR-028.
