import React from 'react';
import { useTranslation } from 'react-i18next';
import chotuKakaImg from '../assets/images/chotu-kaka.jpeg';

export default function Process() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  return (
    <section className="py-20 bg-white max-w-7xl mx-auto px-6 border-t border-gray-100">
      
      {/* Premium Light Brown / Beige Rounded Presentation Card Box */}
      <div className="w-full bg-[#F3EFEA] rounded-[3rem] p-8 sm:p-12 lg:p-16 grid lg:grid-cols-12 gap-12 items-center shadow-sm border border-[#EBE5DC]">
        
        {/* Left Side: Image Content Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-md">
            {/* Elegant warm-toned glowing accent background layer */}
            <div className="absolute -inset-2 bg-amber-900/5 rounded-[2.5rem] blur-xl"></div>
            
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-xl border border-gray-200/40">
              <div className="overflow-hidden rounded-[1.8rem] aspect-[4/3] bg-gray-50">
                <img 
                  src={chotuKakaImg} 
                  alt="Hariom High-Tech Vermicompost Earthworms Production" 
                  className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-100/60 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                  📍 {isMarathi ? "प्रत्यक्ष उत्पादन केंद्र" : "Real Production Facility"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: High-Contrast Dark Typography & Features Panel */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-widest bg-amber-900/10 px-3 py-1.5 rounded-md border border-amber-900/10">
              {isMarathi ? "निसर्गाचे बायो-इंजिनिअर्स" : "Natural Bio-Engineers"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight !mt-4">
              {isMarathi ? "प्रीमियम गांडूळ खत निर्मिती (Vermicompost)" : "Premium Vermicompost Production"}
            </h2>
          </div>
          
          {/* Main Content Text */}
          <p className="text-gray-600 font-normal leading-relaxed text-base">
            {isMarathi 
              ? "हरिओम हाय-टेक मध्ये आम्ही कृत्रिम रसायने वापरत नाही. आम्ही हजारो जिवंत गांडुळांच्या मदतीने सेंद्रिय पदार्थांचे नैसर्गिक विघटन करतो."
              : "At Hariom High-Tech, we completely eliminate artificial chemical processing. We partner with millions of active earthworms to biologically break down raw organic biomass."
            }
          </p>

          {/* Core Structured Verification Checkboxes */}
          <div className="grid sm:grid-cols-2 gap-5 pt-2">
            <div className="flex items-start space-x-3">
              <span className="text-emerald-700 font-bold bg-white border border-gray-200 shadow-sm w-6 h-6 rounded-lg flex items-center justify-center text-xs mt-0.5">✓</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{isMarathi ? "शंभर टक्के सेंद्रिय द्रावण" : "100% Organic Humus"}</h4>
                <p className="text-gray-500 font-light text-xs mt-0.5">{isMarathi ? "अत्यंत सकस आणि पोषक द्रव्ये." : "Dense macro & micronutrients."}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-emerald-700 font-bold bg-white border border-gray-200 shadow-sm w-6 h-6 rounded-lg flex items-center justify-center text-xs mt-0.5">✓</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{isMarathi ? "जमिनीची सुपीकता" : "Soil Health Amplification"}</h4>
                <p className="text-gray-500 font-light text-xs mt-0.5">{isMarathi ? "मातीचा कस कायमस्वरूपी वाढवते." : "Multiplies long-term carbon tracks."}</p>
              </div>
            </div>
          </div>
          
          {/* Deep Charcoal Matte Technical Console Box for High Contrast */}
          <div className="p-5 bg-zinc-900 rounded-2xl shadow-xl text-white border border-zinc-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-white/20 uppercase tracking-widest select-none">LAB.ANALYSIS.v4</div>
            <div className="flex items-start space-x-3">
              <span className="text-xl mt-0.5">⚙️</span>
              <div className="space-y-1">
                <strong className="text-emerald-400 font-mono text-xs tracking-wider uppercase block">
                  {isMarathi ? "तांत्रिक विश्लेषण :" : "TECHNICAL ANALYSIS :"}
                </strong>
                <p className="text-zinc-200 font-mono text-xs leading-relaxed tracking-wide">
                  High-density humic acid extract & bio-available nitrogen fixation via active earthworm vermicastings.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}