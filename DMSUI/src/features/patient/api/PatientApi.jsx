import Api from "@/api/Api";


const endpoint = "/Patient";

const PatientApi = {
  getPaged: (queryParams) =>
    Api.post(`${endpoint}/paged`, queryParams),

  create: (data) => Api.post(endpoint, data),
  update: (id, data) => Api.put(`${endpoint}/${id}`, data),
  delete: (id) => Api.delete(`${endpoint}/${id}`),

  register: (data) => Api.post("/Patient/PatientRegistration", data)
};

export default PatientApi;
