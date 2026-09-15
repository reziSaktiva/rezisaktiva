const ELEMENT_NODE = 1;

export function eventTargetElement(
  target: EventTarget | null | undefined,
): Element | null {
  if (target == null || typeof target !== "object") {
    return null;
  }
  const node = target as Node & {
    closest?: (selector: string) => Element | null;
  };
  if (node.nodeType === ELEMENT_NODE) {
    return node as Element;
  }
  return node.parentElement ?? null;
}

export function isInsideLocaleMenuGuard(
  target: EventTarget | null | undefined,
): boolean {
  const element = eventTargetElement(target);
  if (!element || typeof element.closest !== "function") {
    return false;
  }
  return Boolean(element.closest(".site-nav-toggle, .site-locale-menu"));
}
