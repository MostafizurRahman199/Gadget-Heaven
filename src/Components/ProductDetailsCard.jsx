import React from 'react';

const ProductCard = ({ product }) => {
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const handleAddToCart = () => {
    console.log(`Added ${product_title} to cart.`);
  };

  const handleAddToFavorites = () => {
    console.log(`Added ${product_title} to favorites.`);
  };

  // Function to render the rating stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500">★</span>); 
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>); 
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row border rounded-2xl shadow-md overflow-hidden max-w-4xl mx-auto p-4">
      <img
        className="w-full md:w-1/2 object-cover h-48 md:h-auto"
        src={product_image}
        alt={product_title}
      />
      <div className="p-4 flex flex-col  justify-between md:w-1/2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{product_title}</h2>
          <p className="text-lg text-gray-600 mt-2"><span className='font-bold'>Price :</span> ${price}</p>
          <p className="text-sm bg-green-100 border-2 border-green-500 text-green-500 w-fit  rounded-full px-2 py-1 mt-1">
             {availability ? 'In Stock' : 'Out of Stock'}
          </p>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
          
          <h3 className="mt-4 text-lg font-semibold">Specifications:</h3>
          <ol className="list-decimal list-inside text-sm text-gray-500">
          {specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ol>

          <div className="mt-1">
            {renderStars()}
            <span className="ml-2 text-gray-500">({rating})</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="btn rounded-full w-fit bg-purple-500 text-white py-2 hover:bg-purple-600 transition duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToFavorites}
            className="w-fit bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
