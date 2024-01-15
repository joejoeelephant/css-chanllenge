'use client'
import React, {createContext, useReducer, useContext} from 'react'
import { CartItem } from '../_lib/type'

type ActionType =
  | { type: 'ADD_PRODUCT'; payload: CartItem }
  | { type: 'DELETE_PRODUCT'; payload: number }

type CartDataContextType = {
  cartData: CartItem[];
  dispatch: (action: ActionType) => void;
};

const CartReducer = (state: CartItem[], action: ActionType) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const index = state.findIndex(item => item.id === action.payload.id);

      if (index !== -1) {
        // If the product is already in the cart, update its count
        return state.map((item, idx) => 
          idx === index ? { ...item, count: item.count + action.payload.count } : item
        );
      } else {
        // If the product is not in the cart, add it
        return [...state, action.payload];
      }
    }
    case 'DELETE_PRODUCT':
      // Remove the product from the cart
      return state.filter(item => item.id !== action.payload);

    default:
      // It's important to handle the default case
      return state;
  }
};

const CartDataContext = createContext<CartDataContextType | undefined>(undefined);

export const CartDataProvider = ({children}: {children: React.ReactNode}) => {
  const [cartData, dispatch] = useReducer(CartReducer, []);
  return (
    <CartDataContext.Provider value={{cartData, dispatch}}>
      {children}
    </CartDataContext.Provider>
  )
}

export const useCartData = () => {
  const context = useContext(CartDataContext);
  if (!context) {
    throw new Error('useCommentsData must be used within a CommentsDataProvider');
  }
  return context;
};

