import { Link } from "react-router-dom";
import LogoImage from "../assets/images/Logo.png";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2746] text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company */}

        <div>

          <img
            src= {LogoImage}
            className="h-12 mb-6"
            alt=""
          />

          <p className="leading-7 text-sm">
            Cheol Cable Management System
            offers world class cable
            management solutions with
            quality, innovation and
            commitment.
          </p>

        </div>

        {/* Links */}

        <div>

          <h3 className="text-white text-xl mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </div>

        {/* Products */}

        <div>

          <h3 className="text-white text-xl mb-6">
            Products
          </h3>

          <ul className="space-y-3">

            <li>
              <Link to="/cable-ladder">
                Cable Ladder
              </Link>
            </li>

            <li>
              <Link to="/cable-tray">
                Cable Tray
              </Link>
            </li>

            <li>
              <Link to="/cable-trunking">
                Cable Trunking
              </Link>
            </li>

            <li>
              <Link to="/support-system">
                Channel & Support
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-white text-xl mb-6">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <MapPin size={20} />
              <span>
                Hamriyah Free Zone,
                Sharjah, UAE
              </span>
            </div>

            <div className="flex gap-3">
              <Phone size={20} />
              <span>
                +971 52 855 0065
              </span>
            </div>

            <div className="flex gap-3">
              <Mail size={20} />
              <span>
                sales@cheolkorea.com
              </span>
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto py-6 px-6 text-center text-sm text-gray-400">

          © {new Date().getFullYear()} Cheol Cable Management System.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}