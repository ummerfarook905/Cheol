// const specs = [
//   ["Width", "100 – 900 mm"],
//   ["Height", "50 – 125 mm"],
//   ["Length", "2.44m • 3.00m"],
//   ["Material", "GI • HDGAF • Aluminium • Stainless Steel"],
//   ["Thickness", "1.0 • 1.2 • 1.5 • 2.0 • 2.5 mm"],
//   ["Flange Type", "Inside • C-Type • Plain"],
// ];

// export default function TraySpecs() {
//   return (
//     <section className="py-24 bg-gray-50">

//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-4xl font-black text-center mb-12">
//           Ordering Information
//         </h2>

//         <div className="overflow-x-auto">

//           <table className="w-full bg-white rounded-xl shadow-lg">

//             <thead className="bg-[#0F2746] text-white">

//               <tr>

//                 <th className="p-5 text-left">
//                   Specification
//                 </th>

//                 <th className="p-5 text-left">
//                   Available Options
//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {specs.map((item) => (

//                 <tr key={item[0]} className="border-b">

//                   <td className="p-5 font-semibold">
//                     {item[0]}
//                   </td>

//                   <td className="p-5">
//                     {item[1]}
//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </section>
//   );
// }