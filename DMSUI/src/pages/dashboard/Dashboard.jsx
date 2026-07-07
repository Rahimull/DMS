import StatsSection from "@/components/dashboard/StateSection";
import RevenueChart from "@/components/dashboard/RevenueChart";
import AppointmentChart from "@/components/dashboard/AppointmentChart";
import RecentPatients from "@/components/dashboard/RecentPatient";
import RecentAppointments from "@/components/dashboard/RecentAppointment";
import ActivityTimeline from "@/components/dashboard/ActivityTimeLine";
import QuickActions from "@/components/dashboard/QuickAction";
import CalendarWidget from "@/components/dashboard/CalendarWidget";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* STATS */}
      <StatsSection />

      {/* CHARTS + RECENT */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8 min-w-0">
          <RevenueChart />
        </div>

        <div className="xl:col-span-4 min-w-0">
          <AppointmentChart />
        </div>

        <div className="xl:col-span-6 min-w-0">
          <RecentPatients />
        </div>

        <div className="xl:col-span-6 min-w-0">
          <RecentAppointments />
        </div>
      </section>

      {/* LOWER SECTION */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <ActivityTimeline />
        </div>

        <div className="xl:col-span-4">
          <CalendarWidget />
        </div>

        <div className="xl:col-span-3">
          <QuickActions />
        </div>
      </section>
    </div>
  );
}