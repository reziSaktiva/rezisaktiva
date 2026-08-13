import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";

export default function Home() {
  return (
    <VStack
      gap={2}
      align="center"
      justify="center"
      padding={6}
      minHeight="100vh"
    >
      <Heading level={1}>rezisaktiva</Heading>
      <Text color="secondary">Bootstrap stub — konten R1 menyusul.</Text>
    </VStack>
  );
}
