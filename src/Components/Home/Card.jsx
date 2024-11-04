import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Card({ product }) {
    const { id, product_title, product_image, price } = product;

    const navigate = useNavigate();
 
      
    return (
        <Link to={`/productdetails/${id}`}>
            <div className="w-[250px] md:min-w-[300px] h-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-all transform hover:scale-105 duration-300 mb-4">
                <img
                    className="w-76 h-40 object-contain" // This keeps the image dimensions consistent
                    src={product_image}
                    alt={`${product_title} image`}
                    // Ensures the image fills the area without distortion
                />
              
                <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-800">{product_title}</h2>
                    <p className="text-sm text-gray-500 mt-1">Price : {price}</p>
              
                    <div className="mt-auto"  >
                        <button
                            onClick={() => navigate(`/productdetails/${id}`)} 
                            className="btn w-fit bg-transparent text-violet-500 border-2 border-violet-500  hover:text-white py-2 rounded-full hover:bg-violet-600 px-4"
                        >
                            See in Details
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
