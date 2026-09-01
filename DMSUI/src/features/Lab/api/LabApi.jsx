import { createCrudApi } from "@/api/crudApi";


const endpoint = "/Lab";

const base = createCrudApi(endpoint);

const LabApi = {
  ...base,  
};

export default LabApi;
