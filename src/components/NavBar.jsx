import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoImage from "../assets/images/Logo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0F2746]/95 backdrop-blur-md shadow-md">
      
      {/* Main Navbar */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex h-[72px] items-center justify-between sm:h-[78px] lg:h-[84px]">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src={LogoImage}
              alt="Cheol"
              className="
                h-[54px]
                w-auto
                object-contain
                sm:h-[62px]
                lg:h-[72px]
                xl:h-[76px]
              "
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  group
                  relative
                  whitespace-nowrap
                  py-2
                  text-[12px]
                  xl:text-[13px]
                  2xl:text-sm
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-[#D18329]"
                      : "text-white hover:text-[#D18329]"
                  }
                  `
                }
              >
                {item.name}

                {/* Underline */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#D18329]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP QUOTE BUTTON ================= */}
          <Link
            to="/contact"
            className="
              hidden
              lg:flex
              shrink-0
              items-center
              justify-center
              rounded
              bg-[#D18329]
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-orange-600
              xl:px-5
              xl:py-3
              2xl:px-6
            "
          >
            Get Quote
          </Link>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded
              text-white
              transition
              hover:bg-white/10
              lg:hidden
            "
          >
            <Menu size={30} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-[60]
            bg-black/60
            backdrop-blur-[2px]
            lg:hidden
          "
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-screen
          w-[82%]
          max-w-[360px]
          flex-col
          bg-[#0F2746]
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out
          lg:hidden
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Sidebar Header */}
        <div
          className="
            flex
            min-h-[72px]
            items-center
            justify-between
            border-b
            border-white/10
            px-5
            sm:px-6
          "
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <img
              src={LogoImage}
              alt="Cheol"
              className="
                h-[48px]
                w-auto
                object-contain
                sm:h-[54px]
              "
            />
          </Link>

          {/* Close Button */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded
              text-white
              transition
              hover:bg-white/10
            "
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav
          className="
            flex
            flex-1
            flex-col
            overflow-y-auto
            px-5
            py-7
            sm:px-6
          "
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                border-b
                border-white/10
                py-4
                text-[15px]
                font-medium
                uppercase
                tracking-[0.12em]
                transition-all
                duration-300
                sm:text-base
                ${
                  isActive
                    ? "pl-2 text-[#D18329]"
                    : "text-white hover:pl-2 hover:text-[#D18329]"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Quote Button */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="
              mt-8
              flex
              items-center
              justify-center
              rounded
              bg-[#D18329]
              px-5
              py-3.5
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-white
              transition-all
              duration-300
              hover:bg-orange-600
              sm:text-base
            "
          >
            Get Quote
          </Link>
        </nav>
      </aside>
    </header>
  );
}