import React, { useEffect } from "react";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";
import { RealisationsBlock } from "../features/realisations/realisationsBlock";
export const Realisations = () => {
    return (
        <>
            <Navbar isProductList={true} />
            <RealisationsBlock />
            <Footer />
        </>
    );
};
