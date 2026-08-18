import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";


const endpoint = "/Prescription";
const base = createCrudApi(endpoint)


const PrescriptionApi = {

  ...base,

  createPrescription: (data) => Api.post(`${endpoint}/CreatePrescription`, data),

};

export default PrescriptionApi;
