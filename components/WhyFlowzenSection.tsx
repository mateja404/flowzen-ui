"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const WhyFlowzenSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section ref={ref} className='w-full h-[100vh] lg:h-[80vh] flex flex-col p-5 gap-3'>
      <div className='w-full lg:w-7xl mx-auto'>
        <motion.h2 initial={{ opacity: 0, x: -50, filter: 'blur(5px)' }} animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -50, filter: 'blur(5px)' }} transition={{ duration: 1.3 }} className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-300 text-5xl'>Our Services</motion.h2>
      </div>
      <div className='w-full h-full'>
        <div className='w-full lg:w-7xl mx-auto max-w-7xl flex flex-col lg:flex-row h-1/2'>
          <div className='w-full lg:w-[40%] h-full flex bg-black border-1 border-zinc-800 lg:border-r-transparent'></div>
          <div className='w-full lg:w-[60%] h-full flex bg-black border-1 border-zinc-800'></div>
        </div>
        <div className='w-full lg:w-7xl mx-auto max-w-7xl bg-purple-500 h-1/2 flex flex-col lg:flex-row'>
          <div className='w-full lg:w-[60%] h-full flex bg-black border-1 border-zinc-800 lg:border-t-transparent lg:border-r-transparent'></div>
          <div className='w-full lg:w-[40%] h-full flex bg-black border-1 border-zinc-800 lg:border-t-transparent lg:border-r-transparent'></div>
        </div>
      </div>
    </section>
  )
}

export default WhyFlowzenSection;