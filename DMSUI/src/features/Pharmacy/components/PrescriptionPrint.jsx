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

  const items = Array.isArray(data.items)
    ? data.items
    : Array.isArray(data.prescriptionItems)
    ? data.prescriptionItems
    : [];

  // =====================================================
  // HELPERS
  // =====================================================

  const getMedicine = (id) => {
    return medicines.find(
      (x) => Number(x.id) === Number(id)
    );
  };

  const getMedicineName = (id) => {
    const medicine = getMedicine(id);

    return (
      medicine?.name ||
      medicine?.medicineName ||
      medicine?.medicine?.name ||
      "-"
    );
  };

  const getMedicineGenericName = (id) => {
    const medicine = getMedicine(id);

    return (
      medicine?.genericName ||
      medicine?.generic ||
      medicine?.medicine?.genericName ||
      ""
    );
  };

  const getMedicineStrength = (id) => {
    const medicine = getMedicine(id);

    return (
      medicine?.strength ||
      medicine?.dosage ||
      medicine?.medicine?.strength ||
      ""
    );
  };

  const patientName =
    patient?.name ||
    patient?.fullName ||
    data.patientName ||
    "-";

  const doctorName =
    doctor?.name ||
    doctor?.fullName ||
    data.staffName ||
    "-";

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
            grid
            grid-cols-[1fr_2fr_1fr]
            items-center
            gap-5
            mb-7
          "
        >
          {/* Logo */}

          <div className="flex items-center gap-2.5">
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
                border-[#1022345]
                text-3xl
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

        <div className="relative mt-[18px] h-0.5 bg-blue-300">
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
              text-lg
            "
          >
            <DentalLogo size="sm" />
        
          </div>
        </div>

        {/* =================================================
            PRESCRIPTION TITLE
        ================================================= */}

        <section
          className="
            mt-6
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
            PATIENT / DOCTOR INFORMATION
        ================================================= */}

        <section
          className="
            mt-5
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
              <span className="text-slate-800">
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
              <span className="text-slate-800">
                سن:
              </span>

              <strong>
                {patient?.age ||
                  data.patientAge ||
                  "-"}
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
              <span className="text-slate-800">
                تلفن:
              </span>

              <strong>
                {patient?.phone ||
                  patient?.phoneNumber ||
                  data.patientPhone ||
                  "-"}
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
              <span className="text-slate-800">
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
              <span className="text-slate-800">
                تخصص:
              </span>

              <strong>
                {doctor?.specialty ||
                  doctor?.specialization ||
                  "دندان‌پزشک"}
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
              <span className="text-slate-800">
                شماره نظام داکتر:
              </span>

              <strong>
                {doctor?.medicalLicenseNumber ||
                  doctor?.licenseNumber ||
                  "-"}
              </strong>
            </div>
          </div>
        </section>

        {/* =================================================
            RX
        ================================================= */}

        <section className="mt-6">
          <div
            className="
              mb-2
              font-serif
              text-[27px]
              font-bold
            "
          >
            Rx
          </div>

          {/* Medicine Header */}

          <div
            className="
              grid
              min-h-[38px]
              grid-cols-[0.45fr_2.1fr_1.1fr_1.2fr_1fr_1.2fr_0.7fr]
              items-center
              rounded-t-md
              bg-gradient-to-l from-blue-500 to-blue-100
              px-1
              text-center
              text-[9px]
              font-bold
              text-white
            "
          >
            <div>ردیف</div>
            <div className="text-right">نام دوا</div>
            <div>مقدار مصرف</div>
            <div>تعداد مصرف</div>
            <div>مدت مصرف</div>
            <div>طریقه مصرف</div>
            <div>تعداد</div>
          </div>

          {/* Medicines */}

          {items.map((item, index) => {
            const genericName =
              getMedicineGenericName(
                item.medicineInventoryId
              );

            const strength =
              getMedicineStrength(
                item.medicineInventoryId
              );

            return (
              <div
                key={index}
                className="
                  grid
                  min-h-[65px]
                  grid-cols-[0.45fr_2.1fr_1.1fr_1.2fr_1fr_1.2fr_0.7fr]
                  items-center
                  border-b
                  border-slate-300
                  text-center
                  text-[9px]
                  break-inside-avoid
                "
              >
                {/* Number */}

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

                {/* Medicine */}

                <div className="px-1 text-right">
                  <strong className="block text-[11px]">
                    {getMedicineName(
                      item.medicineInventoryId
                    )}
                  </strong>

                  {genericName && (
                    <small className="mt-0.5 block text-[8px] text-slate-800">
                      {genericName}
                    </small>
                  )}

                  {strength && (
                    <small className="mt-0.5 block text-[8px] text-slate-800">
                      {strength}
                    </small>
                  )}
                </div>

                {/* Dosage */}

                <div className="px-1 py-2">
                  {item.dosage || "-"}
                </div>

                {/* Frequency */}

                <div className="px-1 py-2">
                  {item.frequency || "-"}
                </div>

                {/* Duration */}

                <div className="px-1 py-2">
                  {item.duration || "-"}
                </div>

                {/* Route */}

                <div className="px-1 py-2">
                  {item.route || "-"}
                </div>

                {/* Quantity */}

                <div className="px-1 py-2 font-bold">
                  {item.quantity || "-"}
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
                text-slate-800
              "
            >
              هیچ دوایی در این نسخه ثبت نشده است.
            </div>
          )}
        </section>

        {/* =================================================
            INSTRUCTIONS
        ================================================= */}

        {items.some(
          (item) => item.instructions
        ) && (
          <section
            className="
              mt-5
              flex
              items-start
              gap-4
              rounded-lg
              border-[1.5px]
              border-blue-500
              p-3.5
              px-[18px]
              break-inside-avoid
            "
          >
            <div className="text-[25px]">
              📋
            </div>

            <div className="flex-1">
              <h3
                className="
                  mb-1.5
                  text-xs
                  font-extrabold
                "
              >
                توضیحات و توصیه‌ها:
              </h3>

              <ul
                className="
                  m-0
                  list-disc
                  pr-[18px]
                  text-[10px]
                  leading-7
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
          </section>
        )}

        {/* =================================================
            GENERAL NOTES
        ================================================= */}

        {data.notes && (
          <section
            className="
              mt-4
              rounded-md
              border
              border-slate-300
              p-3
              text-[10px]
              break-inside-avoid
            "
          >
            <strong>
              یادداشت پزشک:
            </strong>

            <p className="mt-1.5 leading-6">
              {data.notes}
            </p>
          </section>
        )}

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer
          className="
            mt-11
            flex
            items-end
            justify-between
            break-inside-avoid
          "
        >
          {/* Stamp */}

          

          {/* Signature */}

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
              <small className="mt-0.5 text-[8px] text-slate-800">
                شماره داکتر:{" "}
                {doctor.medicalLicenseNumber}
              </small>
            )}
          </div>
        </footer>

        {/* =================================================
            BOTTOM LINE
        ================================================= */}

        <div
          className="
            mt-6
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

          <span className="text-base">
            <DentalLogo size="sm" />
          </span>
        </div>
      </div>
    </div>
  );
}