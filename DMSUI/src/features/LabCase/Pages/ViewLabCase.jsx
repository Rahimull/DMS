
import { useNavigate, useParams } from "react-router-dom";

import {
  AlertCircle,
  ArrowRight,
  FlaskConical,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";



import LabCaseHeader from "../components/View/LabCaseHeader";
import PatientDoctorCard from "../components/View/PatientDoctorCard";
import LabCard from "../components/View/LabCard";
import FinancialCard from "../components/View/FinancialCard";
import CaseDetailsCard from "../components/View/CaseDetailsCard";
import CaseTimeline from "../components/View/CaseTimeline";
import CaseNotes from "../components/View/CaseNotes";

import useLabCase from "../hooks/useLabCase";

export default function ViewLabCase() {

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    labCase,
    loading,
    error,
    refetch,
  } = useLabCase(id);


  /* =============================================
     LOADING
  ============================================= */

  if (loading) {

    return (
      <div
        dir="rtl"
        className="flex min-h-[650px] items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100"
      >

        <div className="text-center">

          <div className="relative mx-auto flex h-24 w-24 items-center justify-center">

            <div className="absolute inset-0 animate-ping rounded-[2rem] bg-blue-300/30" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/30">

              <Loader2
                size={34}
                className="animate-spin"
              />

            </div>

          </div>


          <h3 className="mt-6 text-lg font-black text-slate-700">
            در حال دریافت اطلاعات کیس
          </h3>


          <p className="mt-2 text-sm text-slate-400">
            لطفاً چند لحظه منتظر بمانید...
          </p>

        </div>

      </div>
    );
  }


  /* =============================================
     ERROR
  ============================================= */

  if (error) {

    return (
      <div
        dir="rtl"
        className="flex min-h-[650px] items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-4"
      >

        <div className="w-full max-w-md rounded-[2rem] border border-white bg-white/90 p-8 text-center shadow-2xl shadow-blue-900/10">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-600">

            <AlertCircle size={34} />

          </div>


          <h2 className="mt-6 text-xl font-black text-slate-800">
            خطا در دریافت اطلاعات
          </h2>


          <p className="mt-3 text-sm leading-7 text-slate-500">
            {error}
          </p>


          <div className="mt-6 flex justify-center gap-3">

            <Button
              variant="outline"
              onClick={() => navigate("/lab-cases")}
              className="gap-2 rounded-xl"
            >

              <ArrowRight size={17} />

              برگشت

            </Button>


            <Button
              onClick={refetch}
              className="rounded-xl bg-gradient-to-l from-blue-600 to-indigo-700"
            >

              تلاش دوباره

            </Button>

          </div>

        </div>

      </div>
    );
  }


  if (!labCase) return null;


  /* =============================================
     PAGE
  ============================================= */

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-300/10 blur-3xl" />

        <div className="absolute -left-48 top-[450px] h-[520px] w-[520px] rounded-full bg-indigo-300/10 blur-3xl" />

      </div>


      <div className="relative mx-auto  px-4 py-6 sm:px-6 lg:px-8 lg:py-8">


        {/* HEADER */}

        <LabCaseHeader
          labCase={labCase}
          onBack={() => navigate("/LabCase")}
          onEdit={() =>
            navigate(`/lab-cases/edit/${labCase.id}`)
          }
        />


        {/* BENTO GRID */}

        <div className="mt-6 grid gap-5 xl:grid-cols-12">

          <PatientDoctorCard
            labCase={labCase}
          />


          <LabCard
            labCase={labCase}
          />


          <FinancialCard
            labCase={labCase}
          />


          <CaseDetailsCard
            labCase={labCase}
          />


          <CaseTimeline
            labCase={labCase}
          />


          <CaseNotes
            labCase={labCase}
          />

        </div>

      </div>

    </main>
  );
}

