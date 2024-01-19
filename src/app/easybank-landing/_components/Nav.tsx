'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Nav.css'
import { useWindowWide } from '@/hooks/useWindowWide'
export default function Nav() {
    const navList = [
        {
            name: 'Home',
            href: "#"
        },
        {
            name: 'About',
            href: "#"
        },
        {
            name: 'Contact',
            href: "#"
        },
        {
            name: 'Blog',
            href: "#"
        },
        {
            name: 'Careers',
            href: "#"
        }
    ]

    const windowWide = useWindowWide()
    const [showNav, setShowNav] = useState(windowWide)
    useEffect(() => {
        setShowNav(windowWide)
    },[windowWide])

    return (
        <>
            <div className='sticky top-0 z-10 w-full border-b bg-white'>
                <div className="container mx-auto flex justify-between items-center p-6 md:p-4 relative z-10">
                    <div className='w-36'>
                        <a href="#">
                            <Image src={'/easybank-landing/images/logo.svg'} alt='logo' width={139} height={20}></Image>
                        </a>
                    </div>
                    <ul className={`absolute top-20 left-1/2 -translate-x-1/2 md:static md:-translate-x-0 w-10/12 md:w-auto bg-white flex flex-col md:flex-row gap-4 md:gap-8 rounded-lg p-6 md:p-0 ${showNav ? '' : 'hidden'}`}>
                        {
                            navList.map(item => {
                                return (
                                    <li key={item.name} className='text-center md:text-gray-500'>
                                        <Link href={'#'}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='w-5 h-5 flex items-center md:hidden' onClickCapture={() => {setShowNav(prev => !prev)}}>
                        <Image src={'/easybank-landing/images/icon-hamburger.svg'} alt='menue' width={24} height={11} className={`${!showNav ? '' : 'hidden'}`}></Image>
                        <Image src={'/easybank-landing/images/icon-close.svg'} alt='menue' width={24} height={11} className={`${showNav ? '' : 'hidden'}`}></Image>
                    </div>
                    <div className='hidden md:block bg-gradient text-button rounded-3xl px-8 py-3 active:opacity-50 select-none cursor-pointer'>
                        Reauest Invite
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full min-h-svh z-0 nav-mask md:hidden ${showNav ? '' : 'hidden'}`}></div>
        </>
    )
}
