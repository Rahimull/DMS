import { notify } from "@/utils/notify";
import { useState } from "react";

const useCreateUpdatePrescription = (
  ApiService,
  messages = {},
  option = {}
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [initialvalues, setInitialvalues] = useState(null);

  const [refreshKey, setRefreshKey] = useState(0);

  // ==========================================
  // Prescription Form State
  // ==========================================

  const [formData, setFormData] = useState({});

  // ==========================================
  // Print State
  // ==========================================

  const [printData, setPrintData] = useState(null);

  // ==========================================
  // Messages
  // ==========================================

  const defaultMessages = {
    create: "نسخه با موفقیت ثبت شد.",
    update: "نسخه با موفقیت ویرایش شد.",
    delete: "نسخه با موفقیت حذف شد.",
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

  // ==========================================
  // CREATE
  // ==========================================

  const createRecord = async (data) => {
    try {
      setLoading(true);
      setError(null);

      let payload = data;

      if (useFormData) {
        payload = new FormData();

        Object.entries(data).forEach(
          ([key, value]) => {
            if (
              value !== null &&
              value !== undefined &&
              value !== ""
            ) {
              payload.append(key, value);
            }
          }
        );
      }

      const response =
        await ApiService[createMethod](payload);

      notify.success(msg.create);

      return {
        success: true,
        data: response?.data,
      };
    } catch (err) {
      console.log(
        "========== CREATE ERROR =========="
      );
      console.log(
        "STATUS:",
        err?.response?.status
      );
      console.log(
        "DATA:",
        err?.response?.data
      );
      console.log(
        "MESSAGE:",
        err?.message
      );
      console.log(
        "CONFIG:",
        err?.config
      );
      console.log(
        "=================================="
      );

      const message =
        err?.response?.data?.message ||
        err?.response?.data?.title ||
        "خطا در ثبت نسخه";

      notify.error(message);

      return {
        success: false,
        data: null,
      };
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // UPDATE
  // ==========================================

  const updateRecord = async (
    id,
    data
  ) => {
    try {
      setLoading(true);
      setError(null);

      let payload = data;

      if (useFormData) {
        payload = new FormData();

        Object.entries(data).forEach(
          ([key, value]) => {
            if (
              value !== null &&
              value !== undefined &&
              value !== ""
            ) {
              payload.append(key, value);
            }
          }
        );
      }

      const response =
        await ApiService.update(
          id,
          payload
        );

      notify.info(msg.update);

      return {
        success: true,
        data: response?.data,
      };
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        "خطا در ویرایش نسخه";

      console.error(
        "UPDATE ERROR:",
        err?.response?.data
      );

      notify.error(message);

      return {
        success: false,
        data: null,
      };
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // DELETE
  // ==========================================

  const deleteRecord = async (id) => {
    try {
      setLoading(true);
      setError(null);

      await ApiService.delete(id);

      notify.success(msg.delete);

      return true;
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        "خطا در حذف نسخه";

      setError(message);

      notify.error(message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // CREATE MODAL
  // ==========================================

  const openCreate = (values = {}) => {
    const initialData = {
      ...values,
      prescriptionItems:
        values?.prescriptionItems ?? [],
    };

    setEditing(null);
    setInitialvalues(initialData);
    setFormData(initialData);
    setPrintData(null);

    setOpenModal(true);
  };

  // ==========================================
  // EDIT MODAL
  // ==========================================

  const openEdit = (row) => {
    const initialData = {
      ...row,
      prescriptionItems:
        row?.prescriptionItems ?? [],
    };

    setEditing(row);
    setInitialvalues(initialData);
    setFormData(initialData);
    setPrintData(null);

    setOpenModal(true);
  };

  // ==========================================
  // CLOSE
  // ==========================================

  const closeModal = () => {
    setOpenModal(false);

    setInitialvalues(null);
    setEditing(null);
    setFormData({});
  };

  // ==========================================
  // UPDATE SECTION
  // ==========================================

  const updateSection = (
    section,
    data
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  // ==========================================
  // REFRESH
  // ==========================================

  const refresh = () => {
    setRefreshKey(
      (prev) => prev + 1
    );
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = async (
    mainFormData,
    shouldPrint = false
  ) => {
    const finalData = {
      ...formData,
      ...mainFormData,

      items:
        formData.prescriptionItems ?? [],
    };

    console.log(
      "================================"
    );

    console.log(
      "PRESCRIPTION FINAL DATA:",
      finalData
    );

    console.log(
      "SHOULD PRINT:",
      shouldPrint
    );

    console.log(
      "================================"
    );

    let result;

    // ========================================
    // UPDATE
    // ========================================

    if (editing?.id) {
      result = await updateRecord(
        editing.id,
        finalData
      );
    }

    // ========================================
    // CREATE
    // ========================================

    else {
      result =
        await createRecord(
          finalData
        );
    }

    // ========================================
    // Failed
    // ========================================

    if (!result?.success) {
      return false;
    }

    // ========================================
    // Print Data
    // ========================================

    if (shouldPrint) {
      const savedPrescription = {
        ...finalData,

        prescriptionId:
          result?.data
            ?.prescriptionId ??
          editing?.id,

        id:
          result?.data
            ?.prescriptionId ??
          editing?.id,
      };

      console.log(
        "PRINT DATA:",
        savedPrescription
      );

      setPrintData(
        savedPrescription
      );
    }

    // ========================================
    // Close Modal
    // ========================================

    closeModal();

    // ========================================
    // Refresh List
    // ========================================

    refresh();

    // ========================================
    // Success Callback
    // ========================================

    if (onSuccess) {
      onSuccess(
        finalData,
        shouldPrint,
        result?.data
      );
    }

    return true;
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "آیا از حذف این نسخه مطمئن هستید؟"
    );

    if (!ok) return;

    const success =
      await deleteRecord(id);

    if (success) {
      refresh();
    }
  };

  // ==========================================
  // DEFAULT ACTION
  // ==========================================

  const defaultAction = [
    {
      label: "Edit",
      icon: "✏️",
      className:
        "text-blue-500",
      onClick: openEdit,
    },

    {
      label: "Delete",
      icon: "🗑",
      danger: true,
      onClick: (row) =>
        handleDelete(row.id),
    },
  ];

  // ==========================================
  // RETURN
  // ==========================================

  return {
    loading,
    error,

    // Modal
    openModal,
    editing,

    // Refresh
    refreshKey,
    setRefreshKey,

    // Form
    formData,
    setFormData,
    updateSection,

    // Print
    printData,
    setPrintData,

    // Actions
    openCreate,
    openEdit,
    initialvalues,
    closeModal,

    handleSubmit,
    handleDelete,

    defaultAction,
    refresh,
  };
};

export default useCreateUpdatePrescription;