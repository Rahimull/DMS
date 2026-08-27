import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "./context/AuthContext";


import "./index.css";
import "react-day-picker/dist/style.css";
import App from "./App";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
  </AuthProvider>
);