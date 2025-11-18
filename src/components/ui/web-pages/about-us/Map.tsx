"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { officeCards } from "@/datas/pages/about";

type MapPosition = {
  center: [number, number];
  zoom: number;
};

const Map: React.FC = () => {
  const [index, setIndex] = useState(0);

  const [position, setPosition] = useState<MapPosition>({
     center: [0, 20],
     zoom: 1,   
  });

  // Move to Next Card
  const nextCard = () => {
    const newIndex = (index + 1) % officeCards.length;
    setIndex(newIndex);

    const card = officeCards[newIndex];

    // Move map to new location
    setPosition({
      center: [card.location.lng, card.location.lat],
      zoom: 5,
    });
  };

  // When clicking marker
  const handleMarkerClick = (card: any, i: number) => {
    setIndex(i);

    setPosition({
      center: [card.location.lng, card.location.lat],
      zoom: 5,
    });
  };

  const card = officeCards[index];

  return (
    <div className="bg-linear-to-r from-[#020019] via-[#14113f] via-70% to-[#201c61] h-full w-full p-4">
    <div className="container h-[736px] relative overflow-hidden">
  <ComposableMap
    projection="geoMercator"
    projectionConfig={{ scale: 107 }}
    width={800}
    height={600}
    style={{ width: "100%", height: "100%" }}
  >

       
            {/* WORLD SHAPES */}
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => {
                  const highlight = geo.id === "ARE" || geo.id === "PHL";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: highlight ? "#E63946" : "#1A1A1A",
                          stroke: "#FFFFFF",
                          strokeWidth: 0.2,
                        },
                        hover: { fill: highlight ? "#D62828" : "#333" },
                        pressed: { fill: highlight ? "#B71C1C" : "#222" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* MARKERS */}
            {officeCards.map((item, i) => {
              const active = i === index;
              return (
                <Marker
                  key={i}
                  coordinates={[item.location.lng, item.location.lat]}
                  onClick={() => handleMarkerClick(item, i)}
                >
                  {/* ACTIVE MARKER */}
                  <g transform="translate(-12, -24)" cursor="pointer">
                    <circle
                      cx="12"
                      cy="10"
                      r={active ? 7 : 1}
                      fill={active ? "#f99b4e" : "#FF5722"}
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                      fill={active ? "#f99b4e" : "#FF5722"}
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </g>

                  {/* LABEL */}
                  <text
                    textAnchor="middle"
                    y={-35}
                    style={{
                      fontFamily: "system-ui",
                      fill: "white",
                      fontSize: active ? "14px" : "8px",
                      fontWeight: active ? "bold" : "normal",
                    }}
                  >
                    {item.title}
                  </text>
                </Marker>
              );
            })}
        </ComposableMap>

        {/* CARD SECTION */}
        <div className="absolute top-[55%] left-0 h-full md:h-[300px]">
          <div className="bg-[#1C1F37A6]/65 backdrop-blur border border-white/20 shadow-2xl rounded-4xl p-6 lg:p-11 lg:w-[689px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center gap-2">
                <Image src={card.img} alt="" width={40} height={40} />
                <h2 className="text-white text-[28px]">{card.title}</h2>
              </div>

              <button
                onClick={nextCard}
                className="bg-[#333755] w-[38px] h-[38px] rounded-[7.76px] flex items-center justify-center"
              >
                <ChevronRight color="#979797" />
              </button>
            </div>

            <p className="pt-4 lg:pt-7 text-white md:w-[80%]">
              {card.description}
            </p>

            <div className="mt-4 lg:mt-9">
              {card.addresses ? (
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  {card.addresses.map((a: any, i: number) => (
                    <div key={i} className="space-y-2 md:w-1/2">
                      <h2 className="text-[#f99b4e]">{a.label}</h2>
                      <p className="text-[#F8F8F8]">{a.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <h2 className="text-[#f99b4e]">{card.officeLabel}</h2>
                  <p className="text-[#F8F8F8] pt-2">{card.address}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
