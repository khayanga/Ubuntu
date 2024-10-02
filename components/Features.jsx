'use client'
import { cardData } from '@/data'
import React from 'react'
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
          <Card 
            key={card.id} 
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] py-4 
            text-center flex flex-col justify-between
            bg-gradient-to-b from-white to-sky-200 "
            style={{ borderTopRightRadius: '24px', borderBottomLeftRadius: '24px' }}
          >
            <CardContent className="text-white">
              <div className="h-[250px] md:h-[150px] px-4 mb-2 ">
                <Image
                  width={150}  
                  height={150} 
                  alt='cardimage' 
                  src={card.image} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h4 className='my-2 text-sky-600 font-medium'>{card.title}</h4>
              <p className='text-sm text-gray-800'>{card.description}</p>
            </CardContent>
          </Card>
        ))}
        </div>

    </div>
  )
}

export default Features