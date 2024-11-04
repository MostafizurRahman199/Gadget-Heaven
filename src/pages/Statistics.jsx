import * as React from 'react';
import { BarChart,LineChart } from '@mui/x-charts'; 
import { useLoaderData } from 'react-router-dom';

export default function Statistics() {
    const products = useLoaderData();
    
   
    const price = products.map((product) => product.price);
    const name = products.map((product) => product.product_title);
    const rating = products.map((product) => product.rating); 

    return (
        <div className='flex flex-col justify-center items-center px-4 py-8 shadow-lg my-8 rounded-2xl'>
            <BarChart
                width={800}
                height={400}
                colors={['#9538E2','#FF9800']} 
                xAxis={[{ scaleType: 'band', data: [...name] }]}
                series={[
                    { 
                        label: 'Price', 
                        data: [...price],
                    },
                    {
                        label: 'Rating', 
                        data: [...rating],
                    },
                ]}
            />

             
            
        </div>
    );
}

