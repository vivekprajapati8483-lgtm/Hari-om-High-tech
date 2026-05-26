import React from 'react';
import { useTranslation } from 'react-i18next';

// 1. Import your real local image directly so Vite bundles it as a background canvas
import vermiBedBg from '../assets/images/prem org.jpeg';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  return (
    <header 
      className="relative min-h-[85vh] flex items-center justify-start bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${vermiBedBg})` }} // <-- 2. Safely binds local asset image variable
    >
      {/* Deep cinematic gradient overlay to make sure all white typography is sharp and highly legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-black/30 z-0"></div>
      
      {/* High-tech matrix grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] z-0"></div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 py-24">
        
        {/* Premium Glassmorphism Floating Panel */}
     <div className="max-w-2xl bg-zinc-950/70 backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-400/20 border border-emerald-400/30 px-4 py-1.5 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-widest shadow-inner">
            <span>✨ {isMarathi ? "प्रीमियम बायो-स्टिम्युलंट्स आणि खते" : "Premium Bio-Stimulants & Fertilizers"}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            {isMarathi ? (
              <>परंपरेवर आधारित.<br /><span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">उत्पादनासाठी तंत्रज्ञान.</span></>
            ) : (
              <>Rooted in Tradition.<br /><span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Engineered for Yield.</span></>
            )}
          </h1>
          
          <p className="text-base sm:text-lg text-emerald-100/80 font-light leading-relaxed">
            {isMarathi 
              ? "हरिओम हाय-टेक जैविक मातीचे पोषण आणि आधुनिक अचूक शेती यांची सांगड घालते. आमची उत्पादने पिकांची मुळे आणि जिवाणूंची संख्या वाढवण्यासाठी तयार केली आहेत, ज्यामुळे सुरक्षितपणे भरघोस उत्पादन मिळते."
              : "Hariom High-Tech blends active soil biology with modern precision farming. Our bio-inputs are engineered to multiply microbial counts and accelerate root absorption naturally."
            }
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="#inquiry" 
              className="bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-emerald-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center shadow-lg hover:scale-[1.01] text-sm"
            >
              {isMarathi ? "घाऊक खरेदीसाठी चौकशी करा" : "Inquire for Bulk Orders"}
            </a>
            <a 
              href="#products" 
              className="border border-white/30 hover:border-white/60 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all text-center backdrop-blur-sm text-sm"
            >
              {isMarathi ? "उत्पादने पहा" : "View Products"}
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}