import { useState } from "react";
import PatientApi from "@/features/patient/api/PatientApi";
import { validateFields } from "@/utils/wizardValidation";
import { PatientFields } from "../fields/PatientFields";
import { ConditionDetailsFields } from "../fields/ConditionDetailsFields";
import { AppointmentFields } from "../components/serviceSelectionStep/AppointmentFields";

export default function usePatientRegistrationWizard() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const initialFormData = {
    patient: {},

    conditions: {
      conditionDetails: {},
    },
    appointment: {
        patientId: null,
        serviceId: null, // در صورت نیاز (Service اصلی)
        installment: 1,
        round: 1,
        discount: 0,
        serviceFee: 0,
        totalFee: 0,
        meetDate: "",
        staffId: null,
        status: "",
        details: "",
      },

    services: {
      patientServices: [],
    },

    payment: {},
  };

  const [formData, setFormData] = useState(initialFormData);

  const nextStep = () => {
    if (!validateCurrentStep()) return;

    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };


  const updateSection = (section, value) => {
    setFormData((prev) => {
      if (Array.isArray(value)) {
        return { ...prev, [section]: value };
      }

      if (value !== null && typeof value === "object") {
        return {
          ...prev,
          [section]: {
            ...(prev[section] || {}),
            ...value,
          },
        };
      }
      return {
        ...prev,
        [section]: value,
      };
    });
  };




  const updateValue = (path, value) => {
    setFormData((prev) => {
      const updated = { ...prev };

      const key = path.split(".");

      let current = updated;

      for (let i = 0; i < key.length - 1; i++) {
        current[key[i]] = {
          ...(current[key[i]] || {}),
        };
        current = current[key[i]];
      }
      current[key[key.length - 1]] = value;
      return updated;
    });
  };


    const resetWizard = () => {
    setStep(1);
    setFormData(initialFormData);
  };

  
  console.log("Form Data", formData);

  const handleSubmit = async () => {
    await PatientApi.create(formData);
  };

  // ولیدیشن برای فیلد های ضروری برای هر مرحله
  const validateCurrentStep = () => {
    let validationError = {};

    switch (step) {
      case 1:
        validationError = validateFields(PatientFields, formData.patient);
        break;
      case 2:
        validationError = validateFields(
          ConditionDetailsFields,
          formData.conditions,
        );
        break;

      case 3:
        validationError = validateFields(
          AppointmentFields([], []), // یا fields فعلی
          formData.appointment,
        );
        break;

      case 4:
        validationError = validateFields(
          [
            {
              name: "totalFee",
              label: "مجموع فیس",
              required: true,
            },
            {
              name: "paidAmount",
              label: "مبلغ دریافت شده",
              required: true,
            },
            {
              name: "installment",
              label: "تعداد اقساط",
              required: true,
            },
          ],
          formData.payment,
        );
        break;
      default:
        validationError = {};
    }
      console.log("Validation Error:", validationError);
    setErrors(validationError);
    return Object.keys(validationError).length === 0;
  };

  return {
    step,

    formData,
    setFormData,

    nextStep,
    prevStep,
    goToStep,

    updateSection,
    updateValue,
    resetWizard,
    errors,
    setErrors,

    handleSubmit,

    isFirstStep: step === 1,
    isLastStep: step === 4,

    validateCurrentStep,
  };
}
