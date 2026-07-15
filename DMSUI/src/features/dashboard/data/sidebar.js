

import {
  LayoutDashboard,

  Users,
  Calendar,

  Stethoscope,
  ClipboardList,
  RefreshCcw,

  FlaskConical,
  TestTubeDiagonal,

  Pill,
  Package,

  Wallet,
  Receipt,
  BadgeDollarSign,

  Building2,
  Settings,

  ChartColumnIncreasing,
} from "lucide-react";




export const sidebarItems= [
  // ================= Dashboard =================

  {
    title: "داشبورد",

    items: [
      {
        title: "داشبورد",

        path: "/",

        icon: LayoutDashboard,
      },
    ],
  },

  // ================= Clinic =================

  {
    title: "کلینیک",

    items: [
      {
        title: "کارمندان",

        path: "/staff",

        icon: Users,
      },

      {
        title: "بیماران",

        path: "/patients",

        icon: Users,
      },

      {
        title: "نوبت‌ها",

        path: "/appointments",

        icon: Calendar,

        badge: 8,
      },
      {
        title: "کلینیک",

        path: "/clinic",

        icon: Calendar,

        badge: 8,
      },
    ],
  },

  // ================= Treatment =================

  {
    title: "درمان",

    items: [
      {
        title: "خدمات",

        path: "/service",

        icon: Stethoscope,
      },

      {
        title: "پلان درمان",

        path: "/treatmentPlan",

        icon: ClipboardList,
      },

      {
        title: "درمان مجدد",

        path: "/retreatment",

        icon: RefreshCcw,
      },
    ],
  },

  // ================= Laboratory =================

  {
    title: "لابراتوار",

    items: [
      {
        title: "کیس‌های لابراتوار",

        path: "/lab-cases",

        icon: FlaskConical,
      },

      {
        title: "پرداخت‌ها",

        path: "/lab-payments",

        icon: BadgeDollarSign,
      },
    ],
  },

  // ================= Pharmacy =================

  {
    title: "دواخانه",

    items: [
      {
        title: "موجودی دوا",

        path: "/medicine-inventory",

        icon: Pill,
      },

      {
        title: "فروش دوا",

        path: "/medicine-sales",

        icon: Receipt,
      },
    ],
  },

  // ================= Inventory =================

  {
    title: "انبار",

    items: [
      {
        title: "موجودی تجهیزات",

        path: "/supplies-inventory",

        icon: Package,
      },

      {
        title: "فروش تجهیزات",

        path: "/supplies-sales",

        icon: Package,
      },
    ],
  },

  // ================= Finance =================

  {
    title: "مالی",

    items: [
      {
        title: "مصارف",

        path: "/expenses",

        icon: Wallet,
      },

      {
        title: "درآمدها",

        path: "/revenues",

        icon: BadgeDollarSign,
      },

      {
        title: "مالیات",

        path: "/taxes",

        icon: Receipt,
      },
    ],
  },

  // ================= Reports =================

  {
    title: "گزارشات",

    items: [
      {
        title: "گزارشات",

        path: "/reports",

        icon: ChartColumnIncreasing,
      },
    ],
  },

  // ================= System =================

  {
    title: "سیستم",

    items: [
      {
        title: "کلینیک‌ها",

        path: "/clinics",

        icon: Building2,
      },

      {
        title: "تنظیمات",

        path: "/settings",

        icon: Settings,
      },
    ],
  },
];