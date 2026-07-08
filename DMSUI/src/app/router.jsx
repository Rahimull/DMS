import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DahboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
import PatientsPage from "../pages/patient/PatientsPage";
import ClinicPage from "../pages/clinic/ClinicPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/patients",
        element: <PatientsPage />,
        },
      {
        path: "/clinic",
        element: <ClinicPage />,
        },
    ],
  },
]);