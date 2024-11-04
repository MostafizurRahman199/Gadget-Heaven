

import React, { useEffect, useState } from 'react';
import { getItems, removeFromLocalStorage } from '../../Utils/storeCardToLocalStorage';
import WishCard from './WishCard';

export default function WishListProducts() {
  const [wishCards, setWishCards] = useState([]);

  useEffect(() => {
    const data = getItems('wish-list') || [];
    setWishCards(data);
  }, []);

  const handleRemove = (productId) => {
  
    const updatedWishes = wishCards.filter(product => product.id !== productId);
    setWishCards(updatedWishes);
    removeFromLocalStorage(productId, 'wish-list');
  };

  return (
    <div className="flex flex-col gap-2 my-4">

    <div className="extra flex justify-center items-center px-4 py-2 ">
        <h2 className="text-xl font-bold text-gray-800">Wish List</h2>
        {/* <h1 className="text-lg font-semibold text-gray-600">Total Cost: ${totalCost.toFixed(2)}</h1> */}
        {/* <button 
          onClick={handleSortByPrice} 
          className="mt-2 px-4 py-1 border-2 border-[#9538E2] text-[#9538E2]  hover:bg-[#9538E2] hover:text-white btn rounded-full transition-colors transform duration-300"
        >
          Sort by Price
        </button> */}
      </div>

      {wishCards.length > 0 ? (
        wishCards.map((product) => (
          <WishCard 
            key={product.id} 
            product={product} 
            onRemove={() => handleRemove(product.id)} 
          />
        ))
      ) : (
        <p className='text-center'>Your wishlist is empty.</p>
      )}
    </div>
  );
}
