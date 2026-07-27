import {
  Calendar,
  FileText,
  MapPin,
  Phone,
  Printer,
  Pencil,
  Plus,
  User,
  Wallet,
  Activity,
  Stethoscope,
  ClipboardList,
  Paperclip,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import InfoChip from "@/features/patient/components/Details/InfoChip";
import SummaryBox from "@/features/patient/components/Details/SummaryBox";
import SummaryCard from "@/features/patient/components/SummaryCard";
import { useParams } from "react-router-dom";
import PatientApi from "@/features/patient/api/PatientApi";

export default function PatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    loadPatient();
  }, [id]);

  const loadPatient = async () => {
    try {
      const response = await PatientApi.getById(id);
      setPatient(response.data);
    } catch (error) {
      console.error(error);
      console.log(error.response);
      console.log(error.response?.data);
    }
  };

  console.log("Patient Details Id: ", patient);

  const feePayments =
    patient?.appointments?.flatMap((a) => a.feePayments ?? []) ?? [];

  const totalFee =
    patient?.appointments?.reduce((sum, a) => sum + (a.totalFee ?? 0), 0) ?? 0;

  const totalDiscount =
    patient?.appointments?.reduce((sum, a) => sum + (a.discount ?? 0), 0) ?? 0;

  const totalPaid = feePayments.reduce(
    (sum, p) => sum + (p.paidAmount ?? 0),
    0,
  );

  const remaining = totalFee - totalDiscount - totalPaid;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <Card
        className="
          relative overflow-hidden rounded-[30px] border-0 bg-gradient-to-br from-white via-sky-50 to-indigo-100 shadow-2xl"
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
          value={` ${patient?.appointments?.[0]?.feePayments?.[0]?.paidAmount ?? 0} AFG `}
          icon={<Wallet />}
          color="emerald"
        />
      </div>
      {/* سوابق بیماری با جزییات */}
      <Card className="rounded-3xl mt-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">سوابق بیماری‌ها</h2>

            <Button size="sm">
              <Plus className="h-4 w-4 ms-2" />
              افزودن بیماری
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {patient?.conditionDetails?.map((item) => (
              <Card key={item.id} className="border-blue-200">
                <CardContent className="p-5">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-lg">
                        {item.condition?.name}
                      </h3>

                      <p className="text-slate-500 mt-1">
                        شدت: {item.severty || "-"}
                      </p>

                      <p className="text-slate-500">
                        نتیجه: {item.result === 1 ? "مثبت" : "منفی"}
                      </p>

                      <p className="text-slate-500">
                        تاریخ تشخیص: {item.daignosisDate ?? "-"}
                      </p>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-4 rounded-xl bg-slate-50 p-3">
                    <p className="text-sm text-slate-600">
                      {item.notes || "توضیحی ثبت نشده است."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* خدامات درمانی */}

      <Card className="rounded-3xl mt-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">خدمات درمانی</h2>

            <Button size="sm">
              <Plus className="ms-2 h-4 w-4" />
              افزودن خدمت
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="p-3 text-right">خدمت</th>
                  <th className="p-3 text-right">داکتر</th>
                  <th className="p-3 text-right">تعداد</th>
                  <th className="p-3 text-right">هزینه</th>
                  <th className="p-3 text-right">وضعیت</th>
                </tr>
              </thead>

              <tbody>
                {patient?.patientServices?.map((service, index) => (
                  <tr key={service.id} className="border-b hover:bg-slate-50">
                    <td className="p-4">{service.service?.name ?? "-"}</td>

                    <td className="p-4">
                      {patient?.appointments?.find(
                        (a) => a.id === service.appointmentId,
                      )?.staff
                        ? `${
                            patient.appointments.find(
                              (a) => a.id === service.appointmentId,
                            ).staff.firstName
                          } ${
                            patient.appointments.find(
                              (a) => a.id === service.appointmentId,
                            ).staff.lastName
                          }`
                        : "-"}
                    </td>

                    <td className="p-4">{index + 1}</td>

                    <td className="p-4">
                      {service.service?.fee?.toLocaleString()} AFN
                    </td>

                    <td className="p-4">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-green-700 text-xs">
                        انجام شد
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* تاریخچه ملاقات ها */}

      <Card className="rounded-3xl mt-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">تاریخچه ملاقات‌ها</h2>

            <Button size="sm">
              <Plus className="h-4 w-4 ms-2" />
              ملاقات جدید
            </Button>
          </div>

          <div className="space-y-6">
            {patient?.appointments?.map((appointment, index) => (
              <div key={appointment.id} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      index === 0 ? "bg-blue-600" : "bg-green-600"
                    }`}
                  ></div>

                  {index !== patient.appointments.length - 1 && (
                    <div className="w-1 h-20 bg-slate-200"></div>
                  )}
                </div>

                <div className="flex-1 rounded-2xl border bg-slate-50 p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">
                        {appointment.details || "بدون توضیحات"}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        داکتر{" "}
                        {appointment.staff
                          ? `${appointment.staff.firstName} ${appointment.staff.lastName}`
                          : "-"}
                      </p>

                      <p className="text-sm text-slate-500 mt-1">
                        خدمت: {appointment.service?.name ?? "-"}
                      </p>
                    </div>

                    <span className="text-sm text-slate-500">
                      {new Date(appointment.meetDate).toLocaleDateString(
                        "fa-IR",
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* پرداخت ها */}


      <Card className="rounded-3xl mt-6">
  <CardContent className="p-6">
    <h2 className="text-xl font-bold mb-6">پرداخت‌ها</h2>

    <div className="grid grid-cols-4 gap-5">
      <Card className="bg-blue-50 border-blue-200 rounded-2xl shadow-none">
        <CardContent className="p-5">
          <p className="text-sm text-slate-500">کل هزینه</p>

          <h2 className="text-2xl font-bold mt-2 text-blue-700">
            {totalFee.toLocaleString()} AFN
          </h2>
        </CardContent>
      </Card>

      <Card className="bg-yellow-50 border-yellow-200 rounded-2xl shadow-none">
        <CardContent className="p-5">
          <p className="text-sm text-slate-500">تخفیف</p>

          <h2 className="text-2xl font-bold mt-2 text-yellow-700">
            {totalDiscount.toLocaleString()} AFN
          </h2>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200 rounded-2xl shadow-none">
        <CardContent className="p-5">
          <p className="text-sm text-slate-500">پرداخت شده</p>

          <h2 className="text-2xl font-bold mt-2 text-green-700">
            {totalPaid.toLocaleString()} AFN
          </h2>
        </CardContent>
      </Card>

      <Card className="bg-red-50 border-red-200 rounded-2xl shadow-none">
        <CardContent className="p-5">
          <p className="text-sm text-slate-500">باقیمانده</p>

          <h2 className="text-2xl font-bold mt-2 text-red-600">
            {remaining.toLocaleString()} AFN
          </h2>
        </CardContent>
      </Card>
    </div>

    <div className="overflow-x-auto mt-8">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b">
            <th className="text-right p-3">تاریخ</th>
            <th className="text-right p-3">مبلغ</th>
            <th className="text-right p-3">قسط</th>
            <th className="text-right p-3">باقیمانده</th>
          </tr>
        </thead>

        <tbody>
          {feePayments.length > 0 ? (
            feePayments.map(payment => (
              <tr
                key={payment.id}
                className="border-b hover:bg-slate-50 transition-colors"
              >
                <td className="p-4">
                  {new Date(payment.paymentDate).toLocaleDateString("fa-IR")}
                </td>

                <td className="p-4 font-semibold text-green-700">
                  {payment.paidAmount.toLocaleString()} AFN
                </td>

                <td className="p-4">
                  قسط {payment.installmentCounter}
                </td>

                <td className="p-4 text-red-600">
                  {payment.dueAmount.toLocaleString()} AFN
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="text-center py-8 text-slate-500"
              >
                هیچ پرداختی ثبت نشده است.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </CardContent>
</Card>


    
{/* فایل ها و تصاویر */}

      <Card className="rounded-3xl mt-6 mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">فایل‌ها و تصاویر</h2>

            <Button size="sm">
              <Plus className="h-4 w-4 ms-2" />
              افزودن فایل
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <FileText className="h-10 w-10 text-red-500" />

                <p className="mt-4 text-sm font-medium">X-Ray.pdf</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Paperclip className="h-10 w-10 text-blue-500" />

                <p className="mt-4 text-sm font-medium">Blood Test.pdf</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <FileText className="h-10 w-10 text-green-500" />

                <p className="mt-4 text-sm font-medium">Before.jpg</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <FileText className="h-10 w-10 text-indigo-500" />

                <p className="mt-4 text-sm font-medium">After.jpg</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
