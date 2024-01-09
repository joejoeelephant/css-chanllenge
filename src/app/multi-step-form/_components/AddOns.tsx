'use client'
import React, { useEffect, useState } from 'react'
import FormContent from './FormContent'
import { useFormData } from '../_context/FormDataContext'
import Image from 'next/image'
import './AddOns.css'

export default function AddOns() {
    const title = 'Pick add-ons'
    const description = 'balabalbalblablablabl'
    const {setFormData, formData, addOnsData} = useFormData()
    const {plan, period} = formData
    
    const [addons, setAddons] = useState<string[]>([])
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const checked  = event.target.checked
        if(checked) {
            setFormData(prev => {
                return {
                    ...prev,
                    addOns: [...prev.addOns, value]
                }
            })
        }else {
            setFormData(prev => {
                return {
                    ...prev,
                    addOns: prev.addOns.filter((item) => item !== value)
                }
            })
        }
    }
    return (
        <FormContent title={title} description={description}>
            <div className='mt-6 checkbox-list'>
                {
                    addOnsData.map(item => {
                        return (
                            <label key={item.name}>
                                <input type="checkbox" name='addOns' value={item.name} checked={Boolean(formData.addOns.find(el => el === item.name))} className='hidden checkbox-input' onChange={handleChange}/>
                                <div className='flex gap-4 p-4 border border-slate-300 rounded-md items-center checkbox-item'>
                                    <div className='w-5 aspect-square flex items-center justify-center rounded-sm border border-gray-300 checkbox-icon'>
                                        <Image src={'/multi-step-form-main/assets/images/icon-checkmark.svg'} alt='checkmark' width={12} height={9} className='w-9/12'></Image>
                                    </div>
                                    <div className='flex-1'>
                                        <div className='font-bold'>
                                            {item.name}
                                        </div>
                                        <div className='text-secondary text-sm'>
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className='text-sm text-accent'>
                                        +${period === 'month' ? item.price : item.price * 10}/
                                        {period === 'month' ? 'mon' : 'year'}
                                    </div>
                                </div>
                            </label>
                        )
                    })
                }
            </div>
        </FormContent>
    )
}
