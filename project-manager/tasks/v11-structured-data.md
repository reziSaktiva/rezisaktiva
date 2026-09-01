# v11 — Structured data (schema.org JSON-LD)

File task **tersendiri** (bukan v0.3). Nomor v01–v06 tetap untuk urutan rilis yang sudah direncanakan. Structured data tidak menempati slot v04–v06.

Isi: markup **schema.org** dalam JSON-LD agar Google (dan mesin cari lain) memahami situs portofolio ini sebagai orang + destinasi, tanpa menambah halaman baru.

Bukan copy. Sitemap/robots/`html lang`/CWV = [`v12-seo.md`](v12-seo.md) **T-030**. Bukan halaman case `/work/[slug]` (R2). Bukan Organization / LocalBusiness / FAQ / HowTo.

**Paket dikunci Boss Rezi (2026-08-31):** identitas + halaman + katalog karya.

---

## Kontrak (wajib)

1. **Satu sumber.** JSON-LD **digenerate saat SSG** dari `content/` + `lib/page-metadata.ts` / `SITE_META` + `lib/nav.ts`. Dilarang file JSON schema terpisah, dilarang string duplikat di builder.
2. **Sama dengan yang terlihat.** Google: structured data harus representasi benar dari konten halaman. Kalau copy di `content/` berubah, schema ikut — Boss Rezi tidak perlu cek dua tempat.
3. **JSON-LD** (`<script type="application/ld+json">`), bukan Microdata/RDFa. Route `page.tsx` tetap Server Component (code-discipline).
4. **Locale.** Graph ID dan EN terpisah, `inLanguage` sesuai halaman. Makna setara, bukan string yang sama dipaksa dua locale.
5. **Tanpa klaim palsu.** Tidak ada rating, review, harga, alamat kantor, follower count, atau URL karya yang tidak ada di `WORK_ITEMS.href`.
6. **Foto.** `Person.image` **jangan diisi** selama hero/About masih placeholder Unsplash (Google: jangan markup gambar default/placeholder). Nyala setelah aset foto nyata.
7. Perpanjangan **M7 Destination meta** (sudah ada title/OG/canonical T-017 + T-021.7). Bukan modul produk baru; **tidak perlu ADR** kecuali nanti mau Organization, `/contact`, atau schema di `/work/[slug]`.

