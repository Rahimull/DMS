import usePatientRegistrationWizard from "@/features/patient/hooks/usePatientRegistrationWizard";

import FeePaymentStep from "@/features/patient/components/FeePaymentStep";
import MedicalHistoryStep from "@/features/patient/components/MedicalHistoryStep";
import PatientSummary from "@/features/patient/components/PatientSummary";
import PersonalInfoStep from "@/features/patient/components/PersonalInfoStep";
import ServiceSelectionStep from "@/features/patient/components/ServiceSelectionStep";
import Stepper from "@/features/patient/components/Stepper";

export default function PatientRegistrationWizard() {

  const {
    step,
    formData,
    updateSection,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = usePatientRegistrationWizard();

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          ثبت مریض جدید
        </h1>
      </div>

      <Stepper currentStep={step} />

      <div className="grid grid-cols-12 gap-6 mt-6">

        <div className="col-span-9 bg-white rounded-xl shadow p-6">

          {step === 1 && (
            <PersonalInfoStep
              formData={formData}
              updateSection={updateSection}
            />
          )}

          {step === 2 && (
            <MedicalHistoryStep
              formData={formData}
              updateSection={updateSection}
            />
          )}

          {step === 3 && (
            <ServiceSelectionStep
              formData={formData}
              updateSection={updateSection}
            />
          )}

          {step === 4 && (
            <FeePaymentStep
              formData={formData}
              updateSection={updateSection}
            />
          )}

          <div className="flex justify-between mt-8">

            {!isFirstStep && (
              <button
                onClick={prevStep}
                className="
                  px-6
                  py-2
                  rounded-lg
                  bg-slate-200
                "
              >
                قبلی
              </button>
            )}

            {!isLastStep ? (
              <button
                onClick={nextStep}
                className="
                  px-6
                  py-2
                  rounded-lg
                  bg-blue-600
                  text-white
                "
              >
                مرحله بعد
              </button>
            ) : (
              <button
                className="
                  px-6
                  py-2
                  rounded-lg
                  bg-green-600
                  text-white
                "
              >
                ثبت مریض و ایجاد پلان درمان
              </button>
            )}

          </div>

        </div>

        <div className="col-span-3">
          <PatientSummary formData={formData} />
        </div>

      </div>

    </div>
  );
}