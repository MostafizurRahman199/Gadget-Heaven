


import React from 'react';
import bannerImage from '../../../public/banner.jpg';
import { useNavigate } from 'react-router-dom';


const boxStyles = {
    boxSizing: 'border-box',
    borderRadius: '32px',
    background: 'rgba(255, 255, 255, 0.3)',
};

export default function Banner() {
    const navigate = useNavigate();
  return (
    <div className="relative w-full mx-auto ">
      <div className="hero bg-[#9538E2] text-white h-[400px] md:h-[500px] lg:h-[694px] flex flex-col justify-center lg:justify-start pt-12 lg:pt-20 rounded-b-2xl">
        <div className="hero-content text-center">
          <div className="max-w-4xl px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Upgrade Your Tech Accessories with Gadget Heaven Accessories
            </h1>
            <p className="py-4 md:py-6 text-sm md:text-lg">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button onClick={()=>navigate("/dashboard")} className="btn bg-white text-[#9538E2] rounded-3xl font-semibold hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute top-[600px] lg:top-[700px] right-1/2 lg:right-40 transform translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[100%] md:w-[70%] h-64 md:h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg p-2 md:p-4 border-2 border-white"
        style={boxStyles}
      >
        <div
          className="h-full w-full rounded-2xl"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className='h-[400px] '> 

      </div>
    </div>
  );
}
