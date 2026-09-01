import { Link } from "@astryxdesign/core/Link";
import { HStack } from "@astryxdesign/core/HStack";
import { Text } from "@astryxdesign/core/Text";
import { PERSON, PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";

export function WorkplaceLine({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const copy = PERSON_WORKPLACE_COPY[locale];

  return (
    <HStack gap={2} wrap="wrap" align="baseline" className={className}>
      <Text color="secondary">{copy.prefix}</Text>
      <Link
        href={PERSON.worksFor.url}
        isExternalLink
        hasUnderline
        newTabLabel={copy.newTab}
      >
        {PERSON.worksFor.name}
      </Link>
    </HStack>
  );
}
