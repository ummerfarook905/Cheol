import Hero from "../components/Hero";
import ProductRange from "../components/ProductRange";
import AboutSection from "./AboutPage";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductRange />
      <Contact />
    </>
  );
}