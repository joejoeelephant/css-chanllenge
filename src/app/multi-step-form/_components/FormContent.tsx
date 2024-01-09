'use client'
import React from 'react'
import { useFormData } from '../_context/FormDataContext';
interface FormContentProps {
    title: string;
    description: string;
    children: React.ReactNode
}

export default function FormContent({title, description, children} : FormContentProps) {
    const {formData, setFormData, errorData} = useFormData()
    const {step} = formData;

    function checkStep1() {
        return !errorData.name && !errorData.email && !errorData.phone
    }

    const nextStep = () => {
        if(step === 1 && !checkStep1()) {
            return;
        }
        console.log(formData)
        setFormData((prev) => {
            return {
                ...prev,
                step: prev.step + 1
            }
        })
    }
    const prevStep = () => {
        setFormData((prev) => {
            return {
                ...prev,
                step: prev.step - 1
            }
        })
    }
    return (
        <>
            <div className='m-4 rounded-lg bg-white px-4 py-8 self-stretch md:self-auto md:w-4/5 md:shadow-none form-content'>
                <h3 className='text-primary text-3xl md:text-4xl form-title'>
                    {title}
                </h3>
                <p className='text-secondary mt-4'>
                    {description}
                </p>
                {children}
            </div>
            <div className='bg-white p-4 flex justify-between items-center w-full md:w-4/5'>
                <div className={'text-secondary cursor-pointer ' + (step > 1 ? '' : 'hidden')} onClick={prevStep}>
                    go back
                </div>
                <div className={`text-white btn-color1 px-3 py-2 rounded-md cursor-pointer active:opacity-70 select-none ml-auto ${step > 3 ? 'hidden' : ''}`} onClick={nextStep}>
                    Next Step
                </div>
                <div className={`text-white bg-color3 px-3 py-2 rounded-md cursor-pointer active:opacity-70 select-none ml-auto ${step === 4 ? '' : 'hidden'}`} onClick={nextStep}>
                    Confirm
                </div>
            </div>
        </>
    )
}
