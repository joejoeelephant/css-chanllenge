import React from 'react'

type DialogProp = {
    title: string;
    isVisible: boolean;
    confirm: () => void;
    cancle: () => void
    children?: React.ReactNode
}

export default function Dialog({title, children, confirm, cancle, isVisible}: DialogProp) {
  return (
    <div className={`min-h-screen w-full bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 z-50 flex justify-center items-center ${isVisible ? '' : 'hidden'}`}>
        <div className='m-4 max-w-xl bg-white rounded-lg p-6'>
            <div className='font-bold text-lg'>
                {title}
            </div>
            <div className='mt-4'>
                {children}
            </div>
            <div className='flex justify-between mt-4'>
                <div className='py-2 px-3 bg-gray-500 text-white font-bold rounded-md active:opacity-65 cursor-pointer' onClick={cancle}>
                    No Cancle
                </div>
                <div className='py-2 px-3 bg-red-500 text-white font-bold rounded-md active:opacity-65 cursor-pointer' onClick={confirm}>
                    Yes Delete
                </div>
            </div>
        </div>
    </div>
  )
}
