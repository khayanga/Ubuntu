"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'

const Contact = () => {
 
  return (
    <div className='conatiner py-10  mx-auto'>

        <div className='max-w-lg mx-auto '>
            <h1 className='text-sky-600 font-semibold text-[28px] md:text-[30px] text-center'>We would like to keep you updated on a regular basis. </h1>
        </div>

        <form className='max-w-lg mx-auto flex flex-col md:flex-row gap-4  md:gap-5 py-4 mt-3 justify-center items-center '>
            <input type='email'
            placeholder='example@gmail.com'
             required
             
             className='px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'/>

          <Button variant="default" className="px-6 " >
            Subscribe
            </Button>
        </form>
        
    </div>
  )
}

export default Contact