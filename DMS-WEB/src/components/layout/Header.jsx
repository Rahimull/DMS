import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  CalendarDays,
  Phone,
} from "lucide-react";

const navItems = [
  { name: "خانه", path: "/" },
  { name: "درباره ما", path: "/about" },
  { name: "خدمات", path: "/services" },
  { name: "داکتران", path: "/doctors" },
  { name: "تماس با ما", path: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <div className="flex m-3 h-12 w-20 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <span className="text-xl font-bold">DMS</span>
          </div>

        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-[10px] px-4 py-2.5 text-lg font-bold transition-all ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          <a
            href="tel:+93700000000"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <Phone size={17} />
            <span>+93 700 000 000</span>
          </a>

          <Link
            to="/appointment"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            <CalendarDays size={17} />
            گرفتن نوبت
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label="باز و بسته کردن منو"
        >
          {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">

          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-[10px] px-4 py-2 text-lg font-bold transition ${
                    isActive
                      ? "bg-blue-100 text-blue-900"
                      : "text-slate-600 hover:bg-blue-100 hover:text-blue-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/appointment"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <CalendarDays size={17} />
              گرفتن نوبت
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;