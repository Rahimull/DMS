import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";


const base = createCrudApi("/ConditionDetail");


const ConditionDetailApi = {

    ...base,


    getByPatient:(patientId)=>
        Api.get(
          `/ConditionDetail/patient/${patientId}`
        ),


    getDetails:(patientId)=>
        Api.get(
          `/ConditionDetail/patient/${patientId}/details`
        )

};


export default ConditionDetailApi;