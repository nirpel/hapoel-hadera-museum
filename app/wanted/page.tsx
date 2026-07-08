import Image from "next/image";
import { ContactActions } from "@/components/ContactActions";
import { wantedShirts } from "@/data/shirts";

export default function WantedPage() {
  return (
    <section className="dark-band wanted-page" style={{ minHeight: "100vh" }}>
      <div className="site-shell page-top" style={{ paddingBottom: 80 }}>
        <div className="mono-tag">THE MISSION · הפריטים החסרים</div>
        <h1 className="section-title">חולצות שאני מחפש</h1>
        <p className="lead">
          אני מחפש חולצות של הפועל חדרה מכל השנים — חולצות משחק, חולצות אוהדים, חולצות חתומות, חולצות נדירות וחולצות
          ישנות. אם יש לך חולצה רלוונטית למכירה או החלפה, אשמח שתיצור איתי קשר.
        </p>
        <ContactActions dark className="wanted-contact" />

        <div className="wanted-grid">
          {wantedShirts.map((shirt) => (
            <article className="wanted-card" key={shirt.id}>
              <div className="wanted-media">
                {shirt.exampleImage ? (
                  <Image src={shirt.exampleImage} alt={shirt.title} width={900} height={675} className={`wanted-image-${shirt.id}`} />
                ) : (
                  "?"
                )}
              </div>
              <div className="wanted-card-body">
                {shirt.season ? <div className="mono-tag">{shirt.season}</div> : null}
                <h3>{shirt.title}</h3>
                {shirt.description ? <p>{shirt.description}</p> : null}
                {shirt.notes ? <p style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 12 }}>{shirt.notes}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
