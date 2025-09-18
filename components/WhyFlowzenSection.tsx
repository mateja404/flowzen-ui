"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import personal_acc from "../public/flowzen_personal_acc.png";
import personal_loans from "../public/flowzen_personal_loans.png";
import car_loans from "../public/flowzen_car_loans.png";
import cards_image from "../public/flowzen_cards.png";

const WhyFlowzenSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [mouseEntered, setMouseEntered] = useState<boolean>(false);
  const [mouseEnteredTwo, setMouseEnteredTwo] = useState<boolean>(false);
  const [mouseEnteredThree, setMouseEnteredThree] = useState<boolean>(false);
  const [mouseEnteredFour, setMouseEnteredFour] = useState<boolean>(false);
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1.3 }} ref={ref} className='w-full h-[100vh] lg:h-[80vh] flex flex-col p-5 gap-7'>
      <div className='w-full lg:w-7xl mx-auto'>
        <motion.h2 initial={{ opacity: 0, x: -50, filter: 'blur(5px)' }} animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -50, filter: 'blur(5px)' }} transition={{ duration: 1.3 }} className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-300 text-5xl'>Our Services</motion.h2>
      </div>
      <div className='w-full h-full overflow-hidden'>
        <div className='w-full lg:w-7xl mx-auto max-w-7xl flex flex-col lg:flex-row h-1/2'>
          <div onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)} className='w-full lg:w-[40%] h-full overflow-hidden flex relative bg-black border-1 border-zinc-800 lg:border-r-transparent group transition-all duration-300 cursor-pointer'>
            <div className='z-3 w-[20px] h-[20px] absolute top-3 left-3 border-1 border-white rounded-full bg-transparent group-hover:bg-white transition-all duration-300'></div>
            <div className='z-3 flex flex-col absolute bottom-0 left-0 right-0 gap-3 p-3 cursor-pointer'>
              <motion.h1 initial={{ y: 0 }} animate={mouseEntered ? { y: 0, transition: { duration: 0.5 } } : { y: 50, transition: { duration: 1 } }} className={mouseEntered ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white text-3xl" : "font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white text-3xl"}>Personal Accounts</motion.h1>
              <motion.p initial={{ opacity: 1, y: 50, color: "white", filter: 'blur(10px)' }} animate={ mouseEntered ? { opacity: 1, y: 0, color: "white", filter: "blur(0px)" } : { opacity: 0, y: 50, color: "white", filter: 'blur(10px)' } } transition={{ duration: 1 }} className='text-white font-medium'>Secure and easy-to-manage accounts tailored for your everyday personal finances.</motion.p>
            </div>
            <Image src={personal_acc} alt='personal acc image z-1' className={mouseEntered ? 'w-full h-auto m-auto block object-fill' : 'opacity-0 hidden'}/>
            <div className='hero-overlay absolute top-0 left-0 bottom-0 right-0 z-2 w-full h-auto'></div>
          </div>
          <div onMouseEnter={() => setMouseEnteredTwo(true)} onMouseLeave={() => setMouseEnteredTwo(false)} className='w-full lg:w-[60%] h-full overflow-hidden flex relative bg-black border-1 border-zinc-800 lg:border-r-transparent group transition-all duration-300 cursor-pointer'>
            <div className='z-3 w-[20px] h-[20px] absolute top-3 left-3 border-1 border-white rounded-full bg-transparent group-hover:bg-white transition-all duration-300'></div>
            <div className='z-3 flex flex-col absolute max-sm:-bottom-19 md:bottom-0 left-0 right-0 gap-3 p-3 cursor-pointer'>
              <motion.h1 initial={{ y: 0 }} animate={mouseEnteredTwo ? { y: 0, transition: { duration: 0.5 } } : { y: 50, transition: { duration: 1 } }} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white text-3xl">Personal Loans</motion.h1>
              <motion.p initial={{ opacity: 1, y: 50, color: "white", filter: 'blur(10px)' }} animate={ mouseEnteredTwo ? { opacity: 1, y: 0, color: "white", filter: "blur(0px)" } : { opacity: 0, y: 50, color: "white", filter: 'blur(10px)' } } transition={{ duration: 1 }} className='text-white font-medium'>Flexible personal loans with competitive rates, designed to help you achieve your goals—whether it’s consolidating debt, making a big purchase, or covering unexpected expenses.</motion.p>
            </div>
            <Image src={personal_loans} alt='personal acc image z-1' className={mouseEnteredTwo ? 'w-full h-auto m-auto block object-fill' : 'opacity-0 hidden'}/>
            <div className='hero-overlay absolute top-0 left-0 bottom-0 right-0 z-2 w-full h-auto'></div>
          </div>
        </div>
          <div className='w-full lg:w-7xl mx-auto max-w-7xl flex flex-col lg:flex-row h-1/2'>
          <div onMouseEnter={() => setMouseEnteredThree(true)} onMouseLeave={() => setMouseEnteredThree(false)} className='w-full lg:w-[60%] h-full overflow-hidden flex relative bg-black border-1 border-zinc-800 lg:border-r-transparent group transition-all duration-300 cursor-pointer'>
            <div className='z-3 w-[20px] h-[20px] absolute top-3 left-3 border-1 border-white rounded-full bg-transparent group-hover:bg-white transition-all duration-300'></div>
            <div className='z-3 flex flex-col absolute max-sm:-bottom-19 bottom-0 left-0 right-0 gap-3 p-3 cursor-pointer'>
              <motion.h1 initial={{ y: 0 }} animate={mouseEnteredThree ? { y: 0, transition: { duration: 0.5 } } : { y: 50, transition: { duration: 1 } }} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white text-3xl">Car Loans</motion.h1>
              <motion.p initial={{ opacity: 1, y: 50, color: "white", filter: 'blur(10px)' }} animate={ mouseEnteredThree ? { opacity: 1, y: 0, color: "white", filter: "blur(0px)" } : { opacity: 0, y: 50, color: "white", filter: 'blur(10px)' } } transition={{ duration: 1 }} className='text-white font-medium'>Flexible personal loans with competitive rates, designed to help you achieve your goals—whether it’s consolidating debt, making a big purchase, or covering unexpected expenses.</motion.p>
            </div>
            <Image src={car_loans} alt='personal acc image z-1' className={mouseEnteredThree ? 'w-full h-auto m-auto block object-fill' : 'opacity-0 hidden'}/>
            <div className='hero-overlay absolute top-0 left-0 bottom-0 right-0 z-2 w-full h-auto'></div>
          </div>
            <div onMouseEnter={() => setMouseEnteredFour(true)} onMouseLeave={() => setMouseEnteredFour(false)} className='w-full lg:w-[40%] h-full overflow-hidden flex relative bg-black border-1 border-zinc-800 lg:border-r-transparent group transition-all duration-300 cursor-pointer'>
              <div className='z-3 w-[20px] h-[20px] absolute top-3 left-3 border-1 border-white rounded-full bg-transparent group-hover:bg-white transition-all duration-300'></div>
              <div className='z-3 flex flex-col absolute bottom-0 left-0 right-0 gap-3 p-3 cursor-pointer'>
                <motion.h1 initial={{ y: 0 }} animate={mouseEnteredFour ? { y: 0, transition: { duration: 0.5 } } : { y: 50, transition: { duration: 1 } }} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white text-3xl">Cards</motion.h1>
                <motion.p initial={{ opacity: 1, y: 50, color: "white", filter: 'blur(10px)' }} animate={ mouseEnteredFour ? { opacity: 1, y: 0, color: "white", filter: "blur(0px)" } : { opacity: 0, y: 50, color: "white", filter: 'blur(10px)' } } transition={{ duration: 1 }} className='text-white font-medium'>Cards that make spending easy, secure, and convenient—debit, credit, and virtual.</motion.p>
              </div>
              <Image src={cards_image} alt='personal acc image z-1' className={mouseEnteredFour ? 'w-full h-auto m-auto block object-fill' : 'opacity-0 hidden'}/>
              <div className='hero-overlay absolute top-0 left-0 bottom-0 right-0 z-2 w-full h-auto'></div>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default WhyFlowzenSection;