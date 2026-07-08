import { notFound } from "next/navigation";
import { ShirtGallery } from "@/components/ShirtGallery";
import { collections, mainCollectionSlug } from "@/data/collections";
import { shirts } from "@/data/shirts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collections
    .filter((collection) => collection.slug !== mainCollectionSlug)
    .map((collection) => ({ slug: collection.slug }));
}

export default async function AdditionalCollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection || collection.slug === mainCollectionSlug) {
    notFound();
  }

  const collectionShirts = shirts.filter((shirt) => shirt.collection === collection.slug);

  return (
    <section className="page-top">
      <div className="site-shell">
        <div className="mono-tag">OTHER COLLECTIONS</div>
        <h1 className="section-title">{collection.name}</h1>
        <p className="lead">{collection.description}</p>
        <ShirtGallery shirts={collectionShirts} />
      </div>
    </section>
  );
}
