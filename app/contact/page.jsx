"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/contact/Banner";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import FormSection from "@/components/contact/FormSection";
import Faq from "@/components/contact/Faq";

const Page = () => {
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
          <FormSection />
        </AnimatedSection>
        <AnimatedSection>
          <Faq />
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
