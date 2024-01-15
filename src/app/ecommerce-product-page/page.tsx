import React from 'react'
import './style.css'
import Nav from './_components/Nav'
import { CartDataProvider } from './_context/CartDataContext'
import ProductInfo from './_components/ProductInfo'
export default function page() {
  return (
    <div className='page-container relative'>
        <CartDataProvider>
          <Nav></Nav>
          <ProductInfo />
        </CartDataProvider>
    </div>
  )
}
