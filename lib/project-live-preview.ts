/** GitHub host (repo), not the live site. */

export function isProjectRepoUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === "github.com" || host.endsWith(".github.com");
  } catch {
    return false;
  }
}

/** URL that may be embedded as a live preview (not a repo). */

export function isHttpLivePreviewUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return false;
    }
    const host = parsed.hostname.toLowerCase();
    if (
      isProjectRepoUrl(url) ||
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
 * After `load`: a still-readable `about:blank` document means framing was
 * denied (X-Frame-Options / CSP). Cross-origin success throws SecurityError.
 */
export function isIframeFramingBlocked(iframe: HTMLIFrameElement): boolean {
  try {
    const href = iframe.contentWindow?.location.href;
    return href == null || href === "about:blank" || href === "about:srcdoc";
  } catch {
    return false;
  }
}