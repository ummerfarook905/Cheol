import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import CableLadder from "./pages/CableLadder";
import CableTray from "./pages/CableTray";
import CableTrunking from "./pages/CableTrunking";
import SupportSystem from "./pages/SupportSystem";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/products" element={<Products />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/certifications" element={<Certifications />} />

          <Route path="/cable-ladder" element={<CableLadder />} />

          <Route path="/cable-tray" element={<CableTray />} />

          <Route path="/cable-trunking" element={<CableTrunking />} />

          <Route
            path="/support-system"
            element={<SupportSystem />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;