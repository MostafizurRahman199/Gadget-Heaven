import React, { useContext, useEffect, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { setItemToLocalStorage, getItems } from '../Utils/storeCardToLocalStorage';
import { MyContext } from '../Utils/MyProvider';

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

  const [isWishListed, setIsWishListed] = useState(false);
  const {cartLength, wishLength, setCartLength, setWishLength} = useContext(MyContext);


  
  useEffect(() => {
    const wishlist = getItems('wish-list') || [];
    const cardList = getItems('cart-list');

    setCartLength(cardList.length);
    setWishLength(wishlist.length);

    const isInWishlist = wishlist.some((item) => item.id === product.id);
    setIsWishListed(isInWishlist);
    
  }, [product.id]);

  
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

  const handleAddToWishlist = () => {
    if (!isWishListed) {
      setItemToLocalStorage(product, 'wish-list');
      setIsWishListed(true);
      setWishLength((prevLength) => prevLength + 1); 
    }
  };


  const handleAddToCart = () => {
  
      setItemToLocalStorage(product, 'cart-list');
     
      setCartLength((prevLength) => prevLength + 1); 
   
  };

  return (
    <div className="bg-white flex flex-col md:flex-row border rounded-2xl shadow-md overflow-hidden max-w-4xl mx-auto p-4">
      <img
        className="w-full md:w-1/2 object-cover h-48 md:h-auto"
        src={product_image}
        alt={product_title}
      />
      <div className="p-4 flex flex-col justify-between md:w-1/2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{product_title}</h2>
          <p className="text-lg text-gray-600 mt-2"><span className='font-bold'>Price :</span> ${price}</p>
          <p className="text-sm bg-green-100 border-2 border-green-500 text-green-500 w-fit rounded-full px-2 py-1 mt-1">
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
            <span className="ml-2 bg-gray-100 text-black text-base rounded-full px-2 py-1">{rating}</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            className="btn rounded-full bg-purple-500 text-white py-2 hover:bg-purple-600"
            onClick={handleAddToCart}
          >
            Add to Cart
            <FaCartShopping className='text-xl' />
          </button>
          <button
            onClick={handleAddToWishlist}
            className={`btn btn-circle ${isWishListed ? 'bg-gray-300' : ''}`}
            disabled={isWishListed}
          >
            {isWishListed ? <FaHeart className='text-xl text-red-500' /> : <FaRegHeart className='text-xl' />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
