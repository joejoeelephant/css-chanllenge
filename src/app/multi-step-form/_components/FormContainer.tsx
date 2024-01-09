'use client'
import React from 'react'
import PersonalInfo from './PersonalInfo'
import SelectPlan from './SelectPlan'
import AddOns from './AddOns'
import FinishingUp from './FinishingUp'
import ThankYou from './ThankYou'
import { useFormData } from '../_context/FormDataContext'
export default function FormContainer() {
    const {formData, setFormData} = useFormData()
    const {step} = formData
    const renderStepComponent = () => {
        switch (step) {
          case 1:
            return <PersonalInfo />;
          case 2:
            return <SelectPlan />;
          case 3:
            return <AddOns />;
          case 4:
            return <FinishingUp />;
          case 5:
            return <ThankYou />;
          default:
            return null; // or a default component
        }
      };
    return (
        <div className="form-container">
            {renderStepComponent()}
        </div>
    )
}
