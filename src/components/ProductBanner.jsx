export default function ProductBanner({
  title,
  subtitle,
  image,
}) {
  return (
    <section
      className="relative h-[55vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#071426]/70"></div>

      <div className="relative z-10 text-center px-6">

        <p className="uppercase tracking-[4px] text-orange-400">
          Product Catalogue
        </p>

        <h1 className="text-5xl md:text-6xl font-black text-white mt-4">
          {title}
        </h1>

        <p className="text-gray-300 text-lg mt-6">
          {subtitle}
        </p>

      </div>
    </section>
  );
}