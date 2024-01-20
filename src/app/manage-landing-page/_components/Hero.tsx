import React from 'react'
import Image from 'next/image'
import GetStartBtn from './GetStartBtn'
export default function Hero() {
  return (
    <div>
        <div className='container px-6 pb-28 mx-auto grid gap-6 md:grid-cols-2'>
            <div className='w-full md:order-2'>
                <Image src={'/manage-landing-page/images/illustration-intro.svg'} alt='illustration' width={580} height={525} className='w-full'></Image>
            </div>
            <div className='flex flex-col items-center md:items-start text-center md:text-left gap-4 md:w-9/12 md:justify-center md:gap-10'>
                <h1 className='font-bold text-4xl md:text-5xl   '>
                    Bring everyone together to build better products.
                </h1>
                <p className='text-secondary font-light md:w-9/12'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Tenetur temporibus cupiditate deserunt, totam perspiciatis 
                    magni sit ex iure alias nostrum?
                </p>
                <div className='inline-block mt-4'>
                    <GetStartBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}
