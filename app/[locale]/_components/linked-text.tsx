import { linkifyParts } from "@/lib/linkify";

export function LinkedText({ text }: { text: string }) {
  return (
    <>
      {linkifyParts(text).map((part, index) =>
        part.type === "url" ? (
          <a
            key={`${part.href}-${index}`}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part.value}
          </a>
        ) : (
          <span key={index}>{part.value}</span>
        ),
      )}
    </>
  );
}
