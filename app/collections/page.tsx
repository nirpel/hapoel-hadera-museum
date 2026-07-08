import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { collections, mainCollectionSlug } from "@/data/collections";
import { shirts } from "@/data/shirts";

export default function CollectionsPage() {
  const additional = collections.filter((collection) => collection.slug !== mainCollectionSlug);

  return (
    <section className="page-top">
      <div className="site-shell">
        <div className="mono-tag">OTHER COLLECTIONS</div>
        <h1 className="section-title">אוספים נוספים</h1>
        <p className="lead">מעבר להפועל חדרה — אוספים משלימים של חולצות כדורגל. הדגש המרכזי של הארכיון נשאר תמיד אוסף הפועל חדרה.</p>

        <div className="collections-grid">
          {additional.map((collection) => {
            const count = shirts.filter((shirt) => shirt.collection === collection.slug).length;
            return (
              <Link className="collection-tile" href={`/collections/${collection.slug}`} key={collection.slug}>
                {collection.coverImage ? (
                  <Image src={collection.coverImage} alt={collection.name} fill sizes="(max-width: 680px) 100vw, 50vw" />
                ) : (
                  <div className="shirt-placeholder">ח</div>
                )}
                <div className="collection-tile-body">
                  <div className="mono-tag" style={{ color: "rgba(255,255,255,.65)" }}>
                    {count} פריטים
                  </div>
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                  <ArrowLeft aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
