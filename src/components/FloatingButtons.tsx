import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BUSINESS_INFO } from '../utils/data';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const { openOrderModal } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5">
      
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full shadow-lg border border-slate-100 dark:border-slate-700/80 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/40"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="p-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 flex items-center justify-center animate-pulse"
        title="Call Chandni Medical"
        aria-label="Call pharmacy"
      >
        <Phone className="w-5.5 h-5.5" />
      </a>

      {/* Floating WhatsApp Order Button */}
      <button
        onClick={() => openOrderModal()}
        className="p-4 bg-[#0A8F6A] hover:opacity-95 text-white rounded-full shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/40 flex items-center justify-center relative group"
        title="Order via WhatsApp"
        aria-label="Order medicines on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-[#0A8F6A]" />
        
        {/* Hover label for desktop */}
        <span className="absolute right-14 bg-[#0A8F6A] text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md hidden sm:inline">
          Order on WhatsApp
        </span>
      </button>

    </div>
  );
};
