import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyOVU from "@/components/WhyOVU";
import FAQ from "@/components/FAQ";
import YourTrips from "@/components/YourTrips";
import JoinWaitlist from "@/components/JoinWaitlist";
import GrowWithOVU from "@/components/GrowWithOVU";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <main className="pt-[60px] md:pt-[100px] xl:pt-[150px] w-full overflow-x-hidden">
        <Hero />
        <HowItWorks />
        <WhyOVU />
        <YourTrips />
        <JoinWaitlist />
        <FAQ />
      </main>
      <GrowWithOVU />
      <Footer />
    </div>
  );
}
