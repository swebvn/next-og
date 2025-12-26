const BG_IMAGES = [
  "https://tda-sale-stuff.b-cdn.net/lunar/banner/banner-01.jpg",
  "https://tda-sale-stuff.b-cdn.net/lunar/banner/banner-03.jpg",
  "https://tda-sale-stuff.b-cdn.net/lunar/banner/banner-04.jpg",
];

export function getRandomBgImage(bgFromParams) {
  if (bgFromParams) return bgFromParams;

  return BG_IMAGES[Math.floor(Math.random() * BG_IMAGES.length)];
}
