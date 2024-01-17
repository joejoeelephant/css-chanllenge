'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { ToDoItem } from '../_lib/type'
import ToDoElement from './ToDoElement'
import { useToDoData } from '../_context/ToDoContext'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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

    const moveItem = (dragId: number, hoverId: number) => {
        dispatch({type: 'DRAG_REORDER', payload: {dragId, dropId: hoverId}})
    };
    return (
        <div className='w-full mt-4'>
            <DndProvider backend={HTML5Backend}>
                <ul className='rounded-md overflow-hidden shadow-lg relative max-h-[50vh] overflow-y-scroll todo-list-container'>
                    {
                        todoList.map((item, index) => {
                            return (
                                <ToDoElement key={item.id} itemData={item} index={index} moveItem={moveItem}/>
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
            </DndProvider>
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
