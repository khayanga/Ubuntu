import { ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";
import React from "react";
import { LuBanknote, LuDroplets, LuTimer } from "react-icons/lu";
const AtmOverview = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-sky-600">
              Product Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ubuntu Water ATMs offer an innovative solution to water
              accessibility challenges, providing 24/7 access to clean, purified
              drinking water through a convenient self-service model. Designed
              for durability and reliable operation in various environments, our
              Water ATMs are ideal for communities, campuses, transport hubs,
              and public spaces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-2">
                <ChartNoAxesCombined className="h-5 w-5 text-sky-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Scalability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Can grow with community needs
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <LuBanknote className="h-5 w-5 text-sky-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Multiple Payment Options</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Cash,mobile & RFID
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <LuTimer className="h-5 w-5 text-sky-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">24/7 Availability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Continuous access to clean water
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <LuDroplets className="h-5 w-5 text-sky-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Water Conservation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Low waste water production
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-md bg-blue-50  dark:bg-gray-800 w-full max-w-md">
              <Image
                src="/images/atm2.png"
                alt="Smart water management technology"
                width={400}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtmOverview;
