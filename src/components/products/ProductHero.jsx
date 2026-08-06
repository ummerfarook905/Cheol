import { useState } from "react";

export default function ProductHero({
  title,
  image,
  description,
  categories = [],
  specs = {},
  types = [],
}) {
  const [activeTab, setActiveTab] = useState("Ordering Info");

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="
                w-full
                max-w-md
                lg:max-w-full
                rounded-xl
                shadow-lg
                object-contain
              "
            />
          </div>

          {/* Right Side */}
          <div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
              {description}
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === item
                      ? "bg-[#0F2746] text-white"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 border rounded-xl p-4 sm:p-6">

              {/* Ordering Info */}
              {activeTab === "Ordering Info" && (
                <div>
                  {Object.entries(specs).map(([key, values]) => (
                    <div
                      key={key}
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-[160px_1fr]
                        gap-3
                        sm:gap-6
                        py-4
                        border-b
                        last:border-none
                      "
                    >
                      <div className="font-semibold uppercase text-gray-800 text-sm">
                        {key}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {values.map((value) => (
                          <span
                            key={value}
                            className="
                              px-3
                              py-1
                              bg-gray-100
                              rounded-full
                              text-xs
                              sm:text-sm
                              font-medium
                            "
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Types */}
              {activeTab === "Types" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {types.map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-3"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>

                      <span className="text-sm sm:text-base">
                        {type}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}