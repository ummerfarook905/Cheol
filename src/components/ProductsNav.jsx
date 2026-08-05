import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const products = [
  {
    name: "Cable Ladder",
    path: "/cable-ladder",
  },
  {
    name: "Cable Tray",
    path: "/cable-tray",
  },
  {
    name: "Cable Trunking",
    path: "/cable-trunking",
  },
  {
    name: "Support System",
    path: "/support-system",
  },
];

export default function ProductsNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Mobile Title */}

          <h2 className="md:hidden text-lg font-bold text-[#0F2746]">
            Products
          </h2>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center gap-8">

            {products.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative font-medium transition pb-1 ${
                    location.pathname === item.path
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.name}

                  {location.pathname === item.path && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500"></span>
                  )}
                </Link>
              </li>
            ))}

          </ul>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-white border-t">

          {products.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 border-b transition ${
                  location.pathname === item.path
                    ? "bg-orange-50 text-orange-500 font-semibold"
                    : "hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>
      </div>

    </nav>
  );
}