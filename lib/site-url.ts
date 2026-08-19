/**
 * Canonical origin untuk meta/OG (T-017.2).
 * Nilai dari `NEXT_PUBLIC_SITE_URL` — trailing slash dibuang.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}

export function localePath(locale: string, pathname = ""): string {
  const suffix = pathname.startsWith("/")
    ? pathname
    : pathname
      ? `/${pathname}`
      : "";
  return `/${locale}${suffix}`;
}
