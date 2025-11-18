import { mainProducts } from "@/datas/mainProducts";
import { useSearchParams } from "next/navigation";
import React from "react";
import MainProductTabs from "./MainProductTabs";
import MainEcosystem from "./MainEcosystem";
import ProductMainPlatform from "./ProductMainPlatform";

const ProductMainEcosystem = () => {
  const params = useSearchParams();
  const type = params.get("type") || "HRM";

  const product = mainProducts.find((p) => p.id === type) || mainProducts[0];
  return (
    <section className="container mx-auto py-10 lg:py-15">
      <ProductMainPlatform />
      <div className="text-center mt-15">
        <div className="text-[#414042] text-[34px] lg:text-[45px] 2xl:text-[64px] font-medium ">
          All-in-One Ecosystem for
        </div>
        <p className=" text-[#F79549] text-[20px] lg:text-[45px] 2xl:text-[64px] font-medium w-full text-center pb-6  ">
          Modern Businesses
        </p>
        <p className="text-sm md:text-lg font-normal text-[#41404299] tracking-wide ">
          Manage people, processes, and performance with Betopia’s integrated
          digital solutions.
        </p>
      </div>
      <MainProductTabs active={type} />
      <div className="mt-8">
        <MainEcosystem product={product} />
      </div>
    </section>
  );
};

export default ProductMainEcosystem;
