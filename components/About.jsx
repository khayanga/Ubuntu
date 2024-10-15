"use client"
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='container flex flex-col max-w-6xl items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-3 md:mt-6'>
        <div className=' hidden md:block'>
            <Image src="/images/pic2.png" width={300} height={280} alt='picure1'/>
        </div>
        <div className='md:w-1/2'>
            <h2 className='text-sky-600 text-[24px] font-normal'>Who are we</h2>
            <h3 className='text-white
            text-[26px] '>Committed to providing
                communities with access to clean water.
                </h3>
            <p className='text-sm  text-white'>
            Ubuntu Waterhub Africa is a tech solutions company in the water,
            sanitation, and hygiene sector. We aim to provide communities with
            access to clean water while equipping water entrepreneurs with
            smart vending and management tools. By collaborating with
            industry leaders and NGOs, we expand our mission across Africa.
            </p>
        </div>
        
    </div>
  )
}

export default About;