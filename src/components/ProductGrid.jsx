import { Link } from "react-router-dom";

const products = [
  {
    title: "Cable Ladder",
    image: "/images/ladder.jpg",
    route: "/cable-ladder",
    description:
      "Heavy-duty cable ladders manufactured for industrial and commercial installations.",
  },
  {
    title: "Cable Tray",
    image: "/images/tray.jpg",
    route: "/cable-tray",
    description:
      "Perforated cable trays available in multiple sizes and materials.",
  },
  {
    title: "Cable Trunking",
    image: "/images/trunking.jpg",
    route: "/cable-trunking",
    description:
      "Multi-compartment cable trunking systems for organized cable routing.",
  },
  {
    title: "Channel & Support",
    image: "/images/support.jpg",
    route: "/support-system",
    description:
      "Structural channels, brackets and support accessories.",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black">
            Our Products
          </h2>

          <p className="mt-4 text-gray-600">
            Choose the right cable management
            solution for your project.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {product.description}
                </p>

                <Link
                  to={product.route}
                  className="inline-block mt-8 bg-[#D18329] text-white px-6 py-3 rounded hover:bg-orange-600 transition"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}