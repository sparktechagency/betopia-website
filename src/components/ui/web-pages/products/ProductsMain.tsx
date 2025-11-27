/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import {
  AgenticAI,
  ERP,
  HRM,
  PartnerProgram,
  POS,
  VotingSystem,
} from "@/datas/pages/newProducts";
import { useSearchParams } from "next/navigation";
import ProductDetailsBanner from "./ProductDetailsBanner";
import ProductInfo from "./ProductInfo";
import ProductFeatures from "./ProductFeatures";
import TrustedBy from "../home/TrustedBy";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import AdvanceFeatures from "./AdvanceFeatures";
import PartnershipFramework from "./PartnershipFramework";
import ProductPreview from "./ProductPreview";
import ProductsPageMain from "./ProductsPageMain";
import Booking from "./Booking";

const Data: Record<
  string,
  | typeof HRM
  | typeof POS
  | typeof ERP
  | typeof PartnerProgram
  | typeof VotingSystem
  | typeof AgenticAI
> = {
  HRM: HRM,
  POS: POS,
  ERP: ERP,
  partnerProgram: PartnerProgram,
  votingSystem: VotingSystem,
  agenticAI: AgenticAI,
};

const ProductsMain = () => {
  const params = useSearchParams();
  const product = params.get("product");
  // console.log(product);
  if (!product) {
    return <ProductsPageMain />;
  }

  const productData = Data[product];

  console.log(productData);

  return (
    <div className="">
      <ProductDetailsBanner banner={productData.header} />
      <ProductInfo info={productData.info} />

      <ProductFeatures features={productData.features} product={product} />
      {product === "HRM" && (
        <AdvanceFeatures
          advanceFeature={(productData as any).advanceFeatures}
        />
      )}
      {(product === "partnerProgram" ||
        product === "votingSystem" ||
        product === "agenticAI") && (
        <PartnershipFramework
          partnershipFramework={(productData as any).partnershipFramework}
          product={product}
        />
      )}

      <WhyChooseUs whyChooseUs={productData.whyChooseUs} product={product} />

      {product === "partnerProgram" && <ProductPreview />}

      {product === "partnerProgram" && (
        <WhyChooseUs
          whyChooseUs={(productData as any).ourExpectation}
          product={product}
          ourExpectation={true}
        />
      )}
      <TrustedBy />

      <div className=" py-10">
        <FAQ faqData={productData.productsFAQ} />
      </div>
      <Booking bookingTitle={productData.bookingTitle} />
    </div>
  );
};

export default ProductsMain;
