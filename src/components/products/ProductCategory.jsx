import ProductCard from "./ProductCard";

export default function ProductCategory({
  title,
  products,
}) {
  return (
    <section className="py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-8 border-l-4 border-orange-500 pl-3">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {products.map((item) => (
            <ProductCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}