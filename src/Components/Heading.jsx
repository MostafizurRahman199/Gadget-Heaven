
import React from 'react'

export default function Heading({title, subtitle}) {
  return (
    <div className='bg-[#9538E2] text-white  gap-4 my-10  mx-auto h-[463px] flex flex-col items-center justify-start py-8'>
        <div className='w-5/6 flex flex-col justify-center items-center gap-4'>
        <h1 className='text-2xl lg:text-4xl text-center'>{title}</h1>
        <h2 className='text-xl text-center'>{subtitle}</h2>
        </div>
    </div>
  )
}
