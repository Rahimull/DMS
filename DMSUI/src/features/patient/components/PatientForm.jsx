import { useEffect, useState } from "react";
import { PatientFields } from "../fields/PatientFields";
import FormModal from "@/components/modal/FormModal";
import { createCrudApi } from "@/api/crudApi";

const PatientForm = ({ CURD }) => {

  const [staffOption, setStaffOption] = useState([]);
  const staffApi = createCrudApi("/Staff");
  useEffect(() => {

    const loadDoctors = async () => {
      const options = await staffApi.lookup({
        value: "id",
        label: (x) => `${x.firstName} ${x.lastName}`
      });

      setStaffOption(options);
    };

    loadDoctors();

  }, []);


  const fields = PatientFields.map(field =>
    field.name === "staffId"
      ? {
          ...field,
          options: staffOption,
        }
      : field
  );


  return (
    <FormModal
      open={CURD.openModal}
      onClose={CURD.closeModal}
      title={CURD.editing ? "ویرایش بیمار" : "اضاف کردن بیمار"}
      onSubmit={CURD.handleSubmit}
      loading={CURD.loading}
      initialValues={CURD.editing}
      fields={fields}
    />
  );
};

export default PatientForm;