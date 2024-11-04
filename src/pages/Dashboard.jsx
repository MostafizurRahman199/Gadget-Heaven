import React from 'react';
import Heading from '../Components/Heading';
import CardProducts from '../Components/Dashboard/CardProducts';
import WishListProducts from '../Components/Dashboard/WishListProducts';

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = React.useState('cart');

  return (
    <div>
      <Heading 
        title={"Dashboard"} 
        subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"} 
        height={true} 
      />

      <div >
        <div className="flex justify-center space-x-4  bg-[#9538E2] pb-8">
          <button 
            onClick={() => setSelectedSection('cart')}
            className={`px-4 py-2 ${selectedSection === 'cart' ? 'bg-gray-200 text-[#9538E2] ' : ' text-white border-2'} rounded-full`}
          >
            Cart
          </button>
          <button 
            onClick={() => setSelectedSection('wishlist')}
            className={`px-4 py-2 rounded-full ${selectedSection === 'wishlist' ? 'bg-gray-200 text-[#9538E2] ' : 'border-2 text-white  '} `}
          >
            WishList
          </button>
        </div>

        {/* Conditionally render components based on the selected button */}
        <div>
          {selectedSection === 'cart' && <CardProducts />}
          {selectedSection === 'wishlist' && <WishListProducts />}
        </div>
      </div>
    </div>
  );
}
