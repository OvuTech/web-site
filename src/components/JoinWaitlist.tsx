'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function JoinWaitlist() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Blue wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[300px] lg:h-[350px]">
        <Image 
          src="/rounded.png" 
          alt="" 
          width={1728} 
          height={350}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1728px] relative z-10">
        {/* Main heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-normal text-[28px] md:text-[36px] lg:text-[48px] text-[#303030] leading-tight mb-4">
            Don't miss out, join the queue &<br />get to know first!
          </h2>
        </div>

        {/* Waitlist card */}
        <div className="max-w-[900px] mx-auto bg-[#F5F5F5] rounded-[30px] p-8 md:p-12 lg:p-16">
          {/* Bird icon */}
          <div className="flex justify-center mb-6">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] text-[#3B729C]">
              <svg className="w-full h-full" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 10C23.43 10 10 23.43 10 40C10 56.57 23.43 70 40 70C56.57 70 70 56.57 70 40C70 23.43 56.57 10 40 10ZM40 65C26.215 65 15 53.785 15 40C15 26.215 26.215 15 40 15C53.785 15 65 26.215 65 40C65 53.785 53.785 65 40 65Z" fill="currentColor"/>
                <path d="M50 35C51.933 35 53.5 33.433 53.5 31.5C53.5 29.567 51.933 28 50 28C48.067 28 46.5 29.567 46.5 31.5C46.5 33.433 48.067 35 50 35Z" fill="currentColor"/>
                <path d="M30 35C31.933 35 33.5 33.433 33.5 31.5C33.5 29.567 31.933 28 30 28C28.067 28 26.5 29.567 26.5 31.5C26.5 33.433 28.067 35 30 35Z" fill="currentColor"/>
                <path d="M40 55C47.18 55 53 50 53 45H27C27 50 32.82 55 40 55Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Card heading */}
          <h3 className="font-bold text-[24px] md:text-[32px] lg:text-[36px] text-[#303030] text-center mb-4">
            Join the Waitlist
          </h3>

          {/* Description */}
          <p className="font-normal text-[14px] md:text-[16px] text-[#464646] text-center mb-8 md:mb-10 max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. 
            Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6 max-w-[600px] mx-auto">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 6.25L10 11.25L17.5 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2.5" y="5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <input 
                type="email" 
                placeholder="Type your E-mail here" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-[10px] bg-white border border-gray-200 text-[#303030] placeholder:text-gray-400 focus:outline-none focus:border-[#065888] transition"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-[#303030] text-white px-8 md:px-10 py-3 md:py-4 rounded-[10px] font-medium hover:bg-[#303030]/90 transition whitespace-nowrap"
            >
              Join
            </button>
          </form>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#A8E6A3] border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-[#FFB6C1] border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-[#B19CD9] border-2 border-white"></div>
            </div>
            <p className="font-normal text-[14px] md:text-[16px] text-[#464646]">
              Join the <span className="font-bold text-[#303030]">3000+</span> others who have signed up
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

