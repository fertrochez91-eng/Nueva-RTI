/*
 * DESIGN: Caribbean Coastal Craft — Navbar
 * Transparent on hero, solid turquoise on scroll
 * Logo: Roatan Travel RT mark + wordmark
 * CTA: Yellow Sun button "Cotiza Ahora"
 */

import { useState, useEffect } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663434869998/BKTpbGD4QXoavbxe8uyWea/rtinternational_7b4c5334.webp";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Destinos", href: "#destinos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.18_0.06_200)] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#inicio")}
            className="flex items-center gap-2 group"
          >
            <img
              src={LOGO_URL}
              alt="Roatan Travel"
              className="h-10 md:h-12 w-auto object-contain" style={{opacity: '1.5999999999999996'}}
            />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/90 hover:text-[oklch(0.88_0.18_85)] font-semibold text-sm tracking-wide transition-colors duration-200 font-[Montserrat]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo("#contacto")}
              className="btn-cta px-6 py-2.5 rounded-full text-sm font-[Montserrat] font-800"
            >
              ¡Cotiza Ahora!
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[oklch(0.15_0.06_200)]`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-white/90 hover:text-[oklch(0.88_0.18_85)] font-semibold text-base text-left py-2 border-b border-white/10 font-[Montserrat]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contacto")}
            className="btn-cta mt-2 py-3 rounded-full text-sm w-full"
          >
            ¡Cotiza Ahora!
          </button>
        </div>
      </div>
    </nav>
  );
}
