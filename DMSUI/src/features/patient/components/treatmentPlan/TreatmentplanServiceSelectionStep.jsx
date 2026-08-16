import { useEffect, useState } from "react";
import { ClipboardList, Plus, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import WirzadForm from "@/components/form/WizrdForm";

import ServiceApi from "@/features/service/api/ServiceApi";
import StaffApi from "@/features/staff/api/StaffApi";

import RequirementForm from "../serviceSelectionStep/RequirementForm";
import SelectedServicesTable from "../serviceSelectionStep/SelectedServicesTable";

import { TreatmentPlanFields } from "../../fields/TreatmentPlanFields";


import { Dialog, DialogTitle, DialogHeader, DialogContent } from "@/components/ui/dialog";
import TrServiceDetailsDialog from "./trServiceDetailsDialog";


export default function TreatmentPlanServiceSelectionStep({
  formData,
  updateSection,
  updateValue,
  errors,
}) {
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openFeeModal,setOpenFeeModal] = useState(false);
  const [selectedServiceFee, setSelectedServicesFee] = useState(null);
  const [fee, setFee] = useState("");



  // -----------------------------------------
  // Load Services & Doctors
  // -----------------------------------------

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const serviceList = await ServiceApi.lookup({
        mapper: (item) => ({
          value: item.id,
          label: item.serviceName,
          fee: item.fee,
          description: item.description,
          data: item,
        }),
      });

      const doctorList = await StaffApi.lookup({
        mapper: (item) => ({
          value: item.id,
          label: `${item.firstName} ${item.lastName}`,
          data: item,
        }),
      });

      setServices(serviceList);
      setDoctors(doctorList);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------
  // Form Data
  // -----------------------------------------

  const treatmentPlan = formData.treatmentPlan ?? {};

  const selectedServices =
    formData.patientServices ?? [];

  const currentRequirements =
    formData.currentRequirements ?? [];

  
    // -----------------------------------------
  // Open modal for Add Fee for every Service
  // -----------------------------------------

  const handleOpenFeeModel = (service)=>{
    setSelectedServicesFee(service);

    setFee(service.fee ?? "");
    setOpenFeeModal(true);
  }
  
  
  // -----------------------------------------
  // Treatment Plan Fields
  // -----------------------------------------
  const fields = TreatmentPlanFields(
    services,
    doctors,
    handleOpenFeeModel,
  );

  // -----------------------------------------
  // Treatment Plan Change
  // -----------------------------------------

  const handleTreatmentPlanChange = (e) => {
    const { name, value } = e.target;

    updateSection("treatmentPlan", {
      ...treatmentPlan,
      [name]: value,
    });
  };

  // -----------------------------------------
  // Selected Service IDs
  // -----------------------------------------

  const selectedServiceIds =
    treatmentPlan.serviceId ?? [];

  // -----------------------------------------
  // Active Services
  // -----------------------------------------

  const activeServices = services.filter((service) =>
    selectedServiceIds.includes(Number(service.value))
   
  );

  // -----------------------------------------
  // Add Service
  // -----------------------------------------

  const handleAddService = (service) => {
    if (!service) return;

    const exists = selectedServices.some(
      (item) =>
        Number(item.serviceId) === Number(service.value)
    );

    if (exists) return;

    const newService = {
      serviceId: service.value,
      serviceName: service.label,
      description: service.description,
      fee: service.fee,
      requirements: currentRequirements,
    };


    updateSection("patientServices",[
      ...selectedServices,
      newService,
    ]);

  
  };

    useEffect(() => {
  console.log("Patient Services:", formData.patientServices);
}, [formData.patientServices]);


  // -----------------------------------------
  // Remove Service
  // -----------------------------------------

  const handleRemoveService = (id) => {
    updateSection("services", {
      ...(formData.services ?? {}),

      patientServices: selectedServices.filter(
        (item) =>
          Number(item.serviceId) !== Number(id)
      ),
    });
  };


  
  // -----------------------------------------
  // handle service fee and update total fee
  // -----------------------------------------
const handleSaveFee = () => {
  if (!selectedServiceFee) return;

  const serviceId = Number(selectedServiceFee.value);
  const feeValue = Number(fee) || 0;

  const exists = selectedServices.some(
    (service) => Number(service.serviceId) === serviceId
  );

  let updatedServices;

  if (exists) {
    // اگر قبلاً اضافه شده، فقط Fee را تغییر بده
    updatedServices = selectedServices.map((service) =>
      Number(service.serviceId) === serviceId
        ? {
            ...service,
            fee: feeValue,
          }
        : service
    );
  } else {
    // اگر هنوز اضافه نشده، Service را اضافه کن
    updatedServices = [
      ...selectedServices,
      {
        serviceId: serviceId,
        serviceName: selectedServiceFee.label,
        description: selectedServiceFee.description,
        fee: feeValue,
        requirements: [],
      },
    ];
  }

  // محاسبه مجموع فیس
  const totalFee = updatedServices.reduce(
    (sum, service) =>
      sum + Number(service.fee || 0),
    0
  );

  updateSection("patientServices",updatedServices);
  updateSection("payment",{
    ...(formData.payment ?? {}),

      totalFee,
  })

  // بستن Modal
  setOpenFeeModal(false);
  setSelectedServicesFee(null);
  setFee("");
};

  
  // -----------------------------------------
  // Render
  // -----------------------------------------

  return (
    <div className="space-y-4">

      {/* =====================================
          Treatment Plan
      ===================================== */}

      <div>
        {loading ? (
          <div className="py-10 text-center">
            در حال بارگذاری...
          </div>
        ) : (
          <WirzadForm
            title=""
            description=""
            border={false}
            columns={2}
            fields={fields}
            errors={errors}
            values={treatmentPlan}
            onChange={handleTreatmentPlanChange}
            onAddFee={handleOpenFeeModel}
          />
        )}
      </div>

      {/* =====================================
          Selected Services / Requirements
      ===================================== */}

      {activeServices.length > 0 && (
        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-[10px]
            p-1
            shadow-sm
          "
        >

          <div className="mb-2">
            <h3 className="font-bold text-lg">
              خدمات انتخاب شده
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              برای هر خدمت می ‌توانید فیس و نیازمندی‌های آن را مشخص کنید.
            </p>
          </div>

          <div className="space-y-4">

            {activeServices.map((service) => {

              const alreadyAdded =
                selectedServices.some(
                  (item) =>
                    Number(item.serviceId) ===
                    Number(service.value)
                );

              return (
                <div
                  key={service.value}
                  className="
                    border
                    border-slate-200
                    rounded-[10px]
                    p-4
                    bg-slate-50
                  "
                >

                  {/* Service Header */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          h-10
                          w-10
                          rounded-full
                          bg-blue-100
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <ClipboardList
                          size={20}
                          className="text-blue-600"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {service.label}
                        </h4>

                        <p className="text-xs text-slate-500">
                          فیس اصلی:{" "}
                          {Number(
                            service.fee ?? 0
                          ).toLocaleString()}{" "}
                          AFN
                        </p>
                      </div>

                    </div>

                    {/* Add Fee Button */}

                    <Button
                      type="button"
                      size="sm"
                      variant="add"
                      disabled={alreadyAdded}
                      onClick={() =>
                        handleAddService(service)
                      }
                    >
                      <Wallet
                        size={16}
                        className="ms-1"
                      />

                      {alreadyAdded
                        ? "اضافه شده"
                        : "افزودن فیس"}
                    </Button>

                  </div>

                  {/* Requirements */}

                  <div className="mt-4">

                    <RequirementForm
                      service={service.data}
                      formData={formData}
                      updateSection={updateSection}
                    />

                  </div>

                </div>
              );
            })}

          </div>
        </div>
      )}

      {/* =====================================
          Selected Services Table
      ===================================== */}

      <div
        className="
          bg-white
          rounded-[10px]
          border
          border-slate-200
          p-6
          shadow-sm
        "
      >

        <div className="mb-5 flex items-center gap-3">

          <ClipboardList
            className="text-indigo-600"
          />

          <div>
            <h3 className="font-bold">
              خدمات ثبت شده
            </h3>

            <p className="text-sm text-slate-500">
              خلاصه خدمات بیمار
            </p>
          </div>

        </div>

        {selectedServices.length > 0 ? (
          <SelectedServicesTable
            services={selectedServices}
            onRemove={handleRemoveService}
          />
        ) : (
          <div className="py-8 text-center text-slate-500">
            هنوز خدمتی اضافه نشده است.
          </div>
        )}

      </div>

<div className="min-w-[800px]">
   <TrServiceDetailsDialog
      open={openFeeModal}
      onOpenChange={setOpenFeeModal}
      handleSaveFee={handleSaveFee}
      selectedServiceFee={selectedServiceFee}
      formData={formData}
      updateSection={updateSection}
      fee={fee}
    
     
    />
</div>
   
    
     
    </div>
  );
}