import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";


const base = createCrudApi("/Retreatment");


const RetreatmentApi = {


    ...base,


    // درمان های مجدد یک بیمار
    getByPatient:(patientId)=>
        Api.get(
            `/Retreatment/patient/${patientId}`
        ),



    // درمان های مجدد یک داکتر
    getByStaff:(staffId)=>
        Api.get(
            `/Retreatment/staff/${staffId}`
        ),



    // درمان های مجدد یک TreatmentPlan
    getByTreatment:(treatmentPlanId)=>
        Api.get(
            `/Retreatment/treatment/${treatmentPlanId}`
        ),



    // درمان های مجدد یک Appointment
    getByAppointment:(appointmentId)=>
        Api.get(
            `/Retreatment/appointment/${appointmentId}`
        ),



    // جزئیات برای نمایش
    getDetails:(id)=>
        Api.get(
            `/Retreatment/${id}/details`
        )

};


export default RetreatmentApi;