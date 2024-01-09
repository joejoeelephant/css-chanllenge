'use client'
import React from 'react'
import { useFormData } from '../_context/FormDataContext'
type Step = {
  index: number;
  description: string
}

export default function FormSideBar() {
  const stepList = [
    {
      index: 1,
      description: 'your info'
    },
    {
      index: 2,
      description: 'select plan'
    },
    {
      index: 3,
      description: 'add-ons'
    },
    {
      index: 4,
      description: 'summary'
    }
  ]
  const {formData} = useFormData()
  const {step} = formData
  return (
    <div className='form-sidebar p-4 md:p-8 '>
        <div className='flex md:flex-col justify-center gap-6 pt-8 md:pt-0 mx-auto'>
          {
            stepList.map(item => {
              return (
                <div key={item.index} className='flex gap-4 text-white uppercase'>
                  <div className={`w-9 aspect-square flex justify-center items-center border-2 font-semibold ${step === item.index ? 'bg-color2 text-primary border-color3' : 'border-slate-300'} rounded-full self-start`}>
                    {item.index}
                  </div>
                  <div className='hidden md:block'>
                    <div className=' opacity-65 text-sm'>
                      step {item.index}
                    </div>
                    <div className='font-bold text-sm tracking-widest'>
                      {item.description}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
