'use client'
import React, {useState} from 'react'
import { useCommentsData } from '../_context/CommentsDataContext'
import Dialog from './Dialog'
import Comment from './Comment'
export default function CommentList() {
    const {commentsData, dispatch, deleteInfo, setDeleteInfo} = useCommentsData()
    const deleteAction = () => {
        if(deleteInfo.replyId) {
            dispatch({ type: 'DELETE_REPLY', payload: { commentId: deleteInfo.commentId, replyId: deleteInfo.replyId }})
            hideDialog()
            return;
        }
        dispatch({ type: 'DELETE_COMMENT', payload: deleteInfo.commentId})
        hideDialog()
    }

    const hideDialog = () => {setDeleteInfo(prev => {return {...prev, commentId: -1}})}
    return (
        <div>
            {
                commentsData.map(item => {
                    return (
                        <Comment key={item.id} commentData={item}/>
                    )
                })
            }
            <Dialog isVisible={deleteInfo.commentId !== -1} title='Delete Comment' confirm={deleteAction} cancle={hideDialog}>
                <div>
                    Are you sure to delete the comment?
                </div>
            </Dialog>
        </div>
    )
}
