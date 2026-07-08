import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { siteSettings } from "@/data/settings";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image src="/reference/hero-museum.jpg" alt="מוזיאון הפועל חדרה" fill priority className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{siteSettings.heroTitle}</h1>
          <p>{siteSettings.heroSubtitle}</p>
          <div className="hero-actions">
            <Link className="primary-pill" href="/collection">
              לצפייה באוסף
              <ArrowLeft size={18} aria-hidden="true" />
            </Link>
            <Link className="ghost-pill" href="/contact">
              יש לך חולצה למכירה/החלפה?
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell curator-grid">
          <div>
            <h2 className="serif-heading">
              אהלן, אני ניר.
              <br />
              אוהד כדורגל ישראלי, וחדרתי.
            </h2>
            <div className="serif-copy">
              {siteSettings.curatorStatement.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link className="text-link" href="/collection">
              כניסה לגלריה
              <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="framed-image">
            <Image src="/shirts/hadera-2016-17-special-front.jpeg" alt="חולצת הפועל חדרה 2016/17" width={680} height={900} />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
