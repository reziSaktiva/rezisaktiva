/** URL yang boleh di-embed sebagai pratinjau live (bukan repo). */

export function isHttpLivePreviewUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return false;
    }
    const host = parsed.hostname.toLowerCase();
    if (
      host === "github.com" ||
      host.endsWith(".github.com") ||
      host === "githubusercontent.com" ||
      host.endsWith(".githubusercontent.com")
    ) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Setelah `load`: dokumen `about:blank` yang masih bisa dibaca = framing
 * ditolak (X-Frame-Options / CSP). Cross-origin sukses melempar SecurityError.
 */
export function isIframeFramingBlocked(iframe: HTMLIFrameElement): boolean {
  try {
    const href = iframe.contentWindow?.location.href;
    return href == null || href === "about:blank" || href === "about:srcdoc";
  } catch {
    return false;
  }
}
