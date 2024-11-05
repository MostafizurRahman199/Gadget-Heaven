import * as React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Heading from '../Components/Heading';
import BarChat from '../Components/Statistics/BarChat';
import BasicScatter from '../Components/Statistics/BasicScatter';

export default function Statistics() {
    const products = useLoaderData();
    const [activeChart, setActiveChart] = useState('bar'); 

    return (
        <div className="w-full px-4 py-8">
            <div>
                <Heading 
                    title="Statistics" 
                    subtitle="Dive into data insights on our top gadgets. Explore performance, trends, and customer ratings to make the best choice for your tech needs!"
                    height={true}
                />
            </div>

          
            <div className="flex flex-wrap justify-center gap-4 my-6">
                <button 
                    onClick={() => setActiveChart('bar')}
                    className={`px-4 py-2 rounded-full ${activeChart === 'bar' ? 'bg-[#9538E2] text-white hover:bg-violet-600 shadow-lg cursor-pointer btn rounded-full' : 'bg-gray-200 text-[#9538E2] border-[#9538E2] transition duration-300 ease-in-out transform hover:scale-105'}`}
                >
                    Show Bar Chart
                </button>
                <button 
                    onClick={() => setActiveChart('scatter')}
                    className={`px-4 py-2 rounded-full ${activeChart === 'scatter' ? ' bg-[#9538E2] text-white hover:bg-violet-600 shadow-lg cursor-pointer  btn rounded-full' : 'bg-gray-200 text-[#9538E2] transition duration-300 ease-in-out transform hover:scale-105 border-[#9538E2] '}`}
                >
                    Show Scatter Plot
                </button>
            </div>

          
            <div>
                {activeChart === 'bar' && <BarChat products={products} />}
                {activeChart === 'scatter' && <BasicScatter products={products} />}
            </div>
        </div>
    );
}
