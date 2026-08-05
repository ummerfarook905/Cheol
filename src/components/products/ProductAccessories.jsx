export default function ProductAccessories({
  title = "Accessories",
  sections = [],
}) {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className={`grid lg:grid-cols-${sections.length} gap-12`}>

          {sections.map((section) => (

            <div key={section.title}>

              <h2 className="text-3xl font-black mb-8">
                {section.title}
              </h2>

              <div className="grid gap-4">

                {section.items.map((item) => (

                  <div
                    key={item}
                    className="bg-white p-5 rounded-lg shadow"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}