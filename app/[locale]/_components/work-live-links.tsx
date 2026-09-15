import { liveHostLabel } from "@/lib/linkify";

export function WorkLiveLinks({
  hrefs,
  label,
}: {
  hrefs: readonly string[];
  label: string;
}) {
  if (hrefs.length === 0) {
    return null;
  }

  return (
    <div className="qi-links">
      {hrefs.map((href) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          {hrefs.length === 1 ? label : liveHostLabel(href)}
        </a>
      ))}
    </div>
  );
}
