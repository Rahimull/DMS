import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/Header";
import AppSidebar from "@/components/layout/sidebar/AppSidebar";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-50 overflow-hidden" dir="rtl">

        <AppSidebar />

        <main className="flex-1 overflow-auto min-w-0">

          <Header />

          <div className="p-8">
            <Outlet />
          </div>

        </main>

      </div>
    </SidebarProvider>
  );
}