import React from 'react'
import Nav from './_components/Nav'
import Hero from './_components/Hero'
import SectionOne from './_components/SectionOne'
import SectionTwo from './_components/SectionTwo'
import SectionThree from './_components/SectionThree'
import Footer from './_components/Footer'
import { Be_Vietnam_Pro } from 'next/font/google'
import './style.css'
const be_Vietnam_Pro = Be_Vietnam_Pro({
    variable: '--font-family',
    subsets: ['latin'],
    weight: ['100','200','300','400','500','600','700','800','900']
})
export default function page() {
    return (
        <div className={`page-container text-primary ${be_Vietnam_Pro.variable}`}>
            <Nav></Nav>
            <Hero />
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree />
            <Footer />
        </div>
    )
}
