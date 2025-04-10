'use client'
import DemoBanner from '@/components/demo/DemoBanner';
import Form from '@/components/demo/Form';
import Footer from '@/components/Footer';
import DemoForm from '@/components/forms/DemoForm';
import Navbar from '@/components/Navbar';
import {motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

const page = () => {

      const AnimatedSection = ({ children }) => {
        const ref = useRef(null);
        const isInView = useInView(ref);
      
        const variants = {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
        };
      
        return (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
            variants={variants}
          >
            {children}
          </motion.div>
        );
      };
  return (
    <main className="min-h-screen flex flex-col">
    <Navbar/>
    <div className="flex-grow ">
      <AnimatedSection><DemoBanner/></AnimatedSection>
      <AnimatedSection><Form/></AnimatedSection>
      
    </div>
    <Footer/>
  </main>
  )
}

export default page