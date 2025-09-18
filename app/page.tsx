import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import WhyFlowzenSection from "@/components/WhyFlowzenSection";

export default function Home() {
  return (
    <main className="w-full lg:h-full bg-black flex flex-col">
      <HeroSection/>
      <SponsorsSection/>
      <WhyFlowzenSection/>
    </main>
  );
}