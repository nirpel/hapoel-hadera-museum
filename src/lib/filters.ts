import type { Shirt } from "@/data/shirts";

export type FilterKey = "season" | "playerName" | "classification" | "size" | "status";

export function uniqueValues(shirts: Shirt[], key: FilterKey) {
  const values = shirts
    .map((shirt) => shirt[key])
    .filter(Boolean)
    .map(String);

  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, "he"));
}

export function whatsappUrl(phone: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent("אהלן ניר, יש לי חולצה או מידע לארכיון הפועל חדרה")}`;
}
