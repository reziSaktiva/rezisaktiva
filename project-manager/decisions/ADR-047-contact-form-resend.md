# Decision ADR-047

### Title

Form Contact mengantar pesan lewat Resend; halaman tetap SSG

### Status

Accepted

### Date

2026-09-15

### Decision

1. **Submit form di modal Contact mengantar email sungguhan** ke inbox (`CONTACT_EMAIL` / `content/data/email.json`). Label “Kirim” / “Terkirim” tidak boleh lagi hanya umpan balik lokal.
2. **Vendor = Resend** (paket gratis cukup untuk volume portofolio). Bukan Formspree, Web3Forms, EmailJS, atau SMTP Gmail di Vercel.
3. **Bentuk teknis:** `POST` Route Handler (contoh `app/api/contact/route.ts`) memanggil Resend dengan kunci server. **Bukan** Server Action di `page.tsx`. **Bukan** `NEXT_PUBLIC_` untuk API key. **Bukan** CMS, DB, atau route `/contact`.
4. **Pengirim (From)** = alamat terverifikasi di domain `rezisaktiva.space` (`RESEND_FROM`). Resend tidak mengirim sebagai `@gmail.com`. **Penerima (To)** = email Gmail di konten. **Reply-To** = email pengunjung di form.
5. **Halaman locale tetap SSG** (ADR-015). Endpoint Contact adalah pengecualian runtime sempit, bukan API bisnis/domain.
6. **Cadangan tetap:** tautan `mailto:` + salin alamat (ADR-019 / ADR-014). Jika Resend gagal atau JS mati, pengunjung masih bisa menghubungi lewat alamat yang terlihat.
7. **Tetap dilarang di Contact:** calendar, WA, Instagram, pricing, unduhan CV publik (ADR-043).
8. **Spam:** validasi server (email + panjang pesan) + honeypot. Captcha hanya jika spam nyata. Jangan log isi pesan di Vercel.
9. Implementasi = **T-059**.

Ini **bukan** supersede ADR-019 untuk modal/form UI. Ini mengunci *pengantaran* pesan. M8 (bagian form) naik dari Could menjadi Must; booking/calendar tetap Could.

### Reason

- Form yang bilang “Terkirim” tanpa mengantar pesan menyesatkan (gesekan inbound).
- Boss Rezi memilih jalur API; Resend gratis (kuota harian/bulanan jauh di atas inbound portofolio) dan kunci tetap di server.
- Route Handler menjaga `page.tsx` tanpa `"use server"` dan tidak mengubah bentuk static-first untuk konten.

### Alternatives Considered

- **mailto compose** (submit membuka klien email) — ditolak; bergantung aplikasi email pengunjung.
- **Web3Forms / Formspree** — ditolak; Boss Rezi memilih API; access key publik (Web3Forms) atau kuota Formspree free lebih ketat.
- **Server Action di page** — ditolak; disiplin kode: Action tidak di route halaman.
- **Gmail SMTP dari Vercel** — ditolak; auth rapuh, mudah diblokir.

### Impact / Follow-up

- Secret: `RESEND_API_KEY`, `RESEND_FROM` di `.env.local` + Vercel (Preview/Production). DNS domain Resend di `rezisaktiva.space` (ops Boss Rezi).
- `contact-modal.tsx` — POST + state kirim/gagal; `mailto:` tetap primer visual.
- `product-discovery/` 02 / 04 / 05 / 06; `.cursor/rules/code-discipline.mdc`
- `tasks/r2.md` **T-059**; indeks `DECISIONS.md`
