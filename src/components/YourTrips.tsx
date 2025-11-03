import Image from 'next/image';

export default function YourTrips() {
  return (
    <section className="bg-[#065888] relative lg:mt-[100px] md:mt-[50px] mt-6 pt-12 md:pt-14 lg:pt-16">
      <div className="w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-14 lg:mb-16">
          <h2 className="font-manjari font-thin text-[22px] md:text-[36px] lg:text-[48px] text-white leading-none tracking-normal" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 100 }}>
            Your trips, simplified.
          </h2>
        </div>

        {/* Phone Mockups Container */}
        <div className="relative w-full h-[320px] md:h-[550px] lg:h-[900px] max-w-[1728px] mx-auto -mt-8 md:-mt-12 lg:-mt-16 your-trips-container-918">
          {/* First Phone */}
          <div className="absolute top-[20px] left-[11px] md:left-[1%] md:top-[70px] lg:left-[34px] lg:top-0 w-[180px] md:w-[240px] lg:w-[540px] h-[280px] md:h-[380px] lg:h-[780px]">
            <Image 
              src="/phone1.png" 
              alt="Phone mockup 1" 
              width={540} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Second Phone */}
          <div className="absolute top-[50px] left-[152px] md:left-[27%] md:top-[50px] lg:left-[510px] lg:top-[80px] w-[180px] md:w-[240px] lg:w-[540px] h-[280px] md:h-[380px] lg:h-[780px]">
            <Image 
              src="/phone2.png" 
              alt="Phone mockup 2" 
              width={540} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Third Phone */}
          <div className="absolute top-[30px] left-[294px] md:left-[53%] md:top-[30px] lg:left-[986px] lg:top-[40px] w-[180px] md:w-[240px] lg:w-[540px] h-[280px] md:h-[380px] lg:h-[780px]">
            <Image 
              src="/phone3.png" 
              alt="Phone mockup 3" 
              width={540} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Fourth Phone */}
          <div className="absolute top-[79px] left-[294px] md:left-[79%] md:top-[40px] lg:left-[1300px] lg:top-0 w-[180px] md:w-[240px] lg:w-[540px] h-[280px] md:h-[380px] lg:h-[780px] hidden md:block">
            <Image 
              src="/phone4.png" 
              alt="Phone mockup 4" 
              width={540} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

