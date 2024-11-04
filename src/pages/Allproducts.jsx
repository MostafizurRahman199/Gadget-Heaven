import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CardforAllproduct from '../Components/Allproducts/CardforAllproduct';

export default function Allproducts() {
    const products = useLoaderData();
  return (
    <div className='flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
            {
                products?.map((product) => <CardforAllproduct key={product.id} product={product}></CardforAllproduct>)
            }
    </div>
  )
}
