'use client'
import React from 'react'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='px-6 py-4 container mx-auto flex flex-col  space-y-3 md:flex-row justify-between items-center max-w-6xl'>

        <div className='flex flex-col gap-2 items-center'>
            <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={80} 
            height={80} 
            />
            <p className='text-white text-[14px] font-light'>Smart water solutions</p>
        </div>

        <div className="text-center mt-4 text-white text-[14px] font-light">
            Ubuntu Waterhub Africa © {currentYear} . All rights reserved.
        </div>

        <div className='flex flex-col space-y-3 items-start '>
            <div className='flex flex-row space-x-4'>
                <Phone className='w-4 h-4 text-sky-600 '/>
                <p className='text-[14px] font-light text-white'>0794093465</p>
            </div>
            <div className='flex flex-row space-x-4'>
                <Mail className='w-4 h-4 text-sky-600 '/>
                <p className='text-[14px] font-light text-white'>info@waterhub.africa</p>
            </div>
            <div className='flex flex-row space-x-4'>
                <MapPin className='w-4 h-4 text-sky-600 '/>
                <p className='text-[14px] font-light text-white'>Avon Center, Industrial Area</p>
            </div>
        </div>

    </div>
  )
}

export default Footer