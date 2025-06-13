"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Banner from "@/components/smart-meters/Banner";
import MeterOverview from "@/components/smart-meters/MeterOverview";
import MetersSpecs from "@/components/smart-meters/MetersSpecs";
import MeterCta from "@/components/smart-meters/MeterCta";
import { pricingData } from "@/data";
import PricingTable from "@/components/smart-meters/PricingTable";

const page = () => {
  const nbIotData = pricingData.find(item => item.technology === 'NB-IoT');
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
          <Banner technology="NB-IoT"  />
        </AnimatedSection>
        <AnimatedSection>
          <MeterOverview />
        </AnimatedSection>
        <AnimatedSection>
          <MetersSpecs />
        </AnimatedSection>
        <AnimatedSection>
          {nbIotData && <PricingTable data={nbIotData} />}
        </AnimatedSection>
        <AnimatedSection>
          <MeterCta />
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  );
};

export default page;
