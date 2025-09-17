import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";

export default function Home() {
  return (
    <main className="w-full lg:h-full bg-black flex flex-col">
      <Navbar/>
      <HeroSection/>
      <SponsorsSection/>
    </main>
  );
}