import React from 'react'
import Image from 'next/image'
export default function Footer() {
    const shareButtons = [
        {
            icon: '/easybank-landing/images/icon-facebook.svg',
            href:'#'
        },
        {
            icon: '/easybank-landing/images/icon-instagram.svg',
            href:'#'
        },
        {
            icon: '/easybank-landing/images/icon-pinterest.svg',
            href:'#'
        },
        {
            icon: '/easybank-landing/images/icon-twitter.svg',
            href:'#'
        },
        {
            icon: '/easybank-landing/images/icon-youtube.svg',
            href:'#'
        }
    ]
    return (
        <div className='bg-dark-blue text-white'>
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between justify-center gap-6 md:gap-32">
                <div className='flex flex-col gap-6 items-center md:justify-between'>
                    <div className='w-32'>
                        <Image src={'/easybank-landing/images/logo-dark.svg'} alt='logo' width={139} height={20} className='w-full'></Image>
                    </div>
                    <ul className='flex gap-2'>
                        {
                            shareButtons.map((item, index) => {
                                return (
                                    <li key={index} className='w-5'>
                                        <a href={item.href}>
                                            <Image src={item.icon} alt='icon' width={21} height={20} className='w-full'></Image>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='flex flex-col md:flex-row md:flex-1 items-center gap-2 md:gap-32 text-sm'>
                    <ul className='grid gap-2'>
                        {
                            Array.from({length: 3}).map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">
                                            lorem{index}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='grid gap-2'>
                        {
                            Array.from({length: 3}).map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">
                                            lorem{index}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-center mt-6 md:mt-0 md:justify-between'>
                    <div className='bg-gradient text-button rounded-3xl px-8 py-3 active:opacity-50 select-none cursor-pointer'>
                        Reauest Invite
                    </div>
                    <div className='text-secondary text-sm'>
                        @Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </div>
    )
}
