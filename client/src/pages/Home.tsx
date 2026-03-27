/*
 * DESIGN: Caribbean Coastal Craft — Main Page
 * Full landing page for Roatan Travel International
 * Sections: Hero → Brand Story → Destinations → Services → Testimonials → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import Destinations from "@/components/Destinations";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingPromoAnnouncement from "@/components/FloatingPromoAnnouncement";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandStory />
      <DestinationsCarousel />
      <Destinations />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <FloatingPromoAnnouncement />
    </div>
  );
}
