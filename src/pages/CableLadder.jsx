import ProductHero from "../components/products/ProductHero";
import ProductCategory from "../components/products/ProductCategory";
import ProductsNavbar from "../components/ProductsNav";
import ProductBanner from "../components/ProductBanner";
import LadderImage from "../assets/ladder/Ladder2.jpeg";
import FlatBend from "../assets/ladder/90deg Flat Bend.png";
import flatBend from "../assets/ladder/45deg Flat Bend.png";
import HorizontalTee from "../assets/ladder/Horizontal Tee.png";
import HorizontalCross from "../assets/ladder/Cross.png";
import RHReducer from "../assets/ladder/RH Reducer.png";
import LHReducer from "../assets/ladder/LH Reducer.png";
import OutsideRicer from "../assets/ladder/Outside Ricer.png";
import InsideRicer from "../assets/ladder/Inside Ricer.png";
import StdConnector from "../assets/ladder/Std Connector.png";
import ExtConnector from "../assets/ladder/ExtConnector.png";
import VertConnector from "../assets/ladder/Vert. Connector.png";
import EndPlate from "../assets/ladder/End Plate.png";
import EarthingJumper from "../assets/ladder/Earthing Jumper.png";
import BoxConnector from "../assets/ladder/Box Connector.png";
import AngleConnector from "../assets/ladder/Angle Connector.png";
import HoldDownClamp from "../assets/ladder/Hold Down Clamp.png";
import ExpansionGuide from "../assets/ladder/Expansion Guide.png";

export default function CableLadderPage({
  hero,
  sections,
}) {
  const cableLadder = {
  hero: {
    title: "CABLE LADDER",
    image:
      LadderImage,

    description:
      "Cheol Cable Ladders are manufactured in accordance to BSEN 61537:2002 using state of the art manufacturing facility. We offer a wide range of Cable Ladder as per your site conditions.",

    categories: ["Ordering Info", "Types"],

    specs: {
      Width: ["100", "150", "200", "300", "450", "600", "750", "900"],
      Height: ["60", "100", "125", "150"],
      Length: ["2.44", "3.00", "3.60", "6.00"],
      Material: ["H - HDGAF", "A - Aluminum", "S - Stainless Steel"],
      Thickness: ["1.2", "1.5", "2.0", "2.5"],
      Radius: ["300", "600", "900"],
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
            flatBend,
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
          title: "Outside Ricer",
          image:
             OutsideRicer,
        },
        {
          title: "Inside Ricer",
          image:
             InsideRicer,
        },
      ],
    },

    {
      title: "Connectors & Accessories",
      products: [
        {
          title: "Std. Connector",
          image:
            StdConnector,
        },
        {
          title: "EXT. Connector",
          image:
            ExtConnector,
        },
        {
          title: "Vert. Connector",
          image:
           VertConnector,
        },
        {
          title: "End Plate",
          image:
           EndPlate,
        },
        {
          title: "Earthing Jumper",
          image:
           EarthingJumper,
        },
        {
          title: "Box Connector",
          image:
           BoxConnector,
        },
        {
          title: "Angle Connector",
          image:
            AngleConnector,
        },
        {
          title: "Hold Down Clamp",
          image:
            HoldDownClamp,
        },
        {
          title: "Expansion Guide",
          image:
            ExpansionGuide,
        },
      ],
    },
  ],
};
  return (
    <>
        <ProductBanner
               title="Cable Ladder"
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