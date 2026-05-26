import React from 'react';
import { useTranslation } from 'react-i18next';

// Keeping your local product image module imports intact
import jivImg from '../assets/images/jiv.jpeg';
import neemImg from '../assets/images/neem.jpeg';
import vermiImg from '../assets/images/vermi.jpeg';

export default function Products() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  const productList = [
    {
      id: "jivamrut",
      name_en: "Jivamrut Bio-Fertilizer",
      name_mr: "जीवामृत सेंद्रिय द्रव्य खत",
      type_en: "Liquid Bio-Inoculant",
      type_mr: "द्रवरूप जिवाणू टॉनिक",
      desc_en: "A powerful microbial culture that introduces millions of beneficial bacteria to the soil, boosting root immunity and nutrient absorption.",
      desc_mr: "मातीमधील उपयुक्त जिवाणूंची संख्या करोडोने वाढवणारे आणि पिकांची रोगप्रतिकारक शक्ती तसेच अन्नद्रव्ये शोषण्याची क्षमता वाढवणारे नैसर्गिक द्रावण.",
      tag_en: "100% Bio-Active",
      tag_mr: "१००% जैविक क्रियाशील",
      btn_en: "Request Pricing",
      btn_mr: "किंमत पत्रक मिळवा",
      img: jivImg
    },
    {
      id: "niboliearth",
      name_en: "Neem Organic Sanjeevani (Niboliearth)",
      name_mr: "निम ऑरगॅनिक संजीवनी (निंबोळी अर्क)",
      type_en: "Natural Pest Repellent & Tonic",
      type_mr: "नैसर्गिक कीड नियंत्रक व टॉनिक",
      desc_en: "Enriched with pure neem extracts, it protects crops from soil-borne pests, fungus, and nematodes while acting as a rich nitrogen source.",
      desc_mr: "शुद्ध कडुनिंबाच्या अर्कापासून बनवलेले, जे पिकांचे मातीतील कीड, बुरशी आणि सूत्रकृमींपासून संरक्षण करते आणि नत्राचा उत्तम स्रोत आहे.",
      tag_en: "Pest Protection",
      tag_mr: "कीड नियंत्रण सुरक्षा",
      btn_en: "Request Pricing",
      btn_mr: "किंमत पत्रक मिळवा",
      img: neemImg
    },
    {
      id: "vermicompost",
      name_en: "Premium Vermi Organic Sanjeevani",
      name_mr: "वर्मी ऑरगॅनिक संजीवनी (गांडूळ खत)",
      type_en: "Pure Organic Fertilizer",
      type_mr: "उच्च दर्जाचे सेंद्रिय खत",
      desc_en: "Finest quality vermicompost produced by active earthworms. Rich in humus, macro-nutrients, and micro-nutrients for all crop types.",
      desc_mr: "जिवंत गांडुळांद्वारे तयार केलेले उच्च दर्जाचे खत. सर्व प्रकारच्या पिकांसाठी ह्युमस, मुख्य अन्नद्रव्ये आणि सूक्ष्म अन्नद्रव्यांनी समृद्ध.",
      tag_en: "High Yield Guarantee",
      tag_mr: "भरघोस उत्पादनाची हमी",
      btn_en: "Request Pricing",
      btn_mr: "किंमत पत्रक मिळवा",
      img: vermiImg
    }
  ];

  return (
    <section id="products" className="py-20 bg-white max-w-7xl mx-auto px-6 border-t border-gray-100">
      
      {/* Premium Light Brown / Beige Rounded Card Wrapper containing the entire section */}
      <div className="w-full bg-[#F3EFEA] rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-sm border border-[#EBE5DC]">
        
        {/* Unified Section Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-widest bg-amber-900/10 px-3 py-1.5 rounded-md border border-amber-900/10 inline-block">
            {isMarathi ? "आमची उत्पादन श्रेणी" : "Our Product Range"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight !mt-2">
            {isMarathi ? "हरिओम हाय-टेक प्रिमियम उत्पादने" : "High-Tech Organic Formulations"}
          </h2>
        </div>

        {/* 3-Column Inner Grid for Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {productList.map((prod) => (
            <div key={prod.id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-200/40 shadow-md hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500">
              
              {/* Product Image Frame with clean white backdrop to highlight packaging */}
              <div className="relative bg-white aspect-[4/3] overflow-hidden p-6 flex items-center justify-center border-b border-gray-100">
                <img 
                  src={prod.img} 
                  alt={isMarathi ? prod.name_mr : prod.name_en} 
                  className="h-full w-auto object-contain transform group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Badge layout overlay aligned with our premium system style */}
                <span className="absolute top-4 left-4 bg-emerald-800 text-white font-semibold text-[10px] uppercase px-3 py-1 rounded-lg tracking-wider shadow-sm">
                  {isMarathi ? prod.tag_mr : prod.tag_en}
                </span>
              </div>

              {/* Information & Description Area */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-3 bg-white">
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest block">
                    {isMarathi ? prod.type_mr : prod.type_en}
                  </span>
                  <h3 className="text-xl font-extrabold text-gray-900 tracking-tight mt-1 group-hover:text-emerald-800 transition-colors duration-300">
                    {isMarathi ? prod.name_mr : prod.name_en}
                  </h3>
                </div>
                
                <p className="text-gray-500 font-light text-sm leading-relaxed flex-grow">
                  {isMarathi ? prod.desc_mr : prod.desc_en}
                </p>

                {/* Submit Action Button Block */}
                <div className="pt-4 border-t border-gray-50">
                  <a 
                    href="#inquiry" 
                    className="w-full text-center block bg-zinc-950 text-white hover:bg-emerald-800 font-bold py-3 px-4 rounded-xl transition-all duration-300 text-sm shadow-md"
                  >
                    {isMarathi ? prod.btn_mr : prod.btn_en}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}