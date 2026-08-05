import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import usePatientDetails from "../../hooks/usePatientDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppointmentCard(){
     // باز بسته شدن تاریخجه ملاقات  
  const [openAppointment, setOpenAppointment] = useState(false);
  const {patient} = usePatientDetails();
  const navigate = useNavigate();

   const patientData = {
      id: patient?.id ?? 0,
      address : patient?.address || "",
      age:0,
      bloodGroup:patient?.bloodGroup || "",
      fatherName:patient?.fatherName || "",
      firstName:patient?.firstName || "",
      gender:patient?.gender || "مرد",
      lastName: patient?.lastName || "",
      maritalStatus: patient?.maritalStatus || "متاهل",
      phone: patient?.phone || "",
  };
    
    return(
         <Card 
            className="rounded-[10px] mt-3
            bg-gradient-to-br from-white via-sky-50 to-indigo-100">
        <CardContent className="py-1 px-6">
          <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={()=> setOpenAppointment(!openAppointment)}>

            <div className="flex items-center gap-3" >
              {openAppointment ? (
                <ChevronUp className="h-8 w-8 text-slate-600" />
              ) : (
                <ChevronDown className="h-8 w-8 text-slate-600" />
              )}
              <h2 className="text-xl font-bold">تاریخچه ملاقات‌ها</h2>
            </div>
            

            <Button size="sm" variant="add" className="rounded-full"
              onClick={(e)=> {
                e.stopPropagation();
                navigate(`/Patient/AppointmentWizard`, {state : {patientData: patientData}});
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

        {openAppointment && (
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
        )}
        </CardContent>
      </Card>
    )
}