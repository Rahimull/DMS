import { createCrudApi } from "@/api/crudApi";


const endpoint = "/labCase";

const base = createCrudApi(endpoint);

const LabCaseApi = {
  ...base,  
};

export default LabCaseApi;
