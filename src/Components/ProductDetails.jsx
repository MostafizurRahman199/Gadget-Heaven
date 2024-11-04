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
    <div>
        <div>
        <Heading title={"Product Details"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"} />
        </div>

        <div>
            <ProductDetailsCard product={product}/>
        </div>



       
    </div>
  )
}
