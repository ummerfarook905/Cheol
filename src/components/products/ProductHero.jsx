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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Image */}

          <img
            src={image}
            alt={title}
            className="w-full rounded-lg shadow"
          />

          {/* Right Side */}

          <div>

            <h1 className="text-4xl font-bold">{title}</h1>

            <p className="mt-4 text-gray-600 leading-7">
              {description}
            </p>

            {/* Tabs */}

            <div className="flex gap-3 mt-6">

              {categories.map((item) => (

                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                    activeTab === item
                      ? "bg-[#0F2746] text-white"
                      : "border hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

            {/* Tab Content */}

            <div className="mt-6 border rounded-xl p-5">

              {activeTab === "Ordering Info" && (

                <div>

                  {Object.entries(specs).map(([key, values]) => (

                    <div
                        key={key}
                        className="grid grid-cols-[140px_1fr] gap-4 py-4 border-b last:border-none items-start"
                        >
                        {/* Left Label */}
                        <div className="font-semibold text-sm uppercase text-gray-800">
                            {key}
                        </div>

                        {/* Right Values */}
                        <div className="flex flex-wrap gap-2">
                            {values.map((value) => (
                            <span
                                key={value}
                                className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium whitespace-nowrap"
                            >
                                {value}
                            </span>
                            ))}
                        </div>
                    </div>

                  ))}

                </div>

              )}

              {activeTab === "Types" && (

                <div className="grid md:grid-cols-2 gap-3">

                  {types.map((type) => (

                    <div
                      key={type}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>

                      <span className="text-sm">
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