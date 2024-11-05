import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardforAllproduct from '../Components/Allproducts/CardforAllproduct';
import Heading from '../Components/Heading';

export default function Allproducts() {
    const products = useLoaderData();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortType, setSortType] = useState('');
    const [activeButton, setActiveButton] = useState(''); // State to track the active button

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (type) => {
        setSortType(type);
        setActiveButton(type); 
    };

    useEffect(() => {
        let tempProducts = products;

        if (searchTerm) {
            tempProducts = tempProducts.filter((product) =>
                product.product_title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortType === 'price-asc') {
            tempProducts = [...tempProducts].sort((a, b) => a.price - b.price);
        } else if (sortType === 'price-desc') {
            tempProducts = [...tempProducts].sort((a, b) => b.price - a.price);
        } else if (sortType === 'rating-desc') {
            tempProducts = [...tempProducts].sort((a, b) => b.rating - a.rating);
        }

        setFilteredProducts(tempProducts);
    }, [products, searchTerm, sortType]);

   
    const getButtonClass = (type) => {
        return activeButton === type 
            ? " bg-[#9538E2] text-white hover:bg-violet-600 shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 btn rounded-full" 
            : "bg-white text-[#9538E2] border-[#9538E2] border shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 btn rounded-full";
    };

   
    return (
        <div>
            <div>
                <Heading 
                    title="Stay Connected, Stay Ahead" 
                    subtitle="Explore cutting-edge smartphones with powerful performance and sleek design." 
                    height={true}
                />
            </div>

            <div className='operation p-4 w-10/12 mx-auto flex flex-wrap justify-center md:justify-start gap-2'>
                <input 
                    type="text" 
                    placeholder="Search by product title..." 
                    value={searchTerm} 
                    onChange={handleSearch} 
                    className="border  p-2 rounded-xl mr-4 border-[#9538E2] text-[#9538E2]"
                />

                <button onClick={() => handleSort('price-asc')} className={getButtonClass('price-asc')}>Sort by Price (Asc)</button>
                <button onClick={() => handleSort('price-desc')} className={getButtonClass('price-desc')}>Sort by Price (Desc)</button>
                <button onClick={() => handleSort('rating-desc')} className={getButtonClass('rating-desc')}>Sort by Rating (Desc)</button>
            </div>

            <div className='flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-10/12 mx-auto'>
                {
                    filteredProducts?.map((product) => (
                        <CardforAllproduct key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}
