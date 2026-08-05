import ProductHero from "../components/products/ProductHero";
import ProductCategory from "../components/products/ProductCategory";
import ProductsNavbar from "../components/ProductsNav";
import ProductBanner from "../components/ProductBanner";
import TrunkingImage from "../assets/trunking/trunking.jpeg";

export default function CableTrayPage({
  hero,
  sections,
}) {
  const cableLadder = {
  hero: {
    title: "CABLE TRUNKING",
    image:
      TrunkingImage,

    description:
      "Cheol Cable Trunkings are manufactured in accordance to BSEN 10327:2004. We offer a wide range as per your desired width, height and number of compartments.",

    categories: ["Ordering Info", "Types"],

    specs: {
      Width: ["100", "150", "200", "300"],
      Height: ["50", "75", "100", "125", "150"],
      Length: ["2.44", "3.00"],
      Material: ["G - Galvanized Iron", "H - HDGAF", "A - Aluminum", "S - Stainless Steel"],
      Thickness: ["1.0", "1.2", "1.5", "2.0", "2.5"],
      Components: ["1", "2", "3"],
      CoverType: ["EF - Easy Fix", "SF - Screw Fix"],
    },

    types: [
    "CR - Straight",
    "CR9H - 90° Horizontal Bend",
    "CR4H - 45° Horizontal Bend",
    "CRTH - Horizontal Tee",
    "CRXH - Horizontal Cross",
    "CR9R - 90° InsideRiser",
    "CR9R - 90° Outside Riser",
    "CRRH - Right Hand Reducerr",
    "CRLH - Left Hand Reducer",
    ],
  },

  sections: [
    {
      title: "Fittings & Accessories",
      products: [
        {
          title: "90° Flat Bend",
          image:
            "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600",
        },
        {
          title: "45° Flat Bend",
          image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
        },
        {
          title: "Horizontal Tee",
          image:
            "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600",
        },
        {
          title: "Horizontal Cross",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
        },
      ],
    },

    // {
    //   title: "Connectors & Accessories",
    //   products: [
    //     {
    //       title: "Side Connector",
    //       image:
    //         "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600",
    //     },
    //     {
    //       title: "Vertical Connector",
    //       image:
    //         "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
    //     },
    //     {
    //       title: "End Plate",
    //       image:
    //         "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
    //     },
    //   ],
    // },
  ],
};
  return (
    <>
        <ProductBanner
               title="Cable Trunking"
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