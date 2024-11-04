import React from 'react'
import Heading from './Heading'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductDetailsCard from './ProductDetailsCard';

export default function ProductDetails() {
    const data = useLoaderData();
    const {id} = useParams();

    const product = data.find(item => item.id == id); 

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col items-center relative min-h-screen parent">
            <div className="text-center">
                <Heading 
                    title="Product Details" 
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" 
                />
            </div>

            {/* Centering child div in the middle of parent using Flexbox */}
            <div className="flex justify-center items-center w-full md:absolute top-56">
                <div className="w-full  md:p-4">
                    <ProductDetailsCard product={product} />
                </div>
            </div>

            <div className="h-40 md:h-60"></div>
        </div>
    )
}
