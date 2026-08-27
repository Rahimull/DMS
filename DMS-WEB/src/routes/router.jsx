import { createBrowserRouter } from "react-router-dom";




import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import DoctorsPage from "@/pages/DoctorsPage";
import AppointmentPage from "@/pages/AppointmentPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "../pages/HomePage";
import PublicLayout from "../layoutes/PublicLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "doctors",
        element: <DoctorsPage />,
      },
      {
        path: "appointment",
        element: <AppointmentPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;