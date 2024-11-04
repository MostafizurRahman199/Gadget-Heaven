
import React from 'react'

export default function Heading({title, subtitle, height}) {
  return (
    <div className={`bg-[#9538E2] text-white  gap-4 mt-10  mx-auto sm:h-fit flex flex-col items-center  py-8 ${height ? "md:h-fit justify-center" :  "md:h-[463px] justify-start"}`}>
        <div className='w-5/6 flex flex-col justify-center items-center gap-4'>
        <h1 className='text-2xl lg:text-4xl text-center'>{title}</h1>
        <h2 className='text-xl text-center'>{subtitle}</h2>

 

        </div>
    </div>
  )
}
