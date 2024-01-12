'use client'
import React, {useState} from 'react'
import { createContext, useReducer, useContext } from 'react'
import commentsJson from '../_lib/data.json'
import { User, Reply, Comment } from '../_lib/type'

type DeleteInfo = {
  commentId: number;
  replyId?: number
}

type FormDataContextType = {
  commentsData: Comment[];
  dispatch: (action: ActionType) => void;
  currentUser: User;
  deleteInfo: DeleteInfo;
  setDeleteInfo: React.Dispatch<React.SetStateAction<DeleteInfo>>;
};

type ActionType =
  | { type: 'ADD_COMMENT'; payload: Comment }
  | { type: 'UPDATE_COMMENT'; payload: { id: number; content: string } }
  | { type: 'DELETE_COMMENT'; payload: number }
  | { type: 'ADD_REPLY'; payload: { commentId: number; reply: Reply } }
  | { type: 'UPDATE_REPLY'; payload: { commentId: number; replyId: number; content: string } }
  | { type: 'DELETE_REPLY'; payload: { commentId: number; replyId: number } };


const commentsReducer = (state: Comment[], action: ActionType) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.payload];

    case 'UPDATE_COMMENT':
      return state.map(comment => 
        comment.id === action.payload.id ? { ...comment, content: action.payload.content } : comment);

    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.payload);

    case 'ADD_REPLY':
      return state.map(comment =>
        comment.id === action.payload.commentId ? { ...comment, replies: [...comment.replies, action.payload.reply] } : comment);

    case 'UPDATE_REPLY':
      return state.map(comment =>
        comment.id === action.payload.commentId ? {
          ...comment,
          replies: comment.replies.map(reply =>
            reply.id === action.payload.replyId ? { ...reply, content: action.payload.content } : reply)
        } : comment);

    case 'DELETE_REPLY':
      return state.map(comment =>
        comment.id === action.payload.commentId ? {
          ...comment,
          replies: comment.replies.filter(reply => reply.id !== action.payload.replyId)
        } : comment);

    default:
      return state;
  }
};
  

const CommentsDataContext = createContext<FormDataContextType | undefined>(undefined);

export const CommentsDataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const comments = commentsJson.comments as Comment[];
  const [commentsData, dispatch] = useReducer(commentsReducer, comments);
  const [deleteInfo, setDeleteInfo] = useState<DeleteInfo>({commentId: -1})
  const currentUser = {
    "image": { 
      "png": "/interactive-comments/images/avatars/image-juliusomo.png",
      "webp": "/interactive-comments/images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  }
  return (
    <CommentsDataContext.Provider value={{ commentsData, dispatch, currentUser, deleteInfo, setDeleteInfo }}>
      {children}
    </CommentsDataContext.Provider>
  )
}

export const useCommentsData = () => {
  const context = useContext(CommentsDataContext);
  if (!context) {
    throw new Error('useCommentsData must be used within a CommentsDataProvider');
  }
  return context;
};
