import { createCrudApi } from "@/api/crudApi";

const endpoint = "/ConditionDetails";

const base = createCrudApi(endpoint);

const ConditionDetailsApi = {
  ...base,

};

export default ConditionDetailsApi;