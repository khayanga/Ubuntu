import { Banknote, Check, Droplet, ShieldCheck, Zap } from "lucide-react";
import React from "react";
import Image from "next/image";
import { atmItems, meterContent } from "@/data";

const MeterOverview = ({technology="NB-IoT"}) => {
  const content = meterContent[technology] || meterContent["NB-IoT"];
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-sky-600">
              Product Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {content.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {atmItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <item.icon className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-md bg-blue-50  dark:bg-gray-800 w-full max-w-md">
              <Image
                src={content.image}
                alt="Smart water management technology"
                width={600}
                height={400}
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

export default MeterOverview;
