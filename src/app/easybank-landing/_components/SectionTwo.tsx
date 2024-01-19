import React from 'react'
import Image from 'next/image'
export default function SectionTwo() {
    const articleList = [
        {
            title: "Lorem, ipsum dolor.",
            author: 'lorem',
            thumb: '/easybank-landing/images/image-confetti.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis veritatis non.'
        },
        {
            title: "Lorem, ipsum dolor.",
            author: 'lorem',
            thumb: '/easybank-landing/images/image-restaurant.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis veritatis non.'
        },
        {
            title: "Lorem, ipsum dolor.",
            author: 'lorem',
            thumb: '/easybank-landing/images/image-plane.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis veritatis non.'
        },
        {
            title: "Lorem, ipsum dolor.",
            author: 'lorem',
            thumb: '/easybank-landing/images/image-currency.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis veritatis non.'
        }
    ]
    return (
        <div className='px-6 pt-24 pb-28 md:pt-28 md:pb-32 bg-light-gray border-t'>
            <div className='container mx-auto '>
                <h3 className='text-3xl text-center md:text-left'>
                    Latest Articles
                </h3>
                <div className='list-container mt-8 gap-20'>
                    {
                        articleList.map((item, index) => {
                            return (
                                <a href='#' key={index} className='block rounded-md overflow-hidden bg-white'>
                                    <div className='w-full'>
                                        <Image src={item.thumb} alt='thumb' width={533} height={400} className='w-full'></Image>
                                    </div>
                                    <div className='p-4 pt-6'>
                                        <p className='text-sm text-secondary'>
                                            By {item.author}
                                        </p>
                                        <div className='text-2xl'>
                                            {item.title}
                                        </div>
                                        <p className='text-secondary mt-4'>
                                            {item.desc}
                                        </p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
