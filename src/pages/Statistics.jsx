import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import { useLoaderData } from 'react-router-dom';
import Heading from '../Components/Heading';

export default function Statistics() {
    const products = useLoaderData();

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
        <div className="w-full px-4 py-8">
            <div>
                <Heading 
                    title="Statistics" 
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                    height={true}
                />
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-8 shadow-lg my-8 rounded-2xl">
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
        </div>
    );
}
