import React from 'react'
import FormContent from './FormContent';
import { useFormData } from '../_context/FormDataContext';
export default function FinishingUp() {
    const title = 'Finishing up';
    const description = 'Double check everything is ok before confirming'
    const {formData, plansData, addOnsData, setFormData} = useFormData();
    const {plan, period, addOns} = formData
    const addonsList = addOnsData.filter(item => addOns.find(el => el === item.name) )

    const getPlanPrice = () => {
        const planData = plansData.find(item => item.name === plan)
        const price  = planData?.price;
        if(!price) {
            return -1;
        }
        return period === 'month' ? price : price * 10

    }

    const getAddOnsPrice = () => {
        return period === 'month' ? addonsList.reduce((a, b) => {return (a + b.price)}, 0) : addonsList.reduce((a, b) => {return (a + b.price * 10)}, 0)
    }

    const getTotalPrice = () => {
        return getPlanPrice() + getAddOnsPrice()
    }

    return (
        <FormContent title={title} description={description}>
            <div className='mt-6'>
                <div className='p-4 bg-slate-100 rounded-md'>
                    <div className='flex justify-between pb-2 border-b border-slate-200'>
                        <div>
                            <div className='font-bold'>
                                {plan}({period})
                            </div>
                            <div className='underline text-secondary text-sm cursor-pointer' onClick={() => {setFormData(prev => {return {...prev, step:2}})}}>
                                Change
                            </div>
                        </div>
                        <div className='font-bold'>
                            {getPlanPrice()}/{period === 'month' ? 'mon' : 'yr'}
                        </div>
                    </div>
                    <div>
                        {
                            addonsList.map(item => {
                                return (
                                    <div key={item.name} className='flex justify-between pt-4'>
                                        <div className='text-secondary'>
                                            {item.name}
                                        </div>
                                        <div>
                                            +${period === 'month' ? item.price : item.price * 10}/{period === 'month' ? 'mon' : 'yr'}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
                <div className='flex justify-between p-4'>
                    <div className='text-secondary'>
                        total
                    </div>
                    <div className='text-accent font-bold text-lg'>
                        +${getTotalPrice()}/{period === 'month' ? 'mon' : 'yr'}
                    </div>
                </div>
            </div>
        </FormContent>
    )
}
