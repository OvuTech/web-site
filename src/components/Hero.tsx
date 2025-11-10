'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const nigerianStates = [
  'Abia', 'Abuja', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
  'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
  'Taraba', 'Yobe', 'Zamfara'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % nigerianStates.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-white pt-8 relative overflow-hidden">
      {/* Blue blur circle - Right */}
      <div
        className="absolute right-[-100px] top-[100px] w-[200px] h-[200px] rounded-full blur-[230px] hidden xl:block"
        style={{ background: 'rgba(3,83,194,1)' }}
      />
      
      {/* Blue blur circle - Left */}
      <div
        className="absolute left-[-100px] top-[100px] w-[200px] h-[200px] rounded-full blur-[230px] hidden xl:block"
        style={{ background: 'rgba(3,83,194,1)' }}
      />

      <div className="flex flex-col items-center text-center px-4 relative">
        {/* Animated state + flag */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <Image
              src="/twemoji_flag-nigeria.png"
              alt="Nigeria Flag"
              width={50}
              height={50}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
            />
          </motion.div>
          <div className="relative h-[30px] overflow-hidden flex items-center justify-center min-w-[100px] md:min-w-[150px]">
            <span
              className={`font-manrope text-[22px] md:text-[28px] text-[#464646] transition-all duration-300 ${
                isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {nigerianStates[currentIndex]}
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-poppins font-bold text-[32px] md:text-[52px] lg:text-[68px] text-[#303030] mb-4 max-w-[940px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          One Stop for Flights and Road Trips in Nigeria
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="font-manrope text-[14px] md:text-[16px] lg:text-[18px] text-[#464646] max-w-[700px] mb-10 px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          Search, book, and pay for buses and flights, all in one place.
        </motion.p>

        {/* Phones & Notifications */}
        <motion.div
          className="relative w-full max-w-[1600px] aspect-video sm:aspect-3/2 md:aspect-5/3 lg:aspect-16/7 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          {/* Phones */}
          <div className="absolute inset-0 flex justify-center items-end scale-[1] sm:scale-[0.95] md:scale-[1] z-10 pb-[2%] sm:pb-[3%] md:pb-[2%] lg:pb-[4%] h-full md:h-[90%] lg:h-[88%]">
            {/* Left Phone */}
            <motion.div
              className="relative w-[30%] max-w-[260px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[420px] h-full translate-y-[4%] md:translate-y-[5%] lg:translate-y-[6.4%] -mr-[10%] sm:-mr-[8%] md:-mr-[8%] lg:-mr-[10%]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <Image
                src="/phone_left.png"
                alt="Phone Left"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Center Phone */}
            <motion.div
              className="relative w-[40%] max-w-[440px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[600px] z-10 -translate-y-[12%] sm:-translate-y-[8%] md:-translate-y-[6%] lg:-translate-y-[8%] h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <Image
                src="/phone_center.png"
                alt="Phone Center"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Right Phone */}
            <motion.div
              className="relative w-[28%] max-w-[260px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[420px] h-full translate-y-[4%] md:translate-y-[5%] lg:translate-y-[5%] -ml-[10%] sm:-ml-[10%] md:-ml-[10%] lg:-ml-[12%]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <Image
                src="/phone_right.png"
                alt="Phone Right"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Notifications */}
          {/* Left */}
          <div 
            className="absolute top-[1%] sm:top-[2%] flex items-center gap-2 z-20"
            style={{
              left: 'clamp(8px, 2vw, 15%)',
            }}
          >
            <div className="text-right leading-tight">
              <p 
                className="font-manrope font-semibold text-[#303030]"
                style={{
                  fontSize: 'clamp(8px, 1.5vw, 14px)',
                }}
              >
                1 new notification
              </p>
              <p 
                className="font-manrope text-[#464646]"
                style={{
                  fontSize: 'clamp(9px, 1.3vw, 12px)',
                }}
              >
                Your trip to Enugu has been booked
              </p>
            </div>
            <Image 
              src="/red_alarm.png" 
              alt="Bell" 
              width={20} 
              height={20}
              style={{
                width: 'clamp(16px, 3vw, 20px)',
                height: 'clamp(16px, 3vw, 20px)',
              }}
            />
          </div>

          {/* Right */}
          <div 
            className="absolute top-[1%] sm:top-[2%] flex items-center gap-2 z-20"
            style={{
              right: 'clamp(8px, 2vw, 15%)',
            }}
          >
            <Image 
              src="/yellow_alarm.png" 
              alt="Bell" 
              width={20} 
              height={20}
              style={{
                width: 'clamp(16px, 3vw, 20px)',
                height: 'clamp(16px, 3vw, 20px)',
              }}
            />
            <div className="leading-tight">
              <p 
                className="font-manrope font-semibold text-[#303030]"
                style={{
                  fontSize: 'clamp(8px, 1.5vw, 14px)',
                }}
              >
                1 new notification
              </p>
              <p 
                className="font-manrope text-[#464646]"
                style={{
                  fontSize: 'clamp(9px, 1.3vw, 12px)',
                }}
              >
                Download your ticket for flight MDXC6...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom curved overlay - full width, breaks out of padding */}
        <div className="hero-rounded-container absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-screen z-30 sm:bottom-auto sm:top-[calc(75.9%-10px)] pointer-events-none">
            <Image
              src="/rounded.png"
              alt="Curve"
              width={2404}
              height={301}
              className="hero-rounded-image w-full h-auto object-cover scale-y-105"
            />
        </div>
      </div>
    </section>
  );
}
