import { Save, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";




import PatientSummary from "@/features/patient/components/PatientSummary";

import MedicalHistoryStep from "@/features/patient/components/MedicalHistoryStep";
import ServiceSelectionStep from "@/features/patient/components/ServiceSelectionStep";
import FeePaymentStep from "@/features/patient/components/FeePaymentStep";

import PatientApi from "@/features/patient/api/PatientApi";

import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAppointmentWizard from "@/features/patient/hooks/useAppointmentWizard";
import AppointmentStepper from "@/features/patient/components/AppointmentStepper";

const STEP_TITLES = {
  1: {
    title: "تاریخچه صحی",
    description: "ثبت سوابق و وضعیت صحی مریض",
  },

  2: {
    title: "خدمات درمانی",
    description: "انتخاب خدمات، داکتر و پلان درمان",
  },

  3: {
    title: "فیس و پرداخت",
    description: "ثبت هزینه، تخفیف و نحوه پرداخت",
  },
};

export default function AppointmentWizard() {
  const {state} = useLocation();
  const patientData = state?.patientData;

  console.log("Appointment Wizard:", patientData)
  const {
    step,
    formData,
    errors,

    updateSection,
    updateValue,

    nextStep,
    prevStep,

    isFirstStep,
    isLastStep,

    validateCurrentStep,
  } = useAppointmentWizard();

  

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const currentStep = STEP_TITLES[step];

  const handleNext = () => {
    if (validateCurrentStep()) {
      nextStep();
    }
  };
 useEffect(()=>{
  if(!patientData) return;
  updateSection("patient", patientData)
  updateSection("appointment",{
     patientId:patientData?.id,
  });
 },[patientData]);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await PatientApi.appointment(formData);

      toast.success("مریض با موفقیت ثبت شد.");

      navigate("/patients");
    } catch (error) {
      console.error(error);
      console.log("Back-end Response: ", error?.response);

      toast.error("ثبت مریض انجام نشد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      {/* Header */}

      <div
        className="overflow-hidden rounded-[10px] border bg-white shadow-sm"
      >
        <div
          className="flex items-center justify-between bg-gradient-to-r from-blue-400 to-indigo-600 px-6  py-1 text-white"
        >
          <div>
            <h4
              className="text-xl"
            >
              ثبت مریض جدید
            </h4>

            <p
              className=" mt-1 text-sm text-blue-100"
            >
              {currentStep.description}
            </p>
          </div>

          <div
            className=" rounded-full bg-white/20 px-5 py-2 text-sm font-bold "
          >
            مرحله {step} از 3
          </div>
        </div>

        <div className="px-6 py-1">
          <AppointmentStepper currentStep={step} />
        </div>
      </div>

      {/* Content */}

      <div
        className=" grid grid-cols-1 gap-2 xl:grid-cols-12 "
      >
        {/* Form */}

        <div
          className="xl:col-span-8"
        >
          <div
            className=" overflow-hidden rounded-[10px] border bg-white shadow-lg "
          >
            <div className=" border-b bg-slate-50 px-3 py-3 "
            >
              <h4
                className=" text font-bold text-slate-800 "
              >
                {currentStep.title}
              </h4>

              <p
                className=" mt-1 text-sm text-slate-500 "
              >
                {currentStep.description}
              </p>
            </div>

            <div className="">
              {step === 1 && (
                <MedicalHistoryStep
                  formData={formData}
                  updateSection={updateSection}
                  errors={errors}
                />
              )}

              {step === 2 && (
                <ServiceSelectionStep
                  formData={formData}
                  updateSection={updateSection}
                  updateValue={updateValue}
                  errors={errors}
                />
              )}

              {step === 3 && (
                <FeePaymentStep
                  formData={formData}
                  updateSection={updateSection}
                  updateValue={updateValue}
                  errors={errors}
                />
              )}
            </div>

            <div
              className=" flex items-center justify-between border-t bg-slate-50 px-6 py-4 "
            >
              <Button
                variant="outline"
                disabled={isFirstStep}
                onClick={prevStep}
              >
                <ChevronRight />
                قبلی
              </Button>

              {!isLastStep ? (
                <Button onClick={handleNext}>
                  مرحله بعد
                  <ChevronLeft />
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  onClick={handleSubmit}
                  className=" bg-emerald-600 hover:bg-emerald-700
"
                >
                  {loading ? (
                    <Loader2
                      className=" mr-2 animate-spin "
                    />
                  ) : (
                    <Save />
                  )}
                  ثبت جلسه جدید
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}

        <div
          className="xl:col-span-4"
        >
          <PatientSummary data={formData} />
        </div>
      </div>
    </div>
  );
}
