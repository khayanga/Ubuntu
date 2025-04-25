"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Banner from "@/components/water-atm/Banner";
import AtmOverview from "@/components/water-atm/AtmOverview";
import AtmSpecs from "@/components/water-atm/AtmSpecs";
import AtmCta from "@/components/water-atm/AtmCta";
const page = () => {
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
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
        <AnimatedSection>
          <Banner />
        </AnimatedSection>
        <AnimatedSection>
          <AtmOverview />
        </AnimatedSection>
        <AnimatedSection>
          <AtmSpecs />
        </AnimatedSection>
        <AnimatedSection>
          <AtmCta />
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  );
};

export default page;
