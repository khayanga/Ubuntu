import { payments } from "@/data";
import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <section className=" lg:py-32 md:py-24 py-16  bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900 px-4 sm:px-6 lg:px-8 relative ">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
      {/* <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sky-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div> */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sky-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
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

        <div className="relative w-full md:w-[680px]  mx-auto ">
          <Image
            src="/images/payment.png"
            alt="payment"
            width={500}
            height={600}
            className="object-contain w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;
