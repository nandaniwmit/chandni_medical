import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BUSINESS_INFO } from '../utils/data';
import { Menu, X, Sun, Moon, PhoneCall, ShieldAlert, Sparkles, ShoppingBag } from 'lucide-react';

export const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode, openOrderModal } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      
      {/* Top emergency announcement ticker - Clean Minimalism style */}
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-[11px] font-semibold py-2 px-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-1.5 mx-auto md:mx-0">
          <ShieldAlert className="w-3.5 h-3.5 animate-pulse text-[#0A8F6A]" />
          <span>Gaya's Trusted Pharmacy • Call <a href="tel:+917321883398" className="font-bold text-[#0A8F6A] hover:underline">+91 7321883398</a> for emergency life-saving medicines</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-slate-500 dark:text-slate-500 text-[10px]">
          <span>Hours: {BUSINESS_INFO.workingHours.weekdays}</span>
          <span className="h-3 w-px bg-slate-200 dark:bg-slate-850"></span>
          <span>Sunday: {BUSINESS_INFO.workingHours.sunday}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Initials SVG */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <svg 
              className="w-10 h-10 text-[#0A8F6A] dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shield base */}
              <path 
                d="M50 90C72 80 85 60 85 35V15L50 5L15 15V35C15 60 28 80 50 90Z" 
                fill="currentColor" 
                fillOpacity="0.1" 
                stroke="currentColor" 
                strokeWidth="5" 
                strokeLinejoin="round" 
              />
              {/* Medical Cross */}
              <rect x="44" y="24" width="12" height="42" rx="3" fill="currentColor" />
              <rect x="29" y="39" width="42" height="12" rx="3" fill="currentColor" />
              {/* Business Initials 'CM' embedded nicely */}
              <text 
                x="50" 
                y="80" 
                textAnchor="middle" 
                fontSize="18" 
                fontWeight="900" 
                fill="currentColor" 
                className="font-sans font-black select-none tracking-wider"
              >
                CM
              </text>
            </svg>
            <div>
              <span className="block font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-[9px] text-[#0A8F6A] dark:text-emerald-400 font-extrabold tracking-widest uppercase">
                Gaya, Bihar • Pharmacy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-1 py-2 text-sm font-bold tracking-tight transition-colors duration-150 ${
                    isActive
                      ? 'text-[#0A8F6A] dark:text-emerald-400 font-black'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Utilities (Dark Mode, Order, Phone) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Quick Order Action */}
            <button
              onClick={() => openOrderModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A8F6A] text-white text-sm font-bold rounded-full hover:opacity-90 shadow-sm shadow-emerald-200/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Medicine
            </button>

            {/* Direct Call Dial */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-white dark:bg-slate-800 dark:hover:bg-slate-750 text-sm font-bold rounded-full hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-5 space-y-4 animate-slide-down">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                closeMobileMenu();
                openOrderModal();
              }}
              className="w-full py-3 bg-[#0A8F6A] text-white font-bold rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Order Medicine Now
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              onClick={closeMobileMenu}
              className="w-full py-3 bg-slate-900 text-white font-bold rounded-full flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-[#0A8F6A]" />
              Call Pharmacy Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
