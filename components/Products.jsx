"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Products = () => {
  return (
    <div className='container mx-auto mt-3 md:mt-10 '>

        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Our products</h1>
        

        <div className='py-4 flex flex-col items-center md:flex-row md:space-x-40 gap-4  mx-auto px-6 md:px-2 mt-3 md:mt-6'>
        <div className=' '>
            <Image src="/images/atm.png" width={500} height={300} alt='picure1'/>
        </div>
        <div className='md:w-1/2'>
            
            <p className='text-white
            text-[22px] pb-2'>Smart Water Atm's
                </p>
            <p className='text-sm  text-white'>
            The Water Hub is an advanced water dispensing unit
            crafted to offer a convenient, efficient, and
            sustainable water dispensing solution. Manufactured
            by Ubuntu Waterhub Africa, a Kenyan-based company
            specializing in designing and developing IoT and
            technology-driven solutions for the water sector.
            </p>
            <Button variant="default" className="px-4  mt-4 rounded-full">
                Read more
            </Button>
        </div>
        
        </div>
        <div className='py-8 flex flex-col items-center md:flex-row md:space-x-40 gap-4 mx-auto px-6 md:px-2 mt-3 md:mt-6'>
        
        <div className='md:w-1/2'>
            
            <p className='text-white pb-2
            text-[22px] '>Digital Water Meters
                </p>
            <p className='text-sm  text-white'>
            The Water Hub is an advanced water dispensing unit
            crafted to offer a convenient, efficient, and
            sustainable water dispensing solution. Manufactured
            by Ubuntu Waterhub Africa, a Kenyan-based company
            specializing in designing and developing IoT and
            technology-driven solutions for the water sector.
            </p>
            <Button variant="default" className="px-4  mt-4 rounded-full">
                Read more
            </Button>
        </div>
        <div className=' '>
            <Image src="/images/smartmeter.png" width={500} height={300} alt='picure1'/>
        </div>
        
        </div>
    </div>
  )
}

export default Products
