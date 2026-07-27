import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './layouts/Layout';
import { Pill } from 'lucide-react';

// Lazy load pages for fast initial bundle sizes and peak performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium, on-theme fallback spinner resembling a clinical loading state
const LoadingFallback: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <div className="relative flex flex-col items-center gap-4">
        {/* Heartbeat pulse animation effect */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-[#0A8F6A]/20 rounded-full animate-ping"></div>
          <div className="p-4 bg-[#0A8F6A] text-white rounded-2xl shadow-sm relative z-10 animate-pulse">
            <Pill className="w-8 h-8 rotate-45" />
          </div>
        </div>
        <div>
          <span className="block text-sm font-bold tracking-widest text-[#0A8F6A] dark:text-emerald-400 uppercase text-center animate-pulse">
            Chandni Medical
          </span>
          <span className="block text-[11px] text-slate-400 dark:text-slate-500 font-semibold text-center mt-1">
            Loading secure pharmacy portal...
          </span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Main Application Layout wrapper */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              {/* Fallback redirect */}
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppProvider>
  );
}
