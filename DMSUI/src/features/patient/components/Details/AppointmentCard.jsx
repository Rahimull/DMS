import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  UserRound,
  Stethoscope,
  CalendarDays,
  Wallet,
  Percent,
  CreditCard,
  CircleDollarSign,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePatientDetails from "../../hooks/usePatientDetails";


export default function AppointmentCard() {

  const [openAppointment, setOpenAppointment] = useState(false);

  const { patient } = usePatientDetails();

  const navigate = useNavigate();


  const patientData = {
    id: patient?.id ?? 0,
    address: patient?.address || "",
    age: 0,
    bloodGroup: patient?.bloodGroup || "",
    fatherName: patient?.fatherName || "",
    firstName: patient?.firstName || "",
    gender: patient?.gender || "مرد",
    lastName: patient?.lastName || "",
    maritalStatus: patient?.maritalStatus || "متاهل",
    phone: patient?.phone || "",
  };



  return (

    <Card className="
      rounded-2xl
      mt-4
      bg-gradient-to-br
      from-white
      via-sky-50
      to-indigo-100
    ">

      <CardContent className="p-6">


        {/* Header */}

        <div
          className="
          flex
          items-center
          justify-between
          cursor-pointer
          "
          onClick={() =>
            setOpenAppointment(!openAppointment)
          }
        >


          <div className="flex items-center gap-3">

            {
              openAppointment ?
              <ChevronUp className="h-7 w-7"/>
              :
              <ChevronDown className="h-7 w-7"/>
            }


            <h2 className="text-xl font-bold">
              تاریخچه ملاقات‌ها
            </h2>

          </div>



          <Button
            size="sm"
            variant="add"
            className="rounded-full"

            onClick={(e)=>{

              e.stopPropagation();

              navigate(
                "/Patient/AppointmentWizard",
                {
                  state:{
                    patientData
                  }
                }
              );

            }}
          >

            <Plus className="h-4 w-4"/>

          </Button>


        </div>





        {
          openAppointment && (


          <div
            className="
            mt-8
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5
            "
          >



          {
          patient?.appointments?.map((appointment)=>{


            const totalPaid =
              appointment.feePayments?.reduce(
                (sum,payment)=>
                sum + payment.paidAmount,
                0
              ) ?? 0;



            const remaining =
              appointment.totalFee - totalPaid;



            return (

            <Card
              key={appointment.id}
              className="
              rounded-2xl
              shadow-sm
              border-slate-200
              bg-white
              "
            >


            <CardContent className="p-5">


              {/* Appointment Header */}


              <div
                className="
                border-b
                pb-4
                mb-4
                "
              >


                <h3 className="
                  font-bold
                  text-lg
                  mb-3
                ">

                  {
                    appointment.details ||
                    "بدون توضیحات"
                  }

                </h3>



                <div className="
                  space-y-2
                  text-sm
                  text-slate-600
                ">


                  <div className="
                    flex
                    items-center
                    gap-2
                  ">

                    <UserRound
                      className="
                      h-4
                      w-4
                      text-blue-600
                      "
                    />

                    <span>
                    {
                      appointment.staff
                      ?
                      `${appointment.staff.firstName}
                      ${appointment.staff.lastName}`
                      :
                      "-"
                    }
                    </span>

                  </div>





                  <div className="
                    flex
                    items-center
                    gap-2
                  ">

                    <Stethoscope
                      className="
                      h-4
                      w-4
                      text-green-600
                      "
                    />

                    <span>
                    {
                      appointment.service?.name ??
                      "-"
                    }
                    </span>

                  </div>




                  <div className="
                    flex
                    items-center
                    gap-2
                  ">

                    <CalendarDays
                      className="
                      h-4
                      w-4
                      text-purple-600
                      "
                    />

                    <span>

                    {
                      new Date(
                        appointment.meetDate
                      )
                      .toLocaleDateString("fa-IR")
                    }

                    </span>


                  </div>


                </div>


              </div>






              {/* Finance */}


              <div className="
                space-y-3
              ">


                <FinanceRow
                  icon={<Wallet/>}
                  title="کل هزینه"
                  value={
                    `${appointment.totalFee.toLocaleString()} AFN`
                  }
                />



                <FinanceRow
                  icon={<Percent/>}
                  title="تخفیف"
                  value={
                    `${appointment.discount}%`
                  }
                />



                <FinanceRow
                  icon={<CreditCard/>}
                  title="پرداخت شده"
                  value={
                    `${totalPaid.toLocaleString()} AFN`
                  }
                />



                <FinanceRow
                  icon={<CircleDollarSign/>}
                  title="باقیمانده"
                  value={
                    `${remaining.toLocaleString()} AFN`
                  }
                />


              </div>



            </CardContent>


            </Card>

            )


          })

          }



          </div>


          )

        }


      </CardContent>

    </Card>

  );

}





function FinanceRow({
  icon,
  title,
  value
}){


return (

<div
className="
flex
items-center
justify-between
rounded-xl
bg-slate-50
p-3
"
>


<div className="
flex
items-center
gap-2
text-slate-600
">

{icon}

<span>
{title}
</span>

</div>



<strong>
{value}
</strong>


</div>

)

}