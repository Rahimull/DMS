import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import Input from "../common/Input";

const Form = ({
  title = "ثبت معلومات",
  description = "لطفاً معلومات مورد نیاز را تکمیل نمایید",
  fields = [],
  onSubmit,
  initialValues = null,
  submitText = "ذخیره اطلاعات",
  onCancel,
  showActions = true,
  padding = "p-8",
  border= true,
  columns = 2,
}) => {
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

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const {
      name,
      type,
      value,
      checked,
      files,
    } = e.target;

    const newValue =
      type === "checkbox"
        ? checked
        : type === "file"
        ? files?.[0]
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }

    if (serverErrors[name]) {
      setServerErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    let valid = true;

    fields.forEach((field) => {
      if (!field.required) return;

      const value = formData[field.name];

      if (
        value === undefined ||
        value === null ||
        value === "" ||
        value === false
      ) {
        valid = false;

        newErrors[field.name] =
          `${field.label} الزامی است`;
      }
    });

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await onSubmit(formData);

      if (!initialValues) {
        setFormData(initialState);
      }

      setErrors({});
      setServerErrors({});
    } catch (error) {
      const response = error?.response?.data;

      if (response?.errors) {
        const formattedErrors = {};

        Object.keys(response.errors).forEach(
          (key) => {
            formattedErrors[key] =
              response.errors[key][0];
          }
        );

        setServerErrors(formattedErrors);
        return;
      }

      setServerErrors({
        general:
          response?.message ||
          "خطا در ذخیره اطلاعات",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className={`rounded-3xl bg-whie ${border ? "boder border-slate-200 shadow-sm" : ""} ${padding}`}
    >
      {/* Header */}

      <div
       
      >
        <h2
          className="
            text-xl
            font-bold
            text-slate-800
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-slate-500
          "
        >
          {description}
        </p>
      </div>

      {/* General Error */}

      {serverErrors.general && (
        <div
          className="
            mb-6
            rounded-2xl
            border
            border-red-200
            bg-red-50
            p-4
            text-sm
            text-red-600
          "
        >
          {serverErrors.general}
        </div>
      )}

      {/* Fields */}

      <div
         className={`
            grid
          grid-cols-1
          gap-3
          ${columns === 2 ? "md:grid-cols-2" : ""}
          `}
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className={
              field.col === 2
                ? "md:col-span-2"
                : ""
            }
          >
            <Input
              label={field.label}
              required={field.required}
              name={field.name}
              type={field.type || "text"}
              value={formData[field.name]}
              placeholder={field.placeholder}
              autoFocus={field.autoFocus}
              maxLength={field.maxLength}
              onKeyDown={field.onKeyDown}
              disabled={field.disabled}
              rows={field.rows}
              options={field.options || []}
              onChange={handleChange}
              error={
                serverErrors[field.name] ||
                errors[field.name]
              }
            />
          </div>
        ))}
      </div>

      {/* Actions */}

      {showActions && (
        <div
          className="
            mt-8
            flex
            items-center
            justify-end
            gap-4
            border-t
            border-slate-200
            pt-6
          "
        >
          <Button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="
              h-12
              rounded-xl
              border
              border-slate-300
              bg-white
              px-6
              font-medium
              text-slate-700
              hover:bg-slate-50
            "
          >
            انصراف
          </Button>

          <Button
            type="submit"
            disabled={loading}
            className="
              h-12
              rounded-xl
              bg-blue-600
              px-8
              font-semibold
              text-white
              shadow-sm
              hover:bg-blue-700
            "
          >
            {loading ? (
              <div className="flex items-center gap-2">
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
              </div>
            ) : (
              <>💾 {submitText}</>
            )}
          </Button>
        </div>
      )}
    </form>
  );
};

export default Form;