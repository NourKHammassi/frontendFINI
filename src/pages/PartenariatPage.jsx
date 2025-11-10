import React, { useEffect } from "react";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";
import { PartenariatBlock } from "../features/partenariat/partenariatBlock";
export const Partenariat = () => {
    return (
        <>
            <Navbar isProductList={true} />
            <PartenariatBlock />
            <Footer />
        </>
    );
};
