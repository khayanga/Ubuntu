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
        <div className='container flex flex-col items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-10'>
        <div className='md:w-1/2'>
            <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px]'>Digital  Water Meters .</h1>
            <p className='text-sm  text-white mt-3'>
            Our cutting-edge Smart Water Meters are designed to revolutionize how you manage and monitor water consumption. With real-time tracking, flexible payment options, and seamless integration with digital platforms, you gain full control and visibility over your water usage. Whether you're a homeowner, a business, or a utility provider, our meters provide the accuracy, convenience, and efficiency you need to make informed decisions and reduce waste.
            Experience the future of water management with intelligent, automated solutions tailored to meet your needs.
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
        {atmData.map((atm) => (
          <Card 
            key={atm.id} 
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