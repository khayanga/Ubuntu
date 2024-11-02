"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import { Spotlight } from "@/components/ui/spotlight";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
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

    <div className="relative bg-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">


        <Image
          src="/images/water.jpg"
          layout="fill"
          className="w-full h-full  object-cover mix-blend-overlay opacity-55"
          alt="Contact background image"
        />
      
      <div className="max-w-7xl w-full relative z-10">
        <Navbar />
        <AnimatedSection><Hero /></AnimatedSection>
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Products /></AnimatedSection>
        <AnimatedSection><Features /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
        
      </div>
      <Footer />
    </div>
  );
}



