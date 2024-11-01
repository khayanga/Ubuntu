"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BackgroundBeams } from './ui/background-beams';
import Image from 'next/image';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://waterhub.africa/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      const result = await res.json();
      if (res.ok) {
        setStatus('Thank you for contacting us!');
        setFormData({ name: '', email: '' }); 
        console.log('Success!');
      } else {
        setStatus(result.message || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus("You have already subscribed");
    }
  };
  
  return (
    <div className='relative antialiased w-full mt-10 md:mb-28 
      shadow-2xl'>
      <Image
          src="/images/water.jpg"
          layout="fill"
          className="w-full h-full  rounded-xl object-cover mix-blend-overlay opacity-55"
          alt="Contact background image"
        />

      <div className='container md:pt-32 py-8 mx-auto  relative z-10 '>
      
        <div className='max-w-lg mx-auto  '>
          <h1 className='text-[28px] font-bold text-white text-center'>
          We would like to keep you updated on a regular basis join our news letter.
          </h1>
        </div>

        <form 
          className='max-w-lg mx-auto flex flex-col  gap-4 md:gap-6 py-4 mt-3 mb-14 justify-center items-center'
          onSubmit={handleSubmit}
        >

          <div className='flex gap-2 flex-col'>
          <input
            type='text'
            name='name' 
            placeholder='Enter full name'
            required
            value={formData.name}
            onChange={handleChange}
            className='px-4 py-2  relative z-10 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'
          />
          <input
            type='email'
            name='email' 
            placeholder='example@gmail.com'
            required
            value={formData.email}
            onChange={handleChange}
            className='px-4 py-2  relative z-10 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'
          />

          </div>
          

          <Button  className="px-6 relative z-10 bg-sky-500 text-white mt-4">
            Subscribe
          </Button>
        </form>

        {status && <p className="text-center mt-4 text-white">{status}</p>}
      </div>

    {/* <BackgroundBeams/> */}

    </div>
    
  );
};

export default Contact;

