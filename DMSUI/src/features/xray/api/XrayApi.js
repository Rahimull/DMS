import { createCrudApi } from "@/api/crudApi";

const endpoint = "/PatientXRay";

const base = createCrudApi(endpoint);

const XrayApi = {
  ...base,

};

export default XrayApi;