import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  title,
  desc,
  link,
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition bg-white">

      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-gray-600">
          {desc}
        </p>

        <Link
          to={link}
          className="inline-block mt-6 text-[#D18329] font-semibold"
        >
          View Product →
        </Link>

      </div>

    </div>
  );
}