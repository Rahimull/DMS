import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";


const endpoint = "/Patient";
const base = createCrudApi(endpoint)


const PatientApi = {

  ...base,

  register: (data) => Api.post("/Patient/PatientRegistration", data),
  appointment: (data) => Api.post("/Patient/appointment", data)
};

export default PatientApi;
