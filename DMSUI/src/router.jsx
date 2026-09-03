import { createBrowserRouter, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DahboardLayout";

import LoginPage from "./features/user/pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";

import DashboardPage from "./features/dashboard/pages/Dashboard";
import ClinicPage from "./pages/clinic/ClinicPage";
import StaffPage from "@/pages/staff/StaffPage";
import PatientsPage from "@/pages/patient/PatientPage";

import TreatmentPlanPage from "@/features/treatment/pages/TreatmentPlanPage";
import ServicePage from "@/features/service/pages/ServicePage";
import ConditionPage from "@/features/condition/pages/ConditionPage";
import ServiceRequirmentPage from "@/features/serviceRequirment/pages/ServiceRequirmentPage";

import TreatmentPlanList from "@/features/treatment/pages/TreatmentPlanList";
import EditTreatmentPlanPage from "@/features/treatment/pages/EditTreatmentPlan";

import PatientRegistrationWizard from "@/pages/patient/PatientRegistrationWizard";
import PatientDetails from "@/pages/patient/PatientDetails";
import AppointmentWizard from "@/pages/patient/AppointmentWizard";
import TreatmentPlanWizard from "@/pages/patient/TreatmentPlanWizard";

import PrescriptionPage from "@/features/Pharmacy/pages/PrescriptionPage";
import PrescriptionItemPage from "@/features/Pharmacy/pages/PrescriptionItemPage";
import InventoryPage from "@/features/Pharmacy/pages/InventoryPage";
import UserPage from "./features/user/pages/UsersPage";
import RolePage from "./features/user/pages/RolePage";
import LabPage from "./features/Lab/Pages/LabPage";
import LabCasePage from "./features/LabCase/Pages/LabCasePage";
import ViewLabCase from "./features/LabCase/Pages/ViewLabCase";
import ExpensePage from "./features/Expense/Pages/ExpensePage";


export const router = createBrowserRouter([
  
  // ==========================================
  // Public
  // ==========================================

  {
    path: "/login",
    element: <LoginPage />,
  },


  // ==========================================
  // Protected
  // ==========================================

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [

          {
            index: true,
            element: <Navigate to="/dashboard" replace />,
          },

          {
            path: "dashboard",
            element: <DashboardPage />,
          },

          {
            path: "patients",
            element: <PatientsPage />,
          },

          {
            path: "Patient/PatientRegistration",
            element: <PatientRegistrationWizard />,
          },

          {
            path: "Patient/AppointmentWizard",
            element: <AppointmentWizard />,
          },

          {
            path: "Patient/TreatmentPlanWizard",
            element: <TreatmentPlanWizard />,
          },

          {
            path: "Patient/Details/:id",
            element: <PatientDetails />,
          },

          {
            path: "clinic",
            element: <ClinicPage />,
          },

          {
            path: "staff",
            element: <StaffPage />,
          },

          {
            path: "treatmentPlan",
            element: <TreatmentPlanPage />,
          },

          {
            path: "treatmentPlanList",
            element: <TreatmentPlanList />,
          },

          {
            path: "treatmentPlan/update/:id",
            element: <EditTreatmentPlanPage />,
          },

          {
            path: "service",
            element: <ServicePage />,
          },

          {
            path: "serviceRequirment",
            element: <ServiceRequirmentPage />,
          },

          {
            path: "condition",
            element: <ConditionPage />,
          },

          // ==========================
          // Pharmacy
          // ==========================

          {
            path: "Prescription",
            element: <PrescriptionPage />,
          },

          {
            path: "PrescriptionItem",
            element: <PrescriptionItemPage />,
          },

          {
            path: "MedicineInventory",
            element: <InventoryPage />,
          },

          // ==========================
          // LABS
          // ==========================

          {
            path: "Lab",
            element: <LabPage />,
          },
          {
            path: "LabCase",
            element: <LabCasePage />,
          },
          {
            path: "LabCase/view/:id",
            element: <ViewLabCase />,
          },

          // ==========================
          // USERS
          // ==========================
          {
            path: "Users",
            element: <UserPage />,
          },
          {
            path: "permession",
            element: <RolePage />,
          },

          // ==========================
          // Expense
          // ==========================
          {
            path: "Expense",
            element: <ExpensePage />,
          },

          

          
        ],
      },
    ],
  },

]);