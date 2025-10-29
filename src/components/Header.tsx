'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Travellers', href: '/for-travellers' },
    { name: 'For Operators', href: '/for-operators' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <>
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
          <Link
            key={link.name}
            href={link.href}
            className={`text-base font-medium transition-colors whitespace-nowrap ${
              pathname === link.href
                ? 'text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Join Waitlist Button - Only show on desktop (1280px+) */}
      <button className="hidden xl:block bg-[#0B5B7A] text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-[#094A63] transition-colors">
        Join Waitlist
      </button>

      {/* Mobile Menu Button - Show below xl (below 1280px) */}
      <button 
        className="xl:hidden p-2 text-gray-900"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        ) : (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        )}
      </button>
    </header>

    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="fixed top-[60px] md:top-[100px] left-0 w-full bg-white border-b border-gray-100 shadow-lg z-40 xl:hidden">
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 md:px-8 py-3 text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'text-gray-900 bg-gray-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 md:px-8 mt-4">
            <button className="w-full bg-[#0B5B7A] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#094A63] transition-colors">
              Join Waitlist
            </button>
          </div>
        </nav>
      </div>
    )}
    </>
  );
}