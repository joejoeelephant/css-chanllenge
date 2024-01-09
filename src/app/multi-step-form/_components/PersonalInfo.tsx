'use client'
import React, { useEffect, useRef, useState } from 'react'
import FormContent from './FormContent'
import { useFormData } from '../_context/FormDataContext'
import { validateName, validateEmail, validatePhone } from '../_utils/FormValidate.'
export default function PersonalInfo() {
    const title = "Personal info"
    const description = "Please provide your email blalabala"
    const {formData, setFormData, errorData, setErrorData} = useFormData()
    const {email, name, phone} = formData
    const {email: emailError, name: nameError, phone: phoneError} = errorData
    const nameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if(nameRef.current) {
            nameRef.current.value = name
        }
        if(emailRef.current) {
            emailRef.current.value = email
        }
        if(phoneRef.current) {
            phoneRef.current.value = phone
        }
    }, [name, email, phone])

    const handleName = (value: string) => {
        const errorMessage = validateName(value);
        setErrorData(prev => ({
            ...prev,
            name: errorMessage || ''
        }));
        !errorMessage && setFormData((prev) => {
            return {
                ...prev,
                name: value
            }
        })
    }

    const handleEmail = (value: string) => {
        const errorMessage = validateEmail(value);
        setErrorData(prev => ({
            ...prev,
            email: errorMessage || ''
        }));
        !errorMessage && setFormData((prev) => {
            return {
                ...prev,
                email: value
            }
        })
    }

    const handlePhone = (value: string) => {
        const errorMessage = validatePhone(value);
        setErrorData(prev => ({
            ...prev,
            phone: errorMessage || ''
        }));
        !errorMessage && setFormData((prev) => {
            return {
                ...prev,
                phone: value
            }
        })
    }

    return (
        <FormContent title={title} description={description}>
            <div className='mt-6 flex text-sm flex-col gap-3'>
                <div>
                    <div className='text-xs md:text-base flex justify-between'>Name <span className='text-red-500'>{nameError}</span></div>
                    <input type="text" required placeholder='name' onBlur={(event) => {handleName(event.target.value)}} ref={nameRef} className='border rounded-md py-2 px-3 w-full mt-1'/>
                </div>
                <div>
                    <div className='text-xs md:text-base flex justify-between'>Email Address <span className='text-red-500'>{emailError}</span></div>
                    <input type="text" required placeholder='name' onBlur={(event) => {handleEmail(event.target.value)}} ref={emailRef} className='border rounded-md py-2 px-3 w-full mt-1'/>
                </div>
                <div>
                    <div className='text-xs md:text-base flex justify-between'>Phone Number <span className='text-red-500'>{phoneError}</span></div>
                    <input type="text" required placeholder='name' onBlur={(event) => {handlePhone(event.target.value)}} ref={phoneRef} className='border rounded-md py-2 px-3 w-full mt-1'/>
                </div>
            </div>
        </FormContent>
    )
}
