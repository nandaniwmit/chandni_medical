import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { BUSINESS_INFO, TIMELINE_DATA, HEALTH_TIPS_DATA } from '../utils/data';
import { 
  Award, Shield, Heart, Clock, CheckCircle2, BookOpen, 
  User, Check, Flame, HelpCircle, Eye, Compass, Quote 
} from 'lucide-react';

export const About: React.FC = () => {
  const [selectedTipId, setSelectedTipId] = useState<string | null>(HEALTH_TIPS_DATA[0].id);

  useSEO({
    title: "About Our Store, Mission & Wellness Guides",
    description: "Learn about Chandni Medical's 10+ year history of offering authentic pharmaceutical products in Gaya, Bihar. Mission, Vision, founder's note, and professional health guides.",
    keywords: "Chandni Medical History, Suresh Prasad Chemist, Pharmacy Credentials Gaya, About Chandni Medical, Safe Medicine Storage Gaya"
  });

  const activeArticle = HEALTH_TIPS_DATA.find(tip => tip.id === selectedTipId) || HEALTH_TIPS_DATA[0];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      
      {/* Page Header - Clean Minimalist Style */}
      <section className="bg-white dark:bg-slate-900 py-16 md:py-24 text-center border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-[#0A8F6A] dark:text-emerald-400 uppercase">Who We Are</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">About Chandni Medical</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Discover our journey since 2015, our uncompromising commitment to medicinal safety, and certified wellness advice for families in Gaya, Bihar.
          </p>
        </div>
      </section>

      {/* 1. STORE STORY & CORE METRIC BENTO */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Our Origin Story</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              A Direct Response to Gaya's Genuine Medicine Needs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              In 2015, <strong>Chandni Medical</strong> was founded in Gaya with a singular, clear mandate: <em>to protect local consumers against the rising tide of counterfeit drugs.</em> Starting as a modest chemist shop, we prioritized batch auditing, licensed drug supply contracts, and secure storage configurations over fast profits.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              As we grew, our local patrons noticed the difference—insulin was always active, vaccines were refrigerated perfectly during Bihar's hottest summers, and prescriptions were dispensed under strict pharmacist supervision. Today, we are proud to be Gaya's first-choice pharmacy, bridging digital convenience with authentic offline pharmacy care.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Gaya Registered</h4>
                  <span className="block text-xs text-slate-500">Fully licensed retail license 100% compliant.</span>
                </div>
              </div>
              <div className="p-4.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-3">
                <Award className="w-5 h-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">10+ Years Care</h4>
                  <span className="block text-xs text-slate-500">Continuous service and clinical trust.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Store Overview Details */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
            <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tight border-b border-slate-100 dark:border-slate-800 pb-3">
              Store Configuration & Equipment Details
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              We leverage modern inventory and clinical logistics to maintain medicine efficacy. Our retail pharmacy comprises:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="p-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 rounded-lg text-xs font-bold font-mono shrink-0">01</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Dual-Compelled Cold Refrigeration Units</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Strict temperature regulation (2°C - 8°C) with continuous thermal sensors for insulin, biologic vaccines, and critical eye-care serum vials.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 rounded-lg text-xs font-bold font-mono shrink-0">02</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Dust-Free Air Filtration System</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Maintains store air quality and limits ambient dust particles settling on therapeutic capsules, liquid serums, and sterile medical tools.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-400 rounded-lg text-xs font-bold font-mono shrink-0">03</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Computerized Batch & Expiry Tracker</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Our smart retail software automatically blocks the dispensing of any strip that lies within 30 days of its designated expiration date.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 2. MISSION, VISION & VALUE STATEMENTS (BENTO) */}
      <section className="py-16 md:py-20 bg-slate-100 dark:bg-slate-900/60 border-t border-b border-slate-200/50 dark:border-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm space-y-4">
              <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 w-fit rounded-xl">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight">Our Mission Statement</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                To guarantee absolute pharmaceutical integrity, offering only 100% authentic medicine supplies while extending digital home delivery services to ensure no patient in Gaya goes without their critical daily dose.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm space-y-4">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 w-fit rounded-xl">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight">Our Vision Statement</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                To evolve as Gaya's primary healthcare wellness hub, combining registered pharmacist expertise, comprehensive home diagnostic supplies, and rapid online ordering to make medical care reliable and immediate.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm space-y-4">
              <div className="p-3 bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 w-fit rounded-xl">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight">Our Core Values</h3>
              <ul className="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Absolute Integrity</li>
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Human Concern</li>
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Technical Precision</li>
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Fast Delivery</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BUSINESS TIMELINE */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">Our Timeline</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Decade of Pharmaceutical Progress
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A quick chronological summary of our milestones serving Gaya, Bihar.
          </p>
        </div>

        {/* Timeline path */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {TIMELINE_DATA.map((milestone, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10">
              
              {/* Year marker on left */}
              <div className="hidden md:flex absolute right-full mr-8 items-center justify-end h-full">
                <span className="text-xl font-black text-[#0A8F6A] dark:text-emerald-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm leading-none">
                  {milestone.year}
                </span>
              </div>

              {/* Dot marker */}
              <div className="absolute top-1.5 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A8F6A] border-4 border-slate-50 dark:border-slate-950 z-10 shadow-sm"></div>

              {/* Content box */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
                <span className="inline-block md:hidden text-sm font-black text-[#0A8F6A] dark:text-emerald-400 mb-1">
                  {milestone.year}
                </span>
                <h3 className="font-extrabold text-slate-950 dark:text-white text-base tracking-tight">{milestone.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {milestone.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. FOUNDER / OWNER MESSAGE */}
      <section className="py-16 md:py-20 bg-slate-100 dark:bg-slate-900/60 border-t border-b border-slate-200/50 dark:border-slate-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-150 dark:border-slate-850 shadow-md relative overflow-hidden">
            
            <div className="absolute right-6 top-6 text-slate-100 dark:text-slate-800/40 pointer-events-none">
              <Quote className="w-24 h-24 stroke-current" />
            </div>

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-black tracking-widest text-[#0A8F6A] dark:text-emerald-400 uppercase">From the Founder's Desk</span>
              
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                <p>
                  "As a licensed pharmacist in Bihar, I always understood that a medical shop is not merely a trading post; it is a critical checkpoint for public health. Every incorrect temperature cycle, every unchecked batch, and every unverified distributor is a severe threat to patient wellness."
                </p>
                <p>
                  "We built Chandni Medical around strict auditing of our sources. We pledge to the families of Gaya that we will never compromise on authenticity, we will continue of offer honest discount pricing for lifelong diabetes and heart meds, and we will always guide you with sincere care."
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] rounded-full">
                  <User className="w-6 h-6 text-[#0A8F6A]" />
                </div>
                <div>
                  <h4 className="font-black text-slate-950 dark:text-white text-base">Mr. Suresh Prasad</h4>
                  <span className="block text-xs text-slate-500">Lead Pharmacist, Founder & CEO • Chandni Medical</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. DEDICATED FEATURE: COMPLETE HEALTH & WELLNESS GUIDES */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="p-1.5 bg-emerald-50 dark:bg-emerald-950/20 text-[#0A8F6A] dark:text-emerald-400 rounded-lg text-xs font-black uppercase tracking-wider inline-flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-[#0A8F6A]" /> Patient Education Portal
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Certified Wellness Guides & Articles
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Read complete expert advice on medicine compliance, safety storage, and chronic wellness management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Article selector sidebar */}
          <div className="space-y-3">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2">Select Article</span>
            {HEALTH_TIPS_DATA.map((tip) => (
              <button
                key={tip.id}
                onClick={() => setSelectedTipId(tip.id)}
                className={`w-full p-4 text-left rounded-xl border transition-all flex flex-col gap-1.5 ${
                  selectedTipId === tip.id
                    ? 'bg-[#0A8F6A] border-[#0A8F6A] text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-150 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider opacity-85">
                  <span>{tip.category}</span>
                  <span>{tip.readTime}</span>
                </div>
                <span className="font-extrabold text-sm tracking-tight leading-snug">{tip.title}</span>
              </button>
            ))}
          </div>

          {/* Expanded Article Display pane */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase">
                <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-[#0A8F6A] dark:text-emerald-400 rounded-full">{activeArticle.category}</span>
                <span>Published: {activeArticle.date}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">
                {activeArticle.title}
              </h3>
            </div>

            {/* Content text */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
              <p className="font-bold text-slate-800 dark:text-slate-200">
                {activeArticle.summary}
              </p>
              {activeArticle.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Disclaimer block inside article */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs text-slate-500 leading-relaxed border-l-2 border-emerald-500">
              <strong>Patient Note:</strong> This guide has been verified by our Lead Pharmacist at Chandni Medical. Always align medication practices with your physician's exact prescription instructions.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default About;
