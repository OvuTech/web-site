'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Operator Portal",
    description: "Manage bookings, Reconcile payouts.",
    icon: "operator"
  },
  {
    id: 2,
    title: "Public API",
    description: "Plug transport inventory into your platform",
    icon: "api"
  },
  {
    id: 3,
    title: "Compliance-ready",
    description: "(CBN, NDPA 2023 aligned)",
    icon: "compliance"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'operator':
      return (
        <Image 
          src="/statistics_1c9afb.gif" 
          alt="Operator Portal" 
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      );
    case 'api':
      return (
        <Image 
          src="/api_17905431_bc61f2.gif" 
          alt="Public API" 
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      );
    case 'compliance':
      return (
        <Image 
          src="/checklist_15578518_ac77f3.gif" 
          alt="Compliance" 
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      );
    default:
      return null;
  }
};

export default function GrowWithOVU() {
  const [formData, setFormData] = useState({
    companyName: '',
    category: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-[144px] max-w-[1728px]">
        <div className="bg-[#F6FCFF] rounded-[20px] md:rounded-[30px] p-8 md:p-12 lg:p-16 relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 relative">
            {/* Horizontal Divider - Desktop (Vertical line) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0 border-l border-[#065888]" style={{ borderWidth: '1px', height: '100%' }}></div>
            
            {/* Left Column - Features Section */}
            <div className="flex-1">
              <h2 className="font-manjari font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#303030] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 700 }}>
                Grow with OVU
              </h2>
              
              <p className="font-manrope font-normal text-[16px] md:text-[18px] text-[#464646] mb-8 md:mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor Suspendisse mollis erat non tortor lore elementum auctor. Maecenas eu turpis nec.
              </p>

              {/* Feature Cards */}
              <div className="space-y-6 md:space-y-8">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-4 md:gap-5">
                    {/* Icon Container */}
                    <div className="shrink-0 w-[60px] h-[60px] bg-white border border-gray-200 rounded-lg flex items-center justify-center p-2 shadow-sm">
                      {getIcon(feature.icon)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-manjari font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[#303030] mb-2" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 700 }}>
                        {feature.title}
                      </h3>
                      <p className="font-manrope font-normal text-[14px] md:text-[16px] text-[#464646] leading-relaxed" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Divider - Mobile (between sections) */}
            <div className="lg:hidden w-full max-w-[304px] h-0 border-t border-[#065888] mx-auto" style={{ borderWidth: '1px' }}></div>

            {/* Right Column - Application Form */}
            <div className="flex-1">
              <div className="bg-[#F6FCFF] md:bg-white md:border md:border-gray-200 rounded-[20px] md:p-8 md:shadow-md">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-[14px] md:text-[16px] font-manrope font-medium text-[#303030] mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Company name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Type here"
                      className="w-full md:w-[305px] h-[45px] px-4 py-3 rounded-[10px] text-[#303030] placeholder:text-gray-400 focus:outline-none focus:border-[#065888] focus:ring-2 focus:ring-[#065888]/20 transition font-manrope"
                      style={{ fontFamily: 'var(--font-manrope)', border: '1px solid #B1B1B1', borderWidth: '1px' }}
                      required
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-[14px] md:text-[16px] font-manrope font-medium text-[#303030] mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Category
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full md:w-[305px] h-[45px] px-4 py-3 pr-10 rounded-[10px] text-[#303030] focus:outline-none focus:border-[#065888] focus:ring-2 focus:ring-[#065888]/20 transition font-manrope appearance-none"
                        style={{ fontFamily: 'var(--font-manrope)', border: '1px solid #B1B1B1', borderWidth: '1px' }}
                        required
                      >
                        <option value="">Select category</option>
                        <option value="bus">Bus Operator</option>
                        <option value="airline">Airline</option>
                        <option value="rail">Rail</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[14px] md:text-[16px] font-manrope font-medium text-[#303030] mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234"
                      className="w-full md:w-[305px] h-[45px] px-4 py-3 rounded-[10px] text-[#303030] placeholder:text-gray-400 focus:outline-none focus:border-[#065888] focus:ring-2 focus:ring-[#065888]/20 transition font-manrope"
                      style={{ fontFamily: 'var(--font-manrope)', border: '1px solid #B1B1B1', borderWidth: '1px' }}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[14px] md:text-[16px] font-manrope font-medium text-[#303030] mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      className="w-full md:w-[305px] h-[45px] px-4 py-3 rounded-[10px] text-[#303030] placeholder:text-gray-400 focus:outline-none focus:border-[#065888] focus:ring-2 focus:ring-[#065888]/20 transition font-manrope"
                      style={{ fontFamily: 'var(--font-manrope)', border: '1px solid #B1B1B1', borderWidth: '1px' }}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-[50px] md:h-[56px] bg-[#065888] text-white rounded-[10px] font-manrope font-medium text-[16px] md:text-[18px] hover:bg-[#065888]/90 transition shadow-md"
                    style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500 }}
                  >
                    Apply as Operator
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

