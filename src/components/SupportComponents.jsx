// const brackets = [
//   "Single Channel Bracket",
//   "Double Channel Bracket",
//   "C Plate Bracket",
//   "2 Plate Single Bracket",
//   "2 Plate Double Bracket",
//   "Roof Channel Bracket",
// ];

// const postBases = [
//   "Single Low Post Base",
//   "Single High Post Base",
//   "Double Low Post Base",
//   "Double High Post Base",
//   "2 Hole Single Base",
//   "2 Hole Double Base",
// ];

// const fittings = [
//   "Square Washer",
//   "2 Hole Flat Plate",
//   "3 Hole Flat Plate",
//   "4 Hole Flat Plate",
//   "L Plate",
//   "T Plate",
//   "Cross Plate",
//   "Angle Fitting",
// ];

// export default function SupportComponents() {
//   return (
//     <section className="py-24">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-3 gap-10">

//           <div>

//             <h2 className="text-3xl font-black mb-8">
//               Brackets
//             </h2>

//             <div className="space-y-4">

//               {brackets.map((item) => (
//                 <div
//                   key={item}
//                   className="bg-white shadow rounded-lg p-5"
//                 >
//                   {item}
//                 </div>
//               ))}

//             </div>

//           </div>

//           <div>

//             <h2 className="text-3xl font-black mb-8">
//               Post Bases
//             </h2>

//             <div className="space-y-4">

//               {postBases.map((item) => (
//                 <div
//                   key={item}
//                   className="bg-white shadow rounded-lg p-5"
//                 >
//                   {item}
//                 </div>
//               ))}

//             </div>

//           </div>

//           <div>

//             <h2 className="text-3xl font-black mb-8">
//               Fittings
//             </h2>

//             <div className="space-y-4">

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

//         </div>

//       </div>

//     </section>
//   );
// }