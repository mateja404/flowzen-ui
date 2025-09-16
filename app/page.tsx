import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="w-full h-full bg-black flex flex-col">
      <Navbar/>
      <HeroSection/>
    </main>
  );
}