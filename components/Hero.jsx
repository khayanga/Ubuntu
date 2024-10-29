"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
  const words = `Empowering Smart Water Usage for a Sustainable Future.`;

  return (
    <div className='container flex flex-col gap-3  items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-8  max-w-6xl'>
        <div className='w-full  md:w-1/2'>
        <TextGenerateEffect className="text-[28px] md:text-[30px] mb-2 text-sky-600"  duration={2} filter={false} words={words}/>
            
            <p className='text-sm mb-2  text-white leading-normal'>
            Discover the future of water management with our advanced Water ATMs and Smart Meters—designed to meet the pressing needs of water access, transparency, and sustainability. Our solutions make accessing clean water secure, convenient, and reliable, empowering communities and water entrepreneurs alike. Together, 
            we’re transforming water access across Africa, fostering health, prosperity, and lasting change.
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