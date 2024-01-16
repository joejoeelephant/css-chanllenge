'use client'
import React, { useState } from 'react'
import './style.css'
import Image from 'next/image'
import ToDoList from './_components/ToDoList'
import AddToDo from './_components/AddToDo'
import { ToDoProvider } from './_context/ToDoContext' 
export default function Page() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(prev => {
            return prev === 'light' ? 'dark' : 'light'
        })
    }
    return (
        <div className={`page-container ${theme}-theme`}>
            <div className="page-hero"></div>
            <ToDoProvider>
                <div className="page-main p-4 pt-11 md:pt-20 w-full max-w-3xl mx-auto relative flex flex-col justify-between text-primary">
                    <div>
                        <div className='flex justify-between items-center'>
                            <h1 className='tracking-widest text-white font-bold text-4xl'>TODO</h1>
                            <div className='w-6 self-center cursor-pointer' onClickCapture={toggleTheme}>
                                {
                                    theme === 'light' 
                                    ?
                                    <Image src={'/todo-app-main/images/icon-moon.svg'} alt='moon' width={26} height={26} className='w-full h-auto'></Image>
                                    :
                                    <Image src={'/todo-app-main/images/icon-sun.svg'} alt='moon' width={26} height={26} className='w-full h-auto'></Image>
                                }
                            </div>
                        </div>
                        <AddToDo />
                        <ToDoList />
                    </div>
                    <div className='text-secondary pb-8 text-center'>
                        Drag and drop to reorder list
                    </div>
                </div>
            </ToDoProvider>
        </div>
    )
}