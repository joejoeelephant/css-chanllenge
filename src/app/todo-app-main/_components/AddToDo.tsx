'use client'
import React, {useRef} from 'react'
import { useToDoData } from '../_context/ToDoContext' 
import { ToDoItem } from '../_lib/type'

export default function AddToDo() {
    const {dispatch} = useToDoData()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          console.log('Enter pressed! Current value:'+ event.currentTarget.value);
          const item:ToDoItem = {
            id: Number(new Date()),
            content: event.currentTarget.value,
            status: 'active'
          }
          dispatch({type: 'ADD_ITEM', payload: item})
        }
    };
    return (
        <div className='rounded-lg bg-content mt-6 flex items-center gap-4 px-4 py-2'>
            <div className='border-2 w-6 h-6 border-circle-color rounded-full'></div>
            <div className='flex-1'>
                <input ref={inputRef} onKeyDownCapture={handleKeyDown} type="text" placeholder='Create a new todo...' className='w-full bg-content p-1 border-0 outline-0 active:border-none active:outline-none'/>
            </div>
        </div>
    )
}
