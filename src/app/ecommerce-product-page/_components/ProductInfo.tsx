'use client'
import React, {useEffect, useRef, useState} from 'react'
import './ProductInfo.css'
import { Product } from '../_lib/type'
import Lightbox from './Lightbox'
import ProductImage from './ProductImage'
import { gsap } from 'gsap';
import Image from 'next/image';
import { useCartData } from '../_context/CartDataContext'

export default function ProductInfo() {
  const productData: Product = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    description: "Product description",
    companyName: 'company name',
    beforePrice: 250,
    discount: 0.5,
    afterPrice: 125,
    images: [
      {
        imagePath: '/ecommerce-product-page/images/image-product-1.jpg',
        thumbnailPath: '/ecommerce-product-page/images/image-product-1-thumbnail.jpg'
      },
      {
        imagePath: '/ecommerce-product-page/images/image-product-2.jpg',
        thumbnailPath: '/ecommerce-product-page/images/image-product-2-thumbnail.jpg'
      },
      {
        imagePath: '/ecommerce-product-page/images/image-product-3.jpg',
        thumbnailPath: '/ecommerce-product-page/images/image-product-3-thumbnail.jpg'
      },
      {
        imagePath: '/ecommerce-product-page/images/image-product-4.jpg',
        thumbnailPath: '/ecommerce-product-page/images/image-product-4-thumbnail.jpg'
      }
    ]
  }
  const [sliderIndex, setSliderIndex] = useState(0)
  const [count, setCount] = useState(1)
  const [lightboxVisible, setLightboxVisible] = useState(false)
  const {dispatch} = useCartData()

  const showLightbox = () => {
    setLightboxVisible(true)
  }

  const addCart = () => {
    dispatch({type: "ADD_PRODUCT", payload:{
      id: productData.id,
      name: productData.name,
      price: productData.afterPrice,
      count: count,
      thumbnailPath: productData.images[0].thumbnailPath
    }})
  }

  const plusCount = () => {
    setCount(prev => prev+1)
  }

  const minusCount = () => {
    if(count <= 1) return; 
    setCount(prev => prev-1)
  }
  


  return (
    <div className='md:pt-20'>
      <div className='product-container max-w-7xl mx-auto md:px-20'>
        <ProductImage showLightbox={showLightbox} imageList={productData.images}></ProductImage>
        <div className="product-info p-6 md:flex md:flex-col md:justify-center">
            <div className='flex flex-col gap-4 '>
              <div className='text-orange font-semibold uppercase text-sm'>
                {productData.companyName}
              </div>
              <div className='font-bold text-3xl md:text-5xl'>
                {productData.name}
              </div>
              <div className='text-secondary md:mt-6'>
                {productData.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et dicta aut laborum culpa impedit rerum voluptates excepturi.
              </div>
            </div>
            <div className='flex flex-wrap justify-between items-center font-bold mt-8'>
              <div className='text-3xl'>
                ${productData.afterPrice.toFixed(2)}
              </div>
              <div className='flex-1 text-orange px-5'>
                <span className='inline-block px-2 py-0.5 bg-pale-orange rounded-md'>
                  {productData.discount * 100}%
                </span>
              </div>
              <div className='text-grayish-blue text-lg line-through md:w-full mt-3'>
                ${productData.beforePrice.toFixed(2)}
              </div>
            </div>
        </div>
        <div className="product-actionButtons flex flex-col items-center md:items-start md:flex-row gap-4 p-6 md:py-0">
            <div className='bg-light-grayish-blue flex items-center p-5 rounded-md w-full md:w-4/12'>
              <div className='w-3 aspect-square cursor-pointer' onClickCapture={minusCount}>
                <Image src={'/ecommerce-product-page/images/icon-minus.svg'} alt='minus' width={12} height={12} className='w-full h-auto'></Image>
              </div>
              <div className='flex-1 text-center'>
                {count}
              </div>
              <div className='w-3 aspect-square cursor-pointer' onClickCapture={plusCount}>
                <Image src={'/ecommerce-product-page/images/icon-plus.svg'} alt='minus' width={12} height={12} className='w-full h-auto'></Image>
              </div>
            </div>
            <div className='bg-orange p-4 mt-2 md:mt-0 flex justify-center items-center text-white font-semibold rounded-md gap-2 w-full md:w-8/12 select-none cursor-pointer active:opacity-65' onClick={addCart}>
              <span className='inline-block w-5'>
                <Image src={'/ecommerce-product-page/images/icon-cart.svg'} alt='cart' width={22} height={20} className='w-full' style={{filter: 'brightness(200%)'}}></Image>
              </span>
              <span>
                Add to cart
              </span>
            </div>
        </div>
      </div>
      <Lightbox isVisible={lightboxVisible} productImages={productData.images} closeLightBox={() => {setLightboxVisible(false)}}/>
    </div>
  )
}
