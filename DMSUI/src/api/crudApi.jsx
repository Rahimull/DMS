import Api from "./Api";

export const createCrudApi = (endpoint) => ({
  getPaged: (queryParams) => Api.post(`${endpoint}/paged`, queryParams),

  create: (data) => Api.post(endpoint, data),

  getById: (id, data) => Api.get(`${endpoint}/${id}`),
  update: (id, data) => Api.put(`${endpoint}/${id}`, data),

  delete: (id) => Api.delete(`${endpoint}/${id}`),

  lookup: async ({
    query = {
      pagination: {
        pageIndex: 0,
        pageSize: 1000,
      },

      sorting: {
        sortBy: "",
        isDecendign: false,
      },
      search: {
      searchTerm: "",
    },
    filters: {},
    },
   
    mapper = (item) => ({
      value: item.id,
      label: item.name,
      data: item,
    }),
  } = {}) => {
    
    const res = await Api.post(`${endpoint}/paged`, query);
    const items = res.data?.data?.data ?? res.data?.data ?? res.data ?? [];

   return items.map(mapper);
   
  }

});