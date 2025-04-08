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
            {/* <h3 className='text-white
            text-[24px] '>Transforming communities across Africa with access to safe, clean water
                </h3> */}
            <p className='text-sm  md:text-lg md:tracking-wider my-4 text-white leading-normal'>
            Ubuntu Waterhub Africa is dedicated to transforming water access across Africa. Based in Nairobi, we use smart technology to empower local water entrepreneurs with tools for reliable, clean water. Through partnerships with industry leaders and NGOs,
             we’re driving sustainable change, prosperity, and ensuring safe water for all communities.
            </p>
        </div>
        
    </div>
  )
}

export default About;