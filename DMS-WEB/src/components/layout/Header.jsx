import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  CalendarDays,
  Phone,
  HeartPulse,
  ChevronLeft,
  LayoutDashboard,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { name: "خانه", path: "/" },
  { name: "درباره ما", path: "/about" },
  { name: "خدمات", path: "/services" },
  { name: "داکتران", path: "/doctors" },
  { name: "تماس با ما", path: "/contact" },
  { name: "ورد با سیستم مدیریت", path: "/contact" },
];

const dmsUrl = "http://localhost:5173";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/90 shadow-[0_4px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl"
    >
      {/* =====================================================
          TOP ACCENT LINE
      ====================================================== */}

      <div className="h-[3px] w-full bg-gradient-to-l from-blue-600 via-indigo-600 to-cyan-400" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN HEADER
        ====================================================== */}

        <div className="flex h-[76px] items-center justify-between">

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            {/* Logo Icon */}

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-600/30">

                <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/25 via-transparent to-transparent" />

                <HeartPulse
                  size={24}
                  strokeWidth={2}
                  className="relative"
                />

              </div>

              {/* Small pulse */}

              <span className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full border-2 border-white bg-cyan-400" />

            </div>

            {/* Logo Text */}

            <div className="hidden sm:block">

              <h1 className="!text-[25px] font-black tracking-tight text-slate-900">
                ویب سایت کلینیک دندان و زیبای نورستانی
              </h1>

            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-1 lg:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative px-4 py-2.5 text-[14px] font-bold transition-all duration-300 ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">
                      {item.name}
                    </span>

                    {/* Hover / Active Background */}

                    <span
                      className={`absolute inset-0 -z-0 rounded-xl bg-blue-50 transition-all duration-300 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    />

                    {/* Bottom Indicator */}

                    <span
                      className={`absolute bottom-0 right-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-l from-blue-600 to-indigo-600 transition-all duration-300 ${
                        isActive
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Appointment Navigation */}

            {/* <NavLink
              to="/appointment"
              className={({ isActive }) =>
                `group relative mr-2 flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-l from-blue-700 to-indigo-700 text-white shadow-lg shadow-blue-600/20"
                    : "bg-blue-600 text-white shadow-md shadow-blue-600/15 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                }`
              }
            >
              <CalendarDays
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              نوبت‌ دهی

              <ChevronLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </NavLink> */}

          </nav>

          {/* =================================================
              DESKTOP RIGHT ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-4 lg:flex">

            {/* =================================================
              DMS Button
          ================================================== */}
          <a 
            href={dmsUrl} 
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl 
            bg-gradient-to-l from-indigo-600 via-blue-600 to-blue-500 px-4 py-2.5 text-[13px] 
            font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 
            hover:shadow-xl hover:shadow-indigo-600/25" > 
            {/* Animated Shine */} 
            <span 
              className="absolute inset-0 -translate-x-full bg-gradient-to-r 
              from-transparent via-white/20 to-transparent transition-transform duration-700 
              group-hover:translate-x-full" /> 
              {/* Icon */} 
              <div 
                className="relative flex h-7 w-7 items-center justify-center 
                rounded-lg bg-white/15 transition-transform duration-300 group-hover:scale-110"> 
                <LayoutDashboard size={15} /> 
                </div> 
                {/* Text */} 
                <span 
                className="relative hidden xl:inline"> 
                  سیستم مدیریت 
                </span> 
                  {/* External Icon */} 
                  <ExternalLink size={14} className="relative transition-transform duration-300 
                  group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> 
                </a>

            {/* Phone */}

            <a 
              href="tel:+93700000000"
              className="group flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Phone size={16} />
              </div>

              <div className="text-right">

                <p className="text-[10px] font-medium text-slate-400">
                  تماس با ما
                </p>

                <p dir="ltr" className="mt-0.5 text-xs font-bold text-slate-700 transition-colors group-hover:text-blue-600">
                  +93 700 000 000
                </p>

              </div>
            </a>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50/70 text-slate-700 transition-all duration-300 hover:bg-blue-600 hover:text-white lg:hidden"
            aria-label="باز و بسته کردن منو"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>

        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`overflow-hidden border-t border-blue-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

          {/* Mobile Navigation */}

          <nav className="space-y-1.5">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-l from-blue-50 to-indigo-50 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>

                    <ChevronLeft
                      size={17}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "-translate-x-1 text-blue-600"
                          : "text-slate-300 group-hover:-translate-x-1 group-hover:text-blue-500"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

          </nav>

          {/* =================================================
              MOBILE CONTACT
          ================================================== */}

          <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-l from-blue-50 to-indigo-50 p-4">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                  <Phone size={17} />
                </div>

                <div>

                  <p className="text-[10px] font-medium text-slate-400">
                    تماس با کلینیک
                  </p>

                  <a
                    href="tel:+93700000000"
                    className="mt-0.5 block text-sm font-black text-slate-800"
                  >
                    +93 700 000 000
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              MOBILE APPOINTMENT
          ================================================== */}

          <Link
            to="/appointment"
            onClick={closeMobileMenu}
            className="group mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-600 via-blue-600 to-indigo-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >

            <CalendarDays
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            گرفتن نوبت

            <ChevronLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;