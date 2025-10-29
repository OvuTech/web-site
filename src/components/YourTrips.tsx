import Image from 'next/image';

export default function YourTrips() {
  return (
    <section className="bg-[#065888] relative mt-[100px]s">
      <div className="w-full relative z-10">
        {/* Heading */}
        <div className="text-center my-8 md:my-10 lg:my-12">
          <h2 className="font-normal text-[28px] md:text-[36px] lg:text-[48px] text-white">
            Your trips, simplified.
          </h2>
        </div>

        {/* Phone Mockups Container */}
        <div className="relative w-full h-[500px] md:h-[700px] lg:h-[950px] max-w-[1728px] mx-auto -mt-8 md:-mt-12 lg:-mt-16">
          {/* First Phone */}
          <div className="absolute top-0 left-[34px] w-[545px] h-[823px] hidden lg:block">
            <Image 
              src="/phone.png" 
              alt="Phone mockup" 
              width={545} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Second Phone */}
          <div className="absolute top-0 left-[20%] md:top-[40px] md:left-[25%] lg:top-[80px] lg:left-[510px] w-[200px] md:w-[350px] lg:w-[545px] h-auto lg:h-[823px]">
            <Image 
              src="/phone.png" 
              alt="Phone mockup" 
              width={545} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Third Phone */}
          <div className="absolute top-[30px] right-[20%] md:top-[60px] md:right-[25%] lg:top-[40px] lg:left-[986px] w-[200px] md:w-[350px] lg:w-[545px] h-auto lg:h-[823px]">
            <Image 
              src="/phone.png" 
              alt="Phone mockup" 
              width={545} 
              height={823}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Fourth Phone */}
          <div className="absolute top-[60px] left-[1417px] w-[545px] h-[823px] hidden xl:block">
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

