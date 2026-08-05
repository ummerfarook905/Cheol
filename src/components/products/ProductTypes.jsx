export default function ProductTypes({
  title = "Product Types",
  items = [],
}) {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-16">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item) => (

            <div
              key={item}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold">
                {item}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}