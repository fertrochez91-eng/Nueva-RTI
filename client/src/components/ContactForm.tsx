/*
 * DESIGN: Caribbean Coastal Craft — Contact Form Section
 * Sand white background
 * Split layout: contact info left, form right
 * WhatsApp CTA prominent
 */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "50497946716";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola! Me interesa cotizar un paquete de viaje. ¿Podrían ayudarme?"
);

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+504 9794-6716",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
    color: "text-[oklch(0.45_0.12_145)]",
    bg: "bg-[oklch(0.45_0.12_145/0.1)]",
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    value: "reservaciones@travelroatansunset.com",
    href: "mailto:reservaciones@travelroatansunset.com",
    color: "text-[oklch(0.62_0.14_198)]",
    bg: "bg-[oklch(0.62_0.14_198/0.1)]",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Col. 15 de Septiembre, Plaza Franks Corner, Tegucigalpa",
    href: "https://maps.google.com/?q=Tegucigalpa+Honduras",
    color: "text-[oklch(0.7_0.18_30)]",
    bg: "bg-[oklch(0.7_0.18_30/0.1)]",
  },
];

const destinations = [
  "Roatán, Honduras",
  "Punta Cana, Rep. Dominicana",
  "Medellín, Colombia",
  "Medellín + Cartagena",
  "Cartagena, Colombia",
  "Otro destino",
];

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    travelers: "",
    dates: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = encodeURIComponent(
      `¡Hola! Quiero cotizar un viaje:\n\n` +
      `👤 Nombre: ${form.name}\n` +
      `📞 Teléfono: ${form.phone}\n` +
      `✈️ Destino: ${form.destination}\n` +
      `👥 Viajeros: ${form.travelers}\n` +
      `📅 Fechas: ${form.dates}\n` +
      `💬 Mensaje: ${form.message || "Sin mensaje adicional"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[oklch(0.99_0.005_85)]" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="fade-up flex items-center justify-center gap-3">
            <div className="w-10 h-0.5 bg-[oklch(0.62_0.14_198)]" />
            <span className="text-[oklch(0.62_0.14_198)] font-[Montserrat] font-700 text-sm tracking-widest uppercase">
              Contáctanos
            </span>
            <div className="w-10 h-0.5 bg-[oklch(0.62_0.14_198)]" />
          </div>
          <h2 className="fade-up text-4xl md:text-5xl font-[Montserrat] font-black text-[oklch(0.18_0.02_200)] leading-tight">
            ¡Planifica Tu
            <br />
            <span className="text-[oklch(0.62_0.14_198)]">Próximo Viaje!</span>
          </h2>
          <p className="fade-up text-[oklch(0.45_0.05_198)] font-[Lato] text-lg max-w-2xl mx-auto">
            Cuéntanos tu destino soñado y te preparamos la mejor cotización. 
            Respuesta garantizada en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp CTA */}
            <div className="fade-up">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[oklch(0.45_0.12_145)] text-white hover:bg-[oklch(0.4_0.14_145)] transition-all duration-200 shadow-lg shadow-[oklch(0.45_0.12_145/0.3)] group"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-[Montserrat] font-800 text-lg">
                    ¡Escríbenos por WhatsApp!
                  </p>
                  <p className="text-white/80 text-sm font-[Lato]">
                    Respuesta inmediata · Atención personalizada
                  </p>
                </div>
                <Send className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Details */}
            <div className="fade-up space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border border-[oklch(0.88_0.04_198)] hover:border-[oklch(0.62_0.14_198/0.5)] hover:shadow-md transition-all duration-200 bg-white group"
                >
                  <div className={`w-10 h-10 rounded-lg ${info.bg} flex items-center justify-center shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-[oklch(0.5_0.06_198)] font-[Lato] mb-0.5">{info.label}</p>
                    <p className="text-sm font-[Montserrat] font-600 text-[oklch(0.18_0.02_200)] group-hover:text-[oklch(0.62_0.14_198)] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="fade-up p-5 rounded-2xl bg-[oklch(0.95_0.04_198)] border border-[oklch(0.88_0.04_198)]">
              <p className="font-[Montserrat] font-700 text-[oklch(0.18_0.02_200)] mb-3 text-sm">
                Síguenos en Redes Sociales
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/RoatanSunset/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[oklch(0.4_0.15_260)] text-white text-sm font-[Montserrat] font-700 hover:opacity-90 transition-opacity"
                >
                  <span>f</span> Facebook
                </a>
                <a
                  href="https://www.instagram.com/roatan_sunset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[oklch(0.55_0.2_0)] to-[oklch(0.55_0.2_300)] text-white text-sm font-[Montserrat] font-700 hover:opacity-90 transition-opacity"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Form (3/5) */}
          <div className="lg:col-span-3 fade-up">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-[oklch(0.95_0.04_198)] border border-[oklch(0.88_0.04_198)]">
                <CheckCircle className="w-16 h-16 text-[oklch(0.62_0.14_198)] mb-4" />
                <h3 className="text-2xl font-[Montserrat] font-800 text-[oklch(0.18_0.02_200)] mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-[oklch(0.45_0.05_198)] font-[Lato] mb-6">
                  Te hemos redirigido a WhatsApp. Nuestro equipo te responderá 
                  en menos de 24 horas. ¡Gracias por confiar en Roatan Travel!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary px-6 py-3 rounded-full text-sm font-[Montserrat] font-700"
                >
                  Enviar Otra Consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-[oklch(0.62_0.14_198/0.1)] border border-[oklch(0.88_0.04_198)] space-y-5"
              >
                <h3 className="font-[Montserrat] font-800 text-xl text-[oklch(0.18_0.02_200)] mb-2">
                  Cotiza Tu Viaje Gratis 🌴
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-[Montserrat] font-700 text-[oklch(0.35_0.05_198)] mb-1.5 uppercase tracking-wide">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.04_198)] bg-[oklch(0.98_0.01_198)] text-[oklch(0.18_0.02_200)] font-[Lato] text-sm focus:outline-none focus:border-[oklch(0.62_0.14_198)] focus:ring-2 focus:ring-[oklch(0.62_0.14_198/0.2)] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-[Montserrat] font-700 text-[oklch(0.35_0.05_198)] mb-1.5 uppercase tracking-wide">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+504 XXXX-XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.04_198)] bg-[oklch(0.98_0.01_198)] text-[oklch(0.18_0.02_200)] font-[Lato] text-sm focus:outline-none focus:border-[oklch(0.62_0.14_198)] focus:ring-2 focus:ring-[oklch(0.62_0.14_198/0.2)] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-[Montserrat] font-700 text-[oklch(0.35_0.05_198)] mb-1.5 uppercase tracking-wide">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.04_198)] bg-[oklch(0.98_0.01_198)] text-[oklch(0.18_0.02_200)] font-[Lato] text-sm focus:outline-none focus:border-[oklch(0.62_0.14_198)] focus:ring-2 focus:ring-[oklch(0.62_0.14_198/0.2)] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-[Montserrat] font-700 text-[oklch(0.35_0.05_198)] mb-1.5 uppercase tracking-wide">
                      Destino de Interés *
                    </label>
                    <select
                      name="destination"
                      required
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.04_198)] bg-[oklch(0.98_0.01_198)] text-[oklch(0.18_0.02_200)] font-[Lato] text-sm focus:outline-none focus:border-[oklch(0.62_0.14_198)] focus:ring-2 focus:ring-[oklch(0.62_0.14_198/0.2)] transition-all"
                    >
                      <option value="">Selecciona un destino</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label className="block text-xs font-[Montserrat] font-700 text-[oklch(0.35_0.05_198)] mb-1.5 uppercase tracking-wide">
                      N.° de Viajeros *
                    </label>
                    <select
                      name="travelers"
                      required
                      value={form.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.04_198)] bg-[oklch(0.98_0.01_198)] text-[oklch(0.18_0.02_200)] font-[Lato] text-sm focus:outline-none focus:border-[oklch(0.62_0.14_198)] focus:ring-2 focus:ring-[oklch(0.62_0.14_198/0.2)] transition-all"
                    >
                      <option value="">¿Cuántos viajan?</option>
                      <option value="1 persona">1 persona</option>
                      <option value="2 personas (pareja)">2 personas (pareja)</option>
                      <option value="3-4 personas">3-4 personas</option>
                      <option value="5+ personas (familia/grupo)">5+ personas (familia/grupo)</option>
                    </select>
                  </div>
                </div>

                {/* Dates */}
                <div>
                  <label className="block text-xs font-[Montserrat] font-700 text-[oklch(0.35_0.05_198)] mb-1.5 uppercase tracking-wide">
                    Fechas Aproximadas
                  </label>
                  <input
                    type="date"
                    name="dates"
                    value={form.dates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.04_198)] bg-[oklch(0.98_0.01_198)] text-[oklch(0.18_0.02_200)] font-[Lato] text-sm focus:outline-none focus:border-[oklch(0.62_0.14_198)] focus:ring-2 focus:ring-[oklch(0.62_0.14_198/0.2)] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-[Montserrat] font-700 text-[oklch(0.35_0.05_198)] mb-1.5 uppercase tracking-wide">
                    Mensaje Adicional
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos más sobre tu viaje ideal, presupuesto, preferencias..."
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.04_198)] bg-[oklch(0.98_0.01_198)] text-[oklch(0.18_0.02_200)] font-[Lato] text-sm focus:outline-none focus:border-[oklch(0.62_0.14_198)] focus:ring-2 focus:ring-[oklch(0.62_0.14_198/0.2)] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-cta py-4 rounded-xl text-base font-[Montserrat] font-800 flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>

                <p className="text-center text-xs text-[oklch(0.55_0.06_198)] font-[Lato]">
                  Al enviar, serás redirigido a WhatsApp con tu consulta. 
                  Respondemos en menos de 24 horas.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
