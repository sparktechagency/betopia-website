import Image from "next/image";
import React from "react";

const ProductMainBooking = () => {
  return (
    <div className="container bg-[#F79549] lg:rounded-[25px] p-10 flex flex-col md:flex-row items-center gap-5 justify-between mt-19  mb-20 ">
      <div>
        <div className="flex items-end gap-4 relative">
          <div>
            <p className="text-white font-semibold text-3xl md:text-[50px]">
              Ready to Transform Your <br /> Business?
            </p>
            <p className="text-white font-semibold ">
              Get a personalized demo and discover how Betopia can accelerate
              your digital transformation.
            </p>
          </div>
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
        Book a Demo
      </button>
    </div>
  );
};

export default ProductMainBooking;
