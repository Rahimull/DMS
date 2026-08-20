import React from "react";
import DentalLogo from "@/components/common/DentalLogo";

export default function PrescriptionPrint({
  data,
  patients = [],
  doctors = [],
  medicines = [],
}) {
  if (!data) return null;


  // =====================================================
  // LOOKUPS
  // =====================================================

  const patient = patients.find(
    (x) => Number(x.id) === Number(data.patientId)
  );

  const doctor = doctors.find(
    (x) => Number(x.id) === Number(data.staffId)
  );

  // =====================================================
  // PRESCRIPTION ITEMS
  // =====================================================

//  const items = Array.isArray(data?.prescriptionItems)
//   ? data.prescriptionItems
//   : [];

 const items = data?.prescriptionItem ?? [];

  // =====================================================
  // MEDICINE HELPERS
  // =====================================================

 const getMedicine = (medicineInventoryId) => {
  return medicines.find(
    (medicine) =>
      Number(medicine.id) ===
      Number(medicineInventoryId)
  );
};

const getMedicineName = (medicineInventoryId) => {
  const medicine = getMedicine(
    medicineInventoryId
  );

  return medicine?.name1 || "-";
};

const getMedicineGenericName = (
  medicineInventoryId
) => {
  const medicine = getMedicine(
    medicineInventoryId
  );

  return medicine?.name2 || "";
};

const getMedicineStrength = (
  medicineInventoryId
) => {
  const medicine = getMedicine(
    medicineInventoryId
  );

  return medicine?.strength || "";
};

  // =====================================================
  // PATIENT
  // =====================================================

  const patientName =
    data.patientName ||
    (patient
      ? `${patient.firstName || ""} ${
          patient.lastName || ""
        }`.trim()
      : "-");

  const patientAge =
    data.patientAge ||
    patient?.age ||
    "-";

  const patientPhone =
    data.patientPhone ||
    patient?.phone ||
    patient?.phoneNumber ||
    "-";

  // =====================================================
  // DOCTOR
  // =====================================================

  const doctorName =
    data.staffName ||
    (doctor
      ? `${doctor.firstName || ""} ${
          doctor.lastName || ""
        }`.trim()
      : "-");

  const doctorPhone = doctor
    ? doctor.familyPhone1 ||
      doctor.familyPhone2 ||
      doctor.phone ||
      "-"
    : "-";

  const doctorSpecialty =
    doctor?.specialty ||
    doctor?.specialization ||
    "متخصص دندان";

  // =====================================================
  // PRESCRIPTION
  // =====================================================

  const prescriptionNumber =
    data.prescriptionNumber ||
    data.prescriptionId ||
    data.id ||
    "-";

  const prescriptionDate = data.prescriptionDate
    ? new Date(
        data.prescriptionDate
      ).toLocaleDateString("fa-IR")
    : new Date().toLocaleDateString("fa-IR");

 

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div
      dir="rtl"
      className="
        prescription-page
        mx-auto
        min-h-[210mm]
        w-[148mm]
        bg-white
        text-slate-900
        shadow-xl
      "
    >
      <div
        className="
          mx-auto
          w-full
          bg-white
          px-6
          py-5
          text-slate-900
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <header
          className="
            mb-4
            grid
            grid-cols-[1fr_2fr_1fr]
            items-center
            gap-5
          "
        >
          {/* Logo */}

          <div className="flex items-center">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2
                border-blue-200
                bg-blue-50
              "
            >
              <DentalLogo size="lg" />
            </div>
          </div>

          {/* Clinic */}

          <div className="text-center">
            <h2
              className="
                m-0
                font-extrabold
                text-blue-500
              "
            >
              کلینیک دندان و زیبایی نورستانی
            </h2>

            <p
              className="
                mt-1.5
                text-[12px]
                text-slate-600
              "
            >
              ارائه دهنده خدمات تخصصی دندان
            </p>
          </div>

          {/* Contact */}

          <div
            className="
              text-right
              text-[10px]
              leading-7
              text-slate-700
            "
          >
            <div dir="ltr">
              <span className="text-slate-400">
                📞
              </span>{" "}
              +93 70 596 3177
            </div>

            <div dir="ltr">
              <span className="text-slate-400">
                ☎
              </span>{" "}
              +93 70 596 3177
            </div>

            <div>
              <span className="text-slate-400">
                📍
              </span>{" "}
              چهلستون، ناحیه 7
            </div>
          </div>
        </header>

        {/* =================================================
            HEADER LINE
        ================================================= */}

        <div
          className="
            relative
            mt-[18px]
            h-0.5
            bg-blue-300
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[34px]
              w-[34px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              bg-white
            "
          >
          
          </div>
        </div>

        {/* =================================================
            PRESCRIPTION TITLE
        ================================================= */}

        <section
          className="
            mt-2
            grid
            grid-cols-3
            items-center
          "
        >
          {/* Number + Date */}

          <div
            className="
              text-right
              text-[11px]
              leading-6
            "
          >
            <div>
              <strong>شماره نسخه:</strong>{" "}
              {prescriptionNumber}
            </div>

            <div>
              <strong>تاریخ:</strong>{" "}
              {prescriptionDate}
            </div>
          </div>

          {/* Center */}

          <div className="text-center">
            <h2
              className="
                m-0
                text-[27px]
                font-black
              "
            >
              نسخه طبی
            </h2>

            <div
              dir="ltr"
              className="
                mt-1
                flex
                items-center
                justify-center
                gap-3
                font-serif
                text-[25px]
                font-medium
              "
            >
              <span className="h-px w-14 bg-blue-500" />

              Rx

              <span className="h-px w-14 bg-blue-500" />
            </div>
          </div>

          <div />
        </section>

        {/* =================================================
            PATIENT / DOCTOR
        ================================================= */}

        <section
          className="
            mt-2
            grid
            grid-cols-2
            overflow-hidden
            rounded-lg
            border-[1.5px]
            border-blue-500
          "
        >
          {/* Patient */}

          <div className="p-3.5 px-[18px]">
            <div
              className="
                mb-3
                text-sm
                font-extrabold
                text-blue-500
              "
            >
              <span className="ml-1">
                👤
              </span>

              مشخصات بیمار
            </div>

            <div
              className="
                flex
                justify-between
                gap-4
                py-1
                text-[10px]
              "
            >
              <span>
                نام و نام خانوادگی:
              </span>

              <strong>
                {patientName}
              </strong>
            </div>

            <div
              className="
                flex
                justify-between
                gap-4
                py-1
                text-[10px]
              "
            >
              <span>سن:</span>

              <strong>
                {patientAge}
              </strong>
            </div>

            <div
              className="
                flex
                justify-between
                gap-4
                py-1
                text-[10px]
              "
            >
              <span>تلفن:</span>

              <strong>
                {patientPhone}
              </strong>
            </div>
          </div>

          {/* Doctor */}

          <div
            className="
              border-r
              border-slate-300
              p-3.5
              px-[18px]
            "
          >
            <div
              className="
                mb-3
                text-sm
                font-extrabold
                text-blue-500
              "
            >
              <span className="ml-1">
                👨‍⚕️
              </span>

              پزشک معالج
            </div>

            <div
              className="
                flex
                justify-between
                gap-4
                py-1
                text-[10px]
              "
            >
              <span>
                نام و نام خانوادگی:
              </span>

              <strong>
                {doctorName}
              </strong>
            </div>

            <div
              className="
                flex
                justify-between
                gap-4
                py-1
                text-[10px]
              "
            >
              <span>تخصص:</span>

              <strong>
                {doctorSpecialty}
              </strong>
            </div>

            <div
              className="
                flex
                justify-between
                gap-4
                py-1
                text-[10px]
              "
            >
              <span>
                شماره تلفن:
              </span>

              <strong dir="ltr">
                {doctorPhone}
              </strong>
            </div>
          </div>
        </section>

        {/* =================================================
            MEDICINES
        ================================================= */}

        <section className="mt-2">

          {/* Table Header */}

          <div
            className="
              grid
              min-h-[25px]
              grid-cols-[0.45fr_2.1fr_1.1fr_1.2fr_1fr_1.2fr_0.7fr]
              items-center
              rounded-t-md
              bg-gradient-to-l
              from-blue-500
              to-blue-100
              px-1
              text-center
              text-[9px]
              font-bold
              text-white
            "
          >
            <div>ردیف</div>

            <div className="text-right">
              نام دوا
            </div>
            <div>
              مقدار مصرف
            </div>

            <div>
              تعداد مصرف
            </div>

            <div>
              مدت مصرف
            </div>

            <div>
              طریقه مصرف
            </div>

            <div>
              تعداد
            </div>
          </div>

          {/* =================================================
              MEDICINE ROWS
          ================================================= */}

          {items.map((item, index) => {
  const medicine = getMedicine(
    item.medicineInventoryId
  );

  return (
    <div
      key={`${item.medicineInventoryId}-${index}`}
      className="
        grid
        min-h-[40px]
        grid-cols-[0.45fr_2.1fr_1.1fr_1.2fr_1fr_1.2fr_0.7fr]
        items-center
        border-b
        border-slate-300
        text-center
        text-[9px]
        break-inside-avoid
      "
    >
      {/* ردیف */}

      <div className="px-1.5 py-2">
        <span
          className="
            inline-flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-blue-500
            text-[9px]
            font-bold
            text-white
          "
        >
          {index + 1}
        </span>
      </div>

      {/* دوا */}

      <div className="px-1 text-right">
        <strong className="block text-[11px]">
          {medicine?.name1 || "-"}
        </strong>

        {/* {medicine?.name2 && (
          <small className="block text-[8px]">
            {medicine.name2}
          </small>
        )}

        {medicine?.strength && (
          <small className="block text-[8px]">
            {medicine.strength}
          </small>
        )} */}
      </div>

      {/* مقدار مصرف */}

      <div className="px-1 py-1">
        {item.dosage || "-"}
      </div>

      {/* تعداد مصرف */}

      <div className="px-1 py-1">
        {item.frequency || "-"}
      </div>

      {/* مدت */}

      <div className="px-1 py-1">
        {item.duration || "-"}
      </div>

      {/* طریقه */}

      <div className="px-1 py-1">
        {item.route || "-"}
      </div>

      {/* تعداد */}

      <div className="px-1 py-1 font-bold">
        {item.quantity ?? "-"}
      </div>
    </div>
  );
})}

          {/* Empty */}

          {items.length === 0 && (
            <div
              className="
                border
                border-dashed
                border-slate-400
                p-6
                text-center
                text-[11px]
                text-slate-600
              "
            >
              هیچ دوایی در این نسخه ثبت نشده است.
            </div>
          )}
        </section>

        {/* =================================================
    INSTRUCTIONS + NOTES
================================================= */}

<div className="mt-2 flex items-stretch gap-3">

  {/* =================================================
      INSTRUCTIONS
  ================================================= */}

  {items.some((item) => item.instructions) && (
    <section
      className="
        flex-1
        break-inside-avoid
        rounded-lg
        border-[1.5px]
        border-blue-500
        p-3
      "
    >
      <div className="flex items-start gap-3">

        <div className="shrink-0 text-[22px]">
          📋
        </div>

        <div className="min-w-0 flex-1">

          <h3
            className="
              mb-1
              text-xs
              font-extrabold
              text-blue-700
            "
          >
            توضیحات و توصیه‌ها
          </h3>

          <ul
            className="
              m-0
              list-disc
              pr-4
              text-[9px]
              leading-5
            "
          >
            {items.map(
              (item, index) =>
                item.instructions && (
                  <li
                    key={index}
                    className="pr-1"
                  >
                    {item.instructions}
                  </li>
                )
            )}
          </ul>

        </div>
      </div>
    </section>
  )}

  {/* =================================================
      NOTES
  ================================================= */}

  {data.notes && (
    <section
      className="
        flex-1
        break-inside-avoid
        rounded-lg
        border
        border-slate-300
        p-3
      "
    >

      <div className="flex items-start gap-3">

        <div className="shrink-0 text-[22px]">
          📝
        </div>

        <div className="min-w-0 flex-1">

          <h3
            className="
              mb-1
              text-xs
              font-extrabold
              text-slate-700
            "
          >
            یادداشت پزشک
          </h3>

          <p
            className="
              m-0
              text-[9px]
              leading-5
              text-slate-600
            "
          >
            {data.notes}
          </p>

        </div>

      </div>

    </section>
  )}

</div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer
          className="
            mt-3
            flex
            items-end
            justify-between
            break-inside-avoid
          "
        >
          <div
            className="
              flex
              w-[190px]
              flex-col
              items-center
              text-center
            "
          >
            <div
              className="
                mb-1.5
                h-[45px]
                w-full
                border-b
                border-slate-900
              "
            />

            <strong className="text-[10px]">
              امضاء و مهر داکتر
            </strong>

            <span className="mt-1 text-[9px]">
              {doctorName}
            </span>

            {doctor?.medicalLicenseNumber && (
              <small className="mt-0.5 text-[8px]">
                شماره داکتر:{" "}
                {doctor.medicalLicenseNumber}
              </small>
            )}
          </div>
        </footer>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="
            mt-2
            flex
            items-center
            justify-between
            border-t
            border-blue-500
            pt-2
            text-[8px]
            text-slate-600
          "
        >
          <span className="text-sm">
            لطفاً این نسخه را نزد خود نگهداری کرده و
            در مراجعه بعدی همراه داشته باشید.
          </span>

          <DentalLogo size="sm" />
        </div>
      </div>
    </div>
  );
}