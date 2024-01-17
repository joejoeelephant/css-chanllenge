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
      const dragIndex = state.findIndex(item => item.id === action.payload.dragId);
      const dropIndex = state.findIndex(item => item.id === action.payload.dropId);
    
      if (dragIndex < 0 || dropIndex < 0) {
        return state; // Return the original state if either id is not found
      }
    
      const result = Array.from(state); // Create a new array to avoid mutating the original state
      const [removed] = result.splice(dragIndex, 1); // Remove the dragged item from its original position
      result.splice(dropIndex, 0, removed); // Insert the dragged item at the new position
    
      return result;
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
    let id = 1;
    const demoData: ToDoItem[] = Array.from({length: 8}).map((item, index) => {
      return {
        id: index,
        content: "Lorem ipsum dolor sit amet." + index,
        status: 'active'
      }
    })
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