import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { ShirtDetailGallery } from "@/components/ShirtDetailGallery";
import { shirts, statusLabels } from "@/data/shirts";
import { siteSettings } from "@/data/settings";
import { whatsappUrl } from "@/lib/filters";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return shirts.map((shirt) => ({ id: shirt.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const shirt = shirts.find((item) => item.id === id);

  return {
    title: shirt ? `${shirt.title} | המוזיאון החדרתי` : "המוזיאון החדרתי - אוסף חולצות הפועל חדרה"
  };
}

export default async function ShirtDetailPage({ params }: Props) {
  const { id } = await params;
  const shirt = shirts.find((item) => item.id === id);

  if (!shirt) {
    notFound();
  }

  return (
    <section className="page-top">
      <div className="site-shell">
        <Link className="text-link" href={shirt.collection === "hapoel-hadera" ? "/collection" : `/collection/${shirt.collection}`}>
          <ArrowRight size={16} />
          חזרה לאוסף
        </Link>

        <div className="detail-grid" style={{ marginTop: 32 }}>
          <ShirtDetailGallery shirt={shirt} />

          <article>
            <div className="mono-tag">{shirt.team}</div>
            <h1 className="section-title">{shirt.title}</h1>
            <p className="lead shirt-story">{shirt.personalStory ?? shirt.description}</p>
            {shirt.thanks ? <p className="shirt-thanks">{shirt.thanks}</p> : null}

            <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
              <a className="primary-pill" href={whatsappUrl(siteSettings.whatsappNumber)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                יש לי מידע על החולצה
              </a>
              <a className="outline-pill" href={`mailto:${siteSettings.email}?subject=${encodeURIComponent(shirt.title)}`}>
                <Mail size={18} />
                שליחה במייל
              </a>
            </div>

            <div className="detail-facts">
              <DetailFact label="Season" value={shirt.season} />
              <DetailFact label="Player" value={shirt.playerName} />
              <DetailFact label="Number" value={shirt.shirtNumber ? `#${shirt.shirtNumber}` : undefined} />
              <DetailFact label="Classification" value={shirt.classification} />
              <DetailFact label="Status" value={statusLabels[shirt.status]} />
              <DetailFact label="Manufacturer" value={shirt.manufacturer} />
              <DetailFact label="Size" value={shirt.size} />
              <DetailFact label="Condition" value={shirt.condition ? `${shirt.condition}/10` : undefined} />
              <DetailFact label="Provenance" value={shirt.provenance} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function DetailFact({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div className="detail-fact">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
