import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";

const base = createCrudApi("/TreatmentPlan")

const TreatmentPlanApi = {
  ...base,

  getDetails: (id)=> Api.get(`/TreatmentPlan/patient/${id}/details`),
  getByPatient: (patientId)=> Api.get(`/TreatmentPlan/patient/${patientId}`),
  changeStatus: (id, status)=> Api.put(`/TreatmentPlan/${id}/status`,{status})
}

export default TreatmentPlanApi;