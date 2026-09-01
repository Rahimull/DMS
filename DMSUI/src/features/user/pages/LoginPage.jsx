
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Activity,
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
  WalletCards,
  Sparkles,
  HeartPulse,
  Building2,
} from "lucide-react";

import Input from "@/components/common/Input";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const systemFeatures = [
  {
    title: "مدیریت مریضان",
    description: "ثبت و مدیریت کامل ریکاردها",
    icon: Users,
  },
  {
    title: "مدیریت داکتران",
    description: "کنترول فعالیت‌ها و خدمات",
    icon: Stethoscope,
  },
  {
    title: "نوبت‌دهی هوشمند",
    description: "مدیریت آسان زمان ملاقات",
    icon: CalendarDays,
  },
  {
    title: "مدیریت مالی",
    description: "پرداخت‌ها و گزارش‌های مالی",
    icon: WalletCards,
  },
];

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.userName.trim() || !form.password.trim()) {
      alert("لطفاً نام کاربری و رمز عبور را وارد کنید.");
      return;
    }

    try {
      setLoading(true);

      await login(form);

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      alert("نام کاربری یا رمز عبور نادرست است.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-slate-50"
    >
      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-200/50 blur-3xl" />

        <div className="absolute -bottom-48 -left-40 h-[550px] w-[550px] rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-100 to-transparent opacity-60" />

      </div>

      <div className="relative grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">

        {/* =====================================================
            LEFT — BRAND SECTION
        ====================================================== */}

        <section className="relative hidden overflow-hidden lg:flex">

          {/* Main Gradient */}

          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-800" />

          {/* Decorative Layers */}

          <div className="absolute inset-0 opacity-[0.08]">

            <div className="absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full border border-white" />

            <div className="absolute right-28 top-28 h-[280px] w-[280px] rounded-full border border-white" />

            <div className="absolute -bottom-24 -left-20 h-[420px] w-[420px] rounded-full border border-white" />

          </div>

          {/* Glow */}

          <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-blue-400/20 blur-[100px]" />

          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />

          {/* Content */}

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* =================================================
                LOGO
            ================================================== */}

            <div className="flex items-center gap-4">

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl">

                <HeartPulse size={30} />

                <span className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full border-[3px] border-blue-700 bg-white" />

              </div>

              <div>

                <h1 className="text-2xl font-black tracking-tight text-white">
                  DMS
                </h1>

                <p className="mt-1 text-sm text-blue-100/80">
                  Dental Management System
                </p>

              </div>

            </div>

            {/* =================================================
                HERO CONTENT
            ================================================== */}

            <div className="max-w-xl">

              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-xl">

                <Sparkles
                  size={16}
                  className="text-blue-200"
                />

                سیستم مدیریت هوشمند کلینیک

              </div>

              {/* Heading */}

              <h2 className="mt-7 text-5xl font-black leading-[1.25] tracking-tight text-white xl:text-6xl">

                مدیریت بهتر،

                <span className="block bg-gradient-to-l from-blue-100 via-white to-indigo-200 bg-clip-text text-transparent">
                  خدمات بهتر
                </span>

              </h2>

              {/* Description */}

              <p className="mt-7 max-w-lg text-base leading-8 text-blue-100/85 xl:text-lg">

                سیستم مدیریت کلینیک دندان و زیبایی نورستانی،
                تمام بخش‌های مهم کلینیک را در یک محیط واحد،
                سریع، منظم و قابل اعتماد مدیریت می‌کند.

              </p>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="mt-10 grid grid-cols-2 gap-4">

                {systemFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]"
                    >

                      {/* Hover Glow */}

                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/0 blur-2xl transition group-hover:bg-blue-300/20" />

                      <div className="relative flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-blue-700">

                          <Icon size={20} />

                        </div>

                        <div>

                          <h3 className="text-sm font-bold text-white">
                            {feature.title}
                          </h3>

                          <p className="mt-1 text-[11px] leading-5 text-blue-100/65">
                            {feature.description}
                          </p>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                BOTTOM STATUS
            ================================================== */}

            <div className="flex items-center gap-4 border-t border-white/10 pt-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white backdrop-blur">

                <ShieldCheck size={22} />

              </div>

              <div>

                <p className="font-bold text-white">
                  سیستم مصئون و قابل اعتماد
                </p>

                <p className="mt-1 text-xs text-blue-100/60">
                  مدیریت یکپارچه اطلاعات کلینیک
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            RIGHT — LOGIN SECTION
        ====================================================== */}

        <section className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-8 lg:px-12">

          <div className="w-full max-w-md">

            {/* =================================================
                MOBILE BRAND
            ================================================== */}

            <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">

                <HeartPulse size={25} />

              </div>

              <div>

                <h1 className="text-xl font-black text-slate-900">
                  DMS
                </h1>

                <p className="text-xs text-slate-500">
                  Dental Management System
                </p>

              </div>

            </div>

            {/* =================================================
                LOGIN CARD
            ================================================== */}

            <div className="relative">

              {/* Outer Glow */}

              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-blue-200/50 via-white to-indigo-200/50 blur-xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/95 p-7 shadow-[0_30px_80px_rgba(30,64,175,0.12)] backdrop-blur-xl sm:p-9">

                {/* Card Top Accent */}

                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-l from-blue-600 via-blue-500 to-indigo-600" />

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="text-center">

                  <div className="relative mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/25">

                    <UserRound size={32} />

                    <span className="absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm">

                      <CheckCircle2 size={15} />

                    </span>

                  </div>

                  <h2 className="mt-7 text-3xl font-black tracking-tight text-slate-900">

                    خوش آمدید

                  </h2>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">

                    لطفاً معلومات حساب خود را وارد کنید
                    تا وارد سیستم شوید.

                  </p>

                </div>

                {/* =================================================
                    FORM
                ================================================== */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-9 space-y-5"
                >

                  {/* Username */}

                  <div className="relative">

                    <UserRound
                      size={19}
                      className="pointer-events-none absolute right-4 top-1/2 z-10 -translate-y-1/2 text-blue-500"
                    />

                    <Input
                      name="userName"
                      value={form.userName}
                      onChange={handleChange}
                      placeholder="نام کاربری"
                      className="h-14 rounded-xl border-slate-200 bg-slate-50/70 pr-12 text-sm transition-all focus:bg-white"
                      autoComplete="username"
                    />

                  </div>

                  {/* Password */}

                  <div className="relative">

                    <LockKeyhole
                      size={19}
                      className="pointer-events-none absolute right-4 top-1/2 z-10 -translate-y-1/2 text-blue-500"
                    />

                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="رمز عبور"
                      className="h-14 rounded-xl border-slate-200 bg-slate-50/70 pr-12 pl-12 text-sm transition-all focus:bg-white"
                      autoComplete="current-password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-blue-50 hover:text-blue-600"
                      aria-label="نمایش یا پنهان کردن رمز عبور"
                    >

                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}

                    </button>

                  </div>

                  {/* Security */}

                  <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">

                    <ShieldCheck
                      size={16}
                      className="text-blue-500"
                    />

                    ورود شما به صورت مصئون انجام می‌شود

                  </div>

                  {/* =================================================
                      LOGIN BUTTON
                  ================================================== */}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="group relative mt-2 flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-l from-blue-600 via-blue-600 to-indigo-600 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70"
                  >

                    <div className="absolute inset-0 bg-gradient-to-l from-indigo-700 via-blue-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative flex items-center gap-3">

                      {loading ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />

                          در حال ورود...

                        </>
                      ) : (
                        <>
                          ورود به سیستم

                          <ArrowLeft
                            size={19}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                          />

                        </>
                      )}

                    </span>

                  </Button>

                </form>

                {/* =================================================
                    FOOTER
                ================================================== */}

                <div className="mt-8 flex items-center justify-center gap-2 border-t border-slate-100 pt-6 text-xs text-slate-400">

                  <Building2 size={14} />

                  <span>
                    © ۲۰۲۶ کلینیک دندان و زیبایی نورستانی
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
};

export default LoginPage;

