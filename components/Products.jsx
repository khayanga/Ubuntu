"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Products = () => {
  return (
    <div className='container mx-auto mt-10 md:mb-28   max-w-6xl'>

        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Our products</h1>
        

        <div className='py-4 flex flex-col items-center md:flex-row md:space-x-40 gap-12  mx-auto px-6 md:px-2 mt-3 md:mt-6'>
        <div className=' '>
            <Image src="/images/atm.png" width={500} height={300} alt='picure1'/>
        </div>
        <div className='md:w-1/2'>
            
            <p className='text-white
            text-[22px] pb-2'>Smart Water Atm's
                </p>
            <p className='text-sm  text-white leading-normal mb-2'>
            Discover the future of water access with our Smart Water ATMs, engineered to 
            deliver a seamless and sustainable solution for communities in need. These advanced water 
            dispensing units are designed for convenience, efficiency, and environmental responsibility.
             Our technology empowers local water entrepreneurs, enhancing their ability to serve communities effectively.
            </p>
            <Link href="/water-atms">
            <Button variant="default" className="px-4  mt-4 rounded-full">
                Learn more
            </Button></Link>
        </div>
        
        </div>
        <div className='py-8 flex flex-col items-center md:flex-row md:space-x-40 gap-12 mx-auto px-6 md:px-2 mt-3 md:mt-6'>
        
        <div className='md:w-1/2'>
            
            <p className='text-white pb-2
            text-[22px] '>Digital Water Meters
                </p>
            <p className='text-sm  text-white ledaing-normal mb-2'>
            The digital water meter is an advanced device that accurately tracks and records water consumption in real-time. 
            Equipped with smart technology, it offers precise measurements,
             data analytics, and remote monitoring, making it easier to manage water resources efficiently.
            </p>

            <Link href="/smart-meters">
            <Button variant="default" className="px-4  mt-4 rounded-full">
            Learn more
            </Button></Link>
           
        </div>
        <div className=' '>
            <Image src="/images/smartmeter.png" width={500} height={300} alt='picure1'/>
        </div>
        
        </div>
    </div>
  )
}

export default Products
