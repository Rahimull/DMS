

import { notify } from "@/utils/notify";
import { useState } from "react";

const useCreatUpdateFormOld = (
  ApiService,
  messages = {},
  option = {}
) => {
  /* ---------------- UI STATE ---------------- */

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [initialvalues, setInitialvalues] = useState({});

  const [refreshKey, setRefreshKey] = useState(0);

  const defaultMessages = {
    create: "اطلاعات با موفقیت ثبت شد.",
    update: "اطلاعات با موفقیت ویرایش شد.",
    delete: "اطلاعات با موفقیت حذف شد.",
  };

  const msg = {
    ...defaultMessages,
    ...messages,
  };

  const {
    useFormData = false,
    createMethod = "create",
    onSuccess,
  } = option;

  /* ========================================================= */
  /* CREATE */
  /* ========================================================= */

  const createRecord = async (data) => {
    try {
      setLoading(true);
      setError(null);

      let payload = data;

      if (useFormData) {
        payload = new FormData();

        Object.entries(data).forEach(([key, value]) => {
          if (
            value !== null &&
            value !== undefined &&
            value !== ""
          ) {
            payload.append(key, value);
          }
        });
      }

      await ApiService[createMethod](payload);

      notify.success(msg.create);

      return true;
    } catch (err) {
      const message =
        err?.response?.data?.message || "Create failed";

      console.error("CREATE ERROR:", err);

      setError(message);
      notify.error(message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  /* ========================================================= */
  /* UPDATE */
  /* ========================================================= */

  const updateRecord = async (id, data) => {
    try {
      setLoading(true);
      setError(null);

      let payload = data;

      if (useFormData) {
        payload = new FormData();

        Object.entries(data).forEach(([key, value]) => {
          if (
            value !== null &&
            value !== undefined &&
            value !== ""
          ) {
            payload.append(key, value);
          }
        });
      }

      await ApiService.update(id, payload);

      notify.success(msg.update);

      return true;
    } catch (err) {
      const message =
        err?.response?.data?.message || "Update failed";

      console.error("UPDATE ERROR:", err);

      setError(message);
      notify.error(message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  /* ========================================================= */
  /* DELETE */
  /* ========================================================= */

  const deleteRecord = async (id) => {
    try {
      setLoading(true);
      setError(null);

      await ApiService.delete(id);

      notify.success(msg.delete);

      return true;
    } catch (err) {
      const message =
        err?.response?.data?.message || "Delete failed";

      setError(message);
      notify.error(message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  /* ========================================================= */
  /* CREATE MODAL */
  /* ========================================================= */

  const openCreate = (values = {}) => {
    setEditing(null);
    setInitialvalues(values);
    setOpenModal(true);
  };

  /* ========================================================= */
  /* EDIT MODAL */
  /* ========================================================= */

  const openEdit = (id, values = {}) => {
    setEditing({
      id,
      ...values,
    });

    setInitialvalues({
      id,
      ...values,
    });

    setOpenModal(true);
  };

  /* ========================================================= */
  /* CLOSE MODAL */
  /* ========================================================= */

  const closeModal = () => {
    setOpenModal(false);
    setInitialvalues({});
    setEditing(null);
  };

  /* ========================================================= */
  /* REFRESH */
  /* ========================================================= */

  const refresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  /* ========================================================= */
  /* SUBMIT */
  /* ========================================================= */

  const handleSubmit = async (data) => {
    console.log("HOOK DATA:", data);

    let success = false;

    if (editing?.id) {
      console.log("UPDATE MODE");
      console.log("EDIT ID:", editing.id);
      success = await updateRecord(
        editing.id,
        data
      );
    } else {
      console.log("CREATE MODE");
      success = await createRecord(data);
    }

    // if (!success) {
    //   return;
    // }
    if (success){
      closeModal();
      refresh();
    }

    // // Close modal
    // closeModal();

    // // Refresh internal hook
    // refresh();

    // Refresh parent data
    if (onSuccess) {
      await onSuccess();
    }
  };

  /* ========================================================= */
  /* DELETE HANDLER */
  /* ========================================================= */

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "آیا از حذف این اطلاعات مطمئن هستید؟"
    );

    if (!ok) {
      return;
    }

    const success = await deleteRecord(id);

    if (!success) {
      return;
    }

    // Refresh internal hook
    refresh();

    // Refresh parent data
    if (onSuccess) {
      await onSuccess();
    }
  };

  /* ========================================================= */
  /* DEFAULT ACTIONS */
  /* ========================================================= */

  const defaultAction = [
    {
      label: "Edit",
      icon: "✏️",
      className: "text-blue-500",
      onClick: openEdit,
    },
    {
      label: "Delete",
      icon: "🗑",
      danger: true,
      onClick: (row) => handleDelete(row.id),
    },
  ];

  /* ========================================================= */
  /* RETURN */
  /* ========================================================= */

  return {
    loading,
    error,

    openModal,
    editing,
    initialvalues,

    refreshKey,
    setRefreshKey,

    openCreate,
    openEdit,
    closeModal,

    handleSubmit,
    handleDelete,

    defaultAction,
    refresh,
  };
};

export default useCreatUpdateFormOld;
