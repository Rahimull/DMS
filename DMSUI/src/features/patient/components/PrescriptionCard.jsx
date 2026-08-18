import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Pill,
} from "lucide-react";
import { useState } from "react";

import PrescriptionApi from "@/features/Pharmacy/api/PerscriptionApi";


import usePatientDetails from "../hooks/usePatientDetails";

export default function PrescriptionCard() {
  const [openPrescription, setOpenPrescription] =
    useState(false);

  const {
    patient,
    refreshPatient,
  } = usePatientDetails();

  const PrescriptionMessages = {
    create: "نسخه با موفقیت ثبت شد.",
    update: "نسخه با موفقیت ویرایش شد.",
    delete: "نسخه با موفقیت حذف شد.",
  };

  const curdPrescription = useCreatUpdateForm(
    PrescriptionApi,
    PrescriptionMessages,
    {
      useFormData: false,
      onSuccess: refreshPatient,
    }
  );

  const prescriptions =
    patient?.prescriptions ?? [];

  const handlePrescription = () => {
    curdPrescription.openCreate({
      patientId: patient?.id,
      staffId: null,
      prescriptionDate:
        new Date().toISOString(),
      notes: "",
      items: [],
    });
  };

  return (
    <>
      <Card
        className="
          mt-3
          rounded-[10px]
          shadow-xl
          bg-gradient-to-br
          from-white
          via-sky-50
          to-indigo-100
        "
      >
        <CardContent className="px-6 py-1">

          {/* Header */}
          <div
            className="
              mb-6
              flex
              cursor-pointer
              items-center
              justify-between
            "
            onClick={() =>
              setOpenPrescription(
                !openPrescription
              )
            }
          >

            <div className="flex items-center gap-2">

              {openPrescription ? (
                <ChevronUp className="h-7 w-7" />
              ) : (
                <ChevronDown className="h-7 w-7" />
              )}

              <div className="flex items-center gap-2">
                <Pill
                  className="text-blue-600"
                  size={22}
                />

                <h2 className="text-xl font-bold">
                  نسخه ها
                </h2>
              </div>

            </div>

            <Button
              size="sm"
              className="rounded-full"
              variant="add"
              onClick={(e) => {
                e.stopPropagation();
                handlePrescription();
              }}
            >
              <Plus size={18} />
            </Button>

          </div>

          {/* Content */}
          {openPrescription && (
            <div className="pb-5">

              {prescriptions.length > 0 ? (

                <div className="space-y-4">

                  {prescriptions.map(
                    (prescription) => (
                      <Card
                        key={prescription.id}
                        className="
                          border
                          border-slate-200
                          bg-white
                          shadow-sm
                        "
                      >

                        <CardContent className="p-5">

                          {/* Prescription Header */}
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              border-b
                              pb-4
                            "
                          >

                            <div>
                              <h3 className="font-bold">
                                نسخه #
                                {prescription.id}
                              </h3>

                              <p className="mt-1 text-xs text-slate-500">
                                {new Date(
                                  prescription.prescriptionDate
                                ).toLocaleDateString(
                                  "fa-IR"
                                )}
                              </p>
                            </div>

                            <div
                              className="
                                rounded-full
                                bg-blue-50
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                text-blue-700
                              "
                            >
                              نسخه
                            </div>

                          </div>

                          {/* Medicines */}
                          <div className="mt-4">

                            <h4 className="mb-3 font-semibold">
                              دواها
                            </h4>

                            <div className="overflow-x-auto">

                              <table className="w-full text-sm">

                                <thead>
                                  <tr className="border-b bg-slate-50">

                                    <th className="p-3 text-right">
                                      دوا
                                    </th>

                                    <th className="p-3 text-right">
                                      مقدار
                                    </th>

                                    <th className="p-3 text-right">
                                      دوز
                                    </th>

                                    <th className="p-3 text-right">
                                      تعداد در روز
                                    </th>

                                    <th className="p-3 text-right">
                                      مدت
                                    </th>

                                    <th className="p-3 text-right">
                                      طریقه مصرف
                                    </th>

                                  </tr>
                                </thead>

                                <tbody>

                                  {prescription.items?.map(
                                    (item) => (

                                      <tr
                                        key={item.id}
                                        className="
                                          border-b
                                          hover:bg-slate-50
                                        "
                                      >

                                        <td className="p-3 font-semibold">
                                          {item.medicineInventory?.name1 ??
                                            item.medicineName ??
                                            "-"}
                                        </td>

                                        <td className="p-3">
                                          {item.quantity ?? "-"}
                                        </td>

                                        <td className="p-3">
                                          {item.dosage ?? "-"}
                                        </td>

                                        <td className="p-3">
                                          {item.frequency ?? "-"}
                                        </td>

                                        <td className="p-3">
                                          {item.duration ?? "-"}
                                        </td>

                                        <td className="p-3">
                                          {item.route ?? "-"}
                                        </td>

                                      </tr>

                                    )
                                  )}

                                </tbody>

                              </table>

                            </div>

                          </div>

                          {/* Notes */}
                          {prescription.notes && (
                            <div
                              className="
                                mt-4
                                rounded-lg
                                bg-slate-50
                                p-3
                              "
                            >
                              <p className="text-xs text-slate-500">
                                توضیحات
                              </p>

                              <p className="mt-1 text-sm">
                                {prescription.notes}
                              </p>
                            </div>
                          )}

                        </CardContent>

                      </Card>
                    )
                  )}

                </div>

              ) : (

                <div
                  className="
                    rounded-xl
                    border
                    border-dashed
                    border-slate-300
                    py-10
                    text-center
                    text-slate-500
                  "
                >
                  <Pill
                    size={35}
                    className="
                      mx-auto
                      mb-3
                      text-slate-400
                    "
                  />

                  <p>
                    هنوز نسخه‌ای برای این مریض ثبت نشده است.
                  </p>

                </div>

              )}

            </div>
          )}

        </CardContent>
      </Card>

      {/* <PrescriptionForm
        CURD={curdPrescription}
      /> */}
    </>
  );
}