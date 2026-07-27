import { Save, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import usePatientRegistrationWizard from "@/features/patient/hooks/usePatientRegistrationWizard";

import Stepper from "@/features/patient/components/Stepper";
import PatientSummary from "@/features/patient/components/PatientSummary";

import PersonalInfoStep from "@/features/patient/components/PersonalInfoStep";
import MedicalHistoryStep from "@/features/patient/components/MedicalHistoryStep";
import ServiceSelectionStep from "@/features/patient/components/ServiceSelectionStep";
import FeePaymentStep from "@/features/patient/components/FeePaymentStep";
import PatientApi from "@/features/patient/api/PatientApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const STEP_TITLES = {
  1: {
    title: "معلومات شخصی",
    description: "ثبت مشخصات و معلومات اولیه مریض",
  },

  2: {
    title: "تاریخچه صحی",
    description: "ثبت سوابق و وضعیت صحی مریض",
  },

  3: {
    title: "تنظیم جلسه درمان",
    description: "انتخاب خدمات، داکتر و ضروریات درمان",
  },

  4: {
    title: "فیس و پرداخت",
    description: "ثبت هزینه، تخفیف و نحوه پرداخت",
  },
};

export default function PatientRegistrationWizard() {
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
  } = usePatientRegistrationWizard();

  const navigate = useNavigate();

  const currentStep = STEP_TITLES[step];


  const handleSubmit = async () => {
    try{
      const success = await PatientApi.register(formData);

      toast.success("مریض با موفقیت ثتب شد.")
      console.log(success)
      navigate("/patients");
    }catch(error){
      toast.error("ثبت مریض انجام نشد.")
      console.log(error);
       console.log(error.response?.data);
    }
  }

  return (
    <div className="space-y-5">
      {/* ================= Header ================= */}

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          bg-white
          shadow-sm
        "
      >
        {/* Top */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b

            bg-gradient-to-r
            from-blue-600
            to-indigo-600

            px-6
            py-4

            text-white
          "
        >
          <div>
            <h2 className="text-2xl font-bold">ثبت مریض جدید</h2>

            <p className="mt-1 text-sm text-blue-100">
              {currentStep.description}
            </p>
          </div>

          <div
            className="
              rounded-full
              bg-white/20
              px-5
              py-2

              text-sm
              font-semibold
            "
          >
            مرحله {step} از 4
          </div>
        </div>

        {/* Stepper */}

        <div className="px-6 py-4">
          <Stepper currentStep={step} />
        </div>
      </div>

      {/* ================= Body ================= */}

      <div className="grid grid-cols-12 gap-5">
        {/* Left */}

        <div className="col-span-8">
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              bg-white
              shadow-sm
            "
          >
            {/* Step Header */}

            <div
              className="
                border-b
                bg-slate-50

                px-6
                py-5
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-800
                "
              >
                {currentStep.title}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                "
              >
                {currentStep.description}
              </p>
            </div>

            {/* Step Content */}

            <div className="p-6">
              {step === 1 && (
                <PersonalInfoStep
                  formData={formData}
                  updateSection={updateSection}
                  errors={errors}
                />
              )}

              {step === 2 && (
                <MedicalHistoryStep
                  formData={formData}
                  updateSection={updateSection}
                  errors={errors}
                />
              )}

              {step === 3 && (
                <ServiceSelectionStep
                  formData={formData}
                  updateSection={updateSection}
                  updateValue={updateValue}
                  errors={errors}
                />
              )}

              {step === 4 && (
                <FeePaymentStep
                  formData={formData}
                  updateSection={updateSection}
                  updateValue={updateValue}
                  errors={errors}
                />
              )}
            </div>

            {/* Footer */}

            <div
              className="
                flex
                items-center
                justify-between

                border-t

                bg-slate-50

                px-6
                py-4
              "
            >
              <div>
                {!isFirstStep && (
                  <Button variant="outline" onClick={prevStep}>
                    <ChevronRight size={18} />
                    قبلی
                  </Button>
                )}
              </div>

              <div>
                {!isLastStep ? (
                  <Button onClick={nextStep}>
                    مرحله بعد
                    <ChevronLeft size={18} />
                  </Button>
                ) : (
                  <Button
                    className="
                      bg-emerald-600
                      hover:bg-emerald-700
                    "
                    onClick={()=>{
                      if(validateCurrentStep()){
                        handleSubmit();
                      }
                    }}
                  >
                    <Save size={18} />
                    ثبت مریض و ایجاد پلان درمان
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="col-span-4">
          <PatientSummary data={formData} />
        </div>
      </div>
    </div>
  );
}
