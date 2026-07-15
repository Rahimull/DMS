import { useEffect, useState } from "react";

import { createCrudApi } from "@/api/crudApi";

import TreatmentPlanApi from "@/features/treatment/api/TreatmentPlanApi";
import PlanServiceApi from "@/features/treatment/api/PlanServiceApi";
import ConditionDetailApi from "@/features/treatment/api/ConditionDetailApi";


const patientApi = createCrudApi("/Patient");
const staffApi = createCrudApi("/Staff");
const conditionApi = createCrudApi("/Condition");
const serviceApi = createCrudApi("/Service");

const useTreatmentPlan = () => {
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

    status: "پیش‌نویس",

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
  // Load Lookup Data
  // =========================

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
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
  };

  // =========================
  // Form Update
  // =========================

  const updateForm = (data) => {
    setForm((prev) => ({
      ...prev,

      ...data,
    }));
  };

  // =========================
  // Condition
  // =========================

  const addCondition = (item) => {
    setForm((prev) => ({
      ...prev,

      conditions: [
        ...prev.conditions,

        {
          ...item,

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
  // Service
  // =========================

  const addService = (item) => {
    setForm((prev) => ({
      ...prev,

      services: [
        ...prev.services,

        {
          ...item,

          id: Date.now(),

          totalFee: Number(item.serviceFee) * Number(item.quantity || 1),
        },
      ],
    }));

    setOpenService(false);
  };

  const deleteService = (id) => {
    setForm((prev) => ({
      ...prev,

      services: prev.services.filter((x) => x.id !== id),
    }));
  };

  const closeService = () => {
    setOpenService(false);
  };

  // =========================
  // Save Treatment
  // =========================

  const save = async () => {
    try {
      setLoading(true);

      const planResponse = await TreatmentPlanApi.create({
        patientId: form.patientId,

        staffId: form.staffId,

        startDate: form.startDate,

        endDate: form.endDate,

        status: form.status,

        round: form.round,

        installments: form.installments,

        discount: form.discount,

        notes: form.notes,

        notification: form.notification,
      });

      const planId = planResponse.data.id;

      // Save Services

      for (const item of form.services) {
        await PlanServiceApi.create({
          treatmentPlanId: planId,

          serviceId: item.serviceId,

          serviceFee: item.serviceFee,

          totalFee: item.totalFee,
        });
      }

      // Save Conditions

      for (const item of form.conditions) {
        await ConditionDetailApi.create({
          patientId: form.patientId,

          conditionId: item.conditionId,

          severty: item.severty,

          notes: item.notes,
        });
      }

      return true;
    } catch (error) {
      console.log("SAVE ERROR", error);

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
  };
};

export default useTreatmentPlan;
