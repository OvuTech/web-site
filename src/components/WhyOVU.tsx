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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula",
      icon: "bus"
    },
    {
      id: 2,
      title: "For Air Travellers", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula",
      icon: "airplane"
    },
    {
      id: 3,
      title: "For Operators",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula",
      icon: "helmet"
    }
  ];
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bus':
        return (
          <div className="w-[130px] h-[138px] bg-white rounded-lg flex items-center justify-center">
            <img 
              src="/bus_6efa6e.gif" 
              alt="Bus" 
              className="w-[110px] h-[110px] object-contain"
            />
          </div>
        );
      case 'airplane':
        return (
          <div className="w-[130px] h-[138px] bg-white rounded-lg flex items-center justify-center">
            <img 
              src="/airplane.gif" 
              alt="Airplane" 
              className="w-[110px] h-[110px] object-contain"
            />
          </div>
        );
      case 'helmet':
        return (
          <div className="w-[130px] h-[138px] bg-white rounded-lg flex items-center justify-center">
            <img 
              src="/checklist_15578518_ac77f3.gif" 
              alt="Operator" 
              className="w-[110px] h-[110px] object-contain"
            />
          </div>
        );
      default:
        return null;
    }
  };
  
  export default function WhyOVU() {
    return (
      <section className="bg-white py-12 md:py-16 lg:py-20">
        {/* Heading - Separate from background */}
        <div className="w-full text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="font-manrope font-bold text-[44px] leading-tight text-[#303030] mb-4" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700 }}>
            Why OVU?
          </h2>
          <div className="w-[100px] h-[4px] bg-[#E8923D] mx-auto mb-6"></div>
          <p className="font-manrope font-normal text-[18px] text-center text-[#464646] max-w-[783px] mx-auto px-4" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula
          </p>
        </div>

        {/* Content Container with Background - Completely separate */}
        <div className="relative  mt-24">
          {/* Background Shape - Desktop at left edge, Mobile underneath box */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[324px] h-[906px] z-0">
            <img 
              src="/box-backkground.png" 
              alt="Background" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 md:px-8 xl:px-0 max-w-[1728px] relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
              {/* Left Side - Box Image with mobile background */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-12 xl:pl-20">
                <div className="relative lg:static">
                  {/* Mobile Background - Behind the box image, at left edge */}
                  <div className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[180px] h-[500px] z-0">
                    <img 
                      src="/box-backkground.png" 
                      alt="Background" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Box Image */}
                  <div className="relative z-10 w-[280px] md:w-[340px] lg:w-[540px] xl:w-[726px] h-[380px] md:h-[440px] lg:h-[540px] xl:h-[708px]">
                    <img 
                      src="/box.jpg" 
                      alt="Woman with suitcase" 
                      className="w-full h-full object-cover rounded-[30px] shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Feature Cards */}
              <div className="w-full lg:w-1/2 flex flex-col gap-7 xl:h-[708px] justify-between">
                {featureCards.map((card, index) => (
                  <div key={card.id} className={`bg-[#F5F5F5] rounded-[20px] p-6 lg:p-7 flex-1 ${index === 0 ? 'mt-16 lg:mt-0' : ''}`}>
                    {/* Mobile: Stacked left-aligned, Desktop: Side-by-side */}
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        {getIcon(card.icon)}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 text-left">
                        <h3 className="font-manjari font-normal text-[35px] text-[#111111] mb-3" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 400 }}>
                          {card.title}
                        </h3>
                        <p className="font-manrope font-normal text-[18px] text-[#464646] leading-relaxed" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }