import React, { useContext, useEffect, useState } from 'react';
import { getItems, removeFromLocalStorage } from '../../Utils/storeCardToLocalStorage';
import ProductCard from './ProductCard';
import { FcOk } from "react-icons/fc";
import { HiSortDescending } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Utils/MyProvider';


export default function CardProducts() {
  const [cardProducts, setCardProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
  const {cartLength, wishLength, setCartLength, setWishLength} = useContext(MyContext);


  useEffect(() => {
    const data = getItems('cart-list') || [];
    setCardProducts(data);
    calculateTotalCost(data);
    setCartLength(data.length) ;
  }, [totalCost]);

  const calculateTotalCost = (products) => {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    setTotalCost(total);
    setTotalItems(total);
  };

  const handleRemove = (productId) => {
    const updatedProducts = cardProducts.filter(product => product.id !== productId);
    setCardProducts(updatedProducts);
    removeFromLocalStorage(productId, 'cart-list');
    calculateTotalCost(updatedProducts); 
    
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...cardProducts].sort((a, b) => b.price - a.price);
    setCardProducts(sortedProducts);
  };

  const clearCart = () => {
    localStorage.removeItem('cart-list'); 
    setCardProducts([]); 
    
    document.getElementById('my_modal_5').showModal();
    setTotalCost(0); 
  };

  return (
    <div className="flex flex-col gap-4 my-4">




<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle p-4">
  <div className="modal-box bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md mx-auto">
    <div className="flex flex-col items-center text-center">
     
      <div className="flex justify-center mb-4 animate-bounce">
        <FcOk className="text-6xl" />
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        Payment Successful
      </h3>
      
      <p className="text-gray-500 mb-2">
        Thanks for your purchase!
      </p>
     
      <p className="font-medium text-lg text-gray-600 mb-6">
        Total Cost: <span className="text-green-500">${totalItems}</span>
      </p>
     
      <div className="modal-action w-full">
        <form method="dialog" className="w-full">
          <button onClick={()=>navigate("/")} className="btn w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 transition-all duration-300 shadow-lg">
            Close
          </button>
        </form>
      </div>
    </div>
  </div>
</dialog>



      <div className="extra flex justify-around items-center px-4 py-2 ">
        <h2 className="text-xl font-bold text-gray-800">Cart</h2>
        <h1 className="text-lg font-semibold text-gray-600">Total Cost: ${totalCost.toFixed(2)}</h1>
       
       <div className='flex flex-wrap gap-2'>
       <button
        onClick={handleSortByPrice}
        className="mt-2 px-4 py-2 flex items-center justify-center gap-2 border-2 border-[#9538E2] text-[#9538E2] font-medium rounded-full shadow-lg  transition duration-300 ease-in-out transform hover:scale-105"
        >
        Sort by Price
        <HiSortDescending className="text-xl" /> 
        </button>
        
        <button 
        onClick={clearCart} 
        disabled={cardProducts.length === 0} 
        className={`btn mt-2 px-4 py-1 text-white rounded-full  ${
            cardProducts.length > 0 
            ? 'bg-[#9538E2] hover:bg-violet-600 shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105' 
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        >
        Purchase
        </button>
       </div>


      </div>

      {cardProducts.length > 0 ? (
        cardProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onRemove={() => handleRemove(product.id)} 
          />
        ))
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}
