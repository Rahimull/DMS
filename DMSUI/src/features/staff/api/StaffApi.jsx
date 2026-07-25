import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";


const endpoint = "/Staff";

const base = createCrudApi(endpoint);

const StaffApi = {
  // getPaged: (queryParams) =>
  //   Api.post(`${endpoint}/paged`, queryParams),

  // create: (data) => Api.post(endpoint, data),
  // update: (id, data) => Api.put(`${endpoint}/${id}`, data),
  // delete: (id) => Api.delete(`${endpoint}/${id}`),

  ...base,  
  
};

export default StaffApi;
