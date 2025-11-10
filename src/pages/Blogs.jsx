import React, { useEffect } from "react";
import { Footer } from "../features/footer/Footer";
import { Navbar } from "../features/navigation/components/Navbar";
import { BlogsBlock } from "../features/blogs/blogsBlock";
export const Blogs = () => {
    return (
        <>
            <Navbar isProductList={true} />
            <BlogsBlock />
            <Footer />
        </>
    );
};
