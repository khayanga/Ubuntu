"use client"
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
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
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const page = () => {
  const words = `Digital Water Meters.`;

  const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    const variants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  };
  return (
    
    
    <main className='relative bg-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>

        <Image
          src="/images/water.jpg"
          layout="fill"
          className="w-full h-full  object-cover mix-blend-overlay opacity-55"
          alt="Contact background image"
        />
      <div className="max-w-7xl w-full relative z-10">
        <Navbar/>
        <AnimatedSection>
        <div className=' max-w-6xl container flex flex-col items-center md:flex-row md:space-x-40 mx-auto px-6 md:px-2 mt-10 md:mb-32'>
        <div className='md:w-1/2'>
        <TextGenerateEffect className="text-[28px] md:text-[30px] mb-2 text-sky-600"  duration={2} filter={false} words={words}/>
            <p className='text-sm  text-white mt-3 leading-normal'>
            Introducing our Digital Water Meters, cutting-edge devices designed to provide accurate and real-time tracking of water consumption. Engineered with advanced smart technology, these meters offer precise measurements and insightful data analytics, empowering users to monitor and manage their water resources with ease.
              Our Digital Water Meters facilitate efficient water management by providing remote monitoring capabilities, allowing users to track usage patterns and identify potential leaks or inefficiencies instantly. This proactive approach not only conserves water but also helps reduce costs for households and businesses alike.
              With a focus on sustainability and resource optimization, our Digital Water Meters are essential tools for fostering responsible water usage in communities across Africa. Join us in our mission to promote transparency and efficiency in water consumption, ensuring a brighter, more sustainable future for all.
            </p>
        </div>
        <div className=' '>
            <Image src="/images/pic2.png" width={350} height={250} alt='picure1'/>
        </div>
        </div>

        </AnimatedSection>
       
        {/* Features */}
        <AnimatedSection>
        <div className=' max-w-6xl mx-auto mt-10 md:mb-32 pb-4 '>
        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Features</h1>

        <div className='flex flex-col md:flex-row  items-center justify-between px-4 gap-4 pb-2'>
        {atmData.map((atm) => (
          <motion.div whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, type: 'tween' }}>
            <Card 
            key={atm.id} 
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] py-4 
            text-center flex flex-col justify-between
            bg-white/90 backdrop-blur-lg"
            style={{ borderTopRightRadius: '24px', borderBottomLeftRadius: '24px' }}
          >
            <CardContent className="text-white">
              <div className="h-[180px] md:h-[140px] px-4 mb-2 ">
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

          </motion.div>
          
        ))}
        </div>


        </div>


        </AnimatedSection>
        
        {/* Benefits */}
        <AnimatedSection>
        <div className=' container mx-auto mt-10 md:mb-32 pb-4 max-w-6xl '>
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

        </AnimatedSection>
        
        
        <AnimatedSection><Contact /></AnimatedSection>
        <Footer/>
    </div>

    </main>
    
  )
}

export default page