**Baca dulu (semua subtask):** `product-discovery/02-product/feature-modules.md` (M7), `product-scope.md` (bukan toko/blog/perusahaan), `04-ux/information-architecture.md` (kontrak meta), `06-engineering/code-discipline.md` (SSG, page tetap server), ADR-015, ADR-019 (Contact = modal, bukan halaman), ADR-027 (sheet ≠ route), `content/README.md`, `lib/page-metadata.ts`, [schema.org](https://schema.org/docs/schemas.html), [Google structured data gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery), [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [Site name / WebSite](https://developers.google.com/search/docs/appearance/site-names).

---

## Paket schema (terkunci)

| Tipe | Di mana | Isi (sumber) |
| ---- | ------- | ------------ |
| `WebSite` | Home (`/[locale]`) | `name` = brand `rezisaktiva`; `url` = `getSiteUrl()`; `inLanguage`; `publisher`/`author` → Person `@id` |
| `Person` | Didefinisikan sekali, di-`@id`-kan; About memakai sebagai `mainEntity` | Lihat mapping di bawah |
| `ProfilePage` | About saja | `mainEntity` = Person. Home **bukan** ProfilePage (bukan halaman bio murni — Google menolak homepage toko/campuran sebagai profil) |
| `WebPage` | Home | `name`/`description`/`url` dari `SITE_META` + canonical T-017.2; `isPartOf` WebSite; `about` → Person `@id` |
| `CollectionPage` | Work index | Sama pola WebPage, `mainEntity` = ItemList |
| `BreadcrumbList` | About + Work | Label dari `NAV_LABELS`; URL dari `localePath` |
| `ItemList` + `CreativeWork` | Work index | Satu `ListItem` per `WORK_ITEMS`; `name`/`description`/`dateCreated` (tahun)/`url` bila `href` ada; `author` → Person `@id` |

**Di luar paket (jangan ditambah di task ini):**

- `Organization` / `LocalBusiness` / `ProfessionalService` — situs pribadi, bukan perusahaan + NAP
- `ContactPage` — tidak ada route `/contact` (ADR-019)
- `FAQPage`, `HowTo` — tidak ada FAQ; HowTo rich result sudah tidak untuk situs umum; langkah About = narasi, bukan resep
- `SearchAction` — tidak ada pencarian situs
- Schema per-proyek sebagai halaman sendiri — sheet M10 bukan URL; R2 `/work/[slug]` nanti
- `Person.image` selama foto masih Unsplash

---

## Mapping Person → `content/` (jangan diduplikasi)

| Properti schema | Sumber |
| --------------- | ------ |
| `@id` | Stabil, site-wide: `{getSiteUrl()}/#person` (sama di ID dan EN) |
| `name` | Teks nama yang **sudah tampil** di halaman — h1 About: `"Rezi"` (`ABOUT_COPY.h1`). **Jangan** `"Rezi Saktiva"` di JSON-LD selama string itu tidak ada di UI (Google: jangan markup yang tidak terlihat). Nama legal penuh = copy dulu (tampil di About/footer), baru field `content/`, baru schema |
| `alternateName` | Brand `rezisaktiva` |
| `jobTitle` | Field identitas yang sama makna dengan Quick Info (“Fullstack Product Builder”) — jangan parse kalimat bio |
| `description` | `QUICK_INFO_COPY[locale].bio` |
| `email` | `CONTACT_EMAIL` |
| `sameAs` | `CONTACT_LINKS` (`content/data/links.json`) |
| `url` | Canonical About (`localePath(locale, "about")`) — halaman profil |
| `knowsAbout` | `QUICK_INFO_COPY[locale].services` |
| `worksFor` | Nested `Organization` dari `PERSON.worksFor` (nama + URL situs perusahaan). Bukan graph Organization untuk situs ini — situs tetap pribadi. |
| `image` | Kosong sampai foto nyata |

`WebSite.@id` = `{getSiteUrl()}/#website`. Halaman memakai `@graph` dan merujuk `@id`, jangan salin ulang seluruh Person di setiap halaman.

Item Work tanpa `href`: **jangan** mengarang URL; omit `url`.

---

## T-029 — JSON-LD schema.org dari `content/` (M7)

* **Status:** ✅ Done (2026-08-31)
* **Domain:** Engineering
* **Output:** JSON-LD di Home / About / Work index, digenerate dari SoT konten; tes yang menegakkan field schema = field `content/`
* **Keputusan paket:** tabel di atas (2026-08-31)

### Subtasks

- [x] **T-029.1** — Sumber identitas: tambah `content/person.ts` (atau setara) untuk `name`, `jobTitle`, `alternateName`. `name` = `"Rezi"` (sudah di h1 About), `alternateName` = brand `rezisaktiva` (title/footer/nav). Email/sameAs tetap `content/contact.ts`. **Jangan** isi `name` dengan nama legal yang belum tertulis di halaman. Jangan tulis JSON-LD dulu. Pastikan `jobTitle` selaras Quick Info (bukan string baru yang tidak muncul di UI).
- [x] **T-029.2** — Builder `lib/` (mis. `lib/json-ld.ts`) yang menerima `locale` + surface (`home` \| `about` \| `work`) dan mengembalikan `@graph` sesuai paket. Hanya impor `content/` + `getSiteUrl` / `localePath` + `NAV_LABELS` + `SITE_META` / `WORK_ITEMS`. Tanpa literal copy.
- [x] **T-029.3** — Pasang di `app/[locale]/page.tsx`, `about/page.tsx`, `work/page.tsx` (server). Satu `<script type="application/ld+json">` per halaman. Contact modal / Quick Info / sheet **tidak** punya graph sendiri.
- [x] **T-029.4** — Verifikasi: (1) ubah satu string di `content/` → JSON-LD ikut (tes unit atau setara); (2) item tanpa `href` tanpa `url`; (3) tidak ada `Person.image` placeholder; (4) cek Rich Results Test / validator schema.org pada URL lokal atau preview — catat hasil di COMPLETE_TASK, bukan screenshot wajib.
