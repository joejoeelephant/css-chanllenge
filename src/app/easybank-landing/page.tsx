import React from 'react'
import './style.css'
import { Public_Sans } from 'next/font/google'
import Nav from './_components/Nav'
import Hero from './_components/Hero'
import SectionOne from './_components/SectionOne'
import SectionTwo from './_components/SectionTwo'
import Footer from './_components/Footer'
const public_sans = Public_Sans({
    variable: '--font-family',
    subsets: ['latin']
  })
export default function page() {
    return (
        <div className={`page-container min-h-svh text-primary ${public_sans.variable}`}>
            <Nav></Nav>
            <Hero></Hero>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <Footer></Footer>
        </div>
    )
}
