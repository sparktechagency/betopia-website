import React from "react";
import { CategoryDetails } from "./TalentSubCategories";
import Image from "next/image";
import { HiMiniCheckBadge } from "react-icons/hi2";

const TalentCategoriesDetails = ({
  selectedCategory,
}: {
  selectedCategory: CategoryDetails;
}) => {
  return (
    <div className="  flex flex-col md:flex-row mt-16 w-full ">
      {/* Left Content */}
      <div className="flex-1  md:w-4/5">
        {/* Header */}
        <div className="flex  items-center gap-4 mb-8 bg-[#F7954922] p-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Image
                src="/computerIcon.png"
                alt="Talent Icon"
                width={50}
                height={50}
                className="flex-center  lg:-mt-2"
              />
              <h1 className="text-lg md:text-[32px] font-medium text-[#414042] ">
                {selectedCategory?.jobTitle}
              </h1>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-[#414042] mb-1">
                Annual Salary Range
              </div>
              <div className="text-[28px] font-semibold text-primary">
                {selectedCategory?.priceRange}
              </div>
              <div className=" text-[#41404260]">
                (Depending on seniority & complexity)
              </div>
            </div>
          </div>
        </div>

        {/* Key Roles */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#414042] mb-3">
            Key Roles
          </h2>
          <div className="flex flex-wrap gap-2">
            {selectedCategory?.keyRoles?.map((role, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-[#F79549] text-white  font-light "
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Key Skills / Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#414042] mb-3">
            Key Skills / Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {selectedCategory?.keySkills?.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#41BDB615] text-teal-700 text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Enterprise Use Cases */}
        <div>
          <h2 className="text-2xl font-semibold text-[#414042] mb-3">
            Enterprise Use Cases
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {selectedCategory?.enterprises?.map((useCase, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 ">
                  <HiMiniCheckBadge className="w-6 h-6 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/5 h-full rounded-xl mt-8 md:mt-0">
        <Image
          src="/augmentation/talentCategory.png"
          alt="Developers working at computers in an office environment"
          width={420}
          height={500}
          className="w-full h-full lg:w-[420px] lg:h-[500px]"
        />
      </div>
    </div>
  );
};

export default TalentCategoriesDetails;
