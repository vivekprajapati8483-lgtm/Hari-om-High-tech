import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#041611] text-emerald-300 py-2.5 px-6 text-xs border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">
              {isMarathi ? "संपर्क:" : "Contact Us:"}
            </span>
            <a href="tel:+919763817635" className="hover:text-white font-bold transition flex items-center gap-1.5 bg-emerald-900/30 px-2.5 py-1 rounded-md border border-emerald-500/20">
              <span className="text-[10px]">📞</span> +91 97638 17635
            </a>
            <a href="tel:+917588127431" className="hover:text-white font-bold transition flex items-center gap-1.5 bg-emerald-900/30 px-2.5 py-1 rounded-md border border-emerald-500/20">
              <span className="text-[10px]">📞</span> +91 75881 27431
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2 font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            <span>{isMarathi ? "१००% सेंद्रिय गांडूळ खत" : "100% Organic Vermicompost"}</span>
          </div>
        </div>
      </div>

      <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-100/40 subtle-shadow">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo with a modern dot indicator */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <span className="text-2xl font-extrabold tracking-tight text-emerald-900 transition-colors duration-300 group-hover:text-emerald-700">
            Hariom <span className="text-emerald-500 font-light">High-Tech</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
        
        {/* Navigation Links with custom smooth underlines */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <a href="#" className="text-emerald-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-500 rounded-sm">
            {t('nav.home')}
          </a>
          <a href="#products" className="hover:text-emerald-600 transition relative group py-1">
            {isMarathi ? "उत्पादने" : "Products"}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#technology" className="hover:text-emerald-600 transition relative group py-1">
            {t('nav.tech')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#inquiry" className="hover:text-emerald-600 transition relative group py-1">
            {t('nav.bulk')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Action Controls Panel */}
        <div className="flex items-center space-x-4">
          <select 
            value={isMarathi ? 'mr' : 'en'} 
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="p-2.5 border rounded-xl text-sm bg-gray-50/50 border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500 transition cursor-pointer font-semibold text-gray-700 shadow-sm"
          >
            <option value="en">English 🇬🇧</option>
            <option value="mr">मराठी 🇮🇳</option>
          </select>

          <a 
            href="#inquiry" 
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-700/20 active:scale-95 text-sm"
          >
            {t('nav.quote')}
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}