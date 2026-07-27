import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingButtons } from '../components/FloatingButtons';
import { WhatsAppOrderForm } from '../components/WhatsAppOrderForm';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Automatically scroll to top of window on page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior // Instant jump on route change to feel snappy
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-150 transition-colors duration-200">
      
      {/* Header element */}
      <Header />

      {/* Main viewport rendering the router outlet */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Floating Utilities (Phone, WhatsApp Order, Back To Top) */}
      <FloatingButtons />

      {/* Global prescription order modal */}
      <WhatsAppOrderForm />
      
    </div>
  );
};
export default Layout;
