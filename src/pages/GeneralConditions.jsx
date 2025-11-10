import React, { useEffect } from "react";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";
import { ConditionsGeneralesVentes } from "../features/conditions/ConditionsGenerales";

export const GeneralConditionsVentes = () => {
  return (
    <>
      <Navbar isProductList={true} />
      <ConditionsGeneralesVentes />
      <Footer />
    </>
  );
};
