import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactMap() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  // CLEANED SYNTAX: Pure URL string extracted cleanly from your iframe link
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.0349740940837!2d74.33891060240457!3d21.626299072038623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf71d7295801d1%3A0xd7a1c431ca4364f2!2sHari%20Om%20Hightake%20Varmicompost!5e0!3m2!1sen!2sin!4v1779792847604!5m2!1sen!2sin";

  return (
    <section id="location" className="py-20 bg-white max-w-7xl mx-auto px-6 border-t border-gray-100">
      
      {/* Premium Light Brown / Beige Rounded Presentation Card Wrapper */}
      <div className="w-full bg-[#F3EFEA] rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-sm border border-[#EBE5DC] space-y-12">
        
        {/* Header Content Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E3DCD2] pb-8">
          <div className="space-y-3 text-left">
            <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-widest bg-amber-900/10 px-3 py-1.5 rounded-md border border-amber-900/10 inline-block">
              {isMarathi ? "प्रत्यक्ष भेट" : "Visit Our Facility"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight !mt-2">
              {isMarathi ? "आमचा प्रकल्प आणि मुख्य कार्यालय" : "Our Production Hub Location"}
            </h2>
          </div>
          <p className="text-gray-600 font-normal text-sm max-w-md text-left leading-relaxed">
            {isMarathi 
              ? "आमच्या अत्याधुनिक गांडूळ खत निर्मिती केंद्राला भेट द्या. खालील नकाशाचा वापर करून तुम्ही थेट आमच्या प्लांटवर येऊ शकता."
              : "Step inside our high-tech processing facility. Use the interactive coordinate navigator map below to chart direct driving routes to our commercial plant."}
          </p>
        </div>

        {/* Layout Grid: Full-Width Interactive Map + Information Anchor Badges */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: The Main Map Frame (Spans 8 columns) */}
          <div className="lg:col-span-8 w-full h-[380px] rounded-[2rem] overflow-hidden bg-white border border-gray-200/40 p-3 shadow-md group">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-50">
              <iframe 
                title="Hariom High-Tech Project Hub Map Location"
                src={mapEmbedUrl} 
                className="w-full h-full border-0 grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Quick Contact & Route Logistics Panel (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Plant Address Card */}
            <div className="bg-white border border-gray-200/40 p-6 rounded-2xl text-left shadow-sm flex-grow flex flex-col justify-center space-y-2">
              <div className="text-xl">📍</div>
              <h4 className="font-extrabold text-gray-900 text-sm tracking-tight">
                {isMarathi ? "प्रकल्प केंद्र पत्ता" : "Factory Address"}
              </h4>
              <p className="text-gray-500 font-light text-xs leading-relaxed">
                {isMarathi 
                  ? "हरिओम हाय-टेक प्रिमियम गांडूळ खत निर्मिती केंद्र, महाराष्ट्र, भारत." 
                  : "Hariom High-Tech Premium Vermicompost Production Hub, Maharashtra, India."}
              </p>
            </div>

            {/* Support / Visitation Timings Card */}
            <div className="bg-white border border-gray-200/40 p-6 rounded-2xl text-left shadow-sm flex-grow flex flex-col justify-center space-y-2">
              <div className="text-xl">⏳</div>
              <h4 className="font-extrabold text-gray-900 text-sm tracking-tight">
                {isMarathi ? "भेट देण्याची वेळ" : "Visiting Hours"}
              </h4>
              <p className="text-gray-500 font-light text-xs leading-relaxed">
                {isMarathi 
                  ? "सोमवार ते शनिवार: सकाळी ९:०० ते संध्याकाळी ६:०० " 
                  : "Monday to Saturday: 9:00 AM – 6:00 PM "}
              </p>
            </div>

            {/* Direct Directions Action Button linked to your mapEmbedUrl location */}
            <button 
              onClick={() => window.open(mapEmbedUrl, '_blank')}
              className="w-full text-center block bg-zinc-950 text-white hover:bg-emerald-700 font-bold py-4 px-6 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase shadow-md cursor-pointer"
            >
              🚀 {isMarathi ? "नकाशावर मार्ग पहा" : "Get Driving Directions"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}