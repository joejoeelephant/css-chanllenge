'use client'
import React from 'react'
import Image from 'next/image'
import FormContent from './FormContent'
import { useFormData } from '../_context/FormDataContext'
import './SelectPlan.css'

export default function SelectPlan() {
    const {setFormData, formData, plansData} = useFormData()
    const {plan, period} = formData
    const title = "Select your plan"
    const description = "You have the option of monthly or yearly billing"

    const hanldlePlan = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setFormData((prev) => {
            return {
                ...prev,
                plan: value
            }
        })
        console.log(value)
    }

    const handlePeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked
        setFormData((prev) => {
            return {
                ...prev,
                period: (!checked ? 'month' : 'year')
            }
        })
    }
    return (
        <FormContent title={title} description={description}>
            <div className='mt-4 md:mb-10'>
                <div className='flex flex-col md:flex-row justify-between gap-4'>
                    {
                        plansData.map(item => {
                            return (
                                <label key={item.name} className='flex-1 radio-label'>
                                    <input type="radio" name='plan' value={item.name} className='hidden radio-input' checked={plan === item.name} onChange={hanldlePlan}/>
                                    <div className='flex md:flex-col md:gap-10 flex-1 gap-4 p-4 border border-gray-300 rounded-md cursor-pointer radio-item'>
                                        <div className='w-10'>
                                            <Image src={item.icon} alt='arcade' width={40} height={40} className='w-full'></Image>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='text-primary font-bold'>{item.name}</div>
                                            <div className='text-secondary text-sm mt-1'>
                                                ${period === 'month' ? item.price : item.price * 10}/
                                                {period === 'month' ? 'mon' : 'year'}
                                            </div>
                                            <div className={`text-sm ${period == 'month' ? ' hidden ' : ''}`}>
                                                2 months free
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            )
                        })
                    }
                </div>
                <div className='flex items-center gap-4 mt-8 justify-center font-bold text-sm bg-gray-100 p-4 rounded-md'>
                    <div className={period === 'month' ? '' : ' text-secondary'}>
                        Monthly
                    </div>
                    <div className='plan-switch '>
                        <label>
                            <input type="checkbox" name='period' className='hidden' checked={period === 'year'} onChange={handlePeriod}/>
                            <div className='plan-switch-btn cursor-pointer'></div>
                        </label>
                    </div>
                    <div className={period === 'year' ? '' : ' text-secondary'}>
                        Yearly
                    </div>
                </div>
            </div>
        </FormContent>
    )
}
