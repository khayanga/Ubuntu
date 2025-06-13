import { payments } from '@/data'
import Image from 'next/image'
import React from 'react'

const Payment = () => {
  return (
    <section className=" lg:py-32 md:py-24 py-16  px-4 sm:px-6 lg:px-8">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-sky-600">
                Payment Steps
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our innovative payments designed for efficient and
                sustainable water management
              </p>
            </div>
    
            <div className="space-y-24">
              {payments.map((payment, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    payment.reverse
                      ? ""
                      : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                  }`}
                >
                  {/* Text Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-sky-600">
                      {payment.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {payment.description}
                    </p>
                   
                   
                  </div>
    
                  <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-900 dark:bg-gray-800">
                    <Image
                      src={payment.image}
                      alt={payment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`${payment.imageClass} p-4`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Payment