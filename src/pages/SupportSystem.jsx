import ProductHero from "../components/products/ProductHero";
import ProductCategory from "../components/products/ProductCategory";
import ProductsNavbar from "../components/ProductsNav";
import ProductBanner from "../components/ProductBanner";
import SupportImage from "../assets/support/support.jpeg";
import SingleChannelBracket from "../assets/support/Single Channel Bracket.png";
import DoubleChannelBracket from "../assets/support/Double Channel Bracket.png";
import CPlateChannelBracket from "../assets/support/C-Plate Channel Bracket.png";
import TwoPlateSingleBracket  from "../assets/support/2-Plate Single Bracket.png";
import TwoPlateDoubleBracket  from "../assets/support/2-Plate Double Bracket.png";
import RoofChannelBracket  from "../assets/support/Roof Channel Bracket.png";
import SingleChannelLowPostBase  from "../assets/support/Single Channel Low Post Base.png";
import SingleChannelHighPostBase  from "../assets/support/Single Channel High Post Base.png";
import DoubleChannelLowPostBase  from "../assets/support/Double Channel Low Post Base.png";
import DoubleChannelHighPostBase  from "../assets/support/Double Channel High Post Base.png";
import SingleChannelLowTwoHolePostBase  from "../assets/support/Single Channel Low 2Hole Post Base.png";
import SingleChannelHighTwoHolePostBase  from "../assets/support/Single Channel High 2Hole Post Base.png";
import DoubleChannelLowTwoHolePostBase  from "../assets/support/Double Channel Low 2Hole Post Base.png";
import DoubleChannelHighTwoHolePostBase  from "../assets/support/Double Channel High 2Hole Post Base.png";
import SquareWasher from "../assets/support/Square Washer.png";
import TwoHoleFlatPlate from "../assets/support/2-Hole Flat Plate.png";
import ThreeHoleFlatPlate from "../assets/support/3-Hole Flat Plate.png";
import FourHoleFlatPlate from "../assets/support/4-Hole Flat Plate.png";
import ThreeHoleLPlate from "../assets/support/3-Hole L-Plate.png";
import FourHoleLPlate from "../assets/support/4-Hole L-Plate.png";
import ThreeHoleTeePlate from "../assets/support/3-Hole Tee Plate.png";
import CrossPlate from "../assets/support/Cross Plate.png";
import TwoHoleAngleFitting from "../assets/support/2-Hole Angle Fitting.png";
import ThreeHoleAngleFitting from "../assets/support/3-Hole Angle Fitting.png";
import FourHoleAngleFitting from "../assets/support/4-Hole Angle Fitting.png";
import FourHoleTriangle from "../assets/support/4-Hole Triangle.png";



export default function CableTrayPage({
  hero,
  sections,
}) {
  const cableLadder = {
  hero: {
    title: "CHANNEL & SUPPORT SYSTEM",
    image:
      SupportImage,

    description:
      "Cheol Metal Framing Strut Channels manufactured to BS 6946:1988. We strictly follow client specifications to ensure channels and supports can withstand the installed load. Technical assistance is provided.",

    categories: ["Ordering Info", "Types"],

    specs: {
      Profile: ["CFCH-4 (41*41)", "CFCH-2 (41*21)", "CFCH-4S (Slotted 41*41)", "CFCH-44S (Back-to-Back 41*41)", "CFCH-2S (Slotted 41*21", "CFCH-22S (Back-to-Back 41*21"],
      Length: ["3,000mm standard", "Up to 6,000mm"],
      Material: ["GI", "HDGAF", "Stainless Steel"],
      Thickness: ["1.5mm", "2.0mm", "2.5mm"],
    },

    types: [
    "Single Channel Bracket",
    "C-Plate Channel Bracket",
    "2-Plate Double Bracket",
    "Double Channel Bracket",
    "2-Plate Single Bracket",
    "Roof Channel Bracket",
    ],
  },

  sections: [
    {
      title: "Brackets",
      products: [
        {
          title: "Single Channel Bracket ",
          image:
            SingleChannelBracket ,
        },
        {
          title: "Double Channel Bracket",
          image:
             DoubleChannelBracket,
        },
        {
          title: "C-Plate Channel Bracket",
          image:
             CPlateChannelBracket,
        },
        {
          title: "2-Plate Single Bracket ",
          image:
            TwoPlateSingleBracket,
        },
        {
          title: "2-Plate Double Bracket ",
          image:
            TwoPlateDoubleBracket,
        },
        {
          title: "Roof Channel Bracket",
          image:
            RoofChannelBracket,
        },
      ],
    },

    {
      title: "Post Bases",
      products: [
        {
          title: "Single Channel Low Post Base",
          image:
            SingleChannelLowPostBase,
        },
        {
          title: "Single Channel High Post Base",
          image:
            SingleChannelHighPostBase,
        },
        {
          title: "Double Channel Low Post Base",
          image:
           DoubleChannelLowPostBase,
        },
        {
          title: "Double Channel High Post Base",
          image:
           DoubleChannelHighPostBase,
        },
        {
          title: "Single Channel Low 2Hole Post Base",
          image:
           SingleChannelLowTwoHolePostBase,
        },
        {
          title: "Single Channel High 2Hole Post Base",
          image:
           SingleChannelHighTwoHolePostBase,
        },
        {
          title: "Double Channel Low 2Hole Post Base",
          image:
           DoubleChannelLowTwoHolePostBase,
        },
        {
          title: "Double Channel High 2Hole Post Base",
          image:
           DoubleChannelHighTwoHolePostBase,
        },
      ],
    },

    {
      title: "Fittings",
      products: [
        {
          title: "Square Washer",
          image:
            SquareWasher,
        },
        {
          title: "2-Hole Flat Plate",
          image:
            TwoHoleFlatPlate,
        },
        {
          title: "3-Hole Flat Plate",
          image:
            ThreeHoleFlatPlate,
        },
        {
          title: "4-Hole Flat Plate",
          image:
            FourHoleFlatPlate,
        },
        {
          title: "3-Hole L-Plate",
          image:
            ThreeHoleLPlate,
        },
        {
          title: "4-Hole L-Plate",
          image:
            FourHoleLPlate,
        },
        {
          title: "3-Hole Tee Plate",
          image:
            ThreeHoleTeePlate,
        },
        {
          title: "Cross Plate",
          image:
            CrossPlate,
        },
        {
          title: "2-Hole Angle Fitting",
          image:
            TwoHoleAngleFitting,
        },
        {
          title: "3-Hole Angle Fitting",
          image:
            ThreeHoleAngleFitting,
        },
        {
          title: "4-Hole Angle Fitting",
          image:
            FourHoleAngleFitting,
        },
        {
          title: "4-Hole Triangle",
          image:
            FourHoleTriangle,
        },
      ],
    },
  ],
};
  return (
    <>
        <ProductBanner
               title="Channel & Support System"
               subtitle="Heavy Duty Cable Management System"
               image="/images/ladder-banner.jpg"
             />
       <ProductsNavbar />
       <ProductHero {...cableLadder.hero} />

      {cableLadder.sections.map((section) => (
        <ProductCategory
          key={section.title}
          {...section}
        />
      ))}
    </>
  );
}