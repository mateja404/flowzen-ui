import React from 'react';
import Image from "next/image";
import acmelogo from "../public/acme1.webp";
import echovalleylogo from "../public/echovalley.webp";
import quantumlogo from "../public/quantum.webp";
import pulselogo from "../public/pulse.webp";
import outsidelogo from "../public/outside.webp";
import apexlogo from "../public/apex.webp";
import celestianlogo from "../public/celestial.webp";
import twicelogo from "../public/2twice.webp";

const sponsors = [
  {
    src: acmelogo,
    alt: 'acme logo'
  },
  {
    src: echovalleylogo,
    alt: 'echovalley logo'
  },
  {
    src: quantumlogo,
    alt: 'quantum logo'
  },
  {
    src: pulselogo,
    alt: 'pulse logo'
  },
  {
    src: outsidelogo,
    alt: 'outside logo'
  },
  {
    src: apexlogo,
    alt: 'apex logo'
  },
  {
    src: celestianlogo,
    alt: 'celestian logo'
  },
  {
    src: twicelogo,
    alt: 'twice logo'
  }
];

const SponsorsSection = () => {
  return (
    <section className='w-full bg-black flex flex-col gap-10 items-center p-10'>
      <h2 className='text-white/50'>Trusted by the world&apos;s most innovative teams</h2>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 place-items-center'>
        {sponsors.map((sponsor, index) => (
          <div key={index} className='flex items-center justify-center border-1 border-zinc-900 p-7 rounded-xl'>
            <Image src={sponsor.src} alt={sponsor.alt}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SponsorsSection;