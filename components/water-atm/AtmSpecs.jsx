import React from "react";
import Specs from "./Specs";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import {
  useCases,
} from "@/data";


const AtmSpecs = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">
          Technical Details
        </h2>
        <Tabs
          defaultValue="specifications"
          className="w-full mx-auto max-w-3xl"
        >
          <TabsList className="flex  md:flex-row  items-center w-full justify-evenly ">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
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
        </Tabs>
      </div>
    </section>
  );
};

export default AtmSpecs;
