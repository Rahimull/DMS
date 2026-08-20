import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";

const endpoint = "/Peremission";

const base = createCrudApi(endpoint);
const PeremissionApi = {
  ...base,

  lookup: async (query = {}) => {
    const request = {
      pagination: {
        pageIndex: 0,
        pageSize: 1000,
        ...(query.pagination ?? {}),
      },
      ...(query.search ? { search: query.search } : {}),
      ...(query.sorting ? { sorting: query.sorting } : {}),
    };

    const res = await Api.post(`${endpoint}/paged`, request);

    const items = res.data?.data?.data ?? [];

    return items.map((item) => ({
      value: item.id,
      label: item.name,
      fee: item.fee ?? 0,
      description: item.description,
      data: item,
    }));
  },
};

export default PeremissionApi;
