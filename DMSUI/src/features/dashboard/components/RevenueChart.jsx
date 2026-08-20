import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
} from "recharts";

import {
  ArrowDownRight,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

import { motion } from "framer-motion";

import DashboardCard from "./DashboardCard";

const CustomTooltip = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload?.length) {
    return null;
  }

  const value = Number(payload[0]?.value) || 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        min-w-[150px]
        rounded-2xl
        border
        border-slate-200
        bg-white/95
        px-4
        py-3
        shadow-xl
        backdrop-blur-md
      "
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-600" />

        <span className="text-xs font-medium text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-2 text-lg font-bold tracking-tight text-slate-900">
        {value.toLocaleString("en-US")}
        <span className="mr-1 text-xs font-medium text-slate-400">
          AFN
        </span>
      </p>
    </motion.div>
  );
};

export default function RevenueChart({
  data = [],
  loading = false,
}) {
  const currentRevenue =
    Number(data[data.length - 1]?.income) || 0;

  const previousRevenue =
    Number(data[data.length - 2]?.income) || 0;

  const change =
    previousRevenue > 0
      ? ((currentRevenue - previousRevenue) /
          previousRevenue) *
        100
      : 0;

  const positive = change >= 0;

  if (loading) {
    return (
      <DashboardCard>
        <div className="h-[390px] animate-pulse">

          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="h-11 w-11 rounded-2xl bg-slate-100" />

              <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-slate-100" />
                <div className="h-3 w-36 rounded bg-slate-100" />
              </div>
            </div>

            <div className="h-8 w-24 rounded-lg bg-slate-100" />
          </div>

          <div className="mt-7 h-10 w-48 rounded-lg bg-slate-100" />

          <div className="mt-8 h-[220px] rounded-2xl bg-slate-100" />

          <div className="mt-5 h-12 rounded-xl bg-slate-100" />
        </div>
      </DashboardCard>
    );
  }

  return (
    <DashboardCard>
      <div className="relative overflow-hidden">

        {/* =====================================
            DECORATIVE GLOW
        ====================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-48
            w-48
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="relative flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-blue-50
                ring-1
                ring-blue-100
              "
            >
              <Wallet
                size={20}
                strokeWidth={2}
                className="text-blue-600"
              />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-slate-800">
                درآمد ماهانه
              </h3>

              <p className="mt-0.5 text-[11px] text-slate-400">
                تحلیل عملکرد مالی
              </p>
            </div>

          </div>

          <button
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3
              py-1.5
              text-[11px]
              font-medium
              text-slate-500
              shadow-sm
              transition
              hover:border-slate-300
              hover:bg-slate-50
            "
          >
            ۶ ماه اخیر
          </button>

        </div>

        {/* =====================================
            KPI
        ====================================== */}

        <div className="relative mt-7 flex items-end justify-between">

          <div>
            <p className="text-[11px] font-medium text-slate-400">
              درآمد ماه جاری
            </p>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-1 flex items-baseline gap-2"
            >
              <span className="text-[32px] font-extrabold tracking-tight text-slate-900">
                {currentRevenue.toLocaleString("en-US")}
              </span>

              <span className="text-xs font-semibold text-slate-400">
                AFN
              </span>
            </motion.div>
          </div>

          {/* Change */}
          <div
            className={`
              flex
              items-center
              gap-1.5
              rounded-xl
              px-3
              py-2
              ${
                positive
                  ? "bg-emerald-50"
                  : "bg-red-50"
              }
            `}
          >
            {positive ? (
              <ArrowUpRight
                size={16}
                className="text-emerald-600"
              />
            ) : (
              <ArrowDownRight
                size={16}
                className="text-red-600"
              />
            )}

            <div>
              <p
                className={`
                  text-xs
                  font-bold
                  ${
                    positive
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                `}
              >
                {positive ? "+" : ""}
                {change.toFixed(1)}%
              </p>

              <p className="text-[9px] text-slate-400">
                نسبت به ماه قبل
              </p>
            </div>
          </div>

        </div>

        {/* =====================================
            CHART
        ====================================== */}

        <div className="relative mt-7 h-[220px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 0,
                left: -25,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient
                  id="premiumRevenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#2563EB"
                    stopOpacity={0.22}
                  />

                  <stop
                    offset="60%"
                    stopColor="#2563EB"
                    stopOpacity={0.07}
                  />

                  <stop
                    offset="100%"
                    stopColor="#2563EB"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 10,
                  fill: "#94A3B8",
                }}
                dy={8}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "#CBD5E1",
                  strokeWidth: 1,
                  strokeDasharray: "4 5",
                }}
              />

              <Area
                type="monotone"
                dataKey="income"
                stroke="#2563EB"
                strokeWidth={3}
                fill="url(#premiumRevenueGradient)"
                dot={false}
                activeDot={{
                  r: 5,
                  fill: "#2563EB",
                  stroke: "#FFFFFF",
                  strokeWidth: 3,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* =====================================
            FOOTER
        ====================================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-3
            overflow-hidden
            rounded-2xl
            border
            border-slate-100
            bg-slate-50/70
          "
        >
          <div className="px-4 py-3">
            <p className="text-[10px] text-slate-400">
              ماه جاری
            </p>

            <p className="mt-1 text-xs font-bold text-slate-700">
              {currentRevenue.toLocaleString("en-US")} AFN
            </p>
          </div>

          <div className="border-x border-slate-100 px-4 py-3">
            <p className="text-[10px] text-slate-400">
              ماه گذشته
            </p>

            <p className="mt-1 text-xs font-bold text-slate-700">
              {previousRevenue.toLocaleString("en-US")} AFN
            </p>
          </div>

          <div className="px-4 py-3">
            <p className="text-[10px] text-slate-400">
              وضعیت
            </p>

            <p
              className={`
                mt-1
                text-xs
                font-bold
                ${
                  positive
                    ? "text-emerald-600"
                    : "text-red-600"
                }
              `}
            >
              {positive
                ? "روند صعودی"
                : "روند نزولی"}
            </p>
          </div>
        </div>

      </div>
    </DashboardCard>
  );
}