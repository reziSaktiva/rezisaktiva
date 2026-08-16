import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import type { Locale } from "@/lib/locale";

/**
 * Footer chrome R1 (T-013.3, M6): identitas singkat + satelit
 * LinkedIn/GitHub. Bukan pengganti Contact; tanpa WA/IG (ADR-014).
 * URL satelit masih placeholder `#` — diisi saat konten Contact (T-016.1)
 * atau About (T-015.1) tersedia.
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  void locale; // copy footer sama di kedua locale untuk R1; disiapkan untuk paritas nanti

  return (
    <Section variant="transparent" dividers={["top"]} padding={4}>
      <HStack justify="between" align="center" gap={4} wrap="wrap">
        {/*
         * Bug ditemukan 2026-08-16 saat regression test PR theme flash (tidak
         * terkait ADR-021/tema — pre-existing, ada di `main` juga): setiap
         * kali ada state client di ancestor (mis. toggle tema) yang memicu
         * React men-diff ulang, nilai `new Date().getFullYear()` di Server
         * Component ini bisa dianggap mismatch oleh React dev — persis kasus
         * yang React sendiri sebut di pesan error hydration-nya ("Date.now()
         * or Math.random() which changes each time it's called").
         * `suppressHydrationWarning` adalah pola resmi React untuk nilai
         * seperti ini (react.dev/link/hydration-mismatch); dipasang di
         * `<span>` pembungkus (bukan prop `Text` — tipe `TextProps` Astryx
         * belum expose `suppressHydrationWarning` walau runtime-nya
         * meneruskan lewat `...props`, jadi dibungkus manual di sini supaya
         * tidak perlu `as any`). Angka tahun sendiri tidak berubah dalam
         * satu sesi, jadi tidak ada dampak visual — cuma hilangkan warning.
         */}
        <Text color="secondary" size="sm">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> rezisaktiva
        </Text>
        <HStack gap={4} align="center">
          <Link href="#" color="secondary" size="sm">
            LinkedIn
          </Link>
          <Link href="#" color="secondary" size="sm">
            GitHub
          </Link>
        </HStack>
      </HStack>
    </Section>
  );
}
