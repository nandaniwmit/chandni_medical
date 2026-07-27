import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useSEO } from '../hooks/useSEO';
import { BUSINESS_INFO, SERVICES_DATA, REVIEWS_DATA, FAQS_DATA, HEALTH_TIPS_DATA } from '../utils/data';
import { 
  Pill, Phone, MapPin, MessageSquare, ChevronRight, CheckCircle2, 
  Star, Heart, ShieldCheck, Truck, Users, HelpCircle, ArrowRight, Mail, Sparkles, ShoppingBag 
} from 'lucide-react';

export const Home: React.FC = () => {
  const { openOrderModal } = useApp();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Local Business JSON-LD Schema for SEO
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": BUSINESS_INFO.name,
    "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "72, Gaya, Bihar",
      "addressLocality": "Gaya",
      "addressRegion": "Bihar",
      "postalCode": "823001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7937",
      "longitude": "85.0005"
    },
    "url": window.location.origin,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "20:00"
      }
    ]
  };

  useSEO({
    title: "Genuine Medicines & Healthcare Store in Gaya",
    description: "Chandni Medical in Gaya, Bihar. Providing 100% authentic prescription drugs, wellness products, and baby care with rapid home delivery. Call +91 7321883398 today.",
    keywords: "Chandni Medical, Medical Store Gaya, Pharmacy in Gaya, Buy Medicine Gaya Bihar, Chemist GB Road Gaya, Home Delivery Medicine Gaya, Diabetes Insulin Gaya",
    schemaMarkup: homeSchema
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const handleFaqToggle = (id: string) => {
    setActiveFaq(prev => prev === id ? null : id);
  };

  // Popular high-demand items for showcasing
  const POPULAR_PRODUCTS = [
    {
      name: "Dr. Morepen BG-03 Glucometer (With 25 Strips)",
      category: "Health Devices",
      mrp: "₹1,249",
      discountMrp: "₹950",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300",
      badge: "Best Seller"
    },
    {
      name: "Cetaphil Gentle Skin Cleanser (250ml)",
      category: "Dermatology",
      mrp: "₹450",
      discountMrp: "₹399",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=300",
      badge: "Derm Choice"
    },
    {
      name: "Revital H Daily Health Supplement (30 Capsules)",
      category: "Multivitamins",
      mrp: "₹350",
      discountMrp: "₹295",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300",
      badge: "Popular"
    },
    {
      name: "PediaSure Premium Nutrition Drink (400g)",
      category: "Baby Nutrition",
      mrp: "₹699",
      discountMrp: "₹620",
      image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=300",
      badge: "Save ₹79"
    }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden py-12">
        {/* Background Image with optimized low opacity layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600" 
            alt="Chandni Medical Pharmacy Gaya Background" 
            className="w-full h-full object-cover opacity-25 filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl space-y-6">
            
            {/* Tagline eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A8F6A]/10 border border-[#0A8F6A]/20 text-emerald-400 text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Gaya's Most Trusted Pharmacy Outlet</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
              Genuine Medicines & Healthcare <span className="text-[#0A8F6A] dark:text-emerald-400">Delivered With Trust</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* Core Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3 justify-center sm:justify-start">
              
              {/* WhatsApp Prescription Order Form trigger */}
              <button
                onClick={() => openOrderModal()}
                className="px-8 py-4 bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white font-bold rounded-full shadow-sm hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#0A8F6A]" />
                WhatsApp Order
              </button>

              {/* Quick phone Call */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 text-[#0A8F6A] dark:text-emerald-400" />
                Call Now
              </a>

              {/* Get Directions Map */}
              <a
                href={BUSINESS_INFO.gmapDirectionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-full transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5 text-[#0A8F6A] dark:text-emerald-400" />
                Get Directions
              </a>

            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800 text-center sm:text-left">
              <div>
                <span className="block text-3xl font-black text-white">100%</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Authentic Medicines</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-white">2 Hrs</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Fast Gaya Delivery</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-3xl font-black text-white">10k+</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Gaya Families Served</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-100 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800" 
                alt="About Chandni Medical Storefront in Gaya" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400">Our Retail Store</span>
                <span className="block text-lg font-black">72, Gaya, Bihar 823001</span>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Our Legacy of Care</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Serving Gaya with Authentic Pharmaceutical Products Since 2015
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">
                Established with a vision to eliminate counterfeit medicines, <strong>Chandni Medical</strong> has grown into the primary trusted source of genuine therapeutic drugs and premium wellness essentials for families and doctors in Gaya.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We strictly maintain critical medical storage standards, including dual cold-storage units for vaccines, insulins, and ocular drops. Our staff includes registered pharmacists ready to guide you on dosage and instructions.
              </p>
              
              <div className="pt-2">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl transition-all"
                >
                  <span>Our Full Journey</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-900/60 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">What We Provide</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
              A fully organized inventory spanning daily OTC remedies, certified devices, custom wound dressings, and chronic care prescription medications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-[#0A8F6A]/20 hover:shadow-lg dark:hover:shadow-slate-950/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-[#0A8F6A] dark:text-emerald-400 w-fit rounded-xl">
                    {service.id === 'med-categories' && <Pill className="w-6 h-6" />}
                    {service.id === 'otc-products' && <ShieldCheck className="w-6 h-6" />}
                    {service.id === 'health-devices' && <Heart className="w-6 h-6" />}
                    {service.id !== 'med-categories' && service.id !== 'otc-products' && service.id !== 'health-devices' && <Pill className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-950 dark:text-white tracking-tight">{service.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                  <ul className="space-y-2 border-t border-slate-50 dark:border-slate-800/60 pt-3">
                    {service.items.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-5 mt-4 border-t border-slate-50 dark:border-slate-800/40 flex items-center justify-between">
                  <button
                    onClick={() => openOrderModal(`Inquiry about ${service.title}`)}
                    className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline"
                  >
                    Quick Order
                  </button>
                  <Link 
                    to="/services" 
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-0.5"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline"
            >
              <span>Explore All Medicine Categories & Service Departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Our Standards</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Why Gaya Doctors & Patients Trust Chandni Medical
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                We are committed to pharmaceutical excellence and honest community care. We strictly monitor every drug that sits on our shelves.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 rounded-xl shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">100% Genuine batch verified supply</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct tie-ups with original healthcare distributors prevents pharmaceutical duplication.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 rounded-xl shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Unmatched Cold Chain Security</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Backup power systems ensure your insulin, insulin syringes, vaccines are perfectly preserved.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 rounded-xl shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Qualified Pharmacist Guidance</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Get authentic counseling on drug interactions and correct storage instructions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl text-slate-800 dark:text-slate-200 space-y-6 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 opacity-5 dark:opacity-10 text-slate-100 dark:text-slate-800">
                <Pill className="w-64 h-64" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Need a custom or rare medication?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                We are connected with Bihar's premium clinical supply warehouses. If your prescribed critical medicine is unavailable, submit an inquiry and we can source it within 12-24 hours.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openOrderModal("Rare Medicine Procurement Request")}
                  className="px-6 py-3 bg-[#0A8F6A] text-white font-bold rounded-full hover:opacity-95 transition-opacity text-xs tracking-wider uppercase text-center shadow-sm"
                >
                  Sourcing Request
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-full transition-colors text-xs tracking-wider uppercase text-center"
                >
                  Call +91 7321883398
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Popular In Store</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Wellness Products & Devices
              </h2>
            </div>
            <Link 
              to="/services" 
              className="text-sm font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Search Store Inventory</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_PRODUCTS.map((prod, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A8F6A] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {prod.badge}
                    </span>
                  </div>
                  <div className="p-4 space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{prod.category}</span>
                    <h3 className="font-bold text-slate-900 dark:text-slate-200 text-sm tracking-tight leading-snug line-clamp-2">{prod.name}</h3>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-50 dark:border-slate-800/40 mt-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-extrabold text-[#0A8F6A] dark:text-emerald-400">{prod.discountMrp}</span>
                    <span className="text-xs font-semibold text-slate-400 line-through">{prod.mrp}</span>
                  </div>
                  <button
                    onClick={() => openOrderModal(`${prod.name} - 1 Unit`)}
                    className="p-2 bg-slate-100 hover:bg-[#0A8F6A] dark:bg-slate-800 dark:hover:bg-[#0A8F6A] text-slate-600 hover:text-white dark:text-slate-300 rounded-full transition-colors"
                    title="Add to order list"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Verified Testimonials</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              What the People of Gaya Say
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Summaries of authentic feedback received from our local patrons, doctors, and chronic care buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {REVIEWS_DATA.slice(0, 3).map((rev) => (
              <div 
                key={rev.id} 
                className="p-6 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-100 dark:border-slate-800/60 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">{rev.name}</span>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500">{rev.date}</span>
                  </div>
                  <span className="text-[9px] font-black tracking-widest uppercase text-[#0A8F6A] dark:text-emerald-400 px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/20 rounded-full">
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/about"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl transition-all"
            >
              <span>Our Vision, Story & Customer Commitment</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Got Questions?</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Clear answers regarding prescription policies, home delivery, and online ordering procedures.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.slice(0, 3).map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => handleFaqToggle(faq.id)}
                    className="w-full p-5 text-left font-bold text-slate-900 dark:text-slate-200 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/30"
                  >
                    <span>{faq.question}</span>
                    <HelpCircle className={`w-5 h-5 text-[#0A8F6A] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-slate-50 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline"
            >
              <span>Have another question? Read more on our Contact page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. CTA SECTION - UPLOAD PRESCRIPTION */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Prescription Upload</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
            Order Medicines Online via Simple Prescription Upload
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Take a clear photo of your doctor's prescription slip, fill in your delivery details, and submit. Our certified pharmacist will verify the products and ship instantly to your doorstep in Gaya.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openOrderModal()}
              className="px-8 py-4 bg-[#0A8F6A] text-white font-bold rounded-full shadow-sm hover:opacity-90 transition-opacity text-sm tracking-wider uppercase"
            >
              Upload & Order Now
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-full transition-colors text-sm tracking-wider uppercase flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#0A8F6A] dark:text-emerald-400" />
              Call Pharmacy Directly
            </a>
          </div>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Health & Wellness Guides</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                Latest Health Tips & Insights
              </h2>
            </div>
            <Link 
              to="/about" 
              className="text-sm font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline shrink-0"
            >
              <span>Explore All Wellness Guides</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HEALTH_TIPS_DATA.slice(0, 3).map((tip) => (
              <article 
                key={tip.id} 
                className="bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="p-6 space-y-3.5">
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                    <span>{tip.category}</span>
                    <span>{tip.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-base tracking-tight leading-snug line-clamp-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {tip.summary}
                  </p>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-2">
                  <Link 
                    to="/about" 
                    className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 10. NEWSLETTER FORM */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Newsletter Subscription</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Get Monthly Healthcare Advice & Promos
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Join 1,200+ Gaya subscribers. Get health tips written by registered medical practitioners and exclusive discounts on monthly medicine refills.
            </p>
            
            <form onSubmit={handleSubscribe} className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-sm font-semibold"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white font-bold rounded-full transition-all text-sm shrink-0 uppercase"
              >
                Subscribe
              </button>
            </form>

            {isSubscribed && (
              <p className="text-xs text-[#0A8F6A] dark:text-emerald-400 font-bold animate-pulse pt-2">
                Thank you! You are successfully subscribed. Expect your first health tips soon!
              </p>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
export default Home;
