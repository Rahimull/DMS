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
  discription = "",
  columns,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
    >
      <Form
        title=""
        description={discription}
        fields={fields}
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
        submitText={submitText}
        onCancel={onCancel ?? onClose}
        padding="p-3"
        border={false}
        columns={columns}
      >
        {children}
      </Form>
    </Modal>
  );
};

export default FormModal;