/*
 * DESIGN: Caribbean Coastal Craft — Hero Section
 * Full-bleed Roatan aerial photography
 * Left-anchored text with turquoise gradient overlay
 * Stats bar at bottom: 8+ años, 12K seguidores, 100% recomendado
 */

import { useEffect, useRef } from "react";
import { MapPin, Star, Users } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663434869998/BKTpbGD4QXoavbxe8uyWea/hero_roatan-3QqBzSKJafdqZeDTo7zsho.webp";

const stats = [
  { icon: Star, value: "8+", label: "Años de Experiencia" },
  { icon: Users, value: "12K", label: "Viajeros Felices" },
  { icon: MapPin, value: "100%", label: "Recomendados" },
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDestinos = () => {
    const el = document.querySelector("#destinos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Roatán Honduras — Isla del Caribe"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: dark turquoise left, transparent right */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Bottom fade for stats bar */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[oklch(0.12_0.06_200/0.9)] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-8">
          <div
            ref={textRef}
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
            className="max-w-2xl"
          >
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="offer-badge">
                🌴 Eco Tour Agency · Honduras
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-[Montserrat] font-black text-white leading-tight mb-4"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Viajamos.
              <br />
              <span className="text-[oklch(0.88_0.18_85)]">Vivimos.</span>
              <br />
              Disfrutamos.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/85 font-[Lato] font-light leading-relaxed mb-8 max-w-lg">
              Tu agencia amiga con más de 8 años haciendo realidad los viajes
              de tus sueños. Paquetes todo incluido al Caribe y más.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-cta px-8 py-4 rounded-full text-base font-[Montserrat] font-800 shadow-xl"
              >
                🌊 Cotiza Tu Viaje
              </button>
              <button
                onClick={scrollToDestinos}
                className="px-8 py-4 rounded-full text-base font-[Montserrat] font-700 text-white border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Ver Destinos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/20 py-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center gap-1 px-4">
                <stat.icon className="w-5 h-5 text-[oklch(0.88_0.18_85)] mb-1" />
                <span className="text-2xl md:text-3xl font-[Montserrat] font-black text-white">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-white/70 font-[Lato] text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative z-10 wave-divider -mb-1">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="oklch(0.99 0.005 85)"
          />
        </svg>
      </div>
    </section>
  );
}
