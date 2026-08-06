import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoImage from "../assets/images/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F2746]/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src= {LogoImage}
              alt="Cheol"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative uppercase text-sm tracking-widest font-medium transition duration-300 ${
                    isActive
                      ? "text-[#D18329]"
                      : "text-white hover:text-[#D18329]"
                  }`
                }
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#D18329] transition-all duration-300 hover:w-full"></span>

              </NavLink>
            ))}

          </nav>

          {/* Quote Button */}
          <Link
            to="/contact"
            className="hidden lg:flex bg-[#D18329] hover:bg-orange-600 transition px-6 py-3 rounded text-white font-semibold"
          >
            Get Quote
          </Link>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={30} />
          </button>

        </div>
      </div>

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0F2746] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">

          <img
            src="/images/logo.png"
            alt=""
            className="h-10"
          />

          <button onClick={() => setOpen(false)}>
            <X size={30} className="text-white" />
          </button>

        </div>

        <nav className="flex flex-col p-6 gap-6">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `uppercase tracking-wider text-lg ${
                  isActive
                    ? "text-[#D18329]"
                    : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 bg-[#D18329] text-center py-3 rounded text-white"
          >
            Get Quote
          </Link>

        </nav>
      </div>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 md:hidden"
        />
      )}
    </header>
  );
}