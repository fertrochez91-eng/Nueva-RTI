/*
 * DESIGN: Caribbean Coastal Craft — Services Section
 * Sand white background
 * 3-column service cards with turquoise icon circles
 * Inspired by Facebook highlighted stories content
 */

import { useEffect, useRef } from "react";
import {
  Plane,
  Hotel,
  Ship,
  Waves,
  Camera,
  CreditCard,
  Headphones,
  Map,
  Gift,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Paquetes Todo Incluido",
    desc: "Vuelos, hotel, traslados, alimentación, bebidas y actividades en un solo paquete sin sorpresas.",
    color: "bg-[oklch(0.62_0.14_198)]",
    highlight: true,
  },
  {
    icon: Hotel,
    title: "Hoteles Seleccionados",
    desc: "Trabajamos con los mejores resorts del Caribe: Henry Morgan, Fantasy Island, Media Luna y más.",
    color: "bg-[oklch(0.45_0.12_145)]",
    highlight: false,
  },
  {
    icon: Ship,
    title: "Transporte Ferry",
    desc: "Traslado en ferry desde La Ceiba hasta Roatán incluido en tus paquetes. Cómodo y seguro.",
    color: "bg-[oklch(0.62_0.14_198)]",
    highlight: false,
  },
  {
    icon: Waves,
    title: "Tour de Snorkel",
    desc: "Explora el segundo arrecife de coral más grande del mundo con guías expertos locales.",
    color: "bg-[oklch(0.55_0.16_198)]",
    highlight: true,
  },
  {
    icon: Camera,
    title: "Experiencias Únicas",
    desc: "Actividades acuáticas, ecoturismo, tours culturales y gastronomía local auténtica.",
    color: "bg-[oklch(0.45_0.12_145)]",
    highlight: false,
  },
  {
    icon: CreditCard,
    title: "Financiamiento Fácil",
    desc: "Reserva tu viaje desde $50. Financiamiento disponible con BAC y FICOHSA sin complicaciones.",
    color: "bg-[oklch(0.88_0.18_85)]",
    highlight: false,
    iconColor: "text-[oklch(0.15_0.02_85)]",
  },
  {
    icon: Headphones,
    title: "Atención 24/7 por WhatsApp",
    desc: "Te acompañamos antes, durante y después de tu viaje. Respuesta rápida garantizada.",
    color: "bg-[oklch(0.62_0.14_198)]",
    highlight: false,
  },
  {
    icon: Map,
    title: "Asesoría Personalizada",
    desc: "Planificamos tu itinerario perfecto según tus gustos, presupuesto y fechas disponibles.",
    color: "bg-[oklch(0.45_0.12_145)]",
    highlight: false,
  },
  {
    icon: Gift,
    title: "Ofertas Especiales",
    desc: "Semana Santa, temporada alta y baja. Siempre tenemos la mejor oferta para ti y tu familia.",
    color: "bg-[oklch(0.88_0.18_85)]",
    highlight: true,
    iconColor: "text-[oklch(0.15_0.02_85)]",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[oklch(0.99_0.005_85)]" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="fade-up flex items-center justify-center gap-3">
            <div className="w-10 h-0.5 bg-[oklch(0.62_0.14_198)]" />
            <span className="text-[oklch(0.62_0.14_198)] font-[Montserrat] font-700 text-sm tracking-widest uppercase">
              Lo Que Ofrecemos
            </span>
            <div className="w-10 h-0.5 bg-[oklch(0.62_0.14_198)]" />
          </div>
          <h2 className="fade-up text-4xl md:text-5xl font-[Montserrat] font-black text-[oklch(0.18_0.02_200)] leading-tight">
            Nuestros Servicios
          </h2>
          <p className="fade-up text-[oklch(0.45_0.05_198)] font-[Lato] text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para vivir unas vacaciones perfectas, 
            desde la primera llamada hasta el regreso a casa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`fade-up service-card rounded-2xl p-6 border transition-all duration-300 ${
                service.highlight
                  ? "border-[oklch(0.62_0.14_198/0.4)] bg-[oklch(0.95_0.04_198)]"
                  : "border-[oklch(0.88_0.04_198)] bg-white"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 shadow-md`}
              >
                <service.icon
                  className={`w-6 h-6 ${service.iconColor || "text-white"}`}
                />
              </div>

              {/* Content */}
              <h3 className="font-[Montserrat] font-800 text-[oklch(0.18_0.02_200)] text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-[oklch(0.45_0.05_198)] font-[Lato] text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Highlight indicator */}
              {service.highlight && (
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[oklch(0.62_0.14_198)]" />
                  <span className="text-xs text-[oklch(0.62_0.14_198)] font-[Montserrat] font-700">
                    Incluido en paquetes
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
