import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const JoinTeam: React.FC = () => {
  return (
    <div className="w-full lg:w-[896px] mx-auto mb-12 lg:mb-20">
      <div className="flex-center  gap-[6.28px] bg-[#EDEDED] rounded-[11px] px-[17px] py-[7px] w-fit mx-auto mb-[44px]">
        <Image
          src="/images/join-team.png"
          alt="Join Team"
          width={22}
          height={22}
        />
        <p className="text-lg leading-6 text-[#434343] ">
          Join Our Growing Team
        </p>
      </div>
      <p className="text-[25px] text-center leading-6 text-[#616161] pb-4 lg:pb-[38px]">
        Build the Future with Us
      </p>
      <p className="text-lg  lg:text-[27px] text-center leading-8 text-[#424242] px-4">
        Explore a Vast and Exciting World of Career Opportunities at Betopia and
        Take Your Time to Browse Our Diverse Range of Open Positions
      </p>

      <div className="mt-[42px] flex-center gap-3 px-4 w-full">
        <button className="w-[251px] md:h-[36px] bg-[#F69348] text-xs md:text-lg leading-6 px-[13px] py-[6px] rounded-[6px] flex-center gap-[10px]">
          <span className="text-white">View Open Positions</span>
          <MoveRight color="white" />
        </button>
        <button className="bg-[#FFDDC4] md:h-[36px] text-[#545454] text-xs md:text-lg leading-6 px-[13px] py-[6px] rounded-[6px]">
          Learn More about our Culture
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;
