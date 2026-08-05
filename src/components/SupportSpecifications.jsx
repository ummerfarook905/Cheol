// const specs = [
//   ["Profiles", "41x41, 41x21, Slotted & Back-to-Back"],
//   ["Length", "3000mm standard (up to 6000mm)"],
//   ["Material", "GI • HDGAF • Stainless Steel"],
//   ["Thickness", "1.5 • 2.0 • 2.5 mm"],
// ];

// export default function SupportSpecifications() {
//   return (
//     <section className="py-24 bg-gray-50">

//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-4xl font-black text-center mb-12">
//           Technical Specifications
//         </h2>

//         <div className="overflow-x-auto">

//           <table className="w-full bg-white rounded-xl shadow-lg">

//             <thead className="bg-[#0F2746] text-white">

//               <tr>
//                 <th className="p-5 text-left">Specification</th>
//                 <th className="p-5 text-left">Available Options</th>
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