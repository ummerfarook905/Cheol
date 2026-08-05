import ProductHero from "../components/products/ProductHero";
import ProductCategory from "../components/products/ProductCategory";
import ProductsNavbar from "../components/ProductsNav";
import ProductBanner from "../components/ProductBanner";
import SupportImage from "../assets/support/support.jpeg";

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

    {
      title: "Post Bases",
      products: [
        {
          title: "Side Connector",
          image:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600",
        },
        {
          title: "Vertical Connector",
          image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
        },
        {
          title: "End Plate",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
        },
      ],
    },

    {
      title: "Fittings",
      products: [
        {
          title: "Side Connector",
          image:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600",
        },
        {
          title: "Vertical Connector",
          image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
        },
        {
          title: "End Plate",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
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