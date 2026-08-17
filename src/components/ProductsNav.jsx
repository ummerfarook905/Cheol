import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

import productCatalogue from "../assets/Cheol Cable Management System.pdf";

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
    <nav className="sticky top-20 z-50 w-full bg-white shadow-md">

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

                  {/* Active Underline */}
                  {location.pathname === item.path && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500"></span>
                  )}
                </Link>
              </li>
            ))}

            {/* Product Catalogue */}
            <li>
              <a
                href={productCatalogue}
                download="Product-Catalogue.pdf"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
              >
                <Download size={18} />
                Product Catalogue
              </a>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0F2746]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
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
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Mobile Product Catalogue */}
          <li className="px-6 py-4">
            <a
              href={productCatalogue}
              download="Product-Catalogue.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-md transition-all duration-300"
            >
              <Download size={18} />
              Product Catalogue
            </a>
          </li>

        </ul>
      </div>

    </nav>
  );
}