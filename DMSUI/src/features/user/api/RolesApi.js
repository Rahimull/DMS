import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";

const endpoint = "/Roles";

const base = createCrudApi(endpoint);
const RolesApi = {
  ...base,

  toggleStatus: (id)=> Api.put(`${endpoint}/${id}/toggle-status`),
  getPermessions: (id)=> Api.get(`${endpoint}/${id}/permissions`),
  assignPermissions: (id, data)=> Api.post(`${endpoint}/${id}/permissions`, data),



};

export default RolesApi;
