import { notify } from "@/utils/notify";
import { useState } from "react";
// import { toast } from "react-toastify";

const useCreatUpdateForm = (ApiService, messages = {}, option = {}) => {
  /* ---------------- UI STATE ---------------- */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(null);
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

  const { useFormData = false } = option;

  /* ---------------- CREATE ---------------- */

  const createRecord = async (data) => {
    try {
      setLoading(true);
      setError(null);

      let payload = data;

      if (useFormData) {
        payload = new FormData();

        Object.entries(data).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== "") {
            payload.append(key, value);
          }
        });

        console.log("FORM DATA:");

        for (let pair of payload.entries()) {
          console.log(pair[0], pair[1]);
        }
      }

      await ApiService.create(payload);

      notify.success(msg.create);

      return true;
    } catch (err) {
      const message = err?.response?.data?.message || "Create failed";

      console.log(err.response?.data);

      notify.error(message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  // const updateRecord = async (id, data) => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     await ApiService.update(id, data);
  //     notify.info(msg.update);
  //     return true;
  //   } catch (err) {
  //     const message = err?.response?.data?.message || "Update failed";
  //     setError(message);
  //     notify.error(message);
  //     return false;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const updateRecord = async (id, data) => {
    try {
      setLoading(true);
      setError(null);

      let payload = data;

      if (useFormData) {
        payload = new FormData();

        Object.entries(data).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== "") {
            payload.append(key, value);
          }
        });

        console.log("UPDATE FORM DATA:");

        for (let pair of payload.entries()) {
          console.log(pair[0], pair[1]);
        }
      }

      await ApiService.update(id, payload);

      notify.info(msg.update);

      return true;
    } catch (err) {
      const message = err?.response?.data?.message || "Update failed";

      console.log("UPDATE ERROR:", err.response?.data);

      notify.error(message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await ApiService.delete(id);
      notify.success(msg.delete);
      return true;
    } catch (err) {
      const message = err?.response?.data?.message || "Delete failed";
      setError(message);
      notify.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => {
    setEditing(null);
    setOpenModal(true);
  };

  const openEdit = (row) => {
    setEditing(row);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setEditing(null);
  };

  const refersh = () => {
    setRefreshKey((p) => p + 1);
  };

  const handleSubmit = async (data) => {
    console.log("HOOK DATA: ", data);
    let success = false;

    if (editing) {
      console.log("UPDATE MODE");
      success = await updateRecord(editing.id, data);
    } else {
      console.log("CREATE MODE");
      success = await createRecord(data);
    }
    if (success) {
      closeModal();
      refersh();
    }
  };

  const handleDelete = async (id) => {
    const ok = window.confirm("Are you sure?");
    if (!ok) return;

    const success = await deleteRecord(id);
    if (success) refersh();
  };

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

  return {
    // API State
    loading,
    error,

    // UI State
    openModal,
    editing,
    refreshKey,

    // ACTION
    openCreate,
    openEdit,
    closeModal,
    handleSubmit,
    handleDelete,
    defaultAction,
    refersh,
  };
};

export default useCreatUpdateForm;
