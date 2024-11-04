



import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { setItemToLocalStorage } from '../../Utils/storeCardToLocalStorage';

export default function WishCard({ product, onRemove }) {
  const { product_title, product_image, price, description } = product;

  return (
    <div className="flex border rounded-lg shadow-lg p-4 py-2 w-5/6 h-40 mx-auto">
      
      <div className="w-2/6">
        <img
          src={product_image}
          alt={product_title}
          className="h-full w-full object-contain rounded-md"
        />
      </div>

    
      <div className="flex-1 pl-4 relative">
      
        <button
          onClick={onRemove} // Calls the onRemove function passed from WishListProducts
          className="absolute top-0 right-0 p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          ❌
        </button>

    
        <h3 className="text-xl font-semibold mb-2">{product_title}</h3>
        <p className="text-base text-gray-600">Description : {description}</p>
        <p className="text-gray-500 mb-2">Price : ${price}</p>
        
        <button className="btn rounded-full text-base  bg-purple-500 text-white py-1 hover:bg-purple-600" onClick={()=>setItemToLocalStorage(product, 'cart-list')}>
          
          Add to Cart
          <FaCartShopping className='text-xl' />
       </button>
      </div>
    </div>
  );
}
