import Image from 'next/image';
import React from 'react';

const ServiceCard = ({item}:{item:{imgUrl:string,title:string,subtitle:string,description:string}}) => {
    return (
        <div className="bg-[#FEF9F6] p-4 rounded-lg shadow-md max-w-lg  min-h-[610px] mx-auto">
            <div className="relative">
                <Image
                    src={item?.imgUrl}
                    alt="Infrastructure Security"
                    width={600}
                    height={250}
                    className="h-[302px] rounded-lg"
                />

            </div>
            <div className="pt-3">
                <h3 className="text-xl font-semibold text-primary ">{item?.title}</h3>
                <p className="text-[#414042] text-xl pb-2">
                   {item?.subtitle}
                </p>
                <p className="text-[#757575] text-lg ">
                 {item?.description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;