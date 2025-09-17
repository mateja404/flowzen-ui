import Link from "next/link";

const LinesSVG = () => (
    <svg width="100%" height="100%" className="absolute opacity-[0.1] left-0 right-0 top-0 bottom-0 m-auto">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255, 255, 255, 0.80)" strokeWidth="2"></line>
        <line x1="35%" y1="0" x2="35%" y2="100%" stroke="rgba(255, 255, 255, 0.80)" strokeWidth="2"></line>
        <line x1="65%" y1="0" x2="65%" y2="100%" stroke="rgba(255, 255, 255, 0.80)" strokeWidth="2"></line>
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="rgba(255, 255, 255, 0.80)" strokeWidth="2"></line>
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="rgba(255, 255, 255, 0.80)" strokeWidth="2"></line>
        <line x1="5%" y1="0" x2="5%" y2="100%" stroke="rgba(255, 255, 255, 0.80)" strokeWidth="2"></line>
        <line x1="95%" y1="0" x2="95%" y2="100%" stroke="rgba(255, 255, 255, 0.80)" strokeWidth="2"></line>
    </svg>
);

export default function HeroSection() {
  return (
    <section className='w-full h-[100vh] mt-[100px] relative'>
      <div className='w-full h-full z-2 absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center text-center justify-center'>
        <div className="w-full h-full items-center flex flex-col gap-3 justify-center mb-80">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-white/70 text-xl md:text-2xl lg:text-4xl inline-block">Flowzen Bank</h2>
              <h1 className="text-transparent leading-15 md:leading-normal inline-block bg-clip-text bg-gradient-to-r from-green-300 via-green-50 to-green-300 font-bold text-4xl max-sm:text-5xl md:text-7xl lg:text-[125px]">Built for new generations</h1>
              <p className="text-white/70 font-[500] text-center max-w-[550px]">Flowzen is a modern banking app designed for Gen Z. It combines smart cash flow tracking with a calm, intuitive experience - because money should flow, and you should stay Zen.</p>
            </div>
            <Link href={"#"} className='flex items-center animation-group gap-2 pt-[2px] pb-[2px] pl-[2px] pr-[2px] text-white/80 bg-gradient-to-r from-emerald-700 via-emerald-700/20 to-transparent border-1 border-zinc-900 rounded-full hover:bg-emerald-700 transition-all duration-300 group overflow-hidden'><div className="bg-black pt-3 pb-3 pl-3 pr-3 flex items-center gap-2 rounded-full">Start saving now <div className='arrow w-[24px] h-[24px] overflow-hidden relative flex items-center'><img src={"/arrow.svg"} className='arrow-img w-[17px] h-[17px]'/></div></div></Link>
        </div>
      </div>
      <div className='hidden lg:block w-full h-[80vh] mt-[70px] absolute z-1 top-0 left-0 right-0 bottom-0'>
        <LinesSVG />
      </div>
      <div className='w-full h-full absolute top-0 bottom-0 right-0 left-0 hero-overlay z-1'></div>
      <video autoPlay muted playsInline loop src={"/hero-video.webm"} className='rotate-180 z-0 absolute bottom-0'></video>
      <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] absolute left-0 bottom-0 left-hero-gradient rounded-full opacity-[0.3]"></div>
    </section>
  )
}