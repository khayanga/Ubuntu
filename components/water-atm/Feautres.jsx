import { atmFeautreCards } from "@/data";
import Image from "next/image";
import React from "react";

const Feautres = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/50  lg:py-32 md:py-24 py-16  mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full mix-blend-multiply blur-3xl opacity-70 dark:opacity-30"></div>
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full mix-blend-multiply blur-3xl opacity-70 dark:opacity-30"></div>
      </div>

      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sky-600 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 mb-4">
            <span className="text-sm font-medium">Water ATM Benefits</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-sky-600">
            Seamless Water Access
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our cutting-edge technology offers innovative solutions for modern
            water challenges, delivering efficient, reliable, and sustainable
            water management systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {atmFeautreCards.map((feature, index) => (
            <div
              key={index}
              className="bg-sky-50 dark:bg-gray-800 border border-sky-100 dark:border-gray-700 rounded-xl p-5 shadow-md transition-transform duration-500 transform hover:scale-105 flex flex-col items-center text-center"
            >
              
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={70}
                  height={150}
                  className="object-contain w-full h-[150px]"
                />
              </div>
              <h4 className="text-lg font-semibold text-sky-700 dark:text-sky-400">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feautres;
