import React from 'react'
import Image from 'next/image'
import './Hero.css'
export default function Hero() {
  return (
    <div className="hero-container bg-white border-b overflow-x-clip md:min-h-[70vh]">
        <div className="hero-image relative">
            <div className='w-11/12 md:min-w-[580px] md:w-8/12 lg:w-9/12 absolute bottom-0 md:-bottom-[8rem] left-1/2 md:left-[43%] lg:left-[36%] -translate-x-1/2 md:-translate-x-0'>
                <Image src={'/easybank-landing/images/image-mockups.png'} width={769} height={939} alt='mockup' className='w-full h-auto'></Image>
            </div>
        </div>
        <div className="hero-text p-4 pt-10 pb-20 flex items-start md:items-center">
            <div className='flex flex-col justify-center gap-6 text-center md:w-2/3 md:text-left'>
                <h1 className='text-4xl md:text-5xl tracking-widest'>
                    Next Generation Digital Banking
                </h1>
                <p className='text-secondary '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Molestias laborum aut aliquam nisi dolor 
                    tempora sequi illum minus recusandae nobis!
                </p>
                <div className='inline-block self-center md:self-start bg-gradient text-button rounded-3xl px-8 py-3 active:opacity-50 select-none cursor-pointer'>
                    Reauest Invite
                </div>
            </div>
        </div>
    </div>
  )
}
