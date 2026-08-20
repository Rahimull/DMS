import StatsSection from "@/features/dashboard/components/StateSection";
import RevenueChart from "@/features/dashboard/components/RevenueChart";
import AppointmentChart from "@/features/dashboard/components/AppointmentChart";
import RecentPatients from "@/features/dashboard/components/RecentPatient";
import RecentAppointments from "@/features/dashboard/components/RecentAppointment";
import ActivityTimeline from "@/features/dashboard/components/ActivityTimeLine";
import QuickActions from "@/features/dashboard/components/QuickAction";
import CalendarWidget from "@/features/dashboard/components/CalendarWidget";

import useDashboard from "@/features/dashboard/hooks/useDashboard";

export default function Dashboard() {
  const {
    stats,
    revenue,
    appointments,
    recentPatients,
    recentAppointments,
    activities,
    loading,
    refresh,
  } = useDashboard();

  return (
    <div className="space-y-8">

      {/* =================================================
          STATS
      ================================================= */}

      <StatsSection
        data={stats}
        loading={loading}
      />

      {/* =================================================
          CHARTS + RECENT
      ================================================= */}

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        {/* Revenue */}

        <div className="min-w-0 xl:col-span-8">

          <RevenueChart
            data={revenue}
            loading={loading}
          />

        </div>

        {/* Appointments */}

        <div className="min-w-0 xl:col-span-4">

          <AppointmentChart
            data={appointments}
            loading={loading}
          />

        </div>

        {/* Recent Patients */}

        <div className="min-w-0 xl:col-span-6">

          <RecentPatients
            patients={recentPatients}
            loading={loading}
            onView={(patient) => {
              console.log(
                "View patient:",
                patient
              );
            }}
            onEdit={(patient) => {
              console.log(
                "Edit patient:",
                patient
              );
            }}
            onDelete={(id) => {
              console.log(
                "Delete patient:",
                id
              );
            }}
          />

        </div>

        {/* Recent Appointments */}

        <div className="min-w-0 xl:col-span-6">

          <RecentAppointments
            appointments={recentAppointments}
            loading={loading}
            onView={(appointment) => {
              console.log(
                "View appointment:",
                appointment
              );
            }}
          />

        </div>

      </section>

      {/* =================================================
          LOWER SECTION
      ================================================= */}

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        {/* Activities */}

        <div className="xl:col-span-5">

          <ActivityTimeline
            activities={activities}
            loading={loading}
          />

        </div>

        {/* Calendar */}

        <div className="xl:col-span-4">

          <CalendarWidget
            appointments={appointments}
            loading={loading}
          />

        </div>

        {/* Quick Actions */}

        <div className="xl:col-span-3">

          <QuickActions />

        </div>

      </section>

    </div>
  );
}