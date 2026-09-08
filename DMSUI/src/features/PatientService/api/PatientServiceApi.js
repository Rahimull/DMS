import { createCrudApi } from "@/api/crudApi";

const endpoint = "/PatientService";

const base = createCrudApi(endpoint);

const PatientServiceApi = {
  ...base,

};

export default PatientServiceApi;