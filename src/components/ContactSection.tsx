import Link from "next/link";
import { Search } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";

export function ContactSection() {
  return (
    <section className="section dark-band">
      <div className="site-shell" style={{ textAlign: "center" }}>
        <Search className="mono-icon" color="#E21E26" size={40} style={{ margin: "0 auto 24px" }} />
        <h2 className="section-title">אני מחפש חולצות הפועל חדרה מכל השנים</h2>
        <p className="lead" style={{ margin: "18px auto 0" }}>
          חולצות משחק, חולצות אוהדים, חולצות חתומות, חולצות נדירות וחולצות ישנות. אם יש לך חולצה רלוונטית למכירה או
          להחלפה — אשמח שתיצור איתי קשר.
        </p>
        <ContactActions dark className="contact-actions-center" />
        <Link href="/wanted" style={{ color: "rgba(255,255,255,.55)", display: "inline-block", marginTop: 28 }}>
          לצפייה ברשימת החולצות הדרושות ←
        </Link>
      </div>
    </section>
  );
}
