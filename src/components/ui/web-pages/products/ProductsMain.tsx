/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { ERP, HRM, PartnerProgram, POS, productsFAQ } from "@/datas/pages/newProducts";
import { useSearchParams } from "next/navigation";
import ProductDetailsBanner from "./ProductDetailsBanner";
import ProductInfo from "./ProductInfo";
import ProductFeatures from "./ProductFeatures";
import TrustedBy from "../home/TrustedBy";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import Image from "next/image";
import AdvanceFeatures from "./AdvanceFeatures";
import PartnershipFramework from "./PartnershipFramework";
import ProductPreview from "./ProductPreview";

const Data: Record<string, typeof HRM | typeof POS | typeof ERP | typeof PartnerProgram> = {
  HRM: HRM,
  POS: POS,
  ERP: ERP,
  partnerProgram: PartnerProgram
};

const ProductsMain = () => {
  const params = useSearchParams();
  const product = params.get("product");
  // console.log(product);
  const productData = Data[product ?? "HRM"];
  console.log(productData);

  return (
    <div className="">
      <ProductDetailsBanner banner={productData.header} />
      <ProductInfo info={productData.info} />

      <ProductFeatures features={productData.features} product={product} />
      {product === "HRM" && (
        <AdvanceFeatures advanceFeature={(productData as any).advanceFeatures} />
      )}
      <WhyChooseUs
        whyChooseUs={productData.whyChooseUs}
        product={product}
      />
      {product === "partnerProgram" && (
        <PartnershipFramework partnershipFramework={(productData as any).partnershipFramework} />
      )}  

      {product === "partnerProgram" && (
        <ProductPreview  />
      )} 

      {product === "partnerProgram" && (
        <WhyChooseUs whyChooseUs={(productData as any).ourExpectation}   product={product} ourExpectation={true} />
      )}
      <TrustedBy />

      <div className=" py-10">
        <FAQ  faqData={productsFAQ}/>
      </div>

      <div className="container bg-[#F79549] lg:rounded-[25px] p-10 flex flex-col md:flex-row items-center gap-5 justify-between mt-6  mb-[80px] ">
        <div>
          <p className="text-white font-semibold text-3xl md:text-[50px]">
            Looking For a complete
          </p>
          <div className="flex items-center gap4 relative">
            <p className="text-white font-semibold text-3xl md:text-[50px]">
              ERP Solution?
            </p>
            <Image
              className="ml-4 -mt-2"
              width={100}
              height={100}
              src={"/productDetails/shape.png"}
              alt="arrow"
            />
          </div>
        </div>
        <button
          className="py-3 bg-[#040404] w-[265px] rounded-[11px]"
          style={{ color: "white" }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProductsMain;
