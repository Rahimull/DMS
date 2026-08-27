import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";

const endpoint = "/Users";

const base = createCrudApi(endpoint);
const UserApi = {
  ...base,

  toggleStatus: (id, isActive)=> Api.put(`${endpoint}/${id}/toggleStatus`),
  assignRoles: (id, data)=> Api.post(`${endpoint}/${id}/roles`, data),
};

export default UserApi;
