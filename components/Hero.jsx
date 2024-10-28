"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
  const words = `Empowering Smart Water Usage for a Sustainable Future.`;

  return (
    <div className='container flex flex-col items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-8  max-w-6xl'>
        <div className='md:w-1/2'>
        <TextGenerateEffect className="text-[28px] md:text-[30px] mb-2 text-sky-600"  duration={2} filter={false} words={words}/>
            
            <p className='text-sm  text-white'>
            Experience the next generation of water solutions with our Smart Water ATMs and Meters. Designed to address the challenges of water access and management, our systems provide a convenient, reliable,
             and transparent way to ensure everyone gets the water they need.
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
            <Image src="/images/pic2.png" width={350} height={250} alt='picure1'/>
        </div>
    </div>
  )
}

export default Hero;