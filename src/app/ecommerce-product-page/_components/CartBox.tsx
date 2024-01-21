'use client'
import React from 'react'
import Image from 'next/image'
import { CartItem } from '../_lib/type'
import { useCartData } from '../_context/CartDataContext'
type CartBoxProps = {
    isVisible: boolean
}

export default function CartBox({isVisible}: CartBoxProps) {
    const {cartData, dispatch} = useCartData();
    const deleteItem = (id: number) => {
        dispatch({type: "DELETE_PRODUCT", payload: id})
    }
    return (
        <div className={`${isVisible ? '' : 'hidden'} shadow-2xl bg-white absolute top-24 md:top-12 left-1/2 md:-left-16 xl:left-1/2 -translate-x-1/2  border w-11/12 min-w-80 max-w-96 rounded-md`}>
            <div className='p-4 border-b font-semibold'>
                CartBox
            </div>
            <div className='min-h-52 flex flex-col items-center justify-center font-semibold p-4'>
                {
                    cartData.length < 1 ? 
                    (
                        <span className='text-secondary'>Your Cart Is Empty</span>
                    )
                    :
                    (
                        <div className='flex-1 w-full'>
                            <div>
                                {
                                    cartData.map(item => {
                                        return (
                                            <div key={item.name} className='flex items-center gap-3 mb-2 p-2 border-b'>
                                                <div className='w-14 aspect-square rounded-md overflow-hidden'>
                                                    <Image src={item.thumbnailPath} alt='thumbnail' width={176} height={176} className='w-full' priority></Image>
                                                </div>
                                                <div className='flex flex-col justify-between flex-1'>
                                                    <div className='text-lg'>
                                                        {item.name}
                                                    </div>
                                                    <div>
                                                        <span className='inline-block mr-4 text-secondary'>
                                                            ${item.price} x {item.count}
                                                        </span>
                                                        <span className='inline-block font-bold'>
                                                            ${item.price * item.count}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='w-4 cursor-pointer' onClickCapture={() => {deleteItem(item.id)}}>
                                                    <Image src={'/ecommerce-product-page/images/icon-delete.svg'} alt='delete' width={14} height={16} className='w-full'></Image>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='py-4 bg-primary text-white text-center mt-4 rounded-lg active:opacity-65 cursor-pointer'>
                                Checkout
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
