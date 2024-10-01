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

const Features = () => {
  return (
    <div className='container mx-auto mt-3 md:mt-10'>
        <h1 className='text-sky-600 text-[24px] font-normal py-6 text-center'>Features</h1>

        <div className='bg-red  flex flex-col md:flex-row bg-red-200 justify-between px-4
         gap-8 '>
            {cardData.map((card) => (
                <Card className="w-[350px]"
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                />
             ))}
        </div>
    </div>
  )
}

export default Features