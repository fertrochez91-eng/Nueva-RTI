/**
 * DESIGN: Caribbean Coastal Craft — Destinations Section
 * Nueva estructura: Honduras, Tours, América, Europa y USA
 */

import { useEffect, useRef } from "react";
import { MapPin, Star } from "lucide-react";

// URLs de imágenes
const ROATAN_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/West%20Bay%20Beach%20-Roatan%20-Honduras-23May2009.jpg";
const UTILA_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%9Atila%20Public%20Beach%202.jpg";
const GUANAJA_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Guanaja%20Honduras.jpg";
const ENSENADA_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Jeannette%20Kawas%20Punta%20Sal%20Beach%20Near%20Entrance%20of%20Sendero%20Los%20Curumos.JPG";
const PALMA_REAL_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Ciudad%20de%20tela%20honduras.jpg";
const SNORKEL_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Snorkeling%20in%20West%20Bay.JPG";
const JETSKI_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Jet%20Ski.jpg";
const ZOO_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Spider%20Monkey%20%285741196936%29.jpg";
const GLASS_BOAT_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Glass%20bottom%20boat.jpg";
const PARASAILING_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Colva%20Parasailing.JPG";
const CARTAGENA_IMG = "/images/destinations/cartagena-colombia.png";
const ARGENTINA_IMG = "/images/destinations/buenos-aires-argentina.png";
const BRASIL_IMG = "/images/destinations/rio-brasil.png";
const PERU_IMG = "/images/destinations/machu-picchu-peru.png";
const BOGOTA_IMG = "/images/destinations/bogota-colombia.png";
const MEXICO_IMG = "/images/destinations/ciudad-de-mexico.png";
const COSTA_RICA_IMG = "/images/destinations/arenal-costa-rica.png";
const PANAMA_IMG = "/images/destinations/panama-city.png";
const SPAIN_IMG = "https://upload.wikimedia.org/wikipedia/commons/8/86/Barcelona_Skyline.jpg";
const ITALY_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum%2C%20Rome%20%285844914657%29.jpg";
const FRANCE_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Eiffel%20Tower%2C%20Paris%20%2819849755064%29.jpg";
const PORTUGAL_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/LisbonSkyline.jpg";
const SWITZERLAND_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Matterhorn%20from%20Switzerland.jpg";
const ENGLAND_IMG = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Big_Ben_.jpg";
const GERMANY_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Berlin%20Brandenburg%20Gate%20%2828150529023%29.jpg";
const NETHERLANDS_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Amsterdam%20Canals%20%2823585868718%29.jpg";
const NEW_YORK_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/New%20York%20City%20Skyline%20%289898652593%29.jpg";
const MIAMI_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Miami%20Skyline.jpg";
const HOUSTON_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Houston%2C%20Texas%20Skyline%202017.jpg";
const LAS_VEGAS_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/Las%20Vegas%20skyline.jpg";
const WASHINGTON_IMG = "https://commons.wikimedia.org/wiki/Special:FilePath/WashingtonMonument.jpg";

// Destinos Honduras
const hondurasDestinations = [
  {
    id: "roatan",
    name: "Roatán",
    tagline: "Vía aérea desde Tegucigalpa o San Pedro Sula",
    image: ROATAN_IMG,
    badge: "🏝️ Isla",
    highlights: ["Tegucigalpa / SPS", "Ferry desde La Ceiba", "Playas"],
  },
  {
    id: "utila",
    name: "Utila",
    tagline: "Buceo y Naturaleza",
    image: UTILA_IMG,
    badge: "🤿 Buceo",
    highlights: ["Arrecife", "Vida Marina", "Tours"],
  },
  {
    id: "guanaja",
    name: "Guanaja",
    tagline: "Isla Virgen",
    image: GUANAJA_IMG,
    badge: "🌴 Virgen",
    highlights: ["Playas", "Tranquilidad", "Naturaleza"],
  },
  {
    id: "ensenada",
    name: "La Ensenada",
    tagline: "Playas Tranquilas",
    image: ENSENADA_IMG,
    badge: "🏖️ Playa",
    highlights: ["Relax", "Familia", "Seguro"],
  },
  {
    id: "palmareal",
    name: "Hotel Palma Real",
    tagline: "Resort Todo Incluido",
    image: PALMA_REAL_IMG,
    badge: "⭐ Resort",
    highlights: ["Lujo", "Todo Incluido", "Servicios"],
  },
];

