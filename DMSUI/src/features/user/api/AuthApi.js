
import Api from "@/api/Api";



const AuthApi = {
  login: (data) => Api.post("/auth/login", data),
  me: () => Api.get("/auth/me"),
};


export default AuthApi;
