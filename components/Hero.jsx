"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='container flex flex-col items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-2'>
        <div className='md:w-1/2'>
            <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px]'>Empowering Smarter Water Usage for a Sustainable Future.</h1>
            <p className='text-sm  text-white'>
            Our smart water meters and atms enable real-time monitoring and management of water resources, 
            helping communities conserve water, 
            reduce waste, and contribute to global sustainability efforts.
            Facilitating access to clean water globally while
            fostering prosperity and well-being across Africa.
            </p>
            <Link href="/contact">
            <Button variant="default" className="px-6 mt-4 rounded-full">
              Get started
            </Button>
            </Link>
            
        </div>
        <div className=' '>
            <Image src="/images/pic1.png" width={300} height={280} alt='picure1'/>
        </div>
    </div>
  )
}

export default Hero