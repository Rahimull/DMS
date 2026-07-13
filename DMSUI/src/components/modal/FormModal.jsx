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
  onCancel,
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
        onCancel={onClose}
      />
    </Modal>
  );
};

export default FormModal;