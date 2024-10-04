import React from "react";
import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

export default function Layouts({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
