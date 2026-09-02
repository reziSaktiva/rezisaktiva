/**
 * Stub root — secara normal tidak pernah diakses langsung karena
 * `middleware.ts` selalu redirect `/` ke `/id` atau `/en` (T-010.2).
 * Tetap harus ada agar App Router punya page untuk path `/`.
 */
export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-2 p-6">
      <h1>rezisaktiva</h1>
      <p className="text-muted-foreground">
        Bootstrap stub — konten R1 menyusul.
      </p>
    </div>
  );
}
