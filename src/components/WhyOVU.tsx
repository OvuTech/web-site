'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const featureCards: FeatureCard[] = [
  {
    id: 1,
    title: "For Road Travellers",
    description: "Book trusted intercity bus services with ease. See available seats, compare prices, and choose the bus company that fits your schedule. Travel smarter with OVU.",
    icon: "bus"
  },
  {
    id: 2,
    title: "For Air Travellers",
    description: "Search domestic and regional flights from multiple airlines in one view. Compare fares, check seat availability, and book your flight without the stress.",
    icon: "airplane"
  },
  {
    id: 3,
    title: "Powerful Tools for Your Business",
    description: "OVU isn't just for travelers. Transport operators and travel businesses get access to booking management tools, payout tracking, and a growing customer base, all powered by one platform.",
    icon: "helmet"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'bus':
      return (
        <div className="w-[80px] h-[84px] sm:w-[90px] sm:h-[94px] md:w-[110px] md:h-[116px] lg:w-[130px] lg:h-[138px] bg-white rounded-lg flex items-center justify-center shrink-0">
          <img 
            src="/bus_6efa6e.gif" 
            alt="Bus" 
            className="w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] md:w-[88px] md:h-[88px] lg:w-[110px] lg:h-[110px] object-contain"
          />
        </div>
      );
    case 'airplane':
      return (
        <div className="w-[80px] h-[84px] sm:w-[90px] sm:h-[94px] md:w-[110px] md:h-[116px] lg:w-[130px] lg:h-[138px] bg-white rounded-lg flex items-center justify-center shrink-0">
          <img 
            src="/airplane.gif" 
            alt="Airplane" 
            className="w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] md:w-[88px] md:h-[88px] lg:w-[110px] lg:h-[110px] object-contain"
          />
        </div>
      );
    case 'helmet':
      return (
        <div className="w-[80px] h-[84px] sm:w-[90px] sm:h-[94px] md:w-[110px] md:h-[116px] lg:w-[130px] lg:h-[138px] bg-white rounded-lg flex items-center justify-center shrink-0">
          <img 
            src="/checklist_15578518_ac77f3.gif" 
            alt="Operator" 
            className="w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] md:w-[88px] md:h-[88px] lg:w-[110px] lg:h-[110px] object-contain"
          />
        </div>
      );
    default:
      return null;
  }
};

export default function WhyOVU() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="for-travellers" className="bg-white py-2 md:py-16 lg:py-20 overflow-hidden mt-6">
      {/* Heading */}
      <motion.div
        className="w-full text-center mb-8 md:mb-10 lg:mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-manrope font-bold text-[32px] md:text-[40px] lg:text-[44px] leading-tight text-[#303030] mb-4" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700 }}>
          One Platform, Every Journey.
        </h2>
        <div className="w-[100px] h-[4px] bg-[#E8923D] mx-auto mb-6"></div>
        <p className="font-manrope font-normal text-[14px] sm:text-[16px] md:text-[18px] text-center text-[#464646] max-w-[783px] mx-auto px-4 md:px-6" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
          Whether you're planning a road trip or catching a flight, OVU brings together the best travel options in one place. No more jumping between websites. No hidden fees. Just honest pricing, verified operators, and reliable service.
        </p>
      </motion.div>

      {/* Mobile & Tablet Layout (< lg) */}
      <div className="why-ovu-mobile-container lg:hidden px-4 py-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* Hero Image Container with Left Golden Background */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto py-8 sm:py-10 md:py-12 pl-0 pr-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Golden Background - extends to left */}
          <div className="why-ovu-golden-bg absolute left-0 top-0 bottom-0 -translate-x-[30%] sm:-translate-x-[40%] md:-translate-x-[45%] w-full sm:w-[120%] md:w-[140%] bg-[#C28928CC] rounded-r-[20px] z-0"></div>

          <img
            src="/box.jpg"
            alt="Woman with suitcase"
            className="relative z-10 w-full aspect-4/3 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Feature Cards Container with Right Border */}
        <div className="relative w-full py-4 sm:py-6 md:py-8 pr-0">
          {/* Transparent Border - extends to right */}
          <div className="why-ovu-right-border absolute right-0 top-0 bottom-0 translate-x-[calc(100%-8px)] w-[12vw] sm:w-[15vw] md:w-[18vw] border-2 border-[#C28928] rounded-l-[20px] border-r-0 z-0"></div>

          <div className="relative z-10 space-y-3 sm:space-y-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="bg-[#F5F5F5] rounded-[20px] p-4 sm:p-5 md:p-7"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  {getIcon(card.icon)}
                  <div className="flex-1 text-left">
                    <h3 className="font-manjari font-normal text-[28px] sm:text-[32px] md:text-[35px] text-[#111111] mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 400 }}>
                      {card.title}
                    </h3>
                    <p className="font-manrope font-normal text-[14px] sm:text-[16px] md:text-[18px] text-[#464646] leading-relaxed" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= lg) - NO CONTAINER, full width */}
      <div className="hidden lg:block">
        <div className="relative w-full min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px]">
          {/* Golden Background - Left (touches left edge, z-0) - using aspect ratio */}
          <div className="absolute left-0 top-0 w-[220px] xl:w-[280px] 2xl:w-[324px] aspect-[1/3.2] xl:aspect-[1/2.9] 2xl:aspect-[1/2.8] bg-[#C28928CC] rounded-r-[20px] z-0" />
          
          {/* Border Decoration - Right (touches right edge, z-0) - using aspect ratio */}
          <div className="absolute right-0 top-10 xl:top-16 2xl:top-20 w-[90px] xl:w-[120px] 2xl:w-[140px] aspect-[1/6.7] xl:aspect-[1/5.8] 2xl:aspect-[1/5.6] border-2 border-[#C28928] rounded-l-[20px] border-r-0 z-0" />
          
          {/* Content Container - centered with max-width */}
          <div className="relative max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
            {/* Hero Image - Left (overlaps golden background) - same height as feature cards */}
            <motion.div
              className="absolute left-6 xl:left-12 2xl:left-16 top-[50px] xl:top-[70px] 2xl:top-[99px] w-[400px] xl:w-[520px] 2xl:w-[650px] h-[500px] xl:h-[600px] 2xl:h-[708px] z-20"
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/box.jpg"
                alt="Woman with suitcase"
                className="w-full h-full object-cover rounded-[20px] shadow-2xl"
              />
            </motion.div>

            {/* Feature Cards - Right (overlaps border decoration) - same height as hero image */}
            <div className="absolute right-6 xl:right-12 2xl:right-16 top-[50px] xl:top-[70px] 2xl:top-[96px] w-[470px] xl:w-[600px] 2xl:w-[750px] h-[500px] xl:h-[600px] 2xl:h-[708px] z-20">
              <div className="h-full flex flex-col gap-5 xl:gap-6 2xl:gap-7">
                {featureCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    className="bg-[#F5F5F5] rounded-[20px] p-5 xl:p-6 2xl:p-7 flex-1 shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, x: 80 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                    transition={{ duration: 0.7, delay: 0.5 + index * 0.15 }}
                  >
                    <div className="flex items-start gap-4 xl:gap-5 h-full">
                      {getIcon(card.icon)}
                      <div className="flex-1 min-w-0 text-left">
                        <h3 className="font-manjari font-normal text-[28px] xl:text-[32px] 2xl:text-[35px] text-[#111111] mb-2 xl:mb-2 2xl:mb-3" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 400 }}>
                          {card.title}
                        </h3>
                        <p className="font-manrope font-normal text-[14px] xl:text-[16px] 2xl:text-[18px] text-[#464646] leading-relaxed" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}