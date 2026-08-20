import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StatsCard = ({ item }) => {
  const Icon = item.icon;

  const change = Number(item.change) || 0;
  const isPositive = change >= 0;

  const [active, setActive] = useState(false);

  // Subtle animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(true);

      const timeout = setTimeout(() => {
        setActive(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_2px_8px_rgba(15,23,42,0.04)]
        transition-shadow
        duration-300
        hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]
      "
    >
      {/* =========================================
          TOP ACCENT
      ========================================= */}

      <motion.div
        animate={{
          opacity: active ? 0.8 : 0.2,
          scaleX: active ? 1 : 0.45,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[2px]
          w-full
          -translate-x-1/2
          origin-center
        "
        style={{
          backgroundColor: item.color,
        }}
      />

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-slate-500">
            {item.title}
          </p>

          <h2 className="mt-2 truncate text-[28px] font-bold leading-tight tracking-tight text-slate-900">
            {item.value}
          </h2>
        </div>

        {/* Icon */}
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[14px]
          "
          style={{
            backgroundColor: item.bgColor,
          }}
        >
          <Icon
            size={21}
            strokeWidth={2}
            style={{
              color: item.color,
            }}
          />
        </div>
      </div>

      {/* =========================================
          CHANGE
      ========================================= */}

      <div className="mt-5 flex items-center gap-2">
        <div
          className={`
            inline-flex
            items-center
            gap-1
            rounded-lg
            px-2
            py-1
            text-[11px]
            font-semibold
            ${
              isPositive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-600"
            }
          `}
        >
          {isPositive ? (
            <ArrowUpRight
              size={13}
              strokeWidth={2.5}
            />
          ) : (
            <ArrowDownRight
              size={13}
              strokeWidth={2.5}
            />
          )}

          {Math.abs(change)}%
        </div>

        <span className="text-[11px] text-slate-400">
          نسبت به ماه گذشته
        </span>
      </div>

      {/* =========================================
          CHART
      ========================================= */}

      <div className="mt-5 flex h-8 items-end gap-[3px]">
        {[
          28,
          38,
          32,
          48,
          40,
          54,
          46,
          63,
          55,
          72,
          64,
          80,
        ].map((height, index) => {
          const isLast = index === 11;

          return (
            <motion.div
              key={index}
              initial={{
                height: 0,
              }}
              animate={{
                height: `${height}%`,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.035,
                ease: "easeOut",
              }}
              className="flex-1 rounded-[3px]"
              style={{
                backgroundColor: item.color,
                opacity: isLast ? 0.7 : 0.12,
              }}
            />
          );
        })}
      </div>

      {/* =========================================
          BOTTOM BORDER
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          opacity-[0.08]
        "
        style={{
          backgroundColor: item.color,
        }}
      />
    </motion.article>
  );
};

export default StatsCard;