export default function ProductOverview({
  title,
  image,
  description = [],
}) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-xl w-full"
          />

          <div>

            <h2 className="text-5xl font-black mb-8">
              {title}
            </h2>

            {description.map((text, index) => (
              <p
                key={index}
                className={`text-gray-600 leading-8 ${
                  index !== description.length - 1 ? "mb-6" : ""
                }`}
              >
                {text}
              </p>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}