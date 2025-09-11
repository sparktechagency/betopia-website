"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const RotatingOrbit = () => {
    return (
        <div className="w-[343px] h-[343px] flex items-center justify-center relative">
            <motion.div
                className="relative border border-[#D2D2D2] w-[343px] h-[343px] rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="bg-[#F79549] border border-[#D2D2D2] h-4 w-4 rounded-full -mt-2" />
                    <Image src={"/hrm.png"} alt='' height={80} width={80}  />
                </div>

                <motion.div
                    className="relative border border-[#D2D2D2] w-[293px] h-[293px] rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                        <div className="bg-[#F79549] border border-[#D2D2D2] h-4 w-4 rounded-full -mt-2" />
                        <Image src={"/erp.png"} alt='' height={80} width={80}  />
                    </div>

                    <motion.div
                        className="relative border border-[#D2D2D2] w-[230px] h-[230px] rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2">
                            <div className="bg-[#F79549] border border-[#D2D2D2] h-4 w-4 rounded-full -mt-2" />
                            <Image src={"/pos.png"} alt='' height={80} width={80}  />
                        </div>

                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={"/productIcons.png"} alt='' height={110} width={80}  />
            </div>
        </div>

    );
};

export default RotatingOrbit;
