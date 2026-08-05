// const fittings = [
//   "90° Flat Bend",
//   "45° Flat Bend",
//   "Horizontal Tee",
//   "Horizontal Cross",
//   "RH Reducer",
//   "LH Reducer",
//   "Outside Riser",
//   "Inside Riser",
// ];

// const accessories = [
//   "Standard Connector",
//   "Angle Connector",
//   "Bottom Plate",
//   "Vertical Connector",
//   "Hold Down Clamp",
//   "End Plate",
//   "Box Connector",
//   "Cover Clamp",
//   "Drop Plate",
//   "Side Cover Clip",
// ];

// export default function TrayAccessories() {
//   return (
//     <section className="py-24 bg-gray-50">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-12">

//           {/* Fittings */}

//           <div>

//             <h2 className="text-3xl font-black mb-8">
//               Tray Fittings
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
//               Connectors & Accessories
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