import React from 'react'
import Image from 'next/image'
export default function ThankYou() {
  return (
    <div className='mx-4 mt-6 rounded-lg bg-white px-4 py-20 md:py-36 self-stretch md:self-auto md:w-4/5 md:shadow-none flex justify-center items-center flex-col form-content'>
        <div className='w-16 h-16'>
            <Image src={'/multi-step-form-main/assets/images/icon-thank-you.svg'} alt="thank you" width={81} height={80} className='w-full'></Image>
        </div>
        <div className='font-bold text-3xl my-8'>
            Thank You!
        </div>
        <div className=' text-secondary text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit excepturi 
            consequuntur numquam incidunt modi totam assumenda impedit expedita reprehenderit libero?
        </div>
    </div>
  )
}
