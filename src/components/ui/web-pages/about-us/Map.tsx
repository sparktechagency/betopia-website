"use client";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { MapPin, EllipsisVertical, ChevronRight } from "lucide-react";

const Map: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#020019] via-[#14113f] via-70% to-[#201c61] h-full w-full p-4 ">
      <div className="container h-[736px] relative ">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 107, center: [10, 10] }}
          height={650}
          width={1000}
        >
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies?.map((geo) => {
                const isHighlighted = geo?.id === "ARE" || geo?.id === "PHL";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isHighlighted ? "#E63946" : "#1A1A1A",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.2,
                      },
                      hover: {
                        fill: isHighlighted ? "#D62828" : "#333",
                      },
                      pressed: {
                        fill: isHighlighted ? "#B71C1C" : "#222",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <div className=" absolute top-[30%] left-0 h-full ">
          <div className="bg-[#1C1F37A6]/65 backdrop-blur border border-white/20 shadow-2xl rounded-xl p-6 lg:w-[689px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-start gap-2">
                <MapPin fill="red" size={40} />
                <h2 className="text-white text-[28px]">Philippines Office</h2>
              </div>
              <div className="flex items-center justify-center gap-6">
                <div className="bg-[#333755] w-[38px] h-[38px] rounded-[7.76px] flex items-center justify-center">
                  <ChevronRight color="#979797" />
                </div>
                <EllipsisVertical color="#979797" />
              </div>
            </div>

            <p className="text-sm text-gray-300 text-center -mt-10">
              Recently Visited
            </p>
            <div className="mt-4 text-gray-200">
              <p>
                Our Philippines office strengthens our presence in Southeast
                Asia, delivering world-class IT and SaaS solutions closer to our
                clients.
              </p>
            </div>
            <div className="mt-4 text-gray-400">
              <p className="">Location Details</p>
              <p className="text-sm mt-0 pt-0">
                📍 Address: 547-A Caballeros Street, Binondo, Metro Manila
              </p>
            </div>
            <div className="mt-6 text-white">
              <button className="bg-[#4A3AFF] w-[136.77px] h-[53.78px] rounded-[24px]">
                Visit Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
