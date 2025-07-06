"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { animate, inView, stagger } from "framer-motion";

const Hero = () => {
  const words = `Smart Water Management Solutions.`;
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setIsVisible(true);
    inView(".hero-section", ({ target }) => {
      animate(
        target.querySelectorAll(".animate-item"),
        {
          opacity: [0, 1],
          transform: ["translateY(20px)", "translateY(0)"],
        },
        {
          delay: stagger(0.1),
          duration: 0.8,
          easing: [0.25, 0.1, 0.25, 1],
        }
      );

      return () => {};
    });

    animate(
      ".hero-image-container",
      {
        x: [0, -10, 0],
      },
      {
        duration: 5,
        easing: "ease-in-out",
        repeat: Infinity,
      }
    );
  }, []);
  

useEffect(() => {
  const newParticles = Array.from({ length: 15 }).map(() => ({
    width: `${Math.random() * 10 + 5}px`,
    height: `${Math.random() * 10 + 5}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
  }));
  setParticles(newParticles);
}, []);

  return (
    <section className="relative overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-blue-100 blur-3xl opacity-30 dark:opacity-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] rounded-full bg-blue-100 blur-3xl opacity-20 dark:opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-200 blur-3xl opacity-10 dark:opacity-5 animate-pulse"></div>
        <div className="absolute inset-0">
          {particles.map((style, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-sky-500 opacity-20"
              style={style}
            />
          ))}
        </div>

      </div>

      <div className="container py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sky-600 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 mb-4 animate-item">
              <p className="text-sm font-medium flex items-center ">
                <span className="h-2 w-2 rounded-full bg-sky-600 mr-2"></span>
                Industry-Leading Water Technology
              </p>
            </div>
            <TextGenerateEffect
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight heading-gradient text-sky-600"
              duration={2}
              filter={false}
              words={words}
            />

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl animate-item">
              Revolutionize water management with our state-of-the-art smart
              meters and ATMs. Efficient, reliable, and sustainable solutions
              for the modern world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 animate-item">
              <Button
                asChild
                size="lg"
                className="bg-sky-600 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Link href="/water-meters">Explore Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-200 text-sky-600 hover:bg-blue-50 dark:border-sky-600 dark:text-blue-300 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[350px] md:h-[400px] lg:h-[450px]  overflow-hidden  group hero-image-container">
            <div className="absolute inset-0 z-10"></div>
            <Image
              src="/images/pic2.png"
              alt="Smart water management technology"
              width={800}
              height={600}
              className="w-full h-full object-contain "
              priority
            />
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 border-4 border-sky-300/20 rounded-full z-10 opacity-70"></div>
            <div className="absolute bottom-16 left-4 w-10 h-10 md:w-12 md:h-12 border-2 border-sky-400/30 rounded-full z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
