import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'
import Card from './Card';

export default function CategoryCard() {
    const {category} = useParams()
    const data = useLoaderData();
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const allProducts = ()=>{
        navigate('/allproducts');
    }

    useEffect(() => {
        if (data) { 
            if (category && category !== 'allproducts') {
                const filteredProducts = data.filter(data => data.category === category);
                setProducts(filteredProducts);
            } else{
                setProducts(data.slice(0, 6));
            }
        }
    }, [category, data]); 


  return (
    <div className=''>

<div className="container mx-auto px-4 md:px-4 lg:px-16">
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center">
    {products.map(product => (
      <Card key={product.id} product={product} />
    ))}
  </div>

  <div className="flex justify-center mt-8">
    <button onClick={allProducts} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
      Show All
    </button>
  </div>
</div>
            </div>
  )
}
