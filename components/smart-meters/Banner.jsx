import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import MeterCustomizer from './Customizer'
import { waterMeterFeatures } from '@/data'
const Banner = () => {
   
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-600 -z-10"></div>
        <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"></div>
      </div>

      <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Smart Water Meters
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Advanced metering technology for precise measurement, leak detection, and consumption monitoring.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <MeterCustomizer 
                  productName="Smart Water Meter" 
                  productType="water-meter" 
                  features={waterMeterFeatures} 
                />
                <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-200 text-sky-600 hover:bg-blue-50 dark:border-sky-600 dark:text-blue-300 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Link href="/schedule-demo">Schedule Demo</Link>
              </Button>
              </div>
            </div>
          </div>

    </section>
  )
}

export default Banner