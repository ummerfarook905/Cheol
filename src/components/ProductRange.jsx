import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Ladder from "../assets/ladder/ladder.jpeg";
import Tray from "../assets/tray/tray2.png";
import Trunking from "../assets/trunking/trunking2.png";
import Support from "../assets/support/support2.png";

const products = [
  {
    id: 1,
    title: "Cable Ladder",
    badge: "Heavy Duty",
    desc: "Heavy-duty cable ladders for industrial and commercial installations. Widths 100–900mm, heights 60–150mm.",
    image:
      Ladder,
    large: true,
  },
  {
    id: 2,
    title: "Cable Tray",
    badge: "Perforated",
    desc: "",
    image:
      Tray,
  },
  {
    id: 3,
    title: "Cable Trunking",
    badge: "Multi Component",
    desc: "",
    image:
      Trunking,
  },
  {
    id: 4,
    title: "Channel & Support System",
    badge: "Structural",
    desc: "Metal framing strut channels 41×41 and 41×21mm. Comprehensive brackets, post bases and fittings range.",
    image:
      Support,
    full: true,
  },
];

export default function ProductRange() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">

          <div>
            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
              Product Range
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-black leading-tight uppercase">
              Complete
              <br />
              System
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-gray-800 uppercase text-sm md:text-base leading-relaxed">
              ALL PRODUCTS ISO 9001:2008 CERTIFIED. DESIGNED TO MINIMIZE
              WELDING ON SITE
            </p>
          </div>

        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left */}

          <div className="lg:row-span-2">
            <Card {...products[0]} height="h-[520px]" />
          </div>

          {/* Right */}

          <div className="lg:col-span-2 space-y-6">

            <Card {...products[1]} height="h-[245px]" />

            <Card {...products[2]} height="h-[245px]" />

          </div>

          {/* Bottom */}

          <div className="lg:col-span-3">
            <Card {...products[3]} height="h-[260px]" />
          </div>

        </div>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate("/products")}
            className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Products
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ title, badge, desc, image, height }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${height}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="absolute inset-0 p-7 flex flex-col justify-end">

        {badge && (
          <span className="inline-block w-fit px-4 py-1 rounded-full border border-orange-400 bg-black/20 backdrop-blur text-orange-400 uppercase text-[11px] tracking-widest mb-4">
            {badge}
          </span>
        )}

        <h3 className="text-white text-2xl font-bold uppercase">
          {title}
        </h3>

        {desc && (
          <p className="mt-3 text-white/90 text-sm md:text-base leading-relaxed max-w-md">
            {desc}
          </p>
        )}

      </div>
    </div>
  );
}