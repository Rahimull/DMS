import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import {
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  XCircle,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";


// =====================================================
// STATUS CONFIG
// =====================================================

const STATUS_CONFIG = [
  {
    color: "#2563EB",
    bg: "#EFF6FF",
    icon: CalendarCheck2,
  },
  {
    color: "#10B981",
    bg: "#ECFDF5",
    icon: CheckCircle2,
  },
  {
    color: "#F59E0B",
    bg: "#FFFBEB",
    icon: Clock3,
  },
  {
    color: "#EF4444",
    bg: "#FEF2F2",
    icon: XCircle,
  },
];


// =====================================================
// TOOLTIP
// =====================================================

const AppointmentTooltip = ({
  active,
  payload,
}) => {
  if (!active || !payload?.length) {
    return null;
  }

  const item = payload[0];

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white/95
        px-4
        py-3
        shadow-2xl
        backdrop-blur-md
      "
    >
      <div className="flex items-center gap-2">

        <div
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor:
              item.payload.color,
          }}
        />

        <span className="text-xs text-slate-400">
          {item.name}
        </span>

      </div>

      <p className="mt-1 text-xl font-bold text-slate-900">
        {Number(item.value).toLocaleString("en-US")}
      </p>

      <span className="text-[10px] text-slate-400">
        نوبت
      </span>
    </div>
  );
};


// =====================================================
// COMPONENT
// =====================================================

