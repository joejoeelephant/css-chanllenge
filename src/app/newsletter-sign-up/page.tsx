'use client'
import React, { useState } from 'react'
import './style.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
export default function Page() {
  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const router = useRouter()
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitEmail = () => {
    if(!validateEmail(email)) {
      setIsEmailValid(false)
      return;
    }
    setIsEmailValid(true)
    router.push('/newsletter-success')
    console.log('success')
  }
  return (
    <div className='min-h-screen page-container flex justify-center items-center md:bg-slate-700'>
        <div className='md:flex md:justify-between md:items-center md:gap-8 md:w-8/12 md:p-6 md:rounded-2xl bg-white card-container'>
          <div className='md:flex-1 md:order-1 md:rounded-2xl md:self-stretch md:overflow-clip'>
            <Image src="/newsletter-signup/assets/images/illustration-sign-up-mobile.svg" alt="illustration" width={375} height={284} className='w-full md:hidden'/>
            <Image src="/newsletter-signup/assets/images/illustration-sign-up-desktop.svg" alt="illustration" width={400} height={593} className='w-full h-full hidden md:block'/>
          </div>
          <div className='py-8 px-6 md:flex-1 md:py-0'>
            <h1 className='text-4xl lg:text-6xl font-extrabold'>Stay updated!</h1>
            <p className='mt-6 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex sit laudantium?
            </p>
            <ul className='pt-8'>
              <li className='flex gap-6 mb-3'>
                <div className='w-6'>
                  <Image src={'/newsletter-signup/assets/images/icon-list.svg'} alt='icon-list' width={21} height={21} className='w-full'></Image>
                </div>
                <div className='leading-relaxed flex-1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </li>
              <li className='flex gap-6 mb-3'>
                <div className='w-6'>
                  <Image src={'/newsletter-signup/assets/images/icon-list.svg'} alt='icon-list' width={21} height={21} className='w-full'></Image>
                </div>
                <div className='leading-relaxed flex-1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </li>
              <li className='flex gap-6 mb-3'>
                <div className='w-6'>
                  <Image src={'/newsletter-signup/assets/images/icon-list.svg'} alt='icon-list' width={21} height={21} className='w-full'></Image>
                </div>
                <div className='leading-relaxed flex-1'>
                  Lorem ipsum dolor sit.
                </div>
              </li>
            </ul>
            <div className='mt-8'>
              <div className='font-bold text-sm'>
                Email Address {!isEmailValid && <span className='inline-block mr-4 text-red-500'>email invalid</span>}
              </div>
              <input type="text" value={email} onChange={handleEmailChange} placeholder='email address' className='border border-slate-300 rounded-md p-4 w-full mt-3' />
              <div className='p-4 text-center rounded-lg text-white bg-color1 font-bold mt-8 active:opacity-65' onClick={submitEmail}>
                Lorem ipsum dolor sit.
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
