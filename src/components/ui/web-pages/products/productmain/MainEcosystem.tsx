import { ProductType } from "@/datas/mainProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainEcosystem = ({ product }: { product: ProductType }) => {
  return (
    <div className="w-full bg-white px-6 py-9 rounded-xl border border-[#4747474F]">
      <div className="flex flex-col md:flex-row justify-between  gap-10">
       
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-medium text-[#FF7700]">
              {product.title}
            </h1>

            <p className="text-[#41404299] mt-4">{product.description}</p>

            <ul className="pt-6 lg:pt-10 text-[#757575] space-y-3">
              {product.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-lg">•</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              href={product.btnLink}
              className="inline-block mt-8 bg-[#F79549] text-white px-2 py-2 lg:py-3 rounded-xl font-medium transition"
            >
              View Product
            </Link>
          </div>
        </div>

        
        <div className="flex justify-end">
          <Image
            src={product.image}
            alt={product.title}
            width={612}
            height={440}
            className="rounded-lg shadow-lg object-cover h-full md:h-[440px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainEcosystem;
