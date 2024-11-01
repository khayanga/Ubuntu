"use client"
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='container flex flex-col max-w-6xl items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-10 md:mb-28 py-8
    '>
        <div className=' hidden md:block'>
            <Image src="/images/pic2.png" width={350} height={250} alt='picure1'/>
        </div>
        <div className='md:w-1/2'>
            <h2 className='text-sky-600 text-[24px] font-bold mb-2'>Who are we</h2>
            <h3 className='text-white
            text-[24px] '>Transforming communities across Africa with access to safe, clean water
                </h3>
            <p className='text-sm my-4 text-white leading-normal'>
            At Ubuntu Waterhub Africa, we are passionate about transforming water access,
             sanitation, and hygiene across the continent. We are a Kenyan-based company in Nairobi, 
             we harness innovative technology to create smart solutions that empower local water entrepreneurs. Our commitment to providing advanced vending and management tools enables communities to secure reliable access to clean water.
          By collaborating with industry leaders and NGOs, we amplify our impact and extend our reach to those who need it most. Together, we are fostering sustainable change, driving prosperity, and ensuring that every community has access to the essential resource of safe water.


            </p>
        </div>
        
    </div>
  )
}

export default About;