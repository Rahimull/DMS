import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DahboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
import ClinicPage from "../pages/clinic/ClinicPage";
import StaffPage from "@/pages/staff/StaffPage";
import PatientsPage from "@/pages/patient/PatientPage";
import TreatmentPlanPage from "@/features/treatment/pages/TreatmentPlanPage";
import ServicePage from "@/features/service/pages/ServicePage";
import ConditionPage from "@/features/condition/pages/ConditionPage";
import ServiceRequirmentPage from "@/features/serviceRequirment/pages/ServiceRequirmentPage";
import TreatmentPlanList from "@/features/treatment/pages/TreatmentPlanList";
import EditTreatmentPlanPage from "@/features/treatment/pages/EditTreatmentPlan";


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
        path: "/treatmentPlanList",
        element: <TreatmentPlanList />
        },
      {
        path: "/treatmentPlan/update/:id",
        element: <EditTreatmentPlanPage />
        },
      {
        path: "/service",
        element: <ServicePage />
        },
      {
        path: "/serviceRequirment",
        element: <ServiceRequirmentPage />
        },
      {
        path: "/condition",
        element: <ConditionPage />
        },
      
    ],
  },
]);