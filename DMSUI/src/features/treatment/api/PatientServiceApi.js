import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";


const base = createCrudApi("/PatientService");


const PatientServiceApi = {

    ...base,


    // تمام خدمات یک بیمار
    getByPatient: (patientId) =>
        Api.get(
            `/PatientService/patient/${patientId}`
        ),



    // خدمات یک نوبت
    getByAppointment: (appointmentId) =>
        Api.get(
            `/PatientService/appointment/${appointmentId}`
        ),



    // خدمات یک پلان درمان
    getByTreatment: (treatmentPlanId) =>
        Api.get(
            `/PatientService/treatment/${treatmentPlanId}`
        ),



    // اطلاعات مناسب برای جدول UI
    getDetails: (treatmentPlanId) =>
        Api.get(
            `/PatientService/treatment/${treatmentPlanId}/details`
        )

};


export default PatientServiceApi;