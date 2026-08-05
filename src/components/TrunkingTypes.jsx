// const types = [
//   "CTK - Straight",
//   "CTK4H - 45° Horizontal Bend",
//   "CTK9H - 90° Horizontal Bend",
//   "CTKTH - Horizontal Tee",
//   "CTKXH - Horizontal Cross",
//   "CTK9RI - 90° Inside Riser",
//   "CTK9RO - 90° Outside Riser",
//   "CTKRH - Right Hand Reducer",
//   "CTKLH - Left Hand Reducer",
// ];

// export default function TrunkingTypes() {
//   return (
//     <section className="py-24">

//       <div className="max-w-7xl mx-auto px-6">

//         <h2 className="text-4xl font-black text-center mb-16">
//           Product Types
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {types.map((item) => (

//             <div
//               key={item}
//               className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition"
//             >
//               <h3 className="font-semibold text-lg">
//                 {item}
//               </h3>
//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }