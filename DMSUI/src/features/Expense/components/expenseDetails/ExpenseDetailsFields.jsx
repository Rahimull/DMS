export const ExpenseDetailsFields = (
  expense = [],
  staff = []
) => [
  /* =========================================================
     EXPENSE TYPE
  ========================================================= */

  {
    name: "expenseId",
    label: "نوع مصرف",
    type: "select",
    required: true,
    defaultValue: null,
    placeholder: "نوع مصرف را انتخاب کنید",
    options: expense.map((ex) => ({
      value: ex.id,
      label: ex.name,
    })),
  },

  /* =========================================================
     ITEM NAME
  ========================================================= */

  {
    name: "name",
    label: "نام مورد",
    type: "text",
    required: true,
    maxLength: 150,
    placeholder: "نام مورد مصرف را وارد کنید",
  },

  /* =========================================================
     QUANTITY
  ========================================================= */

  {
    name: "quantity",
    label: "مقدار",
    type: "number",
    required: true,
    min: 1,
    placeholder: "مقدار را وارد کنید",
  },

  /* =========================================================
     QUANTITY UNIT
  ========================================================= */

  {
    name: "quantityUnit",
    label: "واحد",
    type: "select",
    required: true,
    placeholder: "واحد را انتخاب کنید",
    options: [
      { value: "عدد", label: "عدد" },
      { value: "دانه", label: "دانه" },
      { value: "بسته", label: "بسته" },
      { value: "کارتن", label: "کارتن" },
      { value: "کیلوگرام", label: "کیلوگرام" },
      { value: "گرام", label: "گرام" },
      { value: "لیتر", label: "لیتر" },
      { value: "میلی‌لیتر", label: "میلی‌لیتر" },
      { value: "متر", label: "متر" },
      { value: "سانتی‌متر", label: "سانتی‌متر" },
      { value: "جعبه", label: "جعبه" },
      { value: "بوتل", label: "بوتل" },
      { value: "سایر", label: "سایر" },
    ],
  },

  /* =========================================================
     UNIT PRICE
  ========================================================= */

  {
    name: "unitPrice",
    label: "قیمت واحد",
    type: "number",
    required: true,
    min: 0,
    placeholder: "قیمت هر واحد را وارد کنید",
  },

  /* =========================================================
     TOTAL
  ========================================================= */

  {
    name: "total",
    label: "قیمت کل",
    type: "number",
    readOnly: true,
    value: (formData) => {
      const quantity = Number(formData.quantity || 0);
      const unitPrice = Number(formData.unitPrice || 0);

      return quantity * unitPrice;
    },
    placeholder: "قیمت کل",
  },

  /* =========================================================
     PURCHASED BY
  ========================================================= */

  {
    name: "staffId",
    label: "خریداری توسط",
    type: "select",
    required: true,
    defaultValue: null,
    placeholder: "کارمند را انتخاب کنید",
    options: staff.map((member) => ({
      value: member.id,
      label: `${member.firstName} ${member.lastName}`,
    })),
  },

  /* =========================================================
     PURCHASE DATE
  ========================================================= */

  {
    name: "purchaseDate",
    label: "تاریخ خرید",
    type: "date",
    required: true,
    placeholder: "تاریخ خرید را انتخاب کنید",
  },


  /* =========================================================
     NOTE
  ========================================================= */

  {
    name: "note",
    label: "یادداشت",
    type: "text-area",
    maxLength: 500,
    col: 2,
    placeholder: "توضیحات یا یادداشت مربوط به این مصرف...",
  },
];

