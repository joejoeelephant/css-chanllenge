// FormDataContext.tsx
import React, { createContext, useState, useContext } from 'react';

type FormData = {
    step: number;
    name: string;
    email: string;
    phone: string;
    plan: string;
    addOns: string[];
    period: string;
};

type ErrorData = {
  name: string;
  email: string;
  phone: string;
}

type PlanData = {
  icon: string;
  name: string,
  price: number
}

type AddOnsData = {
  name: string;
  description: string;
  price: number;
}

type FormDataContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errorData: ErrorData;
  setErrorData: React.Dispatch<React.SetStateAction<ErrorData>>;
  plansData: PlanData[];
  addOnsData: AddOnsData[]
};

// Creating a context with a default value
const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const FormDataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({
        step: 1,
        name: '',
        email: '',
        phone: '',
        plan: 'Arcade',
        addOns: [],
        period: 'month',
    });

    const [errorData, setErrorData] = useState<ErrorData>({
        name: '',
        email: '',
        phone: '',
    })

    const plansData = [
      {
          icon: '/multi-step-form-main/assets/images/icon-arcade.svg',
          name: 'Arcade',
          price: 9
      },
      {
          icon: '/multi-step-form-main/assets/images/icon-advanced.svg',
          name: 'Advanced',
          price: 12
      },
      {
          icon: '/multi-step-form-main/assets/images/icon-pro.svg',
          name: 'Pro',
          price: 15
      }
    ]

    const addOnsData = [
        {
          name: 'Online service',
          description: 'Access to mutiplayer games.',
          price: 1,
        },
        {
            name: 'Larger storage',
            description: 'Extra of 1TB cloud save.',
            price: 2,

        },
        {
            name: 'Customizable profile',
            description: 'Custom theme on your profile.',
            price: 2,
        }
    ]

    return (
        <FormDataContext.Provider value={{ formData, setFormData, errorData, setErrorData, plansData, addOnsData }}>
            {children}
        </FormDataContext.Provider>
    );
};

// Custom hook for using FormData context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
