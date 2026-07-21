import FeePaymentStep from "@/features/patient/components/FeePaymentStep";
import MedicalHistoryStep from "@/features/patient/components/MedicalHistoryStep";
import PatientSummary from "@/features/patient/components/PatientSummary";
import PersonalInfoStep from "@/features/patient/components/PersonalInfoStep";
import ServiceSelectionStep from "@/features/patient/components/ServiceSelectionStep";
import Stepper from "@/features/patient/components/Stepper";
import { useState } from "react";


export default function PatientRegistrationWizard() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    patient: {},
    medicalHistory: {},
    services: [],
    payment: {},
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          ثبت مریض جدید
        </h1>
      </div>

      <Stepper currentStep={step} />

      <div className="grid grid-cols-12 gap-6 mt-6">

        <div className="col-span-9 bg-white rounded-xl shadow p-6">

          {step === 1 && (
            <PersonalInfoStep
              data={data}
              setData={setData}
            />
          )}

          {step === 2 && (
            <MedicalHistoryStep
              data={data}
              setData={setData}
            />
          )}

          {step === 3 && (
            <ServiceSelectionStep
              data={data}
              setData={setData}
            />
          )}

          {step === 4 && (
            <FeePaymentStep
              data={data}
              setData={setData}
            />
          )}

          <div className="flex justify-between mt-8">

            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-2 rounded bg-gray-200"
              >
                قبلی
              </button>
            )}

            {step < 4 ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 rounded bg-blue-600 text-white"
              >
                مرحله بعد
              </button>
            ) : (
              <button
                className="px-6 py-2 rounded bg-green-600 text-white"
              >
                ثبت مریض و ایجاد پلان درمان
              </button>
            )}

          </div>

        </div>

        <div className="col-span-3">
          <PatientSummary data={data} />
        </div>

      </div>
    </div>
  );
}