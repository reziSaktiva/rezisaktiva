/**
 * Foto karya: JPEG lokal jangan dikompres ulang oleh optimizer (q=75
 * default membuat screenshot terlihat empuk). Unsplash tetap dioptimasi
 * dengan quality lebih tinggi.
 */
export function workPhotoProps(src: string, sizes: string) {
  return {
    src,
    alt: "",
    fill: true as const,
    sizes,
    quality: 90,
    unoptimized: src.startsWith("/"),
  };
}
