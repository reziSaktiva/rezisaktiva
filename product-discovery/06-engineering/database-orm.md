# Database & ORM

> Status: **N/A (Draft T-006.4)** — ditetapkan bersama Boss Rezi (2026-08-11). Tidak ada database/ORM produk untuk R1. File tetap ada sebagai jejak — selaras ADR-015 / `database-strategy.md`. Kunci formal Baseline Engineering + ADR di **T-006.10**.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan engineering tercatat.

---

# Overview

Website **rezisaktiva** R1 = **static-first SSG + konten di repo**. Tidak ada Postgres/MySQL/SQLite/Turso sebagai SoT, tidak ada Prisma/Drizzle/Kysely, tidak ada migrasi schema aplikasi.

SoT konten: file di `content/` (atau setara) — dikunci di `monorepo-setup.md`.

---

# Tujuan

* Menyatakan DB & ORM R1 = N/A di lapisan engineering
* Mencegah penambahan Prisma/Supabase “karena template folder ada”
* Menyelaraskan dengan `../05-architecture/database-strategy.md`

---

# Keputusan Database & ORM

**N/A** — tidak ada database & ORM produk untuk R1.

| Aspek | Status R1 |
| ----- | --------- |
| Database produk | Tidak |
| ORM / query builder | Tidak |
| Connection pooling / serverless DB | Tidak |
| Migrasi schema | Tidak |
| SoT konten | File di repo |
| Session/user store | Tidak (auth N/A) |

---

# Access Architecture

**N/A** untuk akses DB runtime.

Akses konten = baca filesystem saat **build** (SSG). Tidak ada client DB di browser atau server produk.

---

# Migration Strategy

**N/A** — evolusi konten = commit + deploy (Vercel).

Jika nanti dibutuhkan DB (form, CMS, member area):

* ADR baru + ubah status dokumen ini dari N/A
* Dampak ke Architecture (`database-strategy.md`) dan Product scope

---

# Local Development

Tanpa DB lokal. `pnpm dev` cukup untuk app + konten file.

Tidak ada Docker Postgres, seed DB, atau `.env` `DATABASE_URL` untuk R1.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| DB / ORM R1 | N/A |
| Selaras | ADR-015, `database-strategy.md` |
| Kunci formal ADR Engineering | T-006.10 |

---

# Success Criteria

1. Jelas tidak ada dependency ORM/DB di R1
2. Bootstrap tidak memasang Prisma/Drizzle “default”
3. Handoff: konten = file, bukan tabel

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `monorepo-setup.md` — `content/` sebagai SoT
* `../05-architecture/database-strategy.md`
* `../05-architecture/domain-model.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
