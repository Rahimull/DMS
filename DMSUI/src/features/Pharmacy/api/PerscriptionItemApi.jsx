import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";


const endpoint = "/PrescriptionItem";
const base = createCrudApi(endpoint)


const PrescriptionItemApi = {

  ...base,

  create: (data) => Api.post("/PrescriptionItem/PrescriptionItemCreate", data),

};

export default PrescriptionItemApi;
