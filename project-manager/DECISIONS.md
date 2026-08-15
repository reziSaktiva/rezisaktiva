# DECISIONS

Indeks Architecture Decision Records (ADR). Full text ada di `decisions/`.

| ADR | Title | Status | Date | Ringkasan | File |
| --- | ----- | ------ | ---- | --------- | ---- |
| ADR-019 | Contact sebagai Dialog/Modal global + form email/message (override sebagian ADR-014) | Accepted | 2026-08-15 | Modal global ganti halaman Contact; form diizinkan; Email tetap tampil sebelum Socials | [ADR-019](decisions/ADR-019-contact-modal-with-form-override.md) |
| ADR-018 | Astryx (component library + StyleX + theme CSS) menggantikan Tailwind sebagai styling/token R1 | Accepted | 2026-08-13 | Replace penuh Tailwind; theme-neutral; agent docs di `.cursor/rules/xds.mdc` | [ADR-018](decisions/ADR-018-astryx-replaces-tailwind-r1.md) |
| ADR-017 | Motion sebagai bagian identitas visual R1 (bukan sekadar Could minimal) | Accepted | 2026-08-12 | Motion naik peran, clarity tetap prioritas; p5aholic hanya utk teknik gerak | [ADR-017](decisions/ADR-017-motion-as-identity-r1.md) |
| ADR-016 | Engineering Baseline v1.0: kunci `06-engineering/` (Next + Vercel + ESLint/Prettier + Tailwind) | Accepted | 2026-08-11 | Kunci 06-engineering; single-app pnpm; CI Actions + Vercel; tokens A+ | [ADR-016](decisions/ADR-016-engineering-baseline-v1.md) |
| ADR-015 | Architecture Baseline v1.0: static-first SSG + konten di repo | Accepted | 2026-08-11 | Kunci 05-architecture; opsi A; DB/jobs/realtime/auth N/A | [ADR-015](decisions/ADR-015-architecture-baseline-v1-static-first.md) |
| ADR-014 | UX Baseline v1.0: kunci `04-ux/` (path locale + Contact soft Email primer) | Accepted | 2026-08-10 | Kunci 04-ux; `/id`/`/en`; Email primer; LinkedIn/GitHub satelit | [ADR-014](decisions/ADR-014-ux-baseline-v1.md) |
| ADR-013 | User Baseline v1.0: kunci `03-user/` (assumption-led + R1 primer & sekunder tipis) | Accepted | 2026-08-07 | Kunci 03-user; metode B; journey R1+sekunder tipis | [ADR-013](decisions/ADR-013-user-baseline-v1.md) |
| ADR-012 | Product Baseline v1.0: kunci `02-product/` (Hybrid lean + MoSCoW + R1–R3) | Accepted | 2026-08-07 | Kunci 02-product; surface Hybrid lean; roles N/A | [ADR-012](decisions/ADR-012-product-baseline-v1.md) |
| ADR-011 | Roles & permissions: N/A untuk situs portofolio publik (file tetap ada) | Accepted | 2026-08-07 | Tidak ada RBAC/auth in-app; jejak N/A eksplisit | [ADR-011](decisions/ADR-011-roles-permissions-na-for-portfolio-site.md) |
| ADR-010 | MVP surface: Hybrid lean (Home + About + Contact; Work teaser di Home) | Accepted | 2026-08-07 | Opsi C; case/Work detail post-kerangka clarity | [ADR-010](decisions/ADR-010-mvp-surface-hybrid-lean.md) |
| ADR-009 | Business Baseline v1.0 + dual north star success metrics | Accepted | 2026-08-07 | Kunci 01-business; NS = brand recall + inbound berkualitas | [ADR-009](decisions/ADR-009-business-baseline-v1-dual-north-star.md) |
| ADR-008 | Pricing strategy: N/A untuk situs portofolio (file tetap ada) | Accepted | 2026-08-07 | Tidak ada harga di situs; jejak N/A eksplisit | [ADR-008](decisions/ADR-008-pricing-strategy-na-for-portfolio-site.md) |
| ADR-007 | Business model: brand + soft inbound; growth destination + magnet ringan | Accepted | 2026-08-07 | Tanpa revenue situs; opsi B growth | [ADR-007](decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md) |
| ADR-006 | Competitor/reference lens: clarity → presence → craft | Accepted | 2026-08-07 (update 2026-08-15) | Hybrid referensi bernama + pesaing kategori; prioritas D; +karolinahess.com/mazurbartek.com sebagai referensi visual mockup | [ADR-006](decisions/ADR-006-competitor-reference-lens-clarity-presence-craft.md) |
| ADR-005 | Target market: ICP hybrid founder/PO setara, fokus SEA, domain digital product/tech | Accepted | 2026-08-06 | Dua archetipe setara; SEA; tech/SaaS/app/platform | [ADR-005](decisions/ADR-005-target-market-icp-sea-tech.md) |
| ADR-004 | Problem statement: framing dual + rantai visibility → narrative → evaluasi | Accepted | 2026-08-06 | Dual; akun tersebar tapi belum menonjol; rantai lengkap | [ADR-004](decisions/ADR-004-problem-statement-dual-chain.md) |
| ADR-003 | Repo publik; product-discovery terbuka; folder private/ untuk sensitif | Accepted | 2026-08-06 | Public repo + privasi selektif via private/ | [ADR-003](decisions/ADR-003-public-repo-privacy-private-folder.md) |
| ADR-002 | Visi portofolio: brand primer, product builder, audiens founder/PO, bilingual geo-aware | Accepted | 2026-08-06 | Model A; positioning berlapis; bahasa geo-aware | [ADR-002](decisions/ADR-002-portfolio-vision-positioning-audience-language.md) |
| ADR-001 | Pemisahan product-discovery dari project-manager + skills Cursor | Accepted | 2026-08-06 | SoT split PD vs PM; skills di `.cursor/skills/` | [ADR-001](decisions/ADR-001-pemisahan-product-discovery-dari-project-manager-skills-cursor.md) |
