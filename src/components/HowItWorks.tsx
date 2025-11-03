import Image from 'next/image';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  alignment: 'left' | 'right';
}

const steps: Step[] = [
  {
    id: 1,
    title: "Search lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula",
    icon: "search",
    alignment: "left"
  },
  {
    id: 2,
    title: "Book & Pay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula",
    icon: "search",
    alignment: "right"
  },
  {
    id: 3,
    title: "Get Ticket",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula",
    icon: "ticket",
    alignment: "left"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'search':
      return (
        <Image 
          src="/search.png" 
          alt="Search" 
          width={319}
          height={138}
          className="w-[319px] h-[138px] object-contain"
        />
      );
    case 'ticket':
      return (
        <Image 
          src="/ticket.png" 
          alt="Ticket" 
          width={319}
          height={138}
          className="w-[319px] h-[138px] object-contain"
        />
      );
    default:
      return null;
  }
};

export default function HowItWorks() {
  return (
    <section className="how-it-works-section relative bg-white overflow-x-hidden -mt-[3rem] md:-mt-[5rem] lg:-mt-[8rem] pt-8 md:pt-0">
      <div className="w-full relative z-10">
        {/* Heading */}
        <div className="w-full text-center mb-12 md:mb-16">
          <h2 className="font-manrope font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-tight text-[#303030] mb-4" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700 }}>
            How it works?
          </h2>
          <div className="w-[100px] h-[4px] bg-[#E8923D] mx-auto mb-6"></div>
          <p className="font-manrope font-normal text-[18px] text-center text-[#464646] max-w-[783px] mx-auto" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie a tortor eget tempor. Suspendisse mollis erat non tortor elementum auctor. Maecenas eu turpis nec ex porta vehicula
          </p>
        </div>

        {/* Steps - Mobile & Tablet View */}
        <div className="xl:hidden space-y-0 w-full">
          {steps.map((step, index) => (
            <div key={step.id}>
              {/* Number - Show for all steps */}
              <div className="flex justify-center py-6">
                <div className="w-[60px] h-[60px] bg-[#065888] rounded-full flex items-center justify-center">
                  <span className="font-normal text-[25px] text-white">{step.id}</span>
                </div>
              </div>

              {/* Step Card */}
              <div className="relative bg-[#F5F5F5] rounded-[20px] p-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[319px] h-[138px] flex items-center justify-center mb-6">
                    {getIcon(step.icon)}
                  </div>
                  <h3 className="font-manjari font-bold text-[25px] text-[#111111] mb-4" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <p className="font-manrope font-normal text-[18px] text-[#111111] leading-relaxed" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Steps - Desktop View */}
        <div className="hidden xl:block space-y-8 md:space-y-12 overflow-hidden">
          {steps.map((step) => (
            <div key={step.id} className={`flex ${step.alignment === 'left' ? 'justify-start' : 'justify-end'} items-center`}>
              {step.alignment === 'right' && (
                /* Left Number - Overlapping at edge */
                <div className="shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#065888] rounded-full flex items-center justify-center -mr-8 relative z-10">
                  <span className="font-normal text-[25px] text-white">{step.id}</span>
                </div>
              )}

              <div className={`relative bg-[#F5F5F5] p-8 md:p-12 lg:p-16 w-full max-w-[85%] ${step.alignment === 'left' ? 'rounded-r-[20px] -ml-4' : 'rounded-l-[20px] -mr-4'}`}>
                <div className="flex items-center gap-4">
                  {step.alignment === 'left' && (
                    /* Left Icon */
                    <div className="shrink-0 w-[319px] h-[138px] flex items-center justify-center">
                      {getIcon(step.icon)}
                    </div>
                  )}

                  {/* Content */}
                  <div className={`flex-1 ${step.alignment === 'right' ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-manjari font-bold text-[25px] text-[#111111] mb-3" style={{ fontFamily: 'var(--font-manjari)', fontWeight: 700 }}>
                      {step.title}
                    </h3>
                    <p className="font-manrope font-normal text-[18px] text-[#111111] leading-relaxed" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400 }}>
                      {step.description}
                    </p>
                  </div>

                  {step.alignment === 'right' && (
                    /* Right Icon */
                    <div className="shrink-0 w-[319px] h-[138px] flex items-center justify-center">
                      {getIcon(step.icon)}
                    </div>
                  )}
                </div>
              </div>

              {step.alignment === 'left' && (
                /* Right Number - Overlapping at edge */
                <div className="shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#065888] rounded-full flex items-center justify-center -ml-8 relative z-10">
                  <span className="font-normal text-[25px] text-white">{step.id}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
