import React from "react";
import ProductMainBooking from "./productmain/ProductMainBooking";
import ProductMainBanner from "./productmain/ProductMainBanner";
import TrustedBy from "../home/TrustedBy";
import ProductMainWhyChoose from "./productmain/ProductMainWhyChoose";
import { whyChooseUsForMainPage } from "@/datas/pages/newProducts";
import ProductMainEcosystem from "./productmain/ProductMainEcosystem";

const ProductsPageMain = () => {
  return (
    <section>
      <ProductMainBanner/>
      <ProductMainEcosystem/>
      <ProductMainWhyChoose whyChooseUs={whyChooseUsForMainPage} />
      <TrustedBy />
      <ProductMainBooking />
    </section>
  );
};

export default ProductsPageMain;
