
import { useCallback, useEffect, useState } from "react";

import ExpenseApi from "../api/ExpenseApi";

export default function useExpense(id) {
  const [Expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* =============================================
     FETCH LAB CASE
  ============================================= */

  const fetchExpense = useCallback(async () => {
    if (!id) {
      setExpense(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await ExpenseApi.getById(id);

      console.log("Lab Case Response:", response);

      const result =
        response?.data?.data ??
        response?.data ??
        response;

      setExpense(result);

      return result;

    } catch (err) {
      console.error("Failed to load Lab Case:", err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "خطا در دریافت اطلاعات کیس لابراتوار";

      setError(message);
      setExpense(null);

      return null;

    } finally {
      setLoading(false);
    }
  }, [id]);


  /* =============================================
     LOAD DATA
  ============================================= */

  useEffect(() => {
    fetchExpense();
  }, [fetchExpense]);


  /* =============================================
     RETURN
  ============================================= */

  return {
    Expense,
    loading,
    error,

    refetch: fetchExpense,

    setExpense,
  };
}

