import React, { createContext, useReducer, useContext } from 'react';
import { ToDoItem } from '../_lib/type';
type ToDoAction =
  | { type: 'ADD_ITEM'; payload: ToDoItem }
  | { type: 'DELETE_ITEM'; payload: number }
  | { type: 'SET_COMPLETED'; payload: number}
  | { type: 'CLEAR_COMPLETED'}
  | { type: 'DRAG_REORDER'; payload: {dragId: number, dropId: number}};

const toDoReducer = (state: ToDoItem[], action: ToDoAction): ToDoItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'SET_COMPLETED':
      return state.map(item => item.id === action.payload ? {...item, status: 'completed'} : item);
    case 'CLEAR_COMPLETED':
      return state.filter(item => item.status !== 'completed');
    case 'DRAG_REORDER': {
      const dragItem = state.find(item => item.id === action.payload.dragId)
      const temp = state.filter(item => item.id !== action.payload.dragId)
      const dropIndex = temp.findIndex(item => item.id === action.payload.dropId)
      if (dropIndex !== -1 && dragItem) {
        // Insert the new item before the target item
        temp.splice(dropIndex, 0, dragItem);
      }
      return temp
    }
    default:
      return state;
  }
};

type ToDoContextType = {
    toDoItems: ToDoItem[];
    dispatch: React.Dispatch<ToDoAction>;
  };

const ToDoContext = createContext<ToDoContextType | undefined>(undefined);

export const ToDoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const demoData: ToDoItem[] = [
        {
            id: Math.ceil(Math.random() * 100),
            content: 'Lorem, ipsum dolor1.',
            status: 'active'
        },
        {
            id: Math.ceil(Math.random() * 100),
            content: 'Lorem, ipsum dolor2.',
            status: 'completed'
        },
        {
            id: Math.ceil(Math.random() * 100) ,
            content: 'Lorem, ipsum dolor3.',
            status: 'active'
        },
        {
            id: Math.ceil(Math.random() * 100),
            content: 'Lorem, ipsum dolor4.',
            status: 'active'
        },
        {
            id: Math.ceil(Math.random() * 100),
            content: 'Lorem, ipsum dolor5.',
            status: 'completed'
        },
        {
            id: Math.ceil(Math.random() * 100) ,
            content: 'Lorem, ipsum dolor6.',
            status: 'active'
        },
        {
            id: Math.ceil(Math.random() * 100),
            content: 'Lorem, ipsum dolor7.',
            status: 'active'
        },
        {
            id: Math.ceil(Math.random() * 100),
            content: 'Lorem, ipsum dolor11.',
            status: 'completed'
        },
        {
            id: Math.ceil(Math.random() * 100) ,
            content: 'Lorem, ipsum dolor12313123.',
            status: 'active'
        }
    ]
    const [toDoItems, dispatch] = useReducer(toDoReducer, demoData);

    return (
        <ToDoContext.Provider value={{ toDoItems, dispatch }}>
          {children}
        </ToDoContext.Provider>
    );
};

export const useToDoData = () => {
    const context = useContext(ToDoContext);
    if (!context) {
        throw new Error('useToDo must be used within a ToDoProvider');
    }
    return context;
};