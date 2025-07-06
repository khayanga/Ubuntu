import React from 'react'
import ProductCustomizer from '../Customizer'
import { atmFeatures } from '@/data'
import { Button } from '../ui/button'
import Link from 'next/link'

const AtmCta = () => {
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 ">
              Ready to upgrade your water management?
            </h2>
            <p className="text-blue-100 mb-8">
              Customize your smart water meter solution and receive a personalized quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <ProductCustomizer 
                  productName="Smart Water Atm" 
                  productType="ATM" 
                  features={atmFeatures} 
                />
              <Button asChild variant="outline">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AtmCta