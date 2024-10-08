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

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setShowConfetti(true); // Show confetti
        setIsSubmitted(true); // Hide form
        setFormData({ name: '', email: '', message: '' }); // Clear form

        // Hide confetti after 3 seconds
        setTimeout(() => {
          setShowConfetti(false);
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
      {showConfetti && <Confetti />} {/* Show confetti */}
      <Navbar />

      <div className="max-w-sm w-full mx-auto mt-12">
      <h1 className='text-sky-600
            font-semibold text-[28px] md:text-[30px] text-center'>Reach out to us for a seamless experience !!.</h1>
      </div>

     

      {!isSubmitted ? (
        <Card className="w-full max-w-md my-8 mx-auto bg-gradient-to-b from-sky-400 to-sky-600">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Contact Us</CardTitle>
            <CardDescription  className="text-gray-700">
              Feel free to reach us out here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-3">
              <div className="grid gap-1">
                <Label htmlFor="name">Name</Label>
                <Input
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
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>

              <Button type="submit" className="bg-gray-900 text-white" >
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        // Show success message when form is submitted
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

