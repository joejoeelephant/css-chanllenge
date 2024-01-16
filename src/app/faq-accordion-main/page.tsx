"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import './style.css'
export default function Page() {
    const tempList = [
        {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            desc: `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Alias quos molestiae, possimus ratione minima, 
                quis praesentium voluptate a, vitae animi hic. Tempore, qui incidunt accusantium.`
        },
        {
            title: "Lorem ipsum dolor, ",
            desc: `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Alias quos molestiae, possimus ratione minima, 
                quis praesentium voluptate a, vitae animi hic. Tempore, qui incidunt accusantium.`
        },
        {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            desc: `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Alias quos molestiae, possimus ratione minima, 
                quis praesentium voluptate a, vitae animi hic. Tempore, qui incidunt accusantium.`
        },
        {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            desc: `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Alias quos molestiae, possimus ratione minima, 
                quis praesentium voluptate a, vitae animi hic. Tempore, qui incidunt accusantium.`
        }
    ]
    const [list, setList] = useState<any[]>(tempList)
    const [openIndex, setOpenIndex] = useState(0)
    const openDesc = (index: number) => {
        return () => {
            console.log(index)
            setOpenIndex(() => index)
        }
    }
    return (
        <div className="page-container">
            <div className="bg-band">
                <Image 
                    src={'/faq-accordion-main/assets/images/background-pattern-mobile.svg'} alt='bg' width={375} height={232} 
                    className='w-full h-full object-cover md:hidden '>
                </Image>
                <Image 
                    src={'/faq-accordion-main/assets/images/background-pattern-desktop.svg'} alt='bg' width={1440} height={320} 
                    className='w-full h-full object-cover hidden md:block '>
                </Image>
            </div>
            <div className="shadow-contaienr"></div>
            <div className='main-contaienr bg-white p-6 lg:p-10 rounded-2xl overflow-y-scroll md:overflow-hidden'>
                <div className='flex items-center gap-4 md:gap-7'>
                    <Image src={'faq-accordion-main/assets/images/icon-star.svg'} alt='star' width={40} height={41} className='w-6 h-6 md:w-10 md:h-10'></Image>
                    <h3 className='text-3xl md:text-5xl font-extrabold'>
                        FAQS
                    </h3>
                </div>
                <div className='mt-8'>
                    <ul>
                        {
                            list.map((item , i) => {
                                return (
                                    <li key={i} className='py-2 2xl:py-4 border-b-2 border-b-slate-200'>
                                        <div className='flex justify-between gap-8 items-center'>
                                            <div className='font-bold flex-1 lg:text-xl'>
                                                {item.title}
                                            </div>
                                            <div onClick={openDesc(i)} className='cursor-pointer'>
                                                {
                                                    i !== openIndex && 
                                                    <Image 
                                                        src={'/faq-accordion-main/assets/images/icon-plus.svg'} 
                                                        alt='plus' 
                                                        width={30} height={31}
                                                        className='w-8 h-8'>
                                                    </Image>
                                                }
                                                {
                                                    i === openIndex && 
                                                    <Image 
                                                        src={'/faq-accordion-main/assets/images/icon-minus.svg'} 
                                                        alt='minus' 
                                                        width={30} height={31}
                                                        className='w-8 h-8'>
                                                    </Image>
                                                }
                                            </div>
                                        </div>
                                        <div className={`text-secondary text-xs lg:text-base mt-4 transition-all duration-500 grid  ${ i === openIndex ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                            <div className='overflow-hidden'>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
