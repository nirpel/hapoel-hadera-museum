export type Collection = {
  slug: string;
  name: string;
  description: string;
  coverImage?: string;
  order: number;
};

export const mainCollectionSlug = "hapoel-hadera";

export const collections: Collection[] = [
  {
    slug: mainCollectionSlug,
    name: "אוסף הפועל חדרה",
    description:
      "כל חולצות הפועל חדרה באוסף — מסודרות, מתועדות ופתוחות לצפייה. השתמשו בפילטרים כדי למצוא עונה, שחקן או סוג חולצה.",
    coverImage: "/reference/hero-museum.jpg",
    order: 1
  }
];
