import Image from 'next/image'
import React from 'react'

const Booking = ({ bookingTitle }:{ bookingTitle: React.ReactNode }) => {
  return (
 <div className="container bg-[#F79549] lg:rounded-[25px] p-10 flex flex-col md:flex-row items-center gap-5 justify-between mt-6  mb-20 ">
        <div>
       
          <div className="flex items-center gap4 relative">
            <h2 className="text-white font-semibold text-3xl md:text-[50px]">
              { bookingTitle }
            </h2>
            <Image
              className="ml-4 -mt-2"
              width={100}
              height={100}
              src={"/productDetails/shape.png"}
              alt="arrow"
            />
          </div> 
        </div>
        <button
          className="py-3 bg-[#040404] w-[265px] rounded-[11px]"
          style={{ color: "white" }}
        >
          Book Now
        </button>
      </div>
  )
}

export default Booking
