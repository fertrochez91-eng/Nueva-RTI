/*
 * DESIGN: Caribbean Coastal Craft — Footer
 * Dark turquoise background
 * Logo + links + social + copyright
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663434869998/BKTpbGD4QXoavbxe8uyWea/rtinternational_7b4c5334.webp";
const WHATSAPP_NUMBER = "50497946716";
const WHATSAPP_MSG = encodeURIComponent("¡Hola! Me interesa cotizar un paquete de viaje.");

const footerLinks = [
  {
    title: "Destinos",
    links: [
      { label: "Roatán, Honduras", href: "#destinos" },
      { label: "Punta Cana", href: "#destinos" },
      { label: "Medellín", href: "#destinos" },
      { label: "Cartagena", href: "#destinos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Paquetes Todo Incluido", href: "#servicios" },
      { label: "Tour de Snorkel", href: "#servicios" },
      { label: "Traslados y Ferry", href: "#servicios" },
      { label: "Financiamiento", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Quiénes Somos", href: "#nosotros" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" },
      { label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}` },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.12_0.05_200)]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <button onClick={() => scrollTo("#inicio")}>
              <img src={LOGO_URL} alt="Roatan Travel" className="h-12 w-auto object-contain" />
            </button>
            <p className="text-white/65 font-[Lato] text-sm leading-relaxed">
              Tu agencia amiga con más de 8 años haciendo realidad los viajes 
              de tus sueños. Especialistas en el Caribe y América Latina.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/RoatanSunset/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[oklch(0.62_0.14_198)] flex items-center justify-center text-white text-sm font-bold transition-colors"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/roatan_sunset"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[oklch(0.55_0.2_0)] hover:to-[oklch(0.55_0.2_300)] flex items-center justify-center text-white text-sm transition-all"
              >
                📸
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[oklch(0.45_0.12_145)] flex items-center justify-center text-white text-sm transition-colors"
              >
                💬
              </a>
              <a
                href="https://www.tiktok.com/@roatan_sunset"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[oklch(0.18_0.02_200)] flex items-center justify-center text-white text-sm transition-colors"
              >
                🎵
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-[Montserrat] font-800 text-white text-sm mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/60 hover:text-[oklch(0.88_0.18_85)] font-[Lato] text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-[Lato] text-center md:text-left">
            © 2025 Roatan Travel International. Todos los derechos reservados.
            <br className="md:hidden" />
            {" "}Tegucigalpa, Honduras · +504 9794-6716
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-xs font-[Lato]">Viajamos · Vivimos · Disfrutamos</span>
            <span className="text-[oklch(0.88_0.18_85)]">🌴</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
