import Image from 'next/image';

export default function YourTrips() {
  return (
    <section className="bg-[#065888] relative mt-[100px] pt-12 md:pt-14 lg:pt-16">
      <div className="w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-14 lg:mb-16">
          <h2 className="font-manjari font-thin text-[22px] md:text-[36px] lg:text-[48px] text-white leading-none tracking-normal" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
            Your trips, simplified.
          </h2>
        </div>

        {/* Phone Mockups Container */}
        <div className="relative w-full h-[355px] md:h-[547px] lg:h-[950px] max-w-[1728px] mx-auto -mt-8 md:-mt-12 lg:-mt-16 your-trips-container-918">
          {/* First Phone */}
          <div className="absolute top-[57px] left-[11px] md:left-[5%] md:top-[80px] lg:left-[34px] lg:top-[0px] w-[162px] md:w-[160px] lg:w-[545px] h-[245px] md:h-[260px] lg:h-[823px]">
            <Image 
              src="/phone.png" 
              alt="Phone mockup" 
              width={545} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Second Phone */}
          <div className="absolute top-[110px] left-[152px] md:left-[28%] md:top-[60px] lg:left-[510px] lg:top-[80px] w-[163px] md:w-[160px] lg:w-[545px] h-[245px] md:h-[260px] lg:h-[823px]">
            <Image 
              src="/phone.png" 
              alt="Phone mockup" 
              width={545} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Third Phone */}
          <div className="absolute top-[79px] left-[294px] md:left-[51%] md:top-[40px] lg:left-[986px] lg:top-[40px] w-[162px] md:w-[160px] lg:w-[545px] h-[244px] md:h-[260px] lg:h-[823px]">
            <Image 
              src="/phone.png" 
              alt="Phone mockup" 
              width={545} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Fourth Phone */}
          <div className="absolute top-[79px] left-[294px] md:left-[74%] md:top-[80px] lg:left-[1417px] lg:top-[60px] w-[162px] md:w-[160px] lg:w-[545px] h-[244px] md:h-[260px] lg:h-[823px] hidden md:block">
            <Image 
              src="/phone.png" 
              alt="Phone mockup" 
              width={545} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

