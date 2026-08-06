import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <h1 className="mt-8 font-black uppercase leading-none">

              <span className="block text-[#0F2746] text-5xl lg:text-7xl">
                BUILT
              </span>

              <span className="block text-[#0F2746] text-5xl lg:text-7xl">
                FOR
              </span>

              <span className="block text-yellow-600 italic text-5xl lg:text-7xl">
                PERFOMANCE
              </span>

            </h1>

            <p className="mt-6 text-gray-600 max-w-lg leading-8">
              25 years of R&D. Engineered for Asia & MENA construction sites.
              BS EN certified across all product ranges.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-[#0F2746]">25+</h3>
                <p className="text-sm text-gray-500 mt-2">
                  YEARS R&D
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0F2746]">4</h3>
                <p className="text-sm text-gray-500 mt-2">
                  PRODUCTS
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0F2746]">
                  MENA
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  REACH
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/products"
                className="flex items-center gap-2 bg-[#0F2746] text-white px-7 py-4 rounded-lg hover:bg-[#16355d]"
              >
                View Products
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 border border-[#0F2746] text-[#0F2746] px-7 py-4 rounded-lg hover:bg-[#0F2746] hover:text-white"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="rounded-3xl overflow-hidden shadow-2xl">

              <img
                src={heroImage}
                alt="Hero"
                className="w-full"
              />

            </div>

            {/* Top Card */}

            {/* <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-lg px-5 py-4">

              <p className="text-yellow-600 text-xs uppercase">
                BSEN 61537
              </p>

              <h4 className="font-bold text-[#0F2746]">
                Certified
              </h4>

            </div> */}

            {/* Bottom Card */}

            {/* <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-6 py-5">

              <p className="text-xs text-gray-500 uppercase">
                System Quality
              </p>

              <h3 className="text-2xl font-bold text-[#0F2746]">
                100% Verified
              </h3>

            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
}