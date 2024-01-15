'use client'
import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/image';
import { gsap } from 'gsap';

type ImageItem = {
    imagePath: string;
    thumbnailPath: string
}

type SliderBoxProps = {
    imageList: ImageItem[],
    showLightbox: () => void
}
export default function ProductImage({imageList, showLightbox}: SliderBoxProps) {
    const [sliderIndex, setSliderIndex] = useState(0)
    const sliderRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const elements = sliderRef.current?.children;
        if(!elements) return;
        gsap.set(elements, { opacity: 0 });
        gsap.to(elements[sliderIndex], { opacity: 1, duration: 0.5 });
      }, [sliderIndex])
    
      const nextImage = () => {
        if(sliderIndex >= imageList.length - 1) {
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
        <>
          <div className="product-image relative flex items-center md:items-end ">
            <div ref={sliderRef} className='relative w-full aspect-square md:w-10/12 md:rounded-lg overflow-hidden'>
              {
                imageList.map((item,i) => {
                  return (
                    <div key={item.imagePath} className='w-full h-full absolute'>
                      <Image src={item.imagePath} alt={item.imagePath} width={1000} height={1000} className='w-full object-cover'></Image>
                    </div>
                  )
                })
              }
              <div className='absolute left-0 top-0 w-full h-full hidden md:block cursor-pointer' onClickCapture={showLightbox}></div>
            </div>
            <div className='flex justify-between absolute z-10 px-4 w-full md:hidden'>
              <div className='w-12 aspect-square rounded-full bg-white left-4 flex justify-center items-center' onClickCapture={prevImage}>
                  <Image src={'/ecommerce-product-page/images/icon-previous.svg'} alt='previous' width={12} height={18} className='w-3 h-auto'></Image>
              </div>
              <div className='w-12 aspect-square rounded-full bg-white right-4 flex justify-center items-center' onClickCapture={nextImage}>
                <Image src={'/ecommerce-product-page/images/icon-next.svg'} alt='previous' width={12} height={18} className='w-3 h-auto'></Image>
              </div>
            </div>
          </div>
          <div className="product-thumbnail hidden md:block">
            <div className='flex justify-between gap-8 w-10/12 pt-6'>
                {
                  imageList.map((item, i) => {
                    return (
                      <div key={item.imagePath} className='rounded-lg overflow-hidden cursor-pointer product-thumbnail-item' onClickCapture={() => {setSliderIndex(i)}}>
                        <Image src={item.thumbnailPath} alt='thumb' width={176} height={176} className='w-full'></Image>
                      </div>
                    )
                  })
                }
              </div>
          </div>
        </>
    )
}
