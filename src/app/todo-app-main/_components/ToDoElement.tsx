import React from 'react'
import { ToDoItem } from '../_lib/type'
import { useToDoData } from '../_context/ToDoContext'
import { useDrag, useDrop, DndProvider } from 'react-dnd';

import Image from 'next/image'

export default function ToDoElement({itemData, index, moveItem}: {itemData: ToDoItem, moveItem: Function; index: number}) {
    const {dispatch} = useToDoData()

    const deleteItem = (id: number) => {
        dispatch({type: "DELETE_ITEM", payload: id})
    }

    const setCompleted = (id: number) => {
        dispatch({type: 'SET_COMPLETED', payload: id})
    }

    const [{ isDragging }, dragRef] = useDrag({
        type: 'BOX',
        item: { type: 'BOX', id: itemData.id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
      });
    
    const [, dropRef] = useDrop({
        accept: 'BOX',
        hover: (draggedItem: { type: string; id: number; index: number }) => {
            if (draggedItem.id !== itemData.id) {
            moveItem(draggedItem.id, itemData.id);
            }
        },
    });
    return (
        <li 
            ref={(node) => dragRef(dropRef(node))}
            className={`flex items-center bg-content gap-3 p-4 border-b border-color ${isDragging ? 'cursor-grabbing brightness-75' : 'cursor-grab'}`}
        >
            <div 
                onClickCapture={() => {setCompleted(itemData.id)}}
                className={`border-2 w-6 h-6 border-circle-color rounded-full flex justify-center items-center cursor-pointer ${itemData.status === 'completed' ? 'todo-checked' : ''}`}
            >
                <Image src={'/todo-app-main/images/icon-check.svg'} alt='check' width={11} height={9}></Image>
            </div>
            <div className={`flex-1 max-w-[40rem] break-words ${itemData.status === 'completed' ? ' text-secondary line-through ' : ''}`}>
                {itemData.content}
            </div>
            <div className='w-4 cursor-pointer' onClickCapture={() => {deleteItem(itemData.id)}}>
                <Image src={'/todo-app-main/images/icon-cross.svg'} alt='cross' width={18} height={18} className='w-full'></Image>
            </div>
        </li>
    )
}
