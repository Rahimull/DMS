import Modal from "./Modal";
import Form from "../form/Form";

const FormModal = ({
  open,
  onClose,
  title,
  fields,
  initialValues,
  onSubmit,
  loading,
  submitText = "ذخیره",
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
    >
      <Form
        fields={fields}
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
        submitText={submitText}
      />
    </Modal>
  );
};

export default FormModal;