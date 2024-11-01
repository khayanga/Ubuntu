'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Confetti from 'react-confetti';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Image from 'next/image';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.waterhub.africa/api/v1/client/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData) 
      });
  
      const result = await res.json();
      if (res.ok) {
        setStatus('Thank you for contacting us!');
        setShowConfetti(true); 
        setIsSubmitted(true); 
        setFormData({ name: '', email: '', subject:'', message: '' }); 
        console.log('succes!')
  
        
        setTimeout(() => {
          setShowConfetti(false)
        }, 3000);
  
      } else {
        setStatus('Failed to send message');
      }
    } catch (error) {
      setStatus('Error occurred: ' + error.message);
    }
  };
  

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      {showConfetti && <Confetti />} 
      <Navbar />
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/call.jpg"
          layout="fill"
          className="w-full h-full  object-cover mix-blend-overlay opacity-100"
          alt="Contact background image"
        />
      {/* hero section */}
      <div className="max-w-lg w-full mx-auto  py-8 px-6 z-20 relative ">
     
      <h1 className="text-center text-[28px] font-bold text-sky-600">
      Reach out to us for a seamless experience !!
      </h1>
      <p className='text white mt-4 leading-normal text-center '>We’re here to answer any questions, discuss your unique needs, or explore how we can work together. Our team is dedicated to providing prompt and efficient support, 
        ensuring your experience with us is seamless from start to finish.</p>

        
      </div>

     

      </div>

      {!isSubmitted ? (
        // contact forms
        <div className='px-6 relative antialiased flex flex-col md:flex-row mx-auto justify-center items-center gap-2 md:gap-20 bg-gray-900 pb-6 md:mb-10'>
           <BackgroundBeams/>

           <div className='p-2  my-8  '>
              <div className='w-full md:max-w-md  '>
                <h2 className='text-white text-[24px] font-bold '>
                  How can we help You ?
                </h2>
                <p className='text-sm my-2 leading-normal'>
                Whether you’re interested in learning more about our services, need technical assistance, or have a specific query, we’d love to help. 
                Simply fill out the contact form below or use any of the options to get in touch.
                </p>
            </div>
           </div>
          <Card className="w-full z-10 max-w-lg md:my-16  rounded-md
            ">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Contact Us</CardTitle>
            <CardDescription  className="text-white">
              Feel free to reach us out here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-3 relative z-10">
              <div className="grid gap-1">
                <Label htmlFor="name">Name</Label>
                <input
                 className='px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="email">Email</Label>

                <input type='email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                  placeholder='example@gmail.com'
                  required  
              className='px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'/>

              </div>
              <div className="grid gap-1">
                <Label htmlFor="subject">Subject</Label>

                <input type='subject'
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                  placeholder='Title'
                  required  
              className='px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'/>
              </div>
              <div className="grid gap-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                 className='bg-gradient-to-r from-sky-400 to-sky-600 placeholder:text-white text-white rounded-md focus:outline-none'
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>

              <Button type="submit" className="bg-sky-500 text-white mt-4" >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        </div>
        
      ) : (
        
        <div className="mt-4 text-center">
          <Card className="w-full max-w-sm my-8 mx-auto bg-gradient-to-r from-sky-400 to-sky-600 ">
            <CardContent className="text-white text-center py-12">
              {status}
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Page;

