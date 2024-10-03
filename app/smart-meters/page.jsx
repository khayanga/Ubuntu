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
import { atmData} from '@/data'
const page = () => {
  return (
    <div className="bg-gray-900 w-full min-h-screen">
        <Navbar/>
        <div className='container flex flex-col items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-8'>
        <div className='md:w-1/2'>
            <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px]'>Smart Water Meters .</h1>
            <p className='text-sm  text-white'>
            "Measure, monitor, and save with our smart water meter – precision in billing, 
            real-time insights, and enhanced efficiency at your fingertips."Measure, monitor, and save with our smart water meter – precision in billing, real-time insights, and enhanced efficiency at your fingertips."
            </p>
        </div>
        <div className=' '>
            <Image src="/images/pic2.png" width={300} height={280} alt='picure1'/>
        </div>
        </div>
        {/* Features */}
        <div className='max-w-6xl mx-auto mt-3 md:mt-10 pb-4 '>
        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Features</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4 pb-2 justify-items-center'>
        {atmData.map((atm) => (
          <Card 
            key={atm.id} 
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] py-4 
            text-center flex flex-col justify-between
            bg-gradient-to-b from-white to-sky-200 "
            style={{ borderTopRightRadius: '24px', borderBottomLeftRadius: '24px' }}
          >
            <CardContent className="text-white">
              <div className="h-[250px] md:h-[140px]px-4 mb-2 ">
                <Image
                  width={140}  // Aspect ratio of 16:9, or you can adjust based on card width
                  height={140}
                  alt='atmimage' 
                  src={atm.image} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h4 className='my-2 text-sky-600 font-medium'>{atm.title}</h4>
              <p className='text-sm text-gray-800'>{atm.description}</p>
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
                    <p className='text-[12px]  text-white'>Accurate billing</p>
                </button>

                <p className='text-sm text-white'>
                Eliminates billing disputes with precise, real-time water usage data, ensuring fair billing.
                </p>

                </div>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>Tarrifs</p>
                </button>

                <p className='text-sm text-white'>
                Tariffs are customized according to the admin's specifications and can be changed at any time.The justified price charged for water service to cover the reasonable cost of providing the service.
                </p>

                </div>

                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>Remote monitoring</p>
                </button>

                <p className='text-sm text-white'>
                Allows utility providers and consumers to monitor water usage remotely, providing convenience and timely access to information.
                </p>

                </div>

            

            </div>
            <div className=' flex flex-col space-y-6  md:w-1/2 p-2'>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>Predictive maintance</p>
                </button>

                <p className='text-sm text-white'>
                Uses data analytics to predict and schedule maintenance, reducing downtime and extending infrastructure.
                </p>

                </div>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-4 h-4 text-white '/>
                    <p className='text-[12px]  text-white'>Scalability</p>
                </button>

                <p className='text-sm text-white'>
                Easily scalable to accommodate growing populations and expanding service areas, making it a future-proof investment.
                </p>

                </div>
                <div className=' space-y-2'>

                    <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                        <BadgeCheck className='w-4 h-4 text-white '/>
                        <p className='text-[12px]  text-white'>Regulatory compliance</p>
                    </button>

                    <p className='text-sm text-white'>
                    Helps utility providers comply with water usage regulations and reporting requirements by providing accurate and timely data.
                    </p>

                </div>

            

            </div>
        </div>

        </div>
        
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page