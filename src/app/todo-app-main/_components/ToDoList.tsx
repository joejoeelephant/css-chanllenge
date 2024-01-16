'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { ToDoItem } from '../_lib/type'
import { useToDoData } from '../_context/ToDoContext'
export default function ToDoList() {
    const {toDoItems, dispatch} = useToDoData()
    const [filterType, setFilterType] = useState<'active' | 'completed' | 'all'>('all')
    const [todoList, setToDoList] = useState<ToDoItem[]>(toDoItems)
    const [draggingItemId, setDraggingItemId] = useState<number | null>(null);
    const [draggingOverItemId, setDraggingOverItemId] = useState<number | null>(null);

    useEffect(() => {
        setToDoList(prev => {
            if(filterType === 'all') {
                return toDoItems
            }
            if(filterType === 'completed') {
                return toDoItems.filter(item => item.status === 'completed')
            }

            if(filterType === 'active') {
                return toDoItems.filter(item => item.status === 'active')
            }

            return prev;
        })
    },[filterType, toDoItems])

    const deleteItem = (id: number) => {
        dispatch({type: "DELETE_ITEM", payload: id})
    }
    const setCompleted = (id: number) => {
        dispatch({type: 'SET_COMPLETED', payload: id})
    }

    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, id: number) => {
        setDraggingItemId(id);
        console.log(id)
      };
      
      const handleDragOver = (e: React.DragEvent<HTMLLIElement>, id: number) => {
        e.preventDefault(); // Necessary for allowing to drop
        setDraggingOverItemId(id)
      };
      
      const handleDrop = (e: React.DragEvent<HTMLLIElement>, targetId: number) => {
        e.preventDefault();
        if(!draggingItemId || !draggingOverItemId) return;
        dispatch({type: 'DRAG_REORDER', payload: {dragId: draggingItemId, dropId: draggingOverItemId}})
      };
      
      const handleDragEnd = () => {
        setDraggingItemId(null);
      };
    return (
        <div className='w-full mt-4'>
            <ul className='rounded-md overflow-hidden shadow-lg relative max-h-[50vh] overflow-y-scroll todo-list-container'>
                {
                    todoList.map(item => {
                        return (
                            <li 
                                onDragStartCapture={(e) => {handleDragStart(e, item.id)}}
                                onDragOverCapture={(e) => {handleDragOver(e, item.id)}}
                                onDropCapture={(e) => {handleDrop(e, item.id)}}
                                onDragEndCapture={handleDragEnd}
                                draggable 
                                key={item.id} 
                                className='flex items-center bg-content gap-3 p-4 border-b border-color'
                            >
                                <div 
                                    onClickCapture={() => {setCompleted(item.id)}}
                                    className={`border-2 w-6 h-6 border-circle-color rounded-full flex justify-center items-center cursor-pointer ${item.status === 'completed' ? 'todo-checked' : ''}`}
                                >
                                    <Image src={'/todo-app-main/images/icon-check.svg'} alt='check' width={11} height={9}></Image>
                                </div>
                                <div className={`flex-1 max-w-[40rem] break-words ${item.status === 'completed' ? ' text-secondary line-through ' : ''}`}>
                                    {item.content}
                                </div>
                                <div className='w-4 cursor-pointer' onClickCapture={() => {deleteItem(item.id)}}>
                                    <Image src={'/todo-app-main/images/icon-cross.svg'} alt='cross' width={18} height={18} className='w-full'></Image>
                                </div>
                            </li>
                        )
                    })
                }
                <li className='flex justify-between items-center bg-content gap-1 p-4 text-secondary text-sm sticky w-full bottom-0 left-0 translate-y-[1px]'>
                    <div>
                        {toDoItems.filter(item => item.status === 'active').length} items left
                    </div>
                    <div className='flex-1 hidden md:flex justify-center gap-4  font-semibold'>
                        <div className={`${filterType === 'all' ? 'text-accent' : ''} cursor-pointer`} onClickCapture={() => {setFilterType('all')}}>
                            All
                        </div>
                        <div className={`${filterType === 'active' ? 'text-accent' : ''} cursor-pointer`} onClickCapture={() => {setFilterType('active')}}>
                            Active
                        </div>
                        <div className={`${filterType === 'completed' ? 'text-accent' : ''} cursor-pointer`} onClickCapture={() => {setFilterType('completed')}}>
                            Completed
                        </div>
                    </div>
                    <div className='cursor-pointer' onClickCapture={() => {dispatch({type: 'CLEAR_COMPLETED'})}}>
                        clear completed
                    </div>
                </li>
            </ul>

            <div className='flex justify-center gap-4 text-secondary p-4 bg-content rounded-md mt-4 shadow-lg font-semibold md:hidden'>
                <div className={`${filterType === 'all' ? 'text-accent' : ''} cursor-pointer`} onClickCapture={() => {setFilterType('all')}}>
                    All
                </div>
                <div className={`${filterType === 'active' ? 'text-accent' : ''} cursor-pointer`} onClickCapture={() => {setFilterType('active')}}>
                    Active
                </div>
                <div className={`${filterType === 'completed' ? 'text-accent' : ''} cursor-pointer`} onClickCapture={() => {setFilterType('completed')}}>
                    Completed
                </div>
            </div>
        </div>
    )
}
