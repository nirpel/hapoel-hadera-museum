"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "בית" },
  { href: "/collection", label: "אוסף הפועל חדרה" },
  { href: "/wanted", label: "חולצות שאני מחפש" },
  { href: "/contact", label: "צור קשר" }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHero = pathname === "/" && !scrolled && !open;
  const logoSrc = onHero ? "/reference/hadera-logo-white.png" : "/reference/hadera-logo-transparent.png";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${!onHero ? "is-solid" : ""} ${onHero ? "is-on-hero" : ""}`}>
      <div className="site-shell header-inner">
        <Link className="brand" href="/">
          <Image src={logoSrc} alt="לוגו הפועל חדרה" width={44} height={44} />
          <span>
            המוזיאון החדרתי
            <small>HADERA ARCHIVE</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="ניווט ראשי">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link className={active ? "active" : ""} href={item.href} key={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button className={`menu-button ${onHero ? "menu-button--light" : ""}`} onClick={() => setOpen((value) => !value)} aria-label="תפריט">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="ניווט מובייל">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
