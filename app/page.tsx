/**
 * Root stub — normally never hit directly because
 * `proxy.ts` redirects `/` to `/id` or `/en` (T-010.2).
 * Still required so App Router has a page for path `/`.
 */
export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-2 p-6">
      <h1>rezisaktiva</h1>
      <p className="text-muted-foreground">
        Bootstrap stub — R1 content follows.
      </p>
    </div>
  );
}
