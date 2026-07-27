import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";


const endpoint = "/Patient";
const base = createCrudApi(endpoint)


const PatientApi = {
  // getPaged: (queryParams) =>
  //   Api.post(`${endpoint}/paged`, queryParams),

  // create: (data) => Api.post(endpoint, data),
  // update: (id, data) => Api.put(`${endpoint}/${id}`, data),
  // delete: (id) => Api.delete(`${endpoint}/${id}`),

  ...base,

  register: (data) => Api.post("/Patient/PatientRegistration", data)
};

export default PatientApi;
