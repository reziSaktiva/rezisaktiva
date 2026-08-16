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
        <Text color="secondary" size="sm">
          © {new Date().getFullYear()} rezisaktiva
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
