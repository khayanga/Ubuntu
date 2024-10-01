"use client"
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='container flex flex-col items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-2'>
        <div className='md:w-1/2'>
            <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px]'>Empowering communities with smart water technologies.</h1>
            <p className='text-sm  text-white'>
            Facilitating access to clean water globally while
                fostering prosperity and well-being across Africa.
                Facilitating access to clean water globally while
                fostering prosperity and well-being across Africa.
                Facilitating access to clean water globally while
                fostering prosperity and well-being across Africa.
            </p>
        </div>
        <div className=' '>
            <Image src="/images/pic1.png" width={300} height={280} alt='picure1'/>
        </div>
    </div>
  )
}

export default Hero