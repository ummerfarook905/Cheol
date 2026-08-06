import aboutImage from "../assets/images/about2.png";

const cards = [
  {
    title: "OUR VISION",
    text: "To be the global leader in steel industry — the most reliable and innovative value-added steel manufacturing, services and solution provider.",
  },
  {
    title: "OUR MISSION",
    text: "Maximize value for our client base globally by supplying high quality steel products using innovative technologies and experienced professionals.",
  },
  {
    title: "OUR POLICY",
    text: "Korean style of management where ideas flow from shop floor to top management. Right thing, right place, right time — delivering on time with automated precision.",
  },
];

const certificates = [
  "ISO 9001:2008",
  "BSEN 61537",
  "BS 6946",
  "BSEN 10327",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Two-column layout now starts at md (768px) instead of lg, so tablets
            use the extra width instead of stacking a full-width image. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-start">

          {/* LEFT */}
          <div className="relative">

            <img
              src={aboutImage}
              alt="About Cheol"
              className="
                w-full
                rounded-3xl
                object-cover
                object-center

                h-[220px]
                sm:h-[360px]
                md:h-[420px]
                lg:h-[560px]
                xl:h-[680px]
              "
            />

            {/* Floating Card */}
            <div
              className="
                absolute
                bottom-3
                right-3
                sm:bottom-5
                sm:right-5
                md:-bottom-6
                md:-right-6
                lg:-bottom-8
                lg:-right-8

                w-24 h-24
                sm:w-32 sm:h-32
                md:w-36 md:h-36
                lg:w-44 lg:h-44
                xl:w-52 xl:h-52

                bg-[#20345C]
                rounded-2xl
                lg:rounded-3xl
                shadow-2xl

                flex
                flex-col
                justify-center
                items-center
                text-center
                px-2

                animate-floating
              "
            >
              <p className="uppercase text-[8px] sm:text-[10px] lg:text-xs tracking-[2px] text-[#D68A2C] font-semibold">
                Certified Since
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mt-2">
                2008
              </h2>

              <p className="text-[9px] sm:text-sm lg:text-lg xl:text-2xl text-white mt-1">
                ISO 9001
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p className="uppercase tracking-[4px] text-[#C97A2A] text-xs font-bold">
              ABOUT CHEOL
            </p>

            <h2
              className="
                mt-3
                font-black
                leading-tight

                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              BUILT FOR
              <br />
              PRECISION.
            </h2>

            <p
              className="
                mt-4
                sm:mt-5
                lg:mt-6

                text-sm
                sm:text-base
                lg:text-lg

                leading-7
                text-gray-600
              "
            >
              Cheol's cable management system has been designed to minimize
              welding. Twenty five years of research and development in this
              field has helped us develop a system which takes into account all
              requirements of construction sites in Asia and the MENA region.
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 space-y-5 lg:space-y-8">

              {cards.map((card) => (
                <div
                  key={card.title}
                  className="border-l-[3px] border-[#C97A2A] pl-4"
                >
                  <h3 className="text-[#C97A2A] font-bold uppercase text-lg sm:text-xl md:text-xl lg:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mt-2 lg:mt-3 text-sm sm:text-base md:text-sm lg:text-lg leading-7 text-gray-600">
                    {card.text}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-2 sm:gap-3">

              {certificates.map((item) => (
                <button
                  key={item}
                  className="
                    px-4
                    py-2
                    sm:px-5
                    sm:py-2.5
                    lg:px-6
                    lg:py-3

                    rounded-full
                    border
                    border-gray-300

                    text-xs
                    sm:text-sm
                    lg:text-base

                    font-medium
                    text-gray-700

                    transition-all
                    duration-300

                    hover:bg-[#20345C]
                    hover:text-white
                    hover:border-[#20345C]

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#20345C]
                  "
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}