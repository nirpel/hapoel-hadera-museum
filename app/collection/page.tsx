import { ShirtGallery } from "@/components/ShirtGallery";
import { collections, mainCollectionSlug } from "@/data/collections";
import { shirts } from "@/data/shirts";

export default function CollectionPage() {
  const collection = collections.find((item) => item.slug === mainCollectionSlug);
  const collectionShirts = shirts.filter((shirt) => shirt.collection === mainCollectionSlug);

  return (
    <section className="page-top">
      <div className="site-shell">
        <div className="mono-tag">המוזיאון · THE MUSEUM</div>
        <h1 className="section-title">{collection?.name ?? "אוסף הפועל חדרה"}</h1>
        <p className="lead">{collection?.description}</p>
        <ShirtGallery shirts={collectionShirts} />
      </div>
    </section>
  );
}
