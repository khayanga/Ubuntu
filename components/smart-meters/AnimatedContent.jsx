
"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from 'react';
import Banner from "./Banner";
import MetersSpecs from "./MetersSpecs";
import MeterOverview from "./MeterOverview";
import PricingTable from "./PricingTable";
import MeterCta from "./MeterCta";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

const AnimatedPageContent = ({ techName, techData }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <AnimatedSection>
          <Banner technology={techName} />
        </AnimatedSection>
        
        
        <AnimatedSection>
          <MeterOverview technology={techName}/>
        </AnimatedSection>
        
        <AnimatedSection>
          <MetersSpecs technology={techName} />
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="py-16">
            {techData && <PricingTable data={techData} />}
          </div>
        </AnimatedSection>
        <AnimatedSection>
            <MeterCta technology={techName}/>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default AnimatedPageContent;