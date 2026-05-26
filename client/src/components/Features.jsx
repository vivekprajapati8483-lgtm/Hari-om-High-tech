import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  return (
    <section id="technology" className="py-20 bg-emerald-950/95 max-w-7xl mx-auto px-6 border-t border-gray-100">
      
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-[15px] font-extrabold text-white uppercase tracking-widest bg-amber-900/10 px-3 py-1.5 rounded-md border border-amber-900/10 inline-block">
          {isMarathi ? "वैज्ञानिक फॉर्म्युलेशन" : "Scientific Formulation"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight !mt-2">
          {isMarathi ? "हाय-टेक सेंद्रिय खतांचे फायदे" : "High-Tech Organic Advantages"}
        </h2>
      </div>

      {/* Compact Height Grid Context for Perfect Layout Alignment */}
      <div className="grid lg:grid-cols-12 gap-5 max-w-5xl mx-auto items-stretch lg:h-[400px]">
        
        {/* 1. FEATURE SPOTLIGHT TILE (Left Side) - Solid Premium Light Brown */}
        <div className="lg:col-span-7 h-full bg-[#F3EFEA] border border-[#EBE5DC] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between text-left hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/60 flex items-center justify-center text-2xl shadow-sm group-hover:scale-102 transition-transform">
              🧬
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-emerald-800 tracking-widest block">// STEP_01 // BIOLOGICAL_INTEGRATION</span>
              <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                {isMarathi ? "जिवाणू सक्रीयकरण (Microbial Activation)" : "Microbial Activation Matrix"}
              </h3>
              <p className="text-gray-600 font-normal text-xs sm:text-sm leading-relaxed max-w-xl">
                {isMarathi 
                  ? "मातीमध्ये असलेले रासायनिक घटक नैसर्गिकरित्या विरघळवून पिकांना मिळवून देण्यासाठी प्रयोगशाळेत तपासलेले उपयुक्त जिवाणू समाविष्ट आहेत."
                  : "Lab-tested beneficial bacteria complexes designed to naturally dissolve locked soil minerals, making them bio-available to crop roots safely and accelerating absorption timelines."
                }
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-300/40 flex justify-between items-center">
            <span className="text-3xl font-black font-mono text-gray-300/60 group-hover:text-emerald-700 transition-colors">01</span>
            <span className="text-[11px] font-mono text-gray-400 font-semibold tracking-wider">// LAB_APPROVED_MATRIX</span>
          </div>
        </div>

        {/* RIGHT STACK COLUMN - Compact Pure White Tiles */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full gap-5">
          
          {/* 2. CONTROLLED NUTRIENT MINI-TILE (Pure White) */}
          <div className="bg-white border border-gray-200/60 shadow-md rounded-[2rem] p-6 flex flex-col justify-center text-left hover:shadow-lg transition-all duration-500 group relative h-[calc(50%-10px)]">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg shadow-inner">
                  ⏳
                </div>
                <span className="text-2xl font-black font-mono text-gray-100 group-hover:text-emerald-700/20 transition-colors">02</span>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-extrabold text-gray-900 tracking-tight">
                  {isMarathi ? "नियंत्रित अन्नद्रव्य पुरवठा" : "Controlled Delivery"}
                </h4>
                <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
                  {isMarathi 
                    ? "अॅडव्हान्स ऑरगॅनिक पेलेन्टायझिंग तंत्रज्ञानामुळे पिकांना दीर्घकाळापर्यंत टप्प्याटप्प्याने पोषण मिळते."
                    : "Advanced organic pelletizing technology ensures slow-release, structured crop nourishment over an extended lifecycle with zero root-burn risks."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* 3. MEASURABLE YIELD MINI-TILE (Pure White) */}
          <div className="bg-white border border-gray-200/60 shadow-md rounded-[2rem] p-6 flex flex-col justify-center text-left hover:shadow-lg transition-all duration-500 group relative h-[calc(50%-10px)]">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg shadow-inner">
                  📊
                </div>
                <span className="text-2xl font-black font-mono text-gray-100 group-hover:text-emerald-700/20 transition-colors">03</span>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-extrabold text-gray-900 tracking-tight">
                  {isMarathi ? "उत्पादनात स्पष्ट वाढ" : "Yield Acceleration"}
                </h4>
                <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
                  {isMarathi 
                    ? "पानांची अन्न तयार करण्याची क्षमता वाढवण्यासाठी खास रचना, ज्यामुळे पिकांची घनता आणि निव्वळ वजनात वाढ होते."
                    : "Engineered specifically to maximize leaf chlorophyll synthesis, resulting in dense crop canopy structures and verified net weight increases."
                  }
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}