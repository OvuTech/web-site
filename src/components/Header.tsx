'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'How It Works', sectionId: 'how-it-works' },
    { name: 'For Travellers', sectionId: 'for-travellers' },
    { name: 'For Operators', sectionId: 'for-operators' },
    { name: 'FAQs', sectionId: 'faqs' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = window.innerWidth >= 1280 ? 150 : window.innerWidth >= 768 ? 100 : 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      const headerHeight = window.innerWidth >= 1280 ? 150 : window.innerWidth >= 768 ? 100 : 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white h-[60px] md:h-[100px] xl:h-[150px] flex items-center justify-between px-4 md:px-8 xl:px-16 border-b border-gray-100 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1.5 md:gap-2">
        <img
          src="/bird.png"
          alt="OVU Logo"
          width="42"
          height="36"
          className="w-[28px] h-[24px] md:w-[35px] md:h-[30px] xl:w-[42px] xl:h-[36px] object-contain"
        />
        <span
          className="font-bold text-black text-[20px] md:text-[25px] xl:text-[30px]"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 700,
            lineHeight: '100%',
            letterSpacing: '0.1em',
            textAlign: 'left'
          }}
        >
          OVU
        </span>
      </Link>

      {/* Navigation Links - Show at xl (1280px+) */}
      <nav
        className="hidden xl:flex items-center justify-start h-[22px]"
        style={{
          flexDirection: 'row',
          gap: '100px',
          width: '775px'
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.sectionId)}
            className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === link.sectionId
                ? 'text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Join Waitlist Button - Only show on desktop (1280px+) */}
      <button
        onClick={scrollToWaitlist}
        className="hidden xl:block bg-[#0B5B7A] text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-[#094A63] transition-colors cursor-pointer"
      >
        Join Waitlist
      </button>
    </header>
  );
}