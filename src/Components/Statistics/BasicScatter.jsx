

import * as React from 'react';
import { ScatterChart } from '@mui/x-charts';
import { useLoaderData } from 'react-router-dom';

export default function BasicScatter() {
    const products = useLoaderData();
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

  
    // console.log('Loaded Products:', products);

  
    const seriesAData = products.map((product) => ({
        x: product.price,  
        y: product.rating,  
        id: product.id,    
    }));

    
    const categoryMap = {};
    products.forEach((product) => {
        if (!categoryMap[product.category]) {
            categoryMap[product.category] = Object.keys(categoryMap).length + 1; 
        }
    });

    const seriesBData = products.map((product) => ({
        x: categoryMap[product.category], 
        y: product.rating,
        id: product.id,
    }));

  
    // console.log('Series A Data:', seriesAData);
    // console.log('Series B Data:', seriesBData);

    return (
        <div className="flex flex-col justify-center items-center md:px-4 py-8 md:shadow-xl md:border-2 my-8 md:rounded-2xl">
        <ScatterChart
        width={chartSize.width}
        height={chartSize.height}
            series={[
                {
                    label: 'Price vs Rating',
                    data: seriesAData,
                },
                {
                    label: 'Category vs Rating',
                    data: seriesBData,
                },
            ]}
        />
        </div>
    );
}
