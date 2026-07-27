import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BUSINESS_INFO } from '../utils/data';
import { Pill, Phone, Mail, MapPin, Clock, ExternalLink, MessageSquare, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  // === GLOBAL TRACKING SYSTEM INTEGRATION ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
        localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
        const path = window.location.pathname;
        const segment = path.replace(/\/$/, "").split("/").pop();
        return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
        const payload = {
            cid: cid, 
            visitor_id: visitorId, 
            session_id: sessionId,
            page_name: getPageName(), 
            referrer: document.referrer || '',
            device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
            browser: navigator.userAgent, 
            action: 'init'
        };
        fetch(TRACKING_ENDPOINT, { 
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(payload) 
        }).catch(err => {});
    };

    const sendExitPayload = () => {
        const payload = { 
            cid: cid, 
            session_id: sessionId, 
            page_name: getPageName(), 
            action: 'page_change' 
        };
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(TRACKING_ENDPOINT, blob);
        } else {
            fetch(TRACKING_ENDPOINT, { 
                method: 'POST', 
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(payload), 
                keepalive: true 
            }).catch(err => {});
        }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;

    const resetIdleTimer = () => {
        if (isIdle) {
            isIdle = false;
            sendInitPayload(); // Wake up! Resume tracking
        }
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            isIdle = true;
            sendExitPayload(); // Inactive! Stop tracking
        }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
        sendExitPayload();
        setTimeout(sendInitPayload, 100);
    };

    // React single page app router compatibility tracking
    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') { 
            sendExitPayload(); 
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
        window.removeEventListener('popstate', handleLocationChange);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('pagehide', sendExitPayload);
        activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
        clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-150 dark:border-slate-900/80 transition-colors duration-200">
      
      {/* Footer Top Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Store Intro & Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 rounded-lg">
                <Pill className="w-6 h-6" />
              </span>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Your neighborhood medical store in Gaya, Bihar. Dedicated to providing 100% authentic medicines, quality pediatric supplements, clinical monitoring devices, and cold chain vaccines with personalized pharmacy care.
            </p>
            <div className="pt-2">
              <a 
                href={BUSINESS_INFO.gmapDirectionsUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] hover:opacity-80 transition-opacity uppercase tracking-wider"
              >
                <MapPin className="w-3.5 h-3.5" />
                Find Store on Map
              </a>
            </div>
          </div>

          {/* Column 2: Working Hours & Location */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-tight uppercase border-b border-slate-200/60 dark:border-slate-800/60 pb-2">
              Store Timings
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-800 dark:text-slate-200">Mon - Sat</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{BUSINESS_INFO.workingHours.weekdays}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-800 dark:text-slate-200">Sunday</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{BUSINESS_INFO.workingHours.sunday}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-[#0A8F6A] dark:text-emerald-400">
                <Heart className="w-4 h-4 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <span className="block font-semibold">Emergency Services</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{BUSINESS_INFO.workingHours.emergency}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-tight uppercase border-b border-slate-200/60 dark:border-slate-800/60 pb-2">
              Quick Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
              <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-[#0A8F6A] transition-colors py-1">Home</Link>
              <Link to="/about" className="text-slate-500 dark:text-slate-400 hover:text-[#0A8F6A] transition-colors py-1">About Us</Link>
              <Link to="/services" className="text-slate-500 dark:text-slate-400 hover:text-[#0A8F6A] transition-colors py-1">Services</Link>
              <Link to="/gallery" className="text-slate-500 dark:text-slate-400 hover:text-[#0A8F6A] transition-colors py-1">Gallery</Link>
              <Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-[#0A8F6A] transition-colors py-1">Contact</Link>
            </nav>
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Connected Channels</span>
              <div className="flex gap-3">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="p-2 bg-slate-200/60 dark:bg-slate-800 hover:bg-[#0A8F6A] hover:text-white transition-all text-slate-600 dark:text-slate-300 rounded-lg"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappFormatted}`} 
                  className="p-2 bg-slate-200/60 dark:bg-slate-800 hover:bg-[#0A8F6A] hover:text-white transition-all text-slate-600 dark:text-slate-300 rounded-lg"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Address details */}
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-tight uppercase border-b border-slate-200/60 dark:border-slate-800/60 pb-2">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {BUSINESS_INFO.address}
                  <span className="block text-xs text-slate-400 mt-0.5">{BUSINESS_INFO.landmark}</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] transition-colors font-semibold font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] transition-colors font-medium break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Medical Disclaimers Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong>Medical Disclaimer:</strong> The stock inventory, therapeutic categories, and medical articles published on this website are for informational purposes only and must not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult a certified physician regarding any medical concerns.
          </p>
          <div className="flex flex-wrap gap-4 text-slate-400 font-medium">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Use</span>
            <span>•</span>
            <span>Refund Policy</span>
            <span>•</span>
            <span>Prescription Dispensing Regulations</span>
          </div>
        </div>

        {/* Copyright notice and developer credits */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500 font-medium">
          <p className="flex flex-wrap items-center gap-x-1.5 justify-center sm:justify-start">
            <span>&copy; {new Date().getFullYear()} <span className="text-slate-700 dark:text-slate-300 font-semibold">{BUSINESS_INFO.name}</span>. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-1">
              <span>Developed by</span>
              <a 
                href="https://main.webmakerit.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0A8F6A] dark:text-emerald-400 hover:opacity-80 font-bold inline-flex items-center gap-0.5 group"
              >
                WMIT
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
