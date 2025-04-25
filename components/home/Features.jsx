import React from 'react';
import { Shield, BarChart, Smartphone, Droplets, Clock, Zap } from 'lucide-react';
import { features } from '@/data';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700/50 card-hover backdrop-blur-sm">
      <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-50 text-sky-600 dark:bg-blue-900/30 dark:text-water-blue-400 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900/50  lg:py-32 md:py-24 py-16  mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full mix-blend-multiply blur-3xl opacity-70 dark:opacity-30"></div>
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full mix-blend-multiply blur-3xl opacity-70 dark:opacity-30"></div>
      </div>
      
      <div className='container' >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sky-600 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 mb-4">
            <span className="text-sm font-medium">Innovative Features</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-sky-600">
            Revolutionizing Water Management
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our cutting-edge technology offers innovative solutions for modern water challenges,
            delivering efficient, reliable, and sustainable water management systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;