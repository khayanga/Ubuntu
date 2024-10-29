'use client'
import { cardData } from '@/data'
import React from 'react'
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'

const Features = () => {
  return (
    <div className='max-w-6xl mx-auto mt-3 md:mt-10 pb-4 '>
        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Features</h1>

        <div className='flex flex-col md:flex-row  items-center justify-between px-4 gap-4 pb-2'>
        {cardData.map((card) => (
        <motion.div
        whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, type: 'tween' }}>
          <Card 
            key={card.id} 
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] py-4 
            text-center flex flex-col justify-between
            bg-gradient-to-b from-white to-sky-200 "
            style={{ borderTopRightRadius: '24px', borderBottomLeftRadius: '24px' }}
          >
            <CardContent className="text-white">
              <div className="h-[180px] md:h-[140px] px-4 mb-2 ">
                <Image
                  width={140}  
                  height={140} 
                  alt='cardimage' 
                  src={card.image} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h4 className='my-2 text-sky-600 font-medium'>{card.title}</h4>
              <p className='text-sm text-gray-800'>{card.description}</p>
            </CardContent>
          </Card>

        </motion.div>
          
        ))}
        </div>

    </div>
  )
}

export default Features