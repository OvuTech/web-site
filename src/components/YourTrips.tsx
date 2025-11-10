'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const phones = [
  { src: '/phone1.png', alt: 'Phone mockup 1', offsetY: 0 },
  { src: '/phone2.png', alt: 'Phone mockup 2', offsetY: 80 },
  { src: '/phone3.png', alt: 'Phone mockup 3', offsetY: 40 },
  // { src: '/phone4.png', alt: 'Phone mockup 4', offsetY: 0 },
  { src: '/phone5.png', alt: 'Phone mockup 2', offsetY: 80 },
  { src: '/phone6.png', alt: 'Phone mockup 3', offsetY: 40 },

];

export default function YourTrips() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Get the width of one phone card plus gap
      const phoneWidth = window.innerWidth >= 1024 ? 540 : window.innerWidth >= 768 ? 280 : 240;
      const gap = window.innerWidth >= 1024 ? 40 : window.innerWidth >= 768 ? 30 : 20;
      const cardWidth = phoneWidth + gap;

      // Reset when we've scrolled past all original phones
      const totalWidth = cardWidth * phones.length;

      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      track.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="bg-[#065888] relative lg:mt-[100px] md:mt-[50px] mt-6 pt-14 md:pt-14 lg:pt-16 pb-14 md:pb-14 lg:pb-16 overflow-hidden">
      <div className="w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-14 lg:mb-16">
          <h2 className="font-manjari font-thin text-[28px] md:text-[36px] lg:text-[48px] text-white leading-none tracking-normal" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
            Your trips, simplified.
          </h2>
        </div>

        {/* Carousel Track */}
        <div className="relative w-full h-[380px] md:h-[550px] lg:h-[900px] overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-[20px] md:gap-[30px] lg:gap-[40px] absolute left-0"
            style={{ willChange: 'transform' }}
          >
            {/* Render phones three times for infinite loop */}
            {[...phones, ...phones, ...phones].map((phone, index) => {
              const phoneIndex = index % phones.length;
              const offsetY = phones[phoneIndex].offsetY;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[240px] md:w-[280px] lg:w-[540px] flex items-start"
                  style={{
                    marginTop: `${offsetY}px`
                  }}
                >
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={545}
                    height={823}
                    className="w-full h-auto max-h-[360px] md:max-h-[420px] lg:max-h-[820px] object-contain drop-shadow-2xl"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

