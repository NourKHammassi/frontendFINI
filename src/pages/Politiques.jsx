import React, { useEffect } from "react";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";
import { PolitiquesConfidentialite } from "../features/politiques/PolitiquesConfidentialite";

export const Politiques = () => {
  return (
    <>
      <Navbar isProductList={true} />
      <PolitiquesConfidentialite />
      <Footer />
    </>
  );
};
