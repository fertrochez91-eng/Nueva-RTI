/*
 * DESIGN: Caribbean Coastal Craft — Brand Story Section
 * Asymmetric 60/40 layout: text left, image right
 * Background: Warm Sand White
 * Turquoise accent lines and stats
 */

import { useEffect, useRef, useState } from "react";
import { Award, Heart, Globe, Phone } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Tu Satisfacción, Nuestra Prioridad",
    desc: "Desde la planificación hasta el regreso a casa, cada detalle importa.",
  },
  {
    icon: Award,
    title: "8+ Años de Experiencia",
    desc: "Somos expertos en destinos del Caribe y América Latina.",
  },
  {
    icon: Globe,
    title: "Destinos Soñados",
    desc: "Roatán, Punta Cana, Medellín, Cartagena y más destinos increíbles.",
  },
  {
    icon: Phone,
    title: "Atención Personalizada",
    desc: "Te acompañamos por WhatsApp antes, durante y después de tu viaje.",
  },
];

export default function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ownersImage, setOwnersImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    const processImage = () => {
      const img = new window.Image();
      img.src = "/images/contact-team.png";

      img.onload = () => {
        if (cancelled) return;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = img;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, width, height);
        const { data } = imageData;
        const visited = new Uint8Array(width * height);
        const queue: number[] = [];

        const samplePoints = [
          [10, 10],
          [width - 11, 10],
          [10, Math.floor(height * 0.35)],
          [width - 11, Math.floor(height * 0.35)],
          [Math.floor(width / 2), 10],
        ];

        const avg = samplePoints.reduce(
          (acc, [x, y]) => {
            const index = (y * width + x) * 4;
            acc.r += data[index];
            acc.g += data[index + 1];
            acc.b += data[index + 2];
            return acc;
          },
          { r: 0, g: 0, b: 0 }
        );

        const bg = {
          r: avg.r / samplePoints.length,
          g: avg.g / samplePoints.length,
          b: avg.b / samplePoints.length,
        };

        const pixelIndex = (x: number, y: number) => y * width + x;

        const isBackgroundLike = (x: number, y: number) => {
          const index = pixelIndex(x, y) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const a = data[index + 3];
          if (a === 0) return false;

          const dist = Math.sqrt(
            (r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2
          );
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const saturation = max - min;

          return dist < 72 || (dist < 100 && saturation < 28);
        };

        for (let x = 0; x < width; x += 1) {
          queue.push(pixelIndex(x, 0));
        }
        for (let y = 0; y < height; y += 1) {
          queue.push(pixelIndex(0, y));
          queue.push(pixelIndex(width - 1, y));
        }

        while (queue.length > 0) {
          const current = queue.shift();
          if (current === undefined || visited[current]) continue;

          const x = current % width;
          const y = Math.floor(current / width);
          if (!isBackgroundLike(x, y)) continue;

          visited[current] = 1;

          if (x > 0) queue.push(current - 1);
          if (x < width - 1) queue.push(current + 1);
          if (y > 0) queue.push(current - width);
          if (y < height - 1) queue.push(current + width);
        }

        for (let i = 0; i < visited.length; i += 1) {
          if (!visited[i]) continue;
          data[i * 4 + 3] = 0;
        }

        ctx.putImageData(imageData, 0, 0);
        if (!cancelled) {
          setOwnersImage(canvas.toDataURL("image/png"));
        }
      };
    };

    processImage();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[oklch(0.99_0.005_85)]" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Column (3/5) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Section Label */}
            <div className="fade-up flex items-center gap-3">
              <div className="w-10 h-0.5 bg-[oklch(0.62_0.14_198)]" />
              <span className="text-[oklch(0.62_0.14_198)] font-[Montserrat] font-700 text-sm tracking-widest uppercase">
                Nuestra Historia
              </span>
            </div>

            {/* Headline */}
            <h2 className="fade-up text-4xl md:text-5xl font-[Montserrat] font-black text-[oklch(0.18_0.02_200)] leading-tight">
              Tu Agencia Amiga
              <br />
              <span className="text-[oklch(0.62_0.14_198)]">del Caribe</span>
            </h2>

            {/* Story Text */}
            <div className="fade-up space-y-4 text-[oklch(0.35_0.04_200)] font-[Lato] text-lg leading-relaxed">
              <p>
                Bienvenidos a <strong className="text-[oklch(0.18_0.02_200)] font-bold">Roatan Travel International</strong> — 
                somos tu agencia amiga, dedicada a hacer de tus viajes una experiencia 
                verdaderamente inolvidable.
              </p>
              <p>
                Con más de <strong className="text-[oklch(0.62_0.14_198)] font-bold">8 años de servicio</strong>, 
                nos hemos comprometido a ofrecerte las mejores opciones para tus aventuras 
                y escapadas. Tu satisfacción y comodidad son nuestra prioridad absoluta.
              </p>
              <p>
                Desde la planificación hasta el regreso a casa, estamos aquí para 
                asegurarnos de que cada detalle de tu viaje sea perfecto.
              </p>
            </div>

            {/* Quote */}
            <div className="fade-up border-l-4 border-[oklch(0.88_0.18_85)] pl-6 py-2">
              <p className="text-xl font-[Montserrat] font-700 text-[oklch(0.18_0.02_200)] italic">
                "Cada viaje es una oportunidad para crear recuerdos inolvidables."
              </p>
              <p className="text-sm text-[oklch(0.5_0.06_198)] font-[Lato] mt-2">
                — Stalyn Luna y Suslay Gonzalez, Propietarios
              </p>
            </div>

            {/* Values Grid */}
            <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-3 p-4 rounded-xl bg-[oklch(0.95_0.03_198)] hover:bg-[oklch(0.92_0.05_198)] transition-colors duration-200"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[oklch(0.62_0.14_198)] flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-[Montserrat] font-700 text-sm text-[oklch(0.18_0.02_200)] mb-0.5">
                      {v.title}
                    </h4>
                    <p className="text-xs text-[oklch(0.45_0.05_198)] font-[Lato] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column (2/5) */}
          <div className="lg:col-span-2 fade-up">
            <div className="relative">
              <div className="rounded-[2rem] border border-[oklch(0.88_0.04_198)] bg-gradient-to-b from-white to-[oklch(0.95_0.03_198)] p-6 shadow-2xl shadow-[oklch(0.62_0.14_198/0.16)]">
                <div className="relative flex justify-center">
                  <div className="absolute bottom-4 h-10 w-52 rounded-full bg-[oklch(0.62_0.14_198/0.12)] blur-2xl" />
                  <img
                    src={ownersImage ?? "/images/contact-team.png"}
                    alt="Stalyn Luna y Suslay Gonzalez, propietarios de Roatan Travel International"
                    className="relative z-10 h-80 w-auto object-contain lg:h-[460px]"
                  />
                </div>

                <div className="mt-5 rounded-2xl bg-white/90 p-4 text-center shadow-lg">
                  <p className="font-[Montserrat] text-lg font-800 text-[oklch(0.18_0.02_200)]">
                    Stalyn Luna y Suslay Gonzalez
                  </p>
                  <p className="mt-1 text-sm font-[Lato] text-[oklch(0.5_0.06_198)]">
                    Propietarios de Roatan Travel International
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.62_0.14_198)] flex items-center justify-center text-2xl">
                  🌴
                </div>
                <div>
                  <p className="font-[Montserrat] font-800 text-[oklch(0.18_0.02_200)] text-sm">
                    Fundados en 2017
                  </p>
                  <p className="text-xs text-[oklch(0.5_0.06_198)] font-[Lato]">
                    Tegucigalpa, Honduras
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[oklch(0.88_0.18_85/0.3)] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
