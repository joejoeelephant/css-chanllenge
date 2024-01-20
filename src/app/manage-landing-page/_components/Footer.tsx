'use client'
import React, { useRef, useState } from 'react'
import './Footer.css'
import Image from 'next/image'
import { validateEmail } from '@/utils/FormValidate.'
export default function Footer() {
    const shareButtons = [
        {
            icon: '/manage-landing-page/images/icon-facebook.svg',
            url: '#'
        },
        {
            icon: '/manage-landing-page/images/icon-instagram.svg',
            url: '#'
        },
        {
            icon: '/manage-landing-page/images/icon-pinterest.svg',
            url: '#'
        },
        {
            icon: '/manage-landing-page/images/icon-twitter.svg',
            url: '#'
        },
        {
            icon: '/manage-landing-page/images/icon-youtube.svg',
            url: '#'
        }
    ]
    const emailRef = useRef<HTMLInputElement| null>(null)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const sendEmail = () => {
        if(!emailRef.current) throw new Error('email input ref undefined');
        const email = emailRef.current.value;
        const errorStr = validateEmail(email);
        errorStr && setErrorMsg(errorStr)
    }
    return (
        <div className='footer-container'>
            <div className="container mx-auto text-white footer-grid-box gap-10 md:gap-0 py-16 px-8">
                <div className="footer-email">
                <div className='flex justify-between gap-3 items-center'>
                        <div className='bg-white self-stretch rounded-3xl flex-1 flex items-center px-4'>
                            <input ref={emailRef} type="text" name='email' placeholder='update in your inbox...' className='p-1 text-sm w-full text-primary ouline-none border-none'/>
                        </div>
                        <div className='rounded-3xl btn-primary px-6 py-3 active:opacity-65 select-none cursor-pointer text-sm' onClickCapture={sendEmail}>
                            GO
                        </div>
                </div>
                <div className={`text-red-500 text-sm pl-4 pt-1 ${errorMsg !== '' ?  '' : 'hidden'}`}>
                    {errorMsg}
                </div>
                </div>
                <div className="footer-navList md:grid">
                    <div className='flex justify-between px-6 md:pl-28 md:self-stretch'>
                        <ul className='md:flex-1 grid gap-4'>
                            {
                                Array.from({length: 4}).map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#" className='footer-nav-list-item'>
                                                lorem{index}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <ul className='md:flex-1 grid gap-4 self-start'>
                            {
                                Array.from({length: 3}).map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#" className='footer-nav-list-item'>
                                                lorem{index}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="footer-shareButtons">
                    <ul className='flex justify-between gap-4 px-4'>
                        {
                            shareButtons.map((item, index) => {
                                return (
                                    <li key={index} className='w-8 md:w-5 footer-share-button'>
                                        <a  href="#" className='footer-share-icon block w-full aspect-square'
                                            style={{'--mask-image-url': `url(${item.icon})`} as React.CSSProperties}>
                                            {/* <Image src={item.icon} alt='icon' width={20} height={20} className='w-full h-auto'></Image> */}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="footer-logo">
                    <div className='w-7/12 md:w-40 mx-auto md:mx-0'>
                        <Image src={'/manage-landing-page/images/logo-footer.svg'} alt='logo' width={146} height={24} className='w-full'></Image>
                    </div>
                </div>
                <div className="footer-copyRights">
                    <div className='text-sm text-secondary text-center'>
                        @ Lorem ipsum dolor sit.
                    </div>
                </div>
            </div>
        </div>
    )
}
