import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeePaymentApi from "@/features/feePayment/api/FeePaymentApi";
import FeePaymentForm from "@/features/feePayment/components/FeePaymentForm";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { useState } from "react";
import usePatientDetails from "../../hooks/usePatientDetails";

export default function PaymentCard(){
     // باز بسته شدن تصاویر اکسری یا لابراتوار   
      const [openPayment, setOpenPayment] = useState(false);
      const {finance:{feePayments, totalFee, totalDiscount, totalPaid, remaining, installment, installmentCounter, appointments},patient, refreshPatient} = usePatientDetails();
      
  
  // پرداخت قسط دوم و سودم ...
   const PaymentMessages = {
    create: "پرداخت با موفقیت ثبت شد.",
    update: "اطلاعات پرداخت با موفقیت ویرایش شد.",
    delete: "پرداخت با موفقیت حذف شد.",
  };

  const curdPayment = useCreatUpdateForm(FeePaymentApi, PaymentMessages,{
    useFormData:false, 
    createMethod: "createPayment",
    onSuccess: refreshPatient,
  });
  const handlePayment = ()=>{
        curdPayment.openCreate({
        appointmentId: appointments?.at(-1).id,
        installmentCounter: installmentCounter,
        staffId: appointments?.at(-1).staffId,
       });
       
  }
  

    return(
         <>
          <Card 
            className="rounded-[10px] mt-3 shadow-xl 
            bg-gradient-to-br from-white via-sky-50
            to-indigo-100">
        <CardContent className="px-6 py-1">

          <div className="flex justify-between mb-6 cursor-pointer" onClick={()=> setOpenPayment(!openPayment)}>
            <div className="flex items-center gap-2" >
            {openPayment ? (
              <ChevronUp className="h-8 w-8" />
            ) : (
              <ChevronDown className="h-8 w-8" />
            )}
            <h2 className="text-xl font-bold mb-6">پرداخت‌ها</h2>
          </div>
          
            <Button 
              size="sm" 
              className="rounded-full"
              variant="add" 
              onClick={(e) => {
                e.stopPropagation();
                  handlePayment();               
                }}
>
              <Plus />
             
            </Button>
          </div>
          
          {openPayment && (
            <>
            

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
                  %{totalDiscount}
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
                <tr className="bg-slate-50 border-b ">
                  <th className="text-right p-3">تاریخ</th>
                  <th className="text-right p-3">مبلغ</th>
                  <th className="text-right p-3">قسط</th>
                  <th className="text-right p-3">باقیمانده</th>
                </tr>
              </thead>

              <tbody>
                {feePayments.length > 0 ? (
                  feePayments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b hover:bg-slate-50 transition-colors text-right p-3"
                    >
                      <td className="p-4">
                        {new Date(payment.paymentDate).toLocaleDateString(
                          "fa-IR",
                        )}
                      </td>

                      <td className="p-4 font-semibold text-green-700">
                        {payment?.paidAmount?.toLocaleString()} AFN
                      </td>

                      <td className="p-4">  {payment.installmentCounter} / {installment}</td>

                      <td className="p-4 text-red-600">
                        {payment?.dueAmount?.toLocaleString()} AFN
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-slate-500">
                      هیچ پرداختی ثبت نشده است.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div></>
          )}
        </CardContent>
          </Card>
      <FeePaymentForm CURD={curdPayment} /> 
         </>         
    )
}