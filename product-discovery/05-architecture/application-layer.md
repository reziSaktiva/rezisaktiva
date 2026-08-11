# Application Layer

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-11). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan lapisan aplikasi konseptual untuk website portofolio **rezisaktiva** (static-first).

---

# Overview

R1 memakai **Static-first (SSG)**: halaman digenerate saat build dari konten di repo, disajikan sebagai aset statis (CDN/hosting). Tidak ada application server bisnis, tidak ada API domain, tidak ada layer service transaksi.

Framework konkret (Astro / Next / dll.) dikunci di **06-engineering** — di sini hanya kontrak perilaku.

---

# Purpose

* Mengunci bagaimana request pengunjung dipenuhi
* Menyelaraskan i18n path & geo redirect dengan ADR-014
* Membatasi “application layer” agar tidak membengkak jadi app backend

---

# Architecture Shape

```text
[Konten repo] → [Build / SSG] → [Aset statis + meta]
                      ↑
              [i18n routes /id|/en]
                      
[Pengunjung] → [CDN / hosting]
                  ├── path ber-locale → halaman statis
                  └── `/` (tanpa locale) → redirect aturan UX
```

---

# Entry Points

| Entry | Perilaku |
| ----- | -------- |
| `/{id\|en}/`, `/about`, `/contact` | Sajikan halaman yang di-build untuk locale itu |
| `/` atau URL tanpa locale | Redirect ke locale default (geo → browser → preferensi setelah switcher) per ADR-014 |
| Switcher | Navigasi ke sibling path locale; set preferensi untuk kunjungan `/` berikutnya saja |
| Link satelit | Keluar situs (GitHub/LinkedIn) |
| `mailto:` | Dibuka klien email pengguna — bukan submit ke server kita |

---

# Service Boundaries

**Tidak ada** service domain in-process yang wajib untuk R1.

| “Layanan” konseptual | Di mana |
| -------------------- | ------- |
| Render halaman | Build time (SSG) |
| Locale routing | Framework + hosting rules |
| Meta/OG | Generate saat build per Page×Locale |
| Contact | Mailto / tautan — bukan service kontak |

Boleh ada **edge/redirect helper** di hosting untuk geo-default — itu infrastruktur, bukan domain API.

---

# Data Access Pattern

* Baca konten dari **filesystem/repo pada build**
* Tidak ada runtime query ke DB
* Tidak ada cache application state yang harus disinkronkan antar user

---

# Runtime Concerns (bukan SSR wajib)

| Concern | Pendekatan R1 |
| ------- | ------------- |
| Performa | Statis + CDN |
| i18n | Path prefix di build; redirect `/` di edge/host |
| Preferensi bahasa | Cookie/local — hanya memengaruhi `/` |
| Form/API | Tidak di R1 |
| Preview draft | Opsional later (bukan Must); bila ada, tetap di luar auth produk kecuali ADR baru |

**SSR/hybrid penuh** ditolak untuk R1 (opsi B) — kompleksitas tanpa Must produk baru. Engineering boleh memakai framework yang *mampu* SSR, selama **delivery default R1 = SSG/static**.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Bentuk aplikasi | Static-first SSG + konten repo |
| SSR sebagai default R1 | Tidak |
| API bisnis | Tidak |

---

# Success Criteria

1. Kontrak entry/redirect selaras ADR-014
2. Tidak mensyaratkan DB/auth/jobs
3. Cukup untuk Engineering memilih framework tanpa mengubah bentuk A

---

# Related Documents

* `README.md`
* `domain-model.md`
* `integration-layer.md`
* `../04-ux/information-architecture.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
