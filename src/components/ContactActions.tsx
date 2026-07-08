import { Mail, MessageCircle } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { whatsappUrl } from "@/lib/filters";

export function ContactActions({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <div className={`contact-actions ${className}`}>
      <a className="primary-pill" href={whatsappUrl(siteSettings.whatsappNumber)} target="_blank" rel="noreferrer">
        <MessageCircle size={19} aria-hidden="true" />
        שליחת הודעה בוואטסאפ
      </a>
      <a
        className={dark ? "outline-pill outline-pill--light" : "outline-pill"}
        href={`mailto:${siteSettings.email}?subject=${encodeURIComponent("חולצת הפועל חדרה")}`}
      >
        <Mail size={19} aria-hidden="true" />
        שליחת אימייל
      </a>
    </div>
  );
}
