import { createCrudApi } from "@/api/crudApi";


const endpoint = "/ExpenseDetails";

const base = createCrudApi(endpoint);

const ExpenseDetailsApi = {
  ...base,  
};

export default ExpenseDetailsApi;
