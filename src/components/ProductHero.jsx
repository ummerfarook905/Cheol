export default function ProductHero() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/products-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#071426]/70"></div>

      <div className="relative z-10 text-center px-6">

        <p className="uppercase tracking-[5px] text-[#D18329] mb-4">
          Product Catalogue
        </p>

        <h1 className="text-5xl md:text-6xl font-black text-white">
          COMPLETE SYSTEM RANGE
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          High-performance cable management
          solutions engineered for industrial,
          commercial and infrastructure projects.
        </p>

      </div>
    </section>
  );
}