import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * FloatingPromoAnnouncement Component
 * Displays a promotional banner that appears after 7 seconds
 * Features: Auto-show timer, close button, smooth animations
 */
export default function FloatingPromoAnnouncement() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set timer to show announcement after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Floating announcement */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-in zoom-in duration-300">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Image */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663434869998/BKTpbGD4QXoavbxe8uyWea/diadltrabajador_8b9a22da.jpg"
            alt="Promoción Día del Trabajador"
            className="w-full h-auto"
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
            aria-label="Cerrar anuncio"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>

          {/* Optional: Click to close hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <p className="text-white text-sm font-semibold">Haz clic para cerrar</p>
          </div>
        </div>
      </div>
    </>
  );
}
