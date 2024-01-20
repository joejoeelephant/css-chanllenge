import React from 'react'
import './SectionThree.css'
export default function SectionThree() {
  return (
    <div className='section-three-container bg-bright-red py-24'>
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row md:justify-between items-center gap-8">
            <h3 className='text-white text-4xl font-semibold px-6 md:w-5/12'>
                Simplify how your team works today.
            </h3>
            <div className='rounded-3xl bg-white text-accent px-8 py-3 active:opacity-65 select-none cursor-pointer'>
                Get Started
            </div>
        </div>
    </div>
  )
}
