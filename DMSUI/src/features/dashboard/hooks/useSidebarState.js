import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "dms_sidebar_state";



// ✅ Safe parser (prevents crash)
function safeParseOpenGroups(value) {
  try {
    if (!value) return [];

    const parsed = JSON.parse(value);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useSidebarState() {
  const [state, setState] = useState({
    openGroups: [],
    initialized: false,
  });

  // ===============================
  // 1. INIT ONLY ONCE
  // ===============================
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    const openGroups = safeParseOpenGroups(saved);

    setState({
      openGroups,
      initialized: true,
    });
  }, []);

  // ===============================
  // 2. SAVE TO LOCALSTORAGE (SAFE)
  // ===============================
  useEffect(() => {
    if (!state.initialized) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state.openGroups)
    );
  }, [state.openGroups, state.initialized]);

  // ===============================
  // 3. TOGGLE GROUP (SAFE + IMMUTABLE)
  // ===============================
  const toggleGroup = useCallback((group) => {
    setState((prev) => {
      const list = Array.isArray(prev.openGroups)
        ? prev.openGroups
        : [];

      const exists = list.includes(group);

      return {
        ...prev,
        openGroups: exists
          ? list.filter((g) => g !== group)
          : [...list, group],
      };
    });
  }, []);

  // ===============================
  // 4. CHECK GROUP (SAFE)
  // ===============================
  const isGroupOpen = useCallback(
    (group) => {
      return Array.isArray(state.openGroups)
        ? state.openGroups.includes(group)
        : false;
    },
    [state.openGroups]
  );

  // ===============================
  // 5. OPEN GROUP (IDEMPOTENT)
  // ===============================
  const openGroup = useCallback((group) => {
    setState((prev) => {
      const list = Array.isArray(prev.openGroups)
        ? prev.openGroups
        : [];

      if (list.includes(group)) return prev;

      return {
        ...prev,
        openGroups: [...list, group],
      };
    });
  }, []);

  // ===============================
  // RETURN API
  // ===============================
  return {
    openGroups: state.openGroups,
    initialized: state.initialized,
    toggleGroup,
    openGroup,
    isGroupOpen,
  };
}