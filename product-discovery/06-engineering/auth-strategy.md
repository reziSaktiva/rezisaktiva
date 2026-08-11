# Authentication Strategy

> Status: **N/A (Baseline v1.0)** — ditetapkan bersama Boss Rezi (2026-08-11). Tidak ada autentikasi produk untuk R1. File tetap ada sebagai jejak — selaras ADR-011 / ADR-015 / ADR-016.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan engineering tercatat.

---

# Overview

Situs **rezisaktiva** adalah portofolio **publik read-only**. Tidak ada login pengunjung, OAuth in-app, session server produk, atau RBAC (ADR-011).

Cookie/local untuk **preferensi locale** (setelah switcher) **bukan** autentikasi — hanya memengaruhi redirect `/` (ADR-014).

Akses ke dashboard Vercel / GitHub adalah **proses pemilik**, di luar auth produk.

---

# Tujuan

* Menyatakan auth strategy R1 = N/A di lapisan engineering
* Mencegah penambahan Auth.js / IdP “karena template folder ada”
* Menyelaraskan dengan `../05-architecture/auth-architecture.md`

---

# Keputusan Auth Strategy

**N/A** — tidak ada auth strategy produk untuk R1.

| Mekanisme | Status R1 |
| --------- | --------- |
| Login / signup pengunjung | Tidak |
| OAuth / social login | Tidak |
| Auth.js / NextAuth / Clerk / dll. | Tidak dipakai |
| JWT / session store produk | Tidak |
| Middleware auth-gated routes | Tidak |
| Preferensi locale cookie/local | Bukan auth |
| Proteksi draft preview | Bukan Must R1 |

---

# Providers

**N/A** — tidak ada identity provider produk.

---

# Session Management

**N/A** untuk session pengguna produk.

Preferensi locale: storage ringan di klien; bukan session auth.

---

# Security Considerations

Meskipun tanpa auth produk, tetap berlaku:

* Jangan commit secret ke repo publik (ADR-003 / `.cursorignore`)
* Jangan bundle `private/` ke client
* TLS via Vercel untuk transport situs
* Dependency & header keamanan → `dx-tooling` / CI (dokumen menyusul)

Menambah auth produk (preview berbayar, area klien, CMS editor) memerlukan **ADR baru** + ubah status dokumen ini dari N/A.

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Auth produk R1 | N/A |
| Selaras | ADR-011, ADR-015, `auth-architecture.md` |
| Baseline Engineering | ADR-016 |

---

# Success Criteria

1. Jelas tidak ada library/provider auth di R1
2. Preferensi locale tidak diklasifikasi sebagai auth
3. Bootstrap tidak memasang Auth.js “default”

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `../05-architecture/auth-architecture.md`
* `../02-product/roles-permissions.md`
* `../../project-manager/decisions/ADR-011-roles-permissions-na-for-portfolio-site.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
