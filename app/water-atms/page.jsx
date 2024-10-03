"use client"
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { BadgeCheck } from 'lucide-react';
import { meterData, pricingData } from '@/data'
const page = () => {
  return (
    <div className="bg-gray-900 w-full min-h-screen">
        <Navbar/>
        <div className='container flex flex-col items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-8'>
        <div className='md:w-1/2'>
            <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px]'>Smart Water Atm’s .</h1>
            <p className='text-sm  text-white'>
            Ubuntu Waterhub Africa introduces the Water Hub, an advanced IoT- powered water vending solution designed 
            to address these challenges comprehensively. 
            Our Water Hub offers the following key unique value propositions
            </p>
        </div>
        <div className=' '>
            <Image src="/images/meter.png" width={300} height={280} alt='picure1'/>
        </div>
        </div>
        {/* Features */}
        <div className='max-w-6xl mx-auto mt-3 md:mt-10 pb-4 '>
        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Features</h1>

        <div className='flex flex-col md:flex-row  items-center justify-between px-4 gap-4 pb-2'>
        {meterData.map((meter) => (
          <Card 
            key={meter.id} 
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] py-4 
            text-center flex flex-col justify-between
            bg-gradient-to-b from-white to-sky-200 "
            style={{ borderTopRightRadius: '24px', borderBottomLeftRadius: '24px' }}
          >
            <CardContent className="text-white">
              <div className="h-[250px] md:h-[140px] px-4 mb-2 ">
                <Image
                  width={140}  
                  height={140} 
                  alt='meterimage' 
                  src={meter.image} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h4 className='my-2 text-sky-600 font-medium'>{meter.title}</h4>
              <p className='text-sm text-gray-800'>{meter.description}</p>
            </CardContent>
          </Card>
        ))}
        </div>

        </div>

        {/* Benefits */}
        <div className='container mx-auto mt-3 md:mt-10 pb-4  '>
        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Benefits</h1>

        <div className='flex flex-col md:flex-row  items-center justify-between px-4 gap-4 md:gap-10 pb-2'>
            <div className=' flex flex-col space-y-6  md:w-1/2 p-2'>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>24/7 Access to clean water</p>
                </button>

                <p className='text-sm text-white'>Provides constant access to clean water, even in areas with limited infrastructure.</p>

                </div>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>Enterprenuer empowerment</p>
                </button>

                <p className='text-sm text-white'>Enables real-time system control, monitoring, and management for water business entrepreneurs.</p>

                </div>

            

            </div>
            <div className=' flex flex-col space-y-6 md:w-1/2 p-2'>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>Convinient Payment Systems</p>
                </button>

                <p className='text-sm text-white'>Integration with mobile payment technologies like Mpesa allows easy water payment via smartphones.</p>

                </div>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>Sustainable and Cost-Effective</p>
                </button>

                <p className='text-sm text-white'>Spill proof design minimizes water wastage, and solar power compatibility enhances sustainability.</p>

                </div>

            

            </div>
        </div>

        </div>
        {/* Pricing */}
        <div className='w-full  mx-auto mt-3 md:mt-10 pb-4 bg-gradient-to-b from-white to-sky-200'>
        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Pricing</h1>

        <div className=' container mx-auto  flex flex-col md:flex-row  items-center justify-between px-4 gap-4 md:gap-8 pb-2'>
        {pricingData.map((plan,index) => (
          <Card 
            key={index} 
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] 
            text-center flex flex-col justify-between bg-gray-900 pt-4 rounded-[12px]
             "
            
          >
            <CardHeader>
                <CardTitle className="text-sky-600">{plan.price}</CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <p className='text-md text-white'>{plan.title}</p>
               <ul className="text-center mt-2 space-y-2 ">
                  {plan.descriptions.map((description, i) => (
                    <div className="flex flex-row space-x-2 justify-center mt-4">
                       <BadgeCheck className='w-4 h-4 text-sky-600 '/>
                    <li key={i} 
                    className="text-sm text-transparent bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text ">
                      {description}
                    </li>

                    </div>
                    
                  ))}
                </ul>
                <button className=' bg-gradient-to-r from-sky-400 to-sky-600 p-2 text-[14px] rounded-md mt-6'>
                    Get started
                </button>
            </CardContent>
          </Card>
        ))}
        </div>

        </div>

        <Contact/>
        <Footer/>
    </div>
  )
}

export default page
