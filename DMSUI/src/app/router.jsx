import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DahboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
import ClinicPage from "../pages/clinic/ClinicPage";
import StaffPage from "@/pages/staff/StaffPage";
import PatientsPage from "@/pages/patient/PatientPage";
import TreatmentPlanPage from "@/features/treatment/pages/TreatmentPlanPage";
import ServicePage from "@/features/service/pages/ServicePage";


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
      {
        path: "/staff",
        element: <StaffPage />
        },
      {
        path: "/treatmentPlan",
        element: <TreatmentPlanPage />
        },
      {
        path: "/service",
        element: <ServicePage />
        },
      
    ],
  },
]);