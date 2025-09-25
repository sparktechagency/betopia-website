import { TransformingType } from '@/types';
import React from 'react';

interface itemsType {
    items: TransformingType
}
const TransformingCard = ({ items }: itemsType) => {

    const accentClass = items?.accent === "soft" ? "text-[#F2995A]" : "text-[#A85B28]";

    return (
        <div>
            <div className="rounded-2xl  font-light bg-[#ECE9E9]/58 p-6 md:p-8">
                <div
                    className={[
                        "flex items-center gap-6 md:gap-10",
                        items?.numberOnRight ? "flex-row-reverse justify-start" : "flex-row justify-between",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "select-none leading-none font-extralight",
                            "text-[96px] md:text-[140px]",
                            accentClass,
                        ].join(" ")}
                    >
                        {items?.number}
                    </div> 

                    <div className={` w-full  flex  ${ items?.numberOnRight ? "flex-row-reverse justify-end" : "flex-row justify-end"}`}> 
                    <h3 className="text-2xl text-[#413f3f] font-light  w-[270px] leading-9">
                        {items?.heading}
                    </h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TransformingCard;