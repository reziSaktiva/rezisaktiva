/**
 * Work photos: do not recompress local JPEGs via the optimizer (default q=75
 * makes screenshots look mushy). Unsplash still goes through optimization
 * at a higher quality.
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