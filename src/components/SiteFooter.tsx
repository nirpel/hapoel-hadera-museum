import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "בית" },
  { href: "/collection", label: "אוסף הפועל חדרה" },
  { href: "/wanted", label: "חולצות שאני מחפש" },
  { href: "/contact", label: "צור קשר" }
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="site-shell footer-grid">
        <div>
          <div className="footer-brand">
            <Image src="/reference/hadera-logo.png" alt="לוגו הפועל חדרה" width={40} height={40} />
            <strong>המוזיאון החדרתי</strong>
          </div>
          <p>ארכיון דיגיטלי אישי לחולצות הכדורגל של הפועל חדרה. משמרים היסטוריה, חולצה אחת בכל פעם.</p>
        </div>
        <div>
          <h3>ניווט</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-shell footer-bottom">© {new Date().getFullYear()} HADERA ARCHIVE · אתר פרטי לתצוגת אוסף</div>
    </footer>
  );
}
