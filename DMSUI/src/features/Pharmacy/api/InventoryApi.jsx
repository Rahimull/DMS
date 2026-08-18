import Api from "@/api/Api";
import { createCrudApi } from "@/api/crudApi";


const endpoint = "/MedicineInventory";
const base = createCrudApi(endpoint)


const InventoryApi = {

  ...base,

  create: (data) => Api.post("/MedicineInventory/CreateMedicine", data),

  lookup: async (
    query = {
      pageIndex: 0,
      pageSize: 1000,
    }
  ) => {
    const res = await Api.post(
      `${endpoint}/paged`,
      query
    );

    const items =
      res.data?.data?.data ??
      res.data?.data ??
      res.data ??
      [];

    return items.map((item) => ({
      value: item.id,
      label: item.name1,
      strength: item.strength,
      type: item.type,
      fee: item.unitPrice,
      data: item,
    }));
  },
};

export default InventoryApi;
