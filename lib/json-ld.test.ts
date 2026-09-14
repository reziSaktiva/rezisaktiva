import { describe, expect, it } from "vitest";
import { ABOUT_COPY } from "@/content/about";
import { PERSON } from "@/content/person";
import { QUICK_INFO_COPY } from "@/content/quick-info";
import { SITE_META } from "@/content/site-meta";
import { WORK_ITEMS } from "@/content/work";
import {
  buildCaseJsonLd,
  buildJsonLd,
  findAllNodes,
  findNode,
  type JsonLdNode,
} from "./json-ld";
import { getSiteUrl, projectCaseHref } from "./site-url";

function personFrom(surface: "home" | "workflow" | "work") {
  const person = findNode(buildJsonLd("id", surface), "Person");
  expect(person).toBeDefined();
  return person as JsonLdNode;
}

describe("buildJsonLd", () => {
  it("reads Person fields from content/, not literals in the graph builder", () => {
    const person = personFrom("home");
    expect(person.name).toBe(PERSON.name);
    expect(person.alternateName).toBe(PERSON.alternateName);
    expect(person.jobTitle).toBe(PERSON.jobTitle);
    expect(person.worksFor).toEqual({
      "@type": "Organization",
      name: PERSON.worksFor.name,
      url: PERSON.worksFor.url,
    });
    expect(person.description).toBe(QUICK_INFO_COPY.id.bio);
    expect(person.knowsAbout).toEqual([...QUICK_INFO_COPY.id.services]);
    expect(ABOUT_COPY.id.h1.join(" ")).toContain(PERSON.name);
    expect(QUICK_INFO_COPY.id.bio).toContain(PERSON.jobTitle);
  });

  it("follows Quick Info copy when the bio string changes (same object reference)", () => {
    const en = findNode(buildJsonLd("en", "home"), "Person");
    expect(en?.description).toBe(QUICK_INFO_COPY.en.bio);
    expect(en?.description).not.toBe(QUICK_INFO_COPY.id.bio);
  });

  it("omits Person.image because About artwork is not a portrait of Rezi", () => {
    for (const surface of ["home", "workflow", "work"] as const) {
      expect(personFrom(surface)).not.toHaveProperty("image");
    }
  });

  it("builds Home as WebPage, not ProfilePage, without breadcrumbs", () => {
    const doc = buildJsonLd("en", "home");
    const types = doc["@graph"].map((node) => node["@type"]);
    expect(types).toEqual(["Person", "WebSite", "WebPage"]);
    const page = findNode(doc, "WebPage");
    expect(page?.name).toBe(SITE_META.en.home.title);
    expect(page?.description).toBe(SITE_META.en.home.description);
    expect(findNode(doc, "WebSite")?.name).toBe(PERSON.alternateName);
  });

  it("does not emit ProfilePage now that About is a Home section", () => {
    const doc = buildJsonLd("id", "home");
    expect(findNode(doc, "ProfilePage")).toBeUndefined();
    expect(findNode(doc, "WebPage")?.url).toBeDefined();
  });

  it("builds Workflow as WebPage with breadcrumbs", () => {
    const doc = buildJsonLd("id", "workflow");
    const types = doc["@graph"].map((node) => node["@type"]);
    expect(types).toEqual(["Person", "WebSite", "WebPage", "BreadcrumbList"]);
    const page = findNode(doc, "WebPage");
    expect(page?.name).toBe(SITE_META.id.workflow.title);
    const crumbs = findNode(doc, "BreadcrumbList")
      ?.itemListElement as JsonLdNode[];
    expect(crumbs.map((item) => item.name)).toEqual(["Home", "Proses Kerja"]);
  });

  it("points CreativeWork url at the public case page, live/repo as sameAs", () => {
    const doc = buildJsonLd("id", "work");
    const works = findAllNodes(doc, "CreativeWork");
    const catalog = WORK_ITEMS.id;
    expect(works).toHaveLength(catalog.length);

    for (const item of catalog) {
      const node = works.find((work) => work.name === item.name);
      expect(node).toBeDefined();
      expect(node?.description).toBe(item.outcome);
      expect(node?.url).toBe(
        `${getSiteUrl()}${projectCaseHref("id", item.slug)}`,
      );
      if (item.href) {
        expect(node?.sameAs).toEqual([item.href]);
      } else {
        expect(node).not.toHaveProperty("sameAs");
      }
    }
  });

  it("builds a case page graph with breadcrumbs and the in-site work url", () => {
    const item = WORK_ITEMS.en.find((row) => row.slug === "cook-it-real-good");
    expect(item).toBeDefined();
    const doc = buildCaseJsonLd("en", item!);
    const types = doc["@graph"].map((node) => node["@type"]);
    expect(types).toEqual([
      "Person",
      "WebSite",
      "WebPage",
      "BreadcrumbList",
      "CreativeWork",
    ]);
    const page = findNode(doc, "WebPage");
    const work = findNode(doc, "CreativeWork");
    const caseUrl = `${getSiteUrl()}${projectCaseHref("en", item!.slug)}`;
    expect(page?.url).toBe(caseUrl);
    expect(page?.name).toBe(`${PERSON.alternateName} — ${item!.name}`);
    expect(work?.url).toBe(caseUrl);
    expect(work?.sameAs).toEqual([item!.href]);
    const crumbs = findNode(doc, "BreadcrumbList")
      ?.itemListElement as JsonLdNode[];
    expect(crumbs.map((crumb) => crumb.name)).toEqual([
      "Home",
      "Projects",
      item!.name,
    ]);
  });
});
