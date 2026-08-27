import { Outlet } from "react-router-dom";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatAsppButton";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}