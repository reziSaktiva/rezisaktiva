import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";

/**
 * Placeholder umum untuk halaman R1 yang belum digarap (About = T-015,
 * Work index = T-019) — dipakai sekadar agar link nav (T-013) tidak 404
 * selama task konten belum dieksekusi.
 */
export function StubPage({ heading, text }: { heading: string; text: string }) {
  return (
    <VStack gap={2} align="center" justify="center" padding={6} minHeight="60vh">
      <Heading level={1}>{heading}</Heading>
      <Text color="secondary">{text}</Text>
    </VStack>
  );
}
