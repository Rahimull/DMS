import { useState } from "react";

export default function usePatientRegistrationWizard() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    patient: {},
    medicalHistory: {},
    services: [],
    payment: {},
  });

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const updateSection = (
    section,
    values
  ) => {
    setData((prev) => ({
      ...prev,

      // {
      //   ...prev[section],
      //   ...values,
      // },
    }));
  };

  const resetWizard = () => {
    setStep(1);

    setData({
      patient: {},
      medicalHistory: {},
      services: [],
      payment: {},
    });
  };

  const isFirstStep = step === 1;
  const isLastStep = step === 4;

  return {
    step,
    data,
    setData,

    nextStep,
    prevStep,
    goToStep,

    updateSection,
    resetWizard,

    isFirstStep,
    isLastStep,
  };
}