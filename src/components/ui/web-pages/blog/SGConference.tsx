import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const SGConference = () => {
  return (
    <div>
      <p className=" text-[40px] text-[#696969] font-normal pb-4">
        SG60 IPS-SBF Conference{" "}
      </p>
      <p className="text-2xl text-[#696969] font-light pb-10 ">29 July, 2025</p>
      <div className="grid grid-cols-12 gap-10 text-[#696969]">
        <div
          className="col-span-7  mb-[92px]  w-full h-[462px] rounded-[22px]"
          style={{
            backgroundImage: `url(/images/conference.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 22,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-[#000000E5] from-10%  to-[#6666661A] to-90% rounded-[22px] p-[74px] flex items-end"></div>
        </div>
        <div className="col-span-5">
          <p className="text-[23px] leading-[140%] tracking-wide leading-9">
            A delegation of AmCham Bangladesh, led by its President 𝐌𝐫. 𝐒𝐲𝐞𝐝
            𝐄𝐫𝐬𝐡𝐚𝐝 𝐀𝐡𝐦𝐞𝐝, attended the 𝐒𝐆𝟔𝟎 𝐈𝐏𝐒-𝐒𝐁𝐅 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞 on 29 July 2025
            at the Sands Grand Ballroom, Singapore, on an invitation from AmCham
            Singapore.
            <br />
            <br />
            The conference brought together global leaders and thinkers to
            discuss the future of the global economy amid rising uncertainty.
            <br />
            <br />
            It began with a dialogue between 𝐏𝐫𝐢𝐦𝐞 𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫 𝐚𝐧𝐝 𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫 𝐟𝐨𝐫
            𝐅𝐢𝐧𝐚𝐧𝐜𝐞, 𝐌𝐫. 𝐋𝐚𝐰𝐫𝐞𝐧𝐜𝐞 𝐖𝐨𝐧𝐠, and IPS Director 𝐌𝐫. 𝐉𝐚𝐧𝐚𝐝𝐚𝐬 𝐃𝐞𝐯𝐚𝐧,
            focusing on Singapore’s role in an evolving international landscape.
          </p>

          <Link
            href={`/blog-details?blog=SG60IPS-SBF `}
            className="flex items-center gap-2 mt-3 cursor-pointer text-[16px] hover:underline"
          >
            <span> Learn more </span>{" "}
            <span>
              {" "}
              <RiArrowRightLine className="text-primary" />{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SGConference;
