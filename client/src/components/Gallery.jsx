import React from 'react';
import { useTranslation } from 'react-i18next';

// 1. Import all local images as ES6 modules correctly
import bedImg from "../assets/images/vermibed.jpeg";
import premOrgImg from "../assets/images/prem org.jpeg";
import chroloImg from "../assets/images/chrolo.jpeg";
import outputImg from "../assets/images/output.jpeg";

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  // Array storing production concepts with unified 'img' keys
  const galleryItems = [
    {
      id: 1,
      tag: "01 / BED MANAGEMENT",
      title_en: "Engineered Vermicompost Beds",
      title_mr: "नियोजित गांडूळ खत बेड",
      img: bedImg,
    },
    {
      id: 2,
      tag: "02 / RAW MATERIAL SELECTION",
      title_en: "Premium Organic Biomass",
      title_mr: "उत्कृष्ट सेंद्रिय बायोमास",
      img: premOrgImg,
    },
    {
      id: 3,
      tag: "03 / BIOLOGICAL RESULTS",
      title_en: "Maximizing Leaf Chlorophyll",
      title_mr: "पिकांची हिरवळ आणि वाढ",
      img: chroloImg,
    },
    {
      id: 4,
      tag: "04 / PRECISION HARVEST",
      title_en: "High-Yield Commercial Output",
      title_mr: "भरघोस व्यावसायिक उत्पादन",
      img: outputImg,
    }
  ];

  return (
    <section className="py-20 bg-white max-w-7xl mx-auto px-6 border-t border-gray-100">
      
      {/* Premium Light Brown / Beige Rounded Presentation Card Enclosure */}
      <div className="w-full bg-[#F3EFEA] rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-sm border border-[#EBE5DC] space-y-12">
        
        {/* Dynamic Flexible Responsive Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E3DCD2] pb-8">
          <div className="space-y-3 text-left">
            <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-widest bg-amber-900/10 px-3 py-1.5 rounded-md border border-amber-900/10 inline-block">
              {isMarathi ? "थेट वास्तव" : t('gallery.subtitle', 'Real-Time Impact')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight !mt-2">
              {isMarathi ? "उत्पादन आणि शेतातील परिणाम" : t('gallery.title', 'Production & Field Realities')}
            </h2>
          </div>
          <p className="text-gray-600 font-normal text-sm max-w-md text-left leading-relaxed">
            {isMarathi 
              ? "आमची नियोजनबद्ध गांडूळ खत निर्मिती पद्धति आणि आमच्याशी जोडलेल्या शेतकऱ्यांच्या शेतातील प्रत्यक्ष झालेले बदल यावर एक नजर."
              : t('gallery.desc', 'A look inside our structured vermicomposting methodology and the real agricultural returns generated for our network of commercial farmers.')}
          </p>
        </div>

        {/* 4-Column Clean Interactive Inner Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-200/40 shadow-md hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500">
              
              {/* Image Frame Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <img 
                  src={item.img}
                  alt={item.title_en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-60"></div>
                
                {/* Modernized Sharp Tech Label Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="bg-emerald-600 text-white font-mono font-bold text-[9px] uppercase px-2.5 py-1 rounded-md tracking-wider shadow-sm block">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Bottom Typography Label Area inside the grid asset */}
              <div className="p-5 text-left bg-white flex-grow flex items-center border-t border-gray-50">
                <h3 className="text-sm font-extrabold text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-300">
                  {isMarathi ? item.title_mr : item.title_en}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}