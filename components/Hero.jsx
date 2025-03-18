"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
  const words = `Smart Water Solutions for a Sustainable Africa.`;

  return (
    <div className='container flex flex-col gap-3  items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-10 md:mb-28  max-w-6xl'>
        <div className='w-full  md:w-1/2'>
        <TextGenerateEffect className="text-[28px] md:text-[40px] mb-2 text-sky-600"  duration={2} filter={false} words={words}/>
            
            <p className='text-sm  md:text-lg md:tracking-wider mb-2  text-white leading-normal'>
            Our Water ATMs and Smart Meters make clean water access secure, transparent, and sustainable. 
            We’re transforming water management across Africa, empowering communities and fostering lasting change."
            </p>
            <Link href="/water-atms">
            <Button variant="default" className="px-6 mt-4 rounded-full">
              Learn more
            </Button>
            </Link>
            
        </div>
        <div className=' '>
            <Image src="/images/pic1.png" width={250} height={150} alt='picure1'/>
        </div>
    </div>
  )
}

export default Hero;