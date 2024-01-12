import React from 'react'
import CommentItem from './CommentItem'
import ReplyItem from './ReplyItem'
import { Comment } from '../_lib/type'

export default function Comment({commentData}: {commentData: Comment}) {
  return (
    <div>
        <CommentItem commentData={commentData}></CommentItem>
        {
          commentData.replies.length > 0 &&
          (
            <div className='border-l pl-4 mt-4'>
              {
                commentData.replies.map(item => {
                  return (
                    <ReplyItem key={item.id} commentId={commentData.id} replyData={item} />
                  )
                })
              }
            </div>
          )
        }
    </div>
  )
}
