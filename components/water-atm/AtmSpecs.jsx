import React from "react";
import Specs from "./Specs";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import { serviceSupport, useCases } from "@/data";

const AtmSpecs = () => {
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">
          Technical Details
        </h2>
        <Tabs
          defaultValue="specifications"
          className="w-full mx-auto max-w-4xl"
        >
          <TabsList className="w-full flex overflow-x-auto md:grid md:grid-cols-3 gap-1 md:gap-4">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
            <TabsTrigger value="service">Service & Support</TabsTrigger>
          </TabsList>
          <TabsContent
            value="specifications"
            className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
          >
            <Specs />
          </TabsContent>
          <TabsContent
            value="use-cases"
            className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 text-sky-600">Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-lg p-5"
                  >
                    <h4 className="font-medium text-lg mb-2">
                      {useCase.category}
                    </h4>
                    <ul className="space-y-2">
                      {useCase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-sky-600 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="service"
            className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 text-sky-600">
                Service & Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceSupport.map((service, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-lg mb-3">
                      {service.category}
                    </h4>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-sky-600 mr-2">✓</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AtmSpecs;
