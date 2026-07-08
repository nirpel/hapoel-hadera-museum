# Adding Shirts

Add shirt photos under `public/shirts/<shirt-id>/`.

Recommended structure:

```txt
public/
  shirts/
    hadera-2019-20-home-zalka/
      front.jpg
      back.jpg
```

Then add a shirt object to `src/data/shirts.ts`:

```ts
{
  id: "hadera-2019-20-home-zalka",
  collection: "hapoel-hadera",
  team: "הפועל חדרה",
  season: "2019/20",
  title: "חולצת בית 2019/20 - מנשה זלקה",
  playerName: "מנשה זלקה",
  shirtNumber: "15",
  manufacturer: "Lotto",
  size: "L",
  condition: 9,
  classification: "Match Worn",
  status: "In Collection",
  description: "תיאור קצר שמופיע בכרטיס.",
  personalStory: "הסיפור המלא שמופיע בעמוד החולצה.",
  provenance: "מאיפה הגיעה החולצה.",
  images: [
    { src: "/shirts/hadera-2019-20-home-zalka/front.jpg", label: "חזית", side: "front" },
    { src: "/shirts/hadera-2019-20-home-zalka/back.jpg", label: "גב", side: "back" }
  ],
  featured: false
}
```

Notes:

- `id` must be unique and should stay in English lowercase with hyphens.
- For now, keep `collection: "hapoel-hadera"` for every active shirt.
- The collection card shows the `front` image by default and switches to `back` on hover.
- The detail page shows all images in a swipeable gallery.
- You can add more images later with `side: "detail"`, `side: "label"`, or `side: "other"`.
