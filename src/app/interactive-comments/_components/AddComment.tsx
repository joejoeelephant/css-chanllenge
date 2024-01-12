'use client'
import React, {useRef } from 'react'
import './AddComment.css'
import Image from 'next/image'
import { useCommentsData } from '../_context/CommentsDataContext'
export default function AddComment() {
    const contentRef = useRef<HTMLTextAreaElement | null>(null)
    const {dispatch, currentUser}  = useCommentsData()
    const sendComment = () => {
        if(!contentRef.current) return;
        const newComment = {
            id: Math.floor(Math.random() * 100 + 4),
            content: contentRef.current.value,
            createdAt: '1 days ago',
            score: 0,
            user:currentUser,
            replies: []
        }
        dispatch({ type: 'ADD_COMMENT', payload: newComment })
        contentRef.current.value = ""
    }
    return (
            <div className='w-full fixed left-0 bottom-0 md:bottom-4'>
                <div className='comment-add-container max-w-2xl mx-auto p-4 bg-white rounded-md shadow'>
                    <div className="comment-add-avatar flex items-center md:items-start">
                        <div className='w-8 aspect-square rounded-full overflow-hidden'>
                            <Image src={'/interactive-comments/images/avatars/image-juliusomo.png'} alt='avatar' width={64} height={64} className='w-full'></Image>
                        </div>
                    </div>

                    <div className="comment-add-inputBox">
                        <textarea name="content" ref={contentRef} id="" className='w-full border border-gray-200 rounded-md p-2 min-h-28 unresizable-textarea' ></textarea>
                    </div>

                    <div className="comment-add-button">
                        <div className='py-2 px-4 bg-moderate-blue text-white rounded-md uppercase cursor-pointer active:opacity-65 select-none' onClick={sendComment}>
                            Send
                        </div>
                    </div>
                </div>
        </div>
    )
}
