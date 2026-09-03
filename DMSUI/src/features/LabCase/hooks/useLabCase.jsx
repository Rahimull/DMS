
import { useCallback, useEffect, useState } from "react";

import LabCaseApi from "../api/LabCaseApi";

export default function useLabCase(id) {
  const [labCase, setLabCase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* =============================================
     FETCH LAB CASE
  ============================================= */

  const fetchLabCase = useCallback(async () => {
    if (!id) {
      setLabCase(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await LabCaseApi.getById(id);

      console.log("Lab Case Response:", response);

      const result =
        response?.data?.data ??
        response?.data ??
        response;

      setLabCase(result);

      return result;

    } catch (err) {
      console.error("Failed to load Lab Case:", err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "خطا در دریافت اطلاعات کیس لابراتوار";

      setError(message);
      setLabCase(null);

      return null;

    } finally {
      setLoading(false);
    }
  }, [id]);


  /* =============================================
     LOAD DATA
  ============================================= */

  useEffect(() => {
    fetchLabCase();
  }, [fetchLabCase]);


  /* =============================================
     RETURN
  ============================================= */

  return {
    labCase,
    loading,
    error,

    refetch: fetchLabCase,

    setLabCase,
  };
}

