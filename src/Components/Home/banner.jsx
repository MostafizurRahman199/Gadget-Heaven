// import React from 'react';
// import bannerImage from '../../../public/banner.jpg';

// export default function Banner() {
//     const boxStyles = {
//         boxSizing: 'border-box',
//         borderRadius: '32px',
//         background: 'rgba(255, 255, 255, 0.3)',
//       };
//   return (
//     <div className="w-10/12 mx-auto relative">
//       {/* Main Hero Section */}
//       <div className="hero bg-[#9538E2] text-white h-[694px] flex flex-col justify-start pt-20 rounded-2xl">
//         <div className="hero-content text-center">
//           <div className="max-w-4xl px-4">
//             <h1 className="text-2xl md:text-5xl font-bold mb-6">
//               Upgrade Your Tech Accessories with Gadget Heaven
//             </h1>
//             <p className="py-6 md:text-lg">
//               Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
//             </p>
//             <button className="btn bg-white rounded-3xl text-[#9538E2] hover:bg-gray-100 transition duration-300">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Banner Image Section */}
//       <div className="absolute lg:top-[700px]  lg:right-40 transform -translate-y-1/2 w-[90%] md:w-[70%] h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg p-4 border-2 border-white" style={boxStyles}>
//         <div
//           className="h-full w-full rounded-2xl"
//           style={{
//             backgroundImage: `url(${bannerImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import bannerImage from '../../../public/banner.jpg';

const boxStyles = {
  boxSizing: 'border-box',
  borderRadius: '32px',
  background: 'rgba(255, 255, 255, 0.3)',
};

export default function Banner() {
  return (
    <div className="relative w-11/12 mx-auto ">
      <div className="hero bg-[#9538E2] text-white h-[400px] md:h-[500px] lg:h-[694px] flex flex-col justify-center lg:justify-start pt-12 lg:pt-20">
        <div className="hero-content text-center">
          <div className="max-w-4xl px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Upgrade Your Tech Accessories with Gadget Heaven Accessories
            </h1>
            <p className="py-4 md:py-6 text-sm md:text-lg">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white text-[#9538E2] rounded-3xl font-semibold hover:bg-gray-200">
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

      <div className='h-[300px] '> 

      </div>
    </div>
  );
}
