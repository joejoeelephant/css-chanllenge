'use client'
import React, { useState, useRef } from 'react'
import './CommentItem.css'
import Image from 'next/image'
import { Comment } from '../_lib/type'
import { useCommentsData } from '../_context/CommentsDataContext'
import CommentReply from './CommentReply'
export default function CommentItem({commentData}: {commentData: Comment}) {
    const {currentUser, dispatch, setDeleteInfo} = useCommentsData()
    const [showReply, setShowReply] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const contentRef = useRef<HTMLTextAreaElement | null>(null)

    const toggleReply = () => {
        setShowReply(prev => !prev)
    }
    const updateComment = () => {
        if(!contentRef.current) return;
        const content = contentRef.current.value
        dispatch({ type: 'UPDATE_COMMENT', payload: { id: commentData.id, content: content}})
        setShowEdit(false)
    }
    const deleteComment = () => {
        setDeleteInfo({
            commentId: commentData.id,
        })
    }
    return (
        <div className='mb-4'>
            <div className='comment-container bg-white p-4 rounded-md'>
                <div className="comment-title flex gap-3 items-center">
                    <div className='w-8 aspect-square rounded-full overflow-hidden'>
                        <Image src={commentData.user.image.png} alt='avatar' width={64} height={64} className='w-full'></Image>
                    </div>
                    <div className='text-primary font-bold'>
                        {commentData.user.username}
                    </div>
                    <div className='text-secondary'>
                        {commentData.createdAt}
                    </div>
                </div>
                <div className="comment-content py-4 text-secondary">
                    {
                        showEdit ?
                        (
                            <div>
                                <div>
                                    <textarea name="content" className='w-full h-auto p-2 border resize-none' 
                                        ref={contentRef}
                                        rows={6}
                                        defaultValue={commentData.content}>
                                    </textarea>
                                </div>
                                <div className='w-28 text-center ml-auto py-2 px-4 bg-moderate-blue text-white rounded-md uppercase cursor-pointer active:opacity-65 select-none' onClickCapture={updateComment}>
                                    update
                                </div>
                            </div>
                        )
                        :
                        commentData.content
                    }
                </div>
                <div className="comment-number">
                    <div className='flex md:flex-col md:mr-4 md:justify-center bg-gray-100 gap-3 px-2 py-1 md:py-4 items-center rounded-md'>
                        <div className='w-4 flex justify-center items-center aspect-square cursor-pointer active:opacity-65 select-none'>
                            <Image src={'/interactive-comments/images/icon-plus.svg'} width={11} height={11} alt='plus' className='w-9/12'></Image>
                        </div>
                        <div className='text-accent font-semibold'>
                            {commentData.score}
                        </div>
                        <div className='w-4 flex justify-center items-center aspect-square cursor-pointer active:opacity-65 select-none'>
                            <Image src={'/interactive-comments/images/icon-minus.svg'} width={11} height={11} alt='plus' className='w-9/12'></Image>
                        </div>
                    </div>
                </div>
                <div className="comment-reply flex items-center gap-2">
                        {
                            commentData.user.username !== currentUser.username ?
                            (
                                <div className='flex items-center gap-2 cursor-pointer' onClick={toggleReply}>
                                    <div className='w-3'>
                                        <Image src={'/interactive-comments/images/icon-reply.svg'} width={11} height={11} alt='plus' className='w-full'></Image>
                                    </div>
                                    <div className='font-bold text-accent'>
                                        {showReply ? 'Undo' : 'Reply'}
                                    </div>
                                </div>
                            ):
                            (
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-2 cursor-pointer' onClickCapture={deleteComment}>
                                        <div className='w-3'>
                                            <Image src={'/interactive-comments/images/icon-delete.svg'} width={11} height={11} alt='plus' className='w-full'></Image>
                                        </div>
                                        <div className=' text-red-500'>
                                            Delete
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer active:opacity-65' onClick={() => {setShowEdit(prev => !prev)}}>
                                        <div className='w-3'>
                                            <Image src={'/interactive-comments/images/icon-edit.svg'} width={11} height={11} alt='plus' className='w-full'></Image>
                                        </div>
                                        <div className=' text-accent'>
                                            {showEdit ? 'undo' : 'Edit'}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                </div>
            </div>
            {
                showReply &&
                <CommentReply commentId={commentData.id} replyUser={commentData.user}/>
            }
        </div>
    )
}
