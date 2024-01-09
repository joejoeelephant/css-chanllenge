'use client'
import React, {useState} from 'react'
import FormSideBar from './_components/FormSideBar'
import FormContainer from './_components/FormContainer'
import { FormDataProvider } from './_context/FormDataContext'
import  './style.css'

export default function Page() {
  return (
    <div className='page-container text-primary'>
        <FormDataProvider>
          <div className='main-container'>
              <FormSideBar />
              <FormContainer />
          </div>
        </FormDataProvider>
    </div>
  )
}
