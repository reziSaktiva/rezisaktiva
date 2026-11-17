/** Bandung runs on WIB (UTC+7); `Asia/Jakarta` is the IANA zone for it. */
export const BANDUNG_TIME_ZONE = "Asia/Jakarta";

/** Shown until the client clock is read, so SSR and first paint match. */
export const BANDUNG_TIME_PLACEHOLDER = "--:--:--";

/** `HH:MM:SS`, 24-hour, Bandung local time (masthead meta, T-079.1). */
export function formatBandungTime(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: BANDUNG_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).format(date);
}
