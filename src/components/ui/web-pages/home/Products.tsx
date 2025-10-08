import { ProductArray } from "@/datas/pages/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products: React.FC = () => {
  return (
    <div className="my-10 md:my-20 container ">
      <h1 className="text-center text-[#262626] section-title leading-[52px]">
        Betopia Products
      </h1>
      <p className="text-center   section-subtitle lg:leading-[13px] ">
        Betopia builds tools that grow with your business.
      </p>

      <div className="mt-[47px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {ProductArray.map((product, index) => (
          <div
            key={index}
            className=" relative min-h-[452px] rounded-[16px] bg-[#F795491F]/88 lg:p-4 p-2"
          >
            <div className="w-full h-[200px] relative  mb-4">
              <Image
                src={product.imgUrl}
                alt="arrow"
                fill
                objectFit="cover"
                objectPosition="center"
                className="rounded-[12px]"
              />
              {product?.title === "Cash Advance System" && (
                <div className="bg-black/70 w-full flex items-center justify-center h-full absolute top-0 left-0 rounded-[12px]">
                  <p className="text-white text-2xl">Comming Soon..</p>
                </div>
              )}
            </div>
            <h2 className="text-[#414042] text-[24px] leading-[32px] font-medium mt-4">
              {product.title}
            </h2>
            <p className="text-[#9B9B9B] text-[18px] leading-[24px] mt-2 mb-4">
              {product.description}
            </p>

            <div className="absolute bottom-6 ">
              {product?.title === "Cash Advance System" ? (
                <button
                  disabled
                  className="bg-gray-400 w-[145px] block h-[44px] rounded-[8px] disabled:cursor-not-allowed"
                >
                  <span className="text-white">View Product</span>
                </button>
              ) : (
                <Link
                  href={`${
                    product.link === "/partner"
                      ? "/partner"
                      : `/products${product.link}`
                  }`}
                >
                  <button className="bg-[#F69348] cursor-pointer w-[145px] block h-[44px] rounded-[8px]">
                    <span className="text-white">View Product</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
