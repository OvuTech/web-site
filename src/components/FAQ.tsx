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
    question: "How do I join waitlist?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 2,
    question: "What operators will be available?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 3,
    question: "How much does it cost?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 4,
    question: "Can I cancel or refund?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 5,
    question: "Does using OVU attract extra cost?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 6,
    question: "How early can I make reservations?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 7,
    question: "Lorem ipsum dolor adiuvat?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 8,
    question: "Can I cancel or refund?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  },
  {
    id: 9,
    question: "What operators will be available?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula"
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <section className="bg-white lg:bg-[#F5F5F5] py-12 md:py-16 lg:py-20 relative overflow-visible md:overflow-hidden mt-10">
      {/* White Ellipse Decoration - Desktop */}
      <div className="hidden lg:block absolute right-0 top-[20%] w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] opacity-80">
        <Image 
          src="/white-ellipse.png" 
          alt="" 
          width={600} 
          height={600}
          className="w-full h-full object-contain"
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

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Question Mark Icon - Desktop only */}
          <div className="hidden lg:block shrink-0 w-[460px]">
            <div className="bg-white rounded-[30px] p-8 xl:p-12 shadow-lg flex items-center justify-center h-[850px]">
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
          <div className="flex-1 w-full lg:w-auto space-y-4 lg:h-[850px] lg:pr-2">
            {/* Header - Desktop: Heading and Button side by side, directly above FAQ questions */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:mb-6">
              <h2 className="font-manjari font-thin text-[22px] text-[#303030] leading-[100%] tracking-[0%]" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
                Frequently Asked Questions
              </h2>
              
              {/* More Questions Button - Desktop: Next to heading */}
              <button className="bg-[#303030] text-white rounded-[10px] font-medium hover:bg-[#303030]/90 transition flex items-center whitespace-nowrap" style={{ width: '180px', height: '50px', padding: '20px', gap: '10px' }}>
                More Questions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {faqData.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white rounded-[10px] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-manjari font-normal text-[14px] md:text-[16px] text-[#303030] pr-4" style={{ fontFamily: 'var(--font-manjari)' }}>
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
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="font-manjari font-normal text-[14px] md:text-[16px] text-[#464646] leading-relaxed" style={{ fontFamily: 'var(--font-manjari)' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
            
            {/* More Questions Button - Mobile: After FAQ accordions */}
            <div className="flex justify-center lg:hidden mt-6">
              <button className="bg-[#303030] text-white rounded-[10px] font-medium hover:bg-[#303030]/90 transition flex items-center whitespace-nowrap" style={{ width: '163px', height: '35px', padding: '20px', gap: '10px' }}>
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
          
          <div className="bg-[#065888] rounded-[10px] md:rounded-[30px] lg:rounded-[40px] p-8 md:p-12 lg:p-16 relative h-[414px] md:w-auto md:h-auto mx-4 md:mx-8 lg:mx-12 xl:mx-0" style={{ overflow: 'visible' }}>
          
          {/* White Ellipse Decoration - Desktop Only (768px and above) */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] z-0">
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
              <button className="w-[111px] md:w-auto h-[40px] md:h-auto bg-black text-white rounded-[10px] font-medium hover:bg-black/90 transition text-left md:text-center flex items-center justify-start md:justify-center px-[20px] md:px-8 md:py-3">
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

