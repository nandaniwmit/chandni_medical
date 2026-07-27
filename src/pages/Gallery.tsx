import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { GALLERY_DATA } from '../utils/data';
import { GalleryItem } from '../types';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, 
  Tag, Info, Filter, Eye, Camera, Grid 
} from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useSEO({
    title: "Store Photo Gallery & Pharmacy Facility Images",
    description: "Browse high-quality photographs of Chandni Medical's retail store in Gaya, Bihar. Inspect our alphabetical shelves, cold storage vaccines, baby care display counters, and equipment.",
    keywords: "Chandni Medical Storefront, Gaya Pharmacy Photos, Medicine Shelves Gaya, Medical Refrigerator Bihar"
  });

  // Filter gallery items
  const filteredItems = GALLERY_DATA.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Storefront & Counters' },
    { id: 'medicines', label: 'Medicine Shelves' },
    { id: 'products', label: 'Health Products' },
    { id: 'equipment', label: 'Medical Devices & Cold Chain' }
  ];

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find index in the filtered items array
    const idx = filteredItems.findIndex(i => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(filteredItems.length - 1); // loop
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === filteredItems.length - 1) {
      setLightboxIndex(0); // loop
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      
      {/* Page Header - Clean Minimalist Style */}
      <section className="bg-white dark:bg-slate-900 py-16 md:py-24 text-center border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-[#0A8F6A] dark:text-emerald-400 uppercase">Visual Showcase</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Our Store & Facility Gallery</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Take a virtual tour of our clean, perfectly categorized shelves and advanced cooling systems on GB Road, Gaya, Bihar.
          </p>
        </div>
      </section>

      {/* GALLERY INTERFACE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id);
                setLightboxIndex(null); // clear lightbox context if filter changes
              }}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-tight transition-all duration-150 ${
                activeFilter === cat.id
                  ? 'bg-[#0A8F6A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay with maximize zoom icon */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/30 backdrop-blur-md rounded-full text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-white text-[9px] font-bold rounded-full uppercase tracking-wider backdrop-blur-sm flex items-center gap-1 border border-slate-100 dark:border-slate-800">
                  <Tag className="w-2.5 h-2.5 text-[#0A8F6A] dark:text-emerald-400" />
                  {categories.find(c => c.id === item.category)?.label || item.category}
                </span>
              </div>

              {/* Caption content */}
              <div className="p-5 space-y-1.5 border-t border-slate-50 dark:border-slate-800">
                <h3 className="font-extrabold text-slate-950 dark:text-white text-sm sm:text-base tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if filter returns nothing */}
        {filteredItems.length === 0 && (
          <div className="py-24 text-center text-slate-400">
            <Camera className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-700 mb-3" />
            <p className="font-bold text-lg text-slate-600 dark:text-slate-400">No photos available under this filter</p>
            <p className="text-xs mt-1">Please select another gallery category.</p>
          </div>
        )}

      </section>

      {/* LIGHTBOX POPUP MODAL */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Lightbox Header Controls */}
          <div className="flex items-center justify-between text-white p-3">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#0A8F6A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Photo {lightboxIndex! + 1} of {filteredItems.length}
              </span>
            </div>
            <button
              onClick={handleCloseLightbox}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Core Image Display & Arrows */}
          <div className="flex-grow flex items-center justify-between gap-4 max-h-[75vh]">
            
            {/* Prev Trigger */}
            <button
              onClick={handlePrev}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/40 active:scale-95 shrink-0"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Display Box */}
            <div 
              className="relative max-w-4xl max-h-[72vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()} // prevent dismiss clicking image
            >
              <img 
                src={activeLightboxItem.imageUrl} 
                alt={activeLightboxItem.title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-zoom-in"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={handleNext}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/40 active:scale-95 shrink-0"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Lightbox Caption bottom */}
          <div 
            className="w-full max-w-2xl mx-auto text-center text-white bg-slate-900/80 p-5 rounded-2xl border border-white/5 backdrop-blur-md mb-2 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-block px-2.5 py-0.5 bg-[#0A8F6A] text-white text-[9px] font-bold rounded-full uppercase tracking-wider mb-1.5">
              {categories.find(c => c.id === activeLightboxItem.category)?.label}
            </span>
            <h4 className="text-base sm:text-lg font-black tracking-tight">{activeLightboxItem.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {activeLightboxItem.description}
            </p>
          </div>

        </div>
      )}

    </div>
  );
};
export default Gallery;
