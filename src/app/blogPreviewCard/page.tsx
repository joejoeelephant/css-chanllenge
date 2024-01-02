import React from 'react'
import './style.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className="card w-full rounded-3xl overflow-hidden p-5 bg-white border-2 border-gray-800">
      <div className="rounded-xl overflow-hidden">
        <Image src={'/assets/images/illustration-article.svg'} width={336} height={201} alt='illustration' className='w-full' priority></Image>
      </div>
      <div className='card-tag inline-block mt-4 font-bold rounded-md py-1 px-3 text-sm'>
        Learning
      </div>
      <p className='mt-4 text-sm font-semibold'>
        Lorem, ipsum dolor.
      </p>
      <h3 className='card-h3 text-xl font-extrabold mt-4 cursor-pointer'>
        HTML & CSS foundations
      </h3>
      <p className="card-desc text-sm mt-4 leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, non iste. Optio.
      </p>
      <div className='flex items-center gap-4 mt-6'>
        <div className='rounded-full'>
          <Image src={'/assets/images/image-avatar.webp'} alt='avatar' width={64} height={65} className='w-full'></Image>
        </div>
        <div className='font-extrabold'>
          Greg Hooper
        </div>
      </div>
    </div>
  )
}
