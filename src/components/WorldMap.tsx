import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
// const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const WorldMap: React.FC = () => {
    return (
        <div className="bg-[#7B7B7B] rounded-[12px] h-full w-full p-4">
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 107, center: [10, 10] }} height={600} width={1000} >
                <Geographies geography="/features.json">
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isHighlighted = geo?.id === "BGD" || geo?.id === "GBR";
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
        </div>
    );
};

export default WorldMap;