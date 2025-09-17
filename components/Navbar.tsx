import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <header className='flex w-full h-[100px] fixed items-center justify-center top-0 left-0 right-0 z-40 backdrop-blur-lg'>
        <Link href={"#"} className='font-bold text-shadow-md text-emerald-700 text-3xl absolute left-30'>FlowZen</Link>
        <nav className='w-auto inline-block rounded-full pt-3 pb-3 pl-7 pr-7 border-1 border-zinc-900'>
          <ul className='flex flex-row gap-5'>
            <li className='text-white/70 hover:text-emerald-700 transition-all duration-300'><Link href="#">Personal Account</Link></li>
            <li className='text-white/70 hover:text-emerald-700 transition-all duration-300'><Link href="#">Personal Loans</Link></li>
            <li className='text-white/70 hover:text-emerald-700 transition-all duration-300'><Link href="#">Car Loans</Link></li>
            <li className='text-white/70 hover:text-emerald-700 transition-all duration-300'><Link href="#">Cards</Link></li>
          </ul>
        </nav>
        <Link href={"/login"} className='flex items-center gap-2 pt-3 pb-3 pl-5 pr-5 text-white/80 bg-black border-1 border-zinc-900 absolute right-7 rounded-full hover:border-emerald-700 transition-all duration-300 group overflow-hidden'>Create personal account <div className='arrow w-[24px] h-[24px] overflow-hidden relative flex items-center '><img src={"/arrow.svg"} className='arrow-img w-[17px] h-[17px]'/></div></Link>
    </header>
  )
}

export default Navbar;