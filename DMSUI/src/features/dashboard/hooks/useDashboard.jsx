import { useCallback, useEffect, useState } from "react";
import DashboardApi from "../api/DashboardApi";

// =====================================================
// INITIAL STATS
// =====================================================

const initialStats = {
  monthlyRevenue: 0,
  totalPatients: 0,
  monthlyAppointments: 0,
  completedTreatments: 0,

  revenueChange: 0,
  patientChange: 0,
  appointmentChange: 0,
  treatmentChange: 0,
};

// =====================================================
// INITIAL DASHBOARD
// =====================================================

const initialDashboard = {
  revenue: [],
  appointments: [],
  recentPatients: [],
  recentAppointments: [],
  activities: [],
};

// =====================================================
// RESPONSE HELPER
// =====================================================

const getResponseData = (response) => {
  return (
    response?.data?.data ??
    response?.data ??
    {}
  );
};

// =====================================================
// HOOK
// =====================================================

const useDashboard = () => {
  const [stats, setStats] = useState(initialStats);

  const [dashboard, setDashboard] =
    useState(initialDashboard);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // ===================================================
  // LOAD STATS
  // ===================================================

  const loadStats = useCallback(async () => {
    try {
      const response = await DashboardApi.getStats();
      const data = getResponseData(response);
      setStats({
        ...initialStats,
        ...data,
      });
      return data;
    } catch (err) {
      console.error(
        "Dashboard Stats Error:",
        err
      );

      throw err;
    }
  }, []);

  // ===================================================
  // LOAD DASHBOARD
  // ===================================================

  const loadDashboard = useCallback(async () => {
    try {
      const response = await DashboardApi.getDashboard();
      const data = getResponseData(response);
      setDashboard({
        ...initialDashboard,
        ...data,
      });

      return data;

    } catch (err) {
      console.error(
        "Dashboard Error:",
        err
      );

      throw err;
    }
  }, []);

  // ===================================================
  // LOAD ALL
  // ===================================================

  const loadAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      await Promise.all([
        loadStats(),
        loadDashboard(),
      ]);

    } catch (err) {
      console.error(
        "Dashboard Load Error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "خطا در دریافت اطلاعات داشبورد"
      );

      setStats(initialStats);
      setDashboard(initialDashboard);

    } finally {
      setLoading(false);
    }
  }, [
    loadStats,
    loadDashboard,
  ]);

  // ===================================================
  // INITIAL LOAD
  // ===================================================

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  // ===================================================
  // REFRESH
  // ===================================================

  const refresh = useCallback(() => {
    return loadAll();
  }, [loadAll]);

  // ===================================================
  // RETURN
  // ===================================================

  return {
    // Stats
    stats,

    // Dashboard data
    revenue: dashboard.revenue,

    appointments:
      dashboard.appointments,

    recentPatients:
      dashboard.recentPatients,

    recentAppointments:
      dashboard.recentAppointments,

    activities:
      dashboard.activities,

    // State
    loading,
    error,

    // Actions
    refresh,
    refreshStats: loadStats,
    loadDashboard,
  };
};

export default useDashboard;