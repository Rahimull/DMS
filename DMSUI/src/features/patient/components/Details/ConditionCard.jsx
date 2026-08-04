import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import usePatientDetails from "@/features/patient/hooks/usePatientDetails";
import { ChevronDown, ChevronUp, Pencil, Plus } from "lucide-react";
import { useState } from "react";

export default function ConditionCard(){
    // باز بسته شدن سوابق بیمار
  const [openConditions, setOpenConditions] = useState(false);
  const {patient} = usePatientDetails();
    return(
        <Card 
            className="rounded-[10px] mt-3 shadow-xl
            bg-gradient-to-br from-white via-sky-100 to-indigo-200">
        <CardContent className="py-1 px-6">

          <div 
            className="flex items-center justify-between mb-6 cursor-pointer"
            onClick={()=> setOpenConditions(!openConditions)}
           
          >

            <div className="flex items-center gap-2"  >
              {openConditions ? (
                <ChevronUp className="h-8 w-8 text-slate-500" />
              ) : (
                <ChevronDown className="h-8 w-8 text-slate-500" />
              )}
              <h2 className="text-xl font-bold">سوابق بیماری‌ها</h2>
            </div>
            <Button size="sm" className="rounded-full" variant="add" onClick={(e)=> e.stopPropagation()}>
              <Plus className="h-10 w-10" />
            </Button>
          </div>


          {openConditions && (
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
          )}
          

          
        </CardContent>
      </Card>
    );
}