import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WhyUs() {
  const { i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-200/40">
      
      {/* Top Banner Context Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900">
          {isMarathi ? "आम्ही का?" : "Why We Are"}
        </h2>
        <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
          {isMarathi 
            ? "गांडूळ खत आणि जैविक प्रक्रियेद्वारे आम्ही पारंपरिक कचऱ्याचे रूपांतर शक्तिशाली सेंद्रिय खतात करतो, ज्यामुळे पर्यावरणाचे रक्षण होते आणि शेतीचा खर्च कमी होतो."
            : "Transforming raw organic biomass and vermicastings into clinical bio-fertilizers, we build a sustainable farming architecture while boosting crop density."
          }
        </p>
      </div>

      {/* Asymmetric Design Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        
        {/* Box 1: Image Frame */}
        <div className="rounded-[2rem] overflow-hidden shadow-sm aspect-video md:aspect-auto">
          <img 
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=500" 
            alt="Pure Farm Stream Ecology" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 2: Minimal Text Highlight */}
        <div className="bg-white/60 backdrop-blur-sm p-10 rounded-[2rem] border border-gray-200/30 flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
          <span className="text-3xl text-emerald-600">🌾</span>
          <h3 className="text-xl font-bold text-gray-900">{isMarathi ? "जमिनीचे आरोग्य वाढवते" : "Promotes Soil Health"}</h3>
          <p className="text-gray-500 font-light text-xs leading-relaxed">
            {isMarathi ? "पिकांच्या मुळांना दीर्घकाळ पोषण पुरवून जमिनीचा पोत कायमस्वरूपी सुधारतो." : "Enriches microbial structure, building multi-year organic carbon reserves in degraded land grids."}
          </p>
        </div>

        {/* Box 3: Architecture Framework Frame */}
        <div className="rounded-[2rem] overflow-hidden shadow-sm aspect-video md:aspect-auto">
          <img 
            src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=500" 
            alt="High-Tech Agribusiness Infrastructure" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 4: Minimal Text Highlight */}
        <div className="bg-white/60 backdrop-blur-sm p-10 rounded-[2rem] border border-gray-200/30 flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
          <span className="text-3xl text-emerald-600">💧</span>
          <h3 className="text-xl font-bold text-gray-900">{isMarathi ? "पाण्याची बचत" : "Saves Water & Resources"}</h3>
          <p className="text-gray-500 font-light text-xs leading-relaxed">
            {isMarathi ? "मातीची पाणी धरून ठेवण्याची क्षमता वाढवून दुष्काळी परिस्थितीतही पिके तग धरतात." : "Improves organic porous density inside soil strata, reducing seasonal irrigation water consumption rules."}
          </p>
        </div>

        {/* Box 5: Pure Dark Soil In-hand Frame */}
        <div className="rounded-[2rem] overflow-hidden shadow-sm aspect-video md:aspect-auto">
          <img 
            src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=500" 
            alt="Pure Humus Vermicastings Handful" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 6: Minimal Text Highlight */}
        <div className="bg-white/60 backdrop-blur-sm p-10 rounded-[2rem] border border-gray-200/30 flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
          <span className="text-3xl text-emerald-600">🍃</span>
          <h3 className="text-xl font-bold text-gray-900">{isMarathi ? "कार्बनचे प्रमाण कमी करते" : "Decrease Carbon"}</h3>
          <p className="text-gray-500 font-light text-xs leading-relaxed">
            {isMarathi ? "रासायनिक खतांचा वापर टाळून शेतीमधील कार्बन फुटप्रिंट्स मोठ्या प्रमाणावर कमी करते." : "Eliminates petrochemical nitrate runtime offsets, sequestering carbon directly within bio-mass systems."}
          </p>
        </div>

      </div>
    </section>
  );
}