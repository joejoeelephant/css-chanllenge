'use client'
import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';

type ImageItem = {
    imagePath: string;
    thumbnailPath: string
}
type LightboxProps = {
    isVisible: boolean;
    productImages: ImageItem[];
    closeLightBox: () => void
}
export default function Lightbox({isVisible, productImages, closeLightBox}: LightboxProps) {
    const [sliderIndex, setSliderIndex] = useState(0)
    const sliderRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const elements = sliderRef.current?.children;
        if(!elements) return;
        gsap.set(elements, { opacity: 0 });
        gsap.to(elements[sliderIndex], { opacity: 1, duration: 0.5 });
        return () => {}
    }, [sliderIndex])

    const nextImage = () => {
        if(sliderIndex >= productImages.length - 1) {
            return
        }
        setSliderIndex(prev => prev + 1)
    }

    const prevImage = () => {
        if(sliderIndex <= 0) {
            return
        }
        setSliderIndex(prev => prev - 1)
    }
    return (
        <div className={`fixed top-0 left-0 z-50 w-full min-h-screen ${isVisible ? 'flex' : 'hidden'} justify-center items-center bg-[rgba(0,0,0,0.8)] select-none`}>
            <div className='w-5/12 max-w-[36rem]'>
                <div className='flex justify-end'>
                    <div className='w-6 cursor-pointer' onClickCapture={closeLightBox}>
                        <Image src={'/ecommerce-product-page/images/icon-close.svg'} alt='close' width={14} height={15} className='w-full'></Image>
                    </div>
                </div>
                <div className='relative mt-6 flex items-center'>
                    <div className='w-full aspect-square relative' ref={sliderRef}>
                        {
                            productImages.map(item => {
                                return (
                                    <div key={item.imagePath} className='absolute top-0 left-0 w-full rounded-xl overflow-hidden'>
                                        <Image src={item.imagePath} alt='product' width={1000} height={1000} className='w-full'></Image>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-between absolute left-1/2 -translate-x-1/2 w-[108%] z-10'>
                        <div className='w-12 aspect-square rounded-full bg-white left-4 flex justify-center items-center cursor-pointer' onClickCapture={prevImage}>
                            <Image src={'/ecommerce-product-page/images/icon-previous.svg'} alt='previous' width={12} height={18} className='w-3'></Image>
                        </div>
                        <div className='w-12 aspect-square rounded-full bg-white right-4 flex justify-center items-center cursor-pointer' onClickCapture={nextImage}>
                            <Image src={'/ecommerce-product-page/images/icon-next.svg'} alt='previous' width={12} height={18} className='w-3'></Image>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 px-12 pt-8'>
                    {
                        productImages.map((item,i)=> {
                            return (
                                <div key={item.thumbnailPath} className='rounded-lg overflow-hidden cursor-pointer product-thumbnail-item' onClickCapture={() => {setSliderIndex(i)}}>
                                    <Image src={item.thumbnailPath} alt='thumbnail' width={176} height={176} className='w-full'></Image>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
