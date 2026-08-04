import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import usePatientDetails from "../../hooks/usePatientDetails";
import { useState } from "react";

export default function ServicesCard(){
    // باز بسته شدن خدامات درمانی 
  const [openServices, setOpenServices] = useState(false);
  const {patient} = usePatientDetails();

    return(
         <Card 
            className="rounded-[10px] mt-3
            bg-gradient-to-br from-white via-sky-100 to-indigo-200">
        <CardContent className="py-1 px-6">
          <div className="flex justify-between items-center mb-6 cursor-pointer"
            onClick={()=> setOpenServices(!openServices)}
          >
            <div className="flex items-center gap-2"
              
            >
              {openServices ? (
                <ChevronUp className="h-8 w-8 text-slate-600" />
              ) : (
                 <ChevronDown className="h-8 w-8 text-slate-600" />
              )}
            <h2 className="text-xl font-bold">خدمات درمانی</h2>
            </div>
            

            <Button 
              size="sm"
              className="rounded-full"
              variant="add"
              onClick={(e)=> e.stopPropagation()}
              >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {openServices && (
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
          )}
        </CardContent>
      </Card>
    )
}