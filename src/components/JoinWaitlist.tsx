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
      <div className="absolute bottom-[-20px] md:bottom-[-50px] left-0 w-full h-[200px] md:h-[300px] lg:h-[350px]">
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
          <h2 className="font-manjari font-thin text-[32px] md:text-[42px] lg:text-[50px] text-[#303030] leading-[100%] tracking-[0%] mb-4" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
            Don't miss out, join the queue &<br />get to know first!
          </h2>
        </div>

        {/* Waitlist card */}
        <div className="max-w-[900px] mx-auto rounded-[30px] p-8 md:p-12 lg:p-16" style={{ backgroundColor: 'rgba(216, 240, 255, 0.2)' }}>
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-3">
              <Image 
                src="/bird.png" 
                alt="OVU Logo" 
                width={60} 
                height={60}
                className="w-[60px] h-[60px] object-contain"
              />
            </div>
          </div>

          {/* Card heading */}
          <h3 className="font-manjari font-normal text-[35px] text-[#303030] text-center mb-4 leading-[100%] tracking-[0%]" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 400 }}>
            Join the Waitlist
          </h3>

          {/* Description */}
          <p className="font-manrope font-normal text-[12px] md:text-[18px] text-[#464646] text-center mb-8 md:mb-10 max-w-[600px] mx-auto leading-[100%] tracking-[0%]" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. 
            Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula
          </p>

          {/* Email form - Mobile only */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 max-w-[600px] mx-auto md:hidden">
            <div className="relative w-full">
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
                className="w-full h-[45px] pl-12 pr-4 rounded-[20px] bg-white text-[#303030] placeholder:text-gray-400 focus:outline-none focus:border-[#065888] transition"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full h-[45px] bg-[#303030] text-white rounded-[10px] font-medium hover:bg-[#303030]/90 transition"
            >
              Join
            </button>
          </form>

          {/* Email form - Desktop */}
          <form onSubmit={handleSubmit} className="hidden md:flex mb-6 max-w-[600px] mx-auto">
            <div className="relative w-[496px] h-[80px]">
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
                className="w-full h-full pl-12 pr-[120px] rounded-[15px] bg-white text-[#303030] placeholder:text-gray-400 focus:outline-none focus:border-[#065888] transition"
                style={{ fontFamily: 'var(--font-manrope)' }}
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#303030] text-white px-6 py-3 rounded-[10px] font-manrope font-medium hover:bg-[#303030]/90 transition whitespace-nowrap"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Join
              </button>
            </div>
          </form>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3">
            <Image 
              src="/small_circles.png" 
              alt="User avatars" 
              width={32} 
              height={32}
              className="w-8 h-8 object-contain"
            />
            <p className="font-normal text-[14px] md:text-[16px] text-[#464646]">
              Join the <span className="font-bold text-[#303030]">3000+</span> others who have signed up
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

