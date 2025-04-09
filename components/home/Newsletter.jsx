
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-600 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"></div>
      </div>
      
      <div className=" container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform your water management?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team today to learn how our smart solutions can help you conserve water, 
            reduce costs, and build a more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" variant="default" className="bg-blue-50 text-sky-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all">
              <Link href="/water-atms" className="inline-flex items-center">
                Explore Products 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="dark:border-blue-200 dark:text-blue-100 border-blue-700 text-blue-300 bg-gray-900 hover:shadow-lg hover:-translate-x-1">
              <Link href="/schedule-demo">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;