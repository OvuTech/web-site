'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Is OVU free to use?",
    answer: "Yes. OVU does not charge booking fees. You only pay the ticket price set by the operator or airline."
  },
  {
    id: 2,
    question: "Can I cancel or reschedule my trip?",
    answer: "Cancellation and rescheduling policies depend on the operator or airline. Check the terms during booking, and contact support if you need help."
  },
  {
    id: 3,
    question: "How do I get my ticket?",
    answer: "Your e-ticket is sent to your phone and email immediately after payment. You can also view it in your OVU account anytime."
  },
  {
    id: 4,
    question: "What payment methods are supported?",
    answer: "You can pay with debit/credit cards, bank transfers, USSD, and mobile wallets. All payments are encrypted and secure."
  },
  {
    id: 5,
    question: "Are all bus and flight operators verified?",
    answer: "Yes. We only partner with licensed, verified operators and airlines to ensure your safety and peace of mind."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <section id="faqs" className="bg-white lg:bg-[#F5F5F5] py-12 md:py-16 lg:py-20 relative overflow-visible md:overflow-hidden mt-10">
      {/* White Ellipse Decoration - Desktop */}
      <div className="hidden lg:block absolute right-0 top-[20%] w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] opacity-80 z-0 pointer-events-none">
        <Image 
          src="/white-ellipse.png" 
          alt="" 
          width={600} 
          height={600}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-[144px] max-w-[1728px] relative z-10">
        {/* Header - Mobile only */}
        <div className="text-center lg:hidden mb-8">
          <h2 className="font-manjari font-thin text-[22px] text-[#303030] mb-2 leading-[100%] tracking-[0%]" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
            Frequently Asked Questions
          </h2>
          
          {/* FAQ Image - Mobile only */}
          <div className="flex justify-center mt-6 mb-6">
            <Image 
              src="/faq_mobile.png" 
              alt="FAQ" 
              width={358} 
              height={300}
              className="w-[358px] h-[300px] object-contain"
            />
          </div>
        </div>

        {/* FAQ Content - Desktop Layout */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-8 xl:gap-12">
          {/* Left Side - Question Mark Icon - Desktop only */}
          <div className="hidden lg:flex lg:flex-col lg:w-[400px] xl:w-[460px] shrink-0 relative z-10">
            <div className="bg-white rounded-[30px] p-6 xl:p-8 2xl:p-12 shadow-lg flex items-center justify-center w-full">
              <Image
                src="/faq.png"
                alt="FAQ"
                width={460}
                height={850}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="flex-1 w-full lg:max-w-[700px] xl:max-w-[800px] flex flex-col gap-10">
            {/* Header - Desktop: Heading and Button */}
            <div className="hidden lg:block mb-6 xl:mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-manjari font-thin text-[22px] xl:text-[24px] text-[#303030] leading-[100%] tracking-[0%]" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
                  Frequently Asked Questions
                </h2>

                {/* More Questions Button - Desktop */}
                <button className="bg-[#303030] text-white rounded-[10px] font-medium hover:bg-[#303030]/90 transition flex items-center gap-2 whitespace-nowrap cursor-pointer px-5 py-2.5 xl:px-6 xl:py-3 text-sm xl:text-base">
                  More Questions
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* FAQ Items Container */}
            <div className="space-y-4 xl:space-y-5">
              {faqData.map((faq) => (
                <div 
                  key={faq.id}
                  className="bg-white rounded-[10px] xl:rounded-[12px] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center p-4 md:p-5 xl:p-6 text-left hover:bg-gray-50 transition cursor-pointer"
                  >
                    <span className="font-manjari font-normal text-[14px] md:text-[16px] xl:text-[17px] text-[#303030] pr-4 flex-1 text-left" style={{ fontFamily: 'var(--font-manjari)' }}>
                      {faq.id}. {faq.question}
                    </span>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9L12 15L18 9" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {openId === faq.id && (
                    <div className="px-4 md:px-5 xl:px-6 pb-4 md:pb-5 xl:pb-6 border-t border-gray-100">
                      <p className="font-manjari font-normal text-[14px] md:text-[16px] xl:text-[17px] text-[#464646] leading-relaxed pt-4" style={{ fontFamily: 'var(--font-manjari)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* More Questions Button - Mobile */}
            <div className="flex justify-center lg:hidden mt-6">
              <button className="bg-[#303030] text-white rounded-[10px] font-medium hover:bg-[#303030]/90 transition flex items-center gap-2 whitespace-nowrap cursor-pointer px-5 py-2.5">
                More Questions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="relative mt-12 md:mt-16">
          {/* Ellipse Decoration - Mobile Only (below 768px) - Outside container */}
          <div className="md:hidden absolute bottom-0 right-0 w-[248px] h-[248px] z-20 pointer-events-none" style={{ bottom: '20px', right: '20px' }}>
            <img 
              src="/ellipse.png" 
              alt="Ellipse decoration" 
              width={248} 
              height={248}
              style={{ display: 'block', width: '248px', height: '248px', objectFit: 'contain', opacity: 1 }}
            />
          </div>
          
          <div className="bg-[#065888] rounded-[10px] md:rounded-[30px] lg:rounded-[40px] p-8 md:p-12 lg:p-16 relative h-[414px] md:h-auto mx-4 md:mx-8 lg:mx-12 xl:mx-0 overflow-hidden">
          
            {/* White Ellipse Decoration */}
            <div className="absolute right-0 bottom-0 translate-x-[10%] translate-y-[10%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] z-0">
              <Image 
                src="/white-ellipse.png" 
                alt="" 
                width={500} 
                height={500}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-20 max-w-[900px]">
              <h3 className="font-manjari font-thin text-[22px] md:text-[36px] lg:text-[40px] text-white mb-3 md:mb-4 leading-[100%] tracking-[0%]" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
                Can't find an answer to your questions?
              </h3>
              <p className="font-manrope font-normal text-[14px] md:text-[16px] text-white mb-6 md:mb-8 leading-[100%] tracking-[0%]" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                Ask us, be sure we will respond quickly.
              </p>

              <div className="flex flex-col md:flex-row gap-[10px]">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full md:w-auto h-[45px] md:h-auto px-5 py-3 md:py-4 rounded-[10px] bg-[#065888] border border-white/40 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition md:flex-[0.3]"
                />
                <textarea 
                  placeholder="Type your questions here" 
                  className="w-full md:hidden h-[116px] px-5 py-3 rounded-[6px] bg-[#065888] border border-white/40 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition resize-none"
                  rows={4}
                />
                <input 
                  type="text" 
                  placeholder="Type your questions here" 
                  className="hidden md:block px-5 py-3 md:py-4 rounded-[10px] bg-[#065888] border border-white/40 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition md:flex-1"
                />
                <button className="w-[111px] md:w-auto h-[40px] md:h-auto bg-black text-white rounded-[10px] font-medium hover:bg-black/90 transition text-center flex items-center justify-center px-[20px] md:px-8 md:py-3 cursor-pointer">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}