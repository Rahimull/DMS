import { useState } from "react";

import AppointmentApi 
from "@/features/appointment/api/AppointmentApi";

import PatientServiceApi 
from "@/features/patientService/api/PatientServiceApi";


import {
    buildAppointmentPayload,
    buildPatientServicesPayload
}
from "../utils/servicePayload";


import { notify } from "@/utils/notify";



export default function useCreateTreatment(){


    const [loading,setLoading]=useState(false);



    const createTreatment = async(
        formData,
        patientId
    )=>{


        try{

            setLoading(true);



            /*
                1- Create Appointment
            */


            const appointmentPayload =
                buildAppointmentPayload(
                    formData,
                    patientId
                );


            const appointmentRes =
                await AppointmentApi.create(
                    appointmentPayload
                );



            const appointment =
                appointmentRes.data;



            const appointmentId =
                appointment.id;




            /*
                2- Create Patient Services
            */


            const patientServices =
                buildPatientServicesPayload(
                    formData,
                    patientId,
                    appointmentId
                );



            for(
                const item of patientServices
            ){

                await PatientServiceApi.create(
                    item
                );

            }



            notify.success(
                "معلومات درمان موفقانه ثبت شد"
            );



            return true;


        }
        catch(error){

            console.log(error);

            notify.error(
                "خطا در ثبت معلومات"
            );

            return false;

        }
        finally{

            setLoading(false);

        }

    };



    return {

        createTreatment,

        loading

    };

}