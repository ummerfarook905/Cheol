import { Link } from "react-router-dom";

export default function ProductCTA() {
  return (
    <section className="py-24 bg-[#0F2746]">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-white text-5xl font-black">
          Need Engineering Assistance?
        </h2>

        <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-8">
          Tell us about your project requirements and our
          engineering team will recommend the most suitable
          cable management system for your application.
        </p>

        <div className="mt-10">

          <Link
            to="/contact"
            className="inline-block bg-[#D18329] hover:bg-orange-600 transition text-white px-10 py-4 rounded-lg font-semibold"
          >
            Request a Quote
          </Link>

        </div>

      </div>

    </section>
  );
}