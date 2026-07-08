import Image from "next/image";
import Link from "next/link";
import { getBackShirtImage, getPrimaryShirtImage, statusLabels, type Shirt } from "@/data/shirts";

export function ShirtCard({ shirt }: { shirt: Shirt }) {
  const frontImage = getPrimaryShirtImage(shirt);
  const backImage = getBackShirtImage(shirt);

  return (
    <Link className="shirt-card" href={`/shirt/${shirt.id}`}>
      <div className={`shirt-card-media${backImage ? " has-back-image" : ""}`}>
        {frontImage ? (
          <>
            <Image
              src={frontImage.src}
              alt={`${shirt.team} ${shirt.season} ${frontImage.label}`}
              fill
              sizes="(max-width: 680px) 100vw, 25vw"
              className="shirt-card-image shirt-card-image-front"
            />
            {backImage ? (
              <Image
                src={backImage.src}
                alt={`${shirt.team} ${shirt.season} ${backImage.label}`}
                fill
                sizes="(max-width: 680px) 100vw, 25vw"
                className="shirt-card-image shirt-card-image-back"
              />
            ) : null}
          </>
        ) : (
          <div className="shirt-placeholder">ח</div>
        )}
        {shirt.status !== "In Collection" ? <span className="status-badge">{statusLabels[shirt.status]}</span> : null}
        <div className="card-tag">
          <span>{shirt.season || "-"}</span>
          <span>{shirt.classification}</span>
        </div>
      </div>
      <div className="shirt-card-body">
        <h3>{shirt.title}</h3>
        <div className="card-meta">
          {shirt.playerName ? <span>{shirt.playerName}</span> : null}
          {shirt.playerName && shirt.shirtNumber ? <span>·</span> : null}
          {shirt.shirtNumber ? <span>#{shirt.shirtNumber}</span> : null}
          {!shirt.playerName && !shirt.shirtNumber ? <span>{shirt.description}</span> : null}
        </div>
      </div>
    </Link>
  );
}