// Tours
const tours = [
  {
    id: "snorkel",
    name: "Snorkel",
    tagline: "Explora el Arrecife",
    image: SNORKEL_IMG,
    badge: "🤿 Agua",
    highlights: ["Arrecife", "Guía Experto", "Equipo"],
  },
  {
    id: "jetsky",
    name: "Jet Sky",
    tagline: "Adrenalina en el Mar",
    image: JETSKI_IMG,
    badge: "⚡ Acción",
    highlights: ["Velocidad", "Seguro", "Instructor"],
  },
  {
    id: "zoologico",
    name: "Zoológico",
    tagline: "Fauna Local",
    image: ZOO_IMG,
    badge: "🦁 Fauna",
    highlights: ["Animales", "Educativo", "Familia"],
  },
  {
    id: "botevidrio",
    name: "Bote de Vidrio",
    tagline: "Fondo Marino Transparente",
    image: GLASS_BOAT_IMG,
    badge: "👀 Vista",
    highlights: ["Transparente", "Seguro", "Niños"],
  },
  {
    id: "parasailing",
    name: "Parasailing",
    tagline: "Vuela sobre el Mar",
    image: PARASAILING_IMG,
    badge: "🪂 Vuelo",
    highlights: ["Altura", "Vistas", "Emoción"],
  },
];

// Destinos América
const americaDestinations = [
  {
    id: "cartagena",
    name: "Cartagena",
    tagline: "Ciudad amurallada y vistas al Caribe",
    image: CARTAGENA_IMG,
    badge: "🌅 Colombia",
    highlights: ["Centro Histórico", "Mar Caribe", "Cultura"],
  },
  {
    id: "buenos-aires",
    name: "Argentina",
    tagline: "Buenos Aires y su vida urbana",
    image: ARGENTINA_IMG,
    badge: "🇦🇷 Argentina",
    highlights: ["Obelisco", "Avenida 9 de Julio", "Ciudad"],
  },
  {
    id: "brasil",
    name: "Brasil",
    tagline: "Río de Janeiro y Cristo Redentor",
    image: BRASIL_IMG,
    badge: "🇧🇷 Brasil",
    highlights: ["Río", "Cristo Redentor", "Vistas"],
  },
  {
    id: "peru",
    name: "Perú",
    tagline: "Machu Picchu",
    image: PERU_IMG,
    badge: "🏛️ Perú",
    highlights: ["Machu Picchu", "Cusco", "Historia"],
  },
  {
    id: "bogota",
    name: "Bogotá",
    tagline: "Capital entre montañas",
    image: BOGOTA_IMG,
    badge: "🏙️ Colombia",
    highlights: ["Ciudad", "Cultura", "Altura"],
  },
  {
    id: "mexico",
    name: "México",
    tagline: "Ciudad de México y su icono histórico",
    image: MEXICO_IMG,
    badge: "🇲🇽 México",
    highlights: ["Ángel", "Paseo de la Reforma", "Ciudad"],
  },
  {
    id: "costarica",
    name: "Costa Rica",
    tagline: "Volcán Arenal y naturaleza pura",
    image: COSTA_RICA_IMG,
    badge: "🌿 Costa Rica",
    highlights: ["Arenal", "Volcán", "Naturaleza"],
  },
  {
    id: "panama",
    name: "Panamá",
    tagline: "Skyline moderno de Ciudad de Panamá",
    image: PANAMA_IMG,
    badge: "🌆 Panamá",
    highlights: ["Ciudad", "Skyline", "Modernidad"],
  },
];

// Destinos Europa
const europeDestinations = [
  {
    id: "españa",
    name: "España",
    tagline: "Barcelona y Madrid",
    image: SPAIN_IMG,
    badge: "🇪🇸 Europa",
    highlights: ["Barcelona", "Madrid", "Playas"],
  },
  {
    id: "italia",
    name: "Italia",
    tagline: "Roma y Venecia",
    image: ITALY_IMG,
    badge: "🇮🇹 Europa",
    highlights: ["Roma", "Venecia", "Arte"],
  },
  {
    id: "francia",
    name: "Francia",
    tagline: "París y Riviera",
    image: FRANCE_IMG,
    badge: "🇫🇷 Europa",
    highlights: ["París", "Riviera", "Lujo"],
  },
  {
    id: "portugal",
    name: "Portugal",
    tagline: "Lisboa y Oporto",
    image: PORTUGAL_IMG,
    badge: "🇵🇹 Europa",
    highlights: ["Lisboa", "Oporto", "Playas"],
  },
  {
    id: "suiza",
    name: "Suiza",
    tagline: "Alpes y Ciudades de Ensueño",
    image: SWITZERLAND_IMG,
    badge: "🇨🇭 Europa",
    highlights: ["Zermatt", "Zurich", "Alpes"],
  },
  {
    id: "inglaterra",
    name: "Inglaterra",
    tagline: "Londres y Tradición",
    image: ENGLAND_IMG,
    badge: "🇬🇧 Europa",
    highlights: ["Londres", "Historia", "Cultura"],
  },
  {
    id: "alemania",
    name: "Alemania",
    tagline: "Castillos y Modernidad",
    image: GERMANY_IMG,
    badge: "🇩🇪 Europa",
    highlights: ["Berlín", "Múnich", "Castillos"],
  },
  {
    id: "paises-bajos",
    name: "Países Bajos",
    tagline: "Canales y Tulipanes",
    image: NETHERLANDS_IMG,
    badge: "🇳🇱 Europa",
    highlights: ["Ámsterdam", "Canales", "Tulipanes"],
  },
];

