import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";

const base = createCrudApi("/TreatmentPlan");

const TreatmentPlanApi = {
  ...base,

  save: (data) => Api.post("/TreatmentPlan/save", data),

  getDetails: (id) =>
    Api.get(`/TreatmentPlan/${id}`),

  getByPatient: (patientId) =>
    Api.get(`/TreatmentPlan/patient/${patientId}`),

  changeStatus: (id, status) =>
    Api.put(`/TreatmentPlan/${id}/status`, {
      status,
    }),
};

export default TreatmentPlanApi;