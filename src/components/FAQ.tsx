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
    <section className="bg-[#F5F5F5] py-12 md:py-16 lg:py-20 relative overflow-hidden mt-10">
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
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 md:mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-[#303030] mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          
          <button className="bg-[#303030] text-white px-6 py-3 rounded-full font-medium hover:bg-[#303030]/90 transition flex items-center gap-2 whitespace-nowrap">
            More Questions
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Question Mark Icon */}
          <div className="hidden lg:block flex-shrink-0 w-[460px]">
            <div className="bg-white rounded-[30px] p-8 xl:p-12 shadow-lg flex items-center justify-center h-[734px]">
              <Image 
                src="/faq.png" 
                alt="FAQ" 
                width={460} 
                height={734}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="flex-1 w-full lg:w-auto space-y-4 lg:h-[734px] lg:overflow-y-auto lg:pr-2">
            {faqData.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white rounded-[10px] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-normal text-[14px] md:text-[16px] text-[#303030] pr-4">
                    {faq.id}. {faq.question}
                  </span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {openId === faq.id && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="font-normal text-[14px] md:text-[16px] text-[#464646] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="mt-12 md:mt-16 bg-[#065888] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* White Ellipse Decoration - Right side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Image 
              src="/white-ellipse.png" 
              alt="" 
              width={500} 
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 max-w-[900px]">
            <h3 className="font-normal text-[28px] md:text-[36px] lg:text-[40px] text-white mb-3 md:mb-4">
              Can't find an answer to your questions?
            </h3>
            <p className="font-normal text-[14px] md:text-[16px] text-white mb-6 md:mb-8">
              Ask us, be sure we will respond quickly.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="px-5 py-3 md:py-4 rounded-[10px] bg-[#065888] border border-white/40 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition w-full md:w-auto md:flex-[0.3]"
              />
              <input 
                type="text" 
                placeholder="Type your questions here" 
                className="px-5 py-3 md:py-4 rounded-[10px] bg-[#065888] border border-white/40 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition flex-1"
              />
              <button className="bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-[10px] font-medium hover:bg-black/90 transition whitespace-nowrap">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

