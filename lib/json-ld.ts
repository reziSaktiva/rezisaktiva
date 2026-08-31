import { PERSON } from "@/content/person";
import { CONTACT_EMAIL, CONTACT_SOCIALS } from "@/content/contact";
import { QUICK_INFO_COPY } from "@/content/quick-info";
import { SITE_META, type SiteSurface } from "@/content/site-meta";
import { WORK_ITEMS } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { NAV_LABELS } from "@/lib/nav";
import { getSiteUrl, localePath } from "@/lib/site-url";

export type JsonLdSurface = SiteSurface;

export type JsonLdNode = {
  "@type": string | readonly string[];
  "@id"?: string;
  [key: string]: unknown;
};

export type JsonLdDocument = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

function personId(): string {
  return `${getSiteUrl()}/#person`;
}

function websiteId(): string {
  return `${getSiteUrl()}/#website`;
}

function pageUrl(locale: Locale, path: string): string {
  return `${getSiteUrl()}${localePath(locale, path)}`;
}

function dateCreatedFromYear(year: string): string {
  const match = year.match(/^(\d{4})/);
  return match ? match[1] : year;
}

function personNode(locale: Locale): JsonLdNode {
  return {
    "@type": "Person",
    "@id": personId(),
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    jobTitle: PERSON.jobTitle,
    description: QUICK_INFO_COPY[locale].bio,
    email: CONTACT_EMAIL,
    url: pageUrl(locale, "about"),
    sameAs: [CONTACT_SOCIALS.linkedin.href, CONTACT_SOCIALS.github.href],
    knowsAbout: [...QUICK_INFO_COPY[locale].services],
  };
}

function websiteNode(locale: Locale): JsonLdNode {
  const id = { "@id": personId() };
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    name: PERSON.alternateName,
    url: getSiteUrl(),
    inLanguage: locale,
    publisher: id,
    author: id,
  };
}

function webPageNode(locale: Locale): JsonLdNode {
  const url = pageUrl(locale, "");
  const meta = SITE_META[locale].home;
  return {
    "@type": "WebPage",
    "@id": url,
    name: meta.title,
    description: meta.description,
    url,
    inLanguage: locale,
    isPartOf: { "@id": websiteId() },
    about: { "@id": personId() },
  };
}

function profilePageNode(locale: Locale): JsonLdNode {
  const url = pageUrl(locale, "about");
  const meta = SITE_META[locale].about;
  return {
    "@type": "ProfilePage",
    "@id": url,
    name: meta.title,
    description: meta.description,
    url,
    inLanguage: locale,
    isPartOf: { "@id": websiteId() },
    about: { "@id": personId() },
    mainEntity: { "@id": personId() },
  };
}

function collectionPageNode(locale: Locale): JsonLdNode {
  const url = pageUrl(locale, "work");
  const meta = SITE_META[locale].work;
  return {
    "@type": "CollectionPage",
    "@id": url,
    name: meta.title,
    description: meta.description,
    url,
    inLanguage: locale,
    isPartOf: { "@id": websiteId() },
    about: { "@id": personId() },
    mainEntity: { "@id": `${url}#itemlist` },
  };
}

function breadcrumbNode(locale: Locale, leaf: "about" | "work"): JsonLdNode {
  const homeUrl = pageUrl(locale, "");
  const leafUrl = pageUrl(locale, leaf);
  return {
    "@type": "BreadcrumbList",
    "@id": `${leafUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: NAV_LABELS[locale].home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: NAV_LABELS[locale][leaf],
        item: leafUrl,
      },
    ],
  };
}

function creativeWorkNode(
  locale: Locale,
  item: (typeof WORK_ITEMS)[Locale][number],
  workIndexUrl: string,
): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "CreativeWork",
    "@id": `${workIndexUrl}#work-${item.id}`,
    name: item.name,
    description: item.outcome,
    dateCreated: dateCreatedFromYear(item.year),
    inLanguage: locale,
    author: { "@id": personId() },
  };
  if (item.href) {
    node.url = item.href;
  }
  return node;
}

function itemListNode(locale: Locale): JsonLdNode {
  const workIndexUrl = pageUrl(locale, "work");
  const items = WORK_ITEMS[locale];
  return {
    "@type": "ItemList",
    "@id": `${workIndexUrl}#itemlist`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: creativeWorkNode(locale, item, workIndexUrl),
    })),
  };
}

export function buildJsonLd(
  locale: Locale,
  surface: JsonLdSurface,
): JsonLdDocument {
  const graph: JsonLdNode[] = [personNode(locale), websiteNode(locale)];

  if (surface === "home") {
    graph.push(webPageNode(locale));
  } else if (surface === "about") {
    graph.push(profilePageNode(locale), breadcrumbNode(locale, "about"));
  } else {
    graph.push(
      collectionPageNode(locale),
      breadcrumbNode(locale, "work"),
      itemListNode(locale),
    );
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function findNode(
  document: JsonLdDocument,
  type: string,
): JsonLdNode | undefined {
  return document["@graph"].find((node) => node["@type"] === type);
}

export function findAllNodes(
  document: JsonLdDocument,
  type: string,
): JsonLdNode[] {
  return document["@graph"].flatMap((node) => collectNodesOfType(node, type));
}

function collectNodesOfType(node: unknown, type: string): JsonLdNode[] {
  if (!node || typeof node !== "object") {
    return [];
  }
  const record = node as JsonLdNode;
  const found: JsonLdNode[] = [];
  if (record["@type"] === type) {
    found.push(record);
  }
  for (const value of Object.values(record)) {
    if (Array.isArray(value)) {
      for (const child of value) {
        found.push(...collectNodesOfType(child, type));
      }
    } else {
      found.push(...collectNodesOfType(value, type));
    }
  }
  return found;
}
