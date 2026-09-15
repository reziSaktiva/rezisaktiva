export type LinkifyPart =
  | { type: "text"; value: string }
  | { type: "url"; href: string; value: string };

const URL_RE = /https?:\/\/[^\s<>"'）)]+/gi;
const TRAILING_PUNCT_RE = /[),.;:!?]+$/;

export function liveHostLabel(url: string): string {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host.startsWith("www.") ? host.slice(4) : host;
  } catch {
    return url;
  }
}

export function catalogLiveUrls(
  liveHref: string | readonly string[] | null | undefined,
): string[] {
  const raw =
    liveHref == null ? [] : Array.isArray(liveHref) ? liveHref : [liveHref];
  return raw.filter(
    (url): url is string => typeof url === "string" && url.length > 0,
  );
}

export function linkifyParts(text: string): LinkifyPart[] {
  const parts: LinkifyPart[] = [];
  let cursor = 0;
  for (const match of text.matchAll(URL_RE)) {
    const start = match.index ?? 0;
    if (start > cursor) {
      parts.push({ type: "text", value: text.slice(cursor, start) });
    }
    const raw = match[0];
    const punct = raw.match(TRAILING_PUNCT_RE)?.[0] ?? "";
    const href = punct ? raw.slice(0, -punct.length) : raw;
    parts.push({ type: "url", href, value: href });
    cursor = start + raw.length - punct.length;
  }
  if (cursor < text.length) {
    parts.push({ type: "text", value: text.slice(cursor) });
  }
  return parts.length > 0 ? parts : [{ type: "text", value: text }];
}
