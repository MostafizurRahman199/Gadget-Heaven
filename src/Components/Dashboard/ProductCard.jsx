


import React from 'react';

export default function ProductCard({ product, onRemove }) {
  const { product_title, product_image, price, description, rating } = product;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500 text-xl">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300 text-xl">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="flex border rounded-lg shadow-lg p-4 w-5/6 h-auto md:h-40 mx-auto">
  
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
          className="absolute top-0 right-0 p-1 text-sm sm:text-base sm:p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          ❌
        </button>

      
        <h3 className="text-sm sm:text-xl font-semibold mb-2">{product_title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-gray-500 mb-2">Price : ${price}</p>
        <div className="md:mt-1">
            {renderStars()}
            <span className="ml-2 bg-gray-100 text-black text-base rounded-full px-2 py-1">{rating}</span>
          </div>
      </div>
    </div>
  );
}
