/**
 * DESIGN: Caribbean Coastal Craft — Destinations Carousel
 * Carrusel tipo Airbnb con navegación suave y efectos visuales
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface CarouselDestination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  rating: number;
  reviews: number;
}

const carouselDestinations: CarouselDestination[] = [
  {
    id: "roatan-featured",
    name: "Roatán, Honduras",
    tagline: "Vía aérea desde Tegucigalpa o San Pedro Sula · Ferry desde La Ceiba",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/West%20Bay%20Beach%20-Roatan%20-Honduras-23May2009.jpg",
    rating: 5,
    reviews: 2847,
  },
  {
    id: "ensenada-featured",
    name: "La Ensenada, Honduras",
    tagline: "Playas Vírgenes y Tranquilas",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeannette%20Kawas%20Punta%20Sal%20Beach%20Near%20Entrance%20of%20Sendero%20Los%20Curumos.JPG",
    rating: 5,
    reviews: 1256,
  },
  {
    id: "españa-featured",
    name: "España",
    tagline: "Cultura, Playas y Gastronomía",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Barcelona_Skyline.jpg",
    rating: 5,
    reviews: 3421,
  },
  {
    id: "colombia-featured",
    name: "Colombia",
    tagline: "Medellín, Cartagena y Naturaleza",
    image: "/images/destinations/cartagena-colombia.png",
    rating: 5,
    reviews: 2156,
  },
  {
    id: "panama-featured",
    name: "Panamá",
    tagline: "Canal, Playas y Aventura",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Panama%20City%20skyline.jpg",
    rating: 5,
    reviews: 1834,
  },
];

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselDestinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselDestinations.length) % carouselDestinations.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselDestinations.length);
    setIsAutoPlay(false);
  };

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const currentDestination = carouselDestinations[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-[oklch(0.12_0.02_200)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-[Montserrat] font-black text-white">
            Destinos Destacados
          </h2>
          <p className="text-white/70 font-[Lato] text-lg max-w-2xl mx-auto">
            Descubre nuestros destinos más populares con ofertas exclusivas
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden bg-[oklch(0.18_0.06_200)] border border-white/10">
          {/* Main Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={currentDestination.image}
              alt={currentDestination.name}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(currentDestination.id)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-all duration-300 z-10"
              aria-label="Agregar a favoritos"
            >
              <Heart
                className={`w-6 h-6 transition-all duration-300 ${
                  favorites.has(currentDestination.id)
                    ? "fill-[oklch(0.88_0.18_85)] text-[oklch(0.88_0.18_85)]"
                    : "text-white"
                }`}
              />
            </button>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-[Montserrat] font-black mb-2">
                {currentDestination.name}
              </h3>
              <p className="text-lg text-white/90 mb-4">{currentDestination.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: currentDestination.rating }).map((_, i) => (
                    <span key={i} className="text-[oklch(0.88_0.18_85)] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white/80 text-sm">
                  ({currentDestination.reviews.toLocaleString()} reseñas)
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition-all duration-300 z-10 group"
            aria-label="Destino anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition-all duration-300 z-10 group"
            aria-label="Siguiente destino"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselDestinations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[oklch(0.88_0.18_85)] w-8"
                    : "bg-white/40 w-2 hover:bg-white/60"
                }`}
                aria-label={`Ir al destino ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-[oklch(0.88_0.18_85)] text-[oklch(0.15_0.02_85)] px-8 py-3 rounded-full font-[Montserrat] font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Cotizar Este Viaje
          </button>
        </div>
      </div>
    </section>
  );
}
