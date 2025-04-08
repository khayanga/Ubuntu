"use client";
import Features from "@/components/home/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/home/Products";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
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
    <div className="min-h-screen flex flex-col mx-auto">
      <Navbar />
      <div>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <Products />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Newsletter />
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
}
