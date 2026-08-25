import {
  ArrowRight,
  ShieldCheck,
  Cog,
  CheckCircle,
  Headphones,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import heroImage from "../assets/images/Hero.png";

export default function Hero() {
  const navigate = useNavigate();

  // WhatsApp
  const whatsappNumber = "9710524709704";

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to make a project enquiry."
  );

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-[#07111D]">

      {/* Background */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111D]/95 via-[#07111D]/75 to-[#07111D]/20 lg:to-transparent" />

      {/* Orange Glow */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-orange-500/20 blur-[180px]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">

        <div className="flex items-center min-h-[100svh] py-24">

          <div className="w-full max-w-3xl text-center lg:text-left">

            {/* Top Line */}

            <div className="flex justify-center lg:justify-start">
              <div className="w-20 sm:w-24 h-[3px] rounded-full bg-orange-500"></div>
            </div>

            {/* Heading */}

            <h2 className="mt-8 uppercase text-white font-light tracking-widest text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              BUILT FOR
            </h2>

            <h1
              className="
                mt-2
                uppercase
                font-black
                leading-[0.9]
                tracking-tight
                break-words

                bg-gradient-to-r
                from-[#ff5a00]
                to-[#ff9d3d]
                bg-clip-text
                text-transparent

                text-[clamp(1.8rem,9vw,5rem)]
              "
             >
              PERFORMANCE
            </h1>

            <div className="flex justify-center lg:justify-start">
              <div className="mt-6 h-[3px] w-44 sm:w-60 rounded-full bg-orange-500 shadow-[0_0_20px_#ff5a00]" />
            </div>

            {/* Description */}

            <p className="mt-8 max-w-xl mx-auto lg:mx-0 text-gray-300 leading-7 text-sm sm:text-base md:text-lg">
              Precision engineered. Quality assured.
              <br />
              Solutions that keep your operations moving forward.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button 
              onClick={() => navigate("/products")}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 transition rounded-lg px-8 py-3.5 text-white font-semibold flex items-center justify-center gap-2">
                EXPLORE PRODUCTS
                <ArrowRight size={20} />
              </button>

              <button 
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto border border-white/40 hover:bg-white hover:text-black transition rounded-lg px-8 py-3.5 text-white font-semibold flex items-center justify-center gap-2">
                GET QUOTE
                <ArrowRight size={20} />
              </button>

            </div>

            {/* Features */}

            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">

              <Feature
                icon={<ShieldCheck size={24} />}
                title="PREMIUM"
                subtitle="QUALITY"
              />

              <Feature
                icon={<Cog size={24} />}
                title="PRECISION"
                subtitle="ENGINEERED"
              />

              <Feature
                icon={<CheckCircle size={24} />}
                title="RELIABLE"
                subtitle="PERFORMANCE"
              />

              <Feature
                icon={<Headphones size={24} />}
                title="EXPERT"
                subtitle="SUPPORT"
              />

            </div>

          </div>

        </div>

      </div>
      {/* WhatsApp Floating Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed
            right-4
            bottom-5
            sm:right-6
            sm:bottom-6
            lg:right-8
            lg:bottom-8
            z-[9999]
            flex
            items-center
            gap-2
            group
          "
          aria-label="Chat with us on WhatsApp"
        >
          {/* Chat Label */}
          <span
            className="
              bg-[#25D366]
              text-white
              text-xs
              sm:text-sm
              font-medium
              px-4
              py-2
              rounded-full
              shadow-lg
              whitespace-nowrap
              opacity-0
              translate-x-3
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all
              duration-300
            "
          >
            Chat with Us
          </span>

          {/* WhatsApp Circle */}
          <span
            className="
              w-14
              h-14
              sm:w-16
              sm:h-16
              rounded-full
              bg-[#25D366]
              flex
              items-center
              justify-center
              text-white
              shadow-[0_8px_30px_rgba(37,211,102,0.45)]
              transition-all
              duration-300
              group-hover:scale-110
            "
          >
            <FaWhatsapp className="text-[32px] sm:text-[38px]" />
          </span>
        </a>

      

    </section>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-3">

      <div className="text-orange-500 flex-shrink-0">
        {icon}
      </div>

      <div>

        <h3 className="text-white font-semibold text-xs sm:text-sm">
          {title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm">
          {subtitle}
        </p>

      </div>

    </div>
  );
}