import { Instagram, Mail, MessageCircle } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { whatsappUrl } from "@/lib/filters";

export default function ContactPage() {
  return (
    <section className="page-top">
      <div className="site-shell" style={{ maxWidth: 900 }}>
        <div className="mono-tag">CONTACT</div>
        <h1 className="section-title">צור קשר</h1>
        <p className="lead">{siteSettings.personalMessage}</p>

        <div className="contact-grid">
          <a className="contact-panel contact-panel--red" href={whatsappUrl(siteSettings.whatsappNumber)} target="_blank" rel="noreferrer">
            <MessageCircle size={32} />
            <h2>וואטסאפ</h2>
            <p>הדרך המהירה ביותר ליצירת קשר</p>
          </a>
          <a className="contact-panel contact-panel--black" href={`mailto:${siteSettings.email}?subject=${encodeURIComponent("חולצת הפועל חדרה")}`}>
            <Mail size={32} />
            <h2>אימייל</h2>
            <p>{siteSettings.email}</p>
          </a>
        </div>

        {siteSettings.instagramUrl ? (
          <a href={siteSettings.instagramUrl} target="_blank" rel="noreferrer" className="text-link">
            <Instagram size={20} />
            עקבו אחריי באינסטגרם
          </a>
        ) : null}

        <div className="note-box">
          <h2>קונה ומחליף</h2>
          <p className="lead">
            אני פתוח לרכישה ולהחלפה של חולצות הפועל חדרה מכל השנים — חולצות משחק, אוהדים, חתומות, נדירות וישנות. אם יש
            ברשותך חולצה שעשויה לעניין אותי, אשמח לשמוע — עם תמונות ופרטים.
          </p>
        </div>
      </div>
    </section>
  );
}
