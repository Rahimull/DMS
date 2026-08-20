import AuthApi from "@/features/user/api/AuthApi";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (data) => {
    const res = await AuthApi.login(data);

    const token = res.data.token;

    localStorage.setItem("token", token);

    // اگر Login API user را برمی‌گرداند
    if (res.data.user) {
      setUser(res.data.user);
    } else {
      // اگر فقط token برگردد، User را از /me بگیر
      const me = await AuthApi.me();
      setUser(me.data);
    }

    return res;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const loadUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await AuthApi.me();

      setUser(res.data);
    } catch (error) {
      console.error("Failed to load user:", error);

      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};