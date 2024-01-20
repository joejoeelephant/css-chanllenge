'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useWindowScrolled } from '@/hooks/useWindowScrolled'
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
    const windowScrolled = useWindowScrolled()
    const [showNav, setShowNav] = useState(windowWide)
    useEffect(() => {
        setShowNav(windowWide)
    },[windowWide])

    return (
        <>
            <div className={`sticky top-0 z-10 w-full ${windowScrolled ? 'bg-white' : ''}`}>
                <div className="container mx-auto flex justify-between items-center py-8 px-6 md:py-12 relative z-10">
                    <div className='w-36'>
                        <a href="#">
                            <Image src={'/manage-landing-page/images/logo.svg'} alt='logo' width={139} height={20}></Image>
                        </a>
                    </div>
                    <ul className={`
                            absolute md:static
                            top-24 left-1/2 -translate-x-1/2 
                            md:-translate-x-0 
                            w-10/12 md:w-auto 
                            flex flex-col bg-white md:bg-transparent
                            md:flex-row gap-8 md:gap-8 
                            rounded-md p-6 md:p-0 
                            font-semibold
                            md:text-sm
                            ${showNav ? '' : 'hidden'}`
                        }
                      >
                        {
                            navList.map(item => {
                                return (
                                    <li key={item.name} className='text-center nav-item'>
                                        <Link href={'#'}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='w-5 h-5 flex items-center md:hidden' onClickCapture={() => {setShowNav(prev => !prev)}}>
                        <Image src={'/manage-landing-page/images/icon-hamburger.svg'} alt='menue' width={24} height={11} className={`${!showNav ? '' : 'hidden'}`}></Image>
                        <Image src={'/manage-landing-page/images/icon-close.svg'} alt='menue' width={24} height={11} className={`${showNav ? '' : 'hidden'}`}></Image>
                    </div>
                    <div className='hidden btn-primary-shadow md:block bg-gradient rounded-3xl btn-primary px-8 py-3 active:opacity-65 select-none cursor-pointer'>
                        Get Started
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full min-h-svh z-[3] nav-mask md:hidden ${showNav ? '' : 'hidden'}`}></div>
        </>
    )
}
