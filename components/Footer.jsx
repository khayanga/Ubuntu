'use client'
import React from 'react'
import Image from 'next/image'
import {  Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { navLinks } from '@/data';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (

    <div  className='px-6 py-4 container mx-auto flex flex-col items-center max-w-6xl'>
    <div className='flex flex-col space-y-12 md:flex-row justify-between items-center  w-full'>

            <div className='flex flex-col gap-4 items-center md:items-start'>
                <Image 
                className='mb-6'
                src="/images/logo.png" 
                alt="Logo" 
                width={140} 
                height={140} 
                />

                <h1 className='text-gray-400'>Follow us on our social networks</h1>

                <div className='flex flex-row gap-4 text-sky-600 justify-center items-center'>
                    <Link href="https://www.instagram.com/ubuntu_waterhub/">
                    <FaInstagram className='w-6 h-6 text-sky-600'/>
                    </Link>
                
                <Link href="https://www.linkedin.com/company/ubuntu-waterhub-africa/">
                <FaLinkedin className='w-6 h-6 text-sky-600'/>
                </Link>
                
                <Link href="https://www.facebook.com/profile.php?id=61564003078907">
                <FaFacebook className='w-6 h-6 text-sky-600' />
                </Link>
               

                <Link href='https://x.com/UbuntuWaterhub'>
                <FaTwitter className='w-6 h-6 text-sky-600' />
                </Link>
                
                    
                </div>
                
            </div>

            {/* Comapny links
             */}

        <nav className="items-center ">
            <h1 className='text-gray-400 font-bold mb-3'>Company Links</h1>
        <ul className="space-y-2 md:text-start text-center">
            {navLinks.map((link, index) => (
                <li key={index}>
                <Link href={link.href || '#'} className="text-gray-400 text-md text-[14px] hover:text-sky-600">
                    {link.name}
                </Link>
                </li>
            ))}
            </ul>
         </nav>

    




            {/* Contact details */}

            <div className='flex flex-col space-y-3 md:items-start items-center '>
            <h1 className='text-gray-400 font-bold mb-2'>Contact Us</h1>
                <div className='flex flex-row space-x-4'>
                    <Phone className='w-5 h-5 text-sky-600 '/>
                    <p className='text-[14px]  text-gray-400'>0794093465</p>
                </div>
                <div className='flex flex-row space-x-4'>
                    <Mail className='w-5 h-5 text-sky-600 '/>
                    <p className='text-[14px]  text-gray-400'>info@waterhub.africa</p>
                </div>
                <div className='flex flex-row space-x-4'>
                    <MapPin className='w-5 h-5 text-sky-600 '/>
                    <p className='text-[14px]  text-gray-400'>Avon Center, Industrial Area,
                        Nairobi.
                    </p>
                </div>
            </div>

           

                </div>

                <hr class="border-t border-gray-400 w-full mx-auto my-6"/>


            {/* Copyright */}

            <div className="text-center  text-gray-400 text-[12px] font-light">
                Ubuntu Waterhub Africa © {currentYear} . All rights reserved.
            </div>

    </div>
    
  )
}

export default Footer

