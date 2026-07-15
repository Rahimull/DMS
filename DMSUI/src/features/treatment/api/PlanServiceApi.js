import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";


const base = createCrudApi("/PlanService");


const PlanServiceApi = {

    ...base,


    getByTreatment:(id)=>
        Api.get(
          `/PlanService/treatment/${id}`
        ),


    getDetails:(id)=>
        Api.get(
          `/PlanService/treatment/${id}/details`
        ),


    getTotal:(id)=>
        Api.get(
          `/PlanService/treatment/${id}/total`
        )

};


export default PlanServiceApi;