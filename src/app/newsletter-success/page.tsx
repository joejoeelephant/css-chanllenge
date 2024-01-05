import React from 'react'
import Image from 'next/image'
import './style.css'
export default function Page() {
  return (
    <div className='page-contaienr min-h-screen bg-slate-700 flex justify-center items-center'>
        <div className='min-h-screen md:min-h-0 md:rounded-lg md:w-4/12 bg-white py-8 px-6 flex flex-col justify-between'>
            <div className='pt-32 md:pt-0'>
                <div className='w-12 h-12'>
                    <Image src={'/newsletter-signup/assets/images/icon-success.svg'} alt='success' width={64} height={64} className='w-full'></Image>
                </div>
                <h1 className='text-4xl md:text-5xl font-extrabold mt-8 '>
                    Thanks for subscribing!
                </h1>
                <p className='mt-8 text-sm'>
                    Lorem <span className='font-bold'>ipsum dolor sit amet</span> consectetur adipisicing elit. Unde at voluptate odio?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='bg-slate-700 text-white text-center rounded-lg py-4 font-bold mt-8 gradient-button cursor-pointer' >
                Dissmiss Message
            </div>
        </div>
    </div>
  )
}
