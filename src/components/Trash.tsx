import React from 'react';
import WorldMap from './ui/shared-features/footer/WorldMap';
import Image from 'next/image';

const Trash = () => {
    return (
        <div>
                <div className="bg-[#7b7b7b]/20 p-8 grid grid-cols-1 lg:grid-cols-12 rounded-[8px] gap-10 ">
          <div className="col-span-1 lg:col-span-8 lg:h-[460px]">
            <WorldMap />
          </div>
          <div className=" lg:col-span-4 flex flex-col items-end">
            <div className="relative w-full h-[250px]">
              <Image
                src="/dhaka.jpg"
                alt="Dhaka"
                fill
                className="w-full rounded-lg h-full lg:w-[500px] lg:h-[400px]"
              />
            </div>
            <div className="mt-[20px]">
              <div className="mb-2">
                <p className="text-right text-white">Coporate Office</p>
              </div>
              <ul className="grid text-right  text-[18px] leading-[24px] grid-cols-1 gap-2 text-white list-none">
                <li className="font-bold">Dhaka</li>
                <li>Daisy Garden, House 14, Block A, Banasree</li>
                <li>+8801321231828</li>
                <li>
                  <a href="tel:+8801321231828">
                    <button className="bg-[#424242] text-white h-[36px] mt-[10px] w-[116px] rounded-[6px] hover:bg-[#333] transition">
                      Contact Us
                    </button>
                  </a>

                </li>
              </ul>

              <div className="mb-2">
                <p className="text-right text-white">Coporate Office</p>
              </div>
              <ul className="grid text-right text-[18px] leading-[24px] grid-cols-1 gap-2 text-white list-none">
                <li className="font-bold">Dhaka</li>
                <li>Kaderia Tower, JA-28, Mohakhali Gulshan Road, Dhaka-1212 (Opposite BRAC Center)</li>
                <li>+8801332-840871</li>
                <li>
                  <a href="tel:+8801332840871">
                    <button className="bg-[#424242] text-white h-[36px] mt-[10px] w-[116px] rounded-[6px] hover:bg-[#333] transition">
                      Contact Us
                    </button>
                  </a>

                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Trash;