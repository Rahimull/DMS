import { useEffect, useState } from "react";
import { ClipboardList, Plus, Wallet } from "lucide-react";
import WirzadForm from "@/components/form/WizrdForm";
import ServiceApi from "@/features/service/api/ServiceApi";
import StaffApi from "@/features/staff/api/StaffApi";
import SelectedServicesTable from "../serviceSelectionStep/SelectedServicesTable";
import { TreatmentPlanFields } from "../../fields/TreatmentPlanFields";
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

// const handleTreatmentPlanChange = (e) => {
//     const { name, value } = e.target;

//     console.log("Treatmentplan Change:" , name,value)

//     updateSection("treatmentPlan", {
//       ...treatmentPlan,
//       [name]: value,
//     });
//   };  

const handleTreatmentPlanChange = (e) => {
  const { name, value } = e.target;

  console.log("TreatmentPlan Change:", name, value);

  // =================================================
  // Service Selection
  // =================================================

  if (name === "serviceId") {
    const selectedIds = Array.isArray(value)
      ? value.map(Number)
      : [Number(value)];

    const currentServices = Array.isArray(
      formData.patientServices
    )
      ? formData.patientServices
      : [];

    const updatedServices = selectedIds.map((serviceId) => {
      // اگر قبلاً در patientServices وجود دارد
      // requirements و fee آن حفظ شود
      const existingService = currentServices.find(
        (item) =>
          Number(item.serviceId) === Number(serviceId)
      );

      if (existingService) {
        return existingService;
      }

      // Service از لیست اصلی
      const service = services.find(
        (item) =>
          Number(item.value) === Number(serviceId)
      );

      return {
        serviceId: Number(serviceId),
        serviceName: service?.label ?? "",
        description: service?.description ?? "",
        fee: Number(service?.fee ?? 0),
        requirements: [],
      };
    });

    console.log(
      "UPDATED PATIENT SERVICES:",
      updatedServices
    );

    // -----------------------------
    // Update Treatment Plan
    // -----------------------------

    updateSection("treatmentPlan", {
      ...treatmentPlan,
      serviceId: selectedIds,
    });

    // -----------------------------
    // Update Patient Services
    // -----------------------------

    updateSection(
      "patientServices",
      updatedServices
    );

    return;
  }

  // =================================================
  // Other Treatment Plan Fields
  // =================================================

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

  const serviceId = Number(service.value);

  const exists = selectedServices.some(
    (item) =>
      Number(item.serviceId) === serviceId
  );

  if (exists) return;

  const newService = {
    serviceId,
    serviceName: service.label,
    description: service.description ?? "",
    fee: Number(service.fee ?? 0),

    // مهم
    requirements: [],
  };

  const updatedServices = [
    ...selectedServices,
    newService,
  ];

  console.log(
    "SERVICE SELECTED:",
    newService
  );

  console.log(
    "UPDATED PATIENT SERVICES:",
    updatedServices
  );

  updateSection(
    "patientServices",
    updatedServices
  );
};

    useEffect(() => {
  console.log("Patient Services:", formData.patientServices);
}, [formData.patientServices]);


  // -----------------------------------------
  // Remove Service
  // -----------------------------------------

const handleRemoveService = (id) => {
  const updatedServices =
    selectedServices.filter(
      (item) =>
        Number(item.serviceId) !== Number(id)
    );

  updateSection(
    "patientServices",
    updatedServices
  );

  const totalFee = updatedServices.reduce(
    (sum, service) =>
      sum + Number(service.fee || 0),
    0
  );

  updateSection(
    "payment",
    {
      ...(formData.payment ?? {}),
      totalFee,
    }
  );
};


  
  // -----------------------------------------
  // handle service fee and update total fee
  // -----------------------------------------
const handleSaveFee = () => {
  if (!selectedServiceFee) return;

  const serviceId = Number(selectedServiceFee.value);
  const feeValue = Number(fee) || 0;

  const exists = selectedServices.some(
    (service) =>
      Number(service.serviceId) === serviceId
  );

  let updatedServices;

  if (exists) {
    // فقط Fee همان Service تغییر کند
    updatedServices = selectedServices.map(
      (service) =>
        Number(service.serviceId) === serviceId
          ? {
              ...service,
              fee: feeValue,
            }
          : service
    );
  } else {
    // Service جدید
    updatedServices = [
      ...selectedServices,
      {
        serviceId,
        serviceName: selectedServiceFee.label,
        description:
          selectedServiceFee.description ?? "",
        fee: feeValue,
        requirements: [],
      },
    ];
  }

  const totalFee = updatedServices.reduce(
    (sum, service) =>
      sum + Number(service.fee || 0),
    0
  );

  updateSection(
    "patientServices",
    updatedServices
  );

  updateSection(
    "payment",
    {
      ...(formData.payment ?? {}),
      totalFee,
    }
  );

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


   <TrServiceDetailsDialog
      open={openFeeModal}
      onOpenChange={setOpenFeeModal}
      handleSaveFee={handleSaveFee}
      selectedServiceFee={selectedServiceFee}
      formData={formData}
      updateSection={updateSection}
      fee={fee}
      setFee={setFee}
    
     
    />

   
    
     
    </div>
  );
}