'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartBox from './CartBox'
import { useCartData } from '../_context/CartDataContext'
import './Nav.css'
type NavItem = {
    name: string;
    href: string;
}

export default function Nav() {
    const NavList: NavItem[] = [
        {
            name: "lorem1",
            href: "#"
        },
        {
            name: "lorem2",
            href: "#"
        },
        {
            name: "lorem3",
            href: "#"
        },
        {
            name: "lorem4",
            href: "#"
        },
        {
            name: "lorem5",
            href: "#"
        }
    ]
    const isWindowWide = () => window.innerWidth > 768;
    const [showNav, setShowNav] = useState(false)
    const [cartBoxVisible,setCartBosVisible ] = useState(false)
    const [cartCheked, setCartChecked] = useState(true)
    const {cartData} = useCartData()
    useEffect(() => {
        const handleResize = () => {
          setShowNav(isWindowWide());
        };
    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        console.log('cart changed')
        setCartChecked(false)
    },[cartData])

    const showNavList = () => {
        setShowNav(true)
    }

    const hideNavList = () => {
        setShowNav(false)
    }

    const toggleCartBox = () => {
        setCartBosVisible(prev => !prev)
        setCartChecked(true)
    }
    return (
        <div className='sticky w-full z-30 top-0 left-0 bg-white'>
            <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-6 md:pb-10 border-b relative'>
                <div className='flex justify-between items-center gap-4'>
                    <div className='w-5 self-center mt-1 select-none md:hidden' onClickCapture={showNavList}>
                        <Image src={'/ecommerce-product-page/images/icon-menu.svg'} alt='menu' width={16} height={15} className='w-full'></Image>
                    </div>
                    <div className='w-36 md:w-48 cursor-pointer'>
                        <Image src={'/ecommerce-product-page/images/logo.svg'} alt='menu' width={138} height={20} className='w-full'></Image>
                    </div>
                    <div className={` absolute md:static ${showNav ? 'block' : 'hidden'} top-0 left-0 z-50 bg-[rgba(0,0,0,0.4)] md:bg-transparent w-full md:flex md:items-center`}>
                        <div className='bg-white min-h-svh md:min-h-0 w-9/12 md:w-auto px-8 py-6 md:p-0 md:flex md:items-center'>
                            <div className='w-4 md:hidden' onClickCapture={hideNavList}>
                                <Image src={'/ecommerce-product-page/images/icon-close.svg'} alt='close' width={14} height={15} className='w-full'></Image>
                            </div>
                            <ul className='pt-10 md:flex md:items-center md:p-0 md:gap-8 md:ml-10'>
                               {
                                    NavList.map(item => {
                                        return (
                                            <li key={item.name} className='mb-5 md:m-0 font-bold text-2xl md:font-light md:text-base'>
                                                <Link href={item.href}>{item.name}</Link>
                                            </li>
                                        )
                                    })
                               }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 md:gap-8'>
                    <div className='md:relative'>
                        <div className={`w-6 cursor-pointer relative cart-button ${cartCheked ? '' : 'unchecked'}`}>
                            <Image src={'/ecommerce-product-page/images/icon-cart.svg'} alt='cart' width={22} height={20} className='w-full' onClickCapture={toggleCartBox}></Image>
                        </div>
                        <CartBox isVisible={cartBoxVisible}></CartBox>
                    </div>
                    <div className='w-8 md:w-12 rounded-full overflow-hidden cursor-pointer'>
                        <Image src={'/ecommerce-product-page/images/image-avatar.png'} alt='cart' width={100} height={100} className='w-full'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
