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
import Success from "@/components/home/Success";

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
        className="w-full"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow ">
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
          <Success />
        </AnimatedSection>

        <AnimatedSection>
          <Newsletter />
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
