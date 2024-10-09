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

const Page = () => {

  const words = `Reach out to us for a seamless experience !!.`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

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

      <div className="max-w-sm w-full mx-auto mt-12">
      <TextGenerateEffect className="text-center" duration={2} filter={false} words={words}/>
      </div>

     

      {!isSubmitted ? (
        <Card className="w-full max-w-lg my-8 mx-auto bg-sky-950">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Contact Us</CardTitle>
            <CardDescription  className="text-white">
              Feel free to reach us out here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-3">
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
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
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

