import { useState } from "react";
import PatientApi from "@/features/patient/api/PatientApi";
import { describe } from "zod/v4/core";

export default function usePatientRegistrationWizard() {

  const [step, setStep] = useState(1);
  const initialFormData = {
    patient: {},
    conditions: {
      conditionDetails: {},
    },
    services: [],
    payment: {},
  }

  const [formData, setFormData] = useState(initialFormData);

  const nextStep = () => {
    setStep((prev) =>
      Math.min(prev + 1, 4)
    );
  };

  const prevStep = () => {
    setStep((prev) =>
      Math.max(prev - 1, 1)
    );
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const updateSection = (section, value) => {
  setFormData((prev) => {
    if (Array.isArray(value)){
      return { ...prev, [section]:value};
    }

    if (value !== null && typeof value === "object"){
      return {
        ...prev, [section]: {
          ...(prev[section] || {}),
          ...value,
        },
      };
    }
    return {
      ...prev,
      [section]: value
};

  });
};

  const resetWizard = () => {
    setStep(1);
    setFormData(initialFormData);
  };

  console.log("Form Data",formData)

  const handleSubmit = async () => {
    await PatientApi.create(formData);
  };

  return {
    step,

    formData,
    setFormData,

    nextStep,
    prevStep,
    goToStep,

    updateSection,
    resetWizard,

    handleSubmit,

    isFirstStep: step === 1,
    isLastStep: step === 4,
  };
}