import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import Input from "../common/Input";

const From = ({
  fields,
  onSubmit,
  initialValues = null,
  submitText = "Submit",
  onCancel,
}) => {
  // ---------------------------
  // 1. Initial State Builder
  // ---------------------------
  const initialState = useMemo(() => {
    const state = {};

    fields.forEach((f) => {
      if (f.type === "checkbox") {
        state[f.name] = Boolean(f.defaultValue ?? false);
      } else {
        state[f.name] = f.defaultValue ?? "";
      }
    });

    return state;
  }, [fields]);

  // ---------------------------
  // 2. States
  // ---------------------------
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ---------------------------
  // 3. Sync (Edit / Add mode)
  // ---------------------------
  useEffect(() => {
    if (initialValues) {
      setFormData({
        ...initialState,
        ...initialValues,
      });
    } else {
      setFormData(initialState);
    }
  }, [initialValues, initialState]);

  // ---------------------------
  // 4. Handle Change
  // ---------------------------
  // const handleChange = (e) => {
  //   const { name, type, value, checked, files } = e.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]:
  //       type === "checkbox" ? checked : type === "file" ? files[0] : value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    const newValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData((prev) => ({
      ...prev,

      [name]: newValue,
    }));

    console.log("FORM CHANGE:", name, newValue);
  };

  // ---------------------------
  // 5. Validation
  // ---------------------------
  const validate = () => {
    const newErrors = {};
    let valid = true;

    fields.forEach((f) => {
      console.log("Field: ", f);
      if (f.required) {
        if (f.type === "checkbox") {
          if (!formData[f.name]) {
            valid = false;
            newErrors[f.name] = `${f.label} is required`;
          }
        } else {
          if (!formData[f.name]) {
            valid = false;
            newErrors[f.name] = `${f.label} is required`;
          }
        }
      }
    });
    setErrors(newErrors);
    return valid;
  };

  // ---------------------------
  // 6. Submit Handler
  // ---------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      console.log("Before Submit");
      await onSubmit(formData);
      console.log(formData);
      console.log("After Submit");

      if (!initialValues) {
        setFormData(initialState);
      }
    } catch (error) {
      const response = error.response?.data;

      console.log("API ERROR:", response);

      if (response?.errors) {
        const formattedErrors = {};

        Object.keys(response.errors).forEach((key) => {
          formattedErrors[key] = response.errors[key][0];
        });

        setServerErrors(formattedErrors);
        return;
      }

      setServerErrors({
        general: response?.message || "Error occurred",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // 7. UI
  // ---------------------------
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded shadow mt-6"
    >
      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.col === 2 ? "col-span-2" : "col-span-1"}
          >
            <div className="flex items-end gap-2">
              {/* Start Adornment */}
              {field.startAdornment && (
                <div className="pb-1">{field.startAdornment}</div>
              )}

              {/* Input */}
              <div className="flex-1">
                <Input
                  label={field.label}
                  name={field.name}
                  type={field.type || "text"}
                  autoFocus={field.autoFocus || false}
                  value={formData[field.name] ?? ""}
                  onChange={handleChange}
                  options={field.options || []}
                  maxLength={field.maxLength || 100}
                  placeholder={field.placeholder}
                  error={serverErrors[field.name] || errors[field.name]}
                />
              </div>

              {/* End Adornment */}
              {field.endAdornment && (
                <div className="pb-1">{field.endAdornment}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-5">
        {/* Cancel Button */}
        <Button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="
            rounded-xl  
            border
            border-slate-300
            bg-white
            px-6
            py-4
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            transition-all
            duration-200
            hover:bg-slate-100
            hover:shadow-md
            focus:outline-none
            focus:ring-4
            focus:ring-slate-200
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          انصراف
        </Button>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            px-8
            py-4
            text-sm
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-200
            hover:bg-blue-700
            hover:shadow-lg
            focus:outline-none
            focus:ring-4
            focus:ring-blue-200
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? (
            <>
              <span
                className="
                  h-4
                  w-4
                  animate-spin
                  rounded-full
                  border-2
                  border-white
                  border-t-transparent
                "
              />
              در حال ذخیره...
            </>
          ) : (
            <>💾 {submitText || "ذخیره اطلاعات"}</>
          )}
        </Button>
      </div>
    </form>
  );
};

export default From;
