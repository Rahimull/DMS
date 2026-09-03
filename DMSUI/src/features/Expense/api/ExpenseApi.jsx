import { createCrudApi } from "@/api/crudApi";


const endpoint = "/Expense";

const base = createCrudApi(endpoint);

const ExpenseApi = {
  ...base,  
};

export default ExpenseApi;
