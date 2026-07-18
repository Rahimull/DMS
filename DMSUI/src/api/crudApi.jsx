import Api from "./Api";

export const createCrudApi = (endpoint) => ({
  getPaged: (queryParams) => Api.post(`${endpoint}/paged`, queryParams),

  create: (data) =>
    Api.post(endpoint, data),

  getById: (id, data) => Api.get(`${endpoint}/${id}`),
  update: (id, data) => Api.put(`${endpoint}/${id}`, data),

  delete: (id) => Api.delete(`${endpoint}/${id}`),

   lookup: async ({
    label,
    value = "id",
    query = {
  pagination: {
    pageIndex: 0,
    pageSize: 1000,
  },
},
   
  }) => {
    const res = await Api.post(`${endpoint}/paged`, query);

    console.log(res.data);

    const items = 
      res.data?.data?.data ?? 
      res.data?.data ??
      res.data ?? [];

    return items.map((item) => ({
      value: item[value],
      label:
        typeof label === "function"
          ? label(item)
          : item[label],
    }));
  },
});
