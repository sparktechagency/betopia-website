import Image from "next/image";
import React from "react";

const ServiceCard = ({
  item,
}: {
  item: {
    imgUrl: string;
    title: string;
    subtitle: string;
    description: string;
  };
}) => {
  return (
    <div className="bg-[#FEF9F6] p-4 rounded-lg shadow-md flex flex-col h-full">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={item?.imgUrl}
          alt={item?.title}
          width={600}
          height={250}
          className="h-[302px] w-full object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col flex-grow pt-3">
        <h3 className="text-xl font-semibold text-primary">{item?.title}</h3>
        <p className="text-[#414042] text-xl pb-2">{item?.subtitle}</p>
        <p className="text-[#757575] text-lg flex-grow">{item?.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
