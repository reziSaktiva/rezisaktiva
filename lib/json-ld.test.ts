import { describe, expect, it } from "vitest";
import { ABOUT_COPY } from "@/content/about";
import { PERSON } from "@/content/person";
import { QUICK_INFO_COPY } from "@/content/quick-info";
import { SITE_META } from "@/content/site-meta";
import { WORK_ITEMS } from "@/content/work";
import {
  buildJsonLd,
  findAllNodes,
  findNode,
  type JsonLdNode,
} from "./json-ld";

function personFrom(surface: "home" | "about" | "work") {
  const person = findNode(buildJsonLd("id", surface), "Person");
  expect(person).toBeDefined();
  return person as JsonLdNode;
}

describe("buildJsonLd", () => {
  it("reads Person fields from content/, not literals in the graph builder", () => {
    const person = personFrom("about");
    expect(person.name).toBe(PERSON.name);
    expect(person.alternateName).toBe(PERSON.alternateName);
    expect(person.jobTitle).toBe(PERSON.jobTitle);
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

  it("omits Person.image while portraits are still placeholders", () => {
    for (const surface of ["home", "about", "work"] as const) {
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

  it("builds About as ProfilePage with breadcrumbs and Person as mainEntity", () => {
    const doc = buildJsonLd("id", "about");
    const types = doc["@graph"].map((node) => node["@type"]);
    expect(types).toEqual([
      "Person",
      "WebSite",
      "ProfilePage",
      "BreadcrumbList",
    ]);
    const page = findNode(doc, "ProfilePage");
    expect(page?.mainEntity).toEqual({
      "@id": findNode(doc, "Person")?.["@id"],
    });
    const crumbs = findNode(doc, "BreadcrumbList")
      ?.itemListElement as JsonLdNode[];
    expect(crumbs.map((item) => item.name)).toEqual(["Home", "Proses Kerja"]);
  });

  it("omits url on CreativeWork items that have no href", () => {
    const doc = buildJsonLd("id", "work");
    const works = findAllNodes(doc, "CreativeWork");
    const catalog = WORK_ITEMS.id;
    expect(works).toHaveLength(catalog.length);

    const withoutHref = catalog.filter((item) => !item.href);
    expect(withoutHref.map((item) => item.id)).toEqual(["8"]);

    for (const item of catalog) {
      const node = works.find((work) => work.name === item.name);
      expect(node).toBeDefined();
      expect(node?.description).toBe(item.outcome);
      if (item.href) {
        expect(node?.url).toBe(item.href);
      } else {
        expect(node).not.toHaveProperty("url");
      }
    }
  });
});
