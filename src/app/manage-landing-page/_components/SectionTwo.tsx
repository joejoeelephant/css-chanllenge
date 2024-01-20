'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import GetStartBtn from './GetStartBtn';
import { useWindowWide } from '@/hooks/useWindowWide';
import 'swiper/css/pagination';
import 'swiper/css';
import './SectionTwo.css'
export default function SectionTwo() {
    const swiperList = [
        {
            avatar: '/manage-landing-page/images/avatar-ali.png',
            username: 'lorem1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam ex animi beatae illum sint molestias ut ducimus vero dolorem?'
        },
        {
            avatar: '/manage-landing-page/images/avatar-anisha.png',
            username: 'lorem2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam ex animi beatae illum sint molestias ut ducimus vero dolorem?'
        },
        {
            avatar: '/manage-landing-page/images/avatar-richard.png',
            username: 'lorem3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam ex animi beatae illum sint molestias ut ducimus vero dolorem?'
        },
        {
            avatar: '/manage-landing-page/images/avatar-shanai.png',
            username: 'lorem4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam ex animi beatae illum sint molestias ut ducimus vero dolorem?'
        }
    ]
    const isWindowWide = useWindowWide()
    return (
        <div>
            <div className="pb-12 md:pb-32 md:pt-28">
                <div className='container mx-auto'>
                    <h3 className='font-bold text-3xl md:text-5xl text-center'>
                        What they&apos;ve said
                    </h3>
                </div>
                <div className='mt-16 w-full p-4 md:p-0'>
                    <Swiper
                        key={isWindowWide ? 'wide' : 'narrow'}
                        modules={!isWindowWide ? [Pagination] : []}
                        spaceBetween={25}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        pagination={{ clickable: false }}
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 3, // Adjust 'auto' as needed
                              modules: []
                            }
                        }}
                    >
                        {
                            swiperList.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='user-list-item max-w-2xl min-h-96 cursor-pointer'>
                                            <div className="user-list-item-content bg-vary-light-gray p-8 pt-16 text-center ">
                                                <div>
                                                    {item.username}
                                                </div>
                                                <p className='text-secondary'>
                                                   {item.content}
                                                </p>
                                            </div>
                                            <div className="user-list-item-avatar">
                                                <div className='w-20 mx-auto'>
                                                    <Image src={item.avatar} alt='avatar' width={144} height={144} className='w-full'></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className=' flex justify-center '>
                    <GetStartBtn />
                </div>
            </div>
        </div>
    )
}
