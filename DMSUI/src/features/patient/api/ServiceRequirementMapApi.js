import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";

const endpoint = "/ServiceRequirmentMap";

const base = createCrudApi(endpoint);

const ServiceRequirmentMapApi = {
  ...base,

 getByService: async (serviceId) =>{
    const res = await Api.get(`${endpoint}/service/${serviceId}`)
    return res.data.data;
 }
};

export default ServiceRequirmentMapApi;