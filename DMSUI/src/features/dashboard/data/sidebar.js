

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
        title: "کلینیک",

        path: "/clinic",

        icon: Calendar,

        badge: 8,
      },
    ],
  },

  // ================= Treatment =================

  {
    title: "تداوی",

    items: [
      {
        title: "خدمات",

        path: "/service",

        icon: Stethoscope,
      },
      {
        title: "نیاز مندی خدامات",

        path: "/serviceRequirment",

        icon: Stethoscope,
      },
      {
        title: "عارضه یا تشخیص",

        path: "/condition",

        icon: Stethoscope,
      },

      {
        title: "پلان درمان",

        path: "/treatmentPlan",

        icon: ClipboardList,
      },
      {
        title: "لیست پلان درمان",

        path: "/treatmentPlanList",

        icon: ClipboardList,
      },
    ],
  },

  // ================= Laboratory =================

  {
    title: "لابراتوار",

    items: [
      {
        title: "مدیریت لابراتوار",

        path: "/lab",

        icon: FlaskConical,
      },
      {
        title: "کیس‌ های لابراتوار",

        path: "/labCase",

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
        title: " نسخه ها",

        path: "/Prescription",

        icon: Pill,
      },
      {
        title: "دوا ها",

        path: "/PrescriptionItem",

        icon: Pill,
      },
      {
        title: "موجودی دوا",

        path: "/MedicineInventory",

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

  // ================= Users =================

  {
    title: "مدیریت کاربران",

    items: [
      {
        title: "کابران",

        path: "/users",

        icon: Users,
      },

      {
        title: "صلاحیت",

        path: "/permession",

        icon: Settings,
      },
    ],
  },
  // ================= System =================

  {
    title: "سیستم",

    items: [
     {
        title: "تنظیمات",

        path: "/settings",

        icon: Settings,
      },
    ],
  },
];