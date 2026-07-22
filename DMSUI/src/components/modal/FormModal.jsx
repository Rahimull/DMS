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
    <Modal open={open} onClose={onClose} title={title}>
      <Form
        title=""
        description=""
        fields={fields}
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
        submitText={submitText}
        onCancel={onClose}
        padding="p-3"
        border={false}
        columns={1}
      />
    </Modal>
  );
};

export default FormModal;
