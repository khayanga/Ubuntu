"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Contact = () => {
  const words = `We would like to keep you updated on a regular basis.`;
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
    <div className='container py-10 mx-auto my-8'>
      <div className='max-w-lg mx-auto'>
        <TextGenerateEffect className="text-center text-sky-600" duration={2} filter={false} words={words} />
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
          className='px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'
        />
        <input
          type='email'
          name='email' 
          placeholder='example@gmail.com'
          required
          value={formData.email}
          onChange={handleChange}
          className='px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'
        />

        </div>
        

        <Button variant="default" className="px-6">
          Subscribe
        </Button>
      </form>

      {status && <p className="text-center mt-4 text-sky-600">{status}</p>}
    </div>
  );
};

export default Contact;

