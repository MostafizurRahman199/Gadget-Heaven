


import React from 'react';

export default function ProductCard({ product, onRemove }) {
  const { product_title, product_image, price, description } = product;

  return (
    <div className="flex border rounded-lg shadow-lg p-4 w-5/6 h-40 mx-auto">
  
      <div className="w-2/6">
        <img
          src={product_image}
          alt={product_title}
          className="h-full w-full object-contain rounded-md"
        />
      </div>

  
      <div className="flex-1 pl-4 relative">
   
        <button
          onClick={onRemove} 
          className="absolute top-0 right-0 p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          ❌
        </button>

      
        <h3 className="text-xl font-semibold mb-2">{product_title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-gray-500 mb-2">Price : ${price}</p>
      </div>
    </div>
  );
}