// Destinos USA
const usaDestinations = [
  {
    id: "newyork",
    name: "Nueva York",
    tagline: "La Gran Manzana",
    image: NEW_YORK_IMG,
    badge: "🗽 USA",
    highlights: ["Times Square", "Broadway", "Museos"],
  },
  {
    id: "miami",
    name: "Miami",
    tagline: "Playas y Vida Nocturna",
    image: MIAMI_IMG,
    badge: "🌴 USA",
    highlights: ["Playas", "Nightlife", "Compras"],
  },
  {
    id: "houston",
    name: "Houston",
    tagline: "Espacio y Cultura",
    image: HOUSTON_IMG,
    badge: "🚀 USA",
    highlights: ["NASA", "Museos", "Gastronomía"],
  },
  {
    id: "lasvegas",
    name: "Las Vegas",
    tagline: "Entretenimiento 24/7",
    image: LAS_VEGAS_IMG,
    badge: "🎰 USA",
    highlights: ["Casinos", "Shows", "Diversión"],
  },
  {
    id: "washington",
    name: "Washington DC",
    tagline: "Historia y Política",
    image: WASHINGTON_IMG,
    badge: "🏛️ USA",
    highlights: ["Monumentos", "Museos", "Historia"],
  },
];

export default function Destinations() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const DestinationCard = ({ dest }: { dest: any }) => (
    <div className="fade-up service-card bg-[oklch(0.22_0.06_200)] rounded-2xl overflow-hidden border border-white/10 group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          loading="lazy"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-[Montserrat] font-700 px-3 py-1 rounded-full bg-[oklch(0.88_0.18_85)] text-[oklch(0.15_0.02_85)]">
            {dest.badge}
          </span>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[oklch(0.62_0.14_198/0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2.5">
        <div>
          <div className="flex items-start gap-1.5 mb-1">
            <MapPin className="w-3.5 h-3.5 text-[oklch(0.62_0.14_198)] mt-0.5 shrink-0" />
            <h3 className="font-[Montserrat] font-800 text-white text-sm leading-tight">
              {dest.name}
            </h3>
          </div>
          <p className="text-xs text-white/60 font-[Lato] ml-5">{dest.tagline}</p>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5">
          {dest.highlights.map((h: string, i: number) => (
            <span key={i} className="text-xs bg-[oklch(0.88_0.18_85/0.15)] text-[oklch(0.88_0.18_85)] px-2 py-1 rounded-full">
              {h}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full mt-3 py-2 rounded-lg bg-[oklch(0.88_0.18_85)] text-[oklch(0.15_0.02_85)] font-[Montserrat] font-700 text-xs transition-all duration-300 hover:bg-[oklch(0.85_0.18_85)] hover:scale-105">
          Cotizar
        </button>
      </div>
    </div>
  );

  const RegionSection = ({ title, destinations }: { title: string; destinations: any[] }) => (
    <div className="mb-16">
      <h3 className="fade-up text-2xl font-[Montserrat] font-800 text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-8 bg-[oklch(0.88_0.18_85)] rounded-full" />
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, i) => (
          <div key={dest.id} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
            <DestinationCard dest={dest} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="destinos" className="relative" ref={sectionRef}>
      {/* Wave top */}
      <div className="wave-divider -mt-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z" fill="oklch(0.99 0.005 85)" />
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z" fill="oklch(0.18 0.06 200)" />
        </svg>
      </div>

      {/* Section Content */}
      <div className="bg-[oklch(0.18_0.06_200)] py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14 space-y-4">
            <div className="fade-up flex items-center justify-center gap-3">
              <div className="w-10 h-0.5 bg-[oklch(0.88_0.18_85)]" />
              <span className="text-[oklch(0.88_0.18_85)] font-[Montserrat] font-700 text-sm tracking-widest uppercase">
                Destinos Mundiales
              </span>
              <div className="w-10 h-0.5 bg-[oklch(0.88_0.18_85)]" />
            </div>
            <h2 className="fade-up text-4xl md:text-5xl font-[Montserrat] font-black text-white leading-tight">
              Explora Nuestros Destinos
            </h2>
            <p className="fade-up text-white/70 font-[Lato] text-lg max-w-2xl mx-auto">
              Honduras, Tours Especiales, América, Europa y USA. Paquetes personalizados para cada viajero.
            </p>
          </div>

          {/* Honduras */}
          <RegionSection title="🇭🇳 Honduras" destinations={hondurasDestinations} />

          {/* Tours */}
          <RegionSection title="🎯 Tours Especiales" destinations={tours} />

          {/* América */}
          <RegionSection title="🌎 América Latina" destinations={americaDestinations} />

          {/* Europa */}
          <RegionSection title="🇪🇺 Europa" destinations={europeDestinations} />

          {/* USA */}
          <RegionSection title="🇺🇸 Estados Unidos" destinations={usaDestinations} />
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="oklch(0.18 0.06 200)" />
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" fill="oklch(0.99 0.005 85)" />
        </svg>
      </div>
    </section>
  );
}
