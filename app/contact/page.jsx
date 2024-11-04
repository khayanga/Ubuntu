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
import { Mail, MapPin, Phone } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Page = () => {

  const mapContainerStyle = {
    width: '85%',
    height: '400px'
  };
  // -1.3024426362444637, 36.838232092060586
  const center = {
    lat: -1.3024426362444637,  
    lng: 36.838232092060586 
  };

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
    <main className="relative  bg-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-7 px-5">

        <Image
          src="/images/water.jpg"
          layout="fill"
          className="w-full h-full  object-cover mix-blend-overlay opacity-55"
          alt="Contact background image"
        />
      <div  className="max-w-7xl w-full relative z-10">
       
        <Navbar />
        {showConfetti && <Confetti />}

         
      

      {!isSubmitted ? (

        <>
        {/* hero section */}
        <div className="max-w-4xl  bg-white/10 backdrop-blur-lg rounded-md relative z-10 w-full mx-auto md:mb-32 mt-10 mb-8 md:h-[300px] h-[350px] py-8 px-6">
         <BackgroundBeams/>
          <h1 className="text-center text-[28px] font-bold text-sky-600">
          Reach out to us for a seamless experience.
          </h1>
          <p className='text-white mt-4 md:mb-16 leading-normal text-center '>We’re here to answer any questions, discuss your unique needs, or explore how we can work together. Our team is dedicated to providing prompt and efficient support, 
            ensuring your experience with us is seamless from start to finish.</p>


        <div className="md:flex md:flex-row hidden mt-6  flex-col gap-4 md:gap-10  p-2 mb-4 justify-center items-center mx-auto">
          <div className='bg-gradient-to-b from-sky-300 to-sky-600 w-[200px] text-center p-4
          flex flex-col gap-2 justify-center items-center rounded-md '>
            <Phone className='w-8 h-8 font-bold text-gray-800' />
            <h2 className='text-[16px] font-bold tracking-wider text-gray-800'>Phone</h2>
            <p className='leading-normal text-white'> Call us directly to speak with a member of our team.</p>
          </div>


          <div className='bg-gradient-to-b from-sky-300 to-sky-600 w-[200px] text-center p-4
          flex flex-col gap-2 justify-center items-center rounded-md'>
            <Mail className='w-8 h-8 font-bold text-gray-800' />
            <h2 className='text-[16px] font-bold tracking-wider text-gray-800'>E-mail</h2>
            <p className='leading-normal text-white'> Send us an email, and we’ll respond as soon as possible.</p>
          </div>

          <div className='bg-gradient-to-b from-sky-300 to-sky-600 w-[200px] text-center p-4 
          flex flex-col gap-2 justify-center items-center rounded-md'>
            <MapPin className='w-8 h-8 font-bold text-gray-800' />
            <h2 className='text-[16px] font-bold tracking-wider text-gray-800'>Visit Us</h2>
            <p className='leading-normal text-white'> Find us at our office for a face-to-face conversation.</p>
          </div>

          
        </div>
    
        </div>

         
          <div className='px-4 mt-12 relative z-10  antialiased flex flex-col md:flex-row mx-auto justify-center items-center gap-2 md:gap-20  pb-6 md:mb-4'>
            
            <BackgroundBeams/>

            <div className='p-2  my-8 '>
                <div className='w-full md:max-w-md '>
                  <h2 className='text-sky-600 tracking-wide text-[24px] font-bold '>
                    How can we help You ?
                  </h2>
                  <p className='text-sm my-2  text-white leading-normal'>
                  Whether you’re interested in learning more about our services, need technical assistance, or have a specific query, we’d love to help. 
                  Simply fill out the contact form below or use any of the options to get in touch.
                  </p>
              </div>
            </div>
            <Card className="w-full z-10 max-w-lg md:my-16  rounded-md">
            <CardHeader>
              <CardTitle className="text-2xl text-sky-600">Contact Us</CardTitle>
              <CardDescription  className="text-white">
                Fill in the form below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-3 relative z-10">
                <div className="grid gap-1">
                  <Label htmlFor="name">Name</Label>
                  <input
                  className='px-4 py-2 bg-white/10 backdrop-blur-lg   placeholder:text-white text-white rounded-md focus:outline-none'
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
                    className='px-4 py-2 bg-white/10 backdrop-blur-lg placeholder:text-white text-white rounded-md focus:outline-none'/>

                </div>
                <div className="grid gap-1">
                  <Label htmlFor="subject">Subject</Label>

                  <input type='subject'
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                    placeholder='Title'
                    required  
                className='px-4 py-2 
                bg-white/10 backdrop-blur-lg placeholder:text-white text-white rounded-md focus:outline-none'/>
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                  className='
                  bg-white/10 backdrop-blur-lg placeholder:text-white text-white rounded-md focus:outline-none'
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  />
                </div>

                <Button type="submit" className="bg-sky-600 text-white mt-4" >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>

          </div>
        </>
        
        
      ) : (
        
        <div className="my-20 text-center">
          <Card className="w-full max-w-lg mt-24 mx-auto 
          bg-gradient-to-b from-sky-300 to-sky-600 ">
            <CardContent className="text-white text-center text-[28px] font-bold tracking-wider py-20">
              {status}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Map section  */}
      
      <div className="my-4 md:mb-16 relative z-10  flex items-center justify-center">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

      <Footer />
    </div>
    </main>
    
  );
};

export default Page;

