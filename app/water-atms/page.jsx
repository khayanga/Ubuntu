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
import { meterData, pricingData } from '@/data'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const page = () => {
  const words =`Smart Water Atm.`
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
    <main className="relative bg-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-7 px-5">
      <Image
          src="/images/water.jpg"
          layout="fill"
          className="w-full h-full  object-cover mix-blend-overlay opacity-55"
          alt="Contact background image"
        />
      <div className="max-w-7xl w-full z-10">
        <Navbar/>
        {/* hero */}
        <AnimatedSection>
        <div className='container flex flex-col items-center md:flex-row gap-3 md:space-x-40 mx-auto px-6 md:px-2  mt-10 md:mb-32 max-w-6xl'>
        <div className='md:w-1/2'>
        <TextGenerateEffect className="text-[28px] md:text-[40px]  mb-2 text-sky-600"  duration={2} filter={false} words={words}/>
            <p className='text-sm  md:text-lg md:tracking-wider text-white leading-normal'>
            Our Smart Water ATMs offer secure, easy access to clean water, promoting sustainability and transparency. Designed by Ubuntu Waterhub Africa, they empower local entrepreneurs to serve communities effectively with user-friendly, efficient, and environmentally responsible water dispensing solutions.
            </p>
        </div>
        <div className=' '>
            <Image src="/images/pic1.png" width={250} height={150} alt='picure1'/>
        </div>
        </div>

        </AnimatedSection>
        
        {/* Features */}
        <AnimatedSection>
        <div className='max-w-6xl mx-auto mt-10 md:mb-32 pb-4 '>
        <h1 className='text-sky-600 text-[24px] font-bold py-6 text-center'>Features</h1>

        <div className='flex flex-col md:flex-row  items-center justify-between px-4 gap-4  pb-2'>
        {meterData.map((meter) => (
          <motion.div  
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, type: 'tween' }}>
            <Card 
            key={meter.id} 
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] py-4 
            text-center flex flex-col justify-between
            bg-white/90 backdrop-blur-lg "
            style={{ borderTopRightRadius: '24px', borderBottomLeftRadius: '24px' }}
          >
            <CardContent className="text-white">
              <div className="h-[180px] md:h-[140px] px-4 mb-2 ">
                <Image
                  width={140}  
                  height={140} 
                  alt='meterimage' 
                  src={meter.image} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h4 className='my-2 text-sky-600 font-medium'>{meter.title}</h4>
              <p className='text-md text-gray-800'>{meter.description}</p>
            </CardContent>
          </Card>

          </motion.div>
          
        ))}
        </div>

        </div>

        </AnimatedSection>
        

        {/* Benefits */}
        <AnimatedSection>
        <div className='container mx-auto mt-10 md:mb-32 pb-4 max-w-6xl '>
        <h1 className='text-sky-600 text-[24px] font-bold py-6 text-center'>Benefits</h1>

        <div className='flex flex-col md:flex-row  items-center justify-between  gap-4 md:gap-10 pb-2'>
            <div className=' flex flex-col space-y-6  md:w-1/2 p-2'>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-6 h-6 font-bold text-white '/>
                    <p className='text-[16px]  text-white'>24/7 Access to clean water</p>
                </button>

                <p className='text-sm  md:text-lg  text-white'>Provides constant access to clean water, even in areas with limited infrastructure.</p>

                </div>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-6 h-6 font-bold text-white '/>
                    <p className='text-[16px]  text-white'>Enterprenuer empowerment</p>
                </button>

                <p className='text-sm  md:text-lg  text-white'>Enables real-time system control, monitoring, and management for water business entrepreneurs.</p>

                </div>

            

            </div>
            <div className=' flex flex-col space-y-6 md:w-1/2 p-2'>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2  p-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-600'>
                    <BadgeCheck className='w-6 h-6 font-bold text-white '/>
                    <p className='text-[16px]  text-white'>Convinient Payment Systems</p>
                </button>

                <p className='text-sm  md:text-lg  text-white'>Integration with mobile payment technologies like Mpesa allows easy water payment via smartphones.</p>

                </div>
                <div className=' space-y-2'>

                <button className='flex flex-row space-x-2 bg-gradient-to-r from-sky-400 to-sky-600 p-2 rounded-full'>
                    <BadgeCheck className='w-6 h-6 font-bold text-white '/>
                    <p className='text-[16px]  text-white'>Sustainable and Cost-Effective</p>
                </button>

                <p className='text-sm  md:text-lg  text-white'>Spill proof design minimizes water wastage, and solar power compatibility enhances sustainability.</p>

                </div>

            

            </div>
        </div>

        </div>

        </AnimatedSection>
        
        {/* Pricing */}
        <AnimatedSection>
        <div className='w-full mx-auto mt-10 md:mb-28 pb-12 bg-white/10 backdrop-blur-lg shadoow-2xl rounded-lg max-w-5xl'>
        <h1 className='text-white text-[24px] font-bold py-6 text-center'>Pricing</h1>

        <div className=' container mx-auto  max-w-6xl flex flex-col md:flex-row  justify-center items-center  px-4 gap-4 md:gap-8 pb-2'>
        <BackgroundBeams/>
        {pricingData.map((plan,index) => (
          <Card 
            key={index} 
            className="w-full max-w-[380px]  shadow-xl relative z-10
            text-center flex flex-col justify-between bg-gradient-to-b from-sky-300 to-sky-600 pt-4 rounded-[12px]
             "
            
          >
            <CardHeader>
                <CardTitle className="text-gray-900">{plan.price}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800">
              <p className='text-md text-gray-800'>{plan.title}</p>
               <ul className="text-center mt-2 space-y-2 ">
                  {plan.descriptions.map((description, i) => (
                    <div className="flex flex-row space-x-2 justify-center mt-4">
                       <BadgeCheck className='w-6 h-6 font-bold text-white '/>
                    <li key={i} 
                    className="text-sm  md:text-lg  text-white ">
                      {description}
                    </li>

                    </div>
                    
                  ))}
                </ul>
                <Link href="/contact">
                <button className=' bg-gray-800 text-white p-2 text-[14px] rounded-md mt-6'>
                    Get started
                </button>
                </Link>
                
            </CardContent>
          </Card>
        ))}
        </div>

        </div>

        </AnimatedSection>
        

        {/* Steps */}
        <AnimatedSection>
        <div className='container flex flex-col items-center gap-11 md:flex-row md:space-x-20 mx-auto px-6 md:px-2  mt-10 md:mb-32 max-w-6xl'>
        <div className=" md:w-2/5 ">
            <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px]'>Mpesa pay steps.</h1>
            <p className='text-sm text-white  md:text-lg md:tracking-wider'>
            The ATM utilises both the Mpesa and tag pay to facilitate payment for water. 
            The following are the steps towards using the mpesa pay mode.
            </p>
        </div>
        <div className=' md:w-3/5'>
            <Image src="/images/steps.png" width={1500} height={500} alt='picure1'
            className="object-cover w-full h-full"/>
        </div>
        </div>


        </AnimatedSection>
        
        {/* Tag pay */}
        <AnimatedSection>
        <div className='container flex flex-col items-center gap-11 md:flex-row md:space-x-20 mx-auto px-6 md:px-2 mt-10 md:mb-32 max-w-6xl'>
        <div className=" md:w-2/5 ">
            <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px]'>Tag pay steps.</h1>
            <p className='text-sm text-white md:text-lg md:tracking-wider'>
            The ATM utilises both the Mpesa and tag pay to facilitate payment for water. 
            The following are the steps towards using the tag.
            </p>
        </div>
        <div className=' md:w-3/5'>
            <Image src="/images/tag_pay.png" width={1500} height={500} alt='picure1'
            className="object-cover w-full h-full"/>
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
