# Decision ADR-019

### Title

Contact sebagai Dialog/Modal global + form email/message (override sebagian ADR-014)

### Status

Accepted

### Date

2026-08-15

### Decision

1. **Contact berubah dari halaman berdiri sendiri menjadi Dialog/Modal global** yang bisa dibuka dari tombol/link Contact di nav dan CTA di halaman manapun (Home, Proses Kerja/About, Karya/Work, Work case) — bukan navigasi ke `/[locale]/contact`.
2. **Form singkat (email + message) diizinkan** di dalam modal, sebagai override eksplisit atas ADR-014 poin "Soft CTA Contact = Email primer; LinkedIn & GitHub satelit; **tanpa** WA / Instagram / **form** / calendar di R1".
3. **Hierarki tetap dijaga sebagian**: blok "Contact details" (Email + copy) tetap ditampilkan sebagai identitas utama sebelum blok "Socials" (LinkedIn, GitHub) — bukan deretan ikon sosial setara Email seperti anti-pattern S3, meski keduanya sama-sama muncul di modal.
4. **Tetap dilarang:** calendar booking, WhatsApp, Instagram, dan pricing di Contact — bagian ADR-014 ini tidak berubah.
5. Interaksi cursor kustom (`cursor-ring`) berubah bentuk jadi ikon **X** saat kursor berada di area scrim (luar kartu dialog) selama modal terbuka — pola baru, tidak bertentangan dengan baseline manapun.
6. `design-mockups/contact.html` **dihapus**; referensi mockup untuk implementasi Contact berikutnya pindah ke komponen modal di `shared.js`/`shared.css` (dipanggil dari semua halaman).

### Reason

- Boss Rezi memberi referensi desain (dialog dengan form) dan secara eksplisit meminta form tetap dipakai walau bertentangan dengan ADR-014, setelah diberi tahu konfliknya.
- Modal global lebih konsisten dengan pola "≤1 ketukan" untuk mencapai Contact dari halaman manapun (selaras `navigation-patterns.md`) dibanding halaman terpisah.

### Alternatives Considered

- Modal tanpa form, Email tetap satu-satunya primer (selaras penuh ADR-014) — ditawarkan sebagai Recommended, **ditolak** oleh Boss Rezi.
- Hybrid (form di bawah Email besar) — tidak dipilih; Boss Rezi memilih ikut referensi screenshot secara langsung.
- Tetap halaman `/[locale]/contact` terpisah tanpa modal — ditolak; Boss Rezi ingin pola dialog seperti referensi.

### Impact / Follow-up

- `product-discovery/04-ux/key-screen-patterns.md` (S3) perlu ditandai sebagai **override sebagian** oleh ADR ini (form diizinkan; sisanya S3 tetap berlaku).
- Copy form (label, placeholder, pesan sukses) masih placeholder mockup, sama seperti catatan copy lain di `design-mockups/`.

### Update — 2026-08-16

**Modal-only dikonfirmasi final** — tidak ada route `/[locale]/contact` sebagai fallback/SEO. Dokumen terdampak (`information-architecture.md`, `key-screen-patterns.md`, `application-layer.md`, `domain-model.md`, `v03-development-r1.md` T-016) diselaraskan ke keputusan ini.
