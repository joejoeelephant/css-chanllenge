'use client'
import React, {useRef} from 'react'
import './AddComment.css'
import Image from 'next/image'
import { User } from '../_lib/type'
import { useCommentsData } from '../_context/CommentsDataContext'

type CommentReplyProps = {
    replyUser: User;
    commentId: number
}

export default function CommentReply({replyUser, commentId}: CommentReplyProps) {
    const contentRef = useRef<HTMLTextAreaElement | null>(null)
    const {dispatch, currentUser}  = useCommentsData()
    const sendReply = () => {
        if(!contentRef.current) return;
        const newReply = {
            id: Math.floor(Math.random() * 100 + 4),
            content: contentRef.current.value,
            createdAt: '1 days ago',
            score: 0,
            replyingTo: replyUser.username,
            user:currentUser
        }
        dispatch({ type: 'ADD_REPLY', payload: { commentId: commentId, reply: newReply } })
        contentRef.current.value = ""
    }
    return (
        <div className='w-full my-4'>
            <div className='comment-add-container max-w-2xl mx-auto p-4 bg-white rounded-md shadow'>
                <div className="comment-add-avatar flex items-center md:items-start">
                    <div className='w-8 aspect-square rounded-full overflow-hidden'>
                        <Image src={'/interactive-comments/images/avatars/image-juliusomo.png'} alt='avatar' width={64} height={64} className='w-full'></Image>
                    </div>
                </div>

                <div className="comment-add-inputBox">
                    <textarea name="content" ref={contentRef} className='w-full border border-gray-200 rounded-md p-2 min-h-28 unresizable-textarea' ></textarea>
                </div>

                <div className="comment-add-button">
                    <div className='py-2 px-4 bg-moderate-blue text-white rounded-md uppercase cursor-pointer active:opacity-65 select-none' onClick={sendReply}>
                        Reply
                    </div>
                </div>
            </div>
        </div>
    )
}
