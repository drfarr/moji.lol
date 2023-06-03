export const CONFIG = {
  title: "moji.lol",
  ogTitle: "Your one stop shop for mojis!",
  description:
    "moji.lol is the best place on the internet to get your moji fix",
  url: "https://www.moji.lol",
};
export const DEFAULT_SEO = {
  title: CONFIG.ogTitle,
  description: CONFIG.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: CONFIG.url,
    title: CONFIG.ogTitle,
    description: CONFIG.description,
    image: CONFIG.url + "/assets/images/social/card.png",
    siteName: "moji.lol",
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    site: CONFIG.ogTitle,
    cardType: "summary_large_image",
  },
};
