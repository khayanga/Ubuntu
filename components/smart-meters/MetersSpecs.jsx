import React from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import WaterMeterSpecs from "./Specs";
import { applicationsData, installationData } from "@/data";

const MetersSpecs = ({ technology = "NB-IoT" }) => {
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50 ">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">
          Technical Details
        </h2>
        <Tabs
          defaultValue="specifications"
          className="w-full mx-auto max-w-4xl"
        >
          <TabsList className="w-full flex overflow-x-auto  md:grid md:grid-cols-3 gap-1 md:gap-4">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
          </TabsList>
          <TabsContent
            value="specifications"
            className="mt-6  bg-white dark:bg-gray-900  px-2 py-1 sm:px-4 sm:py-2 rounded-lg shadow-sm"
          >
            <WaterMeterSpecs technology={technology} />
          </TabsContent>
          <TabsContent
            value="applications"
            className="mt-6 bg-white dark:bg-gray-900 px-2 py-1 sm:px-4 sm:py-2 rounded-lg shadow-sm"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 text-sky-600">
                Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 py-1 sm:px-4 sm:py-2">
                {applicationsData.map((app, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-lg p-5"
                  >
                    <h4 className="font-medium text-lg mb-2">{app.category}</h4>
                    <ul className="space-y-2">
                      {app.items.map((item, itemIndex) => (
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
            value="installation"
            className="mt-6 bg-white dark:bg-gray-900 px-2 py-1 sm:px-4 sm:py-2 rounded-lg shadow-sm"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 text-sky-600">
                Installation & Maintenance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {installationData.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-medium text-lg">Installation Process:</h4>
                <ol className="space-y-2 ml-6 list-decimal">
                  {installationData.process.map((step, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-4 mt-6">
                <h4 className="font-medium text-lg">
                  Maintenance Requirements:
                </h4>
                <ul className="space-y-2">
                  {installationData.maintenance.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-sky-600 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MetersSpecs;
