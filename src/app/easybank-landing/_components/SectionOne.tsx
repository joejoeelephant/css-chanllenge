import React from 'react'
import Image from 'next/image'
export default function SectionOne() {
    const itemList = [
        {
            icon: '/easybank-landing/images/icon-online.svg',
            title: "Lorem, ipsum dolor.",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo ducimus debitis quasi, ab dicta quia iure rerum rem reiciendis aliquam provident!'
        },
        {
            icon: '/easybank-landing/images/icon-budgeting.svg',
            title: "Lorem, ipsum dolor.",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo ducimus debitis quasi, ab dicta quia iure rerum rem reiciendis aliquam provident!'
        },
        {
            icon: '/easybank-landing/images/icon-onboarding.svg',
            title: "Lorem, ipsum dolor.",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo ducimus debitis quasi, ab dicta quia iure rerum rem reiciendis aliquam provident!'
        },
        {
            icon: '/easybank-landing/images/icon-api.svg',
            title: "Lorem, ipsum dolor.",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo ducimus debitis quasi, ab dicta quia iure rerum rem reiciendis aliquam provident!'
        }
    ]
    return (
        <div className='px-6 pt-24 pb-28 md:pt-28 md:pb-32 text-center md:text-left leading-8'>
            <div className="container mx-auto">
                <div className='w-full md:w-1/2'>
                    <h3 className='w-3/4 md:w-full mx-auto text-primary text-3xl tracking-widest'>
                        Lorem, ipsum dolor.
                    </h3>
                    <p className='text-secondary mt-6 px-4 md:px-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem, eius facere sed sit commodi quibusdam nam earum!
                    </p>
                </div>
                <div className='list-container gap-20 mt-16'>
                    {
                        itemList.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center md:items-start  gap-6'>
                                    <div className='w-20'>
                                        <Image src={item.icon} alt='icon' width={72} height={72} className='w-full'></Image>
                                    </div>
                                    <div className='text-xl'>
                                        {item.title}
                                    </div>
                                    <div className='text-secondary md:text-left text-sm'>
                                        {item.desc}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
