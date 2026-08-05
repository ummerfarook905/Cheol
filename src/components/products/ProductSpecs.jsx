export default function ProductSpecifications({
  title = "Specifications",
  specs = [],
}) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-12">
          {title}
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full bg-white rounded-xl shadow-lg">

            <thead className="bg-[#0F2746] text-white">

              <tr>
                <th className="p-5 text-left">Specification</th>
                <th className="p-5 text-left">Value</th>
              </tr>

            </thead>

            <tbody>

              {specs.map(([key, value]) => (

                <tr key={key} className="border-b">

                  <td className="p-5 font-semibold">
                    {key}
                  </td>

                  <td className="p-5">
                    {value}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}