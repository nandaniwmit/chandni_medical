import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useSEO } from '../hooks/useSEO';
import { BUSINESS_INFO } from '../utils/data';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare, 
  Map, PhoneCall, HelpCircle, CheckCircle, AlertCircle 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { openOrderModal } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useSEO({
    title: "Contact Us, Location Map & Working Hours",
    description: "Contact Chandni Medical on GB Road, Gaya, Bihar. View our phone +91 7321883398, working hours, interactive Google Map, and submit quick medicine inquiries.",
    keywords: "Contact Chandni Medical, Pharmacy Phone Gaya, Medical Store Address Gaya, Gaya Chemist Location"
  });

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    } else if (!/^\+?([0-9]{2})?[-. ]?([0-9]{10})$/.test(formData.phone.replace(/\s+/g, ''))) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message cannot be empty';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate backend transmission and show success banner
    setFormSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });

    // Automatically hide success notification after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      
      {/* Page Header - Clean Minimalist Style */}
      <section className="bg-white dark:bg-slate-900 py-16 md:py-24 text-center border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-[#0A8F6A] dark:text-emerald-400 uppercase">Connect With Us</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Contact Chandni Medical</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Reach out for medicine stock checks, urgent supply orders, or home-care medical equipment queries.
          </p>
        </div>
      </section>

      {/* CORE CONTACT LAYOUT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: Core Info Cards */}
          <div className="space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Business Details</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Gaya's Direct Pharmacy Outlet & Support Channels
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Visit our store directly or communicate through call, mail, or instant WhatsApp messaging. We are located near the heart of Gaya, Bihar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Store Address</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <span className="block text-[10px] font-bold text-slate-400 mt-0.5">{BUSINESS_INFO.landmark}</span>
                </div>
              </div>

              {/* Call Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Call/Voice Support</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Reach our registered pharmacists directly for instant consultations.
                  </p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-sm font-bold text-[#0A8F6A] dark:text-emerald-400 mt-1.5 hover:underline font-mono">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Email Address</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Submit wholesale inquiries or company contracts via:
                  </p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="block text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 mt-1.5 hover:underline break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Working Hours</h4>
                  <ul className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 space-y-1">
                    <li><strong>Mon-Sat:</strong> {BUSINESS_INFO.workingHours.weekdays}</li>
                    <li><strong>Sunday:</strong> {BUSINESS_INFO.workingHours.sunday}</li>
                    <li className="text-[#0A8F6A] dark:text-emerald-400"><strong>Emergency:</strong> {BUSINESS_INFO.workingHours.emergency}</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Direct Quick Connection Banner */}
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl space-y-4">
              <h4 className="font-bold text-base tracking-tight text-slate-900 dark:text-white">Need Urgent Medicine Delivery?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Do not wait for a contact form callback if it is critical or emergency care! Use our rapid WhatsApp dispatch or call dial directly.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => openOrderModal()}
                  className="px-4.5 py-2 bg-[#0A8F6A] text-white font-bold text-xs rounded-full uppercase tracking-wider transition-opacity hover:opacity-90 shadow-sm"
                >
                  WhatsApp Form
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-4.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-full uppercase tracking-wider transition-colors"
                >
                  Call +91 7321883398
                </a>
                <a
                  href={BUSINESS_INFO.gmapDirectionsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-full uppercase tracking-wider transition-colors"
                >
                  Get Route
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Quick Inquiry Form */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Quick Inquiry Form</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                Submit a Store Message
              </h3>
            </div>

            {formSubmitted && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5 text-sm animate-fade-in">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Message sent successfully!</p>
                  <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80 mt-0.5">Thank you. Our Gaya pharmacy support team will call you back within 1 to 2 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/40 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-lg text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]`}
                  />
                  {errors.name && <p className="mt-1 text-[10px] text-red-500 font-bold">{errors.name}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile"
                    className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/40 border ${errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-lg text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]`}
                  />
                  {errors.phone && <p className="mt-1 text-[10px] text-red-500 font-bold">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com (Optional)"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  />
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Inquiry Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] cursor-pointer"
                  >
                    <option value="General Inquiry">General Store Inquiry</option>
                    <option value="Medicine Stock Check">Medicine Stock Check</option>
                    <option value="Home Delivery Request">Home Delivery Request</option>
                    <option value="Bulk Supply Contracts">Wholesale & Bulk Supplies</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Your Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Specify medicine brand, therapeutic salt content, or generic name details..."
                  className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/40 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-lg text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]`}
                />
                {errors.message && <p className="mt-1 text-[10px] text-red-500 font-bold">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0A8F6A] hover:bg-[#0A8F6A]/90 text-white font-bold text-sm rounded-full transition-all shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                Submit Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE GOOGLE MAPS BLOCK */}
      <section className="py-12 bg-white dark:bg-slate-900 border-t border-b border-slate-150 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 font-sans">Find Us Offline</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-1">Our Physical Outlet Route</h3>
            </div>
            <a 
              href={BUSINESS_INFO.gmapDirectionsUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 text-[#0A8F6A] dark:text-emerald-400 font-bold text-xs rounded-xl transition-colors"
            >
              <Map className="w-4 h-4" />
              Open in Google Maps App
            </a>
          </div>

          {/* Map wrapper with padding constraints */}
          <div className="w-full h-96 md:h-[450px] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md">
            <iframe 
              src={BUSINESS_INFO.gmapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Chandni Medical Gaya Location Map"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Contact;
