import ConditionApi from "@/features/condition/api/ConditionApi";
import useLoadData from "@/hooks/useLoadData";
import { Activity, HeartPulse, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import ConditionCard from "./medicalHistoryStep/conditionCard";
import ConditionDetailsDialog from "./medicalHistoryStep/ConditionDetailsDialog";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import { Button } from "@/components/ui/button";
import ConditionForm from "@/features/condition/components/ConditionForm";

export default function MedicalHistoryStep({ formData, updateSection }) {
  const filters = useMemo(() => ({}), []);

  const [selectedId, setSelectedId] = useState(null);

  const openDialog = (id) => {
    setSelectedId(id);
  };
  const closeDialog = () => {
    setSelectedId(null);
  };

  // const {
  //   data: conditions = [],
  //   dataLoading,
  //   error,
  // } = useLoadData(ConditionApi, { filters });

  // Add New Condtions

  const messages = {
    create: "عارضه با موفقیت ثبت شد.",
    update: "اطلاعات عارضه با موفقیت ویرایش شد.",
    delete: "عارضه با موفقیت حذف شد.",
  };

    const curd = useCreatUpdateForm(ConditionApi, messages, {useFormData:false});


   const {
    data:conditions= [],
    totalCount,
    pagination,
    setPagination,
    sorting,
    setSorting,
    search,
    setSearch,
    setRefreshKey,
    loading: dataLoading,
    error,
  } = useLoadData(ConditionApi, {
    pageSize: 1000,
    filters,
    refreshKey: curd.refreshKey,
  });

  const selectedCondition = conditions.find((x) => x.id === selectedId);

  const selectedConditions = formData.conditions.conditionDetails ?? {};

  const handleConditionChange = (conditionId, checked) => {
    const updated = { ...selectedConditions };
    if (checked) {
      updated[conditionId] = {
        conditionId,
        severity: "",
        diagnosisDate: "",
        result: "",
        notes: "",
      };
    } else {
      delete updated[conditionId];
    }
    updateSection("conditions", { conditionDetails: updated });
  };

  const handleSaveCondition = (detail) => {
    updateSection("conditions", {
      conditionDetails: {
        ...selectedConditions,
        [detail.conditionId]: detail,
      },
    });
  };


  



  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-slate-800">تاریخچه صحی مریض</h2>

        <p className="mt-2 text-slate-500">
          بیماری‌های زمینه‌ای و سوابق طبی مریض
        </p>
      </div>

      {/* Summary */}

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-slate-500">تعداد بیماری‌ها</p>

          <h3 className="text-2xl font-bold text-blue-600">
            {totalCount}
          </h3>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-slate-500">انتخاب شده</p>

          <h3 className="text-2xl font-bold text-green-600">
            {Object.keys(selectedConditions).length}
          </h3>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-slate-500">وضعیت</p>

          <h3 className="text-2xl font-bold text-orange-600">آماده ثبت</h3>
        </div>
      </div>

      {/* Conditions */}

      <div className="rounded-2xl border bg-white p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeartPulse className="text-blue-600" size={24} />

            <h3 className="text-lg font-bold">بیماری‌های زمینه‌ای</h3>
          </div>

          <Button
            type="button"
            className="flex h-10 w-20 items-center justify-center rounded-xl
                border border-blue-200 bg-blue-600 text-white transition hover:bg-blue-400
              "
            onClick={()=> {curd.openCreate();}}
          >
            <Plus size={30} />
          </Button>
        </div>
        <ConditionForm CURD={curd} />

        {dataLoading && <p>در حال بارگذاری...</p>}

        {error && <p className="text-red-500">{error}</p>}

        <div className="grid md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pl-2">
          {conditions.map((item) => (
            <ConditionCard
              key={item.id}
              condition={item}
              checked={!!selectedConditions[item.id]}
              onCheck={handleConditionChange}
              onEdit={() => openDialog(item.id)}
            />
          ))}

          {/* Selected Condition Details */}
          <ConditionDetailsDialog
            open={selectedId !== null}
            onClose={closeDialog}
            condition={selectedCondition}
            detail={selectedConditions[selectedId]}
            onSave={handleSaveCondition}
          />

          {/* Add New Condition */}
        </div>
      </div>
    </div>
  );
}
