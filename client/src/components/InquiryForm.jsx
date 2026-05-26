import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Inquiry() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language.startsWith('mr');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    landSize: '',
    district: '',      
    address: '',       
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Pointing directly to our active Express.js port 5000 gateway route
      const response = await fetch('http://localhost:5000/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(isMarathi ? "तुमची चौकशी यशस्वीरित्या नोंदवली गेली आहे!" : "Your inquiry has been successfully recorded!");
        // Clear out state parameters upon complete storage resolution
        setFormData({
          name: '',
          company: '',
          phone: '',
          landSize: '',
          district: '',
          address: '',
          requirements: ''
        });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("API Communication Failure:", error);
      alert(isMarathi ? "सर्व्हरशी संपर्क होऊ शकला नाही." : "Could not connect to the backend server.");
    }
  };

  return (
    <section id="inquiry" className="py-24 bg-gradient-to-b from-[#041611] via-[#06221a] to-[#041611] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] z-0"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side Column: Text Branding Content */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-4">
            <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-widest bg-white/[0.06] backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 inline-block">
              {isMarathi ? "B2B हब / डीलरशिप" : "B2B HUB // DEALERSHIP"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight !mt-3">
              {isMarathi ? "व्यावसायिक डीलरशिप आणि घाऊक पुरवठा" : "Commercial Dealership & Bulk Supply"}
            </h2>
          </div>
          
          <p className="text-emerald-100/70 font-normal leading-relaxed text-sm sm:text-base max-w-xl">
            {isMarathi 
              ? "तुम्ही थेट शेतात ट्रकद्वारे डिलिव्हरी, विशिष्ट खत निर्मिती किंवा तुमच्या भागात वितरण नेटवर्क (डीलरशिप) सुरू करू इच्छिता?"
              : "Partner directly with Hariom High-Tech. We offer logistical truckload coordination, custom bulk formulation matching, and verified localized distribution partnership licenses."
            }
          </p>

          <div className="pt-6 flex items-center space-x-6 text-emerald-400/50 font-mono text-[10px] font-bold tracking-widest uppercase border-t border-white/10">
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>DIRECT LOGISTICS</div>
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>VERIFIED RESPONSE</div>
          </div>
        </div>

        {/* Right Side Column: Opaque White Presentation Form Box */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <div className="bg-white w-full max-w-xl rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600"></div>

            <div className="mb-8 text-left">
              <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                {isMarathi ? "तांत्रिक कोटेशनसाठी विनंती करा" : "Request Technical Quotation"}
              </h3>
              <p className="text-gray-400 text-xs mt-1 font-light">
                {isMarathi ? "अचूक दरपत्रकासाठी खालील माहिती भरा." : "Provide parameters below for institutional procurement catalogs."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name and Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder={isMarathi ? "तुमचे पूर्ण नाव *" : "Your Full Name *"}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50/80 border border-gray-200/80 text-gray-900 text-sm font-normal rounded-xl px-4 py-3.5 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all duration-200"
                  />
                </div>
                <div className="text-left">
                  <input 
                    type="text" 
                    name="company"
                    placeholder={isMarathi ? "शेती / कंपनीचे नाव" : "Farm / Company Name"}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-50/80 border border-gray-200/80 text-gray-900 text-sm font-normal rounded-xl px-4 py-3.5 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Land Size */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder={isMarathi ? "मोबाईल नंबर *" : "Mobile Number *"}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50/80 border border-gray-200/80 text-gray-900 text-sm font-normal rounded-xl px-4 py-3.5 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all duration-200"
                  />
                </div>
                <div className="text-left">
                  <input 
                    type="number" 
                    name="landSize"
                    placeholder={isMarathi ? "लागवडीखालील जमीन (एकर)" : "Cultivated Land Size (Acres)"}
                    value={formData.landSize}
                    onChange={handleChange}
                    className="w-full bg-gray-50/80 border border-gray-200/80 text-gray-900 text-sm font-normal rounded-xl px-4 py-3.5 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Location Selection fields */}
              <div className="grid sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 text-left">
                  <select
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full bg-gray-50/80 border border-gray-200/80 text-gray-500 text-sm font-normal rounded-xl px-4 py-3.5 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">{isMarathi ? "जिल्हा निवडा *" : "Select District *"}</option>
                    <option value="Pune">{isMarathi ? "पुणे" : "Pune"}</option>
                    <option value="Nashik">{isMarathi ? "नाशिक" : "Nashik"}</option>
                    <option value="Satara">{isMarathi ? "सातारा" : "Satara"}</option>
                    <option value="Ahmednagar">{isMarathi ? "अहमदनगर" : "Ahmednagar"}</option>
                    <option value="Other">{isMarathi ? "इतर" : "Other"}</option>
                  </select>
                </div>
                
                <div className="sm:col-span-7 text-left">
                  <input 
                    type="text" 
                    name="address"
                    required
                    placeholder={isMarathi ? "तालुका, गाव किंवा पत्ता *" : "Taluka, Village or Address Details *"}
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-gray-50/80 border border-gray-200/80 text-gray-900 text-sm font-normal rounded-xl px-4 py-3.5 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Requirements Field */}
              <div className="text-left">
                <textarea 
                  name="requirements"
                  required
                  rows="3"
                  placeholder={isMarathi ? "तुमच्या मातीचा प्रकार, पिके किंवा खताच्या गरजेबद्दल सविस्तर माहिती द्या... *" : "Provide details about your soil type, active crops, or bulk fertilizer volume demands... *"}
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full bg-gray-50/80 border border-gray-200/80 text-gray-900 text-sm font-normal rounded-xl px-4 py-3.5 focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* Action Button */}
              <button 
                type="submit" 
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 text-sm tracking-wide mt-2"
              >
                {isMarathi ? "किंमत पत्रकासाठी विनंती करा" : "Submit Request For Pricing"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}