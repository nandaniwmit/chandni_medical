import React from 'react';
import { useApp } from '../context/AppContext';
import { useSEO } from '../hooks/useSEO';
import { SERVICES_DATA, BUSINESS_INFO } from '../utils/data';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { 
  Pill, ShieldAlert, Activity, Baby, Sparkles, Scissors, 
  MessageSquare, ShoppingCart, HelpCircle, CheckCircle2 
} from 'lucide-react';

export const Services: React.FC = () => {
  const { openOrderModal } = useApp();

  useSEO({
    title: "Our Medicine Categories & Inventory Search",
    description: "Search live medicine stocks at Chandni Medical in Gaya. Browse prescription drugs, OTC, baby care, dermatology, and diagnostic equipment with rapid door delivery.",
    keywords: "Medicine Stock Checker Gaya, Buy Insulin Gaya, Baby Care Products Gaya, Home Diagnostics Gaya, Surgical Dressings Gaya Bihar"
  });

  // Dynamic Icon selector based on service item
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="w-7 h-7 text-[#0A8F6A] dark:text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-[#0A8F6A] dark:text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-[#0A8F6A] dark:text-emerald-400" />;
      case 'Baby':
        return <Baby className="w-7 h-7 text-[#0A8F6A] dark:text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#0A8F6A] dark:text-emerald-400" />;
      case 'Scissors':
        return <Scissors className="w-7 h-7 text-[#0A8F6A] dark:text-emerald-400" />;
      default:
        return <Pill className="w-7 h-7 text-[#0A8F6A] dark:text-emerald-400" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      
      {/* Page Header - Clean Minimalist Style */}
      <section className="bg-white dark:bg-slate-900 py-16 md:py-24 text-center border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-[#0A8F6A] dark:text-emerald-400 uppercase">Pharmacy Departments</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Our Services & Products</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Search our active stock shelves in real time or browse our highly categorized medical supply departments serving Gaya.
          </p>
        </div>
      </section>

      {/* 1. EXCLUSIVE FEATURE - MEDICINE STOCK CHECKER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Live Availability Tool</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Search Medicine Shelf Stocks
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Verify real-time stock levels, MRPs, and active manufacturers for your prescription or monthly chronic care refills.
            </p>
          </div>

        {/* MedicineStockChecker Component */}
        <MedicineStockChecker />
      </section>

      {/* 2. CATEGORY-WISE PHARMACY SERVICES */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-150 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Our Departments</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Categorized Healthcare Supply Ranges
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Every category is managed by a separate team with continuous auditing of expiration dates and optimal storage logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div 
                key={service.id} 
                className="bg-slate-50 dark:bg-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  
                  {/* Category Header with dynamic icon */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-slate-950 dark:text-white tracking-tight leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Chandni Medical Dept
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Formulations:</span>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Service Specific CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-800/80 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openOrderModal(`Order from Dept: ${service.title}`)}
                    className="flex-1 py-2.5 bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white text-xs font-bold rounded-full shadow-sm hover:shadow transition-colors text-center uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Order Dept
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="py-2.5 px-5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-full transition-colors text-center"
                  >
                    Quick Call
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INSTRUCTIONAL CORNER - EXPLAINING OUR SYSTEM */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5.5 h-5.5 text-[#0A8F6A]" /> Sourcing Regulations & Policy Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs border-b border-slate-100 dark:border-slate-800 pb-1.5">For Prescription Drugs:</h4>
              <p className="text-xs leading-relaxed">
                To order prescription-only medicines (anti-diabetics, cardiac formulas, psychotropics), a scanned doctor's prescription slip must be submitted. Our pharmacist will verify the prescription and call you back before dispatch.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs border-b border-slate-100 dark:border-slate-800 pb-1.5">Emergency Sourcing:</h4>
              <p className="text-xs leading-relaxed">
                If a specific medicine or brand is marked "Out of Stock" or is an orphan oncology/critical care drug, please do not worry. Call or WhatsApp our team directly. We procure from central warehouses daily and will arrange it for you within 12 to 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Services;
