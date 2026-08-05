import ProductHero from "../components/products/ProductHero";
import ProductCategory from "../components/products/ProductCategory";
import ProductsNavbar from "../components/ProductsNav";
import ProductBanner from "../components/ProductBanner";
import TrayImage from "../assets/tray/tray.jpeg";
import FlatBend from "../assets/tray/90 Flat Bend.png";
import Bend from "../assets/tray/Bend.png";
import HorizontalTee  from "../assets/tray/Horizontal Tee.png";
import HorizontalCross  from "../assets/tray/Horizontal Cross.png";
import RHReducer from "../assets/tray/RH Reducer.png";
import LHReducer from "../assets/tray/LH Reducer.png";
import OutsideRiser from "../assets/tray/Outside Riser.png";
import InsideRiser from "../assets/tray/Inside Riser.png";
import StdConnector from "../assets/tray/Std. Connector.png";
import AngleConnector from "../assets/tray/Angle Connector.png";
import BottomPlate from "../assets/tray/Bottom Plate.png";
import VertConnector from "../assets/tray/Vert. Connector.png";
import HoldDownClamp from "../assets/tray/Hold Down Clamp.png";
import EndPlate from "../assets/tray/End Plate.png";
import BoxConnector from "../assets/tray/Box Connector.png";
import CoverClamp  from "../assets/tray/Cover Clamp.png";
import DropPlate  from "../assets/tray/Drop Plate.png";
import SideCoverClip  from "../assets/tray/Side Cover Clip.png";


export default function CableTrayPage({
  hero,
  sections,
}) {
  const cableLadder = {
  hero: {
    title: "CABLE TRAY",
    image:
      TrayImage,

    description:
      "Cheol Perforated Cable Trays are manufactured in accordance to BSEN 61537:2002 using automated machines. We offer a wide range and can also manufacture as per your project requirements.",

    categories: ["Ordering Info", "Types"],

    specs: {
      Width: ["100", "150", "200", "300", "450", "600", "750", "900"],
      Height: ["50", "75", "100", "125"],
      Length: ["2.44", "3.00"],
      Material: ["G - Galvanized Iron", "H - HDGAF", "A - Aluminum", "S - Stainless Steel"],
      Thickness: ["1.0", "1.2", "1.5", "2.0", "2.5"],
      Type: ["Inside Flange", "C-Type Flange", "Plain Type"],
    },

    types: [
    "CL - Straight",
    "CL9H - 90° Horizontal Bend",
    "CL4H - 45° Horizontal Bend",
    "CLTH - Horizontal Tee",
    "CLXH - Horizontal Cross",
    "CL9RI - 90° InsideRiser",
    "CL9RO - 90° Outside Riser",
    "CLRH - Right Hand Reducer",
    "CLLH - Left Hand Reducer",
    ],
  },

  sections: [
    {
      title: "Cable Ladder Fittings",
      products: [
        {
          title: "90° Flat Bend",
          image:
            FlatBend,
        },
        {
          title: "45° Flat Bend",
          image:
            Bend,
        },
        {
          title: "Horizontal Tee",
          image:
            HorizontalTee,
        },
        {
          title: "Horizontal Cross",
          image:
             HorizontalCross,
        },
        {
          title: "RH Reducer",
          image:
             RHReducer,
        },
        {
          title: "LH Reducer",
          image:
             LHReducer,
        },
        {
          title: "Outside Riser",
          image:
              OutsideRiser,
        },
        {
          title: "Inside Riser",
          image:
               InsideRiser,
        },
      ],
    },

    {
      title: "Connectors & Accessories",
      products: [
        {
          title: "Side Connector",
          image:
            StdConnector,
        },
        {
          title: "Angle Connector",
          image:
            AngleConnector,
        },
        {
          title: "Bottom Plate",
          image:
             BottomPlate,
        },
        {
          title: "Vert. Connector",
          image:
             VertConnector,
        },
        {
          title: "Hold Down Clamp",
          image:
              HoldDownClamp,
        },
        {
          title: "End Plate",
          image:
              EndPlate,
        },
        {
          title: "Box Connector",
          image:
             BoxConnector,
        },
        {
          title: "Cover Clamp",
          image:
             CoverClamp,
        },
        {
          title: "Drop Plate",
          image:
             DropPlate,
        },
        {
          title: "Side Cover Clip",
          image:
             SideCoverClip,
        },
      ],
    },
  ],
};
  return (
    <>
        <ProductBanner
               title="Cable Tray"
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