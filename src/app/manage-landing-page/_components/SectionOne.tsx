import React from 'react'
import './SectionOne.css'
export default function SectionOne() {
    return (
        <div>
            <div className="container mx-auto grid gap-10 md:grid-cols-2 pb-14">
                <div className='text-center flex flex-col gap-6 px-6 md:w-10/12 md:text-left'>
                    <h3 className='text-3xl font-bold leading-relaxed md:text-4xl'>
                        What is different about manage?
                    </h3>
                    <p className='text-secondary md:w-9/12'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi commodi recusandae.
                    </p>
                </div>
                <div>
                    <ul className='grid gap-6'>
                        {
                            Array.from({length: 3}).map((item, index) => {
                                return (
                                    <li key={index} className="list-item items-center pl-4 md:gap-2">
                                        <div className='list-item-decoration bg-very-pale-red md:hidden'></div>
                                        <div className='list-item-icon bg-bright-red text-white rounded-3xl px-6 py-2 md:mr-4'>
                                            0{index + 1}
                                        </div>
                                        <div className='list-item-title font-semibold pl-6 md:pl-0'>
                                            Lorem, ipsum dolor.
                                        </div>
                                        <div className='list-item-description pr-4 py-6 md:p-0 leading-loose text-secondary text-sm md:text-base'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Nemo delectus quam necessitatibus modi, 
                                            facilis doloribus cupiditate!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Nemo delectus quam necessitatibus modi, 
                                            facilis doloribus cupiditate!
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
