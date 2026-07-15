import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";

const endpoint = "/Service";

const base = createCrudApi(endpoint);

const ServiceApi = {
  ...base,

  lookup: async (
    query = {
      pageNumber: 1,
      pageSize: 1000,
    }
  ) => {
    const res = await Api.post(`${endpoint}/paged`, query);

    const items =
      res.data?.data?.data ??
      res.data?.data ??
      res.data ??
      [];

    return items.map((item) => ({
      value: item.id,
      label: item.name,
      fee: item.fee ?? 0,
      description: item.description,
      data: item, // کل آبجکت برای استفاده‌های بعدی
    }));
  },
};

export default ServiceApi;