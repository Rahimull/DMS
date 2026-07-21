import { useEffect, useState } from "react";

import { createCrudApi } from "@/api/crudApi";

import TreatmentPlanApi from "@/features/treatment/api/TreatmentPlanApi";
import { toast } from "sonner";

const patientApi = createCrudApi("/Patient");
const staffApi = createCrudApi("/Staff");
const conditionApi = createCrudApi("/Condition");
const serviceApi = createCrudApi("/Service");

const useTreatmentPlan = (initialData) => {
  const [loading, setLoading] = useState(false);

  const [patients, setPatients] = useState([]);

  const [doctors, setDoctors] = useState([]);

  const [conditions, setConditions] = useState([]);

  const [services, setServices] = useState([]);

  const [openCondition, setOpenCondition] = useState(false);

  const [openService, setOpenService] = useState(false);

  const [editingCondition, setEditingCondition] = useState(null);

  const [form, setForm] = useState({
    patientId: null,

    staffId: null,

    startDate: "",

    endDate: "",

    status: "Draft",

    round: 1,

    installments: 1,

    discount: 0,

    totalFee: 0,

    conditions: [],

    services: [],

    notes: "",

    notification: "",
  });

  // =========================
  // Edit Treatment plan
  // =========================
  useEffect(() => {
    if (!initialData) return;

    setForm({
      id: initialData.id,
      patientId: initialData.patientId,
      staffId: initialData.staffId,
      startDate: initialData.startDate?.split("T")[0] ?? "",
      endDate: initialData.endDate?.split("T")[0] ?? "",
      status: initialData.status,
      round: initialData.round,
      installments: initialData.installments,
      notes: initialData.notes,
      notification: initialData.notification,
      discount: initialData.discount ?? 0,
      totalFee: initialData.totalFee ?? 0,

      conditions:
        initialData.conditionDetails?.map((x) => ({
          id: x.id,
          conditionId: x.conditionId,
          severity: s.severity,
          notes: x.notes,
        })) ?? [],
      services:
        initialData.planServices?.map((x) => ({
          id: x.id,
          serviceId: x.serviceId,
          serviceFee: x.serviceFee,
          totalFee: x.totalFee,
        })) ?? [],
    });
  }, [initialData]);
  // =========================
  // Load Lookup Data
  // =========================

  console.log("Edit Data: ", initialData);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [patientData, staffData, conditionData, serviceData] =
        await Promise.all([
          patientApi.lookup({
            value: "id",

            label: (x) => `${x.firstName} ${x.lastName}`,
          }),

          staffApi.lookup({
            value: "id",

            label: (x) => `${x.firstName} ${x.lastName}`,
          }),

          conditionApi.lookup({
            value: "id",

            label: (x) => x.name,
          }),

          serviceApi.lookup({
            value: "id",

            label: (x) => x.name,
          }),
        ]);

      setPatients(patientData);

      setDoctors(staffData);

      setConditions(conditionData);

      setServices(serviceData);
    } catch (error) {
      console.log("LOOKUP ERROR", error);
    }
  };

  // =========================
  // Update Form
  // =========================

  const updateForm = (data) => {
    setForm((prev) => ({
      ...prev,

      ...data,
    }));
  };

  // =========================
  // Conditions
  // =========================

  const addCondition = (item) => {
    console.log("Add Conition: ", item);

    setForm((prev) => ({
      ...prev,

      conditions: [
        ...prev.conditions,

        {
          ...item,
          conditionId: Number(item.conditionId),

          id: Date.now(),
        },
      ],
    }));

    setOpenCondition(false);
  };

  const editCondition = (item) => {
    setEditingCondition(item);

    setOpenCondition(true);
  };

  const deleteCondition = (id) => {
    setForm((prev) => ({
      ...prev,

      conditions: prev.conditions.filter((x) => x.id !== id),
    }));
  };

  const closeCondition = () => {
    setOpenCondition(false);

    setEditingCondition(null);
  };

  // =========================
  // Services
  // =========================

  const addService = (item) => {
    if (!item.serviceId) {
      alert("لطفاً خدمت را انتخاب کنید");

      return;
    }

    const totalFee = Number(item.totalFee || 0);

    setForm((prev) => ({
      ...prev,

      services: [
        ...prev.services,

        {
          ...item,

          id: Date.now(),
        },
      ],

      totalFee: prev.totalFee + totalFee,
    }));

    setOpenService(false);
  };

  const deleteService = (id) => {
    setForm((prev) => {
      const item = prev.services.find((x) => x.id === id);

      return {
        ...prev,

        services: prev.services.filter((x) => x.id !== id),

        totalFee: prev.totalFee - Number(item?.totalFee || 0),
      };
    });
  };

  const closeService = () => {
    setOpenService(false);
  };

  // =========================
  // Save Treatment Plan
  // =========================
  const resetForm = () => {
    setForm({
      patientId: null,
      staffId: null,
      startDate: "",
      endDate: "",
      status: "Draft",
      round: 1,
      installments: 1,
      discount: 0,
      totalFee: 0,
      conditions: [],
      services: [],
      notes: "",
      notification: "",
    });

    setEditingCondition(null);

    setOpenCondition(false);

    setOpenService(false);
  };

  // =========================
  // Save Treatment Plan
  // =========================

  const save = async () => {
    try {
      if (!form.patientId) {
        alert("بیمار انتخاب نشده است");

        return false;
      }

      if (!form.staffId) {
        alert("داکتر انتخاب نشده است");

        return false;
      }

      if (!form.startDate) {
        alert("تاریخ شروع وارد نشده است");

        return false;
      }

      if (form.conditions.some((x) => !x.conditionId)) {
        alert("تشخیص نامعتبر است");

        return false;
      }

      if (form.services.some((x) => !x.serviceId)) {
        alert("خدمت نامعتبر است");

        return false;
      }

      setLoading(true);

      const payload = {
        patientId: Number(form.patientId),

        staffId: Number(form.staffId),

        startDate: form.startDate,

        endDate: form.endDate || null,

        status: form.status,

        round: Number(form.round),

        installments: Number(form.installments),

        discount: Number(form.discount || 0),

        notes: form.notes,

        notification: form.notification,

        services: form.services.map((item) => ({
          serviceId: Number(item.serviceId),

          serviceFee: Number(item.serviceFee || 0),

          totalFee: Number(item.totalFee || 0),
        })),

        conditions: form.conditions.map((item) => ({
          conditionId: Number(item.conditionId),

          severity: item.severity || "",

          notes: item.notes || "",
        })),
      };

      console.log("PAYLOAD:", JSON.stringify(payload, null, 2));

      if (form.id) {
        const response = await TreatmentPlanApi.update(form.id, payload);
        toast.success(
          response.data.message || "پلان تداوی با موفقیت ویرایش شد.",
        );
        
        return response.data;
      } else {
        const response = await TreatmentPlanApi.save(payload);
        toast.success(response.data.message || "پلان تداوی با موفقیت ثبت شد.");
        resetForm();
      }
      return response.data;
    } catch (error) {
      console.log("SAVE TREATMENT ERROR", error);
      toast.error(error.response?.data?.message ?? "خطا در ثبت پلان تداوی");

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,

    form,

    setForm,

    updateForm,

    patients,

    doctors,

    conditions,

    services,

    openCondition,

    setOpenCondition,

    closeCondition,

    openService,

    setOpenService,

    closeService,

    editingCondition,

    addCondition,

    editCondition,

    deleteCondition,

    addService,

    deleteService,

    save,
    resetForm,
  };
};

export default useTreatmentPlan;
