# Auth Architecture

> Status: **N/A (Baseline v1.0)** — ditetapkan bersama Boss Rezi (2026-08-11). Tidak ada autentikasi produk untuk R1. File tetap ada sebagai jejak — selaras ADR-011 / ADR-015.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan tercatat.

---

# Overview

Situs **rezisaktiva** adalah portofolio **publik read-only**. Tidak ada login pengunjung, session server, OAuth in-app, RBAC, atau area privat sebagai fitur produk (ADR-011).

Cookie/local untuk **preferensi locale** (setelah switcher) **bukan** autentikasi — hanya memengaruhi redirect `/` (ADR-014).

---

# Scope

## In Scope

* Menyatakan N/A auth produk
* Membedakan preferensi locale vs auth

## Out of Scope

* IdP, JWT, session store, MFA
* Preview-gated draft sebagai Must R1

---

# Auth Approach

**N/A** — tidak ada auth approach produk.

| Mekanisme | Status |
| --------- | ------ |
| Login pengunjung | Tidak |
| Authz / RBAC | Tidak (ADR-011) |
| Preferensi locale cookie/local | Bukan auth |
| Akses repo / hosting dashboard | Di luar produk (proses pemilik) |

---

# Session Strategy

**N/A** untuk session pengguna produk.

---

# Future Considerations

Draft preview terlindungi, CMS editor, atau area klien:

* ADR baru + ubah status dokumen ini dari N/A
* Dampak ke Product scope / UX / Engineering
* Jangan menambah auth “karena template folder ada”

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Auth produk R1 | N/A |
| Selaras | ADR-011, ADR-015 |

---

# Success Criteria

1. Jelas tidak ada auth/session produk
2. Preferensi locale tidak diklasifikasi sebagai auth
3. Engineering: auth-strategy R1 = N/A kecuali ADR baru

---

# Related Documents

* `README.md`
* `../02-product/roles-permissions.md`
* `../../project-manager/decisions/ADR-011-roles-permissions-na-for-portfolio-site.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
