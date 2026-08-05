import {
  MapPin,
  Phone,
   Plus,
  User,
  Wallet,
  Activity,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import InfoChip from "@/features/patient/components/Details/InfoChip";
import SummaryBox from "@/features/patient/components/Details/SummaryBox";
import SummaryCard from "@/features/patient/components/SummaryCard";
import PaymentCard from "@/features/patient/components/Details/PaymentCard";
import ConditionCard from "../../features/patient/components/Details/ConditionCard";
import ServicesCard from "@/features/patient/components/Details/ServicesCard";
import AppointmentCard from "@/features/patient/components/Details/AppointmentCard";
import XrayCard from "../../features/patient/components/Details/XrayCard";
import usePatientDetails from "@/features/patient/hooks/usePatientDetails";

export default function PatientDetails() {
  const {finance: {totalPaid},patient} = usePatientDetails();

 

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Card
        className="
          relative overflow-hidden rounded-[10px] border-0 bg-gradient-to-br from-white via-sky-50 to-indigo-100 shadow-2xl"
      >
        {/* Decorative background */}

        <div className="absolute -right-20 -top-20 h-72 w-100 rounded-full bg-blue-200/30 blur-3xl" />

        <CardContent className="relative p-8">
          <div className="flex flex-col gap-8">
            {/* Top Section */}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-7">
                {/* Avatar */}

                <div className="relative">
                  <div className="flex h-40 w-40 items-center justify-center rounded-[30px] bg-white shadow-2xl ring-8 ring-white/60">
                    <User size={85} className="text-slate-300" />
                  </div>

                  <span
                    className="
                absolute
                bottom-0
                right-5
                rounded-full
                border-4
                border-white
                bg-emerald-500
                px-4
                py-1
                text-xs
                font-bold
                text-white
              "
                  >
                    فعال
                  </span>
                </div>

                {/* Name */}

                <div>
                  <div className="flex items-center gap-3">
                    <h1
                      className="
                  text-5xl
                  font-black
                  tracking-tight
                  text-slate-900
                "
                    >
                      {patient?.firstName}
                    </h1>

                    <span
                      className="
                  rounded
                  bg-blue-600
                  px-4
                  py-1.5
                  text-xs
                  font-bold
                  text-white
                "
                    >
                      PAT-000{patient?.id}
                    </span>
                  </div>

                  <p
                    className="
                mt-3
                text-slate-500
              "
                  >
                    پرونده دیجیتال بیمار کلینیک داندان و زیبایی نورستانی
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <InfoChip
                      icon={<Phone />}
                      text={patient?.phone || "0700000000"}
                    />

                    <InfoChip
                      icon={<MapPin />}
                      text={patient?.address || "کابل"}
                    />

                    <InfoChip
                      text={`${patient?.gender === "مرد" ? "👨" : "👩"} ${patient?.gender} `}
                    />

                    <InfoChip text={`🎂 ${patient?.age}`} />

                    <InfoChip text={`🩸 ${patient?.bloodGroup}`} />
                  </div>
                </div>
              </div>

              {/* Actions */}

              <div className="flex flex-wrap items-center max-w-full gap-3">
                <Button
                  variant="outline"
                  className="bg-white shadow-md hover:-translate-y-1"
                >
                  چاپ
                </Button>

                <Button
                  variant="outline"
                  className="bg-white shadow-md hover:-translate-y-1"
                >
                  ویرایش
                </Button>

                <Button className="shadow-xl hover:-translate-y-1">
                  <Plus className="me-2 h-4 w-4" />
                  ملاقات
                </Button>
              </div>
            </div>

            {/* Bottom Summary */}

            <div className="grid grid-cols-3 gap-5">
              <SummaryBox
                title="آخرین مراجعه"
                value={new Date(
                  patient?.appointments[0].meetDate,
                ).toLocaleDateString("fa-af")}
              />

              <SummaryBox
                title="داکتر مسئول"
                value={
                  patient?.appointments[0].staff?.firstName +
                  "" +
                  patient?.appointments[0].staff?.lastName
                }
              />

              <SummaryBox title="وضعیت درمان" value="در حال درمان" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patient Summary */}
      <div
        className="
    mt-8
    grid
    grid-cols-1
    gap-5
    sm:grid-cols-2
    xl:grid-cols-4
  "
      >
        <SummaryCard
          title="خدمات"
          value={patient?.patientServices.length ?? 0}
          icon={<Activity />}
          color="blue"
        />

        <SummaryCard
          title="بیماری‌ها"
          value={patient?.conditionDetails.length ?? 0}
          icon={<Stethoscope />}
          color="red"
        />

        <SummaryCard
          title="ملاقات‌ها"
          value={patient?.appointments?.length}
          icon={<ClipboardList />}
          color="green"
        />

        <SummaryCard
          title="پرداخت شده"
          value={totalPaid}
          icon={<Wallet />}
          color="emerald"
        />
      </div>

       {/* پرداخت ها */}
      <PaymentCard />


      {/* تاریخچه ملاقات ها */}

     <AppointmentCard />
    

      {/* سوابق بیماری با جزییات */}
      <ConditionCard />

      {/* خدامات درمانی */}

     <ServicesCard />

      

     

      {/* فایل ها و تصاویر */}

      <XrayCard />
    </div>
  );
}
