# Deployment & Infrastructure

> Status: **Draft (T-006.2)** — disepakati bersama Boss Rezi (2026-08-11). Kunci formal Baseline Engineering + ADR di **T-006.10**.

Dokumen ini mendefinisikan platform deploy dan topologi infrastruktur untuk website portofolio **rezisaktiva**.

---

# Overview

R1 di-deploy ke **Vercel**, terhubung ke repo publik yang sama (Git-based deploy).

* Situs = keluaran **Next.js SSG** (static-first, ADR-015)
* Redirect locale untuk `/` = **Edge Middleware** / aturan hosting di Vercel (ADR-014)
* Tidak ada server aplikasi bisnis, DB managed, atau queue untuk produk R1

---

# Tujuan

* Mengunci vendor hosting sebelum bootstrap & CI
* Memenuhi fondasi geo/locale redirect tanpa backend kustom
* Menjaga ops ringan untuk pemilik tunggal

---

# Platform Overview

| Aspek | Keputusan R1 |
| ----- | ------------ |
| Platform | **Vercel** |
| Sumber deploy | Git push / PR ke repo ini |
| Runtime produk | Halaman statis (SSG) + edge untuk redirect `/` |
| CDN | Termasuk platform Vercel |
| Server/DB/queue milik produk | Tidak |

**Mengapa Vercel (untuk R1):** native Next.js, preview per PR, domain/TLS sederhana, Middleware cocok untuk aturan locale di `/`.

Alternatif yang ditimbang dan **tidak dipilih** untuk R1: Cloudflare Pages, Netlify, GitHub Pages.

---

# Environment Topology

| Lingkungan | Peran |
| ---------- | ----- |
| **Production** | Situs publik (domain utama) |
| **Preview** | Deployment per PR / branch — review sebelum merge |
| **Local** | `pnpm dev` di mesin pengembang |

Tidak ada staging terpisah wajib untuk R1; Preview Vercel cukup sebagai gerbang kualitas.

Secrets produk R1 diharapkan **minimal** (lihat `environment-management.md` nanti) — situs publik tanpa auth/DB.

---

# Build & Deploy

Alur konseptual:

```text
[Push / PR] → [Vercel build: pnpm install + next build]
                    → [SSG pages + assets]
                    → [CDN / Production atau Preview URL]
```

| Aspek | Catatan |
| ----- | ------- |
| Install | pnpm (selaras `monorepo-setup.md`) |
| Build | `next build` — generate halaman `/id`, `/en`, … |
| Redirect `/` | Middleware (geo → `Accept-Language` → preferensi → fallback `en`) per ADR-014 |
| Contact | `mailto:` — tidak butuh function kontak |
| Analytics | Opsional; bukan blocker deploy |

Detail pipeline CI tambahan (lint/typecheck di GitHub Actions vs hanya Vercel) → `cicd-pipeline.md` (T-006.5).

---

# Domain & TLS

| Aspek | Keputusan R1 |
| ----- | ------------ |
| TLS | Disediakan Vercel (HTTPS) |
| Domain kustom | Ya — diarahkan ke project Vercel saat bootstrap/go-live |
| Apex + `www` | Satu canonical; sisanya redirect (detail saat setup domain) |

Nama domain final dikunci saat go-live; dokumen ini mengunci **cara** (Vercel + TLS), bukan string hostname.

---

# Rollback Strategy

| Situasi | Tindakan |
| ------- | -------- |
| Deploy production buruk | Rollback ke deployment sebelumnya di dashboard Vercel |
| Regresi di PR | Jangan merge; perbaiki di Preview |
| Konten salah | Revert commit / perbaiki file di `content/` + redeploy |

Tidak ada blue-green kustom atau multi-region aktif-aktif untuk R1.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Hosting | Vercel |
| Preview | Vercel Preview (PR) |
| Static export murni wajib | Tidak — SSG di Vercel + Middleware |
| Cloudflare / Netlify / GitHub Pages | Tidak untuk R1 |
| Kunci formal ADR | T-006.10 (Baseline Engineering) |

---

# Success Criteria

1. Satu perintah mental: push → build Vercel → live/preview
2. Redirect `/` bisa diimplementasikan tanpa server kustom
3. Rollback dipahami tanpa runbook panjang

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `monorepo-setup.md` — single-app Next + pnpm
* `cicd-pipeline.md` — CI (menyusul)
* `environment-management.md` — env/secrets (menyusul)
* `../05-architecture/application-layer.md`
* `../05-architecture/integration-layer.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
