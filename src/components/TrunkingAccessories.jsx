// const fittings = [
//   "90° Flat Bend",
//   "45° Flat Bend",
//   "Flat Tee",
//   "Cross",
//   "90° Riser",
// ];

// const accessories = [
//   "Connector",
//   "End Cap",
//   "Box Connector",
// ];

// export default function TrunkingAccessories() {
//   return (
//     <section className="py-24 bg-gray-50">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-12">

//           {/* Fittings */}

//           <div>

//             <h2 className="text-3xl font-black mb-8">
//               Trunking Fittings
//             </h2>

//             <div className="grid gap-4">

//               {fittings.map((item) => (

//                 <div
//                   key={item}
//                   className="bg-white shadow rounded-lg p-5"
//                 >
//                   {item}
//                 </div>

//               ))}

//             </div>

//           </div>

//           {/* Accessories */}

//           <div>

//             <h2 className="text-3xl font-black mb-8">
//               Accessories
//             </h2>

//             <div className="grid gap-4">

//               {accessories.map((item) => (

//                 <div
//                   key={item}
//                   className="bg-white shadow rounded-lg p-5"
//                 >
//                   {item}
//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }