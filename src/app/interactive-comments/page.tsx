'use client'
import React, { useState } from 'react'
import './style.css'
import { CommentsDataProvider } from './_context/CommentsDataContext'
import CommentList from './_components/CommentList'
import AddComment from './_components/AddComment'
export default function Page() {
  return (
    <div className='page-container'>
        <CommentsDataProvider>
          <div className="main-container max-w-2xl mx-auto px-4 py-6 pb-48">
                <CommentList />
          </div>
          <AddComment></AddComment>
        </CommentsDataProvider>
    </div>
  )
}
