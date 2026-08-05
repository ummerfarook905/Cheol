export default function ProductCard({ image, title }) {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg bg-[#1f2b38]">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-white text-lg font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
}