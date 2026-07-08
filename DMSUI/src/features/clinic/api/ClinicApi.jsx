import Api from "@/api/Api";


const endpoint = "/clinic";

const ClinicApi = {
    get: () => Api.get(endpoint),
    get: (id) => Api.get(`${endpoint}/${id}`),
    create: (data) => Api.post(endpoint, data),
    update: (id, data) => Api.put(`${endpoint}/${id}`, data),
    delete: (id) => Api.delete(`${endpoint}/${id}`),
}

export default ClinicApi;

