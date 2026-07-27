import {
  UserRound,
  Phone,
  MapPin,
  CalendarDays,
  Droplets,
  Stethoscope,
  Wallet,
  Calculator,
  BadgeCheck,
  Receipt,
  Percent,
} from "lucide-react";

export default function PatientSummary({ data = {} }) {
  const patient = data.patient ?? {};

  const services = data.services?.patientServices ?? [];

  const appointment = data.services?.appointment ?? {};

  const payment = data.payment ?? {};

  const totalFee = Number(payment.totalFee ?? appointment.totalFee ?? 0);
  

  const discount = Number(payment.discount ?? 0);
  const payable = Number(payment.payable ?? 0)

  const paid = Number(payment.paidAmount ?? 0);

  const dueAmount = Number(payment.dueAmount ?? 0);

  return (
    <div
      className="
        sticky
        top-6
        overflow-auto
        rounded-3xl
        border
        bg-white
        shadow-lg
      "
    >
      {/* Header */}

      <div
        className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          p-5
          text-white
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-white/20
            "
          >
            <UserRound size={32} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {patient.firstName || "-"} {patient.lastName || ""}
            </h2>

            <p className="text-sm text-blue-100">خلاصه دوسیه مریض</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5">
        {/* Patient Info */}

        <div className="space-y-3">
          <Info
            icon={<Phone size={18} />}
            title="شماره تماس"
            value={patient.phone}
          />

          <Info
            icon={<MapPin size={18} />}
            title="آدرس"
            value={patient.address}
          />

          <Info
            icon={<Droplets size={18} />}
            title="گروه خون"
            value={patient.bloodGroup}
          />

          <Info
            icon={<CalendarDays size={18} />}
            title="سن"
            value={`${patient.age || "-"} سال`}
          />
        </div>

        {/* Appointment */}

        <div
          className="
            rounded-2xl
            bg-emerald-50
            p-4
          "
        >
          <div
            className="
              mb-3
              flex
              items-center
              gap-2
              font-bold
              text-emerald-700
            "
          >
            <Stethoscope size={20} />
            جلسه درمان
          </div>

          <div className="space-y-2 text-sm">
            <p>
              تاریخ:
              <b className="mr-2">{appointment.meetDate || "-"}</b>
            </p>

            <p>
              وضعیت:
              <b className="mr-2">{appointment.status || "ثبت نشده"}</b>
            </p>
          </div>
        </div>

        {/* Services */}

        <div>
          <h3
            className="
              mb-3
              font-bold
            "
          >
            🦷 خدمات انتخاب شده
          </h3>

          {services.length === 0 ? (
            <div
              className="
                rounded-xl
                bg-slate-50
                p-4
                text-sm
                text-slate-400
              "
            >
              هنوز خدمتی انتخاب نشده
            </div>
          ) : (
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.serviceId}
                  className="
                    rounded-2xl
                    bg-slate-50
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      justify-between
                      font-bold
                    "
                  >
                    <span>{service.serviceName}</span>

                    <span
                      className="
                        text-blue-600
                      "
                    >
                      {Number(service.fee).toLocaleString()} افغانی
                    </span>
                  </div>

                  {/* Requirements */}

                  {service.requirements?.length > 0 && (
                    <div
                      className="
                        mt-3
                        border-t
                        pt-3
                      "
                    >
                      <p
                        className="
                          mb-2
                          text-sm
                          text-slate-500
                        "
                      >
                        ضروریات:
                      </p>

                      {service.requirements.map((req, index) => (
                        <div
                          key={index}
                          className="
                              rounded-lg
                              bg-white
                              p-2
                              text-sm
                            "
                        >
                          {req.serviceRequirementId === 1 ? (
                            <>🦷 دندان: {req.value?.join(", ")}</>
                          ) : (
                            <>{JSON.stringify(req.value)}</>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Payment */}

        <div
          className="
            border-t
            pt-5
            space-y-3
          "
        >
          <Money icon={<Calculator />} title="مجموع فیس" value={totalFee} />
          <Money icon={<Calculator />} title=" قابل پرداخت" value={payable} />

          <Money icon={<Percent />} title="تخفیف" value={discount} />

          <Money icon={<Wallet />} title="پرداخت شده" value={paid} />

          <Money icon={<Receipt />} title="باقی مانده" value={dueAmount} />
        </div>

        {/* Status */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-50
            p-4
            text-blue-700
          "
        >
          <BadgeCheck size={20} />
          مرحله ثبت:
          <b>{data?.currentStep ?? 1}</b>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-xl
        bg-slate-50
        p-3
        "
    >
      <div className="text-blue-600">{icon}</div>

      <div>
        <p className="text-xs text-slate-500">{title}</p>

        <p className="font-semibold">{value || "-"}</p>
      </div>
    </div>
  );
}

function Money({ icon, title, value }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        bg-slate-50
        p-3
        "
    >
      <div
        className="
          flex
          items-center
          gap-2
          "
      >
        <span className="text-blue-600">{icon}</span>

        <span>{title}</span>
      </div>

      <b>{Number(value).toLocaleString()} افغانی</b>
    </div>
  );
}
