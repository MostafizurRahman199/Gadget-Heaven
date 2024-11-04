

import React, { useContext, useEffect, useState } from 'react';
import { getItems, removeFromLocalStorage } from '../../Utils/storeCardToLocalStorage';
import WishCard from './WishCard';
import { MyContext } from '../../Utils/MyProvider';

export default function WishListProducts() {
  const [wishCards, setWishCards] = useState([]);
  const {cartLength, wishLength, setCartLength, setWishLength} = useContext(MyContext);

  useEffect(() => {
    const data = getItems('wish-list') || [];
    setWishCards(data);
    setWishLength(data.length);
  }, [setWishLength]);

  const handleRemove = (productId) => {
  
    const updatedWishes = wishCards.filter(product => product.id !== productId);
    setWishCards(updatedWishes);
    removeFromLocalStorage(productId, 'wish-list');
    setWishLength(updatedWishes.length);
  };

  return (
    <div className="flex flex-col gap-2 my-4">

    <div className="extra flex justify-center items-center px-4 py-2 ">
        <h2 className="text-xl font-bold text-gray-800">Wish List</h2>
      
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
