import type { JsonLdDocument } from "@/lib/json-ld";

export function JsonLdScript({ data }: { data: JsonLdDocument }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
