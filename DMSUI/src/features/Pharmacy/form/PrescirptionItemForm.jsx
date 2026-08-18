import { useState } from "react";
import { Plus } from "lucide-react";

import WizardForm from "@/components/form/WizrdForm";
import { PrescriptionItemFields } from "../fields/PrescriptionItemFields";
import { Button } from "@/components/ui/button";

const emptyItem = {
  medicineInventoryId: "",
  dosage: "",
  frequency: "",
  duration: "",
  route: "",
  instructions: "",
  quantity: 1,
  notes: "",
};

export default function PrescriptionItemForm({
  formData,
  updateSection,
  medicines = [],
}) {
  const [item, setItem] = useState(emptyItem);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("Data: ", formData)

  const handleAdd = () => {
    if (!item.medicineInventoryId) {
      return;
    }

    const currentItems = Array.isArray(
      formData?.prescriptionItems
    )
      ? formData.prescriptionItems
      : [];

    const newItem = {
      ...item,
      medicineInventoryId: Number(
        item.medicineInventoryId
      ),
      quantity: Number(item.quantity),
    };

    updateSection("prescriptionItems", [
      ...currentItems,
      newItem,
    ]);

    setItem(emptyItem);
  };

  return (
    <div className="flex flex-col pb-5 px-5">

        <WizardForm
        title=""
        description=""
        columns={2}
        border={false}
        padding=""
        fields={PrescriptionItemFields(medicines)}
        values={item}
        onChange={handleChange}
      />

      <div className="mt-3 flex justify-end">
        <Button
          type="button"
          onClick={handleAdd}
          disabled={!item.medicineInventoryId}
          className="gap-2"
        >
          <Plus size={17} />
          افزودن دوا
        </Button>
      </div>

    </div>
  );
}