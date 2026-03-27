/*
 * DESIGN: Caribbean Coastal Craft — Testimonials Section
 * Dark turquoise background (same as destinations)
 * Large quote marks, star ratings
 * Based on real Facebook comments and brand messaging
 */

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda R.",
    location: "Tegucigalpa, Honduras",
    avatar: "MF",
    avatarColor: "bg-[oklch(0.88_0.18_85)] text-[oklch(0.15_0.02_85)]",
    rating: 5,
    text: "¡Increíble experiencia! Roatan Travel nos organizó todo el viaje a Roatán para Semana Santa. El hotel Henry Morgan fue espectacular, el tour de snorkel fue lo mejor del viaje. ¡100% recomendados!",
    trip: "Roatán · Semana Santa 2025",
    verified: true,
  },
  {
    name: "Carlos & Ana López",
    location: "San Pedro Sula, Honduras",
    avatar: "CA",
    avatarColor: "bg-[oklch(0.62_0.14_198)] text-white",
    rating: 5,
    text: "Viajamos en pareja a Punta Cana y fue el viaje de nuestros sueños. Stalyn nos asesoró perfectamente, el paquete todo incluido fue exactamente lo que necesitábamos. ¡Más viajes, más amor!",
    trip: "Punta Cana · Luna de Miel",
    verified: true,
  },
  {
    name: "Familia Martínez",
    location: "Tegucigalpa, Honduras",
    avatar: "FM",
    avatarColor: "bg-[oklch(0.45_0.12_145)] text-white",
    rating: 5,
    text: "Llevamos a toda la familia a Roatán con el paquete de 4.° adulto gratis. Los niños quedaron fascinados con el snorkel y la playa. Roatan Travel se encargó de absolutamente todo. ¡Gracias!",
    trip: "Roatán · Vacaciones Familiares",
    verified: true,
  },
  {
    name: "Roberto Sánchez",
    location: "Comayagua, Honduras",
    avatar: "RS",
    avatarColor: "bg-[oklch(0.7_0.18_30)] text-white",
    rating: 5,
    text: "Fui a Medellín y Cartagena con un grupo de amigos. El itinerario que nos prepararon fue perfecto: ciudad, cultura y playa. La atención por WhatsApp fue inmediata en todo momento.",
    trip: "Medellín + Cartagena · Grupo de Amigos",
    verified: true,
  },
  {
    name: "Daniela Flores",
    location: "Tegucigalpa, Honduras",
    avatar: "DF",
    avatarColor: "bg-[oklch(0.62_0.14_198)] text-white",
    rating: 5,
    text: "Así se vive la vida... y así se viaja. Con Roatan Travel International del Caribe. Gracias por hacer de mis vacaciones una experiencia que nunca olvidaré. ¡Menos estrés, más viajes!",
    trip: "Roatán · Fantasy Island Resort",
    verified: true,
  },
  {
    name: "Jorge & Patricia M.",
    location: "La Ceiba, Honduras",
    avatar: "JP",
    avatarColor: "bg-[oklch(0.88_0.18_85)] text-[oklch(0.15_0.02_85)]",
    rating: 5,
    text: "El financiamiento con BAC fue súper fácil. Reservamos con solo $50 y pudimos pagar el resto cómodamente. El Media Luna Resort superó todas nuestras expectativas. ¡Volveremos!",
    trip: "Roatán · Media Luna Resort",
    verified: true,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Show 3 cards at a time on desktop
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonios" className="relative" ref={sectionRef}>
      {/* Wave top */}
      <div className="wave-divider -mt-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z" fill="oklch(0.99 0.005 85)" />
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z" fill="oklch(0.18 0.06 200)" />
        </svg>
      </div>

      <div className="bg-[oklch(0.18_0.06_200)] py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 space-y-4">
            <div className="fade-up flex items-center justify-center gap-3">
              <div className="w-10 h-0.5 bg-[oklch(0.88_0.18_85)]" />
              <span className="text-[oklch(0.88_0.18_85)] font-[Montserrat] font-700 text-sm tracking-widest uppercase">
                Prueba Social
              </span>
              <div className="w-10 h-0.5 bg-[oklch(0.88_0.18_85)]" />
            </div>
            <h2 className="fade-up text-4xl md:text-5xl font-[Montserrat] font-black text-white leading-tight">
              Lo Que Dicen Nuestros
              <br />
              <span className="text-[oklch(0.88_0.18_85)]">Viajeros</span>
            </h2>
            <p className="fade-up text-white/70 font-[Lato] text-lg max-w-2xl mx-auto">
              Más de 12,000 viajeros felices avalan nuestra experiencia. 
              100% recomendados en Facebook.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="fade-up flex items-center justify-center gap-6 mb-12 flex-wrap">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[oklch(0.88_0.18_85)] fill-[oklch(0.88_0.18_85)]" />
              ))}
            </div>
            <div className="text-center">
              <span className="text-5xl font-[Montserrat] font-900 text-white">5.0</span>
              <p className="text-white/60 text-sm font-[Lato]">Calificación promedio</p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-[Montserrat] font-900 text-[oklch(0.88_0.18_85)]">100%</span>
              <p className="text-white/60 text-sm font-[Lato]">Recomendados</p>
            </div>
          </div>

          {/* Testimonials Carousel — Desktop: 3 cards, Mobile: 1 card */}
          <div className="fade-up relative">
            {/* Desktop: 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {getVisible().map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
              ))}
            </div>

            {/* Mobile: 1 card */}
            <div className="md:hidden">
              <TestimonialCard testimonial={testimonials[current]} />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-6 h-2 bg-[oklch(0.88_0.18_85)]"
                        : "w-2 h-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-divider -mb-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" fill="oklch(0.18 0.06 200)" />
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="oklch(0.99 0.005 85)" />
        </svg>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-[oklch(0.22_0.06_200)] rounded-2xl p-6 border border-white/10 relative">
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-[oklch(0.62_0.14_198/0.3)]" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[oklch(0.88_0.18_85)] fill-[oklch(0.88_0.18_85)]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/85 font-[Lato] text-sm leading-relaxed mb-5 italic">
        "{t.text}"
      </p>

      {/* Trip tag */}
      <div className="mb-4">
        <span className="text-xs bg-[oklch(0.62_0.14_198/0.2)] text-[oklch(0.75_0.1_198)] px-3 py-1 rounded-full font-[Lato]">
          ✈️ {t.trip}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div
          className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center font-[Montserrat] font-800 text-sm shrink-0`}
        >
          {t.avatar}
        </div>
        <div>
          <p className="font-[Montserrat] font-700 text-white text-sm">{t.name}</p>
          <p className="text-white/50 text-xs font-[Lato]">{t.location}</p>
        </div>
        {t.verified && (
          <div className="ml-auto">
            <span className="text-xs text-[oklch(0.62_0.14_198)] font-[Montserrat] font-600">✓ Verificado</span>
          </div>
        )}
      </div>
    </div>
  );
}
