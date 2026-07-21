import type { Metadata } from "next";
import { getPrimaryShirtImage, type Shirt } from "@/data/shirts";

export const siteName = "המוזיאון החדרתי";
export const siteDescription = "ארכיון אישי של חולצות הפועל חדרה, חולצות משחק, חולצות נדירות וסיפורים מאחורי האוסף.";

export function getSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "https://hapoel-hadera-museum.vercel.app";

  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  return normalizedUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${cleanPath === "/" ? "" : cleanPath}`;
}

export function shirtTitle(shirt: Shirt) {
  const parts = [shirt.team, shirt.title, shirt.season, shirt.playerName].filter(Boolean);
  return parts.join(" ");
}

export function shirtDescription(shirt: Shirt) {
  return (
    shirt.personalStory ??
    shirt.description ??
    `${shirt.title} של ${shirt.team} מעונת ${shirt.season}, מתוך אוסף חולצות הפועל חדרה.`
  );
}

export function pageMetadata({
  title,
  description = siteDescription,
  path = "/",
  image = "/reference/hero-museum.jpg",
  type = "website"
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
} = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: title ?? siteName,
      description,
      url,
      siteName,
      locale: "he_IL",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title ?? siteName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteName,
      description,
      images: [imageUrl]
    }
  };
}

export function shirtMetadata(shirt: Shirt): Metadata {
  const primaryImage = getPrimaryShirtImage(shirt);

  return pageMetadata({
    title: shirtTitle(shirt),
    description: shirtDescription(shirt),
    path: `/shirt/${shirt.id}`,
    image: primaryImage?.src,
    type: "article"
  });
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  };
}
