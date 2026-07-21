export default function PatientSummary({ data }) {
  return (
    <div
      className="
        sticky
        top-6

        rounded-3xl
        border
        border-slate-200

        bg-white

        shadow-sm

        overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
          bg-gradient-to-r
          from-blue-600
          to-blue-500

          p-5

          text-white
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-full

              bg-white/20

              text-2xl
            "
          >
            👤
          </div>

          <div>
            <h3 className="font-bold text-lg">
              خلاصه مریض
            </h3>

            <p className="text-sm text-blue-100">
              ثبت اولیه معلومات
            </p>
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="p-5 space-y-5">

        {/* Basic Info */}

        <div
          className="
            rounded-2xl
            bg-slate-50
            p-4
          "
        >
          <div className="text-xs text-slate-500 mb-1">
            شماره دوسیه
          </div>

          <div className="font-semibold text-slate-800">
            {data?.patient?.fileId || "DMS-0001"}
          </div>
        </div>

        <div
          className="
            rounded-2xl
            bg-slate-50
            p-4
          "
        >
          <div className="text-xs text-slate-500 mb-1">
            نام مریض
          </div>

          <div className="font-semibold text-slate-800">
            {data?.patient?.firstName || "---"}
          </div>
        </div>

        <div
          className="
            rounded-2xl
            bg-slate-50
            p-4
          "
        >
          <div className="text-xs text-slate-500 mb-1">
            شماره تماس
          </div>

          <div className="font-semibold text-slate-800">
            {data?.patient?.phone || "---"}
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-slate-200" />

        {/* Services */}

        <div>
          <div
            className="
              mb-3
              flex
              items-center
              gap-2
              font-semibold
              text-slate-700
            "
          >
            🦷 خدمات انتخاب شده
          </div>

          <div
            className="
              rounded-2xl
              bg-slate-50
              p-3
            "
          >
            {data?.services?.length > 0 ? (
              <ul className="space-y-2">
                {data.services.map((service, index) => (
                  <li
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                      text-sm
                    "
                  >
                    <span>
                      {service.name}
                    </span>

                    <span className="text-slate-500">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-sm text-slate-400">
                هنوز خدمتی انتخاب نشده
              </span>
            )}
          </div>
        </div>

        {/* Financial */}

        <div className="border-t border-slate-200 pt-4">

          <div
            className="
              flex
              items-center
              justify-between
              mb-3
            "
          >
            <span className="text-slate-600">
              مجموع فیس
            </span>

            <span
              className="
                font-bold
                text-green-600
              "
            >
              {data?.payment?.totalFee || 0} افغانی
            </span>
          </div>

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span className="text-slate-600">
              باقی مانده
            </span>

            <span
              className="
                font-bold
                text-orange-500
              "
            >
              {data?.payment?.remaining || 0} افغانی
            </span>
          </div>
        </div>

        {/* Status */}

        <div
          className="
            rounded-2xl
            border
            border-blue-100
            bg-blue-50
            p-4
          "
        >
          <div className="text-xs text-blue-600 mb-1">
            وضعیت ثبت
          </div>

          <div className="font-medium text-blue-800">
            مرحله {data?.currentStep || 1} از 4
          </div>
        </div>

      </div>
    </div>
  );
}