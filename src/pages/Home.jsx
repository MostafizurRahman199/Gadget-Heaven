import React from 'react'
import Banner from '../Components/Home/Banner'
import SideBar from '../Components/Home/SideBar'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Banner/>
        <div>
          
                <h1 className='text-center text-2xl lg:text-3xl  font-bold my-8'>Explore Cutting-Edge Gadgets</h1>
            
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 w-full mx-auto  gap-4 justify-items-center'>
            <div className='lg:col-span-1 '><SideBar/></div>
            <div className='lg:col-span-3'>
                <Outlet/>
            </div>
        </div>
        </div>
    </div>
  )
}