export default function AppointmentChart({
  data = [],
  loading = false,
}) {

  // ===================================================
  // ANIMATION STATE
  // ===================================================

  const [pulse, setPulse] = useState(false);


  // ===================================================
  // AUTO ANIMATION EVERY 5 SECONDS
  // ===================================================

  useEffect(() => {

    const interval = setInterval(() => {

      setPulse(true);

      const timeout = setTimeout(() => {
        setPulse(false);
      }, 1100);

      return () => clearTimeout(timeout);

    }, 5000);

    return () => clearInterval(interval);

  }, []);


  // ===================================================
  // TOTAL APPOINTMENTS
  // ===================================================

  const totalAppointments = data.reduce(
    (sum, item) =>
      sum + (Number(item.value) || 0),
    0
  );


  // ===================================================
  // PREPARE CHART DATA
  // ===================================================

  const chartData = data.map(
    (item, index) => ({
      ...item,

      color:
        STATUS_CONFIG[
          index % STATUS_CONFIG.length
        ].color,
    })
  );


  // ===================================================
  // MAIN STATUS
  // ===================================================

  const mainStatus =
    chartData.length > 0
      ? [...chartData].sort(
          (a, b) =>
            Number(b.value) -
            Number(a.value)
        )[0]
      : null;


  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {

    return (
      <DashboardCard>

        <div className="h-[430px] animate-pulse">

          {/* Header */}

          <div className="flex items-start justify-between">

            <div className="space-y-2">

              <div className="h-4 w-28 rounded bg-slate-100" />

              <div className="h-3 w-40 rounded bg-slate-100" />

            </div>

            <div className="h-8 w-20 rounded-lg bg-slate-100" />

          </div>


          {/* Donut */}

          <div className="mt-8 flex justify-center">

            <div
              className="
                h-52
                w-52
                rounded-full
                border-[32px]
                border-slate-100
              "
            />

          </div>


          {/* Status */}

          <div className="mt-7 grid grid-cols-2 gap-3">

            {[1, 2, 3, 4].map(
              (item) => (

                <div
                  key={item}
                  className="
                    h-16
                    rounded-xl
                    bg-slate-100
                  "
                />

              )
            )}

          </div>

        </div>

      </DashboardCard>
    );
  }


  // ===================================================
  // EMPTY STATE
  // ===================================================

  if (!data.length) {

    return (
      <DashboardCard>

        <div
          className="
            flex
            h-[430px]
            flex-col
            items-center
            justify-center
          "
        >

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-slate-50
            "
          >

            <CalendarCheck2
              size={28}
              className="text-slate-300"
            />

          </div>


          <p className="mt-4 text-sm font-semibold text-slate-500">
            نوبتی برای امروز وجود ندارد
          </p>


          <p className="mt-1 text-xs text-slate-400">
            اطلاعات نوبت‌ها پس از ثبت نمایش داده می‌شود
          </p>

        </div>

      </DashboardCard>
    );
  }


  // ===================================================
  // MAIN UI
  // ===================================================

  return (
    <DashboardCard>

      <div className="relative overflow-hidden">

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <motion.div
          animate={{
            opacity: pulse ? 0.8 : 0.35,
            scale: pulse ? 1.15 : 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            pointer-events-none
            absolute
            -left-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-blue-500/5
            blur-3xl
          "
        />


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="relative flex items-start justify-between">

          <div>

            <div className="flex items-center gap-2">

              <h3
                className="
                  text-[15px]
                  font-bold
                  text-slate-800
                "
              >
                وضعیت نوبت‌ها
              </h3>


              <span
                className="
                  rounded-full
                  bg-blue-50
                  px-2
                  py-0.5
                  text-[9px]
                  font-semibold
                  text-blue-600
                "
              >
                امروز
              </span>

            </div>


            <p className="mt-1 text-[11px] text-slate-400">
              خلاصه وضعیت نوبت‌های امروز
            </p>

          </div>


          {/* Total */}

          <div className="text-left">

            <p className="text-[10px] text-slate-400">
              مجموع
            </p>

            <p className="text-lg font-bold text-slate-800">
              {totalAppointments}
            </p>

          </div>

        </div>


        {/* =================================================
            DONUT AREA
        ================================================= */}

        <div className="relative mx-auto mt-3 h-[230px] w-full">


          {/* ===============================================
              3D SHADOW
          ============================================== */}

          <motion.div
            animate={{
              scale: pulse ? 1.08 : 1,
              opacity: pulse ? 0.16 : 0.10,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[57%]
              h-20
              w-44
              -translate-x-1/2
              rounded-full
              bg-slate-900
              blur-2xl
            "
          />


          {/* ===============================================
              DONUT
          ============================================== */}

          <motion.div
            animate={{
              scale: pulse ? 1.045 : 1,
              rotate: pulse ? 2 : 0,
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
            "
          >

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>


                {/* =======================================
                    DEPTH LAYER
                ======================================== */}

                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="48%"
                  innerRadius={72}
                  outerRadius={95}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={4}
                  stroke="none"
                  animationDuration={900}
                  animationBegin={0}
                >

                  {chartData.map(
                    (item, index) => (

                      <Cell
                        key={`depth-${index}`}
                        fill="#CBD5E1"
                        transform="translate(0 7)"
                        opacity={0.45}
                      />

                    )
                  )}

                </Pie>


                {/* =======================================
                    MAIN DONUT
                ======================================== */}

                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  innerRadius={70}
                  outerRadius={94}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={4}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  animationDuration={900}
                  animationBegin={100}
                >

                  {chartData.map(
                    (item, index) => (

                      <Cell
                        key={`${item.name}-${index}`}
                        fill={item.color}
                      />

                    )
                  )}

                </Pie>


                {/* Tooltip */}

                <AppointmentTooltip />

              </PieChart>

            </ResponsiveContainer>

          </motion.div>


          {/* ===============================================
              PULSE RING
          ============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.82,
            }}
            animate={{
              opacity: pulse
                ? [0, 0.7, 0]
                : 0,

              scale: pulse
                ? [0.82, 1.08, 1.12]
                : 0.82,
            }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[45%]
              h-[188px]
              w-[188px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border-2
              border-blue-400
            "
          />


          {/* ===============================================
              CENTER
          ============================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            "
          >

            {/* Glass Circle */}

            <motion.div
              animate={{
                scale: pulse ? 1.08 : 1,
              }}
              transition={{
                duration: 0.45,
              }}
              className="
                absolute
                h-[110px]
                w-[110px]
                rounded-full
                border
                border-white
                bg-white/85
                shadow-[inset_0_1px_8px_rgba(15,23,42,0.04)]
                backdrop-blur-md
              "
            />


            {/* Center Content */}

            <div className="relative z-10 text-center">

              <p className="text-[10px] text-slate-400">
                کل نوبت‌ها
              </p>


              <motion.p
                animate={{
                  scale: pulse ? 1.12 : 1,

                  color: pulse
                    ? "#2563EB"
                    : "#0F172A",
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  mt-1
                  text-3xl
                  font-extrabold
                  tracking-tight
                "
              >
                {totalAppointments}
              </motion.p>


              <p className="text-[9px] text-slate-400">
                امروز
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            MAIN STATUS
        ================================================= */}

        {mainStatus && (

          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-100
              bg-slate-50/80
              px-4
              py-3
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-xl
                "
                style={{
                  backgroundColor:
                    `${mainStatus.color}12`,
                }}
              >

                <CheckCircle2
                  size={15}
                  style={{
                    color:
                      mainStatus.color,
                  }}
                />

              </div>


              <div>

                <p className="text-[10px] text-slate-400">
                  بیشترین وضعیت
                </p>

                <p className="text-xs font-bold text-slate-700">
                  {mainStatus.name}
                </p>

              </div>

            </div>


            <div className="flex items-center gap-1">

              <span
                className="text-lg font-bold"
                style={{
                  color:
                    mainStatus.color,
                }}
              >
                {mainStatus.value}
              </span>

              <ArrowUpRight
                size={14}
                className="text-slate-300"
              />

            </div>

          </div>

        )}


        {/* =================================================
            STATUS CARDS
        ================================================= */}

        <div className="mt-3 grid grid-cols-2 gap-2">

          {chartData.map(
            (item, index) => {

              const config =
                STATUS_CONFIG[
                  index %
                    STATUS_CONFIG.length
                ];


              const Icon =
                config.icon;


              const percentage =
                totalAppointments > 0
                  ? Math.round(
                      (Number(item.value) /
                        totalAppointments) *
                        100
                    )
                  : 0;


              return (

                <motion.div
                  key={`${item.name}-${index}`}

                  initial={{
                    opacity: 0,
                    y: 8,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  whileHover={{
                    y: -2,
                  }}

                  transition={{
                    delay:
                      index * 0.08,
                    duration: 0.3,
                  }}

                  className="
                    group
                    rounded-xl
                    border
                    border-slate-100
                    bg-white
                    p-3
                    shadow-[0_1px_3px_rgba(0,0,0,0.03)]
                    transition
                    hover:border-slate-200
                    hover:shadow-sm
                  "
                >

                  <div className="flex items-center justify-between">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                      "
                      style={{
                        backgroundColor:
                          config.bg,
                      }}
                    >

                      <Icon
                        size={14}
                        style={{
                          color:
                            config.color,
                        }}
                      />

                    </div>


                    {/* Percentage */}

                    <span
                      className="
                        text-[10px]
                        font-bold
                      "
                      style={{
                        color:
                          config.color,
                      }}
                    >
                      {percentage}%
                    </span>

                  </div>


                  {/* Info */}

                  <div className="mt-2 flex items-end justify-between">

                    <div>

                      <p className="max-w-[90px] truncate text-[10px] text-slate-400">
                        {item.name}
                      </p>

                      <p className="mt-0.5 text-base font-bold text-slate-800">
                        {Number(
                          item.value
                        ).toLocaleString(
                          "en-US"
                        )}
                      </p>

                    </div>


                    {/* Progress */}

                    <div
                      className="
                        h-1
                        w-10
                        overflow-hidden
                        rounded-full
                        bg-slate-100
                      "
                    >

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${percentage}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay:
                            index * 0.1,
                        }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor:
                            config.color,
                        }}
                      />

                    </div>

                  </div>

                </motion.div>

              );

            }
          )}

        </div>

      </div>

    </DashboardCard>
  );
}