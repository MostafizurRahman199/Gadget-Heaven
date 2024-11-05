// import React from 'react'

// export default function BarChat() {
//   return (
//     <div>BarChat</div>
//   )
// }




import * as React from 'react';
import { BarChart } from '@mui/x-charts';


export default function BarChat({products}) {
    // const products = useLoaderData();

    // Extract product data
    const price = products.map((product) => product.price);
    const name = products.map((product) => product.product_title);
    const rating = products.map((product) => product.rating); 

    
    const [chartSize, setChartSize] = React.useState({ width: 800, height: 400 });

    React.useEffect(() => {
        
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setChartSize({ width: 320, height: 250 }); 
            } else if (window.innerWidth < 1024) {
                setChartSize({ width: 600, height: 350 }); 
            } else {
                setChartSize({ width: 800, height: 400 }); 
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
     
            
            <div className="flex flex-col justify-center items-center md:px-4 py-8 md:shadow-xl md:border-2 my-8 md:rounded-2xl">
                <BarChart
                    width={chartSize.width}
                    height={chartSize.height}
                    colors={['#9538E2', '#FF9800']}
                    xAxis={[{ scaleType: 'band', data: name }]}
                    series={[
                        { 
                            label: 'Price', 
                            data: price,
                        },
                        {
                            label: 'Rating', 
                            data: rating,
                        },
                    ]}
                />
            </div>
       
    );
}

