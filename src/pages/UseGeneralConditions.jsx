import React, { useEffect } from "react";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";
import { ConditionsGeneralesUtilisations } from "../features/conditions/ConditionsGeneralesUtilisations";

export const UseGeneralConditions = () => {
  return (
    <>
      <Navbar isProductList={true} />
      <ConditionsGeneralesUtilisations />
      <Footer />
    </>
  );
};
