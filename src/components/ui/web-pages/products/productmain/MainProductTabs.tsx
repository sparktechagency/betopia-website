import { mainProducts } from "@/datas/mainProducts";
import Link from "next/link";
import React from "react";

const MainProductTabs = ({ active }: { active: string }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-12 p-4 bg-[#F2F2F2] rounded-2xl mt-8 lg:mt-[50px] mb-4 lg:mb-6">
      {mainProducts.map((p) => (
        <Link
          key={p.id}
          href={`/products?type=${p.id}`}
           scroll={false}
          className={`px-2 py-2 lg:py-3 rounded-xl border font-medium transition ${
            active === p.id
              ? "bg-[#F7954999] text-white"
              : "text-[#414042] bg-white border-[#F7954999]"
          }`}
        >
          {p.name}
        </Link>
      ))}
    </div>
  );
};

export default MainProductTabs;